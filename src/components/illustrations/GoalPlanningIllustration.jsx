import React from 'react';

export default function GoalPlanningIllustration() {
  return (
    <div className="w-full h-44 sm:h-48 flex items-center justify-center select-none overflow-hidden">
      <svg className="w-full h-full drop-shadow-md overflow-visible" viewBox="0 0 320 180" fill="none">
        {/* Soft Ambient Background Glow */}
        <circle cx="160" cy="90" r="70" fill="#C89B3C" opacity="0.08" />

        {/* Life Goal Board Display */}
        <rect x="25" y="15" width="270" height="150" rx="14" fill="#FFFFFF" stroke="#E7D7B5" strokeWidth="1.5" />
        
        {/* Top Header */}
        <line x1="40" y1="35" x2="140" y2="35" stroke="#C89B3C" strokeWidth="3" strokeLinecap="round" />
        <circle cx="270" cy="35" r="4" fill="#10B981" />

        {/* Milestone Curve Line */}
        <path d="M 40 120 L 110 85 L 180 95 L 265 45" stroke="#C89B3C" strokeWidth="3" strokeLinecap="round" strokeDasharray="4 4" fill="none" />

        {/* Father (Human Vector Figure - 30% Larger) */}
        <circle cx="70" cy="55" r="16" fill="#FDBA74" />
        {/* Hair */}
        <path d="M 57 55 C 57 40, 83 40, 83 55 Z" fill="#1A1A1A" />
        {/* Torso */}
        <path d="M 55 75 L 85 75 L 81 142 L 59 142 Z" fill="#1A1A1A" />

        {/* Mother (Human Vector Figure - 30% Larger) */}
        <circle cx="115" cy="58" r="14" fill="#FDBA74" />
        {/* Hair */}
        <path d="M 104 58 C 104 45, 126 45, 126 58 Z" fill="#B8860B" />
        {/* Torso */}
        <path d="M 103 78 L 127 78 L 123 142 L 107 142 Z" fill="#B8860B" />

        {/* Child (Human Vector Figure - 30% Larger) */}
        <circle cx="92" cy="85" r="10" fill="#FDBA74" />
        <path d="M 84 98 L 100 98 L 98 142 L 86 142 Z" fill="#C89B3C" />

        {/* Goal Milestone Card (Home & Education) */}
        <g transform="translate(155, 30)">
          <rect width="125" height="42" rx="8" fill="#FCFAF6" stroke="#E7D7B5" strokeWidth="1.5" />
          <text x="62.5" y="18" fill="#1A1A1A" fontSize="9" fontFamily="sans-serif" fontWeight="bold" textAnchor="middle">Dream Home & Education</text>
          <text x="62.5" y="32" fill="#C89B3C" fontSize="9" fontFamily="sans-serif" fontWeight="bold" textAnchor="middle">₹1.20 Cr Goal Blueprint</text>
        </g>
      </svg>
    </div>
  );
}
