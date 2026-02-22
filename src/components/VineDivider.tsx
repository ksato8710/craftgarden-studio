export default function VineDivider() {
  return (
    <div
      className="relative z-2 flex h-20 w-full items-center justify-center overflow-hidden"
      aria-hidden="true"
    >
      {/* 栞 Shiori: bookmark icon at vine center */}
      <svg
        className="absolute top-1/2 left-1/2 z-3 -translate-x-1/2 -translate-y-1/2 opacity-35"
        width="14"
        height="22"
        viewBox="0 0 14 22"
        fill="none"
      >
        <path
          d="M1 0.5 L1 17.5 L7 14 L13 17.5 L13 0.5 Z"
          fill="var(--color-accent-sage)"
        />
        <path
          d="M1 0.5 L13 0.5"
          stroke="var(--color-accent-sage)"
          strokeWidth="0.6"
          opacity="0.4"
        />
      </svg>
      <svg
        className="h-auto w-[min(90vw,600px)] text-accent-sage opacity-30"
        viewBox="0 0 600 40"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      >
        <path d="M0 20 C100 15 150 25 200 20 C250 15 300 25 350 20 C400 15 450 25 500 20 C550 15 580 25 600 20" />
        <path d="M100 18 C95 10 85 8 80 12" fill="currentColor" opacity="0.2" stroke="none" />
        <path d="M100 18 C95 26 85 28 80 24" fill="currentColor" opacity="0.15" stroke="none" />
        <path d="M200 20 C195 12 185 10 180 14" fill="currentColor" opacity="0.2" stroke="none" />
        <path d="M300 20 C305 12 315 10 320 14" fill="currentColor" opacity="0.15" stroke="none" />
        <path d="M300 20 C305 28 315 30 320 26" fill="currentColor" opacity="0.2" stroke="none" />
        <path d="M400 18 C395 10 385 8 380 12" fill="currentColor" opacity="0.15" stroke="none" />
        <path d="M500 20 C505 12 515 10 520 14" fill="currentColor" opacity="0.2" stroke="none" />
        <path d="M500 20 C505 28 515 30 520 26" fill="currentColor" opacity="0.15" stroke="none" />
        <circle cx="150" cy="22" r="2.5" fill="currentColor" opacity="0.2" />
        <circle cx="250" cy="18" r="2" fill="currentColor" opacity="0.15" />
        <circle cx="350" cy="22" r="2.5" fill="currentColor" opacity="0.2" />
        <circle cx="450" cy="18" r="2" fill="currentColor" opacity="0.15" />
        <circle cx="550" cy="22" r="2" fill="currentColor" opacity="0.2" />
      </svg>
    </div>
  );
}
