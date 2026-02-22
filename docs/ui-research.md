# UI デザインリサーチ — craftgarden.studio リデザイン

> 調査日: 2026-02-22
> 調査担当: UI Designer Agent

---

## 調査概要

「craft（手仕事）+ garden（庭）」というブランドコンセプトに基づき、植物・庭・成長・手仕事をモチーフとした5つのデザイン方向性について、CSS/SVG/アニメーション技法を中心に調査した。

現在のサイトはダークテーマ（`#0a0e1a`ベース）のテック寄りデザイン。ブランド名変更（craftyard → craftgarden）に伴い、より「庭」「植物」「成長」のモチーフを活かしたデザインへの進化を検討する。

---

## 1. Botanical Dark — 精密なボタニカルライン

**コンセプト**: ダークベースを維持しつつ、植物的なグリーンアクセントと精密なボタニカルラインアートで洗練された空気感を演出。現在のデザインからの自然な進化形。

### カラーパレット

| 役割 | カラー | 用途 |
|------|--------|------|
| 背景 Primary | `#0a0f0d` | メイン背景（ほんのりグリーン寄りのダーク） |
| 背景 Secondary | `#0f1a16` | カード・セクション背景 |
| 背景 Tertiary | `#162420` | ホバー状態 |
| アクセント Primary | `#22c55e` | CTA、リンク（ボタニカルグリーン） |
| アクセント Secondary | `#86efac` | ホバー、サブアクセント |
| アクセント Gold | `#d4a574` | 手仕事感を出すウォームアクセント |
| テキスト Primary | `#e8f5e9` | 本文（わずかにグリーンティント） |
| テキスト Secondary | `#6b8f71` | サブテキスト |
| ボーダー | `#1a2f24` | カード枠線 |

### CSS/SVG ビジュアル表現

#### ボタニカルラインアート（SVG `stroke-dasharray` アニメーション）

```css
/* SVG ラインドローイング — 茎や葉脈を描く */
.botanical-line {
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
  animation: draw-line 3s ease-in-out forwards;
}

@keyframes draw-line {
  to { stroke-dashoffset: 0; }
}
```

