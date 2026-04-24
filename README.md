# ひだまりのヨガ 公式サイト

Jimdo で作られていた「ひだまりのヨガ」公式サイトを、Next.js App Router / TypeScript / Tailwind CSS / Vercel 前提で作り直した静的サイトです。

## 使用技術

- Next.js App Router
- TypeScript
- Tailwind CSS
- React
- Vercel

## セットアップ

```bash
npm install
```

## 開発サーバー

```bash
npm run dev
```

標準では `http://localhost:3000` で確認できます。

## ビルド

```bash
npm run build
```

## Vercel デプロイ

1. GitHub などにリポジトリを接続します。
2. Vercel で新規プロジェクトとしてインポートします。
3. Framework Preset は `Next.js` を選択します。
4. Build Command は `npm run build`、Output は Next.js の標準設定のままでデプロイできます。

## 予約URL・SNS URL の差し替え

以下のファイルにまとめています。

- `data/site.ts`

主に差し替える項目:

- `privateLessonReservationUrl`
- `saturdayLessonReservationUrl`
- `rakutenSeniorReservationUrl`
- `googleFormSeniorYogaUrl`
- `googleFormOfficeYogaUrl`
- `instagramUrl`
- `lineUrl`
- `noteUrl`
- `email`
- `url`

本番公開時は `siteConfig.url` を正式ドメインに変更してください。

## 画像の差し替え

画像は `public/images/` に配置しています。

- `public/images/hidamari-yoga-placeholder.svg`
- `public/images/instructor-placeholder.svg`
- `public/images/ogp.svg`

実写真に差し替える場合は、同じパスに画像を置くか、各コンポーネント内の `src` を変更してください。画像には必ず内容が伝わる `alt` を設定してください。

## SEO 設定

- 共通 metadata: `app/layout.tsx`
- 各ページ metadata: `app/**/page.tsx`
- sitemap: `app/sitemap.ts`
- robots.txt: `app/robots.ts`
- 構造化データ JSON-LD: `app/page.tsx`
- 旧 Jimdo URL リダイレクト: `next.config.ts`

## 主なページ

- `/`
- `/lessons`
- `/online-yoga`
- `/local-yoga`
- `/saturday-morning-yoga`
- `/rakuten-senior`
- `/agreement`
- `/contact`
- `/instructor`
- `/videos`
- `/blog`
- `/privacy`
- `/legal`
