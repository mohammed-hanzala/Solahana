import React from 'react';

export default function TaxPlanningIllustration() {
  return (
    <div className="w-full h-full flex items-center justify-center select-none">
      <svg className="w-full h-full drop-shadow-sm" viewBox="0 0 320 180" fill="none">
        {/* Soft Ambient Background Glow */}
        <circle cx="160" cy="90" r="70" fill="#C89B3C" opacity="0.08" />

        {/* Tax Dashboard Display Board */}
        <rect x="20" y="12" width="280" height="156" rx="16" fill="#FFFFFF" stroke="#E7D7B5" strokeWidth="1.5" />
        
        {/* Top Header Line */}
        <line x1="36" y1="32" x2="140" y2="32" stroke="#C89B3C" strokeWidth="3" strokeLinecap="round" />
        <circle cx="280" cy="32" r="4" fill="#10B981" />

        {/* Tax Document Sheet */}
        <rect x="110" y="38" width="100" height="110" rx="10" fill="#FCFAF6" stroke="#C89B3C" strokeWidth="1.5" />
        <line x1="125" y1="52" x2="190" y2="52" stroke="#C89B3C" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="125" y1="64" x2="180" y2="64" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="125" y1="76" x2="185" y2="76" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="125" y1="88" x2="175" y2="88" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" />

        {/* Approved Stamp */}
        <circle cx="185" cy="115" r="13" fill="#10B981" opacity="0.15" />
        <path d="M 179 115 L 183 119 L 191 111" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />

        {/* Fiduciary Advisor Figure (Left) */}
        <g transform="translate(-15, 5)">
          <circle cx="85" cy="55" r="14" fill="#FDBA74" />
          <path d="M 73 55 C 73 41, 97 41, 97 55 Z" fill="#0F172A" />
          <path d="M 70 75 C 70 75, 77 72, 85 72 C 93 72, 100 75, 100 75 L 96 138 L 74 138 Z" fill="#0F172A" />
          <path d="M 85 82 Q 105 75 125 70" stroke="#0F172A" strokeWidth="3.5" strokeLinecap="round" fill="none" />
        </g>

        {/* Client Figure (Right) */}
        <g transform="translate(15, 5)">
          <circle cx="235" cy="55" r="14" fill="#FDBA74" />
          <path d="M 223 55 C 223 41, 247 41, 247 55 Z" fill="#9A7326" />
          <path d="M 220 75 C 220 75, 227 72, 235 72 C 243 72, 250 75, 250 75 L 246 138 L 224 138 Z" fill="#C89B3C" />
          <path d="M 225 82 Q 205 75 185 70" stroke="#C89B3C" strokeWidth="3.5" strokeLinecap="round" fill="none" />
        </g>

        {/* Tax Saved Badge Card */}
        <g transform="translate(135, 115)">
          <rect width="105" height="34" rx="8" fill="#FCFAF6" stroke="#C89B3C" strokeWidth="1.5" className="drop-shadow-sm" />
          <text x="52.5" y="15" fill="#0F172A" fontSize="9" fontFamily="sans-serif" fontWeight="bold" textAnchor="middle">Tax Optimization</text>
          <text x="52.5" y="27" fill="#10B981" fontSize="9" fontFamily="sans-serif" fontWeight="bold" textAnchor="middle">Sec 80C • 80D • NPS</text>
        </g>
      </svg>
    </div>
  );
}
