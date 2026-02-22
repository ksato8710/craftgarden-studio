const pillars = [
  {
    titleEn: "Craft",
    titleJp: "クラフト",
    textEn: "Build with care. Ship with pride.",
    textJp: "丁寧につくり、誇りをもって届ける。",
  },
  {
    titleEn: "AI-Native",
    titleJp: "AIネイティブ",
    textEn: "AI is woven into every layer of the process.",
    textJp: "AIはプロセスのすべてのレイヤーに織り込まれている。",
  },
  {
    titleEn: "Solo Scale",
    titleJp: "ソロスケール",
    textEn: "One person, many products. Systems make it possible.",
    textJp: "ひとりで、多くのプロダクトを。仕組みがそれを可能にする。",
  },
];

export default function Philosophy() {
  return (
    <section id="philosophy" className="section">
      <div className="text-center">
        <h2 className="text-text-bright">Philosophy</h2>
      </div>

      <blockquote className="mx-auto mt-10 max-w-3xl text-center">
        <p className="text-[1.25rem] leading-[1.8] text-text-primary">
          I build products alone, but never without purpose.
          <br />
          Every tool in this studio exists because someone — often me — needed
          it. AI is my collaborator, not a shortcut. It accelerates the craft,
          but the vision is always human.
        </p>
        <p
          className="mt-6 text-[1rem] leading-[1.8] text-text-secondary"
          lang="ja"
        >
          ひとりでつくる。でも、目的なくつくることはない。
          <br />
          この工房のすべてのツールは、誰かが — 多くの場合、自分が —
          必要としたから生まれた。
          <br />
          AIは協力者であり、近道ではない。
          <br />
          ものづくりを加速させるが、ビジョンは常に人間のもの。
        </p>
      </blockquote>

      <div className="divider mx-auto my-12 max-w-xl" />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {pillars.map((pillar) => (
          <div
            key={pillar.titleEn}
            className="rounded-xl border border-border bg-bg-secondary p-6 text-center"
          >
            <h3 className="text-[1.125rem] font-semibold text-text-bright">
              {pillar.titleEn}
            </h3>
            <p className="mt-1 text-[0.8rem] text-text-muted" lang="ja">
              {pillar.titleJp}
            </p>
            <p className="mt-4 text-[0.95rem] leading-relaxed text-text-secondary">
              {pillar.textEn}
            </p>
            <p
              className="mt-2 text-[0.875rem] leading-relaxed text-text-muted"
              lang="ja"
            >
              {pillar.textJp}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
