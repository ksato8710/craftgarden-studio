export type ProductCategory = "Product" | "Tool" | "Content";

export interface Product {
  name: string;
  descriptionEn: string;
  descriptionJp: string;
  category: ProductCategory;
  url: string;
}

export const products: Product[] = [
  {
    name: "AI PM Service",
    descriptionEn: "AI-powered task management for solo craft",
    descriptionJp: "AIタスク管理で個人開発を加速",
    category: "Product",
    url: "https://ai-pm-service.craftgarden.studio",
  },
  {
    name: "History Quiz",
    descriptionEn: "Learn history through interactive quizzes",
    descriptionJp: "インタラクティブな歴史クイズ",
    category: "Product",
    url: "https://history-quiz-app.craftgarden.studio",
  },
  {
    name: "Product Hub",
    descriptionEn: "Project management dashboard for the studio",
    descriptionJp: "スタジオ全体のプロジェクト管理",
    category: "Tool",
    url: "https://product-hub.craftgarden.studio",
  },
  {
    name: "Essential Navigator",
    descriptionEn: "Essential discovery and navigation tool",
    descriptionJp: "Essential Navigator",
    category: "Tool",
    url: "https://essential-navigator.craftgarden.studio",
  },
  {
    name: "Content Studio",
    descriptionEn: "Content creation and management platform",
    descriptionJp: "コンテンツ管理プラットフォーム",
    category: "Tool",
    url: "https://content-studio.craftgarden.studio",
  },
  {
    name: "Feedback Hub",
    descriptionEn: "Collect and analyze user feedback",
    descriptionJp: "フィードバック収集・分析",
    category: "Tool",
    url: "https://feedback-hub.craftgarden.studio",
  },
  {
    name: "Competitor UI Viewer",
    descriptionEn: "Competitor UI analysis and comparison",
    descriptionJp: "競合UIの分析・比較ビューア",
    category: "Tool",
    url: "https://competitor-ui-viewer.craftgarden.studio",
  },
  {
    name: "Agent Skill Search",
    descriptionEn: "Search and discover agent skills",
    descriptionJp: "エージェントスキル検索",
    category: "Tool",
    url: "https://agent-skill-search.craftgarden.studio",
  },
  {
    name: "AI Solo Craft",
    descriptionEn: "Blog for solo craft leveraging AI",
    descriptionJp: "AI活用ソロ開発者向けブログ",
    category: "Content",
    url: "https://ai-solo-craft.craftgarden.studio",
  },
  {
    name: "Conf Hub",
    descriptionEn: "Curated tech conference listings",
    descriptionJp: "技術カンファレンス一覧",
    category: "Content",
    url: "https://conf-hub.craftgarden.studio",
  },
  {
    name: "Orcha",
    descriptionEn: "Development process comparison platform",
    descriptionJp: "開発プロセス比較",
    category: "Content",
    url: "https://orcha.craftgarden.studio",
  },
  {
    name: "API Catalog JP",
    descriptionEn: "Japanese API reference catalog",
    descriptionJp: "日本語APIカタログ",
    category: "Content",
    url: "https://api-catalog-jp.craftgarden.studio",
  },
];

export const techStack = [
  { category: "Frontend", items: ["Next.js", "React", "Flutter", "Tailwind CSS"] },
  { category: "Backend", items: ["Hono", "Node.js", "Supabase", "Express"] },
  { category: "AI", items: ["Claude", "OpenAI", "Claude Code"] },
  { category: "Infra", items: ["Vercel", "GitHub Actions", "Turso"] },
  { category: "Language", items: ["TypeScript", "Dart", "Python"] },
];
