import React from 'react';

export default function RetirementCoupleIllustration() {
  return (
    <div className="w-full h-full flex items-center justify-center select-none">
      <svg className="w-full h-full drop-shadow-sm" viewBox="0 0 320 180" fill="none">
        {/* Soft Ambient Background Glow */}
        <circle cx="160" cy="90" r="70" fill="#C89B3C" opacity="0.08" />

        {/* Dashboard Display Board */}
        <rect x="20" y="12" width="280" height="156" rx="16" fill="#FFFFFF" stroke="#E7D7B5" strokeWidth="1.5" />
        
        {/* Top Header Line */}
        <line x1="36" y1="32" x2="140" y2="32" stroke="#C89B3C" strokeWidth="3" strokeLinecap="round" />
        <circle cx="280" cy="32" r="4" fill="#10B981" />

        {/* Golden Sun Horizon Arc in Background */}
        <circle cx="160" cy="92" r="42" fill="#FAF6EE" stroke="#E7D7B5" strokeWidth="1.5" />

        {/* Husband Figure (Retired Executive) */}
        <g transform="translate(-10, 5)">
          <circle cx="95" cy="55" r="14" fill="#FDBA74" />
          {/* Silver/Grey Hair */}
          <path d="M 83 55 C 83 41, 107 41, 107 55 Z" fill="#94A3B8" />
          {/* Torso Navy */}
          <path d="M 80 75 C 80 75, 87 72, 95 72 C 103 72, 110 75, 110 75 L 106 138 L 84 138 Z" fill="#0F172A" />
        </g>

        {/* Wife Figure (Retired Professional) */}
        <g transform="translate(0, 8)">
          <circle cx="140" cy="58" r="13" fill="#FDBA74" />
          {/* Elegant Grey Hair */}
          <path d="M 129 58 C 129 45, 151 45, 151 58 Z" fill="#CBD5E1" />
          {/* Torso Gold Accent */}
          <path d="M 128 77 C 128 77, 134 74, 140 74 C 146 74, 152 77, 152 77 L 148 138 L 132 138 Z" fill="#C89B3C" />
        </g>

        {/* Fiduciary Advisor Figure (Right) */}
        <g transform="translate(15, 5)">
          <circle cx="225" cy="55" r="14" fill="#FDBA74" />
          {/* Dark Professional Hair */}
          <path d="M 213 55 C 213 41, 237 41, 237 55 Z" fill="#0F172A" />
          {/* Torso Navy */}
          <path d="M 210 75 C 210 75, 217 72, 225 72 C 233 72, 240 75, 240 75 L 236 138 L 214 138 Z" fill="#0F172A" />
          {/* Arm presenting pension plan */}
          <path d="M 215 85 Q 185 75 162 70" stroke="#0F172A" strokeWidth="3.5" strokeLinecap="round" fill="none" />
        </g>

        {/* Target FIRE Corpus Card */}
        <g transform="translate(135, 115)">
          <rect width="105" height="34" rx="8" fill="#FCFAF6" stroke="#C89B3C" strokeWidth="1.5" className="drop-shadow-sm" />
          <text x="52.5" y="15" fill="#0F172A" fontSize="9" fontFamily="sans-serif" fontWeight="bold" textAnchor="middle">Retirement Freedom</text>
          <text x="52.5" y="27" fill="#C89B3C" fontSize="9" fontFamily="sans-serif" fontWeight="bold" textAnchor="middle">Inflation-Adjusted FIRE</text>
        </g>
      </svg>
    </div>
  );
}
