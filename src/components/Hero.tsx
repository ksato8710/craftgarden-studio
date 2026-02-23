export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-30 pb-45 text-center"
    >
      {/* Hidden SVG defs for reusable plant shapes */}
      <svg style={{ display: "none" }} aria-hidden="true">
        <defs>
          <path
            id="kl"
            d="M50 8 L55 30 L72 18 L60 38 L80 35 L58 48 L75 65 L55 55 L58 78 L50 58 L42 78 L45 55 L25 65 L42 48 L20 35 L40 38 L28 18 L45 30 Z"
          />
          <g id="tf">
            <ellipse cx="0" cy="-15" rx="10" ry="16" />
            <ellipse cx="0" cy="-15" rx="10" ry="16" transform="rotate(60)" />
            <ellipse cx="0" cy="-15" rx="10" ry="16" transform="rotate(120)" />
            <ellipse cx="0" cy="-15" rx="10" ry="16" transform="rotate(180)" />
            <ellipse cx="0" cy="-15" rx="10" ry="16" transform="rotate(240)" />
            <ellipse cx="0" cy="-15" rx="10" ry="16" transform="rotate(300)" />
            <circle cx="-3" cy="-3" r="1.5" fill="var(--color-anzu)" opacity="0.5" />
            <circle cx="3" cy="-3" r="1.5" fill="var(--color-anzu)" opacity="0.5" />
            <circle cx="0" cy="-5" r="1.5" fill="var(--color-anzu)" opacity="0.5" />
          </g>
          <g id="af">
            <ellipse cx="0" cy="-10" rx="7" ry="12" />
            <ellipse cx="0" cy="-10" rx="7" ry="12" transform="rotate(72)" />
            <ellipse cx="0" cy="-10" rx="7" ry="12" transform="rotate(144)" />
            <ellipse cx="0" cy="-10" rx="7" ry="12" transform="rotate(216)" />
            <ellipse cx="0" cy="-10" rx="7" ry="12" transform="rotate(288)" />
            <circle cx="0" cy="0" r="3" opacity="0.4" />
          </g>
        </defs>
      </svg>

      {/* Scattered botanical background */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 1000 800"
          preserveAspectRatio="xMidYMid slice"
          className="h-full w-full"
        >
          {/* Kaede leaves */}
          <g transform="translate(30,64) scale(.4) rotate(-15)">
            <use href="#kl" fill="var(--color-kaede)" opacity=".18" />
          </g>
          <g transform="translate(920,120) scale(.35) rotate(25)">
            <use href="#kl" fill="var(--color-kaede-hot)" opacity=".16" />
          </g>
          <g transform="translate(70,416) scale(.32) rotate(-30)">
            <use href="#kl" fill="var(--color-kaede)" opacity=".15" />
          </g>
          <g transform="translate(880,384) scale(.28) rotate(40)">
            <use href="#kl" fill="var(--color-kaede-hot)" opacity=".14" />
          </g>
          <g transform="translate(420,680) scale(.30) rotate(10)">
            <use href="#kl" fill="var(--color-kaede)" opacity=".14" />
          </g>
          {/* Tsubaki petals */}
          <ellipse
            cx="350"
            cy="24"
            rx="10"
            ry="16"
            fill="var(--color-tsubaki)"
            opacity=".16"
            transform="rotate(20 350 24)"
          />
          <ellipse
            cx="820"
            cy="256"
            rx="10"
            ry="16"
            fill="var(--color-tsubaki)"
            opacity=".15"
            transform="rotate(-15 820 256)"
          />
          <ellipse
            cx="120"
            cy="544"
            rx="10"
            ry="16"
            fill="var(--color-tsubaki)"
            opacity=".14"
            transform="rotate(35 120 544)"
          />
          <ellipse
            cx="580"
            cy="440"
            rx="10"
            ry="16"
            fill="var(--color-tsubaki)"
            opacity=".13"
            transform="rotate(-25 580 440)"
          />
          <ellipse
            cx="750"
            cy="576"
            rx="10"
            ry="16"
            fill="var(--color-tsubaki)"
            opacity=".14"
            transform="rotate(10 750 576)"
          />
          <ellipse
            cx="280"
            cy="336"
            rx="10"
            ry="16"
            fill="var(--color-tsubaki)"
            opacity=".12"
            transform="rotate(-40 280 336)"
          />
          {/* Anzu petals */}
          <ellipse
            cx="680"
            cy="40"
            rx="6"
            ry="10"
            fill="var(--color-anzu)"
            opacity=".15"
            transform="rotate(-10 680 40)"
          />
          <ellipse
            cx="150"
            cy="304"
            rx="6"
            ry="10"
            fill="var(--color-anzu)"
            opacity=".14"
            transform="rotate(30 150 304)"
          />
          <ellipse
            cx="800"
            cy="464"
            rx="6"
            ry="10"
            fill="var(--color-anzu)"
            opacity=".13"
            transform="rotate(-20 800 464)"
          />
          <ellipse
            cx="480"
            cy="624"
            rx="6"
            ry="10"
            fill="var(--color-anzu)"
            opacity=".13"
            transform="rotate(15 480 624)"
          />
          <ellipse
            cx="220"
            cy="656"
            rx="6"
            ry="10"
            fill="var(--color-anzu)"
            opacity=".12"
            transform="rotate(-35 220 656)"
          />
          <ellipse
            cx="900"
            cy="176"
            rx="6"
            ry="10"
            fill="var(--color-anzu)"
            opacity=".13"
            transform="rotate(25 900 176)"
          />
          <ellipse
            cx="550"
            cy="144"
            rx="6"
            ry="10"
            fill="var(--color-anzu)"
            opacity=".12"
            transform="rotate(-8 550 144)"
          />
          {/* Green leaves */}
          <ellipse
            cx="40"
            cy="200"
            rx="10"
            ry="22"
            fill="var(--color-leaf-dark)"
            opacity=".14"
            transform="rotate(-45 40 200)"
          />
          <ellipse
            cx="920"
            cy="480"
            rx="10"
            ry="22"
            fill="var(--color-leaf-dark)"
            opacity=".13"
            transform="rotate(20 920 480)"
          />
          <ellipse
            cx="180"
            cy="704"
            rx="10"
            ry="22"
            fill="var(--color-leaf-dark)"
            opacity=".12"
            transform="rotate(-10 180 704)"
          />
          <ellipse
            cx="850"
            cy="656"
            rx="10"
            ry="22"
            fill="var(--color-leaf-dark)"
            opacity=".11"
            transform="rotate(35 850 656)"
          />
          {/* Anzu buds */}
          <circle cx="300" cy="520" r="5" fill="var(--color-anzu)" opacity=".12" />
          <circle cx="720" cy="640" r="4" fill="var(--color-anzu)" opacity=".10" />
          <circle cx="500" cy="736" r="4.5" fill="var(--color-anzu)" opacity=".11" />
        </svg>
      </div>

      {/* Tsubaki tree (left) */}
      <div
        className="pointer-events-none absolute max-md:hidden"
        style={{
          left: "-8%",
          bottom: 0,
          width: "min(48vw, 520px)",
          height: "68%",
          opacity: 0.85,
        }}
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 500 700"
          fill="none"
          preserveAspectRatio="xMidYMax meet"
          className="h-full w-full"
        >
          <path d="M260 700C258 650 252 590 248 530 244 470 242 410 245 350 248 300 255 260 265 220" stroke="var(--color-bark)" strokeWidth="7" strokeLinecap="round" opacity=".24" />
          <path d="M260 700C262 650 260 590 256 530 252 470 250 410 253 350 256 300 261 260 265 220" stroke="var(--color-bark-dark)" strokeWidth="5" strokeLinecap="round" opacity=".20" />
          <path d="M253 350C290 320 330 300 380 290" stroke="var(--color-bark)" strokeWidth="4.5" strokeLinecap="round" opacity=".22" />
          <path d="M258 420C295 400 340 390 390 385" stroke="var(--color-bark)" strokeWidth="4" strokeLinecap="round" opacity=".20" />
          <path d="M265 260C300 240 340 225 385 220" stroke="var(--color-bark)" strokeWidth="4" strokeLinecap="round" opacity=".20" />
          <ellipse cx="220" cy="280" rx="18" ry="32" fill="var(--color-leaf-dark)" opacity=".22" transform="rotate(-20 220 280)" />
          <ellipse cx="195" cy="320" rx="16" ry="28" fill="var(--color-leaf-dark)" opacity=".20" transform="rotate(-35 195 320)" />
          <ellipse cx="240" cy="240" rx="15" ry="26" fill="var(--color-leaf-dark)" opacity=".20" transform="rotate(-10 240 240)" />
          <ellipse cx="280" cy="260" rx="14" ry="25" fill="var(--color-leaf-dark)" opacity=".18" transform="rotate(5 280 260)" />
          <ellipse cx="310" cy="290" rx="16" ry="28" fill="var(--color-leaf-dark)" opacity=".20" transform="rotate(15 310 290)" />
          <ellipse cx="340" cy="310" rx="15" ry="26" fill="var(--color-leaf-dark)" opacity=".18" transform="rotate(20 340 310)" />
          <ellipse cx="260" cy="350" rx="14" ry="25" fill="var(--color-leaf-dark)" opacity=".20" transform="rotate(-15 260 350)" />
          <ellipse cx="290" cy="370" rx="13" ry="24" fill="var(--color-leaf-dark)" opacity=".18" transform="rotate(10 290 370)" />
          <ellipse cx="230" cy="380" rx="14" ry="26" fill="var(--color-leaf-dark)" opacity=".18" transform="rotate(-25 230 380)" />
          <ellipse cx="320" cy="340" rx="13" ry="23" fill="var(--color-leaf-dark)" opacity=".17" transform="rotate(25 320 340)" />
          <ellipse cx="350" cy="280" rx="14" ry="24" fill="var(--color-leaf-dark)" opacity=".18" transform="rotate(10 350 280)" />
          <ellipse cx="370" cy="300" rx="12" ry="22" fill="var(--color-leaf-dark)" opacity=".16" transform="rotate(30 370 300)" />
          <ellipse cx="250" cy="210" rx="13" ry="24" fill="var(--color-leaf-dark)" opacity=".18" transform="rotate(-5 250 210)" />
          <ellipse cx="210" cy="250" rx="15" ry="27" fill="var(--color-leaf-dark)" opacity=".20" transform="rotate(-30 210 250)" />
          <ellipse cx="270" cy="400" rx="14" ry="24" fill="var(--color-leaf-dark)" opacity=".17" transform="rotate(5 270 400)" />
          <ellipse cx="340" cy="380" rx="13" ry="23" fill="var(--color-leaf-dark)" opacity=".16" transform="rotate(18 340 380)" />
          <ellipse cx="360" cy="360" rx="12" ry="22" fill="var(--color-leaf-dark)" opacity=".16" transform="rotate(22 360 360)" />
          <ellipse cx="185" cy="360" rx="14" ry="25" fill="var(--color-leaf-dark)" opacity=".18" transform="rotate(-40 185 360)" />
          <ellipse cx="300" cy="230" rx="13" ry="24" fill="var(--color-leaf-dark)" opacity=".18" transform="rotate(8 300 230)" />
          <ellipse cx="380" cy="250" rx="12" ry="22" fill="var(--color-leaf-dark)" opacity=".16" transform="rotate(15 380 250)" />
          <ellipse cx="230" cy="195" rx="12" ry="22" fill="var(--color-leaf-dark)" opacity=".16" transform="rotate(-15 230 195)" />
          <ellipse cx="200" cy="400" rx="13" ry="24" fill="var(--color-leaf-dark)" opacity=".16" transform="rotate(-20 200 400)" />
          <ellipse cx="330" cy="250" rx="12" ry="21" fill="var(--color-leaf-dark)" opacity=".16" transform="rotate(12 330 250)" />
          <ellipse cx="390" cy="340" rx="11" ry="20" fill="var(--color-leaf-dark)" opacity=".15" transform="rotate(28 390 340)" />
          <ellipse cx="245" cy="420" rx="12" ry="22" fill="var(--color-leaf-dark)" opacity=".15" transform="rotate(-8 245 420)" />
          <g transform="translate(210 260) scale(.45) rotate(-10)" fill="var(--color-tsubaki)" opacity=".38"><use href="#tf" /></g>
          <g transform="translate(250 300) scale(.40) rotate(20)" fill="var(--color-tsubaki)" opacity=".35"><use href="#tf" /></g>
          <g transform="translate(300 270) scale(.38) rotate(-25)" fill="var(--color-tsubaki)" opacity=".32"><use href="#tf" /></g>
          <g transform="translate(180 340) scale(.42) rotate(15)" fill="var(--color-tsubaki)" opacity=".36"><use href="#tf" /></g>
          <g transform="translate(340 320) scale(.35) rotate(-5)" fill="var(--color-tsubaki)" opacity=".30"><use href="#tf" /></g>
          <g transform="translate(280 380) scale(.38) rotate(30)" fill="var(--color-tsubaki)" opacity=".33"><use href="#tf" /></g>
          <g transform="translate(230 220) scale(.36) rotate(-18)" fill="var(--color-tsubaki)" opacity=".34"><use href="#tf" /></g>
          <g transform="translate(370 290) scale(.32) rotate(12)" fill="var(--color-tsubaki)" opacity=".30"><use href="#tf" /></g>
          <g transform="translate(310 350) scale(.40) rotate(-30)" fill="var(--color-tsubaki)" opacity=".35"><use href="#tf" /></g>
          <g transform="translate(260 400) scale(.34) rotate(8)" fill="var(--color-tsubaki)" opacity=".32"><use href="#tf" /></g>
          <g transform="translate(200 290) scale(.30) rotate(40)" fill="var(--color-tsubaki)" opacity=".30"><use href="#tf" /></g>
          <g transform="translate(350 250) scale(.33) rotate(-15)" fill="var(--color-tsubaki)" opacity=".31"><use href="#tf" /></g>
          <g transform="translate(220 370) scale(.36) rotate(22)" fill="var(--color-tsubaki)" opacity=".33"><use href="#tf" /></g>
          <g transform="translate(290 240) scale(.32) rotate(-35)" fill="var(--color-tsubaki)" opacity=".30"><use href="#tf" /></g>
          <g transform="translate(330 390) scale(.30) rotate(5)" fill="var(--color-tsubaki)" opacity=".30"><use href="#tf" /></g>
        </svg>
      </div>

      {/* Kaede tree (right) */}
      <div
        className="pointer-events-none absolute max-md:hidden"
        style={{
          right: "-8%",
          bottom: 0,
          width: "min(48vw, 520px)",
          height: "68%",
          opacity: 0.85,
        }}
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 500 700"
          fill="none"
          preserveAspectRatio="xMidYMax meet"
          className="h-full w-full"
        >
          <path d="M240 700C242 650 248 590 252 530 256 470 258 410 255 350 252 300 245 260 235 220" stroke="var(--color-bark)" strokeWidth="7" strokeLinecap="round" opacity=".24" />
          <path d="M240 700C238 650 240 590 244 530 248 470 250 410 247 350 244 300 239 260 235 220" stroke="var(--color-bark-dark)" strokeWidth="5" strokeLinecap="round" opacity=".20" />
          <path d="M247 350C210 320 170 300 120 290" stroke="var(--color-bark)" strokeWidth="4.5" strokeLinecap="round" opacity=".22" />
          <path d="M242 420C205 400 160 390 110 385" stroke="var(--color-bark)" strokeWidth="4" strokeLinecap="round" opacity=".20" />
          <path d="M235 260C200 240 160 225 115 220" stroke="var(--color-bark)" strokeWidth="4" strokeLinecap="round" opacity=".20" />
          <g transform="translate(280 280) scale(.55) rotate(10)"><use href="#kl" fill="var(--color-kaede)" opacity=".30" /></g>
          <g transform="translate(305 320) scale(.50) rotate(35)"><use href="#kl" fill="var(--color-kaede-hot)" opacity=".28" /></g>
          <g transform="translate(260 240) scale(.48) rotate(-15)"><use href="#kl" fill="var(--color-kaede)" opacity=".28" /></g>
          <g transform="translate(220 260) scale(.52) rotate(20)"><use href="#kl" fill="var(--color-kaede-hot)" opacity=".30" /></g>
          <g transform="translate(190 290) scale(.45) rotate(-25)"><use href="#kl" fill="var(--color-kaede)" opacity=".27" /></g>
          <g transform="translate(160 310) scale(.42) rotate(40)"><use href="#kl" fill="var(--color-kaede-hot)" opacity=".26" /></g>
          <g transform="translate(130 280) scale(.48) rotate(-10)"><use href="#kl" fill="var(--color-kaede)" opacity=".28" /></g>
          <g transform="translate(110 300) scale(.40) rotate(30)"><use href="#kl" fill="var(--color-kaede-hot)" opacity=".25" /></g>
          <g transform="translate(240 210) scale(.45) rotate(-20)"><use href="#kl" fill="var(--color-kaede)" opacity=".28" /></g>
          <g transform="translate(215 230) scale(.42) rotate(15)"><use href="#kl" fill="var(--color-kaede-hot)" opacity=".26" /></g>
          <g transform="translate(180 240) scale(.38) rotate(-30)"><use href="#kl" fill="var(--color-kaede)" opacity=".25" /></g>
          <g transform="translate(150 260) scale(.44) rotate(25)"><use href="#kl" fill="var(--color-kaede)" opacity=".27" /></g>
          <g transform="translate(120 240) scale(.40) rotate(-5)"><use href="#kl" fill="var(--color-kaede-hot)" opacity=".25" /></g>
          <g transform="translate(250 350) scale(.42) rotate(18)"><use href="#kl" fill="var(--color-kaede)" opacity=".26" /></g>
          <g transform="translate(220 370) scale(.38) rotate(-22)"><use href="#kl" fill="var(--color-kaede-hot)" opacity=".25" /></g>
          <g transform="translate(190 380) scale(.44) rotate(35)"><use href="#kl" fill="var(--color-kaede)" opacity=".27" /></g>
          <g transform="translate(160 370) scale(.40) rotate(-12)"><use href="#kl" fill="var(--color-kaede-hot)" opacity=".25" /></g>
          <g transform="translate(140 350) scale(.36) rotate(8)"><use href="#kl" fill="var(--color-kaede)" opacity=".25" /></g>
          <g transform="translate(230 400) scale(.38) rotate(-28)"><use href="#kl" fill="var(--color-kaede-hot)" opacity=".26" /></g>
          <g transform="translate(200 410) scale(.35) rotate(15)"><use href="#kl" fill="var(--color-kaede)" opacity=".25" /></g>
          <g transform="translate(260 195) scale(.38) rotate(5)"><use href="#kl" fill="var(--color-kaede)" opacity=".26" /></g>
          <g transform="translate(170 400) scale(.36) rotate(42)"><use href="#kl" fill="var(--color-kaede-hot)" opacity=".25" /></g>
          <g transform="translate(295 350) scale(.32) rotate(-18)"><use href="#kl" fill="var(--color-kaede)" opacity=".25" /></g>
          <g transform="translate(140 390) scale(.34) rotate(22)"><use href="#kl" fill="var(--color-kaede)" opacity=".25" /></g>
          <g transform="translate(110 330) scale(.38) rotate(-8)"><use href="#kl" fill="var(--color-kaede-hot)" opacity=".26" /></g>
          <g transform="translate(270 310) scale(.36) rotate(28)"><use href="#kl" fill="var(--color-kaede)" opacity=".26" /></g>
          <g transform="translate(240 300) scale(.30) rotate(-40)"><use href="#kl" fill="var(--color-kaede-hot)" opacity=".25" /></g>
          <g transform="translate(200 340) scale(.34) rotate(12)"><use href="#kl" fill="var(--color-kaede)" opacity=".26" /></g>
          <g transform="translate(100 260) scale(.36) rotate(-15)"><use href="#kl" fill="var(--color-kaede)" opacity=".25" /></g>
          <g transform="translate(290 250) scale(.34) rotate(22)"><use href="#kl" fill="var(--color-kaede-hot)" opacity=".26" /></g>
          <g transform="translate(150 220) scale(.40) rotate(-8)"><use href="#kl" fill="var(--color-kaede)" opacity=".27" /></g>
          <g transform="translate(240 420) scale(.32) rotate(32)"><use href="#kl" fill="var(--color-kaede-hot)" opacity=".25" /></g>
          <g transform="translate(175 190) scale(.36) rotate(18)"><use href="#kl" fill="var(--color-kaede)" opacity=".26" /></g>
          <g transform="translate(125 210) scale(.34) rotate(-25)"><use href="#kl" fill="var(--color-kaede-hot)" opacity=".25" /></g>
          <g transform="translate(100 350) scale(.32) rotate(15)"><use href="#kl" fill="var(--color-kaede)" opacity=".25" /></g>
          <g transform="translate(310 280) scale(.30) rotate(-35)"><use href="#kl" fill="var(--color-kaede-hot)" opacity=".25" /></g>
          <g transform="translate(210 195) scale(.34) rotate(10)"><use href="#kl" fill="var(--color-kaede)" opacity=".26" /></g>
          <g transform="translate(280 390) scale(.30) rotate(-10)"><use href="#kl" fill="var(--color-kaede)" opacity=".25" /></g>
          <g transform="translate(130 370) scale(.32) rotate(38)"><use href="#kl" fill="var(--color-kaede-hot)" opacity=".25" /></g>
          <g transform="translate(250 270) scale(.32) rotate(-20)"><use href="#kl" fill="var(--color-kaede)" opacity=".26" /></g>
        </svg>
      </div>

      {/* Anzu blossom canopy (top) */}
      <div
        className="pointer-events-none absolute max-md:left-[2%] max-md:right-[2%]"
        style={{
          top: 0,
          left: "10%",
          right: "10%",
          height: "35%",
          opacity: 0.9,
        }}
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 800 280"
          fill="none"
          preserveAspectRatio="xMidYMin meet"
          className="h-full w-full"
        >
          <path d="M100 0C120 40 160 80 220 120 260 145 310 160 370 170" stroke="var(--color-bark)" strokeWidth="2.5" strokeLinecap="round" opacity=".20" />
          <path d="M400 0C390 50 370 100 340 140 320 165 295 180 260 190" stroke="var(--color-bark)" strokeWidth="2" strokeLinecap="round" opacity=".18" />
          <path d="M700 0C680 45 650 90 600 130 560 160 510 175 450 180" stroke="var(--color-bark)" strokeWidth="3" strokeLinecap="round" opacity=".20" />
          <g transform="translate(150 50) scale(.55) rotate(-10)" fill="var(--color-anzu)" opacity=".30"><use href="#af" /></g>
          <g transform="translate(200 80) scale(.48) rotate(15)" fill="var(--color-anzu)" opacity=".28"><use href="#af" /></g>
          <g transform="translate(260 110) scale(.52) rotate(-20)" fill="var(--color-anzu)" opacity=".32"><use href="#af" /></g>
          <g transform="translate(320 140) scale(.45) rotate(8)" fill="var(--color-anzu)" opacity=".27"><use href="#af" /></g>
          <g transform="translate(370 155) scale(.42) rotate(-15)" fill="var(--color-anzu)" opacity=".25"><use href="#af" /></g>
          <g transform="translate(120 30) scale(.40) rotate(25)" fill="var(--color-anzu)" opacity=".28"><use href="#af" /></g>
          <g transform="translate(180 65) scale(.50) rotate(-5)" fill="var(--color-anzu)" opacity=".30"><use href="#af" /></g>
          <g transform="translate(240 95) scale(.44) rotate(30)" fill="var(--color-anzu)" opacity=".26"><use href="#af" /></g>
          <g transform="translate(350 10) scale(.46) rotate(-12)" fill="var(--color-anzu)" opacity=".28"><use href="#af" /></g>
          <g transform="translate(410 40) scale(.50) rotate(18)" fill="var(--color-anzu)" opacity=".30"><use href="#af" /></g>
          <g transform="translate(480 80) scale(.48) rotate(-8)" fill="var(--color-anzu)" opacity=".28"><use href="#af" /></g>
          <g transform="translate(540 110) scale(.44) rotate(22)" fill="var(--color-anzu)" opacity=".26"><use href="#af" /></g>
          <g transform="translate(600 90) scale(.50) rotate(-18)" fill="var(--color-anzu)" opacity=".30"><use href="#af" /></g>
          <g transform="translate(650 60) scale(.46) rotate(10)" fill="var(--color-anzu)" opacity=".28"><use href="#af" /></g>
          <g transform="translate(700 30) scale(.42) rotate(-25)" fill="var(--color-anzu)" opacity=".26"><use href="#af" /></g>
          <g transform="translate(560 140) scale(.40) rotate(5)" fill="var(--color-anzu)" opacity=".25"><use href="#af" /></g>
          <g transform="translate(500 155) scale(.44) rotate(-30)" fill="var(--color-anzu)" opacity=".27"><use href="#af" /></g>
          <g transform="translate(440 160) scale(.38) rotate(15)" fill="var(--color-anzu)" opacity=".25"><use href="#af" /></g>
          <g transform="translate(300 45) scale(.42) rotate(-22)" fill="var(--color-anzu)" opacity=".28"><use href="#af" /></g>
          <g transform="translate(470 50) scale(.45) rotate(12)" fill="var(--color-anzu)" opacity=".28"><use href="#af" /></g>
          <g transform="translate(620 130) scale(.38) rotate(-8)" fill="var(--color-anzu)" opacity=".25"><use href="#af" /></g>
          <g transform="translate(160 100) scale(.36) rotate(20)" fill="var(--color-anzu)" opacity=".26"><use href="#af" /></g>
          <g transform="translate(380 80) scale(.40) rotate(-15)" fill="var(--color-anzu)" opacity=".27"><use href="#af" /></g>
          <g transform="translate(520 30) scale(.44) rotate(8)" fill="var(--color-anzu)" opacity=".28"><use href="#af" /></g>
          <g transform="translate(670 100) scale(.40) rotate(-20)" fill="var(--color-anzu)" opacity=".27"><use href="#af" /></g>
        </svg>
      </div>

      {/* Text protection radial gradient */}
      <div
        className="pointer-events-none absolute inset-0 z-1"
        style={{
          background:
            "radial-gradient(ellipse 62% 60% at 50% 48%, #FAFAF5 0%, rgba(250,250,245,1) 25%, rgba(250,250,245,.92) 40%, rgba(250,250,245,.5) 55%, rgba(250,250,245,.15) 68%, transparent 80%)",
        }}
        aria-hidden="true"
      />

      {/* Falling leaf animations */}
      <svg
        className="pointer-events-none absolute top-0 left-0 h-full w-full"
        viewBox="0 0 1000 800"
        aria-hidden="true"
      >
        <g
          style={{ animation: "leaf-fall 8s ease-in-out infinite" }}
          transform="translate(200 350) scale(.25)"
        >
          <use href="#kl" fill="var(--color-kaede)" opacity=".28" />
        </g>
        <g
          style={{ animation: "leaf-fall-2 10s ease-in-out 2s infinite" }}
          transform="translate(750 300) scale(.22)"
        >
          <use href="#kl" fill="var(--color-kaede-hot)" opacity=".25" />
        </g>
        <g
          style={{ animation: "leaf-fall-3 12s ease-in-out 4s infinite" }}
          transform="translate(150 200) scale(.20)"
          fill="var(--color-tsubaki)"
          opacity=".22"
        >
          <use href="#tf" />
        </g>
        <g
          style={{ animation: "leaf-fall 9s ease-in-out 6s infinite" }}
          transform="translate(800 250) scale(.18)"
          fill="var(--color-tsubaki)"
          opacity=".20"
        >
          <use href="#tf" />
        </g>
        <g
          style={{ animation: "leaf-fall-2 11s ease-in-out 1s infinite" }}
          transform="translate(350 100) scale(.22)"
          fill="var(--color-anzu)"
          opacity=".24"
        >
          <use href="#af" />
        </g>
        <g
          style={{ animation: "leaf-fall-3 10s ease-in-out 3s infinite" }}
          transform="translate(600 80) scale(.20)"
          fill="var(--color-anzu)"
          opacity=".22"
        >
          <use href="#af" />
        </g>
        <g
          style={{ animation: "leaf-fall 11s ease-in-out 5s infinite" }}
          transform="translate(450 400) scale(.18)"
        >
          <ellipse rx="10" ry="22" fill="var(--color-leaf-dark)" opacity=".20" />
        </g>
        <g
          style={{ animation: "leaf-fall-2 9s ease-in-out 7s infinite" }}
          transform="translate(280 150) scale(.20)"
        >
          <ellipse rx="10" ry="16" fill="var(--color-tsubaki)" opacity=".20" />
        </g>
      </svg>

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
