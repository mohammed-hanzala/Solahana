import React from 'react';

export default function WealthCreationIllustration() {
  return (
    <div className="w-full h-full flex items-center justify-center select-none">
      <svg className="w-full h-full drop-shadow-sm" viewBox="0 0 320 180" fill="none">
        {/* Soft Ambient Background Glow */}
        <circle cx="160" cy="90" r="70" fill="#C89B3C" opacity="0.08" />

        {/* Wealth Dashboard Board */}
        <rect x="20" y="12" width="280" height="156" rx="16" fill="#FFFFFF" stroke="#E7D7B5" strokeWidth="1.5" />
        
        {/* Top Header */}
        <line x1="36" y1="32" x2="140" y2="32" stroke="#C89B3C" strokeWidth="3" strokeLinecap="round" />
        <circle cx="280" cy="32" r="4" fill="#10B981" />

        {/* Compounding Growth Bars */}
        <rect x="42" y="102" width="24" height="35" rx="5" fill="#E7D7B5" />
        <rect x="78" y="82" width="24" height="55" rx="5" fill="#C89B3C" opacity="0.4" />
        <rect x="114" y="62" width="24" height="75" rx="5" fill="#C89B3C" opacity="0.75" />
        <rect x="150" y="42" width="24" height="95" rx="5" fill="#C89B3C" />

        {/* Growth Trend Line */}
        <path d="M 42 107 L 78 87 L 114 67 L 150 47 L 195 37" stroke="#10B981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="195" cy="37" r="5" fill="#10B981" />

        {/* Investor Figure (Right) */}
        <g transform="translate(10, 5)">
          {/* Head */}
          <circle cx="235" cy="55" r="14" fill="#FDBA74" />
          {/* Hair */}
          <path d="M 223 55 C 223 41, 247 41, 247 55 Z" fill="#0F172A" />
          {/* Torso Navy */}
          <path d="M 220 75 C 220 75, 227 72, 235 72 C 243 72, 250 75, 250 75 L 246 138 L 224 138 Z" fill="#0F172A" />
          {/* Arm pointing to growth bar */}
          <path d="M 225 85 Q 190 70 166 60" stroke="#0F172A" strokeWidth="3.5" strokeLinecap="round" fill="none" />
        </g>

        {/* Wealth Corpus Card */}
        <g transform="translate(135, 115)">
          <rect width="105" height="34" rx="8" fill="#FCFAF6" stroke="#E7D7B5" strokeWidth="1.5" className="drop-shadow-sm" />
          <text x="52.5" y="15" fill="#0F172A" fontSize="9" fontFamily="sans-serif" fontWeight="bold" textAnchor="middle">Compounding Wealth</text>
          <text x="52.5" y="27" fill="#10B981" fontSize="9" fontFamily="sans-serif" fontWeight="bold" textAnchor="middle">Goal-Based SIPs</text>
        </g>
      </svg>
    </div>
  );
}
