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
import { Link } from 'react-router-dom';

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
    <section className="relative z-10 py-24 bg-[#FAF8F5] border-t border-[#C89A4B]/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full gold-badge text-xs font-semibold text-[#9A7326] border border-[#C89A4B]/35 shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#C89A4B] animate-pulse" />
            <span className="font-sora tracking-wide uppercase text-[11px]">OUR ADVISORY SERVICES</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-[#0F172A] tracking-tight leading-[1.2]"
          >
            Tailored Solutions for Your{' '}
            <span className="gold-gradient-text italic font-serif-luxury">
              Complete
            </span>{' '}
            Financial Journey.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-[#475569] font-inter leading-relaxed"
          >
            Every service is built around your individual goals, zero-commission fiduciary standards, and long-term peace of mind.
          </motion.p>
        </div>

        {/* Grid of 6 Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => {
            const IconComp = service.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                className="group p-8 rounded-3xl bg-white border border-[#C89A4B]/20 hover:border-[#C89A4B] backdrop-blur-xl transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between"
              >
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <div className="w-14 h-14 rounded-2xl bg-[#C89A4B]/10 border border-[#C89A4B]/30 text-[#C89A4B] group-hover:bg-[#C89A4B] group-hover:text-white transition-colors duration-300 flex items-center justify-center shadow-sm">
                      <IconComp className="w-7 h-7" />
                    </div>

                    <span className="px-3 py-1 rounded-full bg-[#FAF8F5] text-[#9A7326] font-sora font-semibold text-[10px] uppercase tracking-wider border border-[#C89A4B]/20">
                      {service.highlight}
                    </span>
                  </div>

                  <h3 className="text-xl font-serif-luxury font-bold text-[#0F172A] group-hover:text-[#C89A4B] transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="text-sm text-[#475569] font-inter leading-relaxed">
                    {service.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#C89A4B]/15 flex items-center justify-between">
                  <Link
                    to="/contact"
                    className="text-xs font-semibold text-[#0F172A] group-hover:text-[#C89A4B] transition-colors flex items-center space-x-2"
                  >
                    <span>Schedule Advisory</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
