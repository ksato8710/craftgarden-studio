const values = [
  {
    label: "Grow",
    color: "text-accent-sage",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 20h10" /><path d="M12 20v-8" />
        <path d="M12 12C12 8 8 4.5 3 4c0 6 3 9 9 8z" />
        <path d="M12 12c0-4 4-7.5 9-8 0 6-3 9-9 8z" />
      </svg>
    ),
  },
  {
    label: "Nurture",
    color: "text-tsubaki",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22a9 9 0 0 0 9-9c0-3-1.5-5.5-4-7.5C14.5 3.5 12 2 12 2s-2.5 1.5-5 3.5C4.5 7.5 3 10 3 13a9 9 0 0 0 9 9z" />
        <path d="M12 22V12" />
      </svg>
    ),
  },
  {
    label: "Bloom",
    color: "text-anzu",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v4" /><path d="M12 18v4" />
        <path d="M4.93 4.93l2.83 2.83" /><path d="M16.24 16.24l2.83 2.83" />
        <path d="M2 12h4" /><path d="M18 12h4" />
      </svg>
    ),
  },
  {
    label: "Ship",
    color: "text-accent-sage",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16" />
      </svg>
    ),
  },
];

function GradientLine() {
  return (
    <div
      className="mx-auto h-[3px] max-w-[200px] rounded-sm opacity-40"
      style={{
        background: "linear-gradient(90deg, var(--color-kaede), var(--color-tsubaki), var(--color-anzu))",
      }}
    />
  );
}

export default function Philosophy() {
  return (
    <section id="philosophy" className="relative z-2 overflow-hidden bg-bg-warm px-6 py-20">
      {/* Decorative tsubaki flower (top-left) */}
      <svg
        className="pointer-events-none absolute top-[8%] left-[3%]"
        style={{ width: 80, transform: "rotate(-15deg)", opacity: 0.12 }}
        viewBox="0 0 100 100"
        fill="var(--color-tsubaki)"
        aria-hidden="true"
      >
        <ellipse cx="50" cy="28" rx="16" ry="22" />
        <ellipse cx="50" cy="28" rx="16" ry="22" transform="rotate(60 50 50)" />
        <ellipse cx="50" cy="28" rx="16" ry="22" transform="rotate(120 50 50)" />
        <ellipse cx="50" cy="28" rx="16" ry="22" transform="rotate(180 50 50)" />
        <ellipse cx="50" cy="28" rx="16" ry="22" transform="rotate(240 50 50)" />
        <ellipse cx="50" cy="28" rx="16" ry="22" transform="rotate(300 50 50)" />
      </svg>

      {/* Decorative anzu blossom (bottom-right) */}
      <svg
        className="pointer-events-none absolute right-[3%] bottom-[8%]"
        style={{ width: 65, transform: "rotate(20deg)", opacity: 0.12 }}
        viewBox="0 0 100 100"
        fill="var(--color-anzu)"
        aria-hidden="true"
      >
        <ellipse cx="50" cy="25" rx="12" ry="18" />
        <ellipse cx="50" cy="25" rx="12" ry="18" transform="rotate(72 50 50)" />
        <ellipse cx="50" cy="25" rx="12" ry="18" transform="rotate(144 50 50)" />
        <ellipse cx="50" cy="25" rx="12" ry="18" transform="rotate(216 50 50)" />
        <ellipse cx="50" cy="25" rx="12" ry="18" transform="rotate(288 50 50)" />
      </svg>

      {/* Decorative kaede leaf (mid-right) */}
      <svg
        className="pointer-events-none absolute top-1/2 right-[8%]"
        style={{ width: 50, transform: "rotate(-30deg)", opacity: 0.08 }}
        viewBox="0 0 100 100"
        fill="var(--color-kaede)"
        aria-hidden="true"
      >
        <path d="M50 8 L55 30 L72 18 L60 38 L80 35 L58 48 L75 65 L55 55 L58 78 L50 58 L42 78 L45 55 L25 65 L42 48 L20 35 L40 38 L28 18 L45 30 Z" />
      </svg>

      <GradientLine />

      <div className="relative mx-auto mt-10 max-w-[640px] text-center">
        {/* Crossed ribbons behind content */}
        <div
          className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          aria-hidden="true"
          style={{ width: 220, height: 220, opacity: 0.12 }}
        >
          <div
            className="absolute top-0 left-1/2 h-full w-[3px] rounded-sm bg-accent-sage"
            style={{ transform: "translateX(-50%) rotate(25deg)" }}
          />
          <div
            className="absolute top-0 left-1/2 h-full w-[3px] rounded-sm bg-accent-sage"
            style={{ transform: "translateX(-50%) rotate(-25deg)" }}
          />
        </div>

        <svg
          className="relative z-1 mx-auto mb-6 h-12 w-12 text-accent-sage"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 22c1-4 4-7 8-8-4-1-7-4-8-8-1 4-4 7-8 8 4 1 7 4 8 8z" />
        </svg>

        <h2 className="relative z-1 mb-5 text-h2 font-[800] tracking-[-0.02em] text-text-deep">
          A garden, not a factory
        </h2>

        <p className="relative z-1 mb-3 text-body text-text-muted" lang="ja">
          工場ではなく、庭をつくる。
        </p>

        <p className="relative z-1 text-body leading-[1.85] text-text-muted">
          Every product here is grown, not manufactured. Ideas are planted as
          small seeds, watered with curiosity, and given time to take root. Some
          bloom quickly; others need patience.
        </p>

        <div className="relative z-1 mt-10 flex flex-wrap justify-center gap-8">
          {values.map((v) => (
            <div key={v.label} className="flex flex-col items-center gap-2.5">
              <div className={`h-8 w-8 ${v.color} opacity-70`}>{v.icon}</div>
              <span className="font-heading text-[0.85rem] font-bold text-text-muted">
                {v.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10">
        <GradientLine />
      </div>
    </section>
  );
}
