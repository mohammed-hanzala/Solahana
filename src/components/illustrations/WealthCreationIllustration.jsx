import React from 'react';

export default function WealthCreationIllustration() {
  return (
    <div className="w-full h-44 sm:h-48 flex items-center justify-center select-none overflow-hidden">
      <svg className="w-full h-full drop-shadow-md overflow-visible" viewBox="0 0 320 180" fill="none">
        {/* Soft Ambient Background Glow */}
        <circle cx="160" cy="90" r="70" fill="#C89B3C" opacity="0.08" />

        {/* Wealth Dashboard Board */}
        <rect x="25" y="15" width="270" height="150" rx="14" fill="#FFFFFF" stroke="#E7D7B5" strokeWidth="1.5" />
        
        {/* Top Header */}
        <line x1="40" y1="35" x2="150" y2="35" stroke="#C89B3C" strokeWidth="3" strokeLinecap="round" />
        <circle cx="270" cy="35" r="4" fill="#10B981" />

        {/* Compounding Growth Bars */}
        <rect x="45" y="100" width="22" height="35" rx="4" fill="#E7D7B5" />
        <rect x="80" y="80" width="22" height="55" rx="4" fill="#C89B3C" opacity="0.4" />
        <rect x="115" y="60" width="22" height="75" rx="4" fill="#C89B3C" opacity="0.7" />
        <rect x="150" y="40" width="22" height="95" rx="4" fill="#C89B3C" />

        {/* Growth Trend Line */}
        <path d="M 45 105 L 80 85 L 115 65 L 150 45 L 200 35" stroke="#10B981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="200" cy="35" r="5" fill="#10B981" />

        {/* Human Figure (Investor Analyzing Wealth Portfolio - 30% Larger) */}
        <circle cx="245" cy="55" r="16" fill="#FDBA74" />
        {/* Hair */}
        <path d="M 232 55 C 232 40, 258 40, 258 55 Z" fill="#1A1A1A" />
        {/* Torso */}
        <path d="M 230 75 L 260 75 L 256 142 L 234 142 Z" fill="#1A1A1A" />
        {/* Arm Pointing to Wealth Growth Bar */}
        <path d="M 235 85 Q 200 70 175 60" stroke="#1A1A1A" strokeWidth="4" strokeLinecap="round" fill="none" />

        {/* Wealth Corpus Card */}
        <g transform="translate(140, 110)">
          <rect width="95" height="34" rx="8" fill="#FCFAF6" stroke="#E7D7B5" strokeWidth="1.5" />
          <text x="47.5" y="15" fill="#1A1A1A" fontSize="9" fontFamily="sans-serif" fontWeight="bold" textAnchor="middle">Wealth Compounding</text>
          <text x="47.5" y="27" fill="#10B981" fontSize="9" fontFamily="sans-serif" fontWeight="bold" textAnchor="middle">+14.2% CAGR</text>
        </g>
      </svg>
    </div>
  );
}
