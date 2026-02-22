# CLAUDE.md - craftgarden.studio

## 概要

craftgarden.studio のコーポレートサイト / ポートフォリオサイト。
プロダクトエコシステム全体の「顔」となるランディングページ。

## 技術スタック

| 項目 | 値 |
|------|-----|
| フレームワーク | Next.js 15 (App Router) |
| スタイリング | Tailwind CSS 4 (`@theme` ディレクティブ) |
| デプロイ先 | Vercel |
| ドメイン | `craftgarden.studio`（ルートドメイン直下） |

## ドメイン

このリポジトリは唯一サブドメインではなく、ルートドメイン `craftgarden.studio` にデプロイされる。
他のすべてのプロダクトは `{repo-name}.craftgarden.studio` のサブドメインでデプロイされる。

## ファイル構成

```
src/
├── app/
│   ├── layout.tsx           # ルートレイアウト（メタデータ、フォント）
│   ├── page.tsx             # トップページ（全セクション統合）
│   └── globals.css          # デザインシステム（@theme トークン + グローバルスタイル）
├── components/
│   ├── Navigation.tsx       # 固定ナビゲーション（スクロールで背景変化）
│   ├── Hero.tsx             # ヒーローセクション
│   ├── Products.tsx         # プロダクトカードグリッド + カテゴリフィルタ（Client Component）
│   ├── Philosophy.tsx       # フィロソフィーセクション
│   ├── TechStack.tsx        # テックスタック表示
│   └── Footer.tsx           # フッター
└── lib/
    └── products.ts          # プロダクトデータ + テックスタックデータ
```

## デザイン

- ダークテーマ（`#0a0e1a` ベース）
- シングルページ構成（セクション間はアンカーリンクでスムーススクロール）
- タイポグラフィドリブン（画像不使用）
- 詳細は `docs/SITE-DESIGN.md` を参照

## 開発コマンド

```bash
npm run dev      # 開発サーバー起動 (localhost:3000)
npm run build    # プロダクションビルド
npm run lint     # Lint実行
```

## プロダクト追加

新しいプロダクトを追加する場合は `src/lib/products.ts` の `products` 配列にエントリを追加する。
