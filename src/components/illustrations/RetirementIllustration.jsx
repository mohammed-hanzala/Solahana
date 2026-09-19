import React from 'react';

export default function RetirementIllustration() {
  return (
    <div className="w-full h-full flex items-center justify-center select-none">
      <svg className="w-full h-full drop-shadow-md" viewBox="0 0 340 190" fill="none">
        <defs>
          <linearGradient id="retireGrad" x1="0" y1="0" x2="340" y2="190">
            <stop offset="0%" stopColor="#FFFDF9" />
            <stop offset="100%" stopColor="#FAF6EE" />
          </linearGradient>
        </defs>

        {/* Soft Background Sun Glow */}
        <circle cx="170" cy="95" r="75" fill="#C89B3C" opacity="0.1" />

        {/* Main Dashboard Card */}
        <rect x="15" y="10" width="310" height="170" rx="18" fill="url(#retireGrad)" stroke="#E7D7B5" strokeWidth="1.5" />

        {/* Golden Sun Horizon Arc */}
        <path d="M 90 140 A 80 80 0 0 1 250 140" fill="none" stroke="#E7D7B5" strokeWidth="1.5" strokeDasharray="4 4" />
        <circle cx="170" cy="95" r="45" fill="#FFFBF2" stroke="#C89B3C" strokeWidth="1.5" />

        {/* Inner FIRE Shield Badge */}
        <g transform="translate(148, 70)">
          <path d="M 22 0 L 44 12 V 28 C 44 42 22 52 22 52 C 22 52 0 42 0 28 V 12 Z" fill="#C89B3C" stroke="#FFFFFF" strokeWidth="2" />
          <path d="M 22 10 L 29 18 H 15 Z" fill="#FFFFFF" />
          <circle cx="22" cy="27" r="4" fill="#FFFFFF" />
        </g>

        {/* Inflation-Adjusted Growth Line */}
        <path d="M 35 140 Q 110 130 170 95 T 305 40" stroke="#C89B3C" strokeWidth="3.5" strokeLinecap="round" fill="none" />

        {/* SWP Cashflow Floating Pill (Left) */}
        <g transform="translate(30, 45)">
          <rect width="105" height="34" rx="9" fill="#FFFFFF" stroke="#C89B3C" strokeWidth="1.5" />
          <text x="52.5" y="15" fill="#64748B" fontSize="8.5" fontFamily="sans-serif">Monthly SWP Cashflow</text>
          <text x="52.5" y="27" fill="#10B981" fontSize="10.5" fontFamily="sans-serif" fontWeight="bold">₹1,50,000 / mo</text>
        </g>

        {/* Target FIRE Corpus Floating Pill (Right) */}
        <g transform="translate(200, 115)">
          <rect width="115" height="36" rx="9" fill="#FFFFFF" stroke="#C89B3C" strokeWidth="1.5" />
          <text x="57.5" y="15" fill="#0F172A" fontSize="9" fontFamily="sans-serif" fontWeight="bold">Target FIRE Corpus</text>
          <text x="57.5" y="28" fill="#C89B3C" fontSize="10" fontFamily="sans-serif" fontWeight="bold">₹5.00 Crores</text>
        </g>
      </svg>
    </div>
  );
}
