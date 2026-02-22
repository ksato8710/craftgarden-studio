import { techStack } from "@/lib/products";

export default function TechStack() {
  return (
    <section id="stack" className="section">
      <div className="mb-10 text-center">
        <h2 className="text-text-bright">Tech Stack</h2>
        <p className="mt-3 text-text-secondary" lang="ja">
          ツールの裏側にあるツール。
        </p>
      </div>

      <div className="mx-auto max-w-3xl space-y-6">
        {techStack.map((group) => (
          <div key={group.category} className="flex flex-wrap items-center gap-3">
            <span className="w-24 shrink-0 text-[0.85rem] font-medium text-text-muted">
              {group.category}
            </span>
            <div className="flex flex-wrap gap-2">
              {group.items.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-bg-tertiary px-3.5 py-1.5 font-mono text-[0.8rem] font-medium tracking-[0.02em] text-text-secondary"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
