import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, GraduationCap, Home, HeartPulse, TrendingUp, Sparkles, Award } from 'lucide-react';

export default function TaxOpportunities() {
  const opportunities = [
    {
      title: 'Retirement Contributions',
      section: 'Section 80CCD(1B)',
      limit: '₹50,000 Extra Deduction',
      description: 'National Pension System (NPS) offers an exclusive ₹50k tax shield over and above Section 80C limits with tax-free retirement growth.',
      icon: ShieldCheck
    },
    {
      title: 'Insurance Planning',
      section: 'Section 80D',
      limit: 'Up to ₹75,000 Limit',
      description: 'Health insurance premium deductions for self & family (₹25k) plus senior citizen parents (₹50k) with preventive health check-up benefits.',
      icon: HeartPulse
    },
    {
      title: 'Education Planning',
      section: 'Section 80E',
      limit: 'No Upper Limit',
      description: 'Full tax deduction on interest paid for higher education loans for self, spouse, or children for up to 8 consecutive financial years.',
      icon: GraduationCap
    },
    {
      title: 'Home Loan Planning',
      section: 'Section 24(b) & 80C',
      limit: 'Up to ₹3.5 Lakhs Relief',
      description: 'Deduct up to ₹2,00,000 home loan interest under Section 24(b) and principal repayments under Section 80C for self-occupied properties.',
      icon: Home
    },
    {
      title: 'Health Insurance Benefits',
      section: 'Section 80D / 80DDB',
      limit: '₹5,000 Health Check-up',
      description: 'Claim preventive health check-up expenses for family and medical treatment expenses for specified critical illnesses.',
      icon: Award
    },
    {
      title: 'Goal-Based Investments',
      section: 'ELSS Section 80C',
      limit: '₹1.5 Lakhs Limit',
      description: 'Equity Linked Savings Scheme (ELSS) mutual funds feature the shortest 3-year lock-in with dual equity growth and tax savings.',
      icon: TrendingUp
    }
  ];

  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-[#071C48]/30 border-t border-[#C8A24A]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#071C48] border border-[#C8A24A]/30 text-[#E8C878] text-xs font-semibold uppercase tracking-widest font-sora">
            <Sparkles className="w-3.5 h-3.5 text-[#C8A24A]" />
            <span>TAX CODE ADVANTAGES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-[#F8F7F3] tracking-tight">
            Common Tax Saving Opportunities.
          </h2>

          <p className="text-base sm:text-lg text-[#BAC6DA] font-inter">
            Leverage key sections of the Income Tax Act to build long-term wealth while reducing annual tax liability.
          </p>
        </div>

        {/* 6 Opportunities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {opportunities.map((item, idx) => {
            const IconComp = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ y: -6 }}
                className="p-7 rounded-3xl bg-[#020B2D]/95 border border-[#C8A24A]/25 hover:border-[#E8C878]/60 transition-all duration-300 shadow-[0_10px_30px_rgba(2,11,45,0.7)] backdrop-blur-xl text-left flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  {/* Top Bar with Icon & Section Badge */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#E8C878]/20 to-[#C8A24A]/10 border border-[#E8C878]/40 flex items-center justify-center text-[#E8C878] group-hover:bg-[#C8A24A] group-hover:text-[#020B2D] transition-colors">
                      <IconComp className="w-6 h-6" />
                    </div>

                    <span className="text-[10px] font-sora font-semibold uppercase tracking-wider px-2.5 py-1 rounded bg-[#071C48] text-[#E8C878] border border-[#C8A24A]/20">
                      {item.section}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-xl font-serif-luxury font-bold text-[#F8F7F3] group-hover:text-[#E8C878] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs font-semibold text-[#E8C878] font-sora">
                      {item.limit}
                    </p>
                  </div>

                  <p className="text-xs text-[#BAC6DA] leading-relaxed font-inter">
                    {item.description}
                  </p>
                </div>

                {/* Gold Accent Line */}
                <div className="mt-6 pt-3 border-t border-[#C8A24A]/15 flex items-center justify-between text-[11px] text-[#BAC6DA]">
                  <span>Statutory Deduction</span>
                  <span className="text-[#E8C878] font-semibold font-sora">Tax Exempt</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
