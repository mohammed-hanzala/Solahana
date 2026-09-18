import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, RotateCcw, Bookmark, Sparkles, CheckCircle2, AlertCircle } from 'lucide-react';
import { formatINR } from '../../utils/calculatorEngine';

export default function RiskCalculator() {
  const [annualIncome, setAnnualIncome] = useState(1800000);
  const [existingCover, setExistingCover] = useState(5000000);
  const [outstandingLoans, setOutstandingLoans] = useState(2500000);
  const [monthlyExpenses, setMonthlyExpenses] = useState(75000);
  const [dependentsCount, setDependentsCount] = useState(3);
  const [isSaved, setIsSaved] = useState(false);

  // Compute Human Life Value (HLV) & Cover Gap
  const riskResult = useMemo(() => {
    const inc = Math.max(0, Number(annualIncome) || 0);
    const existing = Math.max(0, Number(existingCover) || 0);
    const loans = Math.max(0, Number(outstandingLoans) || 0);
    const expenses = Math.max(0, Number(monthlyExpenses) || 0);

    // HLV Formula: 12x Annual Income + Total Loans + 10 Years Living Expense Reserve
    const incomeReplacement = inc * 12;
    const expenseBuffer = expenses * 12 * 10;
    const totalRequiredCover = incomeReplacement + loans + expenseBuffer;

    const coverGap = Math.max(0, totalRequiredCover - existing);
    const adequacyPct = totalRequiredCover > 0 ? Math.min(100, Math.round((existing / totalRequiredCover) * 100)) : 100;

    return {
      totalRequiredCover,
      coverGap,
      adequacyPct,
      incomeReplacement,
    };
  }, [annualIncome, existingCover, outstandingLoans, monthlyExpenses, dependentsCount]);

  const handleReset = () => {
    setAnnualIncome(1800000);
    setExistingCover(5000000);
    setOutstandingLoans(2500000);
    setMonthlyExpenses(75000);
    setDependentsCount(3);
    setIsSaved(false);
  };

  const handleSave = () => {
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  return (
    <section id="risk-calculator" className="py-16 sm:py-24 bg-[#FAF8F5] relative overflow-hidden border-t border-[#E7D7B5]">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#C89B3C]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E7D7B5] text-[#B8860B] text-xs font-semibold uppercase tracking-widest font-sora shadow-xs">
            <ShieldCheck className="w-3.5 h-3.5 text-[#C89B3C]" />
            <span>HUMAN LIFE VALUE ENGINE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-[#0F172A]">
            Human Life Value &amp; Risk Cover Calculator
          </h2>
          <p className="text-sm sm:text-base text-[#475569]">
            Calculate your exact life insurance protection gap based on income replacement, loans, and family living expenses.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Box: Input Controls */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 p-6 sm:p-8 rounded-3xl bg-white border border-[#E7D7B5] shadow-xl text-left space-y-6"
          >
            {/* Header Strip */}
            <div className="flex items-center justify-between border-b border-[#E7D7B5]/60 pb-4">
              <h3 className="font-serif-luxury text-lg font-bold text-[#0F172A] flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#C89B3C]" />
                <span>Protection Parameters</span>
              </h3>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleReset}
                  className="p-2 rounded-xl bg-[#FAF8F5] border border-[#E7D7B5] text-[#64748B] hover:text-[#0F172A] hover:border-[#C89B3C] transition-colors text-xs font-medium flex items-center gap-1 cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset</span>
                </button>
                <button
                  onClick={handleSave}
                  className="p-2 rounded-xl bg-[#FAF8F5] border border-[#E7D7B5] text-[#B8860B] hover:border-[#C89B3C] transition-colors text-xs font-semibold flex items-center gap-1 cursor-pointer"
                >
                  <Bookmark className="w-3.5 h-3.5 text-[#C89B3C]" />
                  <span>{isSaved ? 'Saved!' : 'Save'}</span>
                </button>
              </div>
            </div>

            {/* Annual Income */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs">
                <label className="font-semibold text-[#0F172A]">Annual Income (₹)</label>
                <span className="font-mono text-sm font-bold text-[#B8860B]">{formatINR(annualIncome)}</span>
              </div>
              <input
                type="number"
                min="300000"
                max="50000000"
                step="50000"
                value={annualIncome}
                onChange={(e) => setAnnualIncome(Number(e.target.value))}
                className="w-full bg-[#FAF8F5] border border-[#E7D7B5] focus:border-[#C89B3C] focus:ring-1 focus:ring-[#C89B3C] rounded-xl py-2.5 px-4 text-[#0F172A] text-xs font-mono outline-none"
              />
              <input
                type="range"
                min="500000"
                max="5000000"
                step="50000"
                value={annualIncome}
                onChange={(e) => setAnnualIncome(Number(e.target.value))}
                className="w-full accent-[#C89B3C] cursor-pointer h-1.5 bg-[#FAF8F5] rounded-lg"
              />
            </div>

            {/* Existing Life Cover */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs">
                <label className="font-semibold text-[#0F172A]">Existing Life Insurance Cover (₹)</label>
                <span className="font-mono text-sm font-bold text-emerald-700">{formatINR(existingCover)}</span>
              </div>
              <input
                type="number"
                min="0"
                max="100000000"
                step="100000"
                value={existingCover}
                onChange={(e) => setExistingCover(Number(e.target.value))}
                className="w-full bg-[#FAF8F5] border border-[#E7D7B5] focus:border-[#C89B3C] focus:ring-1 focus:ring-[#C89B3C] rounded-xl py-2.5 px-4 text-[#0F172A] text-xs font-mono outline-none"
              />
              <input
                type="range"
                min="0"
                max="20000000"
                step="250000"
                value={existingCover}
                onChange={(e) => setExistingCover(Number(e.target.value))}
                className="w-full accent-[#C89B3C] cursor-pointer h-1.5 bg-[#FAF8F5] rounded-lg"
              />
            </div>

            {/* Outstanding Loans & Monthly Expenses */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="block text-xs font-semibold text-[#0F172A]">Outstanding Loans (₹)</label>
                <input
                  type="number"
                  min="0"
                  max="50000000"
                  step="100000"
                  value={outstandingLoans}
                  onChange={(e) => setOutstandingLoans(Number(e.target.value))}
                  className="w-full bg-[#FAF8F5] border border-[#E7D7B5] focus:border-[#C89B3C] focus:ring-1 focus:ring-[#C89B3C] rounded-xl py-2.5 px-3 text-[#0F172A] text-xs font-mono outline-none"
                />
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-semibold text-[#0F172A]">Monthly Expenses (₹)</label>
                <input
                  type="number"
                  min="10000"
                  max="1000000"
                  step="5000"
                  value={monthlyExpenses}
                  onChange={(e) => setMonthlyExpenses(Number(e.target.value))}
                  className="w-full bg-[#FAF8F5] border border-[#E7D7B5] focus:border-[#C89B3C] focus:ring-1 focus:ring-[#C89B3C] rounded-xl py-2.5 px-3 text-[#0F172A] text-xs font-mono outline-none"
                />
              </div>
            </div>

            {/* Number of Dependents */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs">
                <label className="font-semibold text-[#0F172A]">Number of Dependents</label>
                <span className="font-mono text-sm font-bold text-[#B8860B]">{dependentsCount} Dependents</span>
              </div>
              <input
                type="range"
                min="1"
                max="8"
                value={dependentsCount}
                onChange={(e) => setDependentsCount(Number(e.target.value))}
                className="w-full accent-[#C89B3C] cursor-pointer h-1.5 bg-[#FAF8F5] rounded-lg"
              />
            </div>

          </motion.div>

          {/* Right Box: Output Results Panel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-6 space-y-6 text-left"
          >
            {/* Primary Cover Gap Result Card */}
            <div className="p-6 sm:p-7 rounded-3xl bg-gradient-to-br from-[#FFFDF9] via-[#FAF8F5] to-white border-2 border-[#C89B3C] shadow-xl space-y-3 relative overflow-hidden">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase font-mono tracking-widest text-[#B8860B] font-bold">
                  RECOMMENDED ADDITIONAL LIFE COVER
                </span>
                <span className={`px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold flex items-center gap-1 ${riskResult.coverGap === 0 ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-amber-50 text-amber-700 border border-amber-200'}`}>
                  {riskResult.coverGap === 0 ? <CheckCircle2 className="w-3 h-3" /> : <AlertCircle className="w-3 h-3" />}
                  {riskResult.coverGap === 0 ? 'Fully Shielded' : 'Protection Gap'}
                </span>
              </div>

              <div className="text-3xl sm:text-4xl font-bold font-mono text-[#0F172A]">
                {formatINR(riskResult.coverGap)}
              </div>

              <p className="text-xs text-[#64748B] font-sans">
                {riskResult.coverGap > 0
                  ? `Additional pure term insurance required to fully ring-fence your family's financial security.`
                  : `Congratulations! Your existing insurance cover of ${formatINR(existingCover)} fully meets your Human Life Value requirement.`}
              </p>
            </div>

            {/* Secondary Metric Cards Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-white border border-[#E7D7B5] shadow-sm space-y-1.5">
                <span className="text-[10px] uppercase font-mono font-bold text-[#64748B]">Total Required Cover (HLV)</span>
                <div className="text-xl sm:text-2xl font-bold font-mono text-[#0F172A]">{formatINR(riskResult.totalRequiredCover)}</div>
                <div className="text-[10px] text-[#64748B] font-medium">Income + Loans + Expense Shield</div>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-emerald-500/30 shadow-sm space-y-1.5">
                <span className="text-[10px] uppercase font-mono font-bold text-emerald-700">Insurance Adequacy</span>
                <div className="text-xl sm:text-2xl font-bold font-mono text-emerald-800">{riskResult.adequacyPct}%</div>
                <div className="text-[10px] text-emerald-700/80 font-medium">Of HLV target covered</div>
              </div>
            </div>

            {/* Protection Progress Bar */}
            <div className="p-5 rounded-2xl bg-white border border-[#E7D7B5] shadow-sm space-y-2.5">
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="text-[#64748B] font-semibold">Current Cover Adequacy</span>
                <span className="text-emerald-700 font-bold">{riskResult.adequacyPct}% Protected</span>
              </div>
              <div className="w-full bg-[#FAF8F5] h-3 rounded-full overflow-hidden border border-[#E7D7B5]">
                <div
                  className="bg-gradient-to-r from-[#C89B3C] to-emerald-600 h-full transition-all duration-500 rounded-full"
                  style={{ width: `${riskResult.adequacyPct}%` }}
                />
              </div>
            </div>

            {/* Protection Breakdown */}
            <div className="p-6 rounded-3xl bg-white border border-[#E7D7B5] shadow-xl space-y-3">
              <h4 className="text-xs font-bold font-mono text-[#0F172A] uppercase tracking-wider flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#C89B3C]" />
                <span>Human Life Value (HLV) Components</span>
              </h4>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between items-center py-1.5 border-b border-[#E7D7B5]/50">
                  <span className="text-[#64748B]">12x Annual Income Replacement</span>
                  <span className="font-mono font-bold text-[#0F172A]">{formatINR(riskResult.incomeReplacement)}</span>
                </div>
                <div className="flex justify-between items-center py-1.5 border-b border-[#E7D7B5]/50">
                  <span className="text-[#64748B]">Outstanding Loans &amp; Mortgages</span>
                  <span className="font-mono font-bold text-[#0F172A]">{formatINR(outstandingLoans)}</span>
                </div>
                <div className="flex justify-between items-center py-1.5">
                  <span className="text-[#64748B]">10-Year Family Living Expense Reserve</span>
                  <span className="font-mono font-bold text-[#0F172A]">{formatINR(monthlyExpenses * 12 * 10)}</span>
                </div>
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
