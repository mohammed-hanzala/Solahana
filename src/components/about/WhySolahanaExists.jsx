import React from 'react';
import { motion } from 'framer-motion';
import { Compass, CheckCircle2, ArrowRight, ShieldAlert, Sparkles, TrendingUp, Target } from 'lucide-react';

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
    <section className="py-20 md:py-28 relative overflow-hidden bg-[#020B2D]">
      {/* Glow Effects */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#C8A24A]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column — Visual Transformation Illustration */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 relative"
          >
            <div className="p-7 sm:p-8 rounded-3xl bg-gradient-to-b from-[#071C48] to-[#020B2D] border border-[#C8A24A]/30 shadow-[0_20px_50px_rgba(2,11,45,0.9)] backdrop-blur-2xl text-left space-y-6">
              
              <div className="flex items-center justify-between pb-4 border-b border-[#C8A24A]/15">
                <span className="text-xs font-sora font-bold text-[#E8C878] uppercase tracking-wider">
                  FINANCIAL TRANSFORMATION
                </span>
                <span className="text-[10px] text-[#BAC6DA] px-2.5 py-1 rounded bg-[#020B2D] border border-[#C8A24A]/20">
                  THE PARADIGM SHIFT
                </span>
              </div>

              {/* Before: Financial Chaos Block */}
              <div className="p-4 rounded-2xl bg-red-950/20 border border-red-500/30 space-y-2 relative">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-red-400 flex items-center gap-1.5 font-sora">
                    <ShieldAlert className="w-4 h-4" />
                    Without SOLAHANA (The Old Way)
                  </span>
                  <span className="text-[10px] text-red-300 font-mono">HIGH ANXIETY</span>
                </div>
                <p className="text-xs text-[#BAC6DA] leading-relaxed">
                  Random mutual funds, impulse crypto/equity trades, zero tax efficiency, unknown retirement corpus date.
                </p>
              </div>

              {/* Transformation Downward Arrow */}
              <div className="flex justify-center my-2">
                <div className="w-10 h-10 rounded-full bg-gradient-to-b from-[#E8C878] to-[#B8862B] text-[#020B2D] flex items-center justify-center font-bold shadow-[0_0_15px_rgba(200,162,74,0.4)]">
                  <ArrowRight className="w-5 h-5 rotate-90" />
                </div>
              </div>

              {/* After: Structured Solahana Roadmap Block */}
              <div className="p-4 rounded-2xl bg-[#071C48] border border-[#E8C878]/50 space-y-2 relative shadow-[0_0_25px_rgba(200,162,74,0.2)]">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#E8C878] flex items-center gap-1.5 font-sora">
                    <Sparkles className="w-4 h-4 text-[#C8A24A]" />
                    With SOLAHANA (Goal-Based Plan)
                  </span>
                  <span className="text-[10px] text-[#E8C878] font-mono font-bold">100% PEACE OF MIND</span>
                </div>
                <p className="text-xs text-[#F8F7F3] leading-relaxed font-medium">
                  Goal-linked step-up SIPs, annual LTCG tax harvesting, 6-month emergency shield, clear age-45 FIRE timeline.
                </p>
              </div>

              {/* Summary Stats */}
              <div className="pt-4 border-t border-[#C8A24A]/15 grid grid-cols-2 gap-4 text-center">
                <div className="p-2.5 rounded-xl bg-[#020B2D]/80 border border-[#C8A24A]/20">
                  <p className="text-lg font-bold font-sora text-[#E8C878]">₹48,500+</p>
                  <p className="text-[10px] text-[#BAC6DA]">Avg Annual Tax Saved</p>
                </div>
                <div className="p-2.5 rounded-xl bg-[#020B2D]/80 border border-[#C8A24A]/20">
                  <p className="text-lg font-bold font-sora text-[#F8F7F3]">100%</p>
                  <p className="text-[10px] text-[#BAC6DA]">Fiduciary Clarity</p>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Right Column — 3 Information Blocks */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-8 text-left"
          >
            <div className="space-y-3">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#071C48] border border-[#C8A24A]/30 text-[#E8C878] text-xs font-semibold uppercase tracking-widest font-sora">
                <Compass className="w-3.5 h-3.5 text-[#C8A24A]" />
                <span>WHY SOLAHANA EXISTS</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-[#F8F7F3] tracking-tight">
                Structure Over Speculation. <br />
                <span className="text-gradient-gold">Goals Over Trends.</span>
              </h2>
            </div>

            {/* 3 Information Pillars */}
            <div className="space-y-6">
              {pillars.map((item, idx) => {
                const IconComp = item.icon;

                return (
                  <div 
                    key={item.title}
                    className="p-6 rounded-2xl bg-[#071C48]/50 border border-[#C8A24A]/20 hover:border-[#C8A24A]/50 transition-all duration-300 backdrop-blur-xl flex items-start space-x-4 group"
                  >
                    <div className="p-3 rounded-xl bg-[#C8A24A]/10 text-[#E8C878] group-hover:bg-[#C8A24A] group-hover:text-[#020B2D] transition-colors shrink-0 mt-1">
                      <IconComp className="w-6 h-6" />
                    </div>

                    <div className="space-y-1">
                      <h3 className="text-lg font-serif-luxury font-bold text-[#F8F7F3] group-hover:text-[#E8C878] transition-colors flex items-center gap-2">
                        {item.title}
                      </h3>
                      <p className="text-xs font-semibold text-[#E8C878]">
                        {item.subtitle}
                      </p>
                      <p className="text-xs sm:text-sm text-[#BAC6DA] pt-1 leading-relaxed font-inter">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
