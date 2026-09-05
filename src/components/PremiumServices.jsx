import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Receipt, Shield, Wallet, Globe, Sparkles, ArrowRight, ChevronRight, Check } from 'lucide-react';

export default function PremiumServices() {
  const serviceCards = [
    {
      title: 'Mutual Funds & Smart SIPs',
      description: 'Goal-based direct mutual fund investment strategies with zero commissions, automated rebalancing, and direct portfolio tracking.',
      icon: TrendingUp,
      stat: 'Zero Commission • Direct Funds',
      badge: 'Goal-Based',
    },
    {
      title: 'Tax Optimization Engine',
      description: 'Smart tax optimization for individuals and businesses under Section 80C, 80D, NPS, and automated LTCG tax-loss harvesting.',
      icon: Receipt,
      stat: 'Save up to ₹1,00,000 Tax',
      badge: 'Automated Tax',
    },
    {
      title: 'Retirement & FIRE Planning',
      description: 'Build an inflation-protected retirement corpus with personalized AI drawdown planning, pension structuring, and wealth longevity.',
      icon: Shield,
      stat: 'Inflation-Adjusted FIRE',
      badge: 'Retirement',
    },
    {
      title: 'Bonds & Fixed Income',
      description: 'Safe wealth capital preservation with AAA rated corporate bonds, Sovereign Gold Bonds (SGB), and capital-guaranteed debt yields.',
      icon: Wallet,
      stat: 'Yield up to 10.5% p.a.',
      badge: 'Fixed Yield',
    },
    {
      title: 'NRI Wealth Advisory',
      description: 'Cross-border investment and tax planning for global Indians with FEMA compliance, NRE/NRO account rules, and DTAA double tax relief.',
      icon: Globe,
      stat: 'US, Gulf & UK Desk',
      badge: 'Global Desk',
    },
    {
      title: 'AI Wealth Advisor Co-Pilot',
      description: '24×7 AI assistant that continuously audits your multi-bank and demat portfolios, detecting risks, hidden fees, and rebalancing alerts.',
      icon: Sparkles,
      stat: '24/7 AI Co-Pilot',
      badge: 'Solahana AI',
      isFeatured: true,
    },
  ];

  return (
    <section className="relative z-10 py-24 bg-[#020B2D] border-t border-[#D4AF37]/15 overflow-hidden">
      
      {/* Background Mesh Gradient Glows */}
      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-gradient-to-tr from-[#D4AF37]/10 via-[#F8D46A]/5 to-transparent rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-[600px] h-[600px] bg-gradient-to-bl from-blue-900/15 via-[#071C48]/40 to-transparent rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full gold-badge text-xs font-semibold text-[#F8D46A]"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#F8D46A]" />
            <span className="font-sora tracking-wide uppercase text-[10px]">Institutional Offerings</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-[#F8F6F2] tracking-tight leading-tight"
          >
            Everything You Need to Build Wealth —{' '}
            <span className="gold-gradient-text italic font-serif-luxury">In One Place</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-[#B7C1D9] font-inter leading-relaxed"
          >
            AI-powered financial engineering combined with SEBI registered wealth advisory for complete peace of mind.
          </motion.p>
        </div>

        {/* 6 Services Responsive Grid (Desktop: 3 cols, Tablet: 2 cols, Mobile: 1 col) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceCards.map((card, index) => {
            const IconComp = card.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className={`group relative rounded-3xl p-7 bg-[#071C48]/60 hover:bg-[#071C48]/90 border ${
                  card.isFeatured ? 'border-[#F8D46A]/60 shadow-[0_0_30px_rgba(212,175,55,0.25)]' : 'border-[#D4AF37]/20 hover:border-[#D4AF37]/60'
                } backdrop-blur-2xl transition-all duration-500 overflow-hidden flex flex-col justify-between hover:shadow-[0_20px_45px_rgba(2,11,45,0.8),0_0_25px_rgba(212,175,55,0.18)]`}
              >
                {/* Background Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#F8D46A]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div>
                  {/* Top Badge & Circular Gold Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-13 h-13 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/35 flex items-center justify-center text-[#F8D46A] group-hover:bg-[#D4AF37] group-hover:text-[#020B2D] group-hover:rotate-12 transition-all duration-300 shadow-[0_0_12px_rgba(212,175,55,0.2)]">
                      <IconComp className="w-6 h-6" />
                    </div>

                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold font-sora tracking-wider ${
                      card.isFeatured ? 'bg-gradient-to-r from-[#F8D46A] to-[#D4AF37] text-[#020B2D]' : 'bg-[#020B2D]/80 text-[#B7C1D9] border border-[#D4AF37]/20'
                    }`}>
                      {card.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-serif-luxury font-bold text-[#F8F6F2] group-hover:text-[#F8D46A] transition-colors duration-300 mb-3">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[#B7C1D9] font-inter leading-relaxed mb-6">
                    {card.description}
                  </p>
                </div>

                {/* Card Footer: Stat & Learn More Link */}
                <div className="pt-4 border-t border-[#D4AF37]/15 flex items-center justify-between mt-auto">
                  <span className="text-xs font-semibold text-[#D4AF37] font-sora">
                    {card.stat}
                  </span>

                  <a
                    href="#"
                    className="inline-flex items-center space-x-1 text-xs font-bold text-[#F8F6F2] group-hover:text-[#F8D46A] transition-colors"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#D4AF37] group-hover:translate-x-1.5 transition-transform duration-300" />
                  </a>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>

    </section>
  );
}
