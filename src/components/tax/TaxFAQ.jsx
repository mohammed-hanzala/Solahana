import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';

export default function TaxFAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'What is tax planning and how is it legal?',
      a: 'Tax planning is the systematic, legal arrangement of your financial affairs to make full use of all statutory deductions, exemptions, allowances, and tax shields granted by the Income Tax Act (such as Section 80C, 80D, 80CCD, and Section 24b).'
    },
    {
      q: 'Why should tax planning happen throughout the year?',
      a: 'Year-round tax planning avoids frantic, sub-optimal March investments. It allows you to set up automated monthly ELSS SIPs, monitor advance tax liabilities, harvest up to ₹1 Lakh in tax-free capital gains (LTCG), and keep documents organized continuous audit readiness.'
    },
    {
      q: 'Can tax planning support my long-term life goals?',
      a: 'Absolutely! At SOLAHANA, we never view tax saving as an isolated chore. We link ELSS mutual fund investments directly to 3+ year goals (like home down-payments) and NPS contributions to your FIRE retirement corpus.'
    },
    {
      q: 'What documents are most useful during a tax planning review?',
      a: 'Key documents include Form 16 (for salaried professionals), Form 26AS and AIS credit statements, home loan interest certificates (Section 24b), capital gains statements from broking/mutual fund accounts, and health insurance premium receipts (Section 80D).'
    },
    {
      q: 'How often should I review my tax plan with a financial planner?',
      a: 'We recommend auditing your tax plan twice a year: first in April/May during financial year kickoff to set up declarations and choose between Old vs New Tax Regimes, and again in December/January to execute capital gains loss harvesting and top up remaining 80C/80D gaps.'
    }
  ];

  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-[#020B2D]">
      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#C8A24A]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#071C48] border border-[#C8A24A]/30 text-[#E8C878] text-xs font-semibold uppercase tracking-widest font-sora">
            <HelpCircle className="w-3.5 h-3.5 text-[#C8A24A]" />
            <span>TAX GUIDANCE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-serif-luxury font-bold text-[#F8F7F3] tracking-tight">
            Frequently Asked Tax Planning Questions.
          </h2>

          <p className="text-base text-[#BAC6DA] font-inter">
            Clear, practical answers regarding tax shields, statutory deductions, and regime selection.
          </p>
        </div>

        {/* Accordion Stack */}
        <div className="space-y-4 text-left">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="rounded-2xl bg-[#071C48]/70 border border-[#C8A24A]/25 overflow-hidden transition-all duration-300 backdrop-blur-xl shadow-[0_10px_30px_rgba(2,11,45,0.6)]"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between space-x-4 focus:outline-none group"
                >
                  <span className="text-base sm:text-lg font-serif-luxury font-bold text-[#F8F7F3] group-hover:text-[#E8C878] transition-colors">
                    {faq.q}
                  </span>

                  <div className="w-8 h-8 rounded-full bg-[#020B2D] border border-[#C8A24A]/30 flex items-center justify-center text-[#E8C878] shrink-0 group-hover:bg-[#C8A24A] group-hover:text-[#020B2D] transition-colors">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-5 sm:px-6 pb-6 pt-0 text-xs sm:text-sm text-[#BAC6DA] leading-relaxed border-t border-[#C8A24A]/10 font-inter"
                    >
                      <p className="pt-4">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
