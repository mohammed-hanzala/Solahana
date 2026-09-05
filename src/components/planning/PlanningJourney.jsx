import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Search, Target, FileSpreadsheet, Zap, RefreshCw, CheckCircle2 } from 'lucide-react';

export default function PlanningJourney() {
  const steps = [
    {
      num: '01',
      title: 'Understand Your Current Finances',
      subtitle: 'Complete 360° audit of income, assets, debts & liabilities',
      description: 'We gather all scattered financial data — bank balances, fixed deposits, mutual funds, EPF/NPS, real estate, and active loans — to construct your baseline financial health report.',
      icon: Search,
      deliverable: 'Baseline Financial Snapshot Report'
    },
    {
      num: '02',
      title: 'Define Your Goals',
      subtitle: 'Quantifying exact target amounts & timeline horizons',
      description: 'Whether it is retiring at 48, funding children’s overseas education, buying a vacation property, or saving tax, we map inflation-adjusted monetary targets to each ambition.',
      icon: Target,
      deliverable: 'Inflation-Adjusted Milestone Matrix'
    },
    {
      num: '03',
      title: 'Build a Personalized Strategy',
      subtitle: 'Custom asset allocation, tax harvesting & risk shield blueprint',
      description: 'We design your tailored financial plan — optimizing monthly surplus, choosing zero-commission direct instruments, and structuring tax-loss harvesting rules.',
      icon: FileSpreadsheet,
      deliverable: 'Comprehensive SOLAHANA Master Blueprint'
    },
    {
      num: '04',
      title: 'Execute the Plan',
      subtitle: 'Disciplined setup of goal-based SIPs & emergency reserves',
      description: 'We guide you through seamless implementation — setting up goal-linked automated SIPs, term insurance shields, and tax-saving NPS/ELSS allocations.',
      icon: Zap,
      deliverable: 'Zero-Commission Portfolio Setup'
    },
    {
      num: '05',
      title: 'Review Every Year',
      subtitle: 'Proactive annual recalibration & life transition adjustments',
      description: 'Markets shift and priorities evolve. We conduct structured annual rebalancing to realign asset allocations and adjust for promotions, new family members, or economic changes.',
      icon: RefreshCw,
      deliverable: 'Annual Rebalancing & Progress Scorecard'
    }
  ];

  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-[#071C48]/30 border-y border-[#C8A24A]/15">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#C8A24A]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#071C48] border border-[#C8A24A]/30 text-[#E8C878] text-xs font-semibold uppercase tracking-widest font-sora">
            <Compass className="w-3.5 h-3.5 text-[#C8A24A]" />
            <span>THE 5-PHASE ROADMAP</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-[#F8F7F3] tracking-tight">
            Your Financial Journey With SOLAHANA
          </h2>

          <p className="text-base sm:text-lg text-[#BAC6DA] font-inter">
            A structured, 5-step journey built around total transparency and long-term peace of mind.
          </p>
        </div>

        {/* Alternating Timeline Cards */}
        <div className="relative">
          
          {/* Central Golden Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute left-1/2 top-8 bottom-8 -translate-x-1/2 w-[2px] bg-gradient-to-b from-[#E8C878] via-[#C8A24A] to-[#B8862B] z-0" />

          <div className="space-y-12 lg:space-y-16">
            {steps.map((item, index) => {
              const IconComp = item.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={item.num}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10 ${
                    isEven ? '' : 'lg:flex-row-reverse'
                  }`}
                >
                  
                  {/* Text Card Column */}
                  <div className={`lg:col-span-6 text-left ${isEven ? 'lg:order-1 lg:text-right lg:pr-12' : 'lg:order-2 lg:pl-12'}`}>
                    <div className="p-7 sm:p-8 rounded-3xl bg-[#071C48]/90 border border-[#C8A24A]/30 hover:border-[#E8C878]/70 transition-all duration-300 backdrop-blur-xl shadow-[0_15px_40px_rgba(2,11,45,0.8)] space-y-4 group">
                      
                      <div className={`flex items-center gap-3 ${isEven ? 'lg:justify-end' : ''}`}>
                        <span className="px-3 py-1 rounded-full bg-[#C8A24A]/20 border border-[#E8C878]/40 text-[#E8C878] font-sora font-bold text-xs">
                          STEP {item.num}
                        </span>
                        <span className="text-xs font-mono uppercase text-[#BAC6DA]">
                          {item.deliverable}
                        </span>
                      </div>

                      <h3 className="text-2xl font-serif-luxury font-bold text-[#F8F7F3] group-hover:text-[#E8C878] transition-colors">
                        {item.title}
                      </h3>

                      <p className="text-xs font-semibold text-[#E8C878]">
                        {item.subtitle}
                      </p>

                      <p className="text-xs sm:text-sm text-[#BAC6DA] leading-relaxed font-inter">
                        {item.description}
                      </p>

                      <div className="pt-3 border-t border-[#C8A24A]/15 flex items-center space-x-2 text-xs text-[#E8C878] font-sora">
                        <CheckCircle2 className="w-4 h-4 text-[#C8A24A]" />
                        <span>Deliverable: {item.deliverable}</span>
                      </div>

                    </div>
                  </div>

                  {/* Center Milestone Node Icon */}
                  <div className="hidden lg:flex lg:col-span-0 absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-[#E8C878] to-[#B8862B] text-[#020B2D] items-center justify-center font-sora font-bold text-sm shadow-[0_0_20px_rgba(200,162,74,0.5)] z-20">
                    <IconComp className="w-6 h-6 text-[#020B2D]" />
                  </div>

                  {/* Spacer Column for Opposite Side */}
                  <div className={`hidden lg:block lg:col-span-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`} />

                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
