import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Target, ShieldCheck, Layers, RefreshCw, CheckCircle2 } from 'lucide-react';

export default function BuildPortfolioProcess() {
  const steps = [
    {
      num: '01',
      title: 'Understand Goals',
      subtitle: 'Quantifying exact milestone timelines & target corpus',
      description: 'We align investments directly to your family ambitions — down-payment date, university tuition, or FIRE retirement age.',
      bullets: ['Target corpus calculation', 'Inflation adjustment', 'Timeline horizon mapping'],
      icon: Target
    },
    {
      num: '02',
      title: 'Assess Risk Profile',
      subtitle: 'Testing psychological & financial volatility tolerance',
      description: 'We evaluate your capacity for market swings and liquidity needs to ensure you never panic-sell during market corrections.',
      bullets: ['Drawdown tolerance test', 'Liquidity buffer audit', 'Cash flow stability check'],
      icon: ShieldCheck
    },
    {
      num: '03',
      title: 'Build Diversified Allocation',
      subtitle: 'Engineering zero-commission multi-asset portfolios',
      description: 'We select direct mutual funds, AAA corporate bonds, Sovereign Gold Bonds, and liquid emergency shields.',
      bullets: ['Zero-commission direct funds', 'Section 80C/80D tax optimization', 'Global equity diversification'],
      icon: Layers
    },
    {
      num: '04',
      title: 'Review Every Year',
      subtitle: 'Annual rebalancing & tax-loss harvesting',
      description: 'We conduct regular audits to rebalance asset weights, harvest up to ₹1 Lakh tax-free LTCG, and adjust for life events.',
      bullets: ['Annual asset rebalancing', 'LTCG tax loss harvesting', 'Life-event plan recalibration'],
      icon: RefreshCw
    }
  ];

  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-[#071C48]/30 border-t border-[#C8A24A]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#071C48] border border-[#C8A24A]/30 text-[#E8C878] text-xs font-semibold uppercase tracking-widest font-sora">
            <Compass className="w-3.5 h-3.5 text-[#C8A24A]" />
            <span>THE PORTFOLIO METHODOLOGY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-[#F8F7F3] tracking-tight">
            A Simple Investment Planning Process.
          </h2>

          <p className="text-base sm:text-lg text-[#BAC6DA] font-inter">
            Four disciplined steps to construct and manage your long-term goal portfolio.
          </p>
        </div>

        {/* 4 Horizontal Cards Process Connected by Gold Line */}
        <div className="relative">
          
          {/* Horizontal Line on Desktop */}
          <div className="hidden lg:block absolute left-12 right-12 top-1/2 -translate-y-1/2 h-[2px] bg-gradient-to-r from-[#E8C878]/30 via-[#C8A24A] to-[#B8862B]/30 z-0" />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 relative z-10">
            {steps.map((item, idx) => {
              const IconComp = item.icon;

              return (
                <motion.div
                  key={item.num}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  whileHover={{ y: -8 }}
                  className="p-6 sm:p-7 rounded-3xl bg-[#020B2D]/95 border border-[#C8A24A]/30 hover:border-[#E8C878]/70 transition-all duration-300 shadow-[0_15px_40px_rgba(2,11,45,0.8)] backdrop-blur-xl text-left flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    {/* Header Row */}
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#E8C878] to-[#B8862B] p-[1px] shadow-[0_0_15px_rgba(200,162,74,0.3)]">
                        <div className="w-full h-full bg-[#020B2D] rounded-[15px] flex items-center justify-center text-[#E8C878]">
                          <IconComp className="w-6 h-6" />
                        </div>
                      </div>

                      <span className="text-2xl font-sora font-bold text-[#E8C878]/80 group-hover:text-[#E8C878] transition-colors">
                        {item.num}
                      </span>
                    </div>

                    <div className="space-y-1">
                      <h3 className="text-xl font-serif-luxury font-bold text-[#F8F7F3] group-hover:text-[#E8C878] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs font-semibold text-[#E8C878]">
                        {item.subtitle}
                      </p>
                    </div>

                    <p className="text-xs text-[#BAC6DA] leading-relaxed font-inter">
                      {item.description}
                    </p>

                    {/* Bullets */}
                    <div className="pt-3 space-y-2 border-t border-[#C8A24A]/15">
                      {item.bullets.map((b, i) => (
                        <div key={i} className="flex items-center space-x-2 text-[11px] text-[#F8F7F3]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#C8A24A] shrink-0" />
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#C8A24A]/15 flex items-center justify-between text-[11px] text-[#BAC6DA]">
                    <span>Step {item.num} of 04</span>
                    <span className="text-[#E8C878] font-semibold font-sora">Fiduciary</span>
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
