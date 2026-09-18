import React from 'react';
import { motion } from 'framer-motion';
import { PieChart, Award, TrendingUp, Calculator, ShieldCheck, Scroll, Compass } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PlanningAreas() {
  const services = [
    {
      title: 'Financial Planning',
      desc: '360° wealth architecture aligning cashflow, emergency reserves, and life goals.',
      icon: PieChart,
      link: '/financial-planning',
      badge: 'Comprehensive'
    },
    {
      title: 'Retirement Planning',
      desc: 'Inflation-adjusted FIRE corpus with systematic withdrawal & pension planning.',
      icon: Award,
      link: '/calculators/retirement',
      badge: 'FIRE Target'
    },
    {
      title: 'Investment Planning',
      desc: 'Personalized multi-asset SIP portfolios across direct mutual funds, bonds & equity.',
      icon: TrendingUp,
      link: '/investments',
      badge: 'Multi-Asset'
    },
    {
      title: 'Tax Planning',
      desc: 'Strategic Section 80C, 80D, NPS, and automated capital gains tax-loss harvesting.',
      icon: Calculator,
      link: '/tax-planning',
      badge: 'Tax Optimized'
    },
    {
      title: 'Risk Management',
      desc: 'Comprehensive term life & health insurance buffer to safeguard your family.',
      icon: ShieldCheck,
      link: '/contact',
      badge: 'Family Cover'
    },
    {
      title: 'Estate Planning',
      desc: 'Will drafting, legacy preservation, and private family trust succession.',
      icon: Scroll,
      link: '/goals',
      badge: 'Legacy Trust'
    },
  ];

  return (
    <section id="planning-solutions" className="py-16 md:py-24 relative overflow-hidden bg-[#FCFAF6] border-b border-[#E7D7B5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#C89B3C]/10 border border-[#E7D7B5] text-[#C89B3C] text-xs font-semibold uppercase tracking-widest font-sora">
            <Compass className="w-3.5 h-3.5" />
            <span>SOLUTIONS GRID</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-[#1A1A1A] leading-tight">
            Comprehensive Planning Solutions
          </h2>
          <p className="text-base text-[#555555] font-inter max-w-2xl mx-auto">
            End-to-end fiduciary wealth management tailored for working professionals, business owners, and families.
          </p>
        </div>

        {/* 6 Equal-Height Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {services.map((srv, idx) => {
            const IconComp = srv.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                className="p-7 sm:p-8 rounded-3xl bg-white border border-[#E7D7B5] hover:border-[#C89B3C] shadow-sm hover:shadow-xl transition-all duration-300 text-left flex flex-col justify-between group h-full"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-[#C89B3C]/10 text-[#C89B3C] group-hover:bg-[#C89B3C] group-hover:text-white transition-colors flex items-center justify-center font-bold shadow-sm">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-sora font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-[#FAF8F5] text-[#9A7326] border border-[#E7D7B5]">
                      {srv.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-serif-luxury font-bold text-[#0F172A] group-hover:text-[#C89B3C] transition-colors">
                    {srv.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#555555] font-inter leading-relaxed line-clamp-2">
                    {srv.desc}
                  </p>
                </div>

                <div className="pt-6 border-t border-[#E7D7B5]/60 mt-6">
                  <Link
                    to={srv.link}
                    className="text-xs font-bold text-[#9A7326] hover:text-[#C89B3C] inline-flex items-center space-x-1.5 transition-colors group-hover:translate-x-1 duration-200"
                  >
                    <span>Explore Solution</span>
                    <span>→</span>
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
