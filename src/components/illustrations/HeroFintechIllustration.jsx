import React from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, 
  FileText, 
  TrendingUp, 
  MessageSquare, 
  ShieldCheck, 
  Umbrella
} from 'lucide-react';

export default function HeroFintechIllustration({ onOpenSearch }) {
  // Constant Orbit Radius (205px) for a Perfect Circular Orbit (Diameter 410px)
  const ORBIT_RADIUS = 205;

  // 6 Floating Orbital Badges placed at exact Clock Positions (60° Spacing)
  // Top 3 labels sit ABOVE (bottom-full), Bottom 3 labels sit BELOW (top-full) for 100% radial symmetry outside orbit ring
  const circularNodes = [
    { id: 'tax', title: 'Tax Saving', icon: FileText, symbol: '₹', angle: -90, labelPos: 'above' },
    { id: 'growth', title: 'Investments', icon: TrendingUp, symbol: '₹', angle: -30, labelPos: 'above' },
    { id: 'advisory', title: 'Expert Advisory', icon: MessageSquare, symbol: '₹', angle: 30, labelPos: 'below' },
    { id: 'insurance', title: 'Health Cover', icon: ShieldCheck, symbol: '₹', angle: 90, labelPos: 'below' },
    { id: 'retirement', title: 'Retirement FIRE', icon: Umbrella, symbol: '₹', angle: 150, labelPos: 'below' },
    { id: 'home', title: 'Dream Home', icon: Building2, symbol: '₹', angle: -150, labelPos: 'above' },
  ];

  return (
    <div className="relative w-full max-w-[580px] aspect-square flex items-center justify-center select-none">
      
      {/* ------------------------------------------------------------- */}
      {/* AMBIENT GLOW & PERFECT GOLD DOTTED ORBIT                      */}
      {/* ------------------------------------------------------------- */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {/* Soft Radial Gold & Blue Backlight Glow */}
        <div className="w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-[#38BDF8]/15 via-[#C89B3C]/20 to-transparent blur-[90px] animate-pulse-glow" />
        
        {/* ONE CLEAN GOLD DOTTED CIRCULAR ORBIT (Diameter 410px = 2 * 205px radius) */}
        {/* Perfectly centered around illustration, matching badge centers */}
        <div className="absolute w-[410px] h-[410px] rounded-full border-2 border-dashed border-[#C89B3C]/40 animate-spin-slow" />
        
        {/* Inner Guide Ring */}
        <div className="absolute w-[300px] h-[300px] rounded-full border border-[#0F172A]/10" />
      </div>

      {/* ------------------------------------------------------------- */}
      {/* 6 CIRCULAR BADGES EXACTLY ON THE ORBIT CIRCUMFERENCE          */}
      {/* ------------------------------------------------------------- */}
      {circularNodes.map((node, index) => {
        const Icon = node.icon;
        // Calculate exact Cartesian coordinates on circumference (radius = 205px)
        const rad = (node.angle * Math.PI) / 180;
        const x = Math.cos(rad) * ORBIT_RADIUS;
        const y = Math.sin(rad) * ORBIT_RADIUS;
        const isLabelAbove = node.labelPos === 'above';

        return (
          <motion.div
            key={node.id}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
            whileHover={{ scale: 1.15 }}
            onClick={onOpenSearch}
            className="absolute z-30 cursor-pointer group flex flex-col items-center justify-center pointer-events-auto"
            style={{
              left: `calc(50% + ${x}px)`,
              top: `calc(50% + ${y}px)`,
              width: '56px',
              height: '56px',
              transform: 'translate(-50%, -50%)',
            }}
          >
            {/* White & Gold Circular Badge (Center sits 100% ON the gold dotted orbit line) */}
            <div className="relative w-14 h-14 rounded-full bg-white border-2 border-[#C89B3C] shadow-[0_10px_25px_rgba(200,154,75,0.25)] group-hover:border-[#9A7326] group-hover:shadow-[0_12px_30px_rgba(200,154,75,0.4)] transition-all flex items-center justify-center shrink-0">
              <Icon className="w-6 h-6 text-[#9A7326] group-hover:text-[#C89B3C] transition-colors" />
              
              {/* Rupee Symbol Badge */}
              <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-gradient-to-r from-[#C89B3C] to-[#9A7326] text-white text-[10px] font-bold flex items-center justify-center border border-white shadow">
                {node.symbol}
              </div>
            </div>

            {/* Label Tooltip Badge (Positioned radially OUTSIDE orbit ring: ABOVE for top 3, BELOW for bottom 3) */}
            <span 
              className={`absolute ${
                isLabelAbove ? 'bottom-full mb-2' : 'top-full mt-2'
              } text-[11px] font-semibold text-[#0F172A] bg-white/95 px-3 py-0.5 rounded-full border border-[#C89B3C]/30 shadow-md opacity-90 group-hover:opacity-100 transition-opacity whitespace-nowrap text-center pointer-events-none`}
            >
              {node.title}
            </span>
          </motion.div>
        );
      })}

      {/* ------------------------------------------------------------- */}
      {/* CENTRAL VECTOR CHARACTER ILLUSTRATION (REFERENCE PHOTO MATCH) */}
      {/* ------------------------------------------------------------- */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-20 w-80 h-80 flex flex-col items-center justify-center"
      >
        <svg className="w-full h-full drop-shadow-2xl overflow-visible" viewBox="0 0 320 320" fill="none">
          
          {/* Subtle Shadow Oval on Ground */}
          <ellipse cx="160" cy="285" rx="100" ry="14" fill="#0F172A" opacity="0.12" />

          {/* Cross-legged Legs Base (Dark Navy Trousers) */}
          <path d="M 65 260 C 65 240, 95 240, 120 255 C 145 270, 175 270, 200 255 C 225 240, 255 240, 255 260 C 255 280, 215 285, 160 285 C 105 285, 65 280, 65 260 Z" fill="#0A1128" />

          {/* Torso / Navy Shirt (Matching Reference Image Character) */}
          <path d="M 110 145 C 110 135, 125 130, 160 130 C 195 130, 210 135, 210 145 L 220 250 C 220 255, 210 260, 160 260 C 110 260, 100 255, 100 250 Z" fill="#0F172A" />

          {/* Neck & Collar */}
          <path d="M 148 115 L 172 115 L 168 135 L 152 135 Z" fill="#FCD34D" opacity="0.3" />
          <path d="M 145 110 C 145 105, 175 105, 175 110 L 172 130 L 148 130 Z" fill="#F87171" opacity="0.9" />

          {/* Floating Tie Dynamic Curve (Matching Reference Image) */}
          <path d="M 160 130 Q 185 140 205 130 Q 215 125 225 135" stroke="#0F172A" strokeWidth="6" strokeLinecap="round" fill="none" />

          {/* Head & Face */}
          <circle cx="160" cy="85" r="24" fill="#FBCFE8" opacity="0.4" />
          <circle cx="160" cy="85" r="22" fill="#FDBA74" />
          
          {/* Hair (Sleek Modern Hairstyle) */}
          <path d="M 140 85 C 140 60, 180 60, 180 85 C 175 68, 145 68, 140 85 Z" fill="#0F172A" />
          <path d="M 142 75 C 150 62, 175 65, 178 78 C 168 70, 150 72, 142 75 Z" fill="#1E293B" />

          {/* Face Features (Peaceful Focus) */}
          <path d="M 152 87 Q 156 89 160 87" stroke="#0F172A" strokeWidth="2" strokeLinecap="round" fill="none" />
          <path d="M 164 87 Q 168 89 172 87" stroke="#0F172A" strokeWidth="2" strokeLinecap="round" fill="none" />
          <path d="M 158 96 Q 160 99 164 96" stroke="#0F172A" strokeWidth="2" strokeLinecap="round" fill="none" />

          {/* Left Arm holding laptop */}
          <path d="M 115 150 Q 100 185 125 210" stroke="#0F172A" strokeWidth="16" strokeLinecap="round" fill="none" />
          {/* Right Arm working on laptop */}
          <path d="M 205 150 Q 220 185 195 210" stroke="#0F172A" strokeWidth="16" strokeLinecap="round" fill="none" />

          {/* LAPTOP (Silver/Slate with Screen Glow & Logo) */}
          {/* Laptop Base Keyboard Surface */}
          <polygon points="115,225 205,225 220,240 100,240" fill="#CBD5E1" stroke="#94A3B8" strokeWidth="1.5" />
          {/* Laptop Trackpad */}
          <rect x="150" y="230" width="20" height="7" rx="1" fill="#94A3B8" />

          {/* Laptop Screen Lid */}
          <rect x="110" y="175" width="100" height="52" rx="5" fill="#E2E8F0" stroke="#64748B" strokeWidth="2" />
          {/* Laptop Screen Inner Display Glow */}
          <rect x="114" y="179" width="92" height="44" rx="3" fill="#020B2D" />
          
          {/* SOLAHANA Financial Dashboard Screen Graphic */}
          <line x1="120" y1="190" x2="160" y2="190" stroke="#C8A24A" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="120" y1="198" x2="145" y2="198" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" />
          
          {/* Mini Portfolio Growth Chart on Screen */}
          <path d="M 165 215 L 175 205 L 185 210 L 198 192" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <circle cx="198" cy="192" r="2.5" fill="#34D399" />

          {/* Center Brand Logo Circle on Back Lid */}
          <circle cx="160" cy="201" r="5" fill="#C8A24A" opacity="0.9" />

          {/* Hands Typing on Keyboard */}
          <circle cx="132" cy="225" r="5" fill="#FDBA74" />
          <circle cx="188" cy="225" r="5" fill="#FDBA74" />
        </svg>
      </motion.div>

    </div>
  );
}
