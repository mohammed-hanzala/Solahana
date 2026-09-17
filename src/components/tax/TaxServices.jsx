import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, ArrowUpRight, Calculator, PieChart, Landmark, Layers } from 'lucide-react';

export default function TaxServices() {
  const services = [
    {
      title: 'Section 80C & 80D Optimization',
      desc: 'Smart structuring of ELSS, Term Insurance, Provident Fund, and Health Insurance for maximum statutory deductions.',
      icon: ShieldCheck,
      badge: 'Up to ₹2 Lakh Deductions',
    },
    {
      title: 'NPS Section 80CCD(1B) Strategy',
      desc: 'Exclusive additional tax deduction of ₹50,000 via National Pension System Tier 1 investments.',
      icon: Landmark,
      badge: 'Extra ₹50,000 Benefit',
    },
    {
      title: 'Capital Gains Tax Loss Harvesting',
      desc: 'Automated tax optimization strategies to offset equity/mutual fund capital gains legally prior to fiscal year end.',
      icon: PieChart,
      badge: 'LTCG / STCG Harvesting',
    },
    {
      title: 'HRA & Home Loan Tax Benefits',
      desc: 'Optimized claim calculations on House Rent Allowance, Section 24(b) home loan interest, and principal repayments.',
      icon: Layers,
      badge: 'Salaried & Business Owners',
    },
  ];

  return (
    <section id="tax-services" className="py-20 md:py-28 relative overflow-hidden bg-[#FCFAF6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#C89B3C]/10 border border-[#E7D7B5] text-[#C89B3C] text-xs font-semibold uppercase tracking-widest font-sora">
            <Calculator className="w-3.5 h-3.5" />
            <span>SPECIALIZED TAX PLANNING</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif-luxury font-bold text-[#1A1A1A]">
            Comprehensive Tax Structuring Solutions
          </h2>
          <p className="text-base text-[#555555] font-inter">
            Fiduciary tax optimization designed for high-earning professionals and business owners.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((srv, idx) => {
            const IconComp = srv.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-8 rounded-3xl bg-white border border-[#E7D7B5] hover:border-[#C89B3C] shadow-sm transition-all duration-300 flex flex-col justify-between group cursor-pointer"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-[#C89B3C]/10 text-[#C89B3C] group-hover:bg-[#C89B3C] group-hover:text-white transition-colors flex items-center justify-center">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-sora font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-[#FCFAF6] text-[#C89B3C] border border-[#E7D7B5]">
                      {srv.badge}
                    </span>
                  </div>
                  <h3 className="text-xl font-serif-luxury font-bold text-[#1A1A1A] group-hover:text-[#C89B3C] transition-colors">
                    {srv.title}
                  </h3>
                  <p className="text-xs text-[#555555] font-inter leading-relaxed">
                    {srv.desc}
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-[#E7D7B5] flex items-center justify-between text-xs font-semibold text-[#C89B3C]">
                  <span>Explore Strategy Details</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
