import React, { useState, useMemo } from 'react';
import { Percent, TrendingUp, AlertTriangle, ShieldAlert } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import CalculatorLayout from './CalculatorLayout';
import { calculateInflation, formatINR } from '../../utils/calculatorEngine';

export default function InflationCalculator() {
  const [todayValue, setTodayValue] = useState(100000);
  const [inflationRate, setInflationRate] = useState(6.5);
  const [durationYears, setDurationYears] = useState(15);

  const result = useMemo(() => {
    return calculateInflation(todayValue, inflationRate, durationYears);
  }, [todayValue, inflationRate, durationYears]);

  const handleReset = () => {
    setTodayValue(100000);
    setInflationRate(6.5);
    setDurationYears(15);
  };

  return (
    <CalculatorLayout
      title="Inflation & Purchasing Power Loss Calculator"
      subtitle="Analyze how inflation erodes paper currency purchasing power and calculate the future cost of goods."
      icon={Percent}
      onReset={handleReset}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-left">
        
        {/* Controls */}
        <div className="lg:col-span-6 p-6 sm:p-8 rounded-3xl bg-[#071C48]/70 border border-[#C8A24A]/30 shadow-2xl backdrop-blur-2xl space-y-6">
          <div className="flex items-center justify-between border-b border-[#C8A24A]/20 pb-3">
            <h3 className="font-serif-luxury text-lg font-bold text-white flex items-center gap-2">
              <Percent className="w-5 h-5 text-[#E8C878]" />
              <span>Inflation Input</span>
            </h3>
            <span className="text-[10px] uppercase font-mono text-rose-400 bg-rose-500/10 px-2.5 py-1 rounded-full border border-rose-500/30">
              Purchasing Power Loss
            </span>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs">
              <label className="font-semibold text-white/90">Current Cost / Price Today</label>
              <span className="font-mono text-sm font-bold text-[#E8C878]">{formatINR(todayValue)}</span>
            </div>
            <input
              type="number"
              value={todayValue}
              onChange={(e) => setTodayValue(Number(e.target.value))}
              className="w-full bg-[#020B2D] border border-white/20 focus:border-[#C8A24A] rounded-xl py-2.5 px-4 text-white text-xs font-mono"
              step="5000"
            />
            <input
              type="range"
              min="10000"
              max="2000000"
              step="10000"
              value={todayValue}
              onChange={(e) => setTodayValue(Number(e.target.value))}
              className="w-full accent-[#C8A24A] cursor-pointer h-1.5 bg-[#020B2D] rounded-lg"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs">
              <label className="font-semibold text-white/90">Annual Inflation Rate (%)</label>
              <span className="font-mono text-sm font-bold text-rose-400">{inflationRate}% / year</span>
            </div>
            <input
              type="range"
              min="1"
              max="20"
              step="0.5"
              value={inflationRate}
              onChange={(e) => setInflationRate(Number(e.target.value))}
              className="w-full accent-rose-400 cursor-pointer h-1.5 bg-[#020B2D] rounded-lg"
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
              max="40"
              value={durationYears}
              onChange={(e) => setDurationYears(Number(e.target.value))}
              className="w-full accent-[#C8A24A] cursor-pointer h-1.5 bg-[#020B2D] rounded-lg"
            />
          </div>
        </div>

        {/* Results */}
        <div className="lg:col-span-6 space-y-6">
          
          <div className="p-6 rounded-3xl bg-gradient-to-r from-[#071C48] via-[#041235] to-[#020B2D] border border-rose-500/40 shadow-2xl space-y-2">
            <span className="text-xs uppercase font-mono tracking-widest text-rose-400">EQUIVALENT FUTURE COST IN {durationYears} YEARS</span>
            <div className="text-3xl sm:text-4xl font-bold font-mono text-white">{formatINR(result.futureCost)}</div>
            <p className="text-xs text-[#BAC6DA]/80">
              What costs {formatINR(todayValue)} today will require {formatINR(result.futureCost)} in {durationYears} years.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-[#071C48]/80 border border-rose-500/30 space-y-1">
              <span className="text-[10px] uppercase font-mono text-rose-300">Purchasing Power Loss</span>
              <div className="text-xl font-bold font-mono text-rose-400">-{result.purchasingPowerLossPct}%</div>
              <div className="text-[10px] text-rose-300/70">Real value reduction</div>
            </div>

            <div className="p-5 rounded-2xl bg-[#071C48]/80 border border-[#C8A24A]/30 space-y-1">
              <span className="text-[10px] uppercase font-mono text-[#E8C878]">Extra Cost Amount</span>
              <div className="text-xl font-bold font-mono text-[#E8C878]">+{formatINR(result.costIncrease)}</div>
              <div className="text-[10px] text-white/50">+{result.increasePct}% Price Rise</div>
            </div>
          </div>

          {/* Area Chart */}
          <div className="p-6 rounded-3xl bg-[#071C48]/70 border border-[#C8A24A]/30 shadow-2xl space-y-3">
            <h4 className="text-xs font-bold font-mono text-[#E8C878] uppercase tracking-wider">
              Future Cost Escalation Graph
            </h4>
            <div className="h-52 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={result.timelineData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
                  <XAxis dataKey="year" stroke="#BAC6DA60" tick={{ fontSize: 10, fill: '#BAC6DA' }} />
                  <YAxis stroke="#BAC6DA60" tick={{ fontSize: 10, fill: '#BAC6DA' }} tickFormatter={(val) => formatINR(val, true)} />
                  <Tooltip formatter={(val) => [formatINR(val), 'Future Cost']} contentStyle={{ backgroundColor: '#071C48', borderRadius: '10px' }} />
                  <Area type="monotone" dataKey="cost" stroke="#F43F5E" fill="#F43F5E30" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

        </div>

      </div>
    </CalculatorLayout>
  );
}
