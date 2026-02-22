const values = [
  {
    label: "Grow",
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
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22a9 9 0 0 0 9-9c0-3-1.5-5.5-4-7.5C14.5 3.5 12 2 12 2s-2.5 1.5-5 3.5C4.5 7.5 3 10 3 13a9 9 0 0 0 9 9z" />
        <path d="M12 22V12" />
      </svg>
    ),
  },
  {
    label: "Bloom",
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
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16" />
      </svg>
    ),
  },
];

export default function Philosophy() {
  return (
    <section id="philosophy" className="relative z-2 bg-bg-warm px-6 py-20">
      <div className="relative mx-auto max-w-[640px] text-center">
        {/* 栞 Shiori: crossed ribbons behind the content */}
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
              <div className="h-8 w-8 text-accent-sage">{v.icon}</div>
              <span className="font-heading text-[0.85rem] font-bold text-text-muted">
                {v.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
