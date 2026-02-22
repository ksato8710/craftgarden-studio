export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-30 pb-45 text-center"
    >
      {/* 栞 Shiori: ribbon hanging from top center */}
      <div
        className="pointer-events-none absolute top-0 left-1/2 z-1 -translate-x-1/2"
        aria-hidden="true"
      >
        <div
          className="w-[6px] rounded-b-sm"
          style={{
            height: 240,
            background: "linear-gradient(to bottom, var(--color-accent-leaf) 0%, var(--color-accent-leaf) 90%, transparent 100%)",
            opacity: 0.22,
          }}
        />
        {/* V-notch */}
        <div
          className="mx-auto -mt-px"
          style={{
            width: 0,
            height: 0,
            borderLeft: "3px solid transparent",
            borderRight: "3px solid transparent",
            borderTop: "6px solid var(--color-accent-leaf)",
            opacity: 0.22,
          }}
        />
      </div>

      {/* Large botanical illustration — very subtle behind text */}
      <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center overflow-hidden">
        <svg
          className="h-auto w-[min(90vw,800px)] text-accent-moss opacity-6"
          viewBox="0 0 800 800"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.8"
        >
          {/* Main maple branch */}
          <path d="M400 760 C395 650 380 550 360 450 C340 350 320 280 280 200 C260 160 240 120 200 80" strokeWidth="2" opacity="0.5" />
          <path d="M360 450 C400 400 440 350 500 300 C540 270 580 240 620 200" strokeWidth="1.5" opacity="0.4" />
          <path d="M280 200 C250 170 220 160 190 170" strokeWidth="1" opacity="0.3" />
          <path d="M280 200 C270 160 250 130 230 110" strokeWidth="1" opacity="0.3" />
          <path d="M500 300 C530 280 560 290 580 280" strokeWidth="1" opacity="0.3" />
          <path d="M620 200 C640 170 660 160 680 170" strokeWidth="0.8" opacity="0.25" />
          <path d="M360 450 C330 430 300 440 280 460" strokeWidth="1" opacity="0.3" />

          {/* Maple leaves on branch */}
          <g transform="translate(185, 65) rotate(-15) scale(0.55)" fill="currentColor" opacity="0.18">
            <path d="M50 8 L55 30 L72 18 L60 38 L80 35 L58 48 L75 65 L55 55 L58 78 L50 58 L42 78 L45 55 L25 65 L42 48 L20 35 L40 38 L28 18 L45 30 Z" />
          </g>
          <g transform="translate(220, 105) rotate(20) scale(0.45)" fill="currentColor" opacity="0.15">
            <path d="M50 8 L55 30 L72 18 L60 38 L80 35 L58 48 L75 65 L55 55 L58 78 L50 58 L42 78 L45 55 L25 65 L42 48 L20 35 L40 38 L28 18 L45 30 Z" />
          </g>
          <g transform="translate(600, 185) rotate(-10) scale(0.5)" fill="currentColor" opacity="0.16">
            <path d="M50 8 L55 30 L72 18 L60 38 L80 35 L58 48 L75 65 L55 55 L58 78 L50 58 L42 78 L45 55 L25 65 L42 48 L20 35 L40 38 L28 18 L45 30 Z" />
          </g>
          <g transform="translate(265, 440) rotate(-25) scale(0.4)" fill="currentColor" opacity="0.13">
            <path d="M50 8 L55 30 L72 18 L60 38 L80 35 L58 48 L75 65 L55 55 L58 78 L50 58 L42 78 L45 55 L25 65 L42 48 L20 35 L40 38 L28 18 L45 30 Z" />
          </g>

          {/* Camellia flower on branch */}
          <g transform="translate(480, 280) scale(0.7)">
            <ellipse cx="0" cy="-20" rx="14" ry="22" fill="currentColor" opacity="0.14" />
            <ellipse cx="0" cy="-20" rx="14" ry="22" fill="currentColor" opacity="0.12" transform="rotate(60)" />
            <ellipse cx="0" cy="-20" rx="14" ry="22" fill="currentColor" opacity="0.14" transform="rotate(120)" />
            <ellipse cx="0" cy="-20" rx="14" ry="22" fill="currentColor" opacity="0.12" transform="rotate(180)" />
            <ellipse cx="0" cy="-20" rx="14" ry="22" fill="currentColor" opacity="0.14" transform="rotate(240)" />
            <ellipse cx="0" cy="-20" rx="14" ry="22" fill="currentColor" opacity="0.12" transform="rotate(300)" />
            <circle cx="0" cy="0" r="7" fill="currentColor" opacity="0.1" />
          </g>

          {/* Apricot blossom clusters */}
          <g transform="translate(240, 118) scale(0.5)">
            <ellipse cx="0" cy="-12" rx="8" ry="13" fill="currentColor" opacity="0.15" />
            <ellipse cx="0" cy="-12" rx="8" ry="13" fill="currentColor" opacity="0.12" transform="rotate(72)" />
            <ellipse cx="0" cy="-12" rx="8" ry="13" fill="currentColor" opacity="0.15" transform="rotate(144)" />
            <ellipse cx="0" cy="-12" rx="8" ry="13" fill="currentColor" opacity="0.12" transform="rotate(216)" />
            <ellipse cx="0" cy="-12" rx="8" ry="13" fill="currentColor" opacity="0.15" transform="rotate(288)" />
            <circle cx="0" cy="0" r="4" fill="currentColor" opacity="0.12" />
          </g>
          <g transform="translate(565, 255) scale(0.45)">
            <ellipse cx="0" cy="-12" rx="8" ry="13" fill="currentColor" opacity="0.14" />
            <ellipse cx="0" cy="-12" rx="8" ry="13" fill="currentColor" opacity="0.11" transform="rotate(72)" />
            <ellipse cx="0" cy="-12" rx="8" ry="13" fill="currentColor" opacity="0.14" transform="rotate(144)" />
            <ellipse cx="0" cy="-12" rx="8" ry="13" fill="currentColor" opacity="0.11" transform="rotate(216)" />
            <ellipse cx="0" cy="-12" rx="8" ry="13" fill="currentColor" opacity="0.14" transform="rotate(288)" />
          </g>
        </svg>

        {/* Radial fade for text readability */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 50%, #FAFAF5 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Side decorative: maple branch (left) */}
      <div
        className="pointer-events-none absolute bottom-[15%] -left-10 z-1 w-[200px] text-accent-leaf opacity-30 max-md:hidden"
        style={{ transform: "rotate(15deg)" }}
        aria-hidden="true"
      >
        <svg viewBox="0 0 200 350" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M180 340 C160 280 140 220 110 160 C90 120 70 80 40 30" strokeWidth="2" />
          <path d="M110 160 C80 150 50 160 30 185" strokeWidth="1.2" />
          <path d="M140 230 C110 225 80 240 60 265" strokeWidth="1.2" />
          <g transform="translate(35, 25) rotate(-10) scale(0.35)" fill="currentColor">
            <path d="M50 8 L55 30 L72 18 L60 38 L80 35 L58 48 L75 65 L55 55 L58 78 L50 58 L42 78 L45 55 L25 65 L42 48 L20 35 L40 38 L28 18 L45 30 Z" opacity="0.5" />
          </g>
          <g transform="translate(22, 175) rotate(15) scale(0.3)" fill="currentColor">
            <path d="M50 8 L55 30 L72 18 L60 38 L80 35 L58 48 L75 65 L55 55 L58 78 L50 58 L42 78 L45 55 L25 65 L42 48 L20 35 L40 38 L28 18 L45 30 Z" opacity="0.4" />
          </g>
          <g transform="translate(50, 255) rotate(-20) scale(0.28)" fill="currentColor">
            <path d="M50 8 L55 30 L72 18 L60 38 L80 35 L58 48 L75 65 L55 55 L58 78 L50 58 L42 78 L45 55 L25 65 L42 48 L20 35 L40 38 L28 18 L45 30 Z" opacity="0.35" />
          </g>
        </svg>
      </div>

      {/* Side decorative: apricot + camellia branch (right) */}
      <div
        className="pointer-events-none absolute top-[20%] -right-[30px] z-1 w-[160px] text-accent-leaf opacity-30 max-md:hidden"
        style={{ transform: "rotate(-20deg) scaleX(-1)" }}
        aria-hidden="true"
      >
        <svg viewBox="0 0 180 320" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M10 310 C30 250 60 190 90 140 C110 100 130 65 150 25" strokeWidth="1.8" />
          <path d="M90 140 C120 130 145 145 160 170" strokeWidth="1.2" />
          <g transform="translate(148, 22) scale(0.3)" fill="currentColor">
            <ellipse cx="0" cy="-10" rx="7" ry="11" opacity="0.5" />
            <ellipse cx="0" cy="-10" rx="7" ry="11" transform="rotate(72)" opacity="0.4" />
            <ellipse cx="0" cy="-10" rx="7" ry="11" transform="rotate(144)" opacity="0.5" />
            <ellipse cx="0" cy="-10" rx="7" ry="11" transform="rotate(216)" opacity="0.4" />
            <ellipse cx="0" cy="-10" rx="7" ry="11" transform="rotate(288)" opacity="0.5" />
            <circle cx="0" cy="0" r="3" opacity="0.3" />
          </g>
          <g transform="translate(155, 165) scale(0.35)" fill="currentColor">
            <ellipse cx="0" cy="-16" rx="12" ry="18" opacity="0.35" />
            <ellipse cx="0" cy="-16" rx="12" ry="18" transform="rotate(60)" opacity="0.3" />
            <ellipse cx="0" cy="-16" rx="12" ry="18" transform="rotate(120)" opacity="0.35" />
            <ellipse cx="0" cy="-16" rx="12" ry="18" transform="rotate(180)" opacity="0.3" />
            <ellipse cx="0" cy="-16" rx="12" ry="18" transform="rotate(240)" opacity="0.35" />
            <ellipse cx="0" cy="-16" rx="12" ry="18" transform="rotate(300)" opacity="0.3" />
            <circle cx="0" cy="0" r="5" opacity="0.2" />
          </g>
        </svg>
      </div>

      {/* Hero content */}
      <div className="relative z-2 max-w-[680px]">
        <div className="mb-8 inline-flex animate-fade-in-up items-center gap-2 rounded-full border border-accent-leaf/15 bg-accent-leaf/8 px-[18px] py-2 font-heading text-[0.82rem] font-bold text-accent-leaf">
          <svg
            className="h-[15px] w-[15px]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M7 20h10" />
            <path d="M12 20v-8" />
            <path d="M12 12C12 8 8 4.5 3 4c0 6 3 9 9 8z" />
            <path d="M12 12c0-4 4-7.5 9-8 0 6-3 9-9 8z" />
          </svg>
          Solo Builder&apos;s Garden
        </div>

        <h1 className="animate-[fade-in-up_0.8s_0.1s_ease-out_both] text-display font-[800] leading-[1.15] tracking-[-0.025em] text-text-deep">
          Plant ideas.
          <br />
          <span className="text-accent-leaf">Watch them grow.</span>
          <br />
          Have fun.
        </h1>

        <p
          className="mt-4 animate-[fade-in-up_0.8s_0.2s_ease-out_both] font-heading text-[clamp(0.95rem,2.2vw,1.2rem)] font-semibold text-text-muted"
          lang="ja"
        >
          アイデアの種を蒔こう。育てよう。楽しもう。
        </p>

        <p className="mx-auto mt-5 max-w-[500px] animate-[fade-in-up_0.8s_0.3s_ease-out_both] text-[clamp(0.95rem,2vw,1.1rem)] leading-[1.75] text-text-light">
          A one-person studio crafting tools, products, and content with
          curiosity and care. Every project starts as a tiny seed.
        </p>

        <a
          href="#products"
          className="mt-10 inline-flex animate-[fade-in-up_0.8s_0.4s_ease-out_both] items-center gap-2.5 rounded-full bg-accent-leaf px-8 py-3.5 font-heading text-[1rem] font-bold text-white shadow-[0_4px_16px_rgba(107,143,113,0.25)] transition-all duration-250 hover:-translate-y-0.5 hover:bg-accent-moss hover:shadow-[0_8px_24px_rgba(107,143,113,0.3)]"
        >
          Explore the garden
          <svg
            className="h-[18px] w-[18px] transition-transform duration-300 group-hover:translate-x-0.5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </section>
  );
}
