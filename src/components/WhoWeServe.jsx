import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Building2, Globe, Rocket, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

export default function WhoWeServe() {
  const audienceCards = [
    {
      title: 'Salaried Professionals',
      subtitle: 'Corporate Executives, IT Leaders & Doctors',
      description: 'Optimize take-home salary with smart Section 80C/80D tax planning, monthly SIP compounding, emergency fund creation, and early retirement planning.',
      icon: Briefcase,
      highlights: ['Salary & Tax Optimization', 'Automated Monthly SIPs', 'Emergency Reserve Planning'],
      tag: 'Most Popular',
    },
    {
      title: 'Business Owners',
      subtitle: 'Founders, Entrepreneurs & Family Businesses',
      description: 'Turn business profits into liquid personal wealth. Structure treasury yields, tax-efficient capital extraction, and multi-generational family wealth transfer.',
      icon: Building2,
      highlights: ['Treasury Liquidity Management', 'Tax-Efficient Capital Extraction', 'Succession & Estate Planning'],
      tag: 'High Yield',
    },
    {
      title: 'NRI Families',
      subtitle: 'Global Indians in USA, Gulf, UK & Singapore',
      description: 'Cross-border wealth management with FEMA compliance, NRE/NRO account rules, DTAA tax relief, and high-quality Indian growth opportunities.',
      icon: Globe,
      highlights: ['FEMA & NRE/NRO Compliance', 'DTAA Double Tax Relief Desk', 'Seamless Repatriation Access'],
      tag: 'Global Wealth',
    },
    {
      title: 'Young Professionals',
      subtitle: 'Early Career Engineers & Tech Creators',
      description: 'Start early and harness the power of compounding. Build goal-based portfolios for higher education, travel, home purchase, and long-term financial independence.',
      icon: Rocket,
      highlights: ['Goal-Based Wealth Roadmap', 'Disciplined Monthly Compounding', 'Low-Cost Index Portfolios'],
      tag: 'Early Career',
    },
  ];

  return (
    <section className="relative z-10 py-24 bg-[#020B2D] border-t border-[#C8A24A]/15 overflow-hidden">
      
      {/* Background Radial Lights */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-[#C8A24A]/8 rounded-full blur-[140px] pointer-events-none" />

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
            <span className="font-sora tracking-wide uppercase text-[11px]">TAILORED PLANNING DESK</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-[#F8F7F3] tracking-tight leading-[1.18] mb-6"
          >
            Financial Planning for{' '}
            <span className="gold-gradient-text italic font-serif-luxury">Every Stage</span> of Life
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-[#BAC6DA] font-inter leading-relaxed"
          >
            Whether you're building your first savings or planning retirement, SOLAHANA creates strategies around your goals.
          </motion.p>
        </div>

        {/* 4 Premium Glass Cards (2x2 Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {audienceCards.map((card, idx) => {
            const IconComp = card.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.12 }}
                whileHover={{ y: -8 }}
                className="group relative rounded-[28px] p-7 sm:p-8 bg-[#071C48]/70 hover:bg-[#071C48]/95 border border-[#C8A24A]/25 hover:border-[#C8A24A]/60 backdrop-blur-2xl transition-all duration-500 shadow-[0_15px_40px_rgba(2,11,45,0.8)] hover:shadow-[0_20px_50px_rgba(200,162,74,0.22)] overflow-hidden flex flex-col justify-between"
              >
                <div>
                  {/* Top Icon Badge & Tag */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#E8C878]/25 via-[#C8A24A]/15 to-[#020B2D] border border-[#C8A24A]/40 flex items-center justify-center text-[#E8C878] shadow-[0_0_15px_rgba(200,162,74,0.3)] group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <IconComp className="w-7 h-7" />
                    </div>

                    <span className="px-3 py-1 rounded-full text-[11px] font-bold font-sora tracking-wide bg-[#C8A24A]/15 text-[#E8C878] border border-[#C8A24A]/30">
                      {card.tag}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-2xl font-serif-luxury font-bold text-[#F8F7F3] group-hover:text-[#E8C878] transition-colors duration-300">
                    {card.title}
                  </h3>
                  <div className="text-xs font-semibold text-[#C8A24A] font-sora mt-1 mb-3">
                    {card.subtitle}
                  </div>

                  {/* Description */}
                  <p className="text-sm text-[#BAC6DA] font-inter leading-relaxed mb-6">
                    {card.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="space-y-2 mb-8 border-t border-[#C8A24A]/15 pt-4">
                    {card.highlights.map((item, hIdx) => (
                      <div key={hIdx} className="flex items-center space-x-2.5 text-xs text-[#F8F7F3]">
                        <CheckCircle2 className="w-4 h-4 text-[#C8A24A] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Link */}
                <div className="pt-4 border-t border-[#C8A24A]/15 flex items-center justify-between">
                  <span className="text-xs font-bold text-[#E8C878] group-hover:text-white transition-colors">
                    Explore Planning Strategy
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#C8A24A]/15 border border-[#C8A24A]/30 flex items-center justify-center text-[#E8C878] group-hover:bg-[#C8A24A] group-hover:text-[#020B2D] group-hover:translate-x-1 transition-all duration-300">
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
