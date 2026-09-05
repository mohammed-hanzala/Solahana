import React from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  ShieldCheck, 
  Target, 
  Receipt, 
  Home, 
  Crown, 
  ArrowRight 
} from 'lucide-react';

const popularTools = [
  {
    title: 'SIP Planner',
    subtitle: 'Systematic Wealth Building',
    description: 'Calculate step-up SIPs, inflation-adjusted targets, and expected corpus growth.',
    icon: TrendingUp,
    badge: 'Most Popular',
    calcType: 'sip'
  },
  {
    title: 'Retirement Planner',
    subtitle: 'Financial Independence',
    description: 'Determine your post-retirement corpus and sustainable monthly withdrawal limits.',
    icon: ShieldCheck,
    badge: 'Essential',
    calcType: 'retirement'
  },
  {
    title: 'Goal Planner',
    subtitle: 'Milestone Allocation',
    description: 'Structure dedicated monthly contributions tailored to key family and wealth goals.',
    icon: Target,
    badge: 'Goal-Based',
    calcType: 'goal'
  },
  {
    title: 'Tax Planner',
    subtitle: '80C & Capital Gains Optimization',
    description: 'Identify tax-saving investment opportunities under Old vs. New tax regimes.',
    icon: Receipt,
    badge: 'High Impact',
    calcType: 'tax'
  },
  {
    title: 'EMI Planner',
    subtitle: 'Mortgage & Loan Optimization',
    description: 'Evaluate principal repayment strategies to save interest and pay off debts earlier.',
    icon: Home,
    badge: 'Utility',
    calcType: 'emi'
  },
  {
    title: 'Wealth Planner',
    subtitle: 'Multi-Asset Portfolio Projection',
    description: 'Simulate combined equity, debt, and real estate compound asset allocation curves.',
    icon: Crown,
    badge: 'HNI Suite',
    calcType: 'wealth'
  }
];

export const PopularTools = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-[#071C48]/60 via-[#020B2D] to-[#020B2D]">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C8A24A]/10 border border-[#C8A24A]/25 mb-4"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#C8A24A]" />
              <span className="text-xs font-semibold uppercase tracking-widest text-[#E8C878]">
                PLANNING SUITE
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-playfair text-3xl md:text-5xl font-bold text-white leading-tight"
            >
              Popular Planning Tools At{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C8A24A] via-[#F3E5AB] to-[#C8A24A]">
                SOLAHANA
              </span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/70 text-base max-w-md font-light"
          >
            Explore our curated suite of luxury decision tools designed to turn complex financial equations into simple actionable strategies.
          </motion.p>
        </div>

        {/* Horizontal scroll grid on smaller screens, 3-col desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {popularTools.map((tool, index) => {
            const Icon = tool.icon;
            return (
              <motion.div
                key={tool.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="group relative p-8 rounded-3xl bg-gradient-to-br from-[#071C48]/80 via-[#041235]/90 to-[#020B2D] border border-white/10 hover:border-[#C8A24A]/40 shadow-2xl backdrop-blur-2xl transition-all duration-300 flex flex-col justify-between"
              >
                {/* Background gold accent beam */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#C8A24A]/10 to-transparent rounded-tr-3xl pointer-events-none group-hover:from-[#C8A24A]/20 transition-colors duration-300" />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-[#C8A24A]/10 border border-[#C8A24A]/30 flex items-center justify-center group-hover:bg-[#C8A24A] transition-colors duration-300">
                      <Icon className="w-6 h-6 text-[#E8C878] group-hover:text-[#020B2D] transition-colors duration-300" />
                    </div>
                    <span className="px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide uppercase bg-white/5 border border-white/10 text-[#E8C878]">
                      {tool.badge}
                    </span>
                  </div>

                  <span className="text-xs font-mono text-[#E8C878] uppercase tracking-wider block mb-1">
                    {tool.subtitle}
                  </span>
                  <h3 className="font-playfair text-2xl font-bold text-white mb-3 group-hover:text-[#E8C878] transition-colors duration-300">
                    {tool.title}
                  </h3>

                  <p className="text-white/65 text-sm leading-relaxed font-light mb-8">
                    {tool.description}
                  </p>
                </div>

                <a
                  href="#interactive-preview"
                  className="inline-flex items-center justify-between w-full pt-4 border-t border-white/10 group-hover:border-[#C8A24A]/30 text-white font-medium text-sm transition-colors duration-300"
                >
                  <span className="group-hover:text-[#E8C878] transition-colors duration-300">
                    Launch Tool
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/5 group-hover:bg-[#C8A24A] flex items-center justify-center transition-all duration-300">
                    <ArrowRight className="w-4 h-4 text-white/70 group-hover:text-[#020B2D] transition-colors duration-300" />
                  </div>
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
