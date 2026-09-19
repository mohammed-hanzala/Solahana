import React from 'react';

export default function FinancialPlanningIllustration() {
  return (
    <div className="w-full h-full flex items-center justify-center select-none">
      <svg className="w-full h-full drop-shadow-sm" viewBox="0 0 320 180" fill="none">
        {/* Soft Ambient Background Glow */}
        <circle cx="160" cy="90" r="70" fill="#C89B3C" opacity="0.08" />

        {/* Financial Roadmap Screen Board */}
        <rect x="20" y="12" width="280" height="156" rx="16" fill="#FFFFFF" stroke="#E7D7B5" strokeWidth="1.5" />
        
        {/* Top Header Line */}
        <line x1="36" y1="32" x2="130" y2="32" stroke="#C89B3C" strokeWidth="3" strokeLinecap="round" />
        <circle cx="280" cy="32" r="4" fill="#10B981" />

        {/* Milestone Growth Area Fill & Line */}
        <path d="M 40 135 Q 110 125 160 85 T 280 42" stroke="#C89B3C" strokeWidth="3" strokeLinecap="round" fill="none" />
        <path d="M 40 135 Q 110 125 160 85 T 280 42 L 280 140 L 40 140 Z" fill="#C89B3C" opacity="0.06" />

        {/* Milestone Nodes */}
        <circle cx="110" cy="115" r="5" fill="#C89B3C" />
        <circle cx="160" cy="85" r="6" fill="#D4AF37" />
        <circle cx="280" cy="42" r="7" fill="#10B981" />

        {/* Fiduciary Advisor Figure (Left) */}
        <g transform="translate(10, 0)">
          {/* Head */}
          <circle cx="85" cy="58" r="14" fill="#FDBA74" />
          {/* Hair */}
          <path d="M 73 58 C 73 44, 97 44, 97 58 Z" fill="#0F172A" />
          {/* Executive Navy Suit */}
          <path d="M 68 76 C 68 76, 75 73, 85 73 C 95 73, 102 76, 102 76 L 98 140 L 72 140 Z" fill="#0F172A" />
          {/* Shirt & Gold Tie */}
          <path d="M 81 73 L 89 73 L 87 95 L 83 95 Z" fill="#C89B3C" />
          <path d="M 80 73 L 90 73 L 85 85 Z" fill="#FFFFFF" />
          {/* Arm holding tablet */}
          <path d="M 94 82 L 122 92 L 115 102 Z" fill="#0F172A" />
          <rect x="115" y="86" width="22" height="28" rx="4" fill="#FFFFFF" stroke="#C89B3C" strokeWidth="1.5" />
          <line x1="119" y1="94" x2="133" y2="94" stroke="#C89B3C" strokeWidth="2" strokeLinecap="round" />
          <line x1="119" y1="100" x2="129" y2="100" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" />
        </g>

        {/* Client Figure (Right) */}
        <g transform="translate(-10, 0)">
          {/* Head */}
          <circle cx="225" cy="60" r="14" fill="#FDBA74" />
          {/* Hair */}
          <path d="M 213 60 C 213 46, 237 46, 237 60 Z" fill="#9A7326" />
          {/* Gold Executive Blazer */}
          <path d="M 208 78 C 208 78, 215 75, 225 75 C 235 75, 242 78, 242 78 L 238 140 L 212 140 Z" fill="#C89B3C" />
        </g>

        {/* Target FIRE Badge Card */}
        <g transform="translate(135, 115)">
          <rect width="100" height="34" rx="8" fill="#FCFAF6" stroke="#C89B3C" strokeWidth="1.5" className="drop-shadow-sm" />
          <text x="50" y="15" fill="#0F172A" fontSize="9" fontFamily="sans-serif" fontWeight="bold" textAnchor="middle">360° Financial Plan</text>
          <text x="50" y="27" fill="#C89B3C" fontSize="9" fontFamily="sans-serif" fontWeight="bold" textAnchor="middle">Fiduciary Roadmap</text>
        </g>
      </svg>
    </div>
  );
}
