export default function BotanicalBackground() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 text-accent-leaf opacity-22"
      aria-hidden="true"
    >
      {/* === Kaede (Japanese maple) leaves === */}
      <svg
        className="absolute animate-[gentle-drift_14s_ease-in-out_infinite]"
        style={
          {
            top: "5%",
            left: "4%",
            width: 70,
            "--drift-base": "rotate(-20deg)",
          } as React.CSSProperties
        }
        viewBox="0 0 100 100"
        fill="currentColor"
      >
        <path
          d="M50 8 L55 30 L72 18 L60 38 L80 35 L58 48 L75 65 L55 55 L58 78 L50 58 L42 78 L45 55 L25 65 L42 48 L20 35 L40 38 L28 18 L45 30 Z"
          opacity="0.6"
        />
        <path d="M50 58 L50 95" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.3" />
      </svg>

      <svg
        className="absolute animate-[gentle-drift_16s_ease-in-out_infinite]"
        style={
          {
            top: "18%",
            right: "6%",
            width: 55,
            "--drift-base": "rotate(25deg)",
          } as React.CSSProperties
        }
        viewBox="0 0 100 100"
        fill="currentColor"
      >
        <path
          d="M50 8 L55 30 L72 18 L60 38 L80 35 L58 48 L75 65 L55 55 L58 78 L50 58 L42 78 L45 55 L25 65 L42 48 L20 35 L40 38 L28 18 L45 30 Z"
          opacity="0.5"
        />
        <path d="M50 58 L50 95" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.25" />
      </svg>

      <svg
        className="absolute animate-[gentle-drift_18s_ease-in-out_infinite]"
        style={
          {
            top: "48%",
            left: "3%",
            width: 40,
            "--drift-base": "rotate(-35deg)",
          } as React.CSSProperties
        }
        viewBox="0 0 100 100"
        fill="currentColor"
      >
        <path
          d="M50 8 L55 30 L72 18 L60 38 L80 35 L58 48 L75 65 L55 55 L58 78 L50 58 L42 78 L45 55 L25 65 L42 48 L20 35 L40 38 L28 18 L45 30 Z"
          opacity="0.45"
        />
      </svg>

      <svg
        className="absolute animate-[gentle-drift_15s_ease-in-out_infinite]"
        style={
          {
            top: "75%",
            right: "8%",
            width: 50,
            "--drift-base": "rotate(40deg)",
          } as React.CSSProperties
        }
        viewBox="0 0 100 100"
        fill="currentColor"
      >
        <path
          d="M50 8 L55 30 L72 18 L60 38 L80 35 L58 48 L75 65 L55 55 L58 78 L50 58 L42 78 L45 55 L25 65 L42 48 L20 35 L40 38 L28 18 L45 30 Z"
          opacity="0.5"
        />
      </svg>

      {/* Small maple leaves for density */}
      <svg
        className="absolute"
        style={{ top: "55%", left: "80%", width: 30, transform: "rotate(50deg)" }}
        viewBox="0 0 100 100"
        fill="currentColor"
      >
        <path
          d="M50 8 L55 30 L72 18 L60 38 L80 35 L58 48 L75 65 L55 55 L58 78 L50 58 L42 78 L45 55 L25 65 L42 48 L20 35 L40 38 L28 18 L45 30 Z"
          opacity="0.35"
        />
      </svg>

      <svg
        className="absolute"
        style={{ top: "90%", left: "15%", width: 25, transform: "rotate(-55deg)" }}
        viewBox="0 0 100 100"
        fill="currentColor"
      >
        <path
          d="M50 8 L55 30 L72 18 L60 38 L80 35 L58 48 L75 65 L55 55 L58 78 L50 58 L42 78 L45 55 L25 65 L42 48 L20 35 L40 38 L28 18 L45 30 Z"
          opacity="0.3"
        />
      </svg>

      {/* === Anzu (Apricot blossom) === */}
      <svg
        className="absolute animate-[gentle-drift_13s_ease-in-out_infinite]"
        style={
          {
            top: "12%",
            left: "65%",
            width: 50,
            "--drift-base": "rotate(10deg)",
          } as React.CSSProperties
        }
        viewBox="0 0 100 100"
        fill="currentColor"
      >
        <ellipse cx="50" cy="25" rx="12" ry="18" opacity="0.5" />
        <ellipse cx="50" cy="25" rx="12" ry="18" transform="rotate(72 50 50)" opacity="0.45" />
        <ellipse cx="50" cy="25" rx="12" ry="18" transform="rotate(144 50 50)" opacity="0.5" />
        <ellipse cx="50" cy="25" rx="12" ry="18" transform="rotate(216 50 50)" opacity="0.45" />
        <ellipse cx="50" cy="25" rx="12" ry="18" transform="rotate(288 50 50)" opacity="0.5" />
        <circle cx="50" cy="50" r="6" opacity="0.3" />
      </svg>

      <svg
        className="absolute animate-[gentle-drift_17s_ease-in-out_infinite]"
        style={
          {
            top: "38%",
            right: "4%",
            width: 35,
            "--drift-base": "rotate(-15deg)",
          } as React.CSSProperties
        }
        viewBox="0 0 100 100"
        fill="currentColor"
      >
        <ellipse cx="50" cy="25" rx="12" ry="18" opacity="0.4" />
        <ellipse cx="50" cy="25" rx="12" ry="18" transform="rotate(72 50 50)" opacity="0.35" />
        <ellipse cx="50" cy="25" rx="12" ry="18" transform="rotate(144 50 50)" opacity="0.4" />
        <ellipse cx="50" cy="25" rx="12" ry="18" transform="rotate(216 50 50)" opacity="0.35" />
        <ellipse cx="50" cy="25" rx="12" ry="18" transform="rotate(288 50 50)" opacity="0.4" />
        <circle cx="50" cy="50" r="5" opacity="0.25" />
      </svg>

      <svg
        className="absolute animate-[gentle-drift_15s_ease-in-out_infinite]"
        style={
          {
            top: "62%",
            left: "8%",
            width: 45,
            "--drift-base": "rotate(20deg)",
          } as React.CSSProperties
        }
        viewBox="0 0 100 100"
        fill="currentColor"
      >
        <ellipse cx="50" cy="25" rx="12" ry="18" opacity="0.5" />
        <ellipse cx="50" cy="25" rx="12" ry="18" transform="rotate(72 50 50)" opacity="0.45" />
        <ellipse cx="50" cy="25" rx="12" ry="18" transform="rotate(144 50 50)" opacity="0.5" />
        <ellipse cx="50" cy="25" rx="12" ry="18" transform="rotate(216 50 50)" opacity="0.45" />
        <ellipse cx="50" cy="25" rx="12" ry="18" transform="rotate(288 50 50)" opacity="0.5" />
        <circle cx="50" cy="50" r="6" opacity="0.3" />
      </svg>

      {/* Falling petals */}
      <svg
        className="absolute animate-[gentle-drift_20s_ease-in-out_infinite]"
        style={
          {
            top: "45%",
            left: "45%",
            width: 20,
            "--drift-base": "rotate(45deg)",
          } as React.CSSProperties
        }
        viewBox="0 0 30 30"
        fill="currentColor"
      >
        <ellipse cx="15" cy="8" rx="6" ry="10" opacity="0.35" />
      </svg>

      <svg
        className="absolute animate-[gentle-drift_22s_ease-in-out_infinite]"
        style={
          {
            top: "68%",
            right: "20%",
            width: 16,
            "--drift-base": "rotate(-30deg)",
          } as React.CSSProperties
        }
        viewBox="0 0 30 30"
        fill="currentColor"
      >
        <ellipse cx="15" cy="8" rx="6" ry="10" opacity="0.3" />
      </svg>

      {/* === Tsubaki (Camellia) === */}
      <svg
        className="absolute animate-[gentle-drift_16s_ease-in-out_infinite]"
        style={
          {
            top: "28%",
            left: "10%",
            width: 65,
            "--drift-base": "rotate(-8deg)",
          } as React.CSSProperties
        }
        viewBox="0 0 100 100"
        fill="currentColor"
      >
        <ellipse cx="50" cy="28" rx="16" ry="22" opacity="0.4" />
        <ellipse cx="50" cy="28" rx="16" ry="22" transform="rotate(60 50 50)" opacity="0.35" />
        <ellipse cx="50" cy="28" rx="16" ry="22" transform="rotate(120 50 50)" opacity="0.4" />
        <ellipse cx="50" cy="28" rx="16" ry="22" transform="rotate(180 50 50)" opacity="0.35" />
        <ellipse cx="50" cy="28" rx="16" ry="22" transform="rotate(240 50 50)" opacity="0.4" />
        <ellipse cx="50" cy="28" rx="16" ry="22" transform="rotate(300 50 50)" opacity="0.35" />
        <ellipse cx="50" cy="35" rx="10" ry="14" opacity="0.25" />
        <ellipse cx="50" cy="35" rx="10" ry="14" transform="rotate(90 50 50)" opacity="0.2" />
        <circle cx="50" cy="50" r="8" opacity="0.2" />
        <circle cx="46" cy="46" r="2" opacity="0.35" />
        <circle cx="54" cy="46" r="2" opacity="0.35" />
        <circle cx="50" cy="42" r="2" opacity="0.35" />
      </svg>

      <svg
        className="absolute animate-[gentle-drift_14s_ease-in-out_infinite]"
        style={
          {
            top: "82%",
            left: "55%",
            width: 55,
            "--drift-base": "rotate(15deg)",
          } as React.CSSProperties
        }
        viewBox="0 0 100 100"
        fill="currentColor"
      >
        <ellipse cx="50" cy="28" rx="16" ry="22" opacity="0.45" />
        <ellipse cx="50" cy="28" rx="16" ry="22" transform="rotate(60 50 50)" opacity="0.4" />
        <ellipse cx="50" cy="28" rx="16" ry="22" transform="rotate(120 50 50)" opacity="0.45" />
        <ellipse cx="50" cy="28" rx="16" ry="22" transform="rotate(180 50 50)" opacity="0.4" />
        <ellipse cx="50" cy="28" rx="16" ry="22" transform="rotate(240 50 50)" opacity="0.45" />
        <ellipse cx="50" cy="28" rx="16" ry="22" transform="rotate(300 50 50)" opacity="0.4" />
        <circle cx="50" cy="50" r="8" opacity="0.2" />
        <circle cx="47" cy="47" r="2" opacity="0.3" />
        <circle cx="53" cy="47" r="2" opacity="0.3" />
      </svg>

      <svg
        className="absolute animate-[gentle-drift_19s_ease-in-out_infinite]"
        style={
          {
            top: "8%",
            left: "38%",
            width: 35,
            "--drift-base": "rotate(-25deg)",
          } as React.CSSProperties
        }
        viewBox="0 0 100 100"
        fill="currentColor"
      >
        <ellipse cx="50" cy="30" rx="14" ry="20" opacity="0.35" />
        <ellipse cx="50" cy="30" rx="14" ry="20" transform="rotate(72 50 50)" opacity="0.3" />
        <ellipse cx="50" cy="30" rx="14" ry="20" transform="rotate(144 50 50)" opacity="0.35" />
        <ellipse cx="50" cy="30" rx="14" ry="20" transform="rotate(216 50 50)" opacity="0.3" />
        <ellipse cx="50" cy="30" rx="14" ry="20" transform="rotate(288 50 50)" opacity="0.35" />
        <circle cx="50" cy="50" r="7" opacity="0.2" />
      </svg>

      {/* Tsubaki thick leaves */}
      <svg
        className="absolute"
        style={{ top: "32%", left: "7%", width: 30, transform: "rotate(-50deg)" }}
        viewBox="0 0 40 70"
        fill="currentColor"
      >
        <ellipse cx="20" cy="30" rx="14" ry="28" opacity="0.35" />
        <path d="M20 5 L20 58" stroke="white" strokeWidth="0.8" fill="none" opacity="0.15" />
      </svg>

      <svg
        className="absolute"
        style={{ top: "80%", left: "50%", width: 25, transform: "rotate(30deg)" }}
        viewBox="0 0 40 70"
        fill="currentColor"
      >
        <ellipse cx="20" cy="30" rx="14" ry="28" opacity="0.3" />
      </svg>

      {/* Anzu bud */}
      <svg
        className="absolute"
        style={{ top: "30%", left: "25%", width: 18, transform: "rotate(-30deg)" }}
        viewBox="0 0 40 60"
        fill="currentColor"
      >
        <ellipse cx="20" cy="18" rx="8" ry="12" opacity="0.4" />
        <ellipse cx="20" cy="18" rx="8" ry="12" transform="rotate(60 20 25)" opacity="0.35" />
        <path d="M20 30 L20 55" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.3" />
      </svg>
    </div>
  );
}
