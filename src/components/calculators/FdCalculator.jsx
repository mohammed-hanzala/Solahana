import React, { useState, useMemo } from 'react';
import { Building2, ShieldCheck, Sparkles, Percent } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import CalculatorLayout from './CalculatorLayout';
import { calculateFD, formatINR } from '../../utils/calculatorEngine';

export default function FdCalculator() {
  const [depositAmount, setDepositAmount] = useState(200000);
  const [interestRate, setInterestRate] = useState(7.25);
  const [durationYears, setDurationYears] = useState(5);
  const [frequency, setFrequency] = useState('Quarterly');

  const result = useMemo(() => {
    return calculateFD(depositAmount, interestRate, durationYears, frequency);
  }, [depositAmount, interestRate, durationYears, frequency]);

  const handleReset = () => {
    setDepositAmount(200000);
    setInterestRate(7.25);
    setDurationYears(5);
    setFrequency('Quarterly');
  };

  return (
    <CalculatorLayout
      title="Fixed Deposit (FD) Yield Calculator"
      subtitle="Compute guaranteed maturity returns and interest payout across quarterly, monthly, or annual compounding."
      icon={Building2}
      onReset={handleReset}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-left">
        
        {/* Controls */}
        <div className="lg:col-span-6 p-6 sm:p-8 rounded-3xl bg-[#071C48]/70 border border-[#C8A24A]/30 shadow-2xl backdrop-blur-2xl space-y-6">
          <div className="flex items-center justify-between border-b border-[#C8A24A]/20 pb-3">
            <h3 className="font-serif-luxury text-lg font-bold text-white flex items-center gap-2">
              <Building2 className="w-5 h-5 text-[#E8C878]" />
              <span>FD Deposit Parameters</span>
            </h3>
            <span className="text-[10px] uppercase font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/30">
              Guaranteed Yield
            </span>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs">
              <label className="font-semibold text-white/90">Fixed Deposit Amount</label>
              <span className="font-mono text-sm font-bold text-[#E8C878]">{formatINR(depositAmount)}</span>
            </div>
            <input
              type="number"
              value={depositAmount}
              onChange={(e) => setDepositAmount(Number(e.target.value))}
              className="w-full bg-[#020B2D] border border-white/20 focus:border-[#C8A24A] rounded-xl py-2.5 px-4 text-white text-xs font-mono"
              step="10000"
            />
            <input
              type="range"
              min="10000"
              max="2000000"
              step="10000"
              value={depositAmount}
              onChange={(e) => setDepositAmount(Number(e.target.value))}
              className="w-full accent-[#C8A24A] cursor-pointer h-1.5 bg-[#020B2D] rounded-lg"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs">
              <label className="font-semibold text-white/90">Interest Rate (% p.a.)</label>
              <span className="font-mono text-sm font-bold text-[#E8C878]">{interestRate}% p.a.</span>
            </div>
            <input
              type="range"
              min="3"
              max="12"
              step="0.25"
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              className="w-full accent-[#C8A24A] cursor-pointer h-1.5 bg-[#020B2D] rounded-lg"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-white/80 mb-1">Tenure (Years)</label>
              <input
                type="number"
                value={durationYears}
                onChange={(e) => setDurationYears(Number(e.target.value))}
                className="w-full bg-[#020B2D] border border-white/20 focus:border-[#C8A24A] rounded-xl py-2 px-3 text-white text-xs font-mono"
                min="0.5"
                max="20"
                step="0.5"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-white/80 mb-1">Compounding Frequency</label>
              <select
                value={frequency}
                onChange={(e) => setFrequency(e.target.value)}
                className="w-full bg-[#020B2D] border border-white/20 focus:border-[#C8A24A] rounded-xl py-2 px-3 text-white text-xs font-semibold"
              >
                <option value="Quarterly">Quarterly (Standard)</option>
                <option value="Half-Yearly">Half-Yearly</option>
                <option value="Annually">Annually</option>
                <option value="Monthly">Monthly</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="lg:col-span-6 space-y-6">
          
          <div className="p-6 rounded-3xl bg-gradient-to-r from-[#071C48] via-[#041235] to-[#020B2D] border border-[#C8A24A]/50 shadow-2xl space-y-2">
            <span className="text-xs uppercase font-mono tracking-widest text-[#E8C878]">TOTAL MATURITY VALUE</span>
            <div className="text-3xl sm:text-4xl font-bold font-mono text-white">{formatINR(result.maturityAmount)}</div>
            <p className="text-xs text-[#BAC6DA]/80">
              Guaranteed maturity return after {durationYears} years with {frequency.toLowerCase()} compounding.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-[#071C48]/80 border border-[#3B82F6]/30 space-y-1">
              <span className="text-[10px] uppercase font-mono text-blue-300">Principal Deposit</span>
              <div className="text-xl font-bold font-mono text-white">{formatINR(result.depositAmount)}</div>
            </div>

            <div className="p-5 rounded-2xl bg-[#071C48]/80 border border-emerald-500/30 space-y-1">
              <span className="text-[10px] uppercase font-mono text-emerald-400">Total Interest Earned</span>
              <div className="text-xl font-bold font-mono text-emerald-300">+{formatINR(result.totalInterest)}</div>
              <div className="text-[10px] text-emerald-400/70 font-semibold">{result.yieldPct}% Total Yield</div>
            </div>
          </div>

          {/* Bar Chart */}
          <div className="p-6 rounded-3xl bg-[#071C48]/70 border border-[#C8A24A]/30 shadow-2xl space-y-3">
            <h4 className="text-xs font-bold font-mono text-[#E8C878] uppercase tracking-wider">
              Yearly FD Growth Trajectory
            </h4>
            <div className="h-52 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={result.timelineData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
                  <XAxis dataKey="year" stroke="#BAC6DA60" tick={{ fontSize: 10, fill: '#BAC6DA' }} />
                  <YAxis stroke="#BAC6DA60" tick={{ fontSize: 10, fill: '#BAC6DA' }} tickFormatter={(val) => formatINR(val, true)} />
                  <Tooltip formatter={(val) => [formatINR(val), '']} contentStyle={{ backgroundColor: '#071C48', borderRadius: '10px' }} />
                  <Bar dataKey="deposit" name="Deposit" fill="#3B82F6" stackId="a" />
                  <Bar dataKey="interest" name="Interest" fill="#C8A24A" stackId="a" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

        </div>

      </div>
    </CalculatorLayout>
  );
}
