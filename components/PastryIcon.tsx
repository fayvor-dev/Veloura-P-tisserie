"use client";

type IconName =
  | "croissant"
  | "eclair"
  | "cake"
  | "cloud-cake"
  | "tart"
  | "brioche"
  | "loaf"
  | "coffee"
  | "macaron"
  | "chocolate"
  | "strawberry"
  | "wheat"
  | "flour"
  | "vanilla"
  | "pistachio"
  | "honey"
  | "butter";

const strokeProps = {
  fill: "none",
  strokeWidth: 1.4,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export default function PastryIcon({
  name,
  className,
}: {
  name: IconName;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 120 120"
      className={className}
      aria-hidden="true"
      {...strokeProps}
      stroke="currentColor"
    >
      {ICONS[name]}
    </svg>
  );
}

const ICONS: Record<IconName, React.ReactNode> = {
  croissant: (
    <>
      <path d="M18 78c6-30 26-52 54-56 10-1 18 4 16 12-2 7-11 8-19 11-16 6-26 20-27 38-1 12 6 20 17 20 16 0 30-12 36-27" />
      <path d="M30 70c4-16 16-28 32-33" opacity="0.55" />
      <path d="M40 82c5-13 15-23 28-27" opacity="0.55" />
    </>
  ),
  eclair: (
    <>
      <rect x="16" y="52" width="88" height="26" rx="13" />
      <path d="M24 52c4-8 12-12 20-9" opacity="0.6" />
      <path d="M50 52c4-8 12-12 20-9" opacity="0.6" />
      <path d="M76 52c4-8 12-12 20-9" opacity="0.6" />
      <path d="M20 78c10 4 20-2 20-2s10 6 20 0 20 2 20 2 8-5 18-1" opacity="0.5" />
    </>
  ),
  cake: (
    <>
      <path d="M24 100V64l36-24 36 24v36" />
      <path d="M24 82c8 5 16-5 24 0s16 5 24 0 16-5 24 0" />
      <path d="M60 40V22" />
      <path d="M54 22c0-6 6-6 6-12 0 6 6 6 6 12" />
    </>
  ),
  "cloud-cake": (
    <>
      <ellipse cx="60" cy="78" rx="40" ry="16" />
      <path d="M28 78c-10-2-14-16-2-20 2-12 24-16 30-4 10-6 24 2 20 12 10 0 12 14 2 16" opacity="0.6" />
      <circle cx="44" cy="58" r="3" />
      <circle cx="60" cy="52" r="3" />
      <circle cx="76" cy="58" r="3" />
    </>
  ),
  tart: (
    <>
      <path d="M20 74c0-22 18-40 40-40s40 18 40 40" />
      <path d="M20 74h80" />
      <path d="M32 74c0-16 12-28 28-28s28 12 28 28" opacity="0.5" />
      <circle cx="60" cy="52" r="4" />
      <circle cx="46" cy="62" r="3" />
      <circle cx="74" cy="62" r="3" />
    </>
  ),
  brioche: (
    <>
      <circle cx="42" cy="66" r="20" />
      <circle cx="78" cy="66" r="20" />
      <path d="M42 46c0-10 8-16 8-16M78 46c0-10-8-16-8-16" opacity="0.6" />
    </>
  ),
  loaf: (
    <>
      <path d="M18 88V56c0-18 14-32 32-32h20c18 0 32 14 32 32v32" />
      <path d="M18 88h84" />
      <path d="M34 56c6-4 10-10 10-18M60 52c0-9 4-16 10-20M86 56c-6-4-10-10-10-18" opacity="0.55" />
    </>
  ),
  coffee: (
    <>
      <path d="M28 48h52v28a26 26 0 0 1-26 26 26 26 0 0 1-26-26V48z" />
      <path d="M80 54c14-2 18 18 2 20" />
      <path d="M42 30c-4 6 4 8 0 14M60 30c-4 6 4 8 0 14M78 30c-4 6 4 8 0 14" opacity="0.55" />
    </>
  ),
  macaron: (
    <>
      <ellipse cx="60" cy="42" rx="30" ry="14" />
      <ellipse cx="60" cy="78" rx="30" ry="14" />
      <rect x="46" y="52" width="28" height="16" opacity="0.5" />
    </>
  ),
  chocolate: (
    <>
      <rect x="24" y="30" width="72" height="60" rx="4" />
      <path d="M24 60h72M60 30v60M42 30v60M78 30v60" opacity="0.5" />
    </>
  ),
  strawberry: (
    <>
      <path d="M60 42c20 0 32 18 26 40-4 14-16 24-26 24s-22-10-26-24c-6-22 6-40 26-40z" />
      <path d="M46 30c4 6 10 10 14 12 4-2 10-6 14-12" />
      <circle cx="48" cy="60" r="1.6" />
      <circle cx="60" cy="54" r="1.6" />
      <circle cx="72" cy="60" r="1.6" />
      <circle cx="52" cy="74" r="1.6" />
      <circle cx="68" cy="74" r="1.6" />
    </>
  ),
  wheat: (
    <>
      <path d="M60 20v80" />
      <path d="M60 30l-14-8M60 30l14-8M60 44l-14-8M60 44l14-8M60 58l-14-8M60 58l14-8M60 72l-14-8M60 72l14-8" opacity="0.7" />
    </>
  ),
  flour: (
    <>
      <path d="M30 50h60l-6 40H36z" />
      <path d="M30 50c0-12 10-14 10-22M90 50c0-12-10-14-10-22" opacity="0.5" />
      <circle cx="60" cy="30" r="2" />
      <circle cx="50" cy="20" r="1.6" />
      <circle cx="70" cy="20" r="1.6" />
    </>
  ),
  vanilla: (
    <>
      <path d="M22 60c22-14 54-14 76 0" />
      <path d="M22 60c22 14 54 14 76 0" opacity="0.5" />
      <circle cx="36" cy="60" r="1.6" />
      <circle cx="50" cy="55" r="1.6" />
      <circle cx="64" cy="60" r="1.6" />
      <circle cx="78" cy="55" r="1.6" />
      <circle cx="90" cy="60" r="1.6" />
    </>
  ),
  pistachio: (
    <>
      <ellipse cx="46" cy="60" rx="14" ry="20" />
      <ellipse cx="74" cy="60" rx="14" ry="20" />
      <path d="M46 40v-8M74 40v-8" opacity="0.55" />
    </>
  ),
  honey: (
    <>
      <path d="M40 30h40v10l6 6v40l-6 6H40l-6-6V46l6-6z" />
      <path d="M40 50h40M40 66h40" opacity="0.5" />
      <path d="M60 78c6 6 6 12 0 16-6-4-6-10 0-16z" opacity="0.7" />
    </>
  ),
  butter: (
    <>
      <rect x="26" y="46" width="68" height="34" rx="3" />
      <path d="M26 46l10-14h48l10 14" opacity="0.55" />
    </>
  ),
};
