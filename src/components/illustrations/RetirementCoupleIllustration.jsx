import React from 'react';

export default function RetirementCoupleIllustration() {
  return (
    <div className="w-full h-44 sm:h-48 flex items-center justify-center select-none overflow-hidden">
      <svg className="w-full h-full drop-shadow-md overflow-visible" viewBox="0 0 320 180" fill="none">
        {/* Soft Ambient Background Glow */}
        <circle cx="160" cy="90" r="70" fill="#C89B3C" opacity="0.08" />

        {/* Dashboard Display Board */}
        <rect x="25" y="15" width="270" height="150" rx="14" fill="#FFFFFF" stroke="#E7D7B5" strokeWidth="1.5" />
        
        {/* Top Line */}
        <line x1="40" y1="35" x2="160" y2="35" stroke="#C89B3C" strokeWidth="3" strokeLinecap="round" />
        <circle cx="270" cy="35" r="4" fill="#10B981" />

        {/* Sun Horizon Circle in Background */}
        <circle cx="160" cy="85" r="40" fill="#FCFAF6" stroke="#E7D7B5" strokeWidth="1.5" />

        {/* Husband (Senior Retiree Figure - 30% Larger) */}
        <circle cx="95" cy="55" r="15" fill="#FDBA74" />
        {/* Silver Hair */}
        <path d="M 83 55 C 83 40, 107 40, 107 55 Z" fill="#94A3B8" />
        {/* Executive Torso */}
        <path d="M 80 75 L 110 75 L 106 142 L 84 142 Z" fill="#1A1A1A" />

        {/* Wife (Senior Retiree Figure - 30% Larger) */}
        <circle cx="140" cy="58" r="14" fill="#FDBA74" />
        {/* Grey Hair */}
        <path d="M 129 58 C 129 45, 151 45, 151 58 Z" fill="#CBD5E1" />
        {/* Torso */}
        <path d="M 128 78 L 152 78 L 148 142 L 132 142 Z" fill="#B8860B" />

        {/* Financial Advisor (Right - 30% Larger) */}
        <circle cx="230" cy="55" r="16" fill="#FDBA74" />
        {/* Dark Hair */}
        <path d="M 217 55 C 217 40, 243 40, 243 55 Z" fill="#1A1A1A" />
        {/* Torso */}
        <path d="M 215 75 L 245 75 L 241 142 L 219 142 Z" fill="#1A1A1A" />
        {/* Arm presenting retirement nest egg */}
        <path d="M 220 85 Q 185 75 160 70" stroke="#1A1A1A" strokeWidth="4" strokeLinecap="round" fill="none" />

        {/* Target FIRE Corpus Card */}
        <g transform="translate(140, 110)">
          <rect width="95" height="34" rx="8" fill="#FCFAF6" stroke="#E7D7B5" strokeWidth="1.5" />
          <text x="47.5" y="15" fill="#1A1A1A" fontSize="9" fontFamily="sans-serif" fontWeight="bold" textAnchor="middle">Target FIRE Corpus</text>
          <text x="47.5" y="27" fill="#C89B3C" fontSize="9" fontFamily="sans-serif" fontWeight="bold" textAnchor="middle">₹4.50 Cr • SWP</text>
        </g>
      </svg>
    </div>
  );
}
