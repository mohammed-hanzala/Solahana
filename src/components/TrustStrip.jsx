import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
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
      cta: 'Start Your Financial Plan →',
      link: '/financial-planning',
      illustrationComponent: FinancialPlanningIllustration,
    },
    {
      category: 'WEALTH CREATION',
      titleLine1: 'Saving Builds Security.',
      titleLine2: 'Planning Builds Wealth.',
      cta: 'Build Long-Term Wealth →',
      link: '/investments',
      illustrationComponent: WealthCreationIllustration,
    },
    {
      category: 'RETIREMENT PLANNING',
      titleLine1: 'Retirement Is Not the End.',
      titleLine2: "It's the Freedom You Plan For.",
      cta: 'Plan Your Retirement →',
      link: '/calculators/retirement',
      illustrationComponent: RetirementCoupleIllustration,
    },
    {
      category: 'FINANCIAL GOALS',
      titleLine1: 'Dreams Need More Than Hope.',
      titleLine2: 'They Need a Plan.',
      cta: 'Plan Your Life Goals →',
      link: '/goals',
      illustrationComponent: GoalPlanningIllustration,
    },
  ];

  return (
    <section className="relative z-20 py-16 md:py-24 bg-[#FCFAF6] border-y border-[#E7D7B5] overflow-hidden">
      
      {/* Background Soft Glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[#C89B3C]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Pricing Tagline Badge Above Cards */}
        <div className="flex justify-center mb-10 md:mb-14">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2.5 px-5 py-2 rounded-full border border-[#E7D7B5] bg-white backdrop-blur-xl shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#C89B3C] animate-pulse" />
            <span className="text-[11px] sm:text-xs font-sora font-bold tracking-widest text-[#B8860B] uppercase">
              PAY WHAT YOU SHOULD. NOT MORE THAN YOU NEED TO.
            </span>
          </motion.div>
        </div>

        {/* 4 Feature Advisory Cards Grid with Human Miniature Illustrations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {cards.map((card, idx) => {
            const IllustrationComp = card.illustrationComponent;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.12 }}
                whileHover={{ y: -6 }}
                className="group relative rounded-[24px] p-6 bg-white border border-[#E7D7B5] hover:border-[#C89B3C] backdrop-blur-xl shadow-[0_10px_30px_rgba(200,155,60,0.08)] hover:shadow-[0_15px_40px_rgba(200,155,60,0.18)] transition-all duration-300 flex flex-col justify-between h-full overflow-hidden"
              >
                <div>
                  {/* Miniature Human Vector Illustration Header */}
                  <div className="w-full mb-4 overflow-hidden rounded-2xl bg-[#F8F5EF] p-2 border border-[#E7D7B5] flex items-center justify-center">
                    <IllustrationComp />
                  </div>

                  {/* Heading / Category */}
                  <div className="text-xs font-sora font-bold tracking-widest text-[#B8860B] group-hover:text-[#C89B3C] transition-colors uppercase mb-2">
                    {card.category}
                  </div>

                  {/* Editorial Headline Content */}
                  <h3 className="text-lg font-serif-luxury font-bold text-[#1A1A1A] leading-snug tracking-tight mb-4">
                    <span>{card.titleLine1}</span>{' '}
                    <span className="block gold-gradient-text italic font-serif-luxury mt-1">
                      {card.titleLine2}
                    </span>
                  </h3>
                </div>

                {/* Animated Gold CTA Link */}
                <div className="pt-4 border-t border-[#E7D7B5] mt-auto">
                  <Link
                    to={card.link}
                    className="inline-flex items-center space-x-1.5 text-xs font-sora font-bold text-[#B8860B] group-hover:text-[#C89B3C] transition-colors"
                  >
                    <span>{card.cta}</span>
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
