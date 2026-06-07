import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function HiveLogo(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 2 4 6.5v9L12 20l8-4.5v-9L12 2Z" />
      <path d="M12 7.5 8 9.8v4.4l4 2.3 4-2.3V9.8L12 7.5Z" />
    </svg>
  );
}

export function ShieldCheck(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3 5 6v6c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6l-7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export function Trophy(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M8 4h8v4a4 4 0 0 1-8 0V4Z" />
      <path d="M16 5h3v1a3 3 0 0 1-3 3M8 5H5v1a3 3 0 0 0 3 3" />
      <path d="M12 12v4M9 20h6M10 20v-1.5a2 2 0 0 1 4 0V20" />
    </svg>
  );
}

export function ChatBubbles(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 5h11a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H9l-4 3v-3a2 2 0 0 1-1-2V7a2 2 0 0 1 2-2Z" />
      <path d="M20 9v7a2 2 0 0 1-2 2h-1" />
    </svg>
  );
}

export function Mic(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="9" y="3" width="6" height="11" rx="3" />
      <path d="M6 11a6 6 0 0 0 12 0M12 17v4M9 21h6" />
    </svg>
  );
}

export function CopyTrade(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 17l4-4 3 3 5-6 4 4" />
      <path d="M3 21h18" />
      <circle cx="8" cy="13" r="1" />
      <circle cx="16" cy="10" r="1" />
    </svg>
  );
}

export function Robot(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="5" y="7" width="14" height="11" rx="3" />
      <path d="M12 4v3M9 12h.01M15 12h.01M9 15h6" />
      <path d="M3 12v2M21 12v2" />
    </svg>
  );
}

export function Journal(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5 4h11a3 3 0 0 1 3 3v13H8a3 3 0 0 1-3-3V4Z" />
      <path d="M5 17a3 3 0 0 1 3-3h11M9 8h6M9 11h4" />
    </svg>
  );
}

export function Flame(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3c1 3-1 4-1 6a3 3 0 0 0 6 0c0 4-2 6-2 8a3 3 0 0 1-6 0c0-3 1-4 1-6 0-1-1-2-1-4 1 0 3 1 3-4Z" />
    </svg>
  );
}

export function Grid(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="4" y="4" width="6" height="6" rx="1.5" />
      <rect x="14" y="4" width="6" height="6" rx="1.5" />
      <rect x="4" y="14" width="6" height="6" rx="1.5" />
      <rect x="14" y="14" width="6" height="6" rx="1.5" />
    </svg>
  );
}

export function Clock(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8v4l3 2" />
    </svg>
  );
}

export function Coins(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <ellipse cx="9" cy="7" rx="5" ry="3" />
      <path d="M4 7v5c0 1.7 2.2 3 5 3s5-1.3 5-3V7" />
      <path d="M10 14.9c.6.1 1.3.1 2 .1 2.8 0 5-1.3 5-3" />
      <ellipse cx="15" cy="12" rx="5" ry="3" />
      <path d="M10 12v5c0 1.7 2.2 3 5 3s5-1.3 5-3v-5" />
    </svg>
  );
}

export function Check(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="m5 12 4 4 10-10" />
    </svg>
  );
}

export function ArrowRight(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function Plus(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

export function Sparkle(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z" />
    </svg>
  );
}

export function Eye(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

export function EyeOff(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M9.9 5.1C10.6 5 11.3 5 12 5c7 0 10 7 10 7s-1 2.3-2.9 4.1M5.1 5.1C3.2 6.9 2 9.3 2 12s1.2 5.1 3.1 6.9M9.9 18.9c.7.1 1.4.1 2.1.1 7 0 10-7 10-7s-1-2.3-2.9-4.1M2 2l20 20" />
    </svg>
  );
}

export function Quote(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
      <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
    </svg>
  );
}
