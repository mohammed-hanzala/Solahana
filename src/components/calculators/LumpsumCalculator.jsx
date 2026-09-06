import React, { useState, useMemo } from 'react';
import { PieChart as PieIcon, TrendingUp, Sparkles, Calendar } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import CalculatorLayout from './CalculatorLayout';
import { calculateLumpsum, formatINR } from '../../utils/calculatorEngine';

export default function LumpsumCalculator() {
  const [principalAmount, setPrincipalAmount] = useState(500000);
  const [returnRate, setReturnRate] = useState(12);
  const [durationYears, setDurationYears] = useState(10);

  const result = useMemo(() => {
    return calculateLumpsum(principalAmount, returnRate, durationYears);
  }, [principalAmount, returnRate, durationYears]);

  const handleReset = () => {
    setPrincipalAmount(500000);
    setReturnRate(12);
    setDurationYears(10);
  };

  return (
    <CalculatorLayout
      title="Lumpsum Investment Calculator"
      subtitle="Simulate potential future growth and compound wealth from a single initial investment."
      icon={PieIcon}
      onReset={handleReset}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-left">
        
        {/* Controls */}
        <div className="lg:col-span-6 p-6 sm:p-8 rounded-3xl bg-[#071C48]/70 border border-[#C8A24A]/30 shadow-2xl backdrop-blur-2xl space-y-6">
          <div className="flex items-center justify-between border-b border-[#C8A24A]/20 pb-3">
            <h3 className="font-serif-luxury text-lg font-bold text-white flex items-center gap-2">
              <PieIcon className="w-5 h-5 text-[#E8C878]" />
              <span>Investment Details</span>
            </h3>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs">
              <label className="font-semibold text-white/90">Total Initial Deposit</label>
              <span className="font-mono text-sm font-bold text-[#E8C878]">{formatINR(principalAmount)}</span>
            </div>
            <input
              type="number"
              value={principalAmount}
              onChange={(e) => setPrincipalAmount(Number(e.target.value))}
              className="w-full bg-[#020B2D] border border-white/20 focus:border-[#C8A24A] rounded-xl py-2.5 px-4 text-white text-xs font-mono"
              step="25000"
            />
            <input
              type="range"
              min="10000"
              max="5000000"
              step="25000"
              value={principalAmount}
              onChange={(e) => setPrincipalAmount(Number(e.target.value))}
              className="w-full accent-[#C8A24A] cursor-pointer h-1.5 bg-[#020B2D] rounded-lg"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs">
              <label className="font-semibold text-white/90">Expected Annual CAGR (%)</label>
              <span className="font-mono text-sm font-bold text-[#E8C878]">{returnRate}% p.a.</span>
            </div>
            <input
              type="range"
              min="1"
              max="30"
              step="0.5"
              value={returnRate}
              onChange={(e) => setReturnRate(Number(e.target.value))}
              className="w-full accent-[#C8A24A] cursor-pointer h-1.5 bg-[#020B2D] rounded-lg"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs">
              <label className="font-semibold text-white/90">Time Horizon (Years)</label>
              <span className="font-mono text-sm font-bold text-[#E8C878]">{durationYears} Years</span>
            </div>
            <input
              type="range"
              min="1"
              max="35"
              value={durationYears}
              onChange={(e) => setDurationYears(Number(e.target.value))}
              className="w-full accent-[#C8A24A] cursor-pointer h-1.5 bg-[#020B2D] rounded-lg"
            />
          </div>
        </div>

        {/* Results */}
        <div className="lg:col-span-6 space-y-6">
          
          <div className="p-6 rounded-3xl bg-gradient-to-r from-[#071C48] via-[#041235] to-[#020B2D] border border-[#C8A24A]/50 shadow-2xl space-y-2">
            <span className="text-xs uppercase font-mono tracking-widest text-[#E8C878]">ESTIMATED MATURITY VALUE</span>
            <div className="text-3xl sm:text-4xl font-bold font-mono text-white">{formatINR(result.futureValue)}</div>
            <p className="text-xs text-[#BAC6DA]/80">
              Future worth of your initial {formatINR(principalAmount)} after {durationYears} years.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-[#071C48]/80 border border-[#3B82F6]/30 space-y-1">
              <span className="text-[10px] uppercase font-mono text-blue-300">Initial Deposit</span>
              <div className="text-xl font-bold font-mono text-white">{formatINR(result.principalAmount)}</div>
            </div>

            <div className="p-5 rounded-2xl bg-[#071C48]/80 border border-emerald-500/30 space-y-1">
              <span className="text-[10px] uppercase font-mono text-emerald-400">Total Profit Gain</span>
              <div className="text-xl font-bold font-mono text-emerald-300">+{formatINR(result.totalGain)}</div>
              <div className="text-[10px] text-emerald-400/70 font-semibold">+{result.gainPct}% Growth</div>
            </div>
          </div>

          {/* Growth Chart */}
          <div className="p-6 rounded-3xl bg-[#071C48]/70 border border-[#C8A24A]/30 shadow-2xl space-y-3">
            <h4 className="text-xs font-bold font-mono text-[#E8C878] uppercase tracking-wider">
              Compounded Lumpsum Timeline
            </h4>
            <div className="h-52 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={result.yearlyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
                  <XAxis dataKey="year" stroke="#BAC6DA60" tick={{ fontSize: 10, fill: '#BAC6DA' }} />
                  <YAxis stroke="#BAC6DA60" tick={{ fontSize: 10, fill: '#BAC6DA' }} tickFormatter={(val) => formatINR(val, true)} />
                  <Tooltip formatter={(val) => [formatINR(val), 'Value']} contentStyle={{ backgroundColor: '#071C48', borderRadius: '10px' }} />
                  <Area type="monotone" dataKey="totalValue" stroke="#C8A24A" fill="#C8A24A30" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

        </div>

      </div>
    </CalculatorLayout>
  );
}
