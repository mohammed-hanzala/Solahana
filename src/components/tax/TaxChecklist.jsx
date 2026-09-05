import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckSquare, ShieldCheck, Calculator, FolderCheck, Target, RefreshCw, Sparkles, Check } from 'lucide-react';

export default function TaxChecklist() {
  const [checkedState, setCheckedState] = useState([true, true, true, false, false, false]);

  const toggleCheck = (idx) => {
    const next = [...checkedState];
    next[idx] = !next[idx];
    setCheckedState(next);
  };

  const checklistItems = [
    {
      title: 'Review Total Income Streams',
      subtitle: 'Salary, dividends, capital gains, rental income & business profits',
      description: 'Audit gross total income across all heads to estimate taxable bracket and evaluate deduction requirements.',
      icon: Calculator
    },
    {
      title: 'Review Section 80C & NPS Investments',
      subtitle: 'Verify ₹1.5L 80C limit + ₹50k 80CCD(1B) NPS top-up',
      description: 'Check active ELSS mutual fund SIPs, EPF/PPF contributions, and claim the exclusive ₹50,000 NPS tax shield.',
      icon: ShieldCheck
    },
    {
      title: 'Check Section 80D Health Cover',
      subtitle: 'Self & family (₹25k) + Senior citizen parents (₹50k)',
      description: 'Ensure health insurance premiums and ₹5,000 preventive check-up receipts are documented for maximum deductions.',
      icon: CheckSquare
    },
    {
      title: 'Review Life Goal Contributions',
      subtitle: 'Align tax-saving funds to concrete milestone timelines',
      description: 'Confirm that tax-saving investments serve real goals (e.g. home down payment or retirement) rather than locking capital aimlessly.',
      icon: Target
    },
    {
      title: 'Organize Tax Documents',
      subtitle: 'Form 16, Form 26AS, AIS credit statements & interest certificates',
      description: 'Consolidate Form 16, capital gains statements, home loan interest certificates, and donation receipts in one secure folder.',
      icon: FolderCheck
    },
    {
      title: 'Schedule Annual Tax Regime Audit',
      subtitle: 'Compare Old vs New Tax Regime with an expert advisor',
      description: 'Evaluate tax liabilities under both regimes for FY 2025-26 to choose the regime that delivers the highest net post-tax savings.',
      icon: RefreshCw
    }
  ];

  const completedCount = checkedState.filter(Boolean).length;
  const progressPercent = Math.round((completedCount / checklistItems.length) * 100);

  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-[#071C48]/40 border-t border-[#C8A24A]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#071C48] border border-[#C8A24A]/30 text-[#E8C878] text-xs font-semibold uppercase tracking-widest font-sora">
            <Sparkles className="w-3.5 h-3.5 text-[#C8A24A]" />
            <span>INTERACTIVE CHECKLIST</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-[#F8F7F3] tracking-tight">
            Your Tax Planning Checklist.
          </h2>

          <p className="text-base sm:text-lg text-[#BAC6DA] font-inter">
            Interactive checklist to ensure complete tax readiness and zero missed deductions.
          </p>

          {/* Interactive Progress Meter */}
          <div className="pt-4 max-w-md mx-auto">
            <div className="flex items-center justify-between text-xs text-[#BAC6DA] font-sora mb-2">
              <span>Tax Readiness Score:</span>
              <span className="text-[#E8C878] font-bold">{completedCount} of 6 Tasks Done ({progressPercent}%)</span>
            </div>
            <div className="w-full h-2 rounded-full bg-[#020B2D] border border-[#C8A24A]/30 overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-[#E8C878] to-[#B8862B] transition-all duration-500" 
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
        </div>

        {/* 6 Luxury Checklist Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {checklistItems.map((item, idx) => {
            const isChecked = checkedState[idx];
            const IconComp = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ y: -6 }}
                onClick={() => toggleCheck(idx)}
                className={`p-7 rounded-3xl border transition-all duration-300 backdrop-blur-xl text-left flex flex-col justify-between cursor-pointer group ${
                  isChecked
                    ? 'bg-[#071C48]/95 border-[#E8C878]/60 shadow-[0_10px_30px_rgba(200,162,74,0.15)]'
                    : 'bg-[#020B2D]/90 border-[#C8A24A]/25 hover:border-[#C8A24A]/50 shadow-[0_10px_30px_rgba(2,11,45,0.7)]'
                }`}
              >
                <div className="space-y-4">
                  {/* Top Bar with Icon & Interactive Checkbox */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#E8C878]/20 to-[#C8A24A]/10 border border-[#E8C878]/40 flex items-center justify-center text-[#E8C878] group-hover:bg-[#C8A24A] group-hover:text-[#020B2D] transition-colors">
                      <IconComp className="w-6 h-6" />
                    </div>

                    {/* Checkbox Pill */}
                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center transition-all ${
                      isChecked
                        ? 'bg-gradient-to-br from-[#E8C878] to-[#B8862B] text-[#020B2D] shadow-[0_0_10px_rgba(200,162,74,0.4)]'
                        : 'bg-[#020B2D] border border-[#C8A24A]/30 text-transparent'
                    }`}>
                      <Check className="w-5 h-5 stroke-[3]" />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-xl font-serif-luxury font-bold text-[#F8F7F3] group-hover:text-[#E8C878] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs font-semibold text-[#E8C878]">
                      {item.subtitle}
                    </p>
                  </div>

                  <p className="text-xs text-[#BAC6DA] leading-relaxed font-inter">
                    {item.description}
                  </p>
                </div>

                {/* Card Status */}
                <div className="mt-6 pt-3 border-t border-[#C8A24A]/15 flex items-center justify-between text-[11px] font-sora">
                  <span className="text-[#BAC6DA]">Status</span>
                  <span className={isChecked ? 'text-emerald-400 font-bold' : 'text-[#BAC6DA]/60'}>
                    {isChecked ? '✓ Completed' : 'Click to Mark Done'}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
