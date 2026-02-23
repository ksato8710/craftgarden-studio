"use client";

import { useState } from "react";
import { products, type ProductCategory } from "@/lib/products";

const FILTERS = ["All", "Product", "Tool", "Content"] as const;
type Filter = (typeof FILTERS)[number];

const categoryColors: Record<
  ProductCategory,
  { badge: string; icon: string; strip: string; shiori: string }
> = {
  Product: {
    badge: "text-cat-product",
    icon: "bg-cat-product/12 text-cat-product",
    strip: "bg-gradient-to-br from-cat-product/8 to-kaede/6",
    shiori: "shiori-product",
  },
  Tool: {
    badge: "text-cat-tool",
    icon: "bg-cat-tool/12 text-cat-tool",
    strip: "bg-gradient-to-br from-cat-tool/8 to-tsubaki/6",
    shiori: "shiori-tool",
  },
  Content: {
    badge: "text-cat-content",
    icon: "bg-cat-content/12 text-cat-content",
    strip: "bg-gradient-to-br from-cat-content/8 to-anzu/6",
    shiori: "shiori-content",
  },
};

const categoryIcons: Record<ProductCategory, React.ReactNode> = {
  Product: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-[22px] w-[22px]">
      <path d="M7 20h10" /><path d="M12 20v-8" />
      <path d="M12 12C12 8 8 4.5 3 4c0 6 3 9 9 8z" />
      <path d="M12 12c0-4 4-7.5 9-8 0 6-3 9-9 8z" />
    </svg>
  ),
  Tool: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-[22px] w-[22px]">
      <path d="M11 20A7 7 0 0 1 4 13c0-5 7-11 8-11s8 6 8 11a7 7 0 0 1-7 7z" />
      <path d="M12 20V10" />
    </svg>
  ),
  Content: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-[22px] w-[22px]">
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v4" /><path d="M12 18v4" />
      <path d="M4.93 4.93l2.83 2.83" /><path d="M16.24 16.24l2.83 2.83" />
      <path d="M2 12h4" /><path d="M18 12h4" />
      <path d="M4.93 19.07l2.83-2.83" /><path d="M16.24 7.76l2.83-2.83" />
    </svg>
  ),
};

/* Plant-specific card strip decorations */
function KaedeStrip() {
  return (
    <>
      <svg className="absolute" style={{ left: "5%", top: "5%", width: 30, transform: "rotate(-20deg)", opacity: 0.25 }} viewBox="0 0 100 100" fill="var(--color-kaede)">
        <path d="M50 8 L55 30 L72 18 L60 38 L80 35 L58 48 L75 65 L55 55 L58 78 L50 58 L42 78 L45 55 L25 65 L42 48 L20 35 L40 38 L28 18 L45 30 Z" />
      </svg>
      <svg className="absolute" style={{ right: "10%", top: "8%", width: 22, transform: "rotate(15deg)", opacity: 0.20 }} viewBox="0 0 30 40" fill="var(--color-accent-leaf)">
        <path d="M15 0C15 0 0 15 0 25C0 33 7 40 15 40C23 40 30 33 30 25C30 15 15 0 15 0Z" />
      </svg>
      <svg className="absolute" style={{ left: "40%", top: "12%", width: 16, transform: "rotate(30deg)", opacity: 0.15 }} viewBox="0 0 100 100" fill="var(--color-kaede)">
        <path d="M50 8 L55 30 L72 18 L60 38 L80 35 L58 48 L75 65 L55 55 L58 78 L50 58 L42 78 L45 55 L25 65 L42 48 L20 35 L40 38 L28 18 L45 30 Z" />
      </svg>
    </>
  );
}

function TsubakiStrip() {
  return (
    <>
      <svg className="absolute" style={{ left: "8%", top: "3%", width: 32, transform: "rotate(-8deg)", opacity: 0.22 }} viewBox="0 0 100 100" fill="var(--color-tsubaki)">
        <ellipse cx="50" cy="28" rx="16" ry="22" />
        <ellipse cx="50" cy="28" rx="16" ry="22" transform="rotate(60 50 50)" />
        <ellipse cx="50" cy="28" rx="16" ry="22" transform="rotate(120 50 50)" />
        <ellipse cx="50" cy="28" rx="16" ry="22" transform="rotate(180 50 50)" />
        <ellipse cx="50" cy="28" rx="16" ry="22" transform="rotate(240 50 50)" />
        <ellipse cx="50" cy="28" rx="16" ry="22" transform="rotate(300 50 50)" />
        <circle cx="50" cy="50" r="6" opacity="0.4" />
      </svg>
    </>
  );
}

