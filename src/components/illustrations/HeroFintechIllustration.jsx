import React from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Coins, 
  Umbrella, 
  Heart, 
  FileText, 
  Building2, 
  HeartHandshake 
} from 'lucide-react';

export default function HeroFintechIllustration({ onOpenSearch }) {
  // Constant Orbit Radius (235px) - Exact match for Retirement & all 7 orbital nodes
  const ORBIT_RADIUS = 235;

  // 7 Floating Goal Bubbles placed at exact radius 235px on the gold dashed orbit line
  const circularNodes = [
    { id: 'wealth', title: 'Wealth Creation', icon: Coins, angle: -90, labelPos: 'above' },
    { id: 'retirement', title: 'Retirement', icon: Umbrella, angle: -40, labelPos: 'above' },
    { id: 'insurance', title: 'Health Insurance', icon: Heart, angle: 15, labelPos: 'below' },
    { id: 'tax', title: 'Tax Planning', icon: FileText, angle: 65, labelPos: 'below' },
    { id: 'property', title: 'Property', icon: Building2, angle: 115, labelPos: 'below' },
    { id: 'marriage', title: 'Marriage', icon: HeartHandshake, angle: 165, labelPos: 'below' },
    { id: 'education', title: 'Education', icon: GraduationCap, angle: -140, labelPos: 'above' },
  ];

  return (
    <div className="relative w-full max-w-[580px] aspect-square flex items-center justify-center select-none">
      
      {/* ------------------------------------------------------------- */}
      {/* 1. AMBIENT GLOW & GOLD DASHED ORBIT PATH                      */}
      {/* ------------------------------------------------------------- */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        {/* Soft Radial Gold Backlight Glow */}
        <div className="w-[460px] h-[460px] rounded-full bg-gradient-to-tr from-[#E5C158]/20 via-[#C89B3C]/25 to-transparent blur-[100px] animate-pulse-glow" />
      </div>

      {/* SVG Orbit Line passing through exact center of every badge (r = 235px) */}
      <svg 
        className="absolute inset-0 w-full h-full pointer-events-none z-10 overflow-visible" 
        viewBox="0 0 580 580"
      >
        {/* Outer Glow Halo Ring */}
        <circle 
          cx="290" 
          cy="290" 
          r={ORBIT_RADIUS} 
          stroke="#C89B3C" 
          strokeWidth="6" 
          strokeOpacity="0.2" 
          fill="none" 
        />

        {/* Primary Gold Dashed Orbit Line */}
        <circle 
          cx="290" 
          cy="290" 
          r={ORBIT_RADIUS} 
          stroke="#C89B3C" 
          strokeWidth="2.5" 
          strokeDasharray="8 6" 
          strokeOpacity="0.75"
          fill="none" 
        />
      </svg>

      {/* ------------------------------------------------------------- */}
      {/* 2. CENTRAL GOLDEN PORTAL RING & REALISTIC 3D GOLD ₹ COIN      */}
      {/* ------------------------------------------------------------- */}
      <div className="absolute z-10 w-[300px] h-[300px] sm:w-[320px] sm:h-[320px] rounded-full p-[6px] bg-gradient-to-tr from-[#9A7326] via-[#E5C158] to-[#C89B3C] shadow-[0_0_60px_rgba(200,154,75,0.4)] flex items-center justify-center">
        <div className="w-full h-full rounded-full bg-gradient-to-b from-[#FFFDF9] via-[#FAF6EE] to-[#F3E5C8] border-4 border-white flex flex-col items-center justify-center relative overflow-hidden shadow-inner">
          
          {/* Light Rays & Golden Horizon Background */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-[#FDF7EA]/80 to-[#F5E5C4]/90" />

          {/* Golden Rays Texture */}
          <div className="absolute inset-0 opacity-20 bg-[repeating-linear-gradient(45deg,#C89B3C_0,#C89B3C_10px,transparent_0,transparent_20px)] pointer-events-none" />

          {/* Centerpiece REALISTIC 3D Metallic Gold ₹ Coin */}
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 w-28 h-28 sm:w-32 sm:h-32 rounded-full p-[5px] bg-gradient-to-br from-[#FFEBAA] via-[#C89B3C] to-[#593E0B] shadow-[0_20px_45px_rgba(154,115,38,0.5)] flex items-center justify-center group cursor-pointer"
            onClick={onOpenSearch}
          >
            {/* Outer Coin Edge Texture */}
            <div className="w-full h-full rounded-full bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#FFF5D6] via-[#D4AF37] to-[#805B16] p-[4px] shadow-lg flex items-center justify-center relative overflow-hidden">
              
              {/* Micro Ridges Edge Effect */}
              <div className="absolute inset-0 opacity-25 bg-[repeating-conic-gradient(#FFE8A3_0_3deg,#805B16_3deg_6deg)]" />

              {/* Inner Coin Surface (Embossed Center) */}
              <div className="relative w-full h-full rounded-full bg-gradient-to-br from-[#FFF8E7] via-[#E6C875] to-[#B38728] border-2 border-[#FFE8A3] shadow-[inset_0_4px_10px_rgba(255,255,255,0.8),_inset_0_-4px_10px_rgba(89,62,11,0.6)] flex flex-col items-center justify-center overflow-hidden">
                
                {/* Specular Light Reflection */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/45 to-transparent opacity-70 transform -rotate-45" />
                
                {/* Double Inner Ring Line */}
                <div className="absolute inset-1.5 rounded-full border border-[#9A7326]/40 pointer-events-none" />

                {/* 3D Embossed Rupee Symbol ₹ */}
                <span className="relative z-10 font-serif-luxury font-black text-5xl sm:text-6xl text-transparent bg-clip-text bg-gradient-to-br from-[#6E4F0F] via-[#9A7326] to-[#402C06] drop-shadow-[0_2px_1px_rgba(255,245,214,0.9)]">
                  ₹
                </span>
              </div>
            </div>
          </motion.div>
          
          {/* Subtle Label Below Coin */}
          <span className="relative z-10 mt-2 text-[10px] font-extrabold tracking-widest text-[#9A7326] uppercase font-inter">
            Fiduciary Ecosystem
          </span>
        </div>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* 3. SCALED-DOWN WALKING HUMAN ILLUSTRATION (PROPER PROPORTION) */}
      {/* ------------------------------------------------------------- */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute z-20 bottom-1 w-28 h-44 flex flex-col items-center justify-end pointer-events-none"
      >
        <svg className="w-full h-full drop-shadow-xl" viewBox="0 0 120 200" fill="none">
          {/* Ground Shadow */}
          <ellipse cx="60" cy="190" rx="35" ry="6" fill="#0F172A" opacity="0.2" />

          {/* Shoes (White Sneakers) */}
          <ellipse cx="48" cy="187" rx="8" ry="4" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1.5" />
          <ellipse cx="72" cy="185" rx="8" ry="4" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1.5" />

          {/* Trousers (Beige/Tan Khaki Trousers - Walking Motion) */}
          <path d="M 42 110 L 40 186 L 54 186 L 57 115 Z" fill="#D4B688" />
          <path d="M 63 115 L 66 184 L 80 184 L 78 110 Z" fill="#C5A574" />
          
          {/* Belt */}
          <rect x="46" y="106" width="28" height="5" rx="1" fill="#334155" />
          <rect x="57" y="106" width="6" height="5" fill="#C89B3C" />

          {/* Shirt / Torso (Crisp White Fitted Shirt Seen From Behind) */}
          <path d="M 36 55 C 36 48, 46 45, 60 45 C 74 45, 84 48, 84 55 L 75 108 L 45 108 Z" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1" />
          {/* Back Seam / Folds */}
          <path d="M 60 48 L 60 105" stroke="#F1F5F9" strokeWidth="1.5" />

          {/* Arms (Casual Walking Posture) */}
          <path d="M 38 55 Q 30 80 34 105" stroke="#FFFFFF" strokeWidth="11" strokeLinecap="round" />
          <path d="M 82 55 Q 90 80 86 105" stroke="#FFFFFF" strokeWidth="11" strokeLinecap="round" />

          {/* Hands */}
          <circle cx="34" cy="107" r="4" fill="#FDBA74" />
          <circle cx="86" cy="107" r="4" fill="#FDBA74" />

          {/* Neck */}
          <rect x="55" y="36" width="10" height="10" rx="2" fill="#FDBA74" />

          {/* Head & Hair (Dark Neat Hairstyle Seen From Behind) */}
          <circle cx="60" cy="30" r="13" fill="#1E293B" />
          <path d="M 49 28 C 49 16, 71 16, 71 28 C 71 36, 49 36, 49 28 Z" fill="#0F172A" />
        </svg>
      </motion.div>

      {/* ------------------------------------------------------------- */}
      {/* 4. 7 GOAL BUBBLES ALL MATCHING RETIREMENT RADIUS (235px)     */}
      {/* ------------------------------------------------------------- */}
      {circularNodes.map((node, index) => {
        const Icon = node.icon;
        const rad = (node.angle * Math.PI) / 180;
        const x = Math.cos(rad) * ORBIT_RADIUS;
        const y = Math.sin(rad) * ORBIT_RADIUS;
        const isLabelAbove = node.labelPos === 'above';

        return (
          <div
            key={node.id}
            className="absolute z-30 -translate-x-1/2 -translate-y-1/2 pointer-events-auto"
            style={{
              left: `calc(50% + ${x}px)`,
              top: `calc(50% + ${y}px)`,
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.06 }}
              whileHover={{ scale: 1.15 }}
              onClick={onOpenSearch}
              className="relative cursor-pointer group flex flex-col items-center justify-center"
            >
              {/* White & Gold Circular Goal Bubble */}
              <div className="w-14 h-14 rounded-full bg-white border-2 border-[#C89B3C] shadow-[0_10px_25px_rgba(200,154,75,0.25)] group-hover:border-[#9A7326] group-hover:shadow-[0_12px_30px_rgba(200,154,75,0.45)] transition-all flex items-center justify-center shrink-0">
                <Icon className="w-6 h-6 text-[#9A7326] group-hover:text-[#C89B3C] transition-colors" />
              </div>

              {/* Label Tooltip Pill */}
              <span 
                className={`absolute ${
                  isLabelAbove ? 'bottom-full mb-2' : 'top-full mt-2'
                } text-[11px] font-semibold text-[#0F172A] bg-white/95 px-3 py-0.5 rounded-full border border-[#C89B3C]/30 shadow-md opacity-90 group-hover:opacity-100 transition-opacity whitespace-nowrap text-center pointer-events-none`}
              >
                {node.title}
              </span>
            </motion.div>
          </div>
        );
      })}

    </div>
  );
}
