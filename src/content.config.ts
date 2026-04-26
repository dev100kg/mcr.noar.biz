import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const isHttpsUrl = (value: string): boolean => {
  try {
    const parsed = new URL(value);
    return parsed.protocol === 'https:';
  } catch {
    return false;
  }
};

// LinkItemスキーマを別途定義して再利用可能にする
export const linkItemSchema = z.object({
  label: z.string(),
  url: z.url().refine(isHttpsUrl, {
    message: 'url は https のみ指定できます。',
  }),
  note: z.string().optional(),
  enabled: z.boolean().default(true),
  tags: z.array(z.string()).optional(),
});

const links = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/links' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    items: z.array(linkItemSchema),
  }),
});

const settings = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/settings' }),
  schema: z.object({
    site: z.object({
      title: z.string(),
      description: z.string(),
      og: z
        .object({
          title: z.string().optional(),
          description: z.string().optional(),
          image: z.string().optional(),
        })
        .optional(),
      twitter: z
        .object({
          card: z.string().optional(),
          site: z.string().optional(),
          creator: z.string().optional(),
        })
        .optional(),
    }),
    analytics: z
      .object({
        googleAnalyticsId: z.string().optional(),
      })
      .optional(),
    hero: z.object({
      headline: z.string(),
      features: z.array(z.string()).optional(),
    }),
    brand: z
      .object({
        companyName: z.string().optional(),
      })
      .optional(),
  }),
});

export const collections = { links, settings };
