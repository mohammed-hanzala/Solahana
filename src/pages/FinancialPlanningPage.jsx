import React, { useEffect } from 'react';
import PlanningHero from '../components/planning/PlanningHero';
import WhyPlanningMatters from '../components/planning/WhyPlanningMatters';
import PlanningAreas from '../components/planning/PlanningAreas';
import PlanningJourney from '../components/planning/PlanningJourney';
import WhatYouReceive from '../components/planning/WhatYouReceive';
import WhyChoosePlanning from '../components/planning/WhyChoosePlanning';
import ConsultationProcess from '../components/planning/ConsultationProcess';
import PlanningCTA from '../components/planning/PlanningCTA';

export default function FinancialPlanningPage({ onOpenSearch }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleExploreGoals = () => {
    const el = document.getElementById('planning-areas');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative z-10">
      {/* SECTION 1: HERO */}
      <PlanningHero 
        onBookConsultation={onOpenSearch}
        onExploreGoals={handleExploreGoals}
      />

      {/* SECTION 2: WHY FINANCIAL PLANNING MATTERS */}
      <WhyPlanningMatters />

      {/* SECTION 3: WHAT DOES A COMPLETE FINANCIAL PLAN INCLUDE? */}
      <PlanningAreas onSelectArea={onOpenSearch} />

      {/* SECTION 4: YOUR FINANCIAL PLANNING JOURNEY */}
      <PlanningJourney />

      {/* SECTION 5: WHAT YOU RECEIVE */}
      <WhatYouReceive onOpenSearch={onOpenSearch} />

      {/* SECTION 6: WHY CHOOSE SOLAHANA */}
      <WhyChoosePlanning />

      {/* SECTION 7: CONSULTATION PROCESS */}
      <ConsultationProcess onSchedule={onOpenSearch} />

      {/* SECTION 8: FINAL CTA */}
      <PlanningCTA 
        onBookConsultation={onOpenSearch}
        onTalkToPlanner={onOpenSearch}
      />
    </div>
  );
}
