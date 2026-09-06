import React, { useState, useMemo, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calculator, Download, Table, PieChart as PieIcon, ArrowRight, ShieldCheck } from 'lucide-react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import CalculatorLayout from './CalculatorLayout';
import { calculateEMI, formatINR } from '../../utils/calculatorEngine';

export default function EmiCalculator() {
  const location = useLocation();

  const [loanAmount, setLoanAmount] = useState(5000000);
  const [interestRate, setInterestRate] = useState(8.75);
  const [tenureYears, setTenureYears] = useState(20);
  const [activeTab, setActiveTab] = useState('chart'); // 'chart' | 'schedule'

  useEffect(() => {
    const prefill = location.state?.prefill;
    if (prefill) {
      if (prefill.loanAmount !== undefined) setLoanAmount(Number(prefill.loanAmount));
      if (prefill.interestRate !== undefined) setInterestRate(Number(prefill.interestRate));
      if (prefill.tenureYears !== undefined) setTenureYears(Number(prefill.tenureYears));
    }
  }, [location.state]);

  const result = useMemo(() => {
    return calculateEMI(loanAmount, interestRate, tenureYears);
  }, [loanAmount, interestRate, tenureYears]);

  const getSavePayload = () => ({
    inputs: { loanAmount, interestRate, tenureYears },
    results: {
      monthlyEMI: result.monthlyEMI,
      principalAmount: result.principalAmount,
      totalInterest: result.totalInterest,
      totalPayment: result.totalPayment,
    },
  });

  const pieData = [
    { name: 'Principal Amount', value: result.principalAmount, color: '#3B82F6' },
    { name: 'Total Interest', value: result.totalInterest, color: '#C8A24A' },
  ];

  const handleReset = () => {
    setLoanAmount(5000000);
    setInterestRate(8.75);
    setTenureYears(20);
  };

  return (
    <CalculatorLayout
      title="Loan EMI & Amortization Calculator"
      subtitle="Calculate monthly installments, interest breakdown, and multi-year payment amortization schedule."
      icon={Calculator}
      onReset={handleReset}
      getSavePayload={getSavePayload}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Inputs Panel */}
        <div className="lg:col-span-6 p-6 sm:p-8 rounded-3xl bg-[#071C48]/70 border border-[#C8A24A]/30 shadow-2xl backdrop-blur-2xl text-left space-y-6">
          <div className="flex items-center justify-between border-b border-[#C8A24A]/20 pb-4">
            <h3 className="font-serif-luxury text-lg font-bold text-white flex items-center gap-2">
              <Calculator className="w-5 h-5 text-[#E8C878]" />
              <span>Loan Details</span>
            </h3>
            <span className="text-[10px] uppercase font-mono text-[#E8C878] bg-[#C8A24A]/10 px-2.5 py-1 rounded-full border border-[#C8A24A]/30">
              Home / Car / Personal
            </span>
          </div>

          {/* Loan Amount */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs">
              <label className="font-semibold text-white/90">Loan Principal Amount</label>
              <span className="font-mono text-sm font-bold text-[#E8C878]">{formatINR(loanAmount)}</span>
            </div>
            <input
              type="number"
              value={loanAmount}
              onChange={(e) => setLoanAmount(Number(e.target.value))}
              className="w-full bg-[#020B2D] border border-white/20 focus:border-[#C8A24A] rounded-xl py-2.5 px-4 text-white text-xs font-mono focus:outline-none transition-colors"
              step="50000"
            />
            <input
              type="range"
              min="100000"
              max="30000000"
              step="100000"
              value={loanAmount}
              onChange={(e) => setLoanAmount(Number(e.target.value))}
              className="w-full accent-[#C8A24A] cursor-pointer h-1.5 bg-[#020B2D] rounded-lg"
            />
          </div>

          {/* Interest Rate */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs">
              <label className="font-semibold text-white/90">Annual Interest Rate (%)</label>
              <span className="font-mono text-sm font-bold text-[#E8C878]">{interestRate}% p.a.</span>
            </div>
            <input
              type="number"
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              className="w-full bg-[#020B2D] border border-white/20 focus:border-[#C8A24A] rounded-xl py-2.5 px-4 text-white text-xs font-mono focus:outline-none transition-colors"
              min="1"
              max="25"
              step="0.1"
            />
            <input
              type="range"
              min="5"
              max="20"
              step="0.25"
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              className="w-full accent-[#C8A24A] cursor-pointer h-1.5 bg-[#020B2D] rounded-lg"
            />
          </div>

          {/* Loan Tenure */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs">
              <label className="font-semibold text-white/90">Loan Tenure (Years)</label>
              <span className="font-mono text-sm font-bold text-[#E8C878]">{tenureYears} Years ({tenureYears * 12} Months)</span>
            </div>
            <input
              type="range"
              min="1"
              max="30"
              value={tenureYears}
              onChange={(e) => setTenureYears(Number(e.target.value))}
              className="w-full accent-[#C8A24A] cursor-pointer h-1.5 bg-[#020B2D] rounded-lg"
            />
          </div>
        </div>

        {/* Right Output & Breakdown Panel */}
        <div className="lg:col-span-6 space-y-6 text-left">
          
          {/* Main EMI Highlight */}
          <div className="p-6 rounded-3xl bg-gradient-to-r from-[#071C48] via-[#041235] to-[#020B2D] border border-[#C8A24A]/50 shadow-2xl space-y-2 relative overflow-hidden">
            <span className="text-xs uppercase font-mono tracking-widest text-[#E8C878]">MONTHLY LOAN INSTALLMENT</span>
            <div className="text-3xl sm:text-4xl font-bold font-mono text-white">{formatINR(result.monthlyEMI)}</div>
            <p className="text-xs text-[#BAC6DA]/80">
              Payable monthly over {tenureYears} years ({tenureYears * 12} equal payments).
            </p>
          </div>

          {/* Stats Summary Cards */}
          <div className="grid grid-cols-3 gap-3">
            <div className="p-4 rounded-2xl bg-[#071C48]/80 border border-blue-500/30 text-left">
              <span className="text-[10px] text-blue-300 font-mono uppercase">Principal</span>
              <div className="text-sm font-bold font-mono text-white">{formatINR(result.principalAmount)}</div>
              <div className="text-[10px] text-blue-300/70">{result.principalPct}%</div>
            </div>

            <div className="p-4 rounded-2xl bg-[#071C48]/80 border border-[#C8A24A]/30 text-left">
              <span className="text-[10px] text-[#E8C878] font-mono uppercase">Total Interest</span>
              <div className="text-sm font-bold font-mono text-[#E8C878]">{formatINR(result.totalInterest)}</div>
              <div className="text-[10px] text-[#E8C878]/70">{result.interestPct}%</div>
            </div>

            <div className="p-4 rounded-2xl bg-[#071C48]/80 border border-white/10 text-left">
              <span className="text-[10px] text-white/60 font-mono uppercase">Total Outflow</span>
              <div className="text-sm font-bold font-mono text-white">{formatINR(result.totalPayment)}</div>
              <div className="text-[10px] text-white/50">100%</div>
            </div>
          </div>

          {/* View Toggle Tabs: Pie Chart vs Amortization Table */}
          <div className="p-6 rounded-3xl bg-[#071C48]/70 border border-[#C8A24A]/30 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-[#C8A24A]/20 pb-3">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveTab('chart')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    activeTab === 'chart' ? 'bg-[#C8A24A] text-[#020B2D]' : 'text-[#BAC6DA] hover:text-white'
                  }`}
                >
                  Payment Pie Breakdown
                </button>
                <button
                  onClick={() => setActiveTab('schedule')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    activeTab === 'schedule' ? 'bg-[#C8A24A] text-[#020B2D]' : 'text-[#BAC6DA] hover:text-white'
                  }`}
                >
                  Amortization Table
                </button>
              </div>

              <button
                onClick={() => alert('Amortization schedule export PDF/CSV feature coming soon!')}
                className="text-xs text-[#E8C878] hover:underline flex items-center gap-1 cursor-pointer font-mono"
              >
                <Download className="w-3.5 h-3.5" /> Schedule PDF
              </button>
            </div>

            {activeTab === 'chart' ? (
              <div className="h-56 w-full flex items-center justify-center">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={pieData} cx="50%" cy="50%" innerRadius={55} outerRadius={80} dataKey="value" paddingAngle={5}>
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(val) => [formatINR(val), '']} contentStyle={{ backgroundColor: '#071C48', borderRadius: '10px' }} />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            ) : (
              <div className="max-h-64 overflow-y-auto pr-1 text-xs font-mono border border-white/10 rounded-xl">
                <table className="w-full text-left border-collapse">
                  <thead className="bg-[#020B2D] text-[#E8C878] sticky top-0">
                    <tr>
                      <th className="p-2 border-b border-white/10">Month</th>
                      <th className="p-2 border-b border-white/10">EMI</th>
                      <th className="p-2 border-b border-white/10">Principal</th>
                      <th className="p-2 border-b border-white/10">Interest</th>
                      <th className="p-2 border-b border-white/10">Balance</th>
                    </tr>
                  </thead>
                  <tbody>
                    {result.schedule.slice(0, 36).map((row) => (
                      <tr key={row.month} className="border-b border-white/5 hover:bg-white/5">
                        <td className="p-2 text-white/70">M{row.month} (Yr {row.year})</td>
                        <td className="p-2 text-white">{formatINR(row.emi)}</td>
                        <td className="p-2 text-blue-300">{formatINR(row.principalPaid)}</td>
                        <td className="p-2 text-[#E8C878]">{formatINR(row.interestPaid)}</td>
                        <td className="p-2 text-white/80">{formatINR(row.balance)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

        </div>

      </div>
    </CalculatorLayout>
  );
}
