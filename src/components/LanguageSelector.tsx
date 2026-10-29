import React from 'react';
import { Languages, Check } from 'lucide-react';
import { useLanguage, SUPPORTED_LANGUAGES, LanguageCode } from '../context/LanguageContext';

interface LanguageSelectorProps {
  variant?: 'topbar' | 'navbar' | 'compact';
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({ variant = 'topbar' }) => {
  const { currentLanguage, setLanguage } = useLanguage();

  return (
    <div
      className={`inline-flex items-center rounded-lg border p-0.5 shadow-sm transition-all ${
        variant === 'navbar'
          ? 'bg-[#112440] border-[#D4AF37]/60'
          : 'bg-[#1A365D] border-[#D4AF37]/50'
      }`}
      role="group"
      aria-label="Language selection"
    >
      <div className="hidden sm:flex items-center pl-2 pr-1 text-[#D4AF37]">
        <Languages className="w-3.5 h-3.5" />
      </div>

      <button
        type="button"
        onClick={() => setLanguage('en')}
        className={`px-2.5 py-1 rounded-md text-xs font-sans font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-1.5 ${
          currentLanguage === 'en'
            ? 'bg-[#D4AF37] text-[#1A365D] shadow-md'
            : 'text-slate-200 hover:text-white hover:bg-white/10'
        }`}
        title="Switch to English (Official Academic Medium)"
      >
        <span>🇬🇧</span>
        <span>English</span>
      </button>

      <button
        type="button"
        onClick={() => setLanguage('kn')}
        className={`px-2.5 py-1 rounded-md text-xs font-sans font-bold tracking-wider transition-all cursor-pointer flex items-center gap-1.5 ${
          currentLanguage === 'kn'
            ? 'bg-[#D4AF37] text-[#1A365D] shadow-md font-extrabold'
            : 'text-slate-200 hover:text-white hover:bg-white/10'
        }`}
        title="ಕನ್ನಡಕ್ಕೆ ಬದಲಾಯಿಸಿ (ಅಧಿಕೃತ ರಾಜ್ಯ ಭಾಷೆ)"
      >
        <span>🟡🔴</span>
        <span>ಕನ್ನಡ</span>
      </button>
    </div>
  );
};
