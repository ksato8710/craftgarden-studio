"use client";

import { useEffect, useState } from "react";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 border-b border-accent-leaf/10 backdrop-blur-[12px] transition-shadow duration-300 ${
        scrolled ? "shadow-[0_2px_20px_rgba(45,59,46,0.06)]" : ""
      }`}
      style={{ background: "rgba(250, 250, 245, 0.9)" }}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-16 max-w-[1120px] items-center justify-between px-6"
      >
        <a
          href="#hero"
          className="flex items-center gap-2.5 font-heading text-[1.15rem] font-[800] tracking-[-0.01em] text-text-deep"
        >
          <svg
            className="h-5 w-5 shrink-0 text-accent-leaf"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 22c1-4 4-7 8-8-4-1-7-4-8-8-1 4-4 7-8 8 4 1 7 4 8 8z" />
          </svg>
          craftgarden.studio
        </a>

        <ul className="hidden items-center gap-7 sm:flex">
          {[
            { href: "#products", label: "Products" },
            { href: "#philosophy", label: "Philosophy" },
          ].map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="group relative font-heading text-[0.9rem] font-semibold text-text-muted transition-colors duration-200 hover:text-text-deep"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 rounded-sm bg-accent-leaf transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
