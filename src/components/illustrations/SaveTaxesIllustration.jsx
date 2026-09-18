import React from 'react';

export default function SaveTaxesIllustration() {
  return (
    <div className="w-full h-full min-h-[260px] flex items-center justify-center select-none p-2">
      <svg className="w-full h-full max-h-[300px]" viewBox="0 0 400 280" fill="none">
        <rect x="20" y="20" width="360" height="240" rx="20" fill="#FFFFFF" stroke="#E7D7B5" strokeWidth="1.5" />
        <circle cx="200" cy="140" r="90" fill="#10B981" opacity="0.05" />
        {/* Tax Calculator Screen */}
        <rect x="70" y="50" width="160" height="180" rx="14" fill="#FAF8F5" stroke="#E7D7B5" strokeWidth="1.5" />
        <rect x="85" y="65" width="130" height="35" rx="8" fill="#0F172A" />
        <text x="100" y="87" fill="#10B981" fontSize="13" fontFamily="sans-serif" fontWeight="bold">₹0 Tax Drag</text>
        {/* Grid Buttons */}
        <rect x="85" y="115" width="35" height="25" rx="5" fill="#E7D7B5" opacity="0.5" />
        <rect x="132" y="115" width="35" height="25" rx="5" fill="#E7D7B5" opacity="0.5" />
        <rect x="180" y="115" width="35" height="25" rx="5" fill="#C89B3C" />
        <rect x="85" y="150" width="35" height="25" rx="5" fill="#E7D7B5" opacity="0.5" />
        <rect x="132" y="150" width="35" height="25" rx="5" fill="#E7D7B5" opacity="0.5" />
        <rect x="180" y="150" width="35" height="25" rx="5" fill="#10B981" />
        {/* Human Figure Holding Tax Shield */}
        <g transform="translate(260, 100)">
          <circle cx="30" cy="20" r="14" fill="#FDBA74" />
          <path d="M 15 40 L 45 40 L 40 120 L 20 120 Z" fill="#071C48" />
          <path d="M 5 50 L 25 80 L 45 50 Z" fill="#10B981" opacity="0.8" />
        </g>
      </svg>
    </div>
  );
}
