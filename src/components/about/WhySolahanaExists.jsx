import React from 'react';
import { motion } from 'framer-motion';
import { Compass, CheckCircle2, ShieldAlert, Sparkles, TrendingUp, Target } from 'lucide-react';

export default function WhySolahanaExists() {
  const pillars = [
    {
      title: 'Planning Before Investing',
      subtitle: 'Establish your blueprint before allocating capital.',
      description: 'Buying random mutual funds without a financial roadmap is like building a house without architecture. SOLAHANA designs the blueprint first.',
      icon: Target
    },
    {
      title: 'Goals Before Products',
      subtitle: 'Align instruments to timelines, not sales targets.',
      description: 'We match asset classes (equity, debt, gold, real estate) directly to your short-term and multi-decadal life milestones.',
      icon: Compass
    },
    {
      title: 'Strategy Before Decisions',
      subtitle: 'Execute with mathematical discipline, not emotional reactions.',
      description: 'Markets fluctuate, but a well-constructed plan withstands volatility. We protect you from emotional panic selling and impulsive buys.',
      icon: TrendingUp
    }
  ];

  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column — Visual Transformation Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 relative"
          >
            <div className="p-7 sm:p-8 rounded-3xl bg-white border border-[#C89A4B]/30 shadow-xl text-left space-y-6">
              
              <div className="flex items-center justify-between pb-4 border-b border-[#C89A4B]/20">
                <span className="text-xs font-sora font-bold text-[#9A7326] uppercase tracking-wider">
                  FINANCIAL TRANSFORMATION
                </span>
                <span className="text-[10px] text-[#64748B] px-2.5 py-1 rounded bg-[#FAF8F5] border border-[#C89A4B]/20">
                  THE PARADIGM SHIFT
                </span>
              </div>

              {/* Before: Financial Chaos Block */}
              <div className="p-4 rounded-2xl bg-red-50 border border-red-200 space-y-2 relative">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-red-700 flex items-center gap-1.5 font-sora">
                    <ShieldAlert className="w-4 h-4" />
                    Without SOLAHANA (The Old Way)
                  </span>
                </div>
                <p className="text-xs text-red-800 leading-relaxed font-inter">
                  Ad-hoc FDs, random mutual fund SIPs, unused tax limits, unlinked insurance policies, and anxiety about market dips.
                </p>
              </div>

              {/* Arrow Indicator */}
              <div className="flex items-center justify-center">
                <div className="w-8 h-8 rounded-full bg-[#C89A4B]/15 text-[#C89A4B] flex items-center justify-center font-bold">
                  ↓
                </div>
              </div>

              {/* After: Structured Clarity Block */}
              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 space-y-2 relative">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-emerald-800 flex items-center gap-1.5 font-sora">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    With SOLAHANA (The Fiduciary Way)
                  </span>
                </div>
                <p className="text-xs text-emerald-900 leading-relaxed font-inter">
                  One integrated 360° financial plan. Every rupee assigned to a specific goal, tax optimized, and backed by a SEBI Registered RIA.
                </p>
              </div>

            </div>
          </motion.div>

          {/* Right Column — Three Pillars */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full gold-badge text-[#9A7326] text-xs font-semibold uppercase tracking-widest font-sora">
              <Sparkles className="w-3.5 h-3.5 text-[#C89A4B]" />
              <span>THE THREE PILLARS</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-[#0F172A] tracking-tight">
              Why SOLAHANA Exists
            </h2>

            <p className="text-base sm:text-lg text-[#475569] font-inter leading-relaxed">
              We exist to replace confusion with financial architecture. We guide you through three fundamental principles that transform how you manage wealth.
            </p>

            <div className="space-y-4 pt-2">
              {pillars.map((pillar, idx) => {
                const IconComp = pillar.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="p-5 rounded-2xl bg-white border border-[#C89A4B]/20 hover:border-[#C89A4B] shadow-sm hover:shadow-md transition-all flex items-start space-x-4"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#C89A4B]/10 border border-[#C89A4B]/30 text-[#C89A4B] flex items-center justify-center shrink-0 mt-0.5">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-serif-luxury font-bold text-[#0F172A]">
                        {pillar.title}
                      </h3>
                      <p className="text-xs text-[#9A7326] font-sora font-medium mt-0.5">
                        {pillar.subtitle}
                      </p>
                      <p className="text-xs text-[#475569] font-inter leading-relaxed mt-1">
                        {pillar.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
