// Hand-drawn ink illustration components for parchment sections
// Sepia ink color (#8B6914), scattered decoratively
// Designed to feel like natural pen-and-ink sketches, not clipart

interface IllustrationProps {
  className?: string;
  style?: React.CSSProperties;
  opacity?: number;
  size?: number;
}

const INK = '#8B6914';

export function InkPierogi({ className = '', style, opacity = 0.18, size = 80 }: IllustrationProps) {
  return (
    <svg
      width={size}
      height={size * 0.65}
      viewBox="0 0 100 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
      style={{ opacity, ...style }}
    >
      {/* Main dumpling body — half-moon shape */}
      <path
        d="M12 42 C8 30, 10 16, 22 10 C34 4, 50 3, 64 6 C78 9, 90 18, 91 30 C92 40, 85 50, 72 54 C60 58, 38 58, 26 54 C18 51, 13 47, 12 42 Z"
        stroke={INK}
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      {/* Crimped edge — series of small arcs along the top rim */}
      <path
        d="M15 35 Q20 28, 25 35 Q30 28, 35 35 Q40 28, 45 35 Q50 28, 55 35 Q60 28, 65 35 Q70 28, 75 35 Q80 30, 85 36"
        stroke={INK}
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
      {/* Texture lines inside body */}
      <path d="M30 44 C38 46, 55 46, 68 43" stroke={INK} strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.6" />
      <path d="M22 38 C30 40, 50 41, 72 38" stroke={INK} strokeWidth="0.8" strokeLinecap="round" fill="none" opacity="0.4" />
      {/* Small steam wisps */}
      <path d="M42 6 Q44 2, 42 -2" stroke={INK} strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.5" />
      <path d="M52 4 Q54 0, 52 -4" stroke={INK} strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.5" />
    </svg>
  );
}

export function InkBeerMug({ className = '', style, opacity = 0.18, size = 70 }: IllustrationProps) {
  return (
    <svg
      width={size * 0.85}
      height={size}
      viewBox="0 0 70 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
      style={{ opacity, ...style }}
    >
      {/* Mug body */}
      <path
        d="M8 20 L10 80 C10 83, 13 86, 16 86 L50 86 C53 86, 56 83, 56 80 L58 20 Z"
        stroke={INK}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Handle */}
      <path
        d="M56 30 Q75 30, 75 50 Q75 70, 56 70"
        stroke={INK}
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      {/* Foam top — overlapping bubbles */}
      <path
        d="M6 20 Q12 10, 18 18 Q24 8, 30 17 Q36 8, 42 17 Q48 8, 54 18 Q60 10, 66 20"
        stroke={INK}
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
      />
      {/* Foam base */}
      <line x1="8" y1="20" x2="58" y2="20" stroke={INK} strokeWidth="1.5" opacity="0.5" />
      {/* Vertical line details on mug */}
      <line x1="24" y1="30" x2="25" y2="78" stroke={INK} strokeWidth="0.8" strokeLinecap="round" opacity="0.35" />
      <line x1="38" y1="30" x2="39" y2="78" stroke={INK} strokeWidth="0.8" strokeLinecap="round" opacity="0.35" />
      {/* Small highlight shine on foam */}
      <path d="M20 14 Q22 12, 26 14" stroke={INK} strokeWidth="1" strokeLinecap="round" opacity="0.4" fill="none" />
    </svg>
  );
}

export function InkWheatSheaf({ className = '', style, opacity = 0.18, size = 90 }: IllustrationProps) {
  return (
    <svg
      width={size * 0.6}
      height={size}
      viewBox="0 0 60 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
      style={{ opacity, ...style }}
    >
      {/* Central stem */}
      <line x1="30" y1="95" x2="30" y2="15" stroke={INK} strokeWidth="1.8" strokeLinecap="round" />
      {/* Left stalks */}
      <path d="M30 80 Q22 65, 18 50" stroke={INK} strokeWidth="1.3" strokeLinecap="round" fill="none" />
      <path d="M30 70 Q18 55, 12 40" stroke={INK} strokeWidth="1.3" strokeLinecap="round" fill="none" />
      <path d="M30 60 Q20 45, 16 28" stroke={INK} strokeWidth="1.3" strokeLinecap="round" fill="none" />
      {/* Right stalks */}
      <path d="M30 80 Q38 65, 42 50" stroke={INK} strokeWidth="1.3" strokeLinecap="round" fill="none" />
      <path d="M30 70 Q42 55, 48 40" stroke={INK} strokeWidth="1.3" strokeLinecap="round" fill="none" />
      <path d="M30 60 Q40 45, 44 28" stroke={INK} strokeWidth="1.3" strokeLinecap="round" fill="none" />
      {/* Wheat grain heads — left */}
      <ellipse cx="17" cy="47" rx="4" ry="6" transform="rotate(-20 17 47)" stroke={INK} strokeWidth="1.2" fill="none" />
      <ellipse cx="11" cy="37" rx="4" ry="6" transform="rotate(-28 11 37)" stroke={INK} strokeWidth="1.2" fill="none" />
      <ellipse cx="15" cy="25" rx="4" ry="6" transform="rotate(-22 15 25)" stroke={INK} strokeWidth="1.2" fill="none" />
      {/* Wheat grain heads — right */}
      <ellipse cx="43" cy="47" rx="4" ry="6" transform="rotate(20 43 47)" stroke={INK} strokeWidth="1.2" fill="none" />
      <ellipse cx="49" cy="37" rx="4" ry="6" transform="rotate(28 49 37)" stroke={INK} strokeWidth="1.2" fill="none" />
      <ellipse cx="45" cy="25" rx="4" ry="6" transform="rotate(22 45 25)" stroke={INK} strokeWidth="1.2" fill="none" />
      {/* Top central grain */}
      <ellipse cx="30" cy="12" rx="4" ry="7" stroke={INK} strokeWidth="1.4" fill="none" />
      {/* Binding tie at bottom */}
      <path d="M22 85 Q30 82, 38 85" stroke={INK} strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <path d="M24 88 Q30 86, 36 88" stroke={INK} strokeWidth="1.5" strokeLinecap="round" fill="none" />
    </svg>
  );
}

