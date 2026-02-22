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
    descriptionEn: "AI-powered task management for solo builders",
    descriptionJp: "AIタスク管理で個人開発を加速",
    category: "Product",
    url: "https://ai-pm-service.craftyard.studio",
  },
  {
    name: "History Quiz",
    descriptionEn: "Learn history through interactive quizzes",
    descriptionJp: "インタラクティブな歴史クイズ",
    category: "Product",
    url: "https://history-quiz-app.craftyard.studio",
  },
  {
    name: "Product Hub",
    descriptionEn: "Project management dashboard for the studio",
    descriptionJp: "スタジオ全体のプロジェクト管理",
    category: "Tool",
    url: "https://product-hub.craftyard.studio",
  },
  {
    name: "Essential Navigator",
    descriptionEn: "Essential discovery and navigation tool",
    descriptionJp: "Essential Navigator",
    category: "Tool",
    url: "https://essential-navigator.craftyard.studio",
  },
  {
    name: "Content Studio",
    descriptionEn: "Content creation and management platform",
    descriptionJp: "コンテンツ管理プラットフォーム",
    category: "Tool",
    url: "https://content-studio.craftyard.studio",
  },
  {
    name: "Feedback Hub",
    descriptionEn: "Collect and analyze user feedback",
    descriptionJp: "フィードバック収集・分析",
    category: "Tool",
    url: "https://feedback-hub.craftyard.studio",
  },
  {
    name: "AI Solo Builder",
    descriptionEn: "Blog for solo builders leveraging AI",
    descriptionJp: "AI活用ソロ開発者向けブログ",
    category: "Content",
    url: "https://ai-solo-builder.craftyard.studio",
  },
  {
    name: "Conf Hub",
    descriptionEn: "Curated tech conference listings",
    descriptionJp: "技術カンファレンス一覧",
    category: "Content",
    url: "https://conf-hub.craftyard.studio",
  },
  {
    name: "Orcha",
    descriptionEn: "Development process comparison platform",
    descriptionJp: "開発プロセス比較",
    category: "Content",
    url: "https://orcha.craftyard.studio",
  },
  {
    name: "API Catalog JP",
    descriptionEn: "Japanese API reference catalog",
    descriptionJp: "日本語APIカタログ",
    category: "Content",
    url: "https://api-catalog-jp.craftyard.studio",
  },
];

export const techStack = [
  { category: "Frontend", items: ["Next.js", "React", "Flutter", "Tailwind CSS"] },
  { category: "Backend", items: ["Hono", "Node.js", "Supabase", "Express"] },
  { category: "AI", items: ["Claude", "OpenAI", "Claude Code"] },
  { category: "Infra", items: ["Vercel", "GitHub Actions", "Turso"] },
  { category: "Language", items: ["TypeScript", "Dart", "Python"] },
];
