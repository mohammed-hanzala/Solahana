import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, TrendingUp, Award, GraduationCap, Calculator } from 'lucide-react';

export default function WhyPlanningMatters() {
  const cards = [
    {
      title: 'Wealth Creation',
      desc: 'Disciplined multi-asset SIP portfolios designed for long-term compounding growth.',
      icon: TrendingUp,
      badge: 'Capital Growth'
    },
    {
      title: 'Retirement Planning',
      desc: 'Inflation-adjusted FIRE target corpus providing complete post-work financial freedom.',
      icon: Award,
      badge: 'FIRE Freedom'
    },
    {
      title: 'Child Education Planning',
      desc: 'Ring-fenced higher education fund for domestic and international university milestones.',
      icon: GraduationCap,
      badge: 'Future Security'
    },
    {
      title: 'Tax Planning',
      desc: 'Optimized Section 80C, 80D, NPS, and automated annual tax-loss harvesting.',
      icon: Calculator,
      badge: 'Tax Optimized'
    }
  ];

  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-[#FCFAF6] border-y border-[#E7D7B5]">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#C89A4B]/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left relative z-10">
        
        {/* Section Heading */}
        <div className="text-center space-y-3 max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#C89B3C]/10 border border-[#E7D7B5] text-[#C89B3C] text-xs font-semibold uppercase tracking-widest font-sora">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ESSENTIAL PLANNING</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-[#1A1A1A] leading-tight">
            Why Financial Planning Matters
          </h2>
          <p className="text-base text-[#555555] font-inter max-w-2xl mx-auto">
            A structured wealth architecture brings clarity, tax efficiency, and peace of mind to every life goal.
          </p>
        </div>

        {/* 4 Premium Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {cards.map((card, idx) => {
            const IconComp = card.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                className="rounded-3xl p-6 sm:p-7 bg-white border border-[#E7D7B5] hover:border-[#C89B3C] shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group h-full"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-[#C89B3C]/10 border border-[#E7D7B5] text-[#C89B3C] group-hover:bg-[#C89B3C] group-hover:text-white transition-colors duration-300 flex items-center justify-center font-bold shadow-sm">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-sora font-semibold px-2.5 py-1 rounded-full bg-[#FAF8F5] text-[#9A7326] border border-[#E7D7B5]">
                      {card.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-serif-luxury font-bold text-[#0F172A] group-hover:text-[#C89B3C] transition-colors mb-2">
                    {card.title}
                  </h3>
                  <p className="text-xs text-[#555555] font-inter leading-relaxed line-clamp-2">
                    {card.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
