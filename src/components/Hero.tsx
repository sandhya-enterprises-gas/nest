import React, { useState, useEffect } from 'react';
import { BookOpen, GraduationCap, MapPin, Phone, ArrowRight, CheckCircle2, Award, Languages, Camera, ChevronRight } from 'lucide-react';
import { NestLogo } from './NestLogo';
import { useLanguage } from '../context/LanguageContext';
import { useAdminData } from '../context/AdminDataContext';

interface HeroProps {
  onOpenApplyModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenApplyModal }) => {
  const { currentLanguage, t } = useLanguage();
  const { institutionInfo } = useAdminData();
  const INSTITUTION_INFO = institutionInfo;

  // Authentic campus photos slideshow items
  const heroSlides = [
    {
      img: '/assets/aistudio/college_48f40f17.webp',
      titleEn: 'Academic Complex & Campus',
      titleKn: 'ಮುಖ್ಯ ಶೈಕ್ಷಣಿಕ ಸೌಧ, ಮೈಸೂರು',
      subEn: 'Modern Theological Lecture Facilities',
      subKn: 'ಆಧುನಿಕ ದೇವತಾಶಾಸ್ತ್ರ ಶಿಕ್ಷಣ ಸೌಲಭ್ಯ',
    },
    {
      img: '/assets/aistudio/techers_e3355ac8.webp',
      titleEn: 'Resident Faculty & Leadership',
      titleKn: 'ಪೂರ್ಣಕಾಲಿಕ ಅಧ್ಯಾಪಕ ವೃಂದ',
      subEn: 'Scholarly Mentorship in Scripture',
      subKn: 'ಸತ್ಯವೇದದ ಆಳವಾದ ಮಾರ್ಗದರ್ಶನ',
    },
    {
      img: '/assets/aistudio/chapel_d7e08b0f.webp',
      titleEn: 'Seminary Chapel & Devotion',
      titleKn: 'ಸೆಮಿನರಿ ಚಾಪೆಲ್ ಆರಾಧನೆ',
      subEn: 'Daily Worship, Preaching & Prayer',
      subKn: 'ದೈನಂದಿನ ಆರಾಧನೆ & ಉಪವಾಸ ಪ್ರಾರ್ಥನೆ',
    },
    {
      img: '/assets/aistudio/5_81316861.webp',
      titleEn: '7th Graduation Convocation',
      titleKn: '7ನೇ ಪದವಿ ಪ್ರದಾನ ಮಹೋತ್ಸವ',
      subEn: 'Conferring ATA Recognized Degrees',
      subKn: 'ATA India ಅಧಿಕೃತ ಪದವಿ ಪ್ರದಾನ',
    },
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  return (
    <section id="top" className="relative bg-[#1A365D] text-white overflow-hidden border-b-4 border-[#D4AF37]">
      {/* Refined theological background with royal navy & gold radial ambience */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#0c192c] via-[#1A365D] to-[#112440]">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#D4AF37] via-transparent to-transparent"></div>
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-[#D4AF37] via-transparent to-transparent"></div>
      </div>

      {/* Decorative Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-14 sm:pt-14 sm:pb-20 lg:pt-16 lg:pb-24">
        
        {/* Top Grid: Main Headlines & Official Crest / Campus Spotlight */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Main Hero Content (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Top Pill / ATA Accreditation Badge */}
            <div className="flex flex-wrap items-center gap-2.5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#112440] border border-[#D4AF37] text-[#D4AF37] text-xs font-sans font-bold uppercase tracking-widest backdrop-blur-sm shadow-md">
                <Award className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>ATA India Accredited</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-slate-200 text-xs font-sans font-medium tracking-wide">
                <span>Mysore, Karnataka</span>
                <span className="text-[#D4AF37]">•</span>
                <span>{t('admissionsOpen')}</span>
              </div>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12]">
                {currentLanguage === 'en' ? (
                  <>
                    Empowering Faith through <span className="text-[#D4AF37] italic">Scholarship</span> &amp; Native Calling.
                  </>
                ) : (
                  <>
                    {t('heroMotto')}
                  </>
                )}
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-slate-200 font-sans leading-relaxed max-w-2xl opacity-95">
                {t('heroSub')}
              </p>
            </div>

            {/* Scripture Anchor Banner */}
            <div className="bg-[#112440]/90 border-l-4 border-[#D4AF37] rounded-r-xl p-5 backdrop-blur-sm max-w-2xl shadow-lg">
              <p className="italic text-base sm:text-lg text-slate-100 font-serif leading-relaxed">
                &ldquo;I am the vine; you are the branches. If you remain in me and I in you, you will bear much fruit; apart from me you can do nothing.&rdquo;
              </p>
              <div className="flex items-center justify-between mt-3 pt-2.5 border-t border-white/10 text-xs font-sans font-bold text-[#D4AF37] tracking-widest uppercase">
                <span>John 15:5 — Foundational Scripture of NEST</span>
                <span className="text-slate-300 font-normal">Official Emblem Vision</span>
              </div>
            </div>

            {/* Official Mediums & Languages Supported Pill */}
            <div className="p-3 bg-[#112440]/80 rounded-xl border border-[#D4AF37]/50 flex flex-wrap items-center gap-2 text-xs font-sans text-slate-200">
              <div className="flex items-center gap-1.5 text-[#D4AF37] font-bold uppercase tracking-wider text-[10px]">
                <Languages className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Medium of Instruction:</span>
              </div>
              <div className="flex flex-wrap items-center gap-1.5 text-[11px]">
                <span className="px-2 py-0.5 rounded bg-[#D4AF37]/20 text-[#D4AF37] font-bold">English Medium (Official)</span>
                <span className="px-2 py-0.5 rounded bg-white/10 text-white font-medium">Kannada &amp; English Combined (Dip.Th)</span>
              </div>
            </div>

            {/* Call to Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <button
                onClick={onOpenApplyModal}
                className="bg-[#D4AF37] text-[#1A365D] hover:bg-white hover:text-[#1A365D] px-7 py-3.5 font-sans font-bold uppercase tracking-wider text-xs sm:text-sm rounded shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0 inline-flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] cursor-pointer"
              >
                <GraduationCap className="w-5 h-5" />
                <span>{t('navApplyNow')}</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>

              <a
                href="#programs"
                className="border border-white/40 px-5 py-3.5 font-sans font-bold uppercase tracking-wider text-xs sm:text-sm hover:bg-white/10 text-white rounded transition-all inline-flex items-center gap-2 cursor-pointer"
              >
                <BookOpen className="w-4 h-4 text-[#D4AF37]" />
                <span>Degrees (B.Th, M.Div, Dip.Th)</span>
              </a>

              <a
                href={`tel:${INSTITUTION_INFO.phone}`}
                className="px-4 py-3.5 rounded bg-[#112440] hover:bg-[#1A365D] text-[#D4AF37] border border-[#D4AF37] text-xs font-sans font-bold uppercase tracking-wider transition-all inline-flex items-center gap-2 cursor-pointer"
              >
                <Phone className="w-4 h-4 text-[#D4AF37]" />
                <span>Call Desk: {INSTITUTION_INFO.phoneFormatted}</span>
              </a>
            </div>

            {/* Trust & Distinctives Checklist */}
            <div className="pt-4 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs sm:text-sm text-slate-200 font-sans">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                <span>ATA India Accredited</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                <span>Biblical Inerrancy</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                <span>Residential Mysore Campus</span>
              </div>
            </div>

          </div>

          {/* Right Column: Official Institutional Logo Plaque + Quick Campus Showcase */}
          <div className="lg:col-span-5 flex flex-col justify-center items-center">
            <div className="w-full flex flex-col items-center text-center space-y-4 py-2">
              
              {/* Prestigious Official Logo Plaque */}
              <div className="w-full max-w-md">
                <NestLogo size="2xl" variant="card" />
              </div>

              {/* Direct Principal Contact Desk & Quick Actions */}
              <div className="w-full max-w-md space-y-2.5 pt-1">
                <a
                  href={`https://wa.me/918880111763?text=Hello%20Principal%20Rev.%20Santhosh%20Chacko%2C%20I%20am%20inquiring%20about%20admissions%20and%20faculty%20at%20NEST%20Mysore.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-lg transition-colors inline-flex items-center justify-center gap-2 shadow-lg border border-emerald-400 uppercase tracking-wider cursor-pointer"
                >
                  <span>{t('whatsappPrincipal')}</span>
                </a>

                <button
                  onClick={onOpenApplyModal}
                  className="w-full py-3 rounded-lg bg-[#D4AF37] hover:bg-white text-[#1A365D] font-sans font-bold uppercase tracking-wider text-xs transition-colors text-center shadow-lg cursor-pointer"
                >
                  {t('navApplyNow')} 2026–2027
                </button>
              </div>

            </div>
          </div>

        </div>

        {/* Authentic Campus Photograph Slider / Highlights Strip (100% Real Photos) */}
        <div className="mt-12 pt-8 border-t border-white/15">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-5">
            <div className="space-y-0.5">
              <div className="flex items-center gap-2 text-[#D4AF37] text-xs font-sans font-bold uppercase tracking-wider">
                <Camera className="w-4 h-4 text-[#D4AF37]" />
                <span>{currentLanguage === 'kn' ? 'ನಮ್ಮ ನೈಜ ಕ್ಯಾಂಪಸ್ ನೋಟ' : 'Authentic Campus Glimpses'}</span>
              </div>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-white">
                {currentLanguage === 'kn' ? 'ನಾಗರಹಳ್ಳಿ ಕ್ಯಾಂಪಸ್ & ಚಟುವಟಿಕೆಗಳು' : 'Nagarthalli Campus, Mysore in Action'}
              </h3>
            </div>

            <a
              href="#gallery"
              className="text-xs font-sans font-bold text-[#D4AF37] hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <span>{currentLanguage === 'kn' ? 'ಸಂಪೂರ್ಣ ಗ್ಯಾಲರಿ ವೀಕ್ಷಿಸಿ (18 ಫೋಟೋಗಳು)' : 'View All 18 Photos in Gallery'}</span>
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          {/* 4 Authentic Photo Preview Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {heroSlides.map((slide, idx) => {
              const isActive = activeSlide === idx;
              return (
                <a
                  key={idx}
                  href="#gallery"
                  onClick={() => setActiveSlide(idx)}
                  className={`group relative rounded-xl overflow-hidden aspect-[4/3] border-2 transition-all cursor-pointer ${
                    isActive ? 'border-[#D4AF37] shadow-lg ring-2 ring-[#D4AF37]/50' : 'border-white/20 hover:border-[#D4AF37]/80'
                  }`}
                >
                  <img
                    src={slide.img}
                    alt={slide.titleEn}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent"></div>
                  
                  <div className="absolute bottom-2 left-2 right-2 space-y-0.5">
                    <p className="font-serif font-bold text-xs sm:text-sm text-white leading-tight drop-shadow">
                      {currentLanguage === 'kn' ? slide.titleKn : slide.titleEn}
                    </p>
                    <p className="text-[10px] text-slate-300 truncate font-sans">
                      {currentLanguage === 'kn' ? slide.subKn : slide.subEn}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
