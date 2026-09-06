import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Flame, Calendar, TrendingUp, Sparkles } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import CalculatorLayout from './CalculatorLayout';
import { calculateRetirement, formatINR } from '../../utils/calculatorEngine';

export default function RetirementCalculator() {
  const [currentAge, setCurrentAge] = useState(30);
  const [retirementAge, setRetirementAge] = useState(60);
  const [monthlyExpensesNow, setMonthlyExpensesNow] = useState(75000);
  const [expectedInflation, setExpectedInflation] = useState(6);
  const [expectedReturn, setExpectedReturn] = useState(12);
  const [existingSavings, setExistingSavings] = useState(1000000);

  const result = useMemo(() => {
    return calculateRetirement(
      currentAge,
      retirementAge,
      monthlyExpensesNow,
      expectedInflation,
      expectedReturn,
      existingSavings
    );
  }, [currentAge, retirementAge, monthlyExpensesNow, expectedInflation, expectedReturn, existingSavings]);

  const handleReset = () => {
    setCurrentAge(30);
    setRetirementAge(60);
    setMonthlyExpensesNow(75000);
    setExpectedInflation(6);
    setExpectedReturn(12);
    setExistingSavings(1000000);
  };

  return (
    <CalculatorLayout
      title="FIRE & Retirement Freedom Planner"
      subtitle="Calculate inflation-adjusted retirement corpus requirements and monthly SIP to achieve financial independence."
      icon={ShieldCheck}
      onReset={handleReset}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Inputs */}
        <div className="lg:col-span-6 p-6 sm:p-8 rounded-3xl bg-[#071C48]/70 border border-[#C8A24A]/30 shadow-2xl backdrop-blur-2xl text-left space-y-5">
          <div className="flex items-center justify-between border-b border-[#C8A24A]/20 pb-3">
            <h3 className="font-serif-luxury text-lg font-bold text-white flex items-center gap-2">
              <Flame className="w-5 h-5 text-[#E8C878]" />
              <span>Retirement Variables</span>
            </h3>
            <span className="text-[10px] uppercase font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/30">
              FIRE Framework
            </span>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-white/80 mb-1">Current Age</label>
              <input
                type="number"
                value={currentAge}
                onChange={(e) => setCurrentAge(Number(e.target.value))}
                className="w-full bg-[#020B2D] border border-white/20 focus:border-[#C8A24A] rounded-xl py-2 px-3 text-white text-xs font-mono"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-white/80 mb-1">Target Retirement Age</label>
              <input
                type="number"
                value={retirementAge}
                onChange={(e) => setRetirementAge(Number(e.target.value))}
                className="w-full bg-[#020B2D] border border-white/20 focus:border-[#C8A24A] rounded-xl py-2 px-3 text-white text-xs font-mono"
              />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs">
              <label className="font-semibold text-white/90">Monthly Living Expenses Today</label>
              <span className="font-mono text-sm font-bold text-[#E8C878]">{formatINR(monthlyExpensesNow)}</span>
            </div>
            <input
              type="number"
              value={monthlyExpensesNow}
              onChange={(e) => setMonthlyExpensesNow(Number(e.target.value))}
              className="w-full bg-[#020B2D] border border-white/20 focus:border-[#C8A24A] rounded-xl py-2.5 px-4 text-white text-xs font-mono"
              step="5000"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-white/80 mb-1">Expected Inflation %</label>
              <input
                type="number"
                value={expectedInflation}
                onChange={(e) => setExpectedInflation(Number(e.target.value))}
                className="w-full bg-[#020B2D] border border-white/20 focus:border-[#C8A24A] rounded-xl py-2 px-3 text-white text-xs font-mono"
                step="0.5"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-white/80 mb-1">Pre-Retirement Return %</label>
              <input
                type="number"
                value={expectedReturn}
                onChange={(e) => setExpectedReturn(Number(e.target.value))}
                className="w-full bg-[#020B2D] border border-white/20 focus:border-[#C8A24A] rounded-xl py-2 px-3 text-white text-xs font-mono"
                step="0.5"
              />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs">
              <label className="font-semibold text-white/90">Existing Retirement Savings / Assets</label>
              <span className="font-mono text-sm font-bold text-emerald-400">{formatINR(existingSavings)}</span>
            </div>
            <input
              type="number"
              value={existingSavings}
              onChange={(e) => setExistingSavings(Number(e.target.value))}
              className="w-full bg-[#020B2D] border border-white/20 focus:border-[#C8A24A] rounded-xl py-2.5 px-4 text-white text-xs font-mono"
              step="50000"
            />
          </div>
        </div>

        {/* Results */}
        <div className="lg:col-span-6 space-y-6 text-left">
          
          <div className="p-6 rounded-3xl bg-gradient-to-r from-[#071C48] via-[#041235] to-[#020B2D] border border-[#C8A24A]/50 shadow-2xl space-y-2 relative overflow-hidden">
            <span className="text-xs uppercase font-mono tracking-widest text-[#E8C878]">REQUIRED RETIREMENT CORPUS AT AGE {retirementAge}</span>
            <div className="text-3xl sm:text-4xl font-bold font-mono text-white">{formatINR(result.requiredCorpus)}</div>
            <p className="text-xs text-[#BAC6DA]/80">
              Estimated to fund 25+ post-retirement years with {expectedInflation}% inflation.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-[#071C48]/80 border border-emerald-500/30 space-y-1">
              <span className="text-[10px] uppercase font-mono text-emerald-400">Required Monthly SIP</span>
              <div className="text-xl font-bold font-mono text-emerald-300">{formatINR(result.requiredMonthlySIP)}</div>
              <div className="text-[10px] text-emerald-400/70">To bridge corpus gap</div>
            </div>

            <div className="p-5 rounded-2xl bg-[#071C48]/80 border border-[#C8A24A]/30 space-y-1">
              <span className="text-[10px] uppercase font-mono text-[#E8C878]">Future Monthly Expense</span>
              <div className="text-xl font-bold font-mono text-[#E8C878]">{formatINR(result.futureMonthlyExpense)}</div>
              <div className="text-[10px] text-white/50">At age {retirementAge}</div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="p-4 rounded-2xl bg-[#071C48]/60 border border-white/10 space-y-2">
            <div className="flex justify-between items-center text-xs font-mono">
              <span className="text-white/70">Existing Savings Progress</span>
              <span className="text-emerald-400 font-bold">{result.progressPct}% Funded</span>
            </div>
            <div className="w-full bg-[#020B2D] h-2.5 rounded-full overflow-hidden border border-white/10">
              <div className="bg-gradient-to-r from-[#C8A24A] to-emerald-400 h-full transition-all duration-500" style={{ width: `${result.progressPct}%` }} />
            </div>
          </div>

          {/* Recharts Chart */}
          <div className="p-6 rounded-3xl bg-[#071C48]/70 border border-[#C8A24A]/30 shadow-2xl space-y-3">
            <h4 className="text-xs font-bold font-mono text-[#E8C878] uppercase tracking-wider">
              Corpus Accumulation Path (Age {currentAge} → {retirementAge})
            </h4>
            <div className="h-56 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={result.projectionData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
                  <XAxis dataKey="year" stroke="#BAC6DA60" tick={{ fontSize: 10, fill: '#BAC6DA' }} />
                  <YAxis stroke="#BAC6DA60" tick={{ fontSize: 10, fill: '#BAC6DA' }} tickFormatter={(val) => formatINR(val, true)} />
                  <Tooltip formatter={(val) => [formatINR(val), 'Accumulated']} contentStyle={{ backgroundColor: '#071C48', borderRadius: '10px' }} />
                  <Area type="monotone" dataKey="accumulated" stroke="#E8C878" fill="#C8A24A30" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

        </div>

      </div>
    </CalculatorLayout>
  );
}
