import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Target, Sparkles, TrendingUp } from 'lucide-react';

export default function WhyPlanningMatters() {
  const points = [
    {
      title: 'Structured Goal Alignment',
      desc: 'Replace haphazard investing with precise timeline-based asset allocation matched to your family milestones.',
      icon: Target,
    },
    {
      title: 'Risk Mitigated Portfolios',
      desc: 'Institutional-grade diversification across debt, direct equities, and global assets protects capital during downturns.',
      icon: ShieldCheck,
    },
    {
      title: 'Accelerated Wealth Compounding',
      desc: 'Proactive tax harvesting and fee-optimized direct funds maximize net returns year after year.',
      icon: TrendingUp,
    },
  ];

  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-[#FCFAF6] border-y border-[#E7D7B5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#C89B3C]/10 border border-[#E7D7B5] text-[#C89B3C] text-xs font-semibold uppercase tracking-widest font-sora">
              <Sparkles className="w-3.5 h-3.5" />
              <span>ESSENTIAL PLANNING</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif-luxury font-bold text-[#1A1A1A] leading-tight">
              Why Professional Financial Planning Matters
            </h2>
            <p className="text-base text-[#555555] font-inter leading-relaxed">
              Without a cohesive wealth roadmap, high-earning households often suffer from inflation leakage, unoptimized taxes, and fragmented investments.
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
