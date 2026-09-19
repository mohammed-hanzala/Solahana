import React from 'react';

export default function GoalPlanningIllustration() {
  return (
    <div className="w-full h-full flex items-center justify-center select-none">
      <svg className="w-full h-full drop-shadow-sm" viewBox="0 0 320 180" fill="none">
        {/* Soft Ambient Background Glow */}
        <circle cx="160" cy="90" r="70" fill="#C89B3C" opacity="0.08" />

        {/* Risk Protection Board */}
        <rect x="20" y="12" width="280" height="156" rx="16" fill="#FFFFFF" stroke="#E7D7B5" strokeWidth="1.5" />
        
        {/* Top Header Line */}
        <line x1="36" y1="32" x2="140" y2="32" stroke="#C89B3C" strokeWidth="3" strokeLinecap="round" />
        <circle cx="280" cy="32" r="4" fill="#10B981" />

        {/* Protective Golden Shield Arch */}
        <path d="M 60 120 C 60 50, 200 50, 200 120" stroke="#C89B3C" strokeWidth="2.5" strokeDasharray="6 4" fill="none" />
        
        {/* Shield Icon SVG Badge in Center */}
        <circle cx="130" cy="55" r="18" fill="#FAF6EE" stroke="#C89B3C" strokeWidth="1.5" />
        <path d="M 130 45 L 140 50 V 58 C 140 65, 130 70, 130 70 C 130 70, 120 65, 120 58 V 50 L 130 45 Z" fill="#C89B3C" opacity="0.85" />

        {/* Husband Figure (Protected Family) */}
        <g transform="translate(0, 5)">
          <circle cx="90" cy="65" r="13" fill="#FDBA74" />
          <path d="M 79 65 C 79 52, 101 52, 101 65 Z" fill="#0F172A" />
          <path d="M 76 83 L 104 83 L 100 138 L 80 138 Z" fill="#0F172A" />
        </g>

        {/* Wife Figure */}
        <g transform="translate(10, 8)">
          <circle cx="130" cy="68" r="12" fill="#FDBA74" />
          <path d="M 120 68 C 120 56, 140 56, 140 68 Z" fill="#9A7326" />
          <path d="M 118 84 L 142 84 L 138 138 L 122 138 Z" fill="#C89B3C" />
        </g>

        {/* Child Figure */}
        <g transform="translate(5, 12)">
          <circle cx="112" cy="85" r="9" fill="#FDBA74" />
          <path d="M 104 96 L 120 96 L 117 138 L 107 138 Z" fill="#0F172A" opacity="0.8" />
        </g>

        {/* Health & Term Cover Badge Card */}
        <g transform="translate(145, 115)">
          <rect width="115" height="34" rx="8" fill="#FCFAF6" stroke="#C89B3C" strokeWidth="1.5" className="drop-shadow-sm" />
          <text x="57.5" y="15" fill="#0F172A" fontSize="9" fontFamily="sans-serif" fontWeight="bold" textAnchor="middle">Risk & Health Shield</text>
          <text x="57.5" y="27" fill="#C89B3C" fontSize="9" fontFamily="sans-serif" fontWeight="bold" textAnchor="middle">100% Family Coverage</text>
        </g>
      </svg>
    </div>
  );
}
