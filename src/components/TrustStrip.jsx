import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

import FinancialPlanningIllustration from './illustrations/FinancialPlanningIllustration';
import RetirementCoupleIllustration from './illustrations/RetirementCoupleIllustration';
import WealthCreationIllustration from './illustrations/WealthCreationIllustration';
import TaxPlanningIllustration from './illustrations/TaxPlanningIllustration';
import GoalPlanningIllustration from './illustrations/GoalPlanningIllustration';
import EstatePlanningIllustration from './illustrations/EstatePlanningIllustration';

export default function TrustStrip() {
  const cards = [
    // ROW 1: 1. Financial Planning, 2. Retirement Planning, 3. Investment Planning
    {
      category: 'FINANCIAL PLANNING',
      titleLine1: 'Your Money Deserves a Plan.',
      titleLine2: 'Not Just an Investment.',
      description: '360° fiduciary wealth architecture combining salary, savings, protection, and life goals into one strategy.',
      cta: 'Start Financial Planning',
      link: '/financial-planning',
      illustrationComponent: FinancialPlanningIllustration,
      bgTheme: 'bg-white border-slate-200/80 hover:border-[#C89B3C]',
    },
    {
      category: 'RETIREMENT PLANNING',
      titleLine1: 'Retirement Is Not the End.',
      titleLine2: "It's Freedom You Plan For.",
      description: 'Build an inflation-adjusted FIRE corpus with automated pension drawdown and long-term capital preservation.',
      cta: 'Start Retirement Planning',
      link: '/calculators/retirement',
      illustrationComponent: RetirementCoupleIllustration,
      bgTheme: 'bg-[#FCFAF6] border-[#E7D7B5]/80 hover:border-[#C89B3C]',
    },
    {
      category: 'INVESTMENT PLANNING',
      titleLine1: 'Saving Builds Security.',
      titleLine2: 'Planning Builds Wealth.',
      description: 'Disciplined multi-asset SIP portfolios across direct mutual funds, bonds, and equities for compounding growth.',
      cta: 'Start Investment Planning',
      link: '/investments',
      illustrationComponent: WealthCreationIllustration,
      bgTheme: 'bg-[#FAF6EE] border-[#C89B3C]/30 hover:border-[#C89B3C]',
    },

    // ROW 2: 4. Tax Planning, 5. Risk Management, 6. Estate Planning
    {
      category: 'TAX PLANNING',
      titleLine1: 'Save Taxes Legally.',
      titleLine2: 'Optimize Wealth Faster.',
      description: 'Minimize tax drag under Section 80C, 80D, NPS, and automated capital gains harvesting to maximize savings.',
      cta: 'Start Tax Planning',
      link: '/tax-planning',
      illustrationComponent: TaxPlanningIllustration,
      bgTheme: 'bg-[#FDFBF7] border-[#E7D7B5]/80 hover:border-[#C89B3C]',
    },
    {
      category: 'RISK MANAGEMENT',
      titleLine1: 'Protect Your Wealth.',
      titleLine2: 'Protect Your Family.',
      description: 'Ring-fence your family against financial risk with comprehensive health, term insurance, and emergency reserves.',
      cta: 'Start Risk Management',
      link: '/risk-management',
      illustrationComponent: GoalPlanningIllustration,
      bgTheme: 'bg-white border-slate-200/80 hover:border-[#C89B3C]',
    },
    {
      category: 'ESTATE PLANNING',
      titleLine1: 'Protect Your Assets.',
      titleLine2: 'Preserve Your Legacy.',
      description: 'Protect family assets and multi-generational legacy with legal Will drafting, private trusts, and succession planning.',
      cta: 'Start Estate Planning',
      link: '/estate-planning',
      illustrationComponent: EstatePlanningIllustration,
      bgTheme: 'bg-[#FCFAF6] border-[#C89B3C]/30 hover:border-[#C89B3C]',
    },
  ];

  return (
    <section className="relative z-20 py-10 sm:py-14 lg:py-16 bg-[#FFFDF8] border-y border-[#E7D7B5]/60 overflow-hidden text-left">
      
      {/* Background Soft Glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[#C89B3C]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Tagline Badge Above Cards */}
        <div className="flex justify-center mb-8 sm:mb-10">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2.5 px-5 py-2 rounded-full border border-[#E7D7B5] bg-white shadow-sm text-center"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#C89B3C] animate-pulse shrink-0" />
            <span className="text-[11px] sm:text-xs font-sora font-bold tracking-widest text-[#C89B3C] uppercase">
              PAY WHAT YOU SHOULD. NOT MORE THAN YOU NEED TO.
            </span>
          </motion.div>
        </div>

        {/* 6 Cards Grid (3x2 Desktop, 2x3 Tablet, 1-Column Mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8 lg:gap-9 items-stretch">
          {cards.map((card, idx) => {
            const IllustrationComp = card.illustrationComponent;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.07 }}
                whileHover={{ y: -6 }}
                className={`group relative rounded-[24px] p-6 sm:p-7 border ${card.bgTheme} shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full overflow-hidden`}
              >
                <div>
                  {/* Premium Illustration Container at Top */}
                  <div className="w-full h-48 sm:h-52 mb-5 rounded-2xl bg-white/70 border border-slate-200/60 p-2 flex items-center justify-center overflow-hidden">
                    <IllustrationComp />
                  </div>

                  {/* Category Tag */}
                  <div className="text-[11px] font-sora font-bold tracking-widest text-[#C89B3C] uppercase mb-2">
                    {card.category}
                  </div>

                  {/* Editorial Headline Content */}
                  <h3 className="text-lg sm:text-xl font-serif-luxury font-bold text-[#0F172A] leading-snug tracking-tight mb-2">
                    <span className="block">{card.titleLine1}</span>
                    <span className="block text-[#C89B3C] italic font-serif-luxury mt-0.5 leading-snug">
                      {card.titleLine2}
                    </span>
                  </h3>

                  {/* Short 1–2 Line Description */}
                  <p className="text-xs sm:text-sm text-[#475569] font-inter leading-relaxed mb-4 line-clamp-2 min-h-[40px]">
                    {card.description}
                  </p>
                </div>

                {/* Animated Gold CTA Link at bottom */}
                <div className="pt-4 border-t border-slate-200/60 mt-auto">
                  <Link
                    to={card.link}
                    className="inline-flex items-center space-x-1.5 text-xs sm:text-sm font-sora font-bold text-[#C89B3C] group-hover:text-[#0F172A] transition-colors"
                  >
                    <span>{card.cta}</span>
                    <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
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
