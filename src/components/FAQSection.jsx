import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle, Sparkles } from 'lucide-react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'What is financial planning?',
      a: 'Financial planning is a structured process of organizing your income, cashflow, liabilities, emergency reserves, tax optimization, and investments around your concrete life goals — such as buying a home, funding children’s education, and achieving early retirement (FIRE).',
    },
    {
      q: 'How is SOLAHANA different from investment apps?',
      a: 'Unlike traditional trading apps that focus on short-term buying/selling of stocks, SOLAHANA focuses 100% on goal-based wealth planning. We start by defining your life milestones, structuring risk protection, and optimizing your tax slabs before allocating assets.',
    },
    {
      q: 'Can I plan for multiple goals together?',
      a: 'Yes! SOLAHANA’s multi-asset planning framework allows you to track and manage multiple goals simultaneously — including emergency reserves, retirement FIRE targets, home down payments, and children’s university funds — under one unified roadmap.',
    },
    {
      q: 'Does SOLAHANA help with tax planning?',
      a: 'Absoluted. We proactively optimize your tax liabilities across Section 80C, Section 80D, NPS Tier 1, and automated capital gains tax-loss harvesting, helping you keep more of your investment returns legally.',
    },
    {
      q: 'Can I review my financial plan regularly?',
      a: 'Yes. Financial planning is an evolving process. SOLAHANA provides periodic reviews, rebalancing alerts, and strategy updates whenever your salary increases, career advances, or life priorities shift.',
    },
    {
      q: 'Who should use SOLAHANA?',
      a: 'SOLAHANA is tailored for salaried professionals, business owners, NRI families, and young professionals looking for a disciplined, goal-aligned, and transparent fiduciary advisory platform.',
    },
  ];

  return (
    <section className="relative z-10 py-24 bg-gradient-to-b from-[#020B2D] via-[#041442] to-[#020B2D] border-t border-[#C8A24A]/15 overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/3 left-10 w-[550px] h-[550px] bg-[#C8A24A]/8 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
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
            <span className="font-sora tracking-wide uppercase text-[11px]">FREQUENTLY ASKED QUESTIONS</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-[#F8F7F3] tracking-tight leading-tight"
          >
            Questions People Ask Before{' '}
            <span className="gold-gradient-text italic font-serif-luxury">Planning Their Finances</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-[#BAC6DA] font-inter leading-relaxed"
          >
            Everything you need to know about starting your financial plan with SOLAHANA.
          </motion.p>
        </div>

        {/* ACCORDION PANELS */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-[#071C48]/90 border-[#C8A24A]/60 shadow-[0_10px_30px_rgba(200,162,74,0.18)]'
                    : 'bg-[#071C48]/50 border-[#C8A24A]/20 hover:border-[#C8A24A]/40'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between space-x-4 cursor-pointer focus:outline-none"
                >
                  <span className="text-base sm:text-lg font-serif-luxury font-bold text-[#F8F7F3] flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-[#E8C878] shrink-0" />
                    {faq.q}
                  </span>

                  <div className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-colors ${
                    isOpen ? 'bg-[#C8A24A] text-[#020B2D] border-[#C8A24A]' : 'bg-[#020B2D]/80 text-[#E8C878] border-[#C8A24A]/30'
                  }`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6 pt-1 text-sm text-[#BAC6DA] font-inter leading-relaxed border-t border-[#C8A24A]/15 ml-8">
                        {faq.a}
                      </div>
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
