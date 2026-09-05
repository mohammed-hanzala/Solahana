import React from 'react';
import { motion } from 'framer-motion';
import { 
  Target, 
  TrendingUp, 
  Calculator, 
  ShieldCheck, 
  HeartHandshake, 
  RefreshCcw, 
  ArrowRight,
  Sparkles
} from 'lucide-react';

export default function SolahanaServices() {
  const services = [
    {
      title: 'Financial Planning',
      desc: 'Holistic 360° financial roadmap aligning cashflow, emergency reserves, asset creation, and life goals into one unified strategy.',
      icon: Target,
      highlight: '360° Life Roadmap',
    },
    {
      title: 'Investment Planning',
      desc: 'Disciplined multi-asset allocation spanning direct equities, PMS, mutual funds, and fixed income aligned with your risk capacity.',
      icon: TrendingUp,
      highlight: 'Multi-Asset Allocation',
    },
    {
      title: 'Tax Planning',
      desc: 'Proactive tax optimization under Section 80C, 80D, NPS, and capital gains tax-loss harvesting to maximize after-tax wealth.',
      icon: Calculator,
      highlight: 'Section 80C & LTCG',
    },
    {
      title: 'Retirement Planning',
      desc: 'FIRE corpus calculation, pension structuring, and inflation-protected drawdown strategies for life-long financial independence.',
      icon: ShieldCheck,
      highlight: 'Inflation-Adjusted FIRE',
    },
    {
      title: 'Insurance Planning',
      desc: 'Comprehensive risk management ring-fencing your family against health crises and untimely loss with adequate term and health cover.',
      icon: HeartHandshake,
      highlight: 'Family Risk Shield',
    },
    {
      title: 'Wealth Review',
      desc: 'Periodic reviews, portfolio rebalancing alerts, and strategy updates as your salary grows, career evolves, or life priorities shift.',
      icon: RefreshCcw,
      highlight: 'Annual Rebalancing',
    },
  ];

  return (
    <section className="relative z-10 py-24 bg-[#020B2D] border-t border-[#C8A24A]/15 overflow-hidden">
      
      {/* Background Radial Glow */}
      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-gradient-to-tr from-[#C8A24A]/10 via-[#E8C878]/5 to-transparent rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full gold-badge text-xs font-semibold text-[#E8C878] border border-[#C8A24A]/35 shadow-[0_0_15px_rgba(200,162,74,0.2)]"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#E8C878]" />
            <span className="font-sora tracking-wide uppercase text-[11px]">OUR SERVICES</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-[#F8F7F3] tracking-tight leading-[1.18] mb-6"
          >
            Everything You Need in One{' '}
            <span className="gold-gradient-text italic font-serif-luxury">Financial Planning Platform</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-[#BAC6DA] font-inter leading-relaxed"
          >
            Comprehensive wealth planning tailored for long-term security, clarity, and peace of mind.
          </motion.p>
        </div>

        {/* 6 Luxury Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((srv, idx) => {
            const IconComp = srv.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative rounded-3xl p-7 bg-[#071C48]/60 hover:bg-[#071C48]/95 border border-[#C8A24A]/20 hover:border-[#C8A24A]/60 backdrop-blur-2xl transition-all duration-500 overflow-hidden flex flex-col justify-between hover:shadow-[0_20px_45px_rgba(2,11,45,0.8),0_0_25px_rgba(200,162,74,0.18)]"
              >
                {/* Background Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#E8C878]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div>
                  {/* Top Badge & Circular Gold Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-13 h-13 rounded-full bg-[#C8A24A]/15 border border-[#C8A24A]/35 flex items-center justify-center text-[#E8C878] group-hover:bg-[#C8A24A] group-hover:text-[#020B2D] group-hover:rotate-12 transition-all duration-300 shadow-[0_0_12px_rgba(200,162,74,0.2)]">
                      <IconComp className="w-6 h-6" />
                    </div>

                    <span className="px-3 py-1 rounded-full text-[10px] font-bold font-sora tracking-wider bg-[#020B2D]/80 text-[#E8C878] border border-[#C8A24A]/20">
                      {srv.highlight}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-serif-luxury font-bold text-[#F8F7F3] group-hover:text-[#E8C878] transition-colors duration-300 mb-3">
                    {srv.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[#BAC6DA] font-inter leading-relaxed mb-6">
                    {srv.desc}
                  </p>
                </div>

                {/* Card Footer: Learn More Arrow */}
                <div className="pt-4 border-t border-[#C8A24A]/15 flex items-center justify-between mt-auto">
                  <span className="text-xs font-bold text-[#E8C878] group-hover:text-white transition-colors">
                    Learn More
                  </span>

                  <div className="w-8 h-8 rounded-full bg-[#C8A24A]/15 border border-[#C8A24A]/30 flex items-center justify-center text-[#E8C878] group-hover:bg-[#C8A24A] group-hover:text-[#020B2D] group-hover:translate-x-1.5 transition-all duration-300">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>

    </section>
  );
}
