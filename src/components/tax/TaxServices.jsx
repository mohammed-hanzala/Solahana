import React from 'react';
import { motion } from 'framer-motion';
import { Calculator, TrendingUp, Sparkles, ShieldCheck, Globe, RefreshCw, ArrowRight } from 'lucide-react';

export default function TaxServices({ onSelectService }) {
  const services = [
    {
      id: 'income-tax',
      title: 'Income Tax Planning',
      description: 'Optimize taxable salary heads, HRA claims, LTA, and statutory deductions to minimize gross tax liability legally.',
      icon: Calculator,
      tag: 'Salary & Professional'
    },
    {
      id: 'investment-tax',
      title: 'Investment Tax Planning',
      description: 'Full utilization of Section 80C ₹1.5 Lakh limit via ELSS direct funds matched to your long-term wealth goals.',
      icon: TrendingUp,
      tag: 'Section 80C'
    },
    {
      id: 'capital-gains',
      title: 'Capital Gains Planning',
      description: 'Harvest up to ₹1,00,000 tax-free long-term capital gains annually and execute strategic tax-loss harvesting.',
      icon: Sparkles,
      tag: 'LTCG Harvesting'
    },
    {
      id: 'retirement-tax',
      title: 'Retirement Tax Planning',
      description: 'Claim an additional ₹50,000 deduction under Section 80CCD(1B) via NPS and structure tax-free retirement payouts.',
      icon: ShieldCheck,
      tag: 'NPS Section 80CCD'
    },
    {
      id: 'nri-tax',
      title: 'NRI Tax Guidance',
      description: 'DTAA double-taxation avoidance, NRE/NRO interest exemptions, and tax advisory for overseas remittances.',
      icon: Globe,
      tag: 'Cross-Border'
    },
    {
      id: 'annual-review',
      title: 'Annual Tax Review',
      description: 'Comprehensive Old vs New Tax Regime evaluation and annual tax audit to ensure maximum post-tax net worth.',
      icon: RefreshCw,
      tag: 'Regime Audit'
    }
  ];

  return (
    <section id="tax-services" className="py-20 md:py-28 relative overflow-hidden bg-[#020B2D]">
      {/* Background Glow */}
      <div className="absolute top-1/3 right-0 w-[600px] h-[400px] bg-[#C8A24A]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#071C48] border border-[#C8A24A]/30 text-[#E8C878] text-xs font-semibold uppercase tracking-widest font-sora">
            <Sparkles className="w-3.5 h-3.5 text-[#C8A24A]" />
            <span>HOLISTIC TAX ADVISORY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-[#F8F7F3] tracking-tight">
            Everything Included In Tax Planning.
          </h2>

          <p className="text-base sm:text-lg text-[#BAC6DA] font-inter">
            Six specialized tax modules working together to protect your returns and boost net compounding.
          </p>
        </div>

        {/* 6 Premium Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((item, index) => {
            const IconComp = item.icon;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -8 }}
                className="p-8 rounded-3xl bg-gradient-to-b from-[#071C48]/95 to-[#020B2D]/95 border border-[#C8A24A]/30 hover:border-[#E8C878]/70 transition-all duration-300 shadow-[0_15px_40px_rgba(2,11,45,0.8)] backdrop-blur-2xl text-left flex flex-col justify-between group cursor-pointer"
                onClick={() => onSelectService && onSelectService(item.id)}
              >
                <div className="space-y-5">
                  
                  {/* Top Bar Icon & Badge */}
                  <div className="flex items-center justify-between">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#E8C878] to-[#B8862B] p-[1px] shadow-[0_0_20px_rgba(200,162,74,0.3)]">
                      <div className="w-full h-full bg-[#020B2D] rounded-[15px] flex items-center justify-center text-[#E8C878] group-hover:bg-[#C8A24A] group-hover:text-[#020B2D] transition-colors">
                        <IconComp className="w-7 h-7" />
                      </div>
                    </div>

                    <span className="text-[10px] font-sora font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-[#020B2D] text-[#E8C878] border border-[#C8A24A]/30">
                      {item.tag}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-1.5">
                    <h3 className="text-2xl font-serif-luxury font-bold text-[#F8F7F3] group-hover:text-[#E8C878] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#BAC6DA] leading-relaxed font-inter">
                      {item.description}
                    </p>
                  </div>

                </div>

                {/* Bottom Action Line */}
                <div className="mt-6 pt-4 border-t border-[#C8A24A]/15 flex items-center justify-between text-xs font-semibold text-[#E8C878] group-hover:text-[#F8F7F3] transition-colors">
                  <span>Learn How It Works</span>
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
