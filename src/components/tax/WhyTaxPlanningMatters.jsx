import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, TrendingUp, Sparkles, Award } from 'lucide-react';

export default function WhyTaxPlanningMatters() {
  const points = [
    {
      title: 'Preserve Your Hard-Earned Capital',
      desc: 'Without proactive planning, high earners lose up to 30% of their investment gains to unoptimized taxes.',
      icon: ShieldCheck,
    },
    {
      title: 'Accelerate Compound Growth',
      desc: 'Every rupee saved in tax remains invested and continues to compound year after year toward your wealth goals.',
      icon: TrendingUp,
    },
    {
      title: 'Full Regulatory Compliance',
      desc: 'Leverage SEBI & Income Tax Act approved deductions legally without stressful last-minute March filings.',
      icon: Award,
    },
  ];

  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-[#FCFAF6] border-y border-[#E7D7B5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#C89B3C]/10 border border-[#E7D7B5] text-[#C89B3C] text-xs font-semibold uppercase tracking-widest font-sora">
              <Sparkles className="w-3.5 h-3.5" />
              <span>THE SOLAHANA EDGE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif-luxury font-bold text-[#1A1A1A] leading-tight">
              Why Tax Planning Matters for Your Wealth
            </h2>
            <p className="text-base text-[#555555] font-inter leading-relaxed">
              Tax planning is not about tax evasion; it is about smart financial architecture. Structuring investments legally ensures maximum net returns after tax.
            </p>
          </div>

          <div className="lg:col-span-7 space-y-4">
            {points.map((pt, idx) => {
              const IconComponent = pt.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="p-6 rounded-2xl bg-white border border-[#E7D7B5] hover:border-[#C89B3C] shadow-sm transition-all duration-300 flex items-start space-x-4 group"
                >
                  <div className="p-3 rounded-xl bg-[#C89B3C]/10 text-[#C89B3C] group-hover:bg-[#C89B3C] group-hover:text-white transition-colors shrink-0 mt-0.5">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-serif-luxury font-bold text-[#1A1A1A] group-hover:text-[#C89B3C] transition-colors">
                      {pt.title}
                    </h3>
                    <p className="text-xs text-[#555555] font-inter mt-1 leading-relaxed">
                      {pt.desc}
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
