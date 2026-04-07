// Wawel Castle silhouette SVG — used as decorative section divider
// Represents the iconic towers of Wawel Castle in Kraków

interface WawelDividerProps {
  className?: string;
  color?: string;
  opacity?: number;
}

export default function WawelDivider({
  className = '',
  color = '#C8822A',
  opacity = 0.75,
}: WawelDividerProps) {
  return (
    <div className={`flex items-end justify-center w-full overflow-hidden ${className}`}>
      <svg
        viewBox="0 0 600 60"
        className="w-full max-w-3xl"
        style={{ height: '60px', display: 'block' }}
        fill={color}
        fillOpacity={opacity}
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Left horizontal line */}
        <rect x="0" y="57" width="165" height="1" fillOpacity={opacity * 0.4} />

        {/* Left flanking tower */}
        <path d="
          M165,58
          L165,36
          L168,36 L168,30 L173,30 L173,36
          L178,36 L178,30 L183,30 L183,36
          L188,36 L188,30 L193,30 L193,36
          L198,36
          L198,58 Z
        " />

        {/* Left wall */}
        <rect x="198" y="50" width="22" height="8" fillOpacity={opacity * 0.6} />

        {/* Left inner tower */}
        <path d="
          M220,58
          L220,40
          L223,40 L223,33 L229,33 L229,40
          L235,40 L235,33 L241,33 L241,40
          L247,40
          L247,58 Z
        " />

        {/* Left wall to center */}
        <rect x="247" y="46" width="18" height="12" fillOpacity={opacity * 0.5} />

        {/* CENTER TALL TOWER */}
        <path d="
          M265,58
          L265,10
          L268,10 L268,3 L275,3 L275,0
          L282,0 L282,3
          L289,3 L289,0
          L296,0 L296,3
          L303,3 L303,0
          L310,0 L310,3
          L317,3 L317,10
          L320,10
          L320,58 Z
        " />

        {/* Right wall from center */}
        <rect x="320" y="46" width="18" height="12" fillOpacity={opacity * 0.5} />

        {/* Right inner tower */}
        <path d="
          M338,58
          L338,40
          L344,40 L344,33 L350,33 L350,40
          L356,40 L356,33 L362,33 L362,40
          L368,40
          L368,58 Z
        " />

        {/* Right wall */}
        <rect x="368" y="50" width="22" height="8" fillOpacity={opacity * 0.6} />

        {/* Right flanking tower */}
        <path d="
          M390,58
          L390,36
          L395,36 L395,30 L400,30 L400,36
          L405,36 L405,30 L410,30 L410,36
          L415,36 L415,30 L420,30 L420,36
          L425,36
          L425,58 Z
        " />

        {/* Right horizontal line */}
        <rect x="425" y="57" width="175" height="1" fillOpacity={opacity * 0.4} />
      </svg>
    </div>
  );
}
