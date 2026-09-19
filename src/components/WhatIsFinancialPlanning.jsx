import React from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  Home, 
  GraduationCap, 
  ShieldCheck, 
  Target, 
  TrendingUp, 
  Eye,
  Compass,
  Layers,
  ShieldAlert,
  Calculator,
  RefreshCw
} from 'lucide-react';

export default function WhatIsFinancialPlanning() {
  const journeyMilestones = [
    { name: 'Emergency Fund', desc: '6 Months Shield', icon: ShieldAlert, pos: 'top-[6%] left-[8%]' },
    { name: 'Dream Home', desc: 'Down Payment Fund', icon: Home, pos: 'top-[23%] right-[8%]' },
    { name: 'Child Education', desc: 'Higher Studies Fund', icon: GraduationCap, pos: 'top-[40%] left-[8%]' },
    { name: 'Family Protection', desc: 'Term & Health Cover', icon: ShieldCheck, pos: 'top-[57%] right-[8%]' },
    { name: 'Wealth Creation', desc: 'Disciplined SIPs', icon: TrendingUp, pos: 'top-[74%] left-[8%]' },
    { name: 'Retirement FIRE', desc: 'Target ₹10 Cr Corpus', icon: Target, pos: 'top-[90%] right-[8%]' },
  ];

  const planningSteps = [
    {
      step: '01',
      title: 'Understand Your Money',
      desc: 'Gain 100% clarity over your cashflow, fixed commitments, existing assets, and monthly surplus.',
      icon: Eye,
    },
    {
      step: '02',
      title: 'Define Your Goals',
      desc: 'Set concrete monetary targets and target dates for retirement, education, home purchase & travel.',
      icon: Compass,
    },
    {
      step: '03',
      title: 'Build a Financial Strategy',
      desc: 'Structure a custom multi-asset asset allocation aligned with your timeline and risk profile.',
      icon: Layers,
    },
    {
      step: '04',
      title: 'Protect What Matters',
      desc: 'Ring-fence your family against uncertainties with 6-12 months emergency liquid reserves & cover.',
      icon: ShieldCheck,
    },
    {
      step: '05',
      title: 'Save Taxes Thoughtfully',
      desc: 'Legally minimize tax drag across Section 80C, 80D, NPS, and automated LTCG harvesting.',
      icon: Calculator,
    },
    {
      step: '06',
      title: 'Review & Grow Every Year',
      desc: 'Rebalance and adjust your plan as your salary increases, career evolves, or family expands.',
      icon: RefreshCw,
    },
  ];

  return (
    <section className="relative z-10 py-8 sm:py-10 lg:py-12 bg-white border-t border-[#C89A4B]/20 overflow-hidden">
      
      {/* Background Soft Glows */}
      <div className="absolute top-1/3 left-10 w-[600px] h-[600px] bg-[#C89A4B]/8 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Heading */}
        <div className="text-center space-y-3 sm:space-y-4 max-w-3xl mx-auto mb-5 sm:mb-6 lg:mb-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full gold-badge text-xs font-semibold text-[#9A7326] border border-[#C89A4B]/35 shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#C89A4B] animate-pulse" />
            <span className="font-sora tracking-wide uppercase text-[11px]">FINANCIAL PLANNING</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-[#0F172A] tracking-tight leading-[1.2] mb-4"
          >
            A Financial Plan Is More Than Investing.{' '}
            <br className="hidden sm:inline" />
            It’s a{' '}
            <span className="gold-gradient-text italic font-serif-luxury">
              roadmap
            </span>{' '}
            for every milestone in your life.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-[#475569] font-inter leading-relaxed max-w-2xl mx-auto line-clamp-2"
          >
            Organize income, savings, investments, and risk protection into one unified strategy evolving with your life.
          </motion.p>
        </div>

        {/* TWO-COLUMN LAYOUT WITH EQUAL HEIGHT STRETCH */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* LEFT SIDE: LIFE JOURNEY MAP (MATCHES RIGHT SIDE STEPS HEIGHT) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative h-full min-h-[600px] sm:min-h-[650px] lg:min-h-[670px] rounded-3xl p-6 bg-white border border-[#C89A4B]/30 backdrop-blur-xl shadow-lg flex flex-col justify-between overflow-hidden"
          >
            {/* Smooth Continuous Curved Dashed Trace Line Connecting All 6 Milestones Perfectly */}
            <svg className="absolute inset-0 w-full h-full fill-none pointer-events-none" viewBox="0 0 500 620">
              <path 
                d="M 130,65 C 290,65 210,171 370,171 C 530,171 -30,276 130,276 C 290,276 210,381 370,381 C 530,381 -30,486 130,486 C 290,486 210,586 370,586" 
                stroke="#C89A4B"
                strokeWidth="2.5" 
                strokeDasharray="6 6" 
                strokeLinecap="round"
                opacity="0.65"
              />
              {/* Gold Milestone Center Anchor Nodes */}
              {[
                { x: 130, y: 65 },
                { x: 370, y: 171 },
                { x: 130, y: 276 },
                { x: 370, y: 381 },
                { x: 130, y: 486 },
                { x: 370, y: 586 },
              ].map((pt, i) => (
                <circle key={i} cx={pt.x} cy={pt.y} r="4" fill="#C89A4B" stroke="#FFFFFF" strokeWidth="1.5" />
              ))}
            </svg>

            {/* Title Badge */}
            <div className="relative z-10 flex items-center justify-between">
              <div className="text-xs font-serif-luxury font-bold text-[#0F172A] uppercase tracking-wider flex items-center gap-2">
                <Compass className="w-4 h-4 text-[#C89A4B]" />
                SOLAHANA Life Milestone Map
              </div>
              <span className="px-2.5 py-0.5 rounded-full bg-[#C89A4B]/15 text-[#9A7326] font-sora font-semibold text-[10px] border border-[#C89A4B]/30">
                Integrated Strategy
              </span>
            </div>

            {/* Interactive Milestone Circular Badges */}
            <div className="relative z-10 w-full h-full my-4">
              {journeyMilestones.map((m, idx) => {
                const IconComponent = m.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.12 }}
                    whileHover={{ scale: 1.08 }}
                    className={`absolute ${m.pos} p-3 rounded-2xl bg-white border border-[#C89A4B]/35 shadow-md flex items-center space-x-3 cursor-pointer group transition-all duration-300`}
                  >
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#E5C158] to-[#C89A4B] text-white flex items-center justify-center font-bold shrink-0 shadow-sm group-hover:rotate-12 transition-transform">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-[#0F172A] group-hover:text-[#C89A4B] transition-colors whitespace-nowrap">
                        {m.name}
                      </div>
                      <div className="text-[10px] text-[#64748B] font-num whitespace-nowrap">
                        {m.desc}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Footer */}
            <div className="relative z-10 pt-3 border-t border-[#C89A4B]/20 text-center text-xs text-[#64748B] font-sora">
              One unified financial plan evolving through every life stage.
            </div>
          </motion.div>

          {/* RIGHT SIDE: SIX STACKED PLANNING CARDS */}
          <div className="lg:col-span-6 space-y-4">
            {planningSteps.map((step, idx) => {
              const IconComponent = step.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ x: 6 }}
                  className="group p-4 sm:p-5 rounded-2xl bg-white hover:bg-white border border-[#C89A4B]/20 hover:border-[#C89A4B] backdrop-blur-xl transition-all duration-300 flex items-start space-x-4 shadow-sm hover:shadow-md"
                >
                  <div className="w-11 h-11 rounded-2xl bg-[#C89A4B]/10 border border-[#C89A4B]/30 text-[#C89A4B] group-hover:bg-[#C89A4B] group-hover:text-white transition-colors duration-300 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <IconComponent className="w-5 h-5" />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-base font-serif-luxury font-bold text-[#0F172A] group-hover:text-[#C89A4B] transition-colors">
                        {step.title}
                      </h3>
                      <span className="text-xs font-num font-bold text-[#C89A4B]">
                        STEP {step.step}
                      </span>
                    </div>

                    <p className="text-xs text-[#475569] font-inter leading-relaxed mt-1">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>

    </section>
  );
}
