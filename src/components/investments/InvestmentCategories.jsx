import React from 'react';
import { motion } from 'framer-motion';
import { PieChart, TrendingUp, ShieldCheck, Coins, Globe, Wallet, ArrowRight, Sparkles } from 'lucide-react';

export default function InvestmentCategories({ onSelectCategory }) {
  const categories = [
    {
      id: 'mutual-funds',
      title: 'Mutual Funds',
      subtitle: 'Goal-based diversified investing',
      description: 'Zero-commission direct mutual funds matched to your specific risk tolerance, horizon, and capital growth objectives.',
      icon: PieChart,
      tag: 'Core Equity & Hybrid'
    },
    {
      id: 'sip',
      title: 'SIP Investments',
      subtitle: 'Monthly disciplined investing',
      description: 'Automated step-up monthly investments that build long-term compounding discipline without market timing anxiety.',
      icon: TrendingUp,
      tag: 'Systematic Step-Up'
    },
    {
      id: 'bonds',
      title: 'Bonds & Fixed Income',
      subtitle: 'Stable and predictable returns',
      description: 'High-grade AAA corporate bonds, Government Securities (G-Secs), and capital protection shields for predictable yield.',
      icon: ShieldCheck,
      tag: 'Capital Protection'
    },
    {
      id: 'gold',
      title: 'Gold Investments',
      subtitle: 'Digital gold and Sovereign Gold Bonds (SGB)',
      description: 'Sovereign Gold Bonds earning 2.5% annual interest + capital appreciation with tax-free redemption maturity.',
      icon: Coins,
      tag: 'Inflation Hedges'
    },
    {
      id: 'international',
      title: 'International Investments',
      subtitle: 'Diversification across global markets',
      description: 'Access leading US & international technology leaders and global index funds to hedge against single-currency risk.',
      icon: Globe,
      tag: 'Global Assets'
    },
    {
      id: 'emergency',
      title: 'Emergency Fund Investments',
      subtitle: 'Safe liquid investment options',
      description: 'Ultra-short duration debt funds and liquid funds providing instant liquidity while yielding 2x higher than savings accounts.',
      icon: Wallet,
      tag: 'High Liquidity'
    }
  ];

  return (
    <section id="investment-categories" className="py-20 md:py-28 relative overflow-hidden bg-[#020B2D]">
      {/* Background Glow */}
      <div className="absolute top-1/3 right-0 w-[600px] h-[400px] bg-[#C8A24A]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#071C48] border border-[#C8A24A]/30 text-[#E8C878] text-xs font-semibold uppercase tracking-widest font-sora">
            <Sparkles className="w-3.5 h-3.5 text-[#C8A24A]" />
            <span>MULTI-ASSET MATRIX</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-[#F8F7F3] tracking-tight">
            Investment Options Tailored To Your Goals.
          </h2>

          <p className="text-base sm:text-lg text-[#BAC6DA] font-inter">
            Explore zero-commission, goal-aligned asset classes designed to build long-term wealth.
          </p>
        </div>

        {/* 6 Luxury Investment Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((item, index) => {
            const IconComp = item.icon;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -8 }}
                className="p-7 rounded-[28px] bg-gradient-to-b from-[#071C48]/95 to-[#020B2D]/95 border border-[#C8A24A]/30 hover:border-[#E8C878]/70 transition-all duration-300 shadow-[0_15px_40px_rgba(2,11,45,0.8)] backdrop-blur-2xl text-left flex flex-col justify-between group cursor-pointer"
                onClick={() => onSelectCategory && onSelectCategory(item.id)}
              >
                <div className="space-y-5">
                  
                  {/* Top Bar Icon & Badge */}
                  <div className="flex items-center justify-between">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#E8C878] to-[#B8862B] p-[1px] shadow-[0_0_20px_rgba(200,162,74,0.3)]">
                      <div className="w-full h-full bg-[#020B2D] rounded-[15px] flex items-center justify-center text-[#E8C878] group-hover:bg-[#C8A24A] group-hover:text-[#020B2D] transition-colors">
                        <IconComp className="w-7 h-7" />
                      </div>
                    </div>

                    <span className="text-[10px] font-sora font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-[#020B2D] text-[#E8C878] border border-[#C8A24A]/30">
                      {item.tag}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <div className="space-y-1">
                    <h3 className="text-2xl font-serif-luxury font-bold text-[#F8F7F3] group-hover:text-[#E8C878] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs font-semibold text-[#E8C878]">
                      {item.subtitle}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-[#BAC6DA] leading-relaxed font-inter">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Action Link */}
                <div className="mt-6 pt-4 border-t border-[#C8A24A]/15 flex items-center justify-between text-xs font-semibold text-[#E8C878] group-hover:text-[#F8F7F3] transition-colors">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 text-[#C8A24A] group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
