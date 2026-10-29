import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, GraduationCap, ChevronRight, Lock, ShieldCheck } from 'lucide-react';
import { NestLogo } from './NestLogo';
import { useLanguage } from '../context/LanguageContext';
import { LanguageSelector } from './LanguageSelector';
import { useAdminData } from '../context/AdminDataContext';

interface NavbarProps {
  onOpenApplyModal: () => void;
  onOpenAdminLogin: () => void;
  onOpenAdminPortal: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  onOpenApplyModal, 
  onOpenAdminLogin,
  onOpenAdminPortal,
  activeSection 
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t, currentLanguage } = useLanguage();
  const { institutionInfo, isAdminLoggedIn } = useAdminData();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('navAbout'), href: '#about' },
    { name: t('navAccreditation'), href: '#accreditation' },
    { name: t('navPrograms'), href: '#programs' },
    { name: t('navFaculty'), href: '#faculty' },
    { name: t('navAdmissions'), href: '#admissions' },
    { name: t('navCampusLife'), href: '#campus-life' },
    { name: t('navGallery'), href: '#gallery' },
    { name: t('navFaith'), href: '#faith' },
    { name: t('navContact'), href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 bg-[#1A365D] text-white border-b-4 border-[#D4AF37] ${
        isScrolled ? 'shadow-xl py-2 bg-[#1A365D]/98 backdrop-blur-md' : 'py-2.5 sm:py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3">
          
          {/* Official Brand Logo */}
          <a
            href="#top"
            onClick={(e) => handleNavClick(e, '#top')}
            className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] rounded-lg p-0.5"
            title="Native Evangelical School of Theology - Official Home"
          >
            <div className="flex-shrink-0">
              <NestLogo size="sm" variant="badge" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-sm sm:text-base lg:text-lg font-bold tracking-tight text-white leading-tight group-hover:text-[#D4AF37] transition-colors uppercase">
                {t('institutionName')}
              </span>
              <div className="flex items-center gap-2 text-[10px] sm:text-xs text-slate-300 font-sans tracking-widest uppercase">
                <span className="font-bold text-[#D4AF37]">{t('institutionCity')}</span>
                <span className="text-[#D4AF37] opacity-60">•</span>
                <span className="hidden md:inline text-slate-300">{t('ataAccreditedTag')}</span>
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1.5 text-xs font-sans font-semibold tracking-wider uppercase">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-2.5 py-1.5 rounded transition-all duration-150 relative ${
                    isActive
                      ? 'text-[#D4AF37] font-bold bg-white/10'
                      : 'text-slate-100 hover:text-[#D4AF37] hover:bg-white/5'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-[#D4AF37] rounded-full"></span>
                  )}
                </a>
              );
            })}
          </nav>

          {/* Language Switcher, Admin Button & Action CTAs */}
          <div className="hidden lg:flex items-center gap-2.5">
            {/* Admin Key Button */}
            {isAdminLoggedIn ? (
              <button
                onClick={onOpenAdminPortal}
                className="px-2.5 py-1.5 rounded-lg bg-[#D4AF37] text-[#1A365D] hover:bg-white text-xs font-sans font-bold uppercase tracking-wider flex items-center gap-1.5 cursor-pointer shadow-md transition-all"
                title="Open Administrative CMS"
              >
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>{currentLanguage === 'kn' ? 'ಪೋರ್ಟಲ್' : 'CMS'}</span>
              </button>
            ) : (
              <button
                onClick={onOpenAdminLogin}
                className="p-2 rounded-lg bg-white/10 hover:bg-[#D4AF37] hover:text-[#1A365D] text-slate-300 border border-white/20 text-xs font-sans font-semibold flex items-center gap-1 cursor-pointer transition-colors"
                title="Admin Login"
              >
                <Lock className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span className="text-[11px] font-bold uppercase">{currentLanguage === 'kn' ? 'ಅಡ್ಮಿನ್' : 'Admin'}</span>
              </button>
            )}

            {/* Direct Language Switcher */}
            <LanguageSelector variant="navbar" />

            <button
              onClick={onOpenApplyModal}
              className="bg-[#D4AF37] text-[#1A365D] hover:bg-white hover:text-[#1A365D] px-3.5 py-2 font-sans font-bold uppercase tracking-wider text-xs rounded transition-all shadow-md inline-flex items-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] active:scale-95 cursor-pointer"
            >
              <GraduationCap className="w-4 h-4" />
              <span>{t('navApplyNow')}</span>
            </button>
          </div>

          {/* Mobile Actions: Language Selector & Menu Toggle Button */}
          <div className="flex items-center gap-2 lg:hidden">
            {isAdminLoggedIn ? (
              <button
                onClick={onOpenAdminPortal}
                className="px-2 py-1 rounded bg-[#D4AF37] text-[#1A365D] text-xs font-bold"
              >
                CMS
              </button>
            ) : (
              <button
                onClick={onOpenAdminLogin}
                className="p-1.5 rounded bg-white/10 text-slate-300 border border-white/20"
                title="Admin Login"
              >
                <Lock className="w-4 h-4 text-[#D4AF37]" />
              </button>
            )}

            <LanguageSelector variant="navbar" />

            <button
              onClick={onOpenApplyModal}
              className="hidden sm:inline-flex px-2.5 py-1.5 text-xs font-sans font-bold uppercase tracking-wider text-[#1A365D] bg-[#D4AF37] hover:bg-white rounded cursor-pointer"
            >
              {t('navApplyNow')}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded text-white hover:text-[#D4AF37] hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-[#D4AF37] cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#D4AF37]/40 bg-[#1A365D] text-white px-4 pt-3 pb-6 space-y-2 shadow-2xl animate-in slide-in-from-top-4 duration-200">
          <div className="px-3 py-2.5 mb-3 bg-[#112440] rounded border border-[#D4AF37]/30 flex items-center justify-between">
            <div className="text-xs">
              <p className="font-sans font-bold text-[#D4AF37] uppercase tracking-wider">
                {currentLanguage === 'kn' ? 'ಪ್ರವೇಶಾತಿ ವಿಚಾರಣೆ' : 'Admissions & Inquiries'}
              </p>
              <p className="text-slate-200 font-mono mt-0.5">{institutionInfo.phoneFormatted}</p>
            </div>
            <a
              href={`tel:${institutionInfo.phone}`}
              className="px-3 py-1 bg-[#D4AF37] text-[#1A365D] text-xs font-bold rounded uppercase tracking-wider"
            >
              {currentLanguage === 'kn' ? 'ಕರೆ ಮಾಡಿ' : 'Call Now'}
            </a>
          </div>

          <div className="space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block px-3 py-2.5 rounded text-sm font-sans font-semibold text-slate-100 hover:text-[#D4AF37] hover:bg-white/10 transition-colors flex items-center justify-between"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-white/10 space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenApplyModal();
              }}
              className="w-full py-3 rounded-lg bg-[#D4AF37] hover:bg-white text-[#1A365D] font-sans font-bold uppercase tracking-wider text-xs transition-colors flex items-center justify-center gap-2 shadow-lg cursor-pointer"
            >
              <GraduationCap className="w-4 h-4" />
              <span>{t('navApplyNow')} 2026–2027</span>
            </button>

            {/* Mobile Admin Link */}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (isAdminLoggedIn) {
                  onOpenAdminPortal();
                } else {
                  onOpenAdminLogin();
                }
              }}
              className="w-full py-2.5 rounded-lg bg-white/10 text-slate-200 hover:text-[#D4AF37] text-xs font-bold flex items-center justify-center gap-2 cursor-pointer border border-white/10"
            >
              <Lock className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>{isAdminLoggedIn ? 'Open Admin CMS Portal' : 'Administrator Login'}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
