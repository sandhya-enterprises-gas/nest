import React, { useState } from 'react';
import { 
  FileDown, 
  Calendar, 
  Users, 
  BookOpen, 
  Lock, 
  Clock, 
  Info,
  Mail,
  ShieldCheck
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useAdminData } from '../context/AdminDataContext';

export const FutureSectionsPlaceholder: React.FC = () => {
  const { currentLanguage } = useLanguage();
  const { institutionInfo } = useAdminData();
  const [activeTab, setActiveTab] = useState<'downloads' | 'news' | 'alumni' | 'research' | 'portal'>('downloads');

  const tabs = [
    { id: 'downloads' as const, labelEn: 'Downloads & Forms', labelKn: 'ದಾಖಲೆಗಳು & ನಮೂನೆಗಳು', icon: FileDown },
    { id: 'news' as const, labelEn: 'News & Events', labelKn: 'ಸುದ್ದಿ & ಕಾರ್ಯಕ್ರಮಗಳು', icon: Calendar },
    { id: 'alumni' as const, labelEn: 'Alumni Network', labelKn: 'ಹಳೆಯ ವಿದ್ಯಾರ್ಥಿಗಳ ಸಂಘ', icon: Users },
    { id: 'research' as const, labelEn: 'Publications & Research', labelKn: 'ಪ್ರಕಟಣೆಗಳು & ಸಂಶೋಧನೆ', icon: BookOpen },
    { id: 'portal' as const, labelEn: 'Student Portal', labelKn: 'ವಿದ್ಯಾರ್ಥಿ ಪೋರ್ಟಲ್', icon: Lock },
  ];

  return (
    <section id="institutional-updates" className="py-16 sm:py-20 bg-[#F4F1EA] text-[#2D2D2D] border-b border-[#D1C7B7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#1A365D] text-[#D4AF37] text-xs font-sans font-bold uppercase tracking-widest border border-[#D4AF37]">
            <Info className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>{currentLanguage === 'kn' ? 'ಸಂಸ್ಥೆಯ ಅಧಿಕೃತ ದಾಖಲೆಗಳು' : 'Institutional Directory'}</span>
          </div>
          
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1A365D] tracking-tight">
            {currentLanguage === 'kn' ? 'ಅಧಿಕೃತ ದಾಖಲಾತಿಗಳು & ಸಂಪನ್ಮೂಲಗಳು' : 'Institutional Resources & Updates'}
          </h2>
          
          <p className="text-slate-600 text-xs sm:text-sm font-sans max-w-xl mx-auto">
            {currentLanguage === 'kn'
              ? 'ಅಧಿಕೃತವಾಗಿ ಪರಿಶೀಲಿಸಲ್ಪಟ್ಟ ದಾಖಲೆಗಳು, ಪ್ರಕಟಣೆಗಳು ಹಾಗೂ ಕ್ಯಾಲೆಂಡರ್ ಮಾಹಿತಿಗಳು ಆಡಳಿತ ಮಂಡಳಿಯಿಂದ ಇಲ್ಲಿ ಪ್ರಕಟಿಸಲ್ಪಡುತ್ತವೆ.'
              : 'Officially verified administrative documents, schedules, and institutional resources published by seminary administration.'}
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {tabs.map((tab) => {
            const IconComp = tab.icon;
            const isSelected = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-sans font-bold flex items-center gap-2 transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#1A365D] text-white shadow-md border-2 border-[#D4AF37]'
                    : 'bg-white text-slate-700 hover:bg-[#EAE4D7] border border-[#D1C7B7]'
                }`}
              >
                <IconComp className={`w-4 h-4 ${isSelected ? 'text-[#D4AF37]' : 'text-slate-500'}`} />
                <span>{currentLanguage === 'kn' ? tab.labelKn : tab.labelEn}</span>
              </button>
            );
          })}
        </div>

        {/* Dignified Factual Placeholder Box */}
        <div className="bg-white rounded-2xl border-2 border-[#D1C7B7] p-8 sm:p-12 text-center max-w-2xl mx-auto shadow-sm space-y-4">
          <div className="w-14 h-14 rounded-full bg-[#F4F1EA] border border-[#D4AF37] flex items-center justify-center mx-auto text-[#1A365D]">
            <Clock className="w-7 h-7 text-[#D4AF37]" />
          </div>

          <div className="space-y-1.5">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1A365D]">
              {tabs.find(t => t.id === activeTab)?.[currentLanguage === 'kn' ? 'labelKn' : 'labelEn']}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
              {currentLanguage === 'kn'
                ? 'ಈ ವಿಭಾಗದ ಅಧಿಕೃತ ಮಾಹಿತಿಗಳು ಮತ್ತು ದಾಖಲೆಗಳು ಆಡಳಿತ ಮಂಡಳಿಯ ಅನುಮೋದನೆಯ ನಂತರ ಇಲ್ಲಿ ಪ್ರಕಟಗೊಳ್ಳುತ್ತವೆ. ಪ್ರಸ್ತುತ ಮಾಹಿತಿಗಾಗಿ ಕಚೇರಿಯನ್ನು ಸಂಪರ್ಕಿಸಿ.'
                : 'Official institutional documents, announcements, and portal updates are published here following direct administrative authorization. No unverified content is displayed.'}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#F4F1EA] border border-[#D1C7B7] text-xs font-sans text-slate-700 space-y-1 text-left">
            <div className="flex items-center gap-2 text-[#1A365D] font-bold">
              <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
              <span>Official Inquiries:</span>
            </div>
            <p className="pl-6 text-slate-600">
              For direct assistance or current institutional forms, contact the Principal&apos;s Office:
            </p>
            <p className="pl-6 font-mono text-[#1A365D] font-bold">
              {institutionInfo.email} • {institutionInfo.phoneFormatted}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
