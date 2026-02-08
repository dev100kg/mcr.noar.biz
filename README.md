# 採用LP コンテンツ更新

このリポジトリは **採用LP用の簡易CMS** です。
更新は必ず以下の流れで行ってください。

更新するためにはGithubアカウントが必要です。

---

## 更新の流れ

```text
【誰でも】Issue作成
 ↓
【作業担当者】Issueからブランチ作成
 ↓
【作業担当者】Markdown編集
 ↓
【作業担当者】Pull Request作成
 ↓
【自動】文法チェック・ビルド可否チェック
 ↓
【管理者】レビュー・マージ
 ↓
【自動】デプロイ（Netlifyへ）
```

---

## 1. Issueを作る（誰でも）

- GitHubの **Issues** → **New issue** （青いボタン）
- 「求人・コンテンツ更新」を選択
- **Add a title**：例　[サイト更新] マイナビ転職のリンクを追加
- **種別**：「求人情報追加」「Wantedly記事追加」など作業内容を選択
- **変更内容**：例　未経験者の求人を追加　`https://～～～`
- 人にお願いしたいときは、「Assignees」で依頼したい人を選択

---

## 2. Issueからブランチを作る（作業者）

- Issue画面右側の Development →  **Create a branch**（リンク）
- 何も編集せず**create branch**（青いボタン）
- Developmentに作成したbranchが表示されるので、押下して遷移

![image](https://github.com/user-attachments/assets/8f50810a-1487-4241-84d1-71c8291edef8)

---

## 3. Markdownを編集する（作業者）

- GitHub上で ✏️ アイコンから編集
- 編集OK：
  - `src/content/links/jobboards.md`（求人一覧リンク集）
  - `src/content/links/wantedly.md`（Wantedlyリンク集）
  - `src/content/settings/settings.md`（ページ設定の更新用）

- 編集NG：
  - 上記以外のソースコード・設定ファイル類

---

## 4. 編集時の注意（重要）

- 先頭の `---`（frontmatter）を消さない
- `title:` や `url:` の `:` の後は半角スペース
- URLは `https://` から書く
- 編集が終了したら、右上（緑色）の `Commint changes...` を押下
- わからなかったら相談！

---

## 5. Pull Requestを作る（作業者）

- **Pull requests** → **New pull request**
- base: `main`
- compareの方には作成したbranchを選択
- PRテンプレに沿って記入し、作成

![image](https://github.com/user-attachments/assets/df470f1d-d668-4077-b052-b02574ecc53b)

---

## 6. 反映について（管理者）

- PR作成後、自動チェックが走る
- レビューOK → merge
- **merge後、自動で本番サイトに反映**

---

## 困ったら

- 無理に直さず、IssueやPRのコメントで相談してください

---

## 禁止事項

- ❌ main への直接編集・push（設定変更済）
- ❌ CIエラーを無視したmerge
