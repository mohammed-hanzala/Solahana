import React from 'react';
import { motion } from 'framer-motion';
import { Wallet, PieChart, PiggyBank, TrendingUp, ShieldCheck, Compass, ArrowRight } from 'lucide-react';

export default function WhyPlanningMatters() {
  const cards = [
    {
      title: 'Income Planning',
      description: 'Optimizing fixed salary, business dividends, rental returns, and bonus cash flow allocation.',
      icon: Wallet,
      badge: 'Cash Flow'
    },
    {
      title: 'Expense Planning',
      description: 'Structuring essential living costs, discretionary lifestyle budgets, and mortgage debt servicing.',
      icon: PieChart,
      badge: 'Budgeting'
    },
    {
      title: 'Savings Planning',
      description: 'Automating high-yield emergency reserves (6–12 months) and short-term liquid buffers.',
      icon: PiggyBank,
      badge: 'Liquidity'
    },
    {
      title: 'Investment Planning',
      description: 'Building goal-matched multi-asset portfolios across equity, debt, gold, and fixed income.',
      icon: TrendingUp,
      badge: 'Compounding'
    },
    {
      title: 'Risk Protection',
      description: 'Insulating your family against unforeseen events with term life, health, and asset insurance.',
      icon: ShieldCheck,
      badge: 'Family Shield'
    }
  ];

  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-[#071C48]/30 border-y border-[#C8A24A]/15">
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#C8A24A]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#071C48] border border-[#C8A24A]/30 text-[#E8C878] text-xs font-semibold uppercase tracking-widest font-sora">
            <Compass className="w-3.5 h-3.5 text-[#C8A24A]" />
            <span>THE CLARITY ADVANTAGE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-[#F8F7F3] tracking-tight">
            Financial Planning Creates Clarity Before Decisions.
          </h2>

          <p className="text-base sm:text-lg text-[#BAC6DA] font-inter leading-relaxed">
            Without a master plan, financial choices are reactive. SOLAHANA unifies every facet of your wealth so every rupee moves you toward your life ambitions.
          </p>
        </div>

        {/* Editorial Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column — Visual Transformation Diagram */}
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
                  MONEY MAP TRANSFORMATION
                </span>
                <span className="text-[10px] text-[#BAC6DA] px-2.5 py-1 rounded bg-[#020B2D] border border-[#C8A24A]/20">
                  CLARITY PIPELINE
                </span>
              </div>

              {/* Scattered Finances Box */}
              <div className="p-4 rounded-2xl bg-[#020B2D]/80 border border-red-500/30 space-y-2 text-left">
                <div className="flex items-center justify-between text-xs font-bold text-red-400 font-sora">
                  <span>Scattered Money (No Blueprint)</span>
                  <span className="text-[10px] text-red-300 font-mono">UNSTRUCTURED</span>
                </div>
                <p className="text-xs text-[#BAC6DA] leading-relaxed">
                  Ad-hoc FDs, random mutual fund SIPs, unused tax limits, unlinked insurance policies, and anxiety about market dips.
                </p>
              </div>

              {/* Arrow Indicator */}
              <div className="flex justify-center my-1">
                <div className="w-10 h-10 rounded-full bg-gradient-to-b from-[#E8C878] to-[#B8862B] text-[#020B2D] flex items-center justify-center font-bold shadow-[0_0_15px_rgba(200,162,74,0.4)]">
                  <ArrowRight className="w-5 h-5 rotate-90" />
                </div>
              </div>

              {/* Structured Roadmap Box */}
              <div className="p-4 rounded-2xl bg-[#071C48] border border-[#E8C878]/50 space-y-2 text-left shadow-[0_0_20px_rgba(200,162,74,0.2)]">
                <div className="flex items-center justify-between text-xs font-bold text-[#E8C878] font-sora">
                  <span>SOLAHANA Unified Roadmap</span>
                  <span className="text-[10px] text-[#E8C878] font-mono font-bold">100% ORGANIZED</span>
                </div>
                <p className="text-xs text-[#F8F7F3] leading-relaxed font-medium">
                  5 connected planning areas working in harmony to maximize wealth creation, tax savings, and life goal security.
                </p>
              </div>

              {/* Stats Footer */}
              <div className="pt-3 border-t border-[#C8A24A]/15 text-center text-xs text-[#BAC6DA]">
                Result: <span className="text-[#E8C878] font-semibold font-sora">Zero Confusion • Total Control</span>
              </div>

            </div>
          </motion.div>

          {/* Right Column — 5 Information Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-4 text-left"
          >
            {cards.map((item, index) => {
              const IconComp = item.icon;

              return (
                <motion.div
                  key={item.title}
                  whileHover={{ x: 6 }}
                  className="p-5 rounded-2xl bg-[#020B2D]/90 border border-[#C8A24A]/25 hover:border-[#C8A24A]/60 transition-all duration-300 backdrop-blur-xl flex items-start space-x-4 group"
                >
                  <div className="p-3 rounded-xl bg-[#C8A24A]/10 text-[#E8C878] group-hover:bg-[#C8A24A] group-hover:text-[#020B2D] transition-colors shrink-0 mt-0.5">
                    <IconComp className="w-5 h-5" />
                  </div>

                  <div className="flex-1 space-y-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-base font-serif-luxury font-bold text-[#F8F7F3] group-hover:text-[#E8C878] transition-colors">
                        {item.title}
                      </h3>
                      <span className="text-[10px] font-sora font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-[#071C48] text-[#E8C878] border border-[#C8A24A]/20">
                        {item.badge}
                      </span>
                    </div>

                    <p className="text-xs text-[#BAC6DA] leading-relaxed font-inter">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

        </div>

      </div>
    </section>
  );
}
