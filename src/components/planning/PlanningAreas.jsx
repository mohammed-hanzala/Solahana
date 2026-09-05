import React from 'react';
import { motion } from 'framer-motion';
import { Wallet, ShieldCheck, TrendingUp, Calculator, ShieldAlert, Target, ArrowRight, Sparkles } from 'lucide-react';

export default function PlanningAreas({ onSelectArea }) {
  const areas = [
    {
      title: 'Budget & Cash Flow',
      description: 'Analyze monthly surpluses, eliminate wasteful leaks, and establish structured cash-flow buckets for recurring and annual expenses.',
      icon: Wallet,
      tag: 'Foundation'
    },
    {
      title: 'Emergency Fund Planning',
      description: 'Build an impenetrable liquid safety shield equal to 6–12 months of household expenses in high-grade liquid instruments.',
      icon: ShieldCheck,
      tag: 'Protection'
    },
    {
      title: 'Investment Strategy',
      description: 'Goal-aligned multi-asset portfolios across direct equity, zero-commission mutual funds, corporate debt, and sovereign gold.',
      icon: TrendingUp,
      tag: 'Wealth Creation'
    },
    {
      title: 'Tax Planning & Harvesting',
      description: 'Legal Section 80C/80D optimization, NPS tax shields, and annual capital gains loss harvesting to minimize tax drag.',
      icon: Calculator,
      tag: 'Tax Efficiency'
    },
    {
      title: 'Insurance & Risk Shield',
      description: 'Comprehensive risk audit covering high-cover term life policies, inflation-indexed health cover, and critical illness safeguards.',
      icon: ShieldAlert,
      tag: 'Family Safety'
    },
    {
      title: 'Retirement & FIRE Roadmap',
      description: 'Determine your inflation-indexed retirement target corpus and design passive income streams to retire early with full freedom.',
      icon: Target,
      tag: 'Independence'
    }
  ];

  return (
    <section id="planning-areas" className="py-20 md:py-28 relative overflow-hidden bg-[#020B2D]">
      {/* Background Lighting */}
      <div className="absolute top-1/3 right-0 w-[600px] h-[400px] bg-[#C8A24A]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#071C48] border border-[#C8A24A]/30 text-[#E8C878] text-xs font-semibold uppercase tracking-widest font-sora">
            <Sparkles className="w-3.5 h-3.5 text-[#C8A24A]" />
            <span>360° FINANCIAL SCOPE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-[#F8F7F3] tracking-tight">
            Everything Connected Through One Strategy
          </h2>

          <p className="text-base sm:text-lg text-[#BAC6DA] font-inter">
            A comprehensive financial plan addresses six interconnected pillars of your financial life.
          </p>
        </div>

        {/* 3x2 Premium Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map((item, index) => {
            const IconComp = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className="p-7 rounded-3xl bg-gradient-to-b from-[#071C48]/90 to-[#020B2D]/95 border border-[#C8A24A]/25 hover:border-[#E8C878]/70 transition-all duration-300 shadow-[0_15px_40px_rgba(2,11,45,0.8)] backdrop-blur-xl text-left flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  {/* Top Bar with Icon & Tag */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#E8C878] to-[#B8862B] p-[1px] shadow-[0_0_15px_rgba(200,162,74,0.3)]">
                      <div className="w-full h-full bg-[#020B2D] rounded-[15px] flex items-center justify-center text-[#E8C878] group-hover:bg-[#C8A24A] group-hover:text-[#020B2D] transition-colors">
                        <IconComp className="w-6 h-6" />
                      </div>
                    </div>

                    <span className="text-[10px] font-sora font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#020B2D] text-[#E8C878] border border-[#C8A24A]/30">
                      {item.tag}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-serif-luxury font-bold text-[#F8F7F3] group-hover:text-[#E8C878] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#BAC6DA] leading-relaxed font-inter">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Action CTA Arrow */}
                <div className="mt-6 pt-4 border-t border-[#C8A24A]/15 flex items-center justify-between text-xs font-semibold text-[#E8C878] group-hover:text-[#F8F7F3] transition-colors">
                  <span>Learn How It's Planned</span>
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
