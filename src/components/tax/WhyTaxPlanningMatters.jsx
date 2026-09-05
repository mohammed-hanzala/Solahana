import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Calculator, TrendingUp, FolderCheck, Target, RefreshCw, ArrowRight, Calendar } from 'lucide-react';

export default function WhyTaxPlanningMatters() {
  const cards = [
    {
      title: 'Reduce Tax Liability',
      subtitle: 'Legally minimize your annual tax outflow across all income heads.',
      description: 'Systematic utilization of Section 80C, 80D, 80CCD, and Section 24(b) reduces tax drag on your hard-earned salary and business income.',
      icon: Calculator,
      tag: 'Tax Efficiency'
    },
    {
      title: 'Plan Investments Smartly',
      subtitle: 'Align tax-saving investments with actual life goals.',
      description: 'Don’t buy random ELSS or insurance policies last minute. We match ELSS equity SIPs and NPS contributions directly to your target goals.',
      icon: TrendingUp,
      tag: 'Goal-Aligned'
    },
    {
      title: 'Organize Financial Documents',
      subtitle: 'Maintain clean, hassle-free audit readiness throughout the year.',
      description: 'Keep Form 16, interest certificates, capital gain statements, and insurance receipts organized continuously rather than rushing in July.',
      icon: FolderCheck,
      tag: 'Audit Ready'
    },
    {
      title: 'Plan For Future Goals',
      subtitle: 'Integrate capital gains harvesting into your long-term roadmap.',
      description: 'Harvesting up to ₹1 Lakh in long-term capital gains tax-free each year resets cost bases and boosts net compounding returns.',
      icon: Target,
      tag: 'Harvesting'
    },
    {
      title: 'Review Every Financial Year',
      subtitle: 'Evaluate Old vs New Tax Regime for optimal annual selection.',
      description: 'Tax laws evolve. We audit your deductions annually to ensure you switch to whichever tax regime yields maximum post-tax savings.',
      icon: RefreshCw,
      tag: 'Regime Audit'
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
            <span>PROACTIVE TAX STRATEGY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-[#F8F7F3] tracking-tight">
            Tax Planning Begins Before Tax Season.
          </h2>

          <p className="text-base sm:text-lg text-[#BAC6DA] font-inter">
            True tax efficiency requires year-round structure, not frantic March investments.
          </p>
        </div>

        {/* Editorial Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column — Financial Calendar Illustration */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 relative"
          >
            <div className="p-8 rounded-3xl bg-gradient-to-b from-[#071C48] to-[#020B2D] border border-[#C8A24A]/30 shadow-[0_20px_50px_rgba(2,11,45,0.9)] backdrop-blur-2xl text-left space-y-6">
              
              <div className="flex items-center justify-between pb-4 border-b border-[#C8A24A]/15">
                <span className="text-xs font-sora font-bold text-[#E8C878] uppercase tracking-wider flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#C8A24A]" />
                  TAX CALENDAR MILESTONES
                </span>
                <span className="text-[10px] text-[#BAC6DA] px-2.5 py-1 rounded bg-[#020B2D] border border-[#C8A24A]/20">
                  YEAR-ROUND
                </span>
              </div>

              {/* Reactive vs Proactive Comparison */}
              <div className="space-y-4">
                
                {/* Last Minute Rush Box */}
                <div className="p-4 rounded-2xl bg-red-950/20 border border-red-500/30 space-y-1.5">
                  <div className="flex items-center justify-between text-xs font-bold text-red-400 font-sora">
                    <span>March Rush (Reactive)</span>
                    <span>HIGH ANXIETY</span>
                  </div>
                  <p className="text-xs text-[#BAC6DA]">
                    Locking money into lock-in products blindly on March 31, missed LTCG harvesting, non-optimal regime selection.
                  </p>
                </div>

                {/* Arrow */}
                <div className="flex justify-center my-1">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-b from-[#E8C878] to-[#B8862B] text-[#020B2D] flex items-center justify-center font-bold shadow-[0_0_15px_rgba(200,162,74,0.4)]">
                    <ArrowRight className="w-5 h-5 rotate-90" />
                  </div>
                </div>

                {/* SOLAHANA Year-Round Box */}
                <div className="p-4 rounded-2xl bg-[#071C48] border border-[#E8C878]/50 space-y-1.5 shadow-[0_0_20px_rgba(200,162,74,0.2)]">
                  <div className="flex items-center justify-between text-xs font-bold text-[#E8C878] font-sora">
                    <span>SOLAHANA Year-Round Plan</span>
                    <span>₹48,500 SAVED</span>
                  </div>
                  <p className="text-xs text-[#F8F7F3] leading-relaxed font-medium">
                    Automated goal-based ELSS SIPs, Section 80D health shields, quarterly advance tax checks, and annual LTCG loss harvesting.
                  </p>
                </div>

              </div>

              <div className="pt-3 border-t border-[#C8A24A]/15 text-center text-xs text-[#BAC6DA]">
                Result: <span className="text-[#E8C878] font-semibold font-sora">Maximum Post-Tax Returns & Total Peace</span>
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
                        {item.tag}
                      </span>
                    </div>
                    <p className="text-xs font-semibold text-[#E8C878]">
                      {item.subtitle}
                    </p>
                    <p className="text-xs text-[#BAC6DA] leading-relaxed font-inter pt-0.5">
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
