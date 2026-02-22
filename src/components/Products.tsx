"use client";

import { useState } from "react";
import { products, type ProductCategory } from "@/lib/products";

const FILTERS = ["All", "Product", "Tool", "Content"] as const;
type Filter = (typeof FILTERS)[number];

const badgeClass: Record<ProductCategory, string> = {
  Product: "badge badge-product",
  Tool: "badge badge-tool",
  Content: "badge badge-content",
};

export default function Products() {
  const [filter, setFilter] = useState<Filter>("All");

  const filtered =
    filter === "All"
      ? products
      : products.filter((p) => p.category === filter);

  return (
    <section id="products" className="section">
      <div className="mb-4 text-center">
        <h2 className="text-text-bright">Products</h2>
        <p className="mt-3 text-text-secondary" lang="ja">
          つくったもの。すべて実際の課題を解くためのプロダクト。
        </p>
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`rounded-full px-4 py-2 text-[0.85rem] font-medium transition-all duration-150 ${
              filter === f
                ? "bg-accent-primary text-white"
                : "bg-bg-tertiary text-text-secondary hover:text-text-primary"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((product) => (
          <a
            key={product.name}
            href={product.url}
            target="_blank"
            rel="noopener noreferrer"
            className="card group flex flex-col"
          >
            <span className={badgeClass[product.category]}>
              {product.category}
            </span>

            <h3 className="mt-4 text-[1.125rem] font-semibold leading-snug text-text-bright">
              {product.name}
            </h3>

            <p className="mt-2 text-[0.875rem] leading-relaxed text-text-secondary" lang="ja">
              {product.descriptionJp}
            </p>

            <span className="mt-auto flex items-center gap-1 pt-5 text-[0.85rem] font-medium text-accent-primary transition-colors group-hover:text-accent-secondary">
              Visit
              <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">
                &#8594;
              </span>
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
