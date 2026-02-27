# CLAUDE.md - craftgarden.studio

## 概要

craftgarden.studio のコーポレートサイト / ポートフォリオサイト。
プロダクトエコシステム全体の「顔」となるランディングページ。

## 品質ポリシー

AI時代には品質の低いコンテンツが大量に生成され、世の中に溢れている。
craftgarden は、その流れに加担しない。
**世に出すものは、すべて品質の高いものであること**——これを絶対の基準とする。

- コード、デザイン、コンテンツのいずれにおいても「とりあえず出す」はしない
- AIを活用すること自体は積極的に行うが、出力の品質に対する責任は自分が持つ
- 量より質。速さより丁寧さ。数より一つひとつの完成度を優先する

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

## ディレクトリ構成

```
craftgarden-studio/
├── src/                         # ── アプリケーションソース ──
│   ├── app/
│   │   ├── layout.tsx           # ルートレイアウト（メタデータ、フォント）
│   │   ├── page.tsx             # トップページ（全セクション統合）
│   │   ├── globals.css          # デザインシステム（@theme トークン + グローバルスタイル）
│   │   ├── icon.svg             # ファビコン（SVG）
│   │   └── apple-icon.tsx       # Apple Touch Icon（動的生成）
│   ├── components/
│   │   ├── Navigation.tsx       # 固定ナビゲーション（スクロールで背景変化）
│   │   ├── Hero.tsx             # ヒーローセクション
│   │   ├── Products.tsx         # プロダクトカードグリッド + カテゴリフィルタ（Client Component）
│   │   ├── Philosophy.tsx       # フィロソフィーセクション
│   │   ├── TechStack.tsx        # テックスタック表示
│   │   ├── Footer.tsx           # フッター
│   │   ├── BotanicalBackground.tsx  # 植物モチーフ背景アニメーション
│   │   └── VineDivider.tsx      # セクション間の蔓デバイダー
│   └── lib/
│       └── products.ts          # プロダクトデータ + テックスタックデータ
│
├── docs/                        # ── 設計ドキュメント ──
│   ├── SITE-DESIGN.md           # サイトデザイン仕様
│   ├── DESIGN-SYSTEM.md         # デザインシステム定義（Quiet Garden）
│   ├── brand-concepts.md        # ブランドコンセプト資料
│   └── ui-research.md           # UIリサーチ・調査メモ
│
├── concepts/                    # ── デザイン検討アーカイブ（本番コードに含めない） ──
│   ├── *.html                   # デザインコンセプトのHTMLプロトタイプ
│   └── screenshots/             # スクリーンショット・デザイン参考画像
│       ├── concept-*.png        # 各コンセプトのキャプチャ
│       ├── 0*-*.png             # 実装段階のスクリーンショット
│       └── craftgarden-*.png    # 本番サイトのフルページキャプチャ
│
├── CLAUDE.md                    # AI開発アシスタント向け指示書（本ファイル）
├── next.config.ts               # Next.js設定
├── tsconfig.json                # TypeScript設定
├── postcss.config.mjs           # PostCSS設定
├── package.json                 # 依存関係定義
└── pnpm-lock.yaml               # パッケージロックファイル（pnpm）
```

### ディレクトリ規約

| ディレクトリ | 用途 | 新規ファイル追加時のルール |
|---|---|---|
| `src/` | 本番アプリケーションコード | Next.js App Router の規約に従う |
| `docs/` | 設計・仕様ドキュメント | Markdown形式で追加 |
| `concepts/` | デザイン検討の履歴・アーカイブ | HTMLプロトタイプを直下に配置 |
| `concepts/screenshots/` | スクリーンショット・画像素材 | PNG画像はすべてここに集約（ルート直下に置かない） |

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
