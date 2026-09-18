import React from 'react';

export default function BuildWealthIllustration() {
  return (
    <div className="w-full h-full min-h-[260px] flex items-center justify-center select-none p-2">
      <svg className="w-full h-full max-h-[300px]" viewBox="0 0 400 280" fill="none">
        <rect x="20" y="20" width="360" height="240" rx="20" fill="#FFFFFF" stroke="#E7D7B5" strokeWidth="1.5" />
        <circle cx="200" cy="140" r="90" fill="#C89B3C" opacity="0.05" />
        {/* SIP Growth Bars */}
        <rect x="60" y="170" width="30" height="60" rx="6" fill="#C89B3C" opacity="0.2" />
        <rect x="110" y="140" width="30" height="90" rx="6" fill="#C89B3C" opacity="0.4" />
        <rect x="160" y="110" width="30" height="120" rx="6" fill="#C89B3C" opacity="0.6" />
        <rect x="210" y="80" width="30" height="150" rx="6" fill="#C89B3C" opacity="0.8" />
        <rect x="260" y="50" width="30" height="180" rx="6" fill="#C89B3C" />
        {/* Line Curve */}
        <path d="M 75 160 Q 175 120 275 40" stroke="#10B981" strokeWidth="3.5" strokeLinecap="round" strokeDasharray="5 5" fill="none" />
        {/* Human Investor Figure */}
        <g transform="translate(295, 120)">
          <circle cx="25" cy="20" r="14" fill="#FDBA74" />
          <path d="M 10 40 L 40 40 L 36 100 L 14 100 Z" fill="#071C48" />
        </g>
      </svg>
    </div>
  );
}
