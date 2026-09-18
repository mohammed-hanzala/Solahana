import React from 'react';

export default function EstatePlanningIllustration() {
  return (
    <div className="w-full h-full flex items-center justify-center select-none">
      <svg className="w-full h-full drop-shadow-sm" viewBox="0 0 320 180" fill="none">
        {/* Soft Ambient Background Glow */}
        <circle cx="160" cy="90" r="70" fill="#C89B3C" opacity="0.08" />

        {/* Estate Planning Display Board */}
        <rect x="20" y="12" width="280" height="156" rx="16" fill="#FFFFFF" stroke="#E7D7B5" strokeWidth="1.5" />
        
        {/* Top Header Line */}
        <line x1="36" y1="32" x2="140" y2="32" stroke="#C89B3C" strokeWidth="3" strokeLinecap="round" />
        <circle cx="280" cy="32" r="4" fill="#10B981" />

        {/* Background Shield Outline */}
        <path d="M 160 38 L 210 55 V 90 C 210 115 160 135 160 135 C 160 135 110 115 110 90 V 55 Z" fill="#FAF6EE" stroke="#E7D7B5" strokeWidth="1.5" />

        {/* Estate Manor House Silhouette */}
        <path d="M 135 75 L 160 55 L 185 75 V 110 H 135 Z" fill="#FFFFFF" stroke="#C89B3C" strokeWidth="2" />
        <path d="M 153 92 H 167 V 110 H 153 Z" fill="#9A7326" />

        {/* Senior Patriarch Figure (Left) */}
        <g transform="translate(-15, 5)">
          <circle cx="75" cy="55" r="14" fill="#FDBA74" />
          <path d="M 63 55 C 63 41, 87 41, 87 55 Z" fill="#0F172A" />
          <path d="M 60 75 C 60 75, 67 72, 75 72 C 83 72, 90 75, 90 75 L 86 138 L 64 138 Z" fill="#0F172A" />
          <path d="M 75 82 Q 95 75 115 70" stroke="#0F172A" strokeWidth="3.5" strokeLinecap="round" fill="none" />
        </g>

        {/* Heir / Family Figure (Right) */}
        <g transform="translate(15, 5)">
          <circle cx="245" cy="55" r="14" fill="#FDBA74" />
          <path d="M 233 55 C 233 41, 257 41, 257 55 Z" fill="#9A7326" />
          <path d="M 230 75 C 230 75, 237 72, 245 72 C 253 72, 260 75, 260 75 L 256 138 L 234 138 Z" fill="#C89B3C" />
          <path d="M 235 82 Q 215 75 195 70" stroke="#C89B3C" strokeWidth="3.5" strokeLinecap="round" fill="none" />
        </g>

        {/* Private Trust Badge Card */}
        <g transform="translate(135, 115)">
          <rect width="105" height="34" rx="8" fill="#FCFAF6" stroke="#C89B3C" strokeWidth="1.5" className="drop-shadow-sm" />
          <text x="52.5" y="15" fill="#0F172A" fontSize="9" fontFamily="sans-serif" fontWeight="bold" textAnchor="middle">Estate & Legacy</text>
          <text x="52.5" y="27" fill="#C89B3C" fontSize="9" fontFamily="sans-serif" fontWeight="bold" textAnchor="middle">Wills & Private Trusts</text>
        </g>
      </svg>
    </div>
  );
}

