import React, { useState, useMemo, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { TrendingUp, Sparkles } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import CalculatorLayout from './CalculatorLayout';
import { calculateSIP, formatINR } from '../../utils/calculatorEngine';

export default function SipCalculator() {
  const location = useLocation();

  const [monthlySIP, setMonthlySIP] = useState(25000);
  const [returnRate, setReturnRate] = useState(12);
  const [durationYears, setDurationYears] = useState(15);
  const [stepUpPct, setStepUpPct] = useState(10);

  // Pre-fill inputs if navigated from Recalculate
  useEffect(() => {
    const prefill = location.state?.prefill;
    if (prefill) {
      if (prefill.monthlySIP !== undefined) setMonthlySIP(Number(prefill.monthlySIP));
      if (prefill.returnRate !== undefined) setReturnRate(Number(prefill.returnRate));
      if (prefill.durationYears !== undefined) setDurationYears(Number(prefill.durationYears));
      if (prefill.stepUpPct !== undefined) setStepUpPct(Number(prefill.stepUpPct));
    }
  }, [location.state]);

  // Form Validation Errors
  const errors = useMemo(() => {
    const errs = {};
    if (monthlySIP < 500) errs.monthlySIP = 'Minimum monthly SIP is ₹500';
    if (monthlySIP > 10000000) errs.monthlySIP = 'Maximum monthly SIP is ₹1 Cr';
    if (returnRate < 1 || returnRate > 30) errs.returnRate = 'Expected return must be between 1% and 30%';
    if (durationYears < 1 || durationYears > 40) errs.durationYears = 'Duration must be between 1 and 40 years';
    if (stepUpPct < 0 || stepUpPct > 50) errs.stepUpPct = 'Annual step-up must be between 0% and 50%';
    return errs;
  }, [monthlySIP, returnRate, durationYears, stepUpPct]);

  // Compute live SIP results
  const result = useMemo(() => {
    return calculateSIP(monthlySIP, returnRate, durationYears, stepUpPct);
  }, [monthlySIP, returnRate, durationYears, stepUpPct]);

  const handleReset = () => {
    setMonthlySIP(25000);
    setReturnRate(12);
    setDurationYears(15);
    setStepUpPct(10);
  };

  const getSavePayload = () => ({
    inputs: { monthlySIP, returnRate, durationYears, stepUpPct },
    results: {
      totalInvested: result.totalInvested,
      estimatedReturns: result.estimatedReturns,
      futureValue: result.futureValue,
      wealthGainPct: result.wealthGainPct,
    },
  });

  return (
    <CalculatorLayout
      title="SIP Calculator with Step-Up"
      subtitle="Calculate how regular monthly investments & annual step-up compounding can create generational wealth over time."
      icon={TrendingUp}
      onReset={handleReset}
      getSavePayload={getSavePayload}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Inputs Controls Card */}
        <div className="lg:col-span-6 p-6 sm:p-8 rounded-3xl bg-[#071C48]/70 border border-[#C8A24A]/30 shadow-2xl backdrop-blur-2xl text-left space-y-6">
          <div className="flex items-center justify-between border-b border-[#C8A24A]/20 pb-4">
            <h3 className="font-serif-luxury text-lg font-bold text-white flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-[#E8C878]" />
              <span>Investment Parameters</span>
            </h3>
            <span className="text-[10px] uppercase font-mono text-[#E8C878] bg-[#C8A24A]/10 px-2.5 py-1 rounded-full border border-[#C8A24A]/30">
              Live Compound Engine
            </span>
          </div>

          {/* Input 1: Monthly Investment */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs">
              <label className="font-semibold text-white/90">Monthly Investment Amount</label>
              <span className="font-mono text-sm font-bold text-[#E8C878]">{formatINR(monthlySIP)}</span>
            </div>
            <div className="relative">
              <input
                type="number"
                value={monthlySIP}
                onChange={(e) => setMonthlySIP(Number(e.target.value))}
                className="w-full bg-[#020B2D] border border-white/20 focus:border-[#C8A24A] rounded-xl py-2.5 px-4 text-white text-xs font-mono focus:outline-none transition-colors"
                min="500"
                step="500"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-white/40">INR / mo</span>
            </div>
            <input
              type="range"
              min="500"
              max="200000"
              step="500"
              value={monthlySIP}
              onChange={(e) => setMonthlySIP(Number(e.target.value))}
              className="w-full accent-[#C8A24A] cursor-pointer h-1.5 bg-[#020B2D] rounded-lg"
            />
            {errors.monthlySIP && <p className="text-[11px] text-red-400 font-mono">{errors.monthlySIP}</p>}
          </div>

          {/* Input 2: Expected Return Rate */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs">
              <label className="font-semibold text-white/90">Expected Annual Return (%)</label>
              <span className="font-mono text-sm font-bold text-[#E8C878]">{returnRate}% p.a.</span>
            </div>
            <div className="relative">
              <input
                type="number"
                value={returnRate}
                onChange={(e) => setReturnRate(Number(e.target.value))}
                className="w-full bg-[#020B2D] border border-white/20 focus:border-[#C8A24A] rounded-xl py-2.5 px-4 text-white text-xs font-mono focus:outline-none transition-colors"
                min="1"
                max="30"
                step="0.5"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-white/40">%</span>
            </div>
            <input
              type="range"
              min="1"
              max="25"
              step="0.5"
              value={returnRate}
              onChange={(e) => setReturnRate(Number(e.target.value))}
              className="w-full accent-[#C8A24A] cursor-pointer h-1.5 bg-[#020B2D] rounded-lg"
            />
            {errors.returnRate && <p className="text-[11px] text-red-400 font-mono">{errors.returnRate}</p>}
          </div>

          {/* Input 3: Duration Years */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs">
              <label className="font-semibold text-white/90">Investment Duration (Years)</label>
              <span className="font-mono text-sm font-bold text-[#E8C878]">{durationYears} Years</span>
            </div>
            <div className="relative">
              <input
                type="number"
                value={durationYears}
                onChange={(e) => setDurationYears(Number(e.target.value))}
                className="w-full bg-[#020B2D] border border-white/20 focus:border-[#C8A24A] rounded-xl py-2.5 px-4 text-white text-xs font-mono focus:outline-none transition-colors"
                min="1"
                max="40"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-white/40">Years</span>
            </div>
            <input
              type="range"
              min="1"
              max="35"
              value={durationYears}
              onChange={(e) => setDurationYears(Number(e.target.value))}
              className="w-full accent-[#C8A24A] cursor-pointer h-1.5 bg-[#020B2D] rounded-lg"
            />
            {errors.durationYears && <p className="text-[11px] text-red-400 font-mono">{errors.durationYears}</p>}
          </div>

          {/* Input 4: Annual Step-Up % (Optional) */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs">
              <label className="font-semibold text-white/90 flex items-center gap-1.5">
                <span>Annual Step-Up %</span>
                <span className="text-[10px] text-[#E8C878] font-mono">(Annual Salary Hike)</span>
              </label>
              <span className="font-mono text-sm font-bold text-emerald-400">+{stepUpPct}% / yr</span>
            </div>
            <input
              type="range"
              min="0"
              max="30"
              step="1"
              value={stepUpPct}
              onChange={(e) => setStepUpPct(Number(e.target.value))}
              className="w-full accent-emerald-400 cursor-pointer h-1.5 bg-[#020B2D] rounded-lg"
            />
            <p className="text-[11px] text-white/50 leading-relaxed font-light">
              Increasing your SIP by {stepUpPct}% each year accelerates retirement corpus by up to 2.4x.
            </p>
          </div>

        </div>

        {/* Right Output & Analytics Visuals */}
        <div className="lg:col-span-6 space-y-6 text-left">
          
          {/* Wealth Summary Cards Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-[#071C48]/80 border border-[#C8A24A]/30 shadow-xl space-y-1">
              <span className="text-[11px] text-[#BAC6DA] uppercase font-mono tracking-wider">Total Invested</span>
              <div className="text-xl font-bold font-mono text-white">{formatINR(result.totalInvested)}</div>
              <div className="text-[10px] text-white/50">Out of pocket principal</div>
            </div>

            <div className="p-5 rounded-2xl bg-[#071C48]/80 border border-emerald-500/30 shadow-xl space-y-1">
              <span className="text-[11px] text-emerald-400 uppercase font-mono tracking-wider">Est. Wealth Gain</span>
              <div className="text-xl font-bold font-mono text-emerald-300">+{formatINR(result.estimatedReturns)}</div>
              <div className="text-[10px] text-emerald-400/70 font-semibold">+{result.wealthGainPct}% Gain</div>
            </div>

            <div className="col-span-2 p-6 rounded-2xl bg-gradient-to-r from-[#071C48] via-[#041235] to-[#020B2D] border border-[#C8A24A]/50 shadow-2xl space-y-1 relative overflow-hidden">
              <div className="absolute right-4 top-4 text-[#C8A24A]/20">
                <Sparkles className="w-12 h-12" />
              </div>
              <span className="text-xs uppercase font-mono tracking-widest text-[#E8C878]">EXPECTED FUTURE VALUE</span>
              <div className="text-3xl sm:text-4xl font-bold font-mono text-[#F8F7F3]">{formatINR(result.futureValue)}</div>
              <p className="text-xs text-[#BAC6DA]/80 pt-1">
                Accumulated corpus at {durationYears} years based on {returnRate}% p.a. expected CAGR.
              </p>
            </div>
          </div>

          {/* Recharts Timeline Area Chart */}
          <div className="p-6 rounded-3xl bg-[#071C48]/70 border border-[#C8A24A]/30 shadow-2xl backdrop-blur-2xl space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-bold font-mono text-[#E8C878] uppercase tracking-wider">
                Wealth Compounding Growth Projection
              </h4>
              <div className="flex items-center gap-4 text-[11px]">
                <span className="flex items-center gap-1 text-[#BAC6DA]">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#3B82F6]" /> Invested
                </span>
                <span className="flex items-center gap-1 text-emerald-400 font-semibold">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#C8A24A]" /> Future Value
                </span>
              </div>
            </div>

            <div className="h-64 w-full pt-2">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={result.yearlyData}>
                  <defs>
                    <linearGradient id="colorFuture" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#C8A24A" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#C8A24A" stopOpacity={0.0}/>
                    </linearGradient>
                    <linearGradient id="colorInvested" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.5}/>
                      <stop offset="95%" stopColor="#3B82F6" stopOpacity={0.0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
                  <XAxis dataKey="year" stroke="#BAC6DA60" tick={{ fontSize: 10, fill: '#BAC6DA' }} />
                  <YAxis stroke="#BAC6DA60" tick={{ fontSize: 10, fill: '#BAC6DA' }} tickFormatter={(val) => formatINR(val, true)} />
                  <Tooltip
                    contentStyle={{ backgroundColor: '#071C48', borderColor: '#C8A24A30', borderRadius: '12px', color: '#fff', fontSize: '11px' }}
                    formatter={(val) => [formatINR(val), '']}
                  />
                  <Area type="monotone" dataKey="futureValue" name="Future Value" stroke="#C8A24A" strokeWidth={2} fillOpacity={1} fill="url(#colorFuture)" />
                  <Area type="monotone" dataKey="invested" name="Invested Amount" stroke="#3B82F6" strokeWidth={2} fillOpacity={1} fill="url(#colorInvested)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

        </div>

      </div>
    </CalculatorLayout>
  );
}
