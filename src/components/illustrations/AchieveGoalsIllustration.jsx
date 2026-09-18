import React from 'react';

export default function AchieveGoalsIllustration() {
  return (
    <div className="w-full h-full min-h-[260px] flex items-center justify-center select-none p-2">
      <svg className="w-full h-full max-h-[300px]" viewBox="0 0 400 280" fill="none">
        <rect x="20" y="20" width="360" height="240" rx="20" fill="#FFFFFF" stroke="#E7D7B5" strokeWidth="1.5" />
        <circle cx="200" cy="140" r="90" fill="#C89B3C" opacity="0.05" />
        {/* Goal Flag & Peak */}
        <path d="M 60 210 L 160 140 L 250 170 L 320 70" stroke="#C89B3C" strokeWidth="3.5" strokeLinecap="round" fill="none" />
        {/* Peak Flag */}
        <line x1="320" y1="70" x2="320" y2="130" stroke="#071C48" strokeWidth="2.5" />
        <path d="M 320 70 L 350 82 L 320 94 Z" fill="#C89B3C" />
        {/* Human Figure Reaching Goal */}
        <g transform="translate(285, 90)">
          <circle cx="20" cy="15" r="12" fill="#FDBA74" />
          <path d="M 8 30 L 32 30 L 28 85 L 12 85 Z" fill="#071C48" />
        </g>
      </svg>
    </div>
  );
}
