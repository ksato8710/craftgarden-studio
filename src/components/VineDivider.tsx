export default function VineDivider() {
  return (
    <div
      className="relative z-2 flex h-20 w-full items-center justify-center overflow-hidden"
      aria-hidden="true"
    >
      <svg
        className="h-auto w-[min(90vw,600px)] opacity-45"
        viewBox="0 0 600 40"
        fill="none"
        strokeLinecap="round"
      >
        <defs>
          <linearGradient id="vine-grad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="var(--color-kaede)" />
            <stop offset="35%" stopColor="var(--color-tsubaki)" />
            <stop offset="70%" stopColor="var(--color-anzu)" />
            <stop offset="100%" stopColor="var(--color-accent-leaf)" />
          </linearGradient>
        </defs>
        <path
          d="M0 20 C100 15 150 25 200 20 C250 15 300 25 350 20 C400 15 450 25 500 20 C550 15 580 25 600 20"
          stroke="url(#vine-grad)"
          strokeWidth="1.8"
        />
        <circle cx="120" cy="17" r="5" fill="var(--color-kaede)" opacity="0.5" />
        <circle cx="250" cy="23" r="6" fill="var(--color-tsubaki)" opacity="0.45" />
        <circle cx="380" cy="17" r="5" fill="var(--color-anzu)" opacity="0.5" />
        <circle cx="500" cy="21" r="4" fill="var(--color-accent-leaf)" opacity="0.45" />
      </svg>
    </div>
  );
}
