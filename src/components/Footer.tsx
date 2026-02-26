export default function Footer() {
  return (
    <footer className="relative z-2 bg-text-deep px-6 pt-20 pb-10 text-center text-bg-cream">
      {/* Wave top decoration */}
      <div
        className="pointer-events-none absolute top-0 left-0 h-[60px] w-full -translate-y-[99%] overflow-hidden"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 1440 60"
          preserveAspectRatio="none"
          className="h-full w-full"
        >
          <path
            d="M0,40 C240,60 480,10 720,40 C960,70 1200,10 1440,40 L1440,60 L0,60 Z"
            fill="#2A4A32"
          />
        </svg>
      </div>

      <div className="flex items-center justify-center gap-2.5 font-heading text-[1.4rem] font-[800]">
        <svg
          className="h-5 w-5 text-accent-sage"
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
      </div>

      <p className="mt-2 font-heading text-[0.95rem] font-semibold opacity-60">
        Plant ideas. Watch them grow. Have fun.
      </p>
      <p className="mt-1.5 text-[0.82rem] opacity-40" lang="ja">
        アイデアの種を蒔こう。育てよう。楽しもう。
      </p>

      <div className="mt-9 flex flex-wrap items-center justify-center gap-6">
        <a
          href="https://github.com/ksato8710"
          target="_blank"
          rel="noopener noreferrer"
          className="font-heading text-[0.88rem] font-semibold opacity-50 transition-opacity duration-200 hover:opacity-100"
        >
          GitHub
        </a>
        <a
          href="https://x.com"
          target="_blank"
          rel="noopener noreferrer"
          className="font-heading text-[0.88rem] font-semibold opacity-50 transition-opacity duration-200 hover:opacity-100"
        >
          X / Twitter
        </a>
        <a
          href="https://ai-solo-craft.craftgarden.studio"
          target="_blank"
          rel="noopener noreferrer"
          className="font-heading text-[0.88rem] font-semibold opacity-50 transition-opacity duration-200 hover:opacity-100"
        >
          Blog
        </a>
      </div>

      <p className="mt-10 text-[0.78rem] opacity-30">
        &copy; 2026 craftgarden.studio. All rights reserved.
      </p>
    </footer>
  );
}
