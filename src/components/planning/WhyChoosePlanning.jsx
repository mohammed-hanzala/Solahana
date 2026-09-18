import React from 'react';
import { motion } from 'framer-motion';
import { UserCheck, ShieldCheck, Compass, Award, Sparkles } from 'lucide-react';

export default function WhyChoosePlanning() {
  const features = [
    {
      title: 'Personalized Financial Planning',
      desc: 'Every recommendation is 100% tailored to your family’s unique income, liabilities, and goals.',
      icon: UserCheck,
      badge: 'Tailored Strategy'
    },
    {
      title: 'Transparent Planning Process',
      desc: 'Zero hidden distributor commissions, clear flat fee structure, and complete transparency.',
      icon: ShieldCheck,
      badge: 'Zero Commission'
    },
    {
      title: 'Goal-Based Wealth Strategy',
      desc: 'Multi-asset portfolios mathematically mapped to your timeline and inflation targets.',
      icon: Compass,
      badge: 'Mathematical Precision'
    },
    {
      title: 'One Complete Platform',
      desc: 'All your financial goals, risk protection, tax planning, and investments under one roof.',
      icon: Award,
      badge: 'Unified Wealth Desk'
    }
  ];

  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-[#FAF8F5] border-b border-[#E7D7B5]">
      {/* Soft Ambient Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#C89A4B]/6 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#C89B3C]/10 border border-[#E7D7B5] text-[#C89B3C] text-xs font-semibold uppercase tracking-widest font-sora">
            <Sparkles className="w-3.5 h-3.5" />
            <span>SOLAHANA ADVANTAGE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-[#1A1A1A] leading-tight">
            Why Choose SOLAHANA
          </h2>
          <p className="text-base text-[#555555] font-inter max-w-2xl mx-auto">
            Fiduciary integrity, institutional discipline, and complete clarity for long-term financial peace of mind.
          </p>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {features.map((feat, idx) => {
            const IconComp = feat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                className="p-7 sm:p-8 rounded-3xl bg-white border border-[#E7D7B5] hover:border-[#C89B3C] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group h-full"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-[#C89B3C]/10 text-[#C89B3C] group-hover:bg-[#C89B3C] group-hover:text-white transition-colors flex items-center justify-center font-bold shadow-sm">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-sora font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#FAF8F5] text-[#9A7326] border border-[#E7D7B5]">
                      {feat.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-serif-luxury font-bold text-[#0F172A] group-hover:text-[#C89B3C] transition-colors mb-2">
                    {feat.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#555555] font-inter leading-relaxed line-clamp-2">
                    {feat.desc}
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
