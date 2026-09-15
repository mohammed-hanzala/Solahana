import React from 'react';

export default function FinancialPlanningIllustration() {
  return (
    <div className="w-full h-44 sm:h-48 flex items-center justify-center select-none overflow-hidden">
      <svg className="w-full h-full drop-shadow-md overflow-visible" viewBox="0 0 320 180" fill="none">
        {/* Soft Ambient Background Glow */}
        <circle cx="160" cy="90" r="70" fill="#C89B3C" opacity="0.08" />

        {/* Financial Roadmap Screen Board */}
        <rect x="25" y="15" width="270" height="150" rx="14" fill="#FFFFFF" stroke="#E7D7B5" strokeWidth="1.5" />
        
        {/* Top Header Line */}
        <line x1="40" y1="35" x2="140" y2="35" stroke="#C89B3C" strokeWidth="3" strokeLinecap="round" />
        <circle cx="270" cy="35" r="4" fill="#10B981" />

        {/* Milestone Growth Line */}
        <path d="M 45 130 Q 110 120 160 85 T 270 45" stroke="#C89B3C" strokeWidth="3" strokeLinecap="round" fill="none" />
        <path d="M 45 130 Q 110 120 160 85 T 270 45 L 270 135 L 45 135 Z" fill="#C89B3C" opacity="0.08" />

        {/* Milestone Nodes */}
        <circle cx="110" cy="110" r="5" fill="#C89B3C" />
        <circle cx="160" cy="85" r="6" fill="#D4AF37" />
        <circle cx="270" cy="45" r="7" fill="#10B981" />

        {/* Human Figure (Fiduciary Advisor with Tablet - 30% Larger) */}
        <circle cx="95" cy="62" r="16" fill="#FDBA74" />
        {/* Hair */}
        <path d="M 82 62 C 82 46, 108 46, 108 62 Z" fill="#1A1A1A" />
        {/* Executive Torso */}
        <path d="M 80 82 L 110 82 L 106 142 L 84 142 Z" fill="#1A1A1A" />
        {/* Arm Holding Digital Tablet */}
        <path d="M 95 90 L 130 98 L 120 108 Z" fill="#C89B3C" />

        {/* Human Figure (Client Reviewing Wealth Plan - 30% Larger) */}
        <circle cx="215" cy="65" r="15" fill="#FDBA74" />
        {/* Hair */}
        <path d="M 203 65 C 203 50, 227 50, 227 65 Z" fill="#B8860B" />
        {/* Torso */}
        <path d="M 200 85 L 230 85 L 226 142 L 204 142 Z" fill="#B8860B" />

        {/* Target FIRE Badge Card */}
        <g transform="translate(140, 110)">
          <rect width="90" height="34" rx="8" fill="#FCFAF6" stroke="#E7D7B5" strokeWidth="1.5" />
          <text x="45" y="15" fill="#1A1A1A" fontSize="9" fontFamily="sans-serif" fontWeight="bold" textAnchor="middle">360° Wealth Plan</text>
          <text x="45" y="27" fill="#C89B3C" fontSize="9" fontFamily="sans-serif" fontWeight="bold" textAnchor="middle">₹5.0 Crore FIRE</text>
        </g>
      </svg>
    </div>
  );
}
