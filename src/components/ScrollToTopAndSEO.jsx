import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ROUTE_TITLES = {
  '/': 'SOLAHANA — Fiduciary Wealth Management & Financial Advisory',
  '/about': 'About Us — SOLAHANA Financial Planning',
  '/financial-planning': 'Financial Planning Services — SOLAHANA',
  '/goals': 'Life Goal Roadmap — SOLAHANA',
  '/investments': 'Goal-Based Investment Advisory — SOLAHANA',
  '/tax-planning': 'Tax Optimization & Harvesting — SOLAHANA',
  '/calculators': 'Financial Calculators Suite — SOLAHANA Desk',
  '/calculators/sip': 'SIP Calculator — SOLAHANA',
  '/calculators/emi': 'EMI Calculator — SOLAHANA',
  '/calculators/retirement': 'FIRE Retirement Calculator — SOLAHANA',
  '/calculators/goal-planner': 'Goal Planner — SOLAHANA',
  '/calculators/lumpsum': 'Lumpsum Investment Calculator — SOLAHANA',
  '/calculators/fd': 'FD Return Calculator — SOLAHANA',
  '/calculators/inflation': 'Inflation Impact Calculator — SOLAHANA',
  '/blogs': 'Financial Intelligence & Insights — SOLAHANA Blog',
  '/contact': 'Schedule Fiduciary Consultation — SOLAHANA',
  '/dashboard': 'Client Wealth Portal — SOLAHANA',
  '/dashboard/calculations': 'Saved Calculations — SOLAHANA',
  '/saved-calculations': 'Saved Calculations — SOLAHANA',
  '/login': 'Client Login — SOLAHANA',
  '/admin/login': 'Admin Portal Sign In — SOLAHANA',
  '/admin/dashboard': 'Admin Analytics Desk — SOLAHANA',
  '/admin/consultations': 'Client Booking CRM — SOLAHANA Admin',
  '/admin/users': 'User Governance — SOLAHANA Admin',
  '/admin/blogs': 'Editorial CMS — SOLAHANA Admin',
  '/admin/newsletters': 'Newsletter Subscribers — SOLAHANA Admin',
};

export default function ScrollToTopAndSEO() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'instant' });

    // Dynamic document title
    if (ROUTE_TITLES[pathname]) {
      document.title = ROUTE_TITLES[pathname];
    } else if (pathname.startsWith('/blogs/')) {
      document.title = 'Financial Article — SOLAHANA Insights';
    } else if (pathname.startsWith('/admin')) {
      document.title = 'Admin Portal — SOLAHANA';
    } else {
      document.title = 'SOLAHANA — Fiduciary Financial Planning';
    }
  }, [pathname]);

  return null;
}
