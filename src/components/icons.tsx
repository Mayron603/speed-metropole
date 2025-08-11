import type { SVGProps } from "react";

export function SpeedLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 20"
      width="100"
      height="20"
      {...props}
    >
      <defs>
        <linearGradient id="speed-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: "hsl(var(--primary))" }} />
          <stop offset="100%" style={{ stopColor: "hsl(var(--accent))" }} />
        </linearGradient>
      </defs>
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontSize="16"
        fontWeight="bold"
        fill="url(#speed-gradient)"
        className="font-headline"
      >
        SPEED
      </text>
    </svg>
  );
}
