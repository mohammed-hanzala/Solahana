import React, { useEffect } from 'react';
import PlanningHero from '../components/planning/PlanningHero';
import WhyPlanningMatters from '../components/planning/WhyPlanningMatters';
import PlanningJourney from '../components/planning/PlanningJourney';
import PlanningAreas from '../components/planning/PlanningAreas';
import WhyChoosePlanning from '../components/planning/WhyChoosePlanning';
import PlanningBenefits from '../components/planning/PlanningBenefits';
import PlanningFAQ from '../components/planning/PlanningFAQ';

export default function FinancialPlanningPage({ onOpenSearch }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="relative z-10">
      {/* 1. PREMIUM HERO SECTION */}
      <PlanningHero onBookConsultation={onOpenSearch} />

      {/* 2. WHY FINANCIAL PLANNING MATTERS */}
      <WhyPlanningMatters />

      {/* 3. YOUR FINANCIAL PLANNING JOURNEY */}
      <PlanningJourney />

      {/* 4. COMPREHENSIVE PLANNING SOLUTIONS */}
      <PlanningAreas />

      {/* 5. WHY CHOOSE SOLAHANA */}
      <WhyChoosePlanning />

      {/* 6. PLANNING BENEFITS SECTION */}
      <PlanningBenefits />

      {/* 7. FINANCIAL PLANNING FAQ */}
      <PlanningFAQ />
    </div>
  );
}
