import React from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  Search, 
  Layers, 
  Target, 
  RefreshCcw, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  Calculator,
  TrendingUp
} from 'lucide-react';

export default function HowSolahanaWorks() {
  const steps = [
    {
      num: '01',
      title: 'UNDERSTAND',
      subtitle: 'Comprehensive Financial Audit',
      desc: 'We begin by understanding your financial situation, monthly cashflow, existing investments, insurance coverage, and immediate and long-term life goals.',
      icon: Search,
      tags: ['Income & Expenses', 'Risk Capacity', 'Life Goals Audit'],
    },
    {
      num: '02',
      title: 'ORGANIZE',
      subtitle: 'Structuring Your Wealth',
      desc: 'We organize your income, savings, liabilities, emergency reserves, and financial priorities into a clean, disciplined structure.',
      icon: Layers,
      tags: ['Liquidity Allocation', 'Debt Optimization', 'Emergency Fund'],
    },
    {
      num: '03',
      title: 'PLAN',
      subtitle: 'Goal-Aligned Blueprint',
      desc: 'We create a thoughtful financial strategy around retirement, wealth creation, tax optimization, children’s education, and family risk protection.',
      icon: Target,
      tags: ['Retirement FIRE', 'Tax Optimization', 'Multi-Asset PMS/SIP'],
    },
    {
      num: '04',
      title: 'REVIEW',
      subtitle: 'Evolving With Your Life',
      desc: 'Your financial plan grows with your life through regular periodic reviews, rebalancing alerts, and strategy adjustments as your income grows.',
      icon: RefreshCcw,
      tags: ['Annual Rebalance', 'Tax Loss Harvesting', 'Milestone Check'],
    },
  ];

  const miniFeatures = [
    {
      title: 'Goal-Based Planning',
      desc: 'Tailored investment strategies designed around your specific life milestones.',
      icon: Target,
    },
    {
      title: 'Tax-Aware Financial Strategy',
      desc: 'Legally minimize tax drag under Section 80C, 80D & LTCG tax-loss harvesting.',
      icon: Calculator,
    },
    {
      title: 'Long-Term Wealth Planning',
      desc: 'Disciplined compounding for inflation-protected generational prosperity.',
      icon: TrendingUp,
    },
  ];

  return (
    <section className="relative z-10 py-24 bg-[#020B2D] border-t border-[#C8A24A]/15 overflow-hidden">
      
      {/* Background Radial Lights */}
      <div className="absolute top-1/4 right-10 w-[550px] h-[550px] bg-[#C8A24A]/8 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-blue-900/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full gold-badge text-xs font-semibold text-[#E8C878] border border-[#C8A24A]/35 shadow-[0_0_15px_rgba(200,162,74,0.2)]"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#E8C878] animate-pulse" />
            <span className="font-sora tracking-wide uppercase text-[11px]">OUR PLANNING METHODOLOGY</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-[#F8F7F3] tracking-tight leading-tight"
          >
            How We Help You Build a{' '}
            <span className="gold-gradient-text italic font-serif-luxury">Better Financial Future</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-[#BAC6DA] font-inter leading-relaxed"
          >
            A simple four-step planning process designed around your life goals and long-term security.
          </motion.p>
        </div>


        {/* TIMELINE PROCESS CONTAINER */}
        <div className="relative mb-24">
          
          {/* Vertical Glowing Connector Line (Desktop Center) */}
          <div className="hidden lg:block absolute left-1/2 top-8 bottom-8 w-[2px] -translate-x-1/2 bg-gradient-to-b from-[#E8C878] via-[#C8A24A] to-[#B8862B] opacity-40 shadow-[0_0_10px_#C8A24A]" />

          <div className="space-y-12 lg:space-y-16">
            {steps.map((step, idx) => {
              const IconComp = step.icon;
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: idx * 0.15 }}
                  className={`relative flex flex-col lg:flex-row items-center ${
                    isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  
                  {/* Content Box (Left or Right on Desktop) */}
                  <div className="w-full lg:w-1/2 p-2">
                    <div className={`group rounded-[28px] p-7 sm:p-8 bg-[#071C48]/70 hover:bg-[#071C48]/95 border border-[#C8A24A]/25 hover:border-[#C8A24A]/60 backdrop-blur-2xl transition-all duration-500 shadow-[0_15px_40px_rgba(2,11,45,0.8)] hover:shadow-[0_20px_50px_rgba(200,162,74,0.22)] ${
                      isEven ? 'lg:mr-8 text-left' : 'lg:ml-8 text-left'
                    }`}>
                      
                      {/* Top Header: Step Number & Title */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <span className="text-3xl sm:text-4xl font-num font-bold gold-gradient-text tracking-tight">
                            {step.num}
                          </span>
                          <div>
                            <h3 className="text-lg font-serif-luxury font-bold text-[#F8F7F3] group-hover:text-[#E8C878] transition-colors">
                              {step.title}
                            </h3>
                            <div className="text-xs font-sora text-[#C8A24A]">
                              {step.subtitle}
                            </div>
                          </div>
                        </div>

                        <div className="w-10 h-10 rounded-xl bg-[#C8A24A]/15 border border-[#C8A24A]/30 text-[#E8C878] flex items-center justify-center shrink-0 group-hover:bg-[#C8A24A] group-hover:text-[#020B2D] transition-colors duration-300">
                          <IconComp className="w-5 h-5" />
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-sm text-[#BAC6DA] font-inter leading-relaxed mb-6">
                        {step.desc}
                      </p>

                      {/* Tags Bar */}
                      <div className="flex flex-wrap gap-2 pt-4 border-t border-[#C8A24A]/15">
                        {step.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-3 py-1 rounded-full text-[11px] font-semibold text-[#F8F7F3] bg-[#020B2D]/80 border border-[#C8A24A]/20 font-num"
                          >
                            ✓ {tag}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>

                  {/* Center Timeline Number Node (Desktop Only) */}
                  <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-gradient-to-br from-[#E8C878] via-[#C8A24A] to-[#B8862B] text-[#020B2D] font-num font-bold text-lg items-center justify-center border-4 border-[#020B2D] shadow-[0_0_20px_rgba(200,162,74,0.5)] z-20">
                    {step.num}
                  </div>

                  {/* Empty Spacer Column for Layout Symmetry */}
                  <div className="hidden lg:block w-1/2" />

                </motion.div>
              );
            })}
          </div>

        </div>


        {/* MINI FEATURE STRIP (THREE 24PX ROUNDED GLASS CARDS) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {miniFeatures.map((feat, fIdx) => {
            const IconComp = feat.icon;
            return (
              <motion.div
                key={fIdx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: fIdx * 0.12 }}
                whileHover={{ y: -6 }}
                className="group p-6 rounded-[24px] bg-[#071C48]/60 border border-[#C8A24A]/25 hover:border-[#C8A24A]/60 backdrop-blur-xl transition-all duration-300 flex items-start space-x-4 hover:shadow-[0_15px_40px_rgba(200,162,74,0.2)]"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#C8A24A]/15 border border-[#C8A24A]/30 text-[#E8C878] group-hover:bg-[#C8A24A] group-hover:text-[#020B2D] transition-colors duration-300 flex items-center justify-center shrink-0 shadow-[0_0_12px_rgba(200,162,74,0.2)]">
                  <IconComp className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-serif-luxury font-bold text-[#F8F7F3] group-hover:text-[#E8C878] transition-colors">
                    {feat.title}
                  </h4>
                  <p className="text-xs text-[#BAC6DA] leading-relaxed mt-1">
                    {feat.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

    </section>
  );
}