- SVGの`stroke-dasharray`と`stroke-dashoffset`を組み合わせ、植物の茎・葉脈が描かれるアニメーションを実現
- セクション間の装飾としてボタニカルラインを配置し、スクロールに連動して描画
- 参考: [Hackification - SVG Growing Flowers](https://www.hackification.io/blog/2020/08/21/svg-effect-growing-flowers/)

#### ノイズテクスチャ（SVG `feTurbulence`フィルタ）

```css
/* 有機的なグレイン効果 */
.organic-grain::before {
  content: '';
  position: absolute;
  inset: 0;
  background: url("data:image/svg+xml,..."); /* feTurbulence SVG */
  opacity: 0.03;
  mix-blend-mode: overlay;
}
```

- `feTurbulence`フィルタでPerlinノイズを生成し、背景にうっすらとしたオーガニックテクスチャを追加
- `baseFrequency` 0.65〜0.8、`numOctaves` 4程度で紙のような質感
- 参考: [Codrops - SVG Filter Effects: feTurbulence](https://tympanus.net/codrops/2019/02/19/svg-filter-effects-creating-texture-with-feturbulence/)

#### グロー効果

```css
/* 植物的な発光 */
.botanical-glow {
  box-shadow:
    0 0 20px rgba(34, 197, 94, 0.1),
    0 0 60px rgba(34, 197, 94, 0.05);
}

/* ホバー時に光が広がる */
.card:hover .botanical-glow {
  box-shadow:
    0 0 30px rgba(34, 197, 94, 0.15),
    0 0 80px rgba(34, 197, 94, 0.08);
}
```

### アニメーション・トランジション

| 要素 | 手法 | 詳細 |
|------|------|------|
| セクション遷移 | Intersection Observer + fade-in | 要素がビューポートに入ったら`opacity`と`transform`をアニメーション |
| ボタニカルライン | `stroke-dashoffset` scroll-linked | スクロール量に応じてSVGパスが描かれる |
| カードホバー | `transform` + `box-shadow` | 微細なリフト(2px) + グリーングロー |
| 背景パーティクル | CSS `@keyframes` + `transform` | 小さなドット（胞子イメージ）がゆっくり浮遊 |

### タイポグラフィ

| 要素 | フォント案 | 理由 |
|------|-----------|------|
| 見出し | **Fraunces** (Variable) | セリフだがオーガニックな曲線を持ち、ボタニカル感と知性を両立 |
| 本文 | **Inter** / **Noto Sans JP** | 可読性重視のサンセリフ。現行踏襲 |
| ロゴ・モノ | **JetBrains Mono** | 技術スタジオ感の維持 |
| 代替見出し | **Playfair Display** | クラシカルなセリフ。精密さと格調 |

### レイアウトパターン

- **非対称グリッド**: セクションごとに左右のマージンを変え、有機的なリズムを生む
- **フルブリードセクション**: 一部セクションで背景を画面幅いっぱいに広げ、ボタニカルラインを配置
- **サイドデコレーション**: ページ左右にうっすらとしたSVGボタニカルイラストを固定配置

---

## 2. Morning Garden — 水彩風ライトテーマ

**コンセプト**: 朝の庭のような明るく温かいライトテーマ。水彩風テクスチャと柔らかなグラデーションで、親しみやすさと繊細さを表現。

### カラーパレット

| 役割 | カラー | 用途 |
|------|--------|------|
| 背景 Primary | `#faf8f5` | メイン背景（ウォームホワイト） |
| 背景 Secondary | `#f3efe8` | カード背景 |
| 背景 Tertiary | `#e8e2d8` | ホバー・アクセント背景 |
| アクセント Primary | `#2d6a4f` | CTA、リンク（ディープグリーン） |
| アクセント Secondary | `#95d5b2` | ライトグリーン、バッジ |
| アクセント Warm | `#d4a276` | テラコッタ、ウォームアクセント |
| アクセント Bloom | `#e8a0bf` | 花のピンク |
| テキスト Primary | `#1a1a2e` | 本文 |
| テキスト Secondary | `#6b705c` | サブテキスト（オリーブ） |
| ボーダー | `rgba(45, 106, 79, 0.12)` | 繊細なボーダー |

### CSS/SVG ビジュアル表現

#### 水彩テクスチャ（SVGフィルタ + CSS）

```css
/* 水彩風の滲み効果 */
.watercolor-blob {
  filter: url(#watercolor-filter);
  opacity: 0.4;
}

/* SVG フィルタ定義 */
/*
<filter id="watercolor-filter">
  <feTurbulence type="fractalNoise" baseFrequency="0.04"
    numOctaves="4" seed="2" />
  <feDisplacementMap in="SourceGraphic" scale="30" />
  <feGaussianBlur stdDeviation="3" />
</filter>
*/
```

- `feTurbulence` + `feDisplacementMap` + `feGaussianBlur`を組み合わせて水彩画のような滲み効果
- 参考: [Aquarelle - Watercolor Effect Library](https://github.com/Ramotion/aquarelle)
- 参考: [Frontend Horse - Watercolor SVG](https://frontend.horse/issues/67/)

#### グラデーションメッシュ風背景

```css
.morning-bg {
  background:
    radial-gradient(ellipse at 20% 50%, rgba(149, 213, 178, 0.15) 0%, transparent 60%),
    radial-gradient(ellipse at 80% 20%, rgba(232, 160, 191, 0.1) 0%, transparent 50%),
    radial-gradient(ellipse at 60% 80%, rgba(212, 162, 118, 0.08) 0%, transparent 50%),
    #faf8f5;
}
```

#### ソフトシャドウとグラス効果

```css
/* 朝露のようなカード */
.morning-card {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(45, 106, 79, 0.08);
  box-shadow:
    0 4px 24px rgba(0, 0, 0, 0.04),
    0 1px 2px rgba(0, 0, 0, 0.02);
  border-radius: 16px;
}
```

- `backdrop-filter: blur()`でフロストグラス効果。朝霧のような透明感
- 参考: [Josh W. Comeau - backdrop-filter](https://www.joshwcomeau.com/css/backdrop-filter/)

### アニメーション・トランジション

| 要素 | 手法 | 詳細 |
|------|------|------|
| ページロード | グラデーション fade-in | 背景色がほのかに明るくなる「夜明け」演出 |
| セクション遷移 | `fade-in-up` with stagger | 要素が下から順にフェードイン（stagger: 100ms） |
| 水彩ブロブ | CSS `@keyframes` scale/opacity | 水彩の滲みがゆっくり広がる・消えるループ |
| ホバー | `transform: scale(1.02)` | 柔らかなスケールアップ |
| スクロール | `animation-timeline: scroll()` | CSSスクロール駆動アニメ。背景の色味がスクロールで変化 |

### タイポグラフィ

| 要素 | フォント案 | 理由 |
|------|-----------|------|
| 見出し | **Lora** / **Cormorant Garamond** | エレガントなセリフ。朝の上品さ |
| 本文 | **Source Sans 3** / **Noto Sans JP** | 温かみのあるサンセリフ |
| アクセント | **Caveat** | 手書き風。ラベルやキャプションに |
| 代替 | **DM Serif Display** + **DM Sans** | 統一感のあるペアリング |

### レイアウトパターン

- **センター寄せ + ゆったりした余白**: コンテンツ幅を900px程度に抑え、左右に水彩テクスチャの余白
- **カード型グリッド**: 角丸を大きめ(16-20px)にしたソフトなカード
- **テキスト+イラスト交互配置**: セクションごとに左右交互にテキストと装飾を配置
- **フルワイドの水彩背景帯**: セクション区切りに水彩風のグラデーションバンド

---

## 3. Growing Seeds — ミニマル + 成長アニメーション

**コンセプト**: 種から芽が出て花が咲くまでの「成長」をアニメーションで表現。ミニマルなデザインにダイナミックな動きを加えることで、ビルダーとしての進化を視覚化。

### カラーパレット

| 役割 | カラー | 用途 |
|------|--------|------|
| 背景 Primary | `#111111` | ほぼ純粋な黒（ミニマル） |
| 背景 Secondary | `#1a1a1a` | カード |
| アクセント Seed | `#8B6914` | 種のブラウン（初期状態） |
| アクセント Sprout | `#4ade80` | 芽のグリーン（成長中） |
| アクセント Bloom | `#a78bfa` | 花のバイオレット（完成形） |
| テキスト Primary | `#fafafa` | 白に近いテキスト |
| テキスト Secondary | `#737373` | ミュートテキスト |
| プログレスライン | `linear-gradient(#8B6914, #4ade80, #a78bfa)` | 成長を表すグラデーション |

### CSS/SVG ビジュアル表現

#### 植物成長SVGアニメーション

```css
/* 茎の成長 — SVG path描画 */
.stem-grow {
  stroke-dasharray: 500;
  stroke-dashoffset: 500;
  animation: grow-stem 2s ease-out forwards;
}

@keyframes grow-stem {
  to { stroke-dashoffset: 0; }
}

/* 葉の出現 — scale + rotate */
.leaf {
  transform: scale(0) rotate(-45deg);
  transform-origin: bottom left;
  animation: unfurl-leaf 0.8s ease-out forwards;
  animation-delay: var(--leaf-delay); /* 各葉にディレイ */
}

@keyframes unfurl-leaf {
  0% { transform: scale(0) rotate(-45deg); }
  60% { transform: scale(1.1) rotate(5deg); }
  100% { transform: scale(1) rotate(0deg); }
}
```

- 参考: [GitHub Gist - CSS Growing Plant Animation](https://gist.github.com/femke77/52b1bc4c439cacc357371442ed4c914a)

#### スクロール連動成長タイムライン

```css
/* CSS Scroll-Driven Animation（Chrome 115+） */
.growth-timeline {
  animation: grow-progress linear;
  animation-timeline: scroll();
  animation-range: 0% 100%;
}

@keyframes grow-progress {
  0% { --growth: 0; }
  100% { --growth: 1; }
}

/* Intersection Observer フォールバック */
.seed-section[data-visible="true"] .plant {
  animation: plant-grow 3s ease-out forwards;
}
```

- CSS `animation-timeline: scroll()` でスクロール量に応じた成長アニメーション
- 参考: [MDN - CSS Scroll-driven Animations](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Scroll-driven_animations)
- Safari非対応のため、Intersection Observerでフォールバック

#### プログレスバー型セクション遷移

```css
/* 成長を示す縦ラインの進捗 */
.progress-line {
  position: fixed;
  left: 50%;
  top: 0;
  width: 2px;
  height: 100vh;
  background: linear-gradient(
    to bottom,
    #8B6914 0%,
    #4ade80 50%,
    #a78bfa 100%
  );
  transform: scaleY(var(--scroll-progress));
  transform-origin: top;
}
```

### アニメーション・トランジション

| 要素 | 手法 | 詳細 |
|------|------|------|
| 種→芽→花 | SVG path + CSS `@keyframes` | スクロールに連動して植物が段階的に成長 |
| セクション遷移 | `scroll-timeline` / IO | 各セクションが「成長フェーズ」を表現 |
| カウンター | CSS `@property` + アニメ | プロダクト数などの数字がカウントアップ |
| マイクロインタラクション | `transform: scale()` + spring | タップ/クリック時に弾むようなスプリング動作 |
| パーティクル | CSS `@keyframes` | 花粉・種子が漂うパーティクル |

### タイポグラフィ

| 要素 | フォント案 | 理由 |
|------|-----------|------|
| 見出し | **Space Grotesk** | ジオメトリックで現代的。ミニマルに合う |
| 本文 | **Inter** / **Noto Sans JP** | 可読性と現代性 |
| 数字・データ | **JetBrains Mono** | プログレスやカウンターに |
| 代替 | **Outfit** | 親しみやすくモダンなサンセリフ |

### レイアウトパターン

- **シングルカラム・縦スクロール**: 一本の成長ラインに沿ってコンテンツを配置
- **タイムライン型**: 左サイドに成長の進行を示す縦ラインを固定
- **フェーズ分割**: Hero=種、Products=芽、Philosophy=茎、TechStack=葉、Footer=花
- **ミニマルカード**: ボーダーのみ。背景は最小限

---

## 4. Wild Playground — カラフルな実験場

**コンセプト**: 庭は「実験の場」。カラフルで自由な色使いと遊び心のあるインタラクションで、ソロビルダーの「楽しさ」と「探究心」を表現。

### カラーパレット

| 役割 | カラー | 用途 |
|------|--------|------|
| 背景 Primary | `#fffdf7` | ウォームホワイト |
| アクセント Green | `#22c55e` | 植物グリーン |
| アクセント Violet | `#8b5cf6` | 花のバイオレット |
| アクセント Orange | `#f97316` | 果実オレンジ |
| アクセント Pink | `#ec4899` | 花のピンク |
| アクセント Yellow | `#eab308` | 太陽イエロー |
| アクセント Sky | `#0ea5e9` | 空のブルー |
| テキスト Primary | `#1c1917` | ほぼ黒 |
| テキスト Secondary | `#78716c` | ウォームグレー |

### CSS/SVG ビジュアル表現

#### ブロブ形状（`clip-path` モーフィング）

```css
/* 有機的なブロブ形状 */
.blob {
  clip-path: polygon(
    30% 0%, 70% 0%, 100% 30%,
    100% 70%, 70% 100%, 30% 100%,
    0% 70%, 0% 30%
  );
  animation: morph 8s ease-in-out infinite;
}

@keyframes morph {
  0%, 100% {
    clip-path: polygon(
      30% 0%, 70% 0%, 100% 30%,
      100% 70%, 70% 100%, 30% 100%,
      0% 70%, 0% 30%
    );
  }
  50% {
    clip-path: polygon(
      25% 5%, 75% 2%, 98% 35%,
      95% 65%, 72% 98%, 28% 95%,
      5% 68%, 2% 25%
    );
  }
}
```

- `clip-path: polygon()`のキーフレームアニメーションでブロブが有機的にモーフィング
- 参考: [Frontend Masters - Creating Blob Shapes using clip-path: shape()](https://frontendmasters.com/blog/creating-blob-shapes-using-clip-path-shape/)
- 参考: [FreeFrontend - 31 CSS Blob Animations](https://freefrontend.com/css-blob-effects/)

#### カラフルなグリッド背景

```css
/* ドットグリッドの遊び場背景 */
.playground-bg {
  background-image:
    radial-gradient(circle, #22c55e 1px, transparent 1px),
    radial-gradient(circle, #8b5cf6 1px, transparent 1px);
  background-size: 40px 40px, 60px 60px;
  background-position: 0 0, 20px 20px;
  opacity: 0.08;
}
```

#### インタラクティブカード

```css
/* カードにランダムな回転と色 */
.playground-card {
  --rotation: 0deg;
  transform: rotate(var(--rotation));
  transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  border: 3px solid var(--card-color);
  border-radius: 20px;
}

.playground-card:hover {
  transform: rotate(0deg) scale(1.05);
}

/* nth-child で各カードに異なる色と傾き */
.playground-card:nth-child(1) { --card-color: #22c55e; --rotation: -2deg; }
.playground-card:nth-child(2) { --card-color: #8b5cf6; --rotation: 1deg; }
.playground-card:nth-child(3) { --card-color: #f97316; --rotation: -1deg; }
```

#### ステッカー風バッジ

```css
.sticker-badge {
  display: inline-flex;
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  border: 2px dashed var(--badge-color);
  transform: rotate(var(--badge-rotate, -3deg));
  font-weight: 700;
  letter-spacing: 0.05em;
  box-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1);
}
```

### アニメーション・トランジション

| 要素 | 手法 | 詳細 |
|------|------|------|
| カード | `cubic-bezier` バウンス | ホバー時にぴょんと跳ねる遊びアニメーション |
| ブロブ | `clip-path` morph | 背景のブロブがゆっくりモーフィング |
| テキスト | タイプライター効果 | Hero テキストが一文字ずつ表示 |
| ページ遷移 | `color-mix()` | ランダムっぽい色の切り替え |
| 装飾 | CSS `@keyframes` float | アイコン・絵文字がふわふわ浮遊 |
| マウスカーソル | `cursor: url()` | カスタムカーソル（種のアイコンなど） |

### タイポグラフィ

| 要素 | フォント案 | 理由 |
|------|-----------|------|
| 見出し | **Sora** / **Rubik** | 丸みがありポップ。遊び心 |
| 本文 | **Plus Jakarta Sans** / **Noto Sans JP** | モダンで読みやすいサンセリフ |
| アクセント | **Permanent Marker** | 手書きマーカー風。ラベルやキャプションに |
| 代替 | **Anybody** (Variable) | Width axisで遊べるバリアブルフォント |

### レイアウトパターン

- **非整列グリッド（Masonry風）**: カードがわずかにランダムな角度で配置
- **ステッカーボード**: タグやバッジがスクラップブック風に散りばめ
- **フルスクリーンセクション**: 各セクションが異なるアクセントカラーの世界観
- **自由配置**: CSS Gridの`grid-row-start/end`で意図的な「はみ出し」を演出

---

## 5. Zen Garden — 枯山水の静けさ

**コンセプト**: 日本庭園（枯山水）の美学。極限のホワイトスペース、最小限の要素、「間」の美。コンテンツ自体が庭の石のように配置される瞑想的デザイン。

### カラーパレット

| 役割 | カラー | 用途 |
|------|--------|------|
| 背景 Primary | `#f5f0eb` | 砂の色（ウォームサンド） |
| 背景 Secondary | `#ebe5dd` | 砂利テクスチャ背景 |
| アクセント Stone | `#57534e` | 石のグレー |
| アクセント Moss | `#4d7c0f` | 苔のグリーン |
| アクセント Bamboo | `#78716c` | 竹のグレーブラウン |
| テキスト Primary | `#292524` | 墨色 |
| テキスト Secondary | `#78716c` | 薄墨 |
| ボーダー | `rgba(41, 37, 36, 0.08)` | かすかなボーダー |
| アクセント Water | `#64748b` | 水の暗いブルーグレー |

### CSS/SVG ビジュアル表現

#### 枯山水の砂紋（SVG + CSSパターン）

```css
/* 砂紋パターン — SVGの繰り返し */
.sand-ripple {
  background-image: url("data:image/svg+xml,...");
  /* 同心円状の砂紋をSVGで描き、repeating-radial-gradient代替 */
  background-size: 200px 200px;
  opacity: 0.06;
}

/* CSS のみの砂紋表現 */
.zen-ripple {
  background: repeating-radial-gradient(
    circle at center,
    transparent 0px,
    transparent 18px,
    rgba(41, 37, 36, 0.04) 19px,
    transparent 20px
  );
}
```

#### テクスチャ（和紙風）

```css
/* 和紙テクスチャ — feTurbulence */
.washi-texture {
  position: relative;
}

.washi-texture::after {
  content: '';
  position: absolute;
  inset: 0;
  /* feTurbulence で和紙の繊維感 */
  filter: url(#washi-filter);
  opacity: 0.02;
  pointer-events: none;
}

/*
<filter id="washi-filter">
  <feTurbulence type="turbulence"
    baseFrequency="0.8" numOctaves="6" seed="5" />
  <feColorMatrix type="saturate" values="0" />
</filter>
*/
```

- 参考: [FreeCodeCamp - Grainy CSS Backgrounds Using SVG Filters](https://www.freecodecamp.org/news/grainy-css-backgrounds-using-svg-filters/)
- 参考: [fffuel - nnnoise Generator](https://www.fffuel.co/nnnoise/)

#### 「間」のスペーシング

```css
/* 極端なホワイトスペース */
.zen-section {
  padding: clamp(8rem, 15vw, 12rem) clamp(2rem, 8vw, 6rem);
}

/* コンテンツ幅を狭く */
.zen-content {
  max-width: 720px;
  margin: 0 auto;
}
```

### アニメーション・トランジション

| 要素 | 手法 | 詳細 |
|------|------|------|
| ページロード | 超スロー fade-in (2-3s) | 「間」を表現する遅いフェードイン |
| セクション遷移 | opacity のみ | transformなし。静かに現れる |
| 砂紋 | `animation: ripple 20s linear infinite` | 砂紋パターンがゆっくり流れる |
| ホバー | `opacity` 変化のみ | 動かない。存在感の変化だけ |
| スクロール | `scroll-driven` で opacity | スクロールに応じて要素がゆっくり現れて消える |

### タイポグラフィ

| 要素 | フォント案 | 理由 |
|------|-----------|------|
| 見出し | **Noto Serif JP** | 日本語の美。格調高い明朝体 |
| 英字見出し | **Cormorant** | 繊細なセリフ。和の美意識と調和 |
| 本文 | **Noto Sans JP** (Light/Regular) | 薄いウェイトで静けさを表現 |
| 英字本文 | **EB Garamond** | 古典的な品格 |
| 代替 | **Shippori Mincho** | 日本語のクラシカルな明朝体 |

### レイアウトパターン

- **極限のホワイトスペース**: セクション間に200px以上の余白
- **左寄せテキスト + 右空き**: テキストを左1/3に配置、右2/3は「間」
- **非対称バランス**: 枯山水のように、少数の要素で非対称なバランスを作る
- **縦書きアクセント**: 一部テキストを`writing-mode: vertical-rl`で縦書きに
- **最小限のUI**: ナビゲーションを限界まで簡素化。ボーダー・シャドウ不使用

---

## 共通技術メモ

### CSS Scroll-Driven Animations

2025年以降の主要ブラウザ対応状況:
- **Chrome/Edge**: 115+ で完全対応
- **Firefox**: フラグ有効で対応
- **Safari**: 未対応（ポリフィルまたはIntersection Observer API でフォールバック必須）

```css
/* 基本構文 */
.element {
  animation: fade-in linear;
  animation-timeline: view();
  animation-range: entry 0% entry 100%;
}
```

参考: [Smashing Magazine - CSS Scroll-Driven Animations](https://www.smashingmagazine.com/2024/12/introduction-css-scroll-driven-animations/)

### SVG `feTurbulence` テクスチャ生成

各方向性で活用可能な汎用テクスチャ生成手法:
- `baseFrequency`: 低い値(0.01-0.05)で大きなパターン、高い値(0.5-1.0)で細かいグレイン
- `numOctaves`: 1-2でシンプル、4-6で複雑な質感
- `type`: `"fractalNoise"` が有機的、`"turbulence"` がより動的

ツール: [fffuel - gggrain Generator](https://www.fffuel.co/gggrain/)

### パフォーマンス考慮事項

| 項目 | 推奨 |
|------|------|
| `backdrop-filter` | 使用箇所を限定（GPU負荷）|
| SVG フィルタ | 静的生成推奨。ランタイムでのフィルタ適用はモバイルで重い |
| `will-change` | アニメーション対象に限定使用 |
| `@media (prefers-reduced-motion)` | 全方向性で必須。アニメーション無効化対応 |
| バンドルサイズ | 目標 < 100KB（現行仕様通り） |

### アクセシビリティ

| 要件 | 対応方法 |
|------|---------|
| コントラスト比 | WCAG AA (4.5:1) を全方向性で確保 |
| `prefers-reduced-motion` | アニメーション無効化・簡略化 |
| `prefers-color-scheme` | ダーク/ライト切替対応の検討 |
| フォーカス表示 | 明確な `:focus-visible` リング |
| タッチターゲット | 最小44px（WCAG 2.5.5） |

---

## 方向性比較サマリー

| 項目 | Botanical Dark | Morning Garden | Growing Seeds | Wild Playground | Zen Garden |
|------|---------------|----------------|---------------|-----------------|------------|
| **トーン** | 洗練・知性 | 温かさ・親しみ | 進化・ダイナミック | 自由・遊び心 | 静寂・瞑想 |
| **テーマ** | ダーク | ライト | ダーク | ライト | ライト（サンド） |
| **アニメーション量** | 中 | 低〜中 | 高 | 高 | 極低 |
| **技術難易度** | 中 | 中 | 高 | 中 | 低〜中 |
| **現行デザインとの近さ** | 最も近い | 遠い | やや近い | 遠い | 遠い |
| **ブランドとの親和性** | craft寄り | garden寄り | 成長モチーフ | 実験場モチーフ | garden寄り |
| **ユニークさ** | 中 | 低〜中 | 高 | 高 | 中〜高 |
| **日本語との相性** | 良好 | 良好 | 良好 | 普通 | 最良 |

---

## 参考リソース

### 一般的なCSS技法
- [CSS-Tricks - Grainy Gradients](https://css-tricks.com/grainy-gradients/)
- [Codrops - SVG Filter Effects: feTurbulence](https://tympanus.net/codrops/2019/02/19/svg-filter-effects-creating-texture-with-feturbulence/)
- [Josh W. Comeau - Next-level frosted glass with backdrop-filter](https://www.joshwcomeau.com/css/backdrop-filter/)
- [Smashing Magazine - CSS Scroll-Driven Animations](https://www.smashingmagazine.com/2024/12/introduction-css-scroll-driven-animations/)
- [MDN - CSS Scroll-driven Animations](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Scroll-driven_animations)

### 植物・成長アニメーション
- [Hackification - SVG Growing Flowers](https://www.hackification.io/blog/2020/08/21/svg-effect-growing-flowers/)
- [GitHub Gist - CSS Growing Plant Animation](https://gist.github.com/femke77/52b1bc4c439cacc357371442ed4c914a)
- [Designmodo - SVG Animation using CSS and JavaScript](https://designmodo.com/svg-animation/)
- [SVG Backgrounds - Plants and Leaves](https://www.svgbackgrounds.com/elements/svg-plants-and-leaves/)

### テクスチャ・形状ジェネレーター
- [fffuel - nnnoise Generator](https://www.fffuel.co/nnnoise/)
- [fffuel - gggrain Generator](https://www.fffuel.co/gggrain/)
- [CSS Generators - Blob](https://css-generators.com/blob/)
- [FreeFrontend - 31 CSS Blob Animations](https://freefrontend.com/css-blob-effects/)

### タイポグラフィ
- [Pangram Pangram - Best Font Pairings 2025](https://pangrampangram.com/blogs/journal/best-font-pairings-2025)
- [FontPair - Popular Google Font Pairings](https://www.fontpair.co/)
- [Silphium Design - Nature-Inspired Fonts](https://silphiumdesign.com/the-best-nature-inspired-fonts-organic-design/)

### デザインインスピレーション
- [Awwwards - Yifei Luo Playground Portfolio](https://www.awwwards.com/sites/yifei-luo-playground-portfolio)
- [Muzli - Top 100 Creative Portfolio Websites 2025](https://muz.li/blog/top-100-most-creative-and-unique-portfolio-websites-of-2025/)
- [Dribbble - Plants Website Designs](https://dribbble.com/tags/plants-website)
- [CSS Zen Garden](https://csszengarden.com/)
- [Figma - Web Design Trends 2026](https://www.figma.com/resource-library/web-design-trends/)
