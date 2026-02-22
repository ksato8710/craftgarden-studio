import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#FAFAF5",
          borderRadius: 36,
        }}
      >
        <svg
          width="120"
          height="120"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 28c1.33-5.33 5.33-9.33 10.67-10.67C21.33 16 17.33 12 16 6.67 14.67 12 10.67 16 5.33 17.33 10.67 18.67 14.67 22.67 16 28z"
            fill="#6B8F71"
          />
        </svg>
      </div>
    ),
    { ...size }
  );
}
