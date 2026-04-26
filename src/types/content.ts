import type { infer as zInfer } from 'astro/zod';
import { linkItemSchema } from '../content.config';

// Zodスキーマから型を推論して一元管理
export type LinkItem = zInfer<typeof linkItemSchema>;
