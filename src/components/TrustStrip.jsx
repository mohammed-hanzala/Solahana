import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

import FinancialPlanningIllustration from './illustrations/FinancialPlanningIllustration';
import WealthCreationIllustration from './illustrations/WealthCreationIllustration';
import RetirementCoupleIllustration from './illustrations/RetirementCoupleIllustration';
import GoalPlanningIllustration from './illustrations/GoalPlanningIllustration';

export default function TrustStrip() {
  const cards = [
    {
      category: 'FINANCIAL PLANNING',
      titleLine1: 'Your Money Deserves a Plan.',
      titleLine2: 'Not Just an Investment.',
      description: '360° fiduciary wealth architecture bringing your salary, savings, protection, and life goals into one unified strategy.',
      cta: 'Start Your Financial Plan',
      link: '/financial-planning',
      illustrationComponent: FinancialPlanningIllustration,
    },
    {
      category: 'WEALTH CREATION',
      titleLine1: 'Saving Builds Security.',
      titleLine2: 'Planning Builds Wealth.',
      description: 'Disciplined multi-asset SIP portfolios across direct mutual funds, bonds, and equities for compounding long-term growth.',
      cta: 'Build Long-Term Wealth',
      link: '/investments',
      illustrationComponent: WealthCreationIllustration,
    },
    {
      category: 'RETIREMENT PLANNING',
      titleLine1: 'Retirement Is Not the End.',
      titleLine2: "It's the Freedom You Plan For.",
      description: 'Build an inflation-adjusted FIRE target corpus with automated pension drawdown and long-term capital preservation.',
      cta: 'Plan Your Retirement',
      link: '/calculators/retirement',
      illustrationComponent: RetirementCoupleIllustration,
    },
    {
      category: 'FINANCIAL GOALS',
      titleLine1: 'Dreams Need More Than Hope.',
      titleLine2: 'They Need a Plan.',
      description: 'Structured milestone savings for dream home purchases, children\'s higher education funds, and family financial security.',
      cta: 'Plan Your Life Goals',
      link: '/goals',
      illustrationComponent: GoalPlanningIllustration,
    },
  ];

  return (
    <section className="relative z-20 py-16 md:py-24 bg-[#FCFAF6] border-y border-[#E7D7B5] overflow-hidden text-left">
      
      {/* Background Soft Glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[#C89B3C]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Tagline Badge Above Cards */}
        <div className="flex justify-center mb-10 md:mb-14">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2.5 px-5 py-2 rounded-full border border-[#E7D7B5] bg-white backdrop-blur-xl shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#C89B3C] animate-pulse" />
            <span className="text-[11px] sm:text-xs font-sora font-bold tracking-widest text-[#C89B3C] uppercase">
              PAY WHAT YOU SHOULD. NOT MORE THAN YOU NEED TO.
            </span>
          </motion.div>
        </div>

        {/* 4 Equal-Height Advisory Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-stretch">
          {cards.map((card, idx) => {
            const IllustrationComp = card.illustrationComponent;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                className="group relative rounded-[24px] p-6 bg-white border border-[#E7D7B5] hover:border-[#C89B3C] backdrop-blur-xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full overflow-hidden"
              >
                <div>
                  {/* Category Tag */}
                  <div className="text-xs font-sora font-bold tracking-widest text-[#C89B3C] group-hover:text-[#B8860B] transition-colors uppercase mb-3">
                    {card.category}
                  </div>

                  {/* 20-30% Larger Human Vector Illustration Header Container */}
                  <div className="w-full h-44 sm:h-48 mb-4 overflow-hidden rounded-2xl bg-[#FCFAF6] border border-[#E7D7B5] p-2 flex items-center justify-center">
                    <IllustrationComp />
                  </div>

                  {/* Editorial Headline Content */}
                  <h3 className="text-lg font-serif-luxury font-bold text-[#1A1A1A] leading-snug tracking-tight mb-2">
                    <span className="block">{card.titleLine1}</span>
                    <span className="block text-[#C89B3C] italic font-serif-luxury mt-0.5 leading-snug">
                      {card.titleLine2}
                    </span>
                  </h3>

                  {/* Supporting Description */}
                  <p className="text-xs text-[#555555] font-inter leading-relaxed mb-4">
                    {card.description}
                  </p>
                </div>

                {/* Animated Gold CTA Link aligned at bottom */}
                <div className="pt-4 border-t border-[#E7D7B5] mt-auto">
                  <Link
                    to={card.link}
                    className="inline-flex items-center space-x-1.5 text-xs font-sora font-bold text-[#C89B3C] group-hover:text-[#1A1A1A] transition-colors"
                  >
                    <span>{card.cta}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
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