export function InkCastleTower({ className = '', style, opacity = 0.18, size = 80 }: IllustrationProps) {
  return (
    <svg
      width={size * 0.55}
      height={size}
      viewBox="0 0 55 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
      style={{ opacity, ...style }}
    >
      {/* Battlements at top */}
      <rect x="5" y="5" width="8" height="12" rx="1" stroke={INK} strokeWidth="1.5" fill="none" />
      <rect x="17" y="5" width="8" height="12" rx="1" stroke={INK} strokeWidth="1.5" fill="none" />
      <rect x="29" y="5" width="8" height="12" rx="1" stroke={INK} strokeWidth="1.5" fill="none" />
      <rect x="41" y="5" width="8" height="12" rx="1" stroke={INK} strokeWidth="1.5" fill="none" />
      {/* Battlement floor line */}
      <line x1="5" y1="17" x2="49" y2="17" stroke={INK} strokeWidth="1.5" />
      {/* Main tower walls */}
      <line x1="5" y1="17" x2="5" y2="95" stroke={INK} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="49" y1="17" x2="49" y2="95" stroke={INK} strokeWidth="1.5" strokeLinecap="round" />
      {/* Floor line at base */}
      <line x1="3" y1="95" x2="51" y2="95" stroke={INK} strokeWidth="1.8" strokeLinecap="round" />
      {/* Window — arched */}
      <path d="M20 38 L20 54 Q27 60, 34 54 L34 38 Z" stroke={INK} strokeWidth="1.3" fill="none" />
      <path d="M20 38 Q27 30, 34 38" stroke={INK} strokeWidth="1.3" fill="none" />
      {/* Door — arched */}
      <path d="M18 80 L18 95 L36 95 L36 80 Q27 70, 18 80 Z" stroke={INK} strokeWidth="1.3" fill="none" />
      {/* Stone line details */}
      <line x1="7" y1="65" x2="47" y2="65" stroke={INK} strokeWidth="0.8" opacity="0.4" />
      <line x1="7" y1="45" x2="16" y2="45" stroke={INK} strokeWidth="0.8" opacity="0.4" />
      <line x1="38" y1="45" x2="47" y2="45" stroke={INK} strokeWidth="0.8" opacity="0.4" />
      <line x1="7" y1="72" x2="14" y2="72" stroke={INK} strokeWidth="0.8" opacity="0.4" />
      <line x1="40" y1="72" x2="47" y2="72" stroke={INK} strokeWidth="0.8" opacity="0.4" />
    </svg>
  );
}

export function InkSausage({ className = '', style, opacity = 0.18, size = 90 }: IllustrationProps) {
  return (
    <svg
      width={size}
      height={size * 0.45}
      viewBox="0 0 100 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
      style={{ opacity, ...style }}
    >
      {/* Sausage body — gently curved */}
      <path
        d="M12 22 C12 10, 18 4, 28 4 L72 4 C82 4, 88 10, 88 22 C88 34, 82 40, 72 40 L28 40 C18 40, 12 34, 12 22 Z"
        stroke={INK}
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      {/* Tied ends */}
      <path d="M14 16 Q8 22, 14 28" stroke={INK} strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <path d="M86 16 Q92 22, 86 28" stroke={INK} strokeWidth="1.8" strokeLinecap="round" fill="none" />
      {/* Knot left */}
      <circle cx="10" cy="22" r="3" stroke={INK} strokeWidth="1.3" fill="none" />
      {/* Knot right */}
      <circle cx="90" cy="22" r="3" stroke={INK} strokeWidth="1.3" fill="none" />
      {/* Lengthwise grain lines */}
      <path d="M28 7 Q50 6, 72 7" stroke={INK} strokeWidth="0.9" strokeLinecap="round" opacity="0.45" fill="none" />
      <path d="M28 36 Q50 37, 72 36" stroke={INK} strokeWidth="0.9" strokeLinecap="round" opacity="0.45" fill="none" />
      {/* Sizzle marks / grill lines */}
      <path d="M36 10 Q38 22, 36 34" stroke={INK} strokeWidth="1.2" strokeLinecap="round" opacity="0.5" fill="none" />
      <path d="M50 8 Q52 22, 50 36" stroke={INK} strokeWidth="1.2" strokeLinecap="round" opacity="0.5" fill="none" />
      <path d="M64 10 Q66 22, 64 34" stroke={INK} strokeWidth="1.2" strokeLinecap="round" opacity="0.5" fill="none" />
    </svg>
  );
}
