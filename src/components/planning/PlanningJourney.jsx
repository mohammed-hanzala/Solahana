import React from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  ShieldAlert, 
  GraduationCap, 
  Home, 
  ShieldCheck, 
  TrendingUp, 
  Calculator, 
  Target, 
  Scroll,
  Compass
} from 'lucide-react';

export default function PlanningJourney() {
  const journeyMilestones = [
    { name: 'Emergency Fund', desc: '6 Months Shield', icon: ShieldAlert, pos: 'top-[3%] left-[4%]' },
    { name: 'Child Education', desc: 'Higher Studies Fund', icon: GraduationCap, pos: 'top-[15%] right-[4%]' },
    { name: 'Dream Home', desc: 'Down Payment Fund', icon: Home, pos: 'top-[27%] left-[4%]' },
    { name: 'Family Protection', desc: 'Term & Health Cover', icon: ShieldCheck, pos: 'top-[39%] right-[4%]' },
    { name: 'Wealth Creation', desc: 'Disciplined SIPs', icon: TrendingUp, pos: 'top-[51%] left-[4%]' },
    { name: 'Tax Planning', desc: '80C, 80D & NPS', icon: Calculator, pos: 'top-[63%] right-[4%]' },
    { name: 'Retirement Planning', desc: 'FIRE Freedom Corpus', icon: Target, pos: 'top-[75%] left-[4%]' },
    { name: 'Estate Planning', desc: 'Wills & Trust Legacy', icon: Scroll, pos: 'top-[87%] right-[4%]' },
  ];

  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-[#FAF8F5] border-y border-[#E7D7B5]">
      {/* Background Soft Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#C89A4B]/8 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center space-y-3 max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#C89B3C]/10 border border-[#E7D7B5] text-[#C89B3C] text-xs font-semibold uppercase tracking-widest font-sora">
            <Compass className="w-3.5 h-3.5" />
            <span>PLANNING ROADMAP</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-[#1A1A1A] leading-tight">
            Your Financial Planning Journey
          </h2>
          <p className="text-base text-[#555555] font-inter max-w-2xl mx-auto">
            One continuous fiduciary journey connecting every life milestone into one structured financial plan.
          </p>
        </div>

        {/* SINGLE CONNECTED GOLD ROADMAP CONTAINER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative h-[680px] sm:h-[760px] max-w-4xl mx-auto rounded-3xl p-6 sm:p-8 bg-white border border-[#C89A4B]/30 backdrop-blur-xl shadow-xl flex flex-col justify-between overflow-hidden"
        >
          {/* Smooth Continuous S-Curve Connector Line */}
          <svg className="absolute inset-0 w-full h-full fill-none pointer-events-none" viewBox="0 0 500 700">
            <defs>
              <linearGradient id="planningPathGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#E5C158" />
                <stop offset="50%" stopColor="#C89A4B" />
                <stop offset="100%" stopColor="#9A7326" />
              </linearGradient>
            </defs>

            {/* Soft Ambient Glow Line */}
            <path
              d="M 115,45 C 280,45 220,129 385,129 C 550,129 -50,213 115,213 C 280,213 220,297 385,297 C 550,297 -50,381 115,381 C 280,381 220,465 385,465 C 550,465 -50,549 115,549 C 280,549 220,633 385,633"
              stroke="#C89A4B"
              strokeWidth="7"
              opacity="0.15"
              strokeLinecap="round"
            />

            {/* Main Metallic Gold Dashed Track Line */}
            <path
              d="M 115,45 C 280,45 220,129 385,129 C 550,129 -50,213 115,213 C 280,213 220,297 385,297 C 550,297 -50,381 115,381 C 280,381 220,465 385,465 C 550,465 -50,549 115,549 C 280,549 220,633 385,633"
              stroke="url(#planningPathGrad)"
              strokeWidth="2.5"
              strokeDasharray="6 6"
              strokeLinecap="round"
            />

            {/* Gold Milestone Center Nodes */}
            {[
              { x: 115, y: 45 },
              { x: 385, y: 129 },
              { x: 115, y: 213 },
              { x: 385, y: 297 },
              { x: 115, y: 381 },
              { x: 385, y: 465 },
              { x: 115, y: 549 },
              { x: 385, y: 633 },
            ].map((pt, i) => (
              <g key={i}>
                <circle cx={pt.x} cy={pt.y} r="8" fill="#C89A4B" opacity="0.25" />
                <circle cx={pt.x} cy={pt.y} r="4.5" fill="#C89A4B" stroke="#FFFFFF" strokeWidth="2" />
              </g>
            ))}
          </svg>

          {/* Header Title Badge */}
          <div className="relative z-10 flex items-center justify-between">
            <div className="text-xs font-serif-luxury font-bold text-[#0F172A] uppercase tracking-wider flex items-center gap-2">
              <Compass className="w-4 h-4 text-[#C89A4B]" />
              SOLAHANA Life Milestone Map
            </div>
            <span className="px-3 py-1 rounded-full bg-[#C89A4B]/15 text-[#9A7326] font-sora font-semibold text-[10px] border border-[#C89A4B]/30 uppercase tracking-wider">
              Integrated Fiduciary Journey
            </span>
          </div>

          {/* Interactive Milestone Cards */}
          <div className="relative z-10 w-full h-full my-2">
            {journeyMilestones.map((m, idx) => {
              const IconComponent = m.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  whileHover={{ scale: 1.05 }}
                  className={`absolute ${m.pos} w-[165px] sm:w-[210px] p-2.5 sm:p-3 rounded-2xl bg-white/95 border border-[#C89A4B]/35 shadow-md hover:shadow-xl hover:border-[#C89A4B] backdrop-blur-md flex items-center space-x-2.5 sm:space-x-3 cursor-pointer group transition-all duration-300`}
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-[#E5C158] via-[#C89A4B] to-[#9A7326] text-white flex items-center justify-center font-bold shrink-0 shadow-sm group-hover:rotate-12 transition-transform">
                    <IconComponent className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div className="overflow-hidden text-left">
                    <div className="text-xs sm:text-[13px] font-semibold text-[#0F172A] group-hover:text-[#C89A4B] transition-colors truncate">
                      {m.name}
                    </div>
                    <div className="text-[10px] sm:text-[11px] text-[#64748B] font-num truncate">
                      {m.desc}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Footer */}
          <div className="relative z-10 pt-3 border-t border-[#C89A4B]/20 text-center text-xs text-[#64748B] font-sora">
            One continuous financial plan evolving through every life stage.
          </div>
        </motion.div>

      </div>
    </section>
  );
}
