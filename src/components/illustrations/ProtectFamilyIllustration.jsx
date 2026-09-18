import React from 'react';

export default function ProtectFamilyIllustration() {
  return (
    <div className="w-full h-full min-h-[260px] flex items-center justify-center select-none p-2">
      <svg className="w-full h-full max-h-[300px]" viewBox="0 0 400 280" fill="none">
        <rect x="20" y="20" width="360" height="240" rx="20" fill="#FFFFFF" stroke="#E7D7B5" strokeWidth="1.5" />
        <circle cx="200" cy="140" r="90" fill="#10B981" opacity="0.05" />
        {/* Shield Umbrella */}
        <path d="M 120 110 C 120 50, 280 50, 280 110 Z" fill="#C89B3C" opacity="0.2" stroke="#C89B3C" strokeWidth="2" />
        <line x1="200" y1="110" x2="200" y2="190" stroke="#C89B3C" strokeWidth="3" strokeLinecap="round" />
        <path d="M 200 190 C 200 200, 185 200, 185 190" stroke="#C89B3C" strokeWidth="3" strokeLinecap="round" fill="none" />
        {/* Family Figures Under Shield */}
        <g transform="translate(145, 120)">
          {/* Parent 1 */}
          <circle cx="20" cy="15" r="10" fill="#FDBA74" />
          <path d="M 10 30 L 30 30 L 28 70 L 12 70 Z" fill="#071C48" />
          {/* Child */}
          <circle cx="42" cy="25" r="7" fill="#FDBA74" />
          <path d="M 35 36 L 49 36 L 47 70 L 37 70 Z" fill="#9A7326" />
          {/* Parent 2 */}
          <circle cx="65" cy="15" r="10" fill="#FDBA74" />
          <path d="M 55 30 L 75 30 L 73 70 L 57 70 Z" fill="#071C48" />
        </g>
      </svg>
    </div>
  );
}
