import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, RotateCcw, Bookmark, Sparkles, ShieldCheck } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { calculateSIP, formatINR } from '../../utils/calculatorEngine';

export default function InvestmentCalculator() {
  const [monthlySIP, setMonthlySIP] = useState(25000);
  const [returnRate, setReturnRate] = useState(12);
  const [durationYears, setDurationYears] = useState(15);
  const [stepUpPct, setStepUpPct] = useState(10);
  const [isSaved, setIsSaved] = useState(false);

  const result = useMemo(() => {
    return calculateSIP(monthlySIP, returnRate, durationYears, stepUpPct);
  }, [monthlySIP, returnRate, durationYears, stepUpPct]);

  const handleReset = () => {
    setMonthlySIP(25000);
    setReturnRate(12);
    setDurationYears(15);
    setStepUpPct(10);
    setIsSaved(false);
  };

  const handleSave = () => {
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  return (
    <section id="investment-calculator" className="py-16 sm:py-24 bg-[#FAF8F5] relative overflow-hidden border-t border-[#E7D7B5]">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#C89B3C]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E7D7B5] text-[#B8860B] text-xs font-semibold uppercase tracking-widest font-sora shadow-xs">
            <TrendingUp className="w-3.5 h-3.5 text-[#C89B3C]" />
            <span>WEALTH COMPOUNDING ENGINE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-[#0F172A]">
            Investment &amp; SIP Wealth Calculator
          </h2>
          <p className="text-sm sm:text-base text-[#475569]">
            Simulate how regular monthly investments and annual step-up compounding accelerate long-term net worth.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Card: Input Controls */}
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
                <TrendingUp className="w-5 h-5 text-[#C89B3C]" />
                <span>Investment Inputs</span>
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

            {/* Input 1: Monthly Investment */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs">
                <label className="font-semibold text-[#0F172A]">Monthly Investment Amount</label>
                <span className="font-mono text-sm font-bold text-[#B8860B]">{formatINR(monthlySIP)}</span>
              </div>
              <input
                type="number"
                min="500"
                max="1000000"
                step="500"
                value={monthlySIP}
                onChange={(e) => setMonthlySIP(Number(e.target.value))}
                className="w-full bg-[#FAF8F5] border border-[#E7D7B5] focus:border-[#C89B3C] focus:ring-1 focus:ring-[#C89B3C] rounded-xl py-2.5 px-4 text-[#0F172A] text-xs font-mono outline-none"
              />
              <input
                type="range"
                min="1000"
                max="200000"
                step="1000"
                value={monthlySIP}
                onChange={(e) => setMonthlySIP(Number(e.target.value))}
                className="w-full accent-[#C89B3C] cursor-pointer h-1.5 bg-[#FAF8F5] rounded-lg"
              />
            </div>

            {/* Input 2: Expected Annual Return Rate */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs">
                <label className="font-semibold text-[#0F172A]">Expected Annual Return (%)</label>
                <span className="font-mono text-sm font-bold text-[#B8860B]">{returnRate}% p.a.</span>
              </div>
              <input
                type="number"
                step="0.5"
                min="1"
                max="30"
                value={returnRate}
                onChange={(e) => setReturnRate(Number(e.target.value))}
                className="w-full bg-[#FAF8F5] border border-[#E7D7B5] focus:border-[#C89B3C] focus:ring-1 focus:ring-[#C89B3C] rounded-xl py-2.5 px-4 text-[#0F172A] text-xs font-mono outline-none"
              />
              <input
                type="range"
                min="5"
                max="25"
                step="0.5"
                value={returnRate}
                onChange={(e) => setReturnRate(Number(e.target.value))}
                className="w-full accent-[#C89B3C] cursor-pointer h-1.5 bg-[#FAF8F5] rounded-lg"
              />
            </div>

            {/* Input 3 & 4: Investment Duration & Annual Step-Up */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="block text-xs font-semibold text-[#0F172A]">Investment Duration (Years)</label>
                <input
                  type="number"
                  min="1"
                  max="40"
                  value={durationYears}
                  onChange={(e) => setDurationYears(Number(e.target.value))}
                  className="w-full bg-[#FAF8F5] border border-[#E7D7B5] focus:border-[#C89B3C] focus:ring-1 focus:ring-[#C89B3C] rounded-xl py-2.5 px-3 text-[#0F172A] text-xs font-mono outline-none"
                />
                <input
                  type="range"
                  min="1"
                  max="35"
                  value={durationYears}
                  onChange={(e) => setDurationYears(Number(e.target.value))}
                  className="w-full accent-[#C89B3C] cursor-pointer h-1.5 bg-[#FAF8F5] rounded-lg"
                />
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-semibold text-[#0F172A]">Annual Step-up (%)</label>
                <input
                  type="number"
                  min="0"
                  max="50"
                  value={stepUpPct}
                  onChange={(e) => setStepUpPct(Number(e.target.value))}
                  className="w-full bg-[#FAF8F5] border border-[#E7D7B5] focus:border-[#C89B3C] focus:ring-1 focus:ring-[#C89B3C] rounded-xl py-2.5 px-3 text-[#0F172A] text-xs font-mono outline-none"
                />
                <input
                  type="range"
                  min="0"
                  max="30"
                  step="1"
                  value={stepUpPct}
                  onChange={(e) => setStepUpPct(Number(e.target.value))}
                  className="w-full accent-[#C89B3C] cursor-pointer h-1.5 bg-[#FAF8F5] rounded-lg"
                />
              </div>
            </div>
          </motion.div>

          {/* Right Card: Output Results Panel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-6 space-y-6 text-left"
          >
            {/* Primary Future Value Output */}
            <div className="p-6 sm:p-7 rounded-3xl bg-gradient-to-br from-[#FFFDF9] via-[#FAF8F5] to-white border-2 border-[#C89B3C] shadow-xl space-y-3 relative overflow-hidden">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase font-mono tracking-widest text-[#B8860B] font-bold">
                  PROJECTED FUTURE PORTFOLIO VALUE
                </span>
                <span className="px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-[10px] font-mono font-semibold">
                  +{result.wealthGainPct}% Gain
                </span>
              </div>
              <div className="text-3xl sm:text-4xl font-bold font-mono text-[#0F172A]">
                {formatINR(result.futureValue)}
              </div>
              <p className="text-xs text-[#64748B] font-sans">
                Projected total portfolio wealth after {durationYears} years with {stepUpPct}% annual SIP step-up compounding.
              </p>
            </div>

            {/* Secondary Metric Cards Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-white border border-[#E7D7B5] shadow-sm space-y-1.5">
                <span className="text-[10px] uppercase font-mono font-bold text-[#64748B]">Total Amount Invested</span>
                <div className="text-xl sm:text-2xl font-bold font-mono text-[#0F172A]">{formatINR(result.totalInvested)}</div>
                <div className="text-[10px] text-[#64748B] font-medium">Principal capital deployed</div>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-emerald-500/30 shadow-sm space-y-1.5">
                <span className="text-[10px] uppercase font-mono font-bold text-emerald-700">Estimated Returns</span>
                <div className="text-xl sm:text-2xl font-bold font-mono text-emerald-800">{formatINR(result.estimatedReturns)}</div>
                <div className="text-[10px] text-emerald-700/80 font-medium">Pure compound growth</div>
              </div>
            </div>

            {/* Recharts Area Chart */}
            <div className="p-6 rounded-3xl bg-white border border-[#E7D7B5] shadow-xl space-y-4">
              <div className="flex items-center justify-between border-b border-[#E7D7B5]/60 pb-3">
                <h4 className="text-xs font-bold font-mono text-[#0F172A] uppercase tracking-wider flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#C89B3C]" />
                  <span>Wealth Growth Projection (1 → {durationYears} Years)</span>
                </h4>
              </div>

              <div className="h-56 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={result.yearlyData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                    <defs>
                      <linearGradient id="investGoldGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#C89B3C" stopOpacity={0.35} />
                        <stop offset="95%" stopColor="#C89B3C" stopOpacity={0.0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#E7D7B5" opacity={0.5} />
                    <XAxis dataKey="year" stroke="#64748B" fontSize={10} tickLine={false} />
                    <YAxis
                      stroke="#64748B"
                      fontSize={10}
                      tickLine={false}
                      tickFormatter={(v) => `₹${(v / 10000000).toFixed(1)}Cr`}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#FFFFFF',
                        borderColor: '#E7D7B5',
                        borderRadius: '12px',
                        boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)',
                        fontSize: '11px',
                        color: '#0F172A',
                      }}
                      formatter={(val) => [formatINR(val), 'Portfolio Value']}
                    />
                    <Area
                      type="monotone"
                      dataKey="futureValue"
                      stroke="#C89B3C"
                      strokeWidth={3}
                      fillOpacity={1}
                      fill="url(#investGoldGrad)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
