import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import BackgroundEffects from './components/BackgroundEffects';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustStrip from './components/TrustStrip';
import WhatIsFinancialPlanning from './components/WhatIsFinancialPlanning';
import HowSolahanaWorks from './components/HowSolahanaWorks';
import WhoWeServe from './components/WhoWeServe';
import FinancialGoals from './components/FinancialGoals';
import SolahanaServices from './components/SolahanaServices';
import WhyChooseSolahana from './components/WhyChooseSolahana';
import CalculatorsPreview from './components/CalculatorsPreview';
import FinancialSnapshot from './components/FinancialSnapshot';
import CalculatorsCTA from './components/CalculatorsCTA';
import ClientStories from './components/ClientStories';
import FinancialInsights from './components/FinancialInsights';
import FAQSection from './components/FAQSection';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import SearchModal from './components/SearchModal';
import AboutPage from './pages/AboutPage';
import FinancialPlanningPage from './pages/FinancialPlanningPage';
import GoalsPlanningPage from './pages/GoalsPlanningPage';
import InvestmentsPage from './pages/InvestmentsPage';
import TaxPlanningPage from './pages/TaxPlanningPage';
import { CalculatorsPage } from './pages/CalculatorsPage';
import { ContactPage } from './pages/ContactPage';
import DashboardPage from './pages/DashboardPage';
import LoginPage from './pages/LoginPage';
import AdminDashboardPage from './pages/AdminDashboardPage';
import AdminLoginPage from './pages/AdminLoginPage';
import ProtectedRoute from './components/ProtectedRoute';
import AdminProtectedRoute from './components/AdminProtectedRoute';
import { AuthProvider } from './context/AuthContext';
import AuthModal from './components/AuthModal';

// Calculators Module Imports
import CalculatorsLandingPage from './pages/calculators/CalculatorsLandingPage';
import SipCalculator from './components/calculators/SipCalculator';
import EmiCalculator from './components/calculators/EmiCalculator';
import RetirementCalculator from './components/calculators/RetirementCalculator';
import GoalPlanner from './components/calculators/GoalPlanner';
import LumpsumCalculator from './components/calculators/LumpsumCalculator';
import FdCalculator from './components/calculators/FdCalculator';
import InflationCalculator from './components/calculators/InflationCalculator';

function HomePage({ onOpenSearch }) {
  return (
    <>
      {/* Full First Screen Hero Section */}
      <Hero onOpenSearch={onOpenSearch} />
      <TrustStrip />
      <WhatIsFinancialPlanning />
      <HowSolahanaWorks />
      <WhoWeServe />
      <FinancialGoals />
      <SolahanaServices />
      <WhyChooseSolahana />
      <CalculatorsPreview onOpenSearch={onOpenSearch} />
      <FinancialSnapshot />
      <CalculatorsCTA onOpenSearch={onOpenSearch} />
      <ClientStories />
      <FinancialInsights />
      <FAQSection />
      <FinalCTA onOpenSearch={onOpenSearch} />
    </>
  );
}

export default function App() {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <AuthProvider>
      <div className="relative min-h-screen bg-[#020B2D] text-[#F8F7F3] selection:bg-[#C8A24A]/30 selection:text-[#E8C878]">
        {/* Background Visual Layer */}
        <BackgroundEffects />

        {/* Sticky Navbar */}
        <Navbar onOpenSearch={() => setSearchOpen(true)} />

        {/* Main Content Area */}
        <main className="relative z-10">
          <Routes>
            <Route path="/" element={<HomePage onOpenSearch={() => setSearchOpen(true)} />} />
            <Route path="/about" element={<AboutPage onOpenSearch={() => setSearchOpen(true)} />} />
            <Route path="/financial-planning" element={<FinancialPlanningPage onOpenSearch={() => setSearchOpen(true)} />} />
            <Route path="/goals" element={<GoalsPlanningPage onOpenSearch={() => setSearchOpen(true)} />} />
            <Route path="/investments" element={<InvestmentsPage onOpenSearch={() => setSearchOpen(true)} />} />
            <Route path="/tax-planning" element={<TaxPlanningPage onOpenSearch={() => setSearchOpen(true)} />} />
            {/* Financial Calculators Suite Routes */}
            <Route path="/calculators" element={<CalculatorsLandingPage />} />
            <Route path="/calculators/sip" element={<SipCalculator />} />
            <Route path="/calculators/emi" element={<EmiCalculator />} />
            <Route path="/calculators/retirement" element={<RetirementCalculator />} />
            <Route path="/calculators/goal-planner" element={<GoalPlanner />} />
            <Route path="/calculators/lumpsum" element={<LumpsumCalculator />} />
            <Route path="/calculators/fd" element={<FdCalculator />} />
            <Route path="/calculators/inflation" element={<InflationCalculator />} />
            <Route path="/contact" element={<ContactPage />} />

            {/* User Dashboard */}
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <DashboardPage />
                </ProtectedRoute>
              }
            />

            {/* Dedicated User Login Route */}
            <Route path="/login" element={<LoginPage />} />

            {/* Dedicated Admin Login */}
            <Route path="/admin/login" element={<AdminLoginPage />} />

            {/* Admin Protected Routes */}
            <Route path="/admin" element={<Navigate to="/admin/dashboard" replace />} />
            <Route
              path="/admin/dashboard"
              element={
                <AdminProtectedRoute>
                  <AdminDashboardPage />
                </AdminProtectedRoute>
              }
            />
            <Route
              path="/admin/consultations"
              element={
                <AdminProtectedRoute>
                  <AdminDashboardPage />
                </AdminProtectedRoute>
              }
            />
            <Route
              path="/admin/users"
              element={
                <AdminProtectedRoute>
                  <AdminDashboardPage />
                </AdminProtectedRoute>
              }
            />

            {/* Catch-all Fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>

          {/* Shared Footer across pages */}
          <Footer />
        </main>

        {/* Global Quick Command & Search Modal */}
        <SearchModal
          isOpen={searchOpen}
          onClose={() => setSearchOpen(false)}
          onSelectAction={(action) => {
            console.log('Action selected:', action);
          }}
        />

        {/* Global Auth Modal for Login & Register */}
        <AuthModal />
      </div>
    </AuthProvider>
  );
}
