# Craftgarden Studio

[![Vercel](https://img.shields.io/badge/Vercel-Deployed-black?logo=vercel)](https://craftgarden.studio)
[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)](https://nextjs.org/)

craftgarden.studio のコーポレートサイト / ポートフォリオ。ボタニカル（植物）テーマのダークデザインで、全プロダクトの概要とフィロソフィーを紹介するシングルページアプリケーションです。

**URL**: https://craftgarden.studio

![Project Screenshot](screenshot.png)

## 概要

craftgarden.studio は全プロダクトのルートドメインであり、エコシステム全体の「玄関」として機能します。各サブドメインプロダクト（`{repo-name}.craftgarden.studio`）への導線を提供し、開発フィロソフィーと技術スタックを紹介することで、プロダクト群全体のブランディングを担います。

AI時代に品質の低いコンテンツが溢れる中、craftgarden は「世に出すものは、すべて品質の高いものであること」を基準に、タイポグラフィドリブンのデザインとシングルページ構成で情報を整理しています。

- **シングルページ構成** -- Hero、Products、Philosophy、TechStack、Footer の5セクション
- **プロダクトフィルタリング** -- クライアントサイドでのカテゴリ別絞り込み表示
- **ダーク Botanical テーマ** -- 植物・蔓のモチーフを活かしたダークデザイン
- **レスポンシブデザイン** -- モバイル・タブレット・デスクトップ完全対応
- **高パフォーマンス** -- 静的生成による高速な初期表示
- **GA4 計測** -- @next/third-parties による Google Analytics 統合

## 技術スタック

| カテゴリ | 技術 |
|----------|------|
| フレームワーク | Next.js 15 (App Router) |
| UI | React 19, Tailwind CSS 4 (`@theme`) |
| 言語 | TypeScript |
| 計測 | @next/third-parties (GA4) |
| デプロイ | Vercel |

## ディレクトリ構成

```
craftgarden-studio/
├── src/
│   ├── app/
│   │   ├── layout.tsx              # ルートレイアウト（GA4 設定含む）
│   │   ├── page.tsx                # メインページ（全セクション統合）
│   │   ├── globals.css             # Botanical テーマ定義
│   │   ├── icon.svg                # ファビコン
│   │   └── apple-icon.tsx          # Apple Touch Icon
│   ├── components/
│   │   ├── Navigation.tsx          # 固定ナビゲーション
│   │   ├── Hero.tsx                # ヒーローセクション
│   │   ├── Products.tsx            # プロダクトカード + フィルタ
│   │   ├── Philosophy.tsx          # フィロソフィー
│   │   ├── TechStack.tsx           # 技術スタック紹介
│   │   ├── Footer.tsx              # フッター
│   │   ├── BotanicalBackground.tsx # 植物モチーフ背景
│   │   └── VineDivider.tsx         # セクション間の蔓デバイダー
│   └── lib/
│       └── products.ts             # プロダクトデータ定義
├── docs/                           # 設計ドキュメント
│   ├── SITE-DESIGN.md
│   ├── DESIGN-SYSTEM.md
│   └── brand-concepts.md
├── concepts/                       # デザイン検討アーカイブ
│   └── screenshots/
├── package.json
└── tsconfig.json
```

## セットアップ

### 前提条件

- Node.js >= 20
- pnpm

### インストール

```bash
git clone https://github.com/ksato8710/craftgarden-studio.git
cd craftgarden-studio
pnpm install
pnpm dev
```

### 環境変数

`.env.local` に以下を設定:

```bash
# GA4 Measurement ID（@next/third-parties で使用）
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

## コマンド一覧

| コマンド | 説明 |
|---------|------|
| `pnpm dev` | 開発サーバー起動 (localhost:3000) |
| `pnpm build` | プロダクションビルド |
| `pnpm start` | プロダクションサーバー起動 |
| `pnpm lint` | Next.js Lint 実行 |

## デプロイ

Vercel にデプロイ。ルートドメインで公開。

- **本番 URL**: https://craftgarden.studio
- **ブランチ**: `main`
- **ビルドコマンド**: `pnpm build`
- **DNS**: AWS Route 53 で `craftgarden.studio` を Vercel に向けて設定

### ドメイン体系

```
craftgarden.studio                       <- このサイト（ルートドメイン）
├── agent-skill-search.craftgarden.studio
├── feedback-hub.craftgarden.studio
├── ai-pm-service.craftgarden.studio
├── wealth-pilot.craftgarden.studio
├── product-hub.craftgarden.studio
└── ...（各サブドメインプロダクト）
```

## テスト

```bash
pnpm lint    # ESLint によるコード品質チェック
pnpm build   # ビルド時の型チェック + 静的解析
```

CI は GitHub Actions で `pnpm build` を実行し、ビルドの成功を検証しています。

## 関連プロジェクト

craftgarden.studio エコシステムの一部として以下のプロダクトと連携しています。

- [product-hub](https://github.com/ksato8710/product-hub) -- プロダクトエコシステム管理ハブ
- [agent-skill-search](https://github.com/ksato8710/agent-skill-search) -- スキル検索プラットフォーム
- [feedback-hub](https://github.com/ksato8710/feedback-hub) -- フィードバック収集・分析
- [ai-pm-service](https://github.com/ksato8710/ai-pm-service) -- AI 支援タスク管理
- [wealth-pilot](https://github.com/ksato8710/wealth-pilot) -- 個人資産管理ダッシュボード

## 開発ガイド

新しいプロダクトを追加する場合は `src/lib/products.ts` の `products` 配列にエントリを追加してください。デザイン変更時は Botanical テーマの一貫性を保つようにしてください。

詳細なデザイン仕様は以下を参照:

- [SITE-DESIGN.md](docs/SITE-DESIGN.md) -- サイトデザイン仕様
- [DESIGN-SYSTEM.md](docs/DESIGN-SYSTEM.md) -- デザインシステム定義

## 変更履歴

| 日付 | 変更内容 |
|------|----------|
| 2026-02 | GA4 計測導入、Botanical テーマ最終調整 |
| 2026-02 | ドメイン `craftgarden.studio` に統一 |
| 2026-01 | 初期リリース -- コーポレートサイト・ポートフォリオ |

## ロードマップ

- [ ] プロダクト個別ページ（動的ルーティング）
- [ ] ブログ / 開発ログセクション追加
- [ ] i18n 対応（日英切替）
- [ ] アニメーション強化（Framer Motion）
- [ ] OGP 画像の動的生成

## ライセンス

MIT
