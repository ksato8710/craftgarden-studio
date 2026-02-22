"use client";

import { useEffect, useState } from "react";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bg-primary/95 backdrop-blur-xl shadow-[0_1px_0_rgba(255,255,255,0.05)]"
          : "bg-transparent"
      }`}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-[1120px] items-center justify-between px-4 py-4 md:px-8"
      >
        <a
          href="#hero"
          className="font-mono text-[1.25rem] font-medium tracking-[0.08em] text-text-bright"
        >
          craftgarden.studio
        </a>

        <ul className="hidden items-center gap-8 sm:flex">
          {[
            { href: "#products", label: "Products" },
            { href: "#philosophy", label: "Philosophy" },
            { href: "#stack", label: "Stack" },
          ].map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-[0.85rem] font-medium tracking-[0.02em] text-text-secondary transition-colors duration-150 hover:text-text-primary"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
