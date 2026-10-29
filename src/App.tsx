import React, { useState, useEffect } from 'react';
import { TopContactBar } from './components/TopContactBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { AccreditationSection } from './components/AccreditationSection';
import { ProgramsSection } from './components/ProgramsSection';
import { FacultySection } from './components/FacultySection';
import { AdmissionsSection } from './components/AdmissionsSection';
import { CampusLifeSection } from './components/CampusLifeSection';
import { CampusGallery } from './components/CampusGallery';
import { StatementOfFaith } from './components/StatementOfFaith';
import { LocationAndContact } from './components/LocationAndContact';
import { FutureSectionsPlaceholder } from './components/FutureSectionsPlaceholder';
import { Footer } from './components/Footer';
import { ApplicationModal } from './components/ApplicationModal';
import { AdminLoginModal } from './components/AdminLoginModal';
import { AdminPortalModal } from './components/AdminPortalModal';
import { AdminFloatingBar } from './components/AdminFloatingBar';
import { GraduationCap, MessageSquare } from 'lucide-react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { AdminDataProvider, useAdminData } from './context/AdminDataContext';

function MainAppContent() {
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [isAdminLoginOpen, setIsAdminLoginOpen] = useState(false);
  const [isAdminPortalOpen, setIsAdminPortalOpen] = useState(false);
  const [selectedProgramId, setSelectedProgramId] = useState<string>('b-th');
  const [activeSection, setActiveSection] = useState<string>('top');
  
  const { t } = useLanguage();
  const { isAdminLoggedIn, institutionInfo } = useAdminData();

  // Handle program selection from Academic Programs section
  const handleSelectProgramToApply = (programId: string) => {
    setSelectedProgramId(programId);
    setIsApplyModalOpen(true);
  };

  const handleOpenGeneralApply = () => {
    setSelectedProgramId('b-th');
    setIsApplyModalOpen(true);
  };

  // Scroll spy to update active nav link
  useEffect(() => {
    const handleScrollSpy = () => {
      const sections = ['about', 'accreditation', 'programs', 'faculty', 'admissions', 'campus-life', 'gallery', 'faith', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            return;
          }
        }
      }
      if (window.scrollY < 300) {
        setActiveSection('top');
      }
    };

    window.addEventListener('scroll', handleScrollSpy);
    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, []);

  return (
    <div className={`min-h-screen bg-[#F4F1EA] text-slate-900 flex flex-col antialiased selection:bg-[#1A365D] selection:text-[#D4AF37] ${isAdminLoggedIn ? 'pt-8' : ''}`}>
      
      {/* Admin Floating Control Bar when Logged In */}
      <AdminFloatingBar onOpenPortal={() => setIsAdminPortalOpen(true)} />

      {/* Top Direct Contact Bar */}
      <TopContactBar
        onOpenAdminLogin={() => setIsAdminLoginOpen(true)}
        onOpenAdminPortal={() => setIsAdminPortalOpen(true)}
      />

      {/* Main Responsive Sticky Navbar */}
      <Navbar
        onOpenApplyModal={handleOpenGeneralApply}
        onOpenAdminLogin={() => setIsAdminLoginOpen(true)}
        onOpenAdminPortal={() => setIsAdminPortalOpen(true)}
        activeSection={activeSection}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <Hero onOpenApplyModal={handleOpenGeneralApply} />
        <AboutSection />
        <AccreditationSection onOpenApplyModal={handleOpenGeneralApply} />
        <ProgramsSection onSelectProgramToApply={handleSelectProgramToApply} />
        <FacultySection onOpenApplyModal={handleOpenGeneralApply} />
        <AdmissionsSection />
        <CampusLifeSection />
        <CampusGallery />
        <StatementOfFaith />
        <FutureSectionsPlaceholder />
        <LocationAndContact />
      </main>

      {/* Institutional Footer */}
      <Footer
        onOpenAdminLogin={() => setIsAdminLoginOpen(true)}
        onOpenAdminPortal={() => setIsAdminPortalOpen(true)}
      />

      {/* Quick Application Modal for Students */}
      <ApplicationModal
        isOpen={isApplyModalOpen}
        onClose={() => setIsApplyModalOpen(false)}
        initialProgramId={selectedProgramId}
      />

      {/* Administrator Authentication Modal */}
      <AdminLoginModal
        isOpen={isAdminLoginOpen}
        onClose={() => setIsAdminLoginOpen(false)}
        onLoginSuccess={() => setIsAdminPortalOpen(true)}
      />

      {/* Master Administrator CMS Portal Modal */}
      <AdminPortalModal
        isOpen={isAdminPortalOpen}
        onClose={() => setIsAdminPortalOpen(false)}
      />

      {/* Floating Quick Action CTA for mobile and desktop */}
      <div className="fixed bottom-5 right-5 z-30 flex flex-col items-end gap-2.5">
        <a
          href={`https://wa.me/${institutionInfo.phone}?text=Hello%20Principal%20Rev.%20Santhosh%20Chacko%2C%20I%20am%20inquiring%20about%20admissions%20at%20NEST%20Mysore.`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-[#128C7E] hover:bg-[#075E54] text-white shadow-xl flex items-center justify-center transition-transform hover:scale-110 active:scale-95 border-2 border-white"
          title="WhatsApp Principal Rev. Santhosh Chacko"
          aria-label="WhatsApp"
        >
          <MessageSquare className="w-6 h-6" />
        </a>

        <button
          onClick={handleOpenGeneralApply}
          className="px-4 py-3 rounded bg-[#1A365D] hover:bg-[#112440] text-[#D4AF37] font-bold text-xs sm:text-sm shadow-2xl flex items-center gap-2 transition-transform hover:scale-105 active:scale-95 border-2 border-[#D4AF37] cursor-pointer uppercase tracking-wider"
        >
          <GraduationCap className="w-4 h-4" />
          <span className="hidden sm:inline">{t('navApplyNow')} 2026–2027</span>
          <span className="sm:hidden">{t('navApplyNow')}</span>
        </button>
      </div>

    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AdminDataProvider>
        <MainAppContent />
      </AdminDataProvider>
    </LanguageProvider>
  );
}
