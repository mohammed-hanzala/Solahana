import React from 'react';

export default function FinancialPlanningHeroIllustration() {
  return (
    <div className="w-full h-full flex items-center justify-center select-none overflow-hidden p-2">
      <svg className="w-full h-full drop-shadow-xl overflow-visible max-h-[460px]" viewBox="0 0 520 400" fill="none">
        {/* Soft Ambient Background Glows */}
        <circle cx="260" cy="200" r="160" fill="#C89B3C" opacity="0.06" />
        <circle cx="380" cy="120" r="100" fill="#E8C878" opacity="0.08" />

        {/* Backdrop Decorative Cards & UI Window */}
        <rect x="35" y="30" width="450" height="340" rx="24" fill="#FFFFFF" stroke="#E7D7B5" strokeWidth="1.5" />
        
        {/* Top App Header */}
        <line x1="60" y1="65" x2="160" y2="65" stroke="#C89B3C" strokeWidth="3.5" strokeLinecap="round" />
        <rect x="390" y="52" width="70" height="24" rx="12" fill="#FAF8F5" stroke="#E7D7B5" strokeWidth="1" />
        <circle cx="405" cy="64" r="4" fill="#10B981" />
        <text x="430" y="68" fill="#0F172A" fontSize="9" fontFamily="sans-serif" fontWeight="bold">LIVE 360°</text>

        {/* Growth Curve Chart in Background */}
        <path d="M 60 290 Q 180 270 280 180 T 460 110" stroke="#C89B3C" strokeWidth="3" strokeLinecap="round" strokeDasharray="4 4" fill="none" />
        <path d="M 60 290 Q 180 270 280 180 T 460 110 L 460 330 L 60 330 Z" fill="#C89B3C" opacity="0.05" />

        {/* Floating Goal Badges */}
        {/* Badge 1: Retirement FIRE */}
        <g transform="translate(60, 95)">
          <rect width="125" height="38" rx="12" fill="#FAF8F5" stroke="#E7D7B5" strokeWidth="1.5" />
          <circle cx="20" cy="19" r="10" fill="#C89B3C" opacity="0.2" />
          <text x="20" y="23" textAnchor="middle" fill="#9A7326" fontSize="11">🎯</text>
          <text x="38" y="16" fill="#0F172A" fontSize="10" fontFamily="sans-serif" fontWeight="bold">Retirement FIRE</text>
          <text x="38" y="28" fill="#C89B3C" fontSize="9" fontFamily="sans-serif" fontWeight="bold">Target ₹10 Cr Corpus</text>
        </g>

        {/* Badge 2: Tax Optimization */}
        <g transform="translate(345, 140)">
          <rect width="125" height="38" rx="12" fill="#FAF8F5" stroke="#E7D7B5" strokeWidth="1.5" />
          <circle cx="20" cy="19" r="10" fill="#10B981" opacity="0.2" />
          <text x="20" y="23" textAnchor="middle" fill="#10B981" fontSize="11">🛡️</text>
          <text x="38" y="16" fill="#0F172A" fontSize="10" fontFamily="sans-serif" fontWeight="bold">Tax Harvesting</text>
          <text x="38" y="28" fill="#10B981" fontSize="9" fontFamily="sans-serif" fontWeight="bold">80C, 80D & NPS</text>
        </g>

        {/* Badge 3: Child Education */}
        <g transform="translate(330, 260)">
          <rect width="130" height="38" rx="12" fill="#FAF8F5" stroke="#E7D7B5" strokeWidth="1.5" />
          <circle cx="20" cy="19" r="10" fill="#3B82F6" opacity="0.2" />
          <text x="20" y="23" textAnchor="middle" fill="#3B82F6" fontSize="11">🎓</text>
          <text x="38" y="16" fill="#0F172A" fontSize="10" fontFamily="sans-serif" fontWeight="bold">Child Education</text>
          <text x="38" y="28" fill="#3B82F6" fontSize="9" fontFamily="sans-serif" fontWeight="bold">Global College Fund</text>
        </g>

        {/* Human Figure 1: Fiduciary Advisor (Left Figure with Tablet) */}
        <g transform="translate(135, 145)">
          {/* Head */}
          <circle cx="35" cy="30" r="22" fill="#FDBA74" />
          <path d="M 18 30 C 18 8, 52 8, 52 30 Z" fill="#0F172A" />
          {/* Glasses */}
          <circle cx="28" cy="30" r="5" fill="none" stroke="#C89B3C" strokeWidth="1.5" />
          <circle cx="42" cy="30" r="5" fill="none" stroke="#C89B3C" strokeWidth="1.5" />
          <line x1="33" y1="30" x2="37" y2="30" stroke="#C89B3C" strokeWidth="1.5" />
          {/* Torso Suit */}
          <path d="M 10 65 L 60 65 L 55 175 L 15 175 Z" fill="#071C48" />
          <path d="M 28 65 L 35 100 L 42 65 Z" fill="#FFFFFF" />
          <path d="M 33 65 L 35 110 L 37 65 Z" fill="#C89B3C" />
          {/* Arm holding Tablet */}
          <path d="M 45 75 L 85 95 L 75 115 Z" fill="#071C48" />
          {/* Digital Tablet */}
          <rect x="75" y="70" width="48" height="64" rx="6" fill="#0F172A" stroke="#C89B3C" strokeWidth="2" />
          <rect x="80" y="76" width="38" height="52" rx="3" fill="#FAF8F5" />
          <line x1="84" y1="86" x2="110" y2="86" stroke="#C89B3C" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="84" y1="96" x2="105" y2="96" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="84" y1="106" x2="100" y2="106" stroke="#071C48" strokeWidth="2.5" strokeLinecap="round" />
        </g>

        {/* Human Figure 2: Client/Couple (Right Figure Reviewing Plan) */}
        <g transform="translate(245, 155)">
          {/* Head */}
          <circle cx="35" cy="28" r="20" fill="#FDBA74" />
          <path d="M 18 28 C 18 10, 52 10, 52 28 C 55 45, 48 55, 48 55 Z" fill="#9A7326" />
          {/* Torso */}
          <path d="M 15 60 L 55 60 L 50 165 L 20 165 Z" fill="#FAF8F5" stroke="#E7D7B5" strokeWidth="1.5" />
          {/* Gold Accent */}
          <path d="M 25 60 L 35 90 L 45 60 Z" fill="#C89B3C" />
        </g>
      </svg>
    </div>
  );
}
