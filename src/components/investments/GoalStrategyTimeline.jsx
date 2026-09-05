import React from 'react';
import { motion } from 'framer-motion';
import { Compass, ShieldAlert, Home, GraduationCap, ShieldCheck, TrendingUp } from 'lucide-react';

export default function GoalStrategyTimeline() {
  const horizons = [
    {
      range: '0–3 Years',
      title: 'Emergency & Buffer',
      goal: 'Emergency Shield & Liquidity',
      mix: '100% Liquid Debt & FDs',
      description: 'Capital preservation and instant access. Zero equity volatility risk.',
      icon: ShieldAlert,
      tag: 'Short Horizon'
    },
    {
      range: '3–5 Years',
      title: 'Home Down Payment',
      goal: 'Property Down-Payment Fund',
      mix: '70% Debt / 30% Equity Hybrid',
      description: 'Conservative growth with capital protection as target deadline approaches.',
      icon: Home,
      tag: 'Medium-Short'
    },
    {
      range: '5–10 Years',
      title: 'Child Education',
      goal: 'University & Tuition Fund',
      mix: '60% Equity / 30% Debt / 10% Gold',
      description: 'Balanced inflation-indexed growth to match tuition hyper-inflation.',
      icon: GraduationCap,
      tag: 'Medium Horizon'
    },
    {
      range: '10–20 Years',
      title: 'Retirement Planning',
      goal: 'FIRE Financial Independence',
      mix: '75% Equity / 15% Debt / 10% Gold',
      description: 'Aggressive compounding with automated step-up monthly SIPs.',
      icon: ShieldCheck,
      tag: 'Long Horizon'
    },
    {
      range: '20+ Years',
      title: 'Wealth Creation',
      goal: 'Generational Family Estate',
      mix: '85% Diversified Equity / 15% Global',
      description: 'Maximum compounding potential to build multi-generational legacy.',
      icon: TrendingUp,
      tag: 'Decadal Growth'
    }
  ];

  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-[#071C48]/30 border-y border-[#C8A24A]/15">
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#C8A24A]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#071C48] border border-[#C8A24A]/30 text-[#E8C878] text-xs font-semibold uppercase tracking-widest font-sora">
            <Compass className="w-3.5 h-3.5 text-[#C8A24A]" />
            <span>TIME HORIZON ENGINE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-[#F8F7F3] tracking-tight">
            Choose Investments Based On Your Timeline.
          </h2>

          <p className="text-base sm:text-lg text-[#BAC6DA] font-inter">
            Your investment asset mix should shift dynamically depending on how soon you need the funds.
          </p>
        </div>

        {/* 5-Block Horizontal Timeline */}
        <div className="relative">
          
          {/* Horizontal Golden Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute left-12 right-12 top-12 h-[2px] bg-gradient-to-r from-[#E8C878]/30 via-[#C8A24A] to-[#B8862B]/30 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative z-10">
            {horizons.map((item, idx) => {
              const IconComp = item.icon;

              return (
                <motion.div
                  key={item.range}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.12 }}
                  whileHover={{ scale: 1.03, y: -6 }}
                  className="p-6 rounded-3xl bg-[#020B2D]/95 border border-[#C8A24A]/30 hover:border-[#E8C878]/70 transition-all duration-300 shadow-[0_15px_40px_rgba(2,11,45,0.8)] backdrop-blur-xl text-left flex flex-col justify-between group cursor-pointer"
                >
                  <div className="space-y-4">
                    {/* Circle Node Icon */}
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#E8C878] to-[#B8862B] p-[1px] shadow-[0_0_20px_rgba(200,162,74,0.4)] mx-auto lg:mx-0">
                      <div className="w-full h-full bg-[#020B2D] rounded-full flex items-center justify-center text-[#E8C878] font-sora font-bold text-sm group-hover:bg-[#C8A24A] group-hover:text-[#020B2D] transition-colors">
                        <IconComp className="w-6 h-6" />
                      </div>
                    </div>

                    <div className="text-center lg:text-left space-y-1">
                      <span className="text-xs font-bold font-sora text-[#E8C878] uppercase px-2.5 py-0.5 rounded bg-[#071C48] border border-[#C8A24A]/20">
                        {item.range}
                      </span>
                      <h3 className="text-lg font-serif-luxury font-bold text-[#F8F7F3] pt-2 group-hover:text-[#E8C878] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs font-semibold text-[#E8C878]">
                        {item.goal}
                      </p>
                    </div>

                    <div className="p-2.5 rounded-xl bg-[#071C48]/60 border border-[#C8A24A]/15 text-[11px] text-[#F8F7F3] font-sora">
                      Mix: {item.mix}
                    </div>

                    <p className="text-xs text-[#BAC6DA] leading-relaxed font-inter text-center lg:text-left">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-3 border-t border-[#C8A24A]/15 text-center lg:text-left text-[11px] text-[#BAC6DA] font-sora">
                    Horizon: {item.tag}
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