function AnzuStrip() {
  return (
    <>
      <svg className="absolute" style={{ left: "8%", top: "6%", width: 28, transform: "rotate(10deg)", opacity: 0.24 }} viewBox="0 0 100 100" fill="var(--color-anzu)">
        <ellipse cx="50" cy="25" rx="12" ry="18" />
        <ellipse cx="50" cy="25" rx="12" ry="18" transform="rotate(72 50 50)" />
        <ellipse cx="50" cy="25" rx="12" ry="18" transform="rotate(144 50 50)" />
        <ellipse cx="50" cy="25" rx="12" ry="18" transform="rotate(216 50 50)" />
        <ellipse cx="50" cy="25" rx="12" ry="18" transform="rotate(288 50 50)" />
        <circle cx="50" cy="50" r="5" opacity="0.35" />
      </svg>
      <svg className="absolute" style={{ right: "15%", top: "15%", width: 18, transform: "rotate(-20deg)", opacity: 0.16 }} viewBox="0 0 100 100" fill="var(--color-anzu)">
        <ellipse cx="50" cy="25" rx="12" ry="18" />
        <ellipse cx="50" cy="25" rx="12" ry="18" transform="rotate(72 50 50)" />
        <ellipse cx="50" cy="25" rx="12" ry="18" transform="rotate(144 50 50)" />
      </svg>
    </>
  );
}

const stripComponents: Record<ProductCategory, React.ReactNode> = {
  Product: <KaedeStrip />,
  Tool: <TsubakiStrip />,
  Content: <AnzuStrip />,
};

export default function Products() {
  const [filter, setFilter] = useState<Filter>("All");

  const filtered =
    filter === "All"
      ? products
      : products.filter((p) => p.category === filter);

  return (
    <section id="products" className="relative z-2 bg-bg-cream px-6 pt-10 pb-25">
      <div className="mb-14 text-center">
        <h2 className="text-h2 font-[800] tracking-[-0.02em] text-text-deep">
          What&apos;s growing
        </h2>
        <p className="mx-auto mt-2.5 max-w-[440px] text-body text-text-muted">
          Each project planted with care, nurtured with curiosity, and grown
          from real needs.
        </p>
      </div>

      {/* Category filter */}
      <div className="mb-10 flex flex-wrap items-center justify-center gap-2">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`rounded-full px-5 py-2 font-heading text-[0.85rem] font-semibold transition-all duration-150 ${
              filter === f
                ? "bg-accent-leaf text-white shadow-[0_2px_8px_rgba(107,143,113,0.25)]"
                : "bg-accent-leaf/8 text-text-muted hover:bg-accent-leaf/15 hover:text-text-deep"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="mx-auto grid max-w-[960px] grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((product) => {
          const colors = categoryColors[product.category];
          return (
            <a
              key={product.name}
              href={product.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`shiori-ribbon ${colors.shiori} group relative flex flex-col rounded-[16px] border border-accent-leaf/8 bg-bg-card transition-all duration-350 hover:-translate-y-1.5 hover:border-accent-leaf/20 hover:shadow-[0_12px_32px_rgba(45,59,46,0.08)]`}
            >
              {/* Botanical strip */}
              <div className={`relative flex h-12 w-full items-center justify-center overflow-hidden rounded-t-[16px] ${colors.strip}`}>
                {stripComponents[product.category]}
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div
                  className={`mb-3.5 flex h-11 w-11 items-center justify-center rounded-xl transition-transform duration-400 group-hover:animate-[gentle-sway_0.6s_ease] ${colors.icon}`}
                >
                  {categoryIcons[product.category]}
                </div>

                <span
                  className={`mb-1.5 font-heading text-[0.7rem] font-bold uppercase tracking-[0.08em] ${colors.badge}`}
                >
                  {product.category}
                </span>

                <h3 className="mb-2 font-heading text-h3 font-bold text-text-deep">
                  {product.name}
                </h3>

                <p className="text-small leading-relaxed text-text-muted">
                  {product.descriptionEn}
                </p>
                <p className="mt-1.5 text-[0.8rem] text-text-light" lang="ja">
                  {product.descriptionJp}
                </p>

                <span className="mt-auto flex items-center gap-1.5 pt-[18px] font-heading text-[0.83rem] font-semibold text-accent-leaf transition-[gap] duration-300 group-hover:gap-2.5">
                  Visit
                  <svg
                    className="h-[15px] w-[15px] transition-transform duration-300 group-hover:translate-x-0.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}
