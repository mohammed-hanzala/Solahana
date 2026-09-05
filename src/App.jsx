import React, { useState, useEffect } from 'react';
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
import AdminDashboardPage from './pages/AdminDashboardPage';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './context/AuthContext';
import AuthModal from './components/AuthModal';

export default function App() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#about') {
        setCurrentPage('about');
      } else if (hash === '#financial-planning') {
        setCurrentPage('financial-planning');
      } else if (hash === '#goals') {
        setCurrentPage('goals');
      } else if (hash === '#investments') {
        setCurrentPage('investments');
      } else if (hash === '#tax-planning') {
        setCurrentPage('tax-planning');
      } else if (hash === '#calculators') {
        setCurrentPage('calculators');
      } else if (hash === '#contact') {
        setCurrentPage('contact');
      } else if (hash === '#dashboard') {
        setCurrentPage('dashboard');
      } else if (hash === '#admin') {
        setCurrentPage('admin');
      } else if (hash === '#home' || hash === '') {
        setCurrentPage('home');
      }
    };
    
    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AuthProvider>
      <div className="relative min-h-screen bg-[#020B2D] text-[#F8F7F3] selection:bg-[#C8A24A]/30 selection:text-[#E8C878]">
        {/* Background Visual Layer */}
        <BackgroundEffects />

        {/* Sticky Navbar */}
        <Navbar 
          onOpenSearch={() => setSearchOpen(true)} 
          currentPage={currentPage}
          onNavigate={handleNavigate}
        />

        {/* Main Content Area */}
        <main className="relative z-10">
          {currentPage === 'home' ? (
            <>
              {/* Full First Screen Hero Section (UI Locked Edition) */}
              <Hero onOpenSearch={() => setSearchOpen(true)} />

              {/* TRUST STRIP (Immediately Below Hero) */}
              <TrustStrip />

              {/* PROMPT 5 SECTION 1: What Is Financial Planning? */}
              <WhatIsFinancialPlanning />

              {/* PROMPT 5 SECTION 2: How SOLAHANA Works */}
              <HowSolahanaWorks />

              {/* PROMPT 6 SECTION 1: Who We Serve */}
              <WhoWeServe />

              {/* PROMPT 6 SECTION 2: Financial Goals We Help You Plan For */}
              <FinancialGoals />

              {/* PROMPT 6 SECTION 3: SOLAHANA Services */}
              <SolahanaServices />

              {/* PROMPT 6 SECTION 4: Why Choose SOLAHANA */}
              <WhyChooseSolahana />

              {/* PROMPT 7 SECTION 2: Financial Calculators Preview */}
              <CalculatorsPreview onOpenSearch={() => setSearchOpen(true)} />

              {/* PROMPT 7 SECTION 3: Quick Financial Snapshot */}
              <FinancialSnapshot />

              {/* PROMPT 7 SECTION 4: Mini Calculators CTA */}
              <CalculatorsCTA onOpenSearch={() => setSearchOpen(true)} />

              {/* PROMPT 8 SECTION 1: Client Success Stories */}
              <ClientStories />

              {/* PROMPT 8 SECTION 2: Financial Insights & Knowledge Center */}
              <FinancialInsights />

              {/* PROMPT 8 SECTION 3: Frequently Asked Questions */}
              <FAQSection />

              {/* PROMPT 8 SECTION 4: Final Call To Action */}
              <FinalCTA onOpenSearch={() => setSearchOpen(true)} />
            </>
          ) : currentPage === 'about' ? (
            <AboutPage onOpenSearch={() => setSearchOpen(true)} />
          ) : currentPage === 'financial-planning' ? (
            <FinancialPlanningPage onOpenSearch={() => setSearchOpen(true)} />
          ) : currentPage === 'goals' ? (
            <GoalsPlanningPage onOpenSearch={() => setSearchOpen(true)} />
          ) : currentPage === 'investments' ? (
            <InvestmentsPage onOpenSearch={() => setSearchOpen(true)} />
          ) : currentPage === 'tax-planning' ? (
            <TaxPlanningPage onOpenSearch={() => setSearchOpen(true)} />
          ) : currentPage === 'calculators' ? (
            <CalculatorsPage />
          ) : currentPage === 'dashboard' ? (
            <ProtectedRoute>
              <DashboardPage onNavigate={handleNavigate} />
            </ProtectedRoute>
          ) : currentPage === 'admin' ? (
            <ProtectedRoute adminOnly={true}>
              <AdminDashboardPage />
            </ProtectedRoute>
          ) : (
            <ContactPage onNavigate={handleNavigate} />
          )}

          {/* Shared Footer across pages */}
          <Footer onNavigate={handleNavigate} />
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

