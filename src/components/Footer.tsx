export default function Footer() {
  return (
    <footer className="border-t border-border px-4 py-16 text-center">
      <p className="font-mono text-[1rem] font-medium tracking-[0.08em] text-text-primary">
        craftyard.studio
      </p>

      <div className="mt-6 flex items-center justify-center gap-6">
        <a
          href="https://github.com/ksato8710"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[0.85rem] text-text-muted transition-colors hover:text-text-primary"
        >
          GitHub
        </a>
      </div>

      <p className="mt-8 text-[0.8rem] text-text-muted">
        &copy; 2026 craftyard.studio. All rights reserved.
      </p>
    </footer>
  );
}
