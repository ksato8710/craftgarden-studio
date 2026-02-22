export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center px-4 text-center"
      style={{
        background:
          "linear-gradient(180deg, #0a0e1a 0%, #0f1629 50%, #0a0e1a 100%)",
      }}
    >
      <div className="animate-fade-in-up">
        <p className="mb-8 font-mono text-[1.25rem] font-medium tracking-[0.08em] text-text-muted">
          craftyard.studio
        </p>

        <h1 className="mx-auto max-w-3xl text-display font-bold leading-[1.15] tracking-[-0.02em] text-text-bright">
          Crafting digital products
          <br />
          with AI and passion.
        </h1>

        <p
          className="mt-6 text-[1.125rem] leading-relaxed text-text-secondary"
          lang="ja"
        >
          AIと情熱で、デジタルプロダクトをつくる。
        </p>

        <p className="mt-3 text-[1rem] leading-relaxed text-text-muted" lang="ja">
          アイデアが本物のプロダクトになる、ソロビルダーの工房。
        </p>

        <a
          href="#products"
          className="btn-primary mt-12 inline-flex items-center gap-2"
        >
          View Products
          <span aria-hidden="true">&#8595;</span>
        </a>
      </div>
    </section>
  );
}
