import React from 'react';
import { motion } from 'framer-motion';
import { 
  Compass, 
  TrendingUp, 
  ShieldCheck, 
  Target, 
  ArrowRight, 
  Sparkles,
  Award
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TrustStrip() {
  const cards = [
    {
      category: 'FINANCIAL PLANNING',
      titleLine1: 'Your Money Deserves a Plan.',
      titleLine2: 'Not Just an Investment.',
      cta: 'Start Your Financial Plan',
      link: '/financial-planning',
      icon: Compass,
      accentGlow: 'from-[#38BDF8]/20 via-transparent to-transparent',
    },
    {
      category: 'WEALTH CREATION',
      titleLine1: 'Saving Builds Security.',
      titleLine2: 'Planning Builds Wealth.',
      cta: 'Build Long-Term Wealth',
      link: '/investments',
      icon: TrendingUp,
      accentGlow: 'from-[#C89A4B]/20 via-transparent to-transparent',
    },
    {
      category: 'RETIREMENT PLANNING',
      titleLine1: 'Retirement Is Not the End.',
      titleLine2: "It's the Freedom You Plan For.",
      cta: 'Plan Your Retirement',
      link: '/calculators/retirement',
      icon: ShieldCheck,
      accentGlow: 'from-[#10B981]/20 via-transparent to-transparent',
    },
    {
      category: 'FINANCIAL GOALS',
      titleLine1: 'Dreams Need More Than Hope.',
      titleLine2: 'They Need a Plan.',
      cta: 'Plan Your Life Goals',
      link: '/goals',
      icon: Target,
      accentGlow: 'from-[#8B5CF6]/20 via-transparent to-transparent',
    },
  ];

  return (
    <section className="relative z-20 py-16 md:py-24 bg-[#020B2D] border-y border-[#C89A4B]/20 overflow-hidden">
      
      {/* Background Soft Glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[#38BDF8]/8 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[#C89A4B]/8 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Pricing Tagline Badge Above Cards */}
        <div className="flex justify-center mb-10 md:mb-14">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2.5 px-5 py-2 rounded-full border border-[#C89A4B]/35 bg-[#0F172A]/80 backdrop-blur-xl shadow-lg"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#E8C878] animate-pulse" />
            <span className="text-[11px] sm:text-xs font-sora font-bold tracking-widest text-[#E8C878] uppercase">
              PAY WHAT YOU SHOULD. NOT MORE THAN YOU NEED TO.
            </span>
          </motion.div>
        </div>

        {/* 4 Feature Advisory Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {cards.map((card, idx) => {
            const IconComp = card.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.12 }}
                whileHover={{ y: -6 }}
                className="group relative rounded-[24px] p-7 md:p-8 bg-gradient-to-b from-[#0F172A]/90 to-[#0B132B]/95 border border-[#C89A4B]/25 hover:border-[#38BDF8]/60 backdrop-blur-xl shadow-xl hover:shadow-[0_20px_45px_rgba(56,189,248,0.18)] transition-all duration-500 flex flex-col justify-between h-full overflow-hidden"
              >
                {/* Subtle Hover Gradient Glow Behind Card */}
                <div className={`absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl ${card.accentGlow} rounded-bl-full pointer-events-none group-hover:scale-125 transition-transform duration-500`} />

                <div>
                  {/* Top Minimal Vector Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#38BDF8]/15 via-[#C89A4B]/10 to-transparent border border-[#C89A4B]/30 flex items-center justify-center text-[#38BDF8] group-hover:border-[#38BDF8]/70 group-hover:scale-110 group-hover:text-[#E8C878] transition-all duration-300 shadow-inner mb-6">
                    <IconComp className="w-7 h-7" />
                  </div>

                  {/* Heading / Category */}
                  <div className="text-xs font-sora font-bold tracking-widest text-[#38BDF8] group-hover:text-[#E8C878] transition-colors uppercase mb-3">
                    {card.category}
                  </div>

                  {/* Editorial Headline Content */}
                  <h3 className="text-xl sm:text-2xl font-serif-luxury font-bold text-white leading-snug tracking-tight mb-6">
                    <span>{card.titleLine1}</span>{' '}
                    <span className="block gold-gradient-text italic font-serif-luxury mt-1">
                      {card.titleLine2}
                    </span>
                  </h3>
                </div>

                {/* Animated CTA Button Link */}
                <div className="pt-6 border-t border-[#C89A4B]/15 mt-auto">
                  <Link
                    to={card.link}
                    className="inline-flex items-center space-x-2 text-xs font-sora font-bold text-[#E8C878] group-hover:text-[#38BDF8] transition-colors"
                  >
                    <span>{card.cta}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform text-[#38BDF8]" />
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
