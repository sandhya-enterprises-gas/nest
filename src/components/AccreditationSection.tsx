import React from 'react';
import { Award, ShieldCheck, CheckCircle2, ExternalLink, GraduationCap, Mail, Phone, MapPin, UserCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useAdminData } from '../context/AdminDataContext';

interface AccreditationSectionProps {
  onOpenApplyModal: () => void;
}

export const AccreditationSection: React.FC<AccreditationSectionProps> = ({ onOpenApplyModal }) => {
  const { currentLanguage, t } = useLanguage();
  const { institutionInfo } = useAdminData();
  const INSTITUTION_INFO = institutionInfo;

  return (
    <section id="accreditation" className="py-16 sm:py-24 bg-[#E9E4DB] text-[#2D2D2D] border-b-2 border-[#D4AF37]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Pill & Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#1A365D] text-[#D4AF37] text-xs font-sans font-bold uppercase tracking-widest border border-[#D4AF37]">
            <Award className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>{t('accreditationBadge')}</span>
          </div>
          
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A365D] tracking-tight">
            {t('accreditationHeading')}
          </h2>
          
          <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-sans max-w-2xl mx-auto">
            {t('accreditationSummary')}
          </p>
        </div>

        {/* Master Accreditation & Governance Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Card 1: Official ATA India Accreditation Verification (7 Cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border-2 border-[#D4AF37] shadow-xl flex flex-col justify-between space-y-6">
            
            <div className="space-y-5">
              {/* Header with ATA Badge */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-[#D1C7B7]">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#D4AF37] uppercase tracking-wider">
                    <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                    <span>{currentLanguage === 'kn' ? 'ಅಧಿಕೃತ ಮಾನ್ಯತೆ ಪರಿಶೀಲನೆ' : 'Accreditation Verification'}</span>
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-[#1A365D]">
                    Asia Theological Association India
                  </h3>
                  <p className="text-xs text-slate-600 font-sans">
                    {currentLanguage === 'kn'
                      ? 'ಏಷ್ಯಾದ ಪ್ರಮುಖ ಇವಾಂಜೆಲಿಕಲ್ ದೇವತಾಶಾಸ್ತ್ರ ಶಿಕ್ಷಣ ಸಂಸ್ಥೆಗಳ ಅಧಿಕೃತ ಮಾನ್ಯತಾ ಮಂಡಳಿ'
                      : 'Regional Evangelical Accrediting Agency for Theological Institutions across Asia'}
                  </p>
                </div>

                <div className="px-3.5 py-1.5 rounded bg-[#1A365D] text-[#D4AF37] border border-[#D4AF37] text-xs font-bold font-sans uppercase tracking-widest text-center self-start sm:self-center">
                  {currentLanguage === 'kn' ? 'ಮಾನ್ಯತೆ ಪಡೆದ ಸದಸ್ಯ ಸಂಸ್ಥೆ' : 'Accredited Member'}
                </div>
              </div>

              {/* Accredited Degrees List */}
              <div className="space-y-3">
                <span className="text-xs font-bold text-[#1A365D] uppercase tracking-wider block font-sans">
                  {currentLanguage === 'kn'
                    ? 'ATA India ಮಾನ್ಯತೆ ಪಡೆದ ಪದವಿ ಕೋರ್ಸ್‌ಗಳು:'
                    : 'ATA India Accredited Theological Degree Programs:'}
                </span>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-3.5 rounded-xl bg-[#F4F1EA] border border-[#D1C7B7] text-center space-y-1">
                    <span className="font-bold text-sm text-[#1A365D] block">B.Th</span>
                    <span className="text-[11px] text-slate-700 font-medium block">
                      {currentLanguage === 'kn' ? 'ಬ್ಯಾಚುಲರ್ ಆಫ್ ಥಿಯಾಲಜಿ' : 'Bachelor of Theology'}
                    </span>
                    <span className="text-[10px] text-[#D4AF37] font-bold uppercase tracking-wider block font-sans">
                      {currentLanguage === 'kn' ? '3 ವರ್ಷಗಳು · ಇಂಗ್ಲಿಷ್' : '3 Years · English'}
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#F4F1EA] border border-[#D1C7B7] text-center space-y-1">
                    <span className="font-bold text-sm text-[#1A365D] block">M.Div</span>
                    <span className="text-[11px] text-slate-700 font-medium block">
                      {currentLanguage === 'kn' ? 'ಮಾಸ್ಟರ್ ಆಫ್ ಡಿವಿನಿಟಿ' : 'Master of Divinity'}
                    </span>
                    <span className="text-[10px] text-[#D4AF37] font-bold uppercase tracking-wider block font-sans">
                      {currentLanguage === 'kn' ? '2-3 ವರ್ಷಗಳು · ಇಂಗ್ಲಿಷ್' : '2-3 Years · English'}
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#F4F1EA] border border-[#D1C7B7] text-center space-y-1">
                    <span className="font-bold text-sm text-[#1A365D] block">Dip.Th</span>
                    <span className="text-[11px] text-slate-700 font-medium block">
                      {currentLanguage === 'kn' ? 'ಡಿಪ್ಲೊಮಾ ಇನ್ ಥಿಯಾಲಜಿ' : 'Diploma in Theology'}
                    </span>
                    <span className="text-[10px] text-[#D4AF37] font-bold uppercase tracking-wider block font-sans">
                      {currentLanguage === 'kn' ? '2 ವರ್ಷಗಳು · ಕನ್ನಡ & Eng' : '2 Years · Kannada & Eng'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Quality & Standards Checklist */}
              <div className="space-y-2.5 pt-2 border-t border-[#D1C7B7] text-xs text-slate-700 font-sans">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1A365D] mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>{currentLanguage === 'kn' ? 'ಸತ್ಯವೇದಾಧಾರಿತ ಸಿದ್ಧಾಂತದ ಸಮಗ್ರತೆ:' : 'Evangelical Doctrinal Integrity:'}</strong>{' '}
                    {currentLanguage === 'kn'
                      ? 'ಸತ್ಯವೇದದ ಅಚಲ ಸತ್ಯ, ಅಪೋಸ್ತಲರ ಉಪದೇಶ ಹಾಗೂ ಕ್ರಿಸ್ತ-ಕೇಂದ್ರಿತ ಬೋಧನೆ.'
                      : 'Adherence to sound biblical exposition, historical orthodoxy, and Christ-centered hermeneutics.'}
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1A365D] mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>{currentLanguage === 'kn' ? 'ಅರ್ಹ ಪ್ರಾಧ್ಯಾಪಕ ವರ್ಗ:' : 'Qualified Resident Faculty:'}</strong>{' '}
                    {currentLanguage === 'kn'
                      ? 'ಉನ್ನತ ದೇವತಾಶಾಸ್ತ್ರ ಶಿಕ್ಷಣ, ದೈವಿಕ ಕರೆ ಮತ್ತು ಸಂಶೋಧನಾ ಅನುಭವವುಳ್ಳ ಪೂರ್ಣಕಾಲಿಕ ಅಧ್ಯಾಪಕರು.'
                      : 'Highly trained theological educators holding postgraduate and doctoral research credentials.'}
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1A365D] mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>{currentLanguage === 'kn' ? 'ಸಮೃದ್ಧ ಗ್ರಂಥಾಲಯ ಸೌಲಭ್ಯ:' : 'Comprehensive Theological Library:'}</strong>{' '}
                    {currentLanguage === 'kn'
                      ? 'ಸತ್ಯವೇದ ನಿಘಂಟುಗಳು, ವ್ಯಾಖ್ಯಾನ ಗ್ರಂಥಗಳು ಮತ್ತು ಚರ್ಚ್ ಇತಿಹಾಸದ ಗ್ರಂಥಗಳ ಭಂಡಾರ.'
                      : 'Extensive biblical commentaries, languages reference books, church history texts, and research resources.'}
                  </span>
                </div>
              </div>
            </div>

            {/* Official Directory Link Button */}
            <div className="pt-4 border-t border-[#D1C7B7] flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs text-slate-600 font-sans">
                {currentLanguage === 'kn' ? 'ATA India ನೋಂದಣಿ ಐಡಿ:' : 'Official Directory Listing ID:'}{' '}
                <code className="font-mono font-bold text-[#1A365D]">native-evangelical-school-of-theology-2</code>
              </span>
              
              <a
                href={INSTITUTION_INFO.accreditation.directoryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-2.5 bg-[#1A365D] hover:bg-[#112440] text-[#D4AF37] font-sans font-bold text-xs uppercase tracking-wider rounded border border-[#D4AF37] transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                <span>{t('viewAtaDirectory')}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

          {/* Card 2: Principal's Office & Institutional Leadership (5 Cols) */}
          <div className="lg:col-span-5 bg-[#1A365D] text-white rounded-2xl p-6 sm:p-8 border-2 border-[#D4AF37] shadow-xl flex flex-col justify-between space-y-6">
            
            <div className="space-y-5">
              
              {/* Principal Lockup with Authentic Photo */}
              <div className="flex items-center gap-3.5 pb-4 border-b border-white/20">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#D4AF37] flex-shrink-0 shadow-md bg-black">
                  <img
                    src="/assets/aistudio/pricipal_7db520a9.webp"
                    alt={INSTITUTION_INFO.principal}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div>
                  <span className="text-xs text-[#D4AF37] font-bold uppercase tracking-wider block font-sans">
                    {currentLanguage === 'kn' ? 'ಸಂಸ್ಥೆಯ ನಾಯಕತ್ವ' : 'Institutional Leadership'}
                  </span>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-white leading-tight">
                    {currentLanguage === 'kn' ? 'ರೆವ. ಸಂತೋಷ್ ಕೆ. ಚಾಕೊ, ಪ್ರಿನ್ಸಿಪಾಲ್' : INSTITUTION_INFO.principal}
                  </h3>
                  <span className="text-xs text-slate-300 font-sans">
                    {currentLanguage === 'kn' ? 'ಸಂಸ್ಥೆಯ ಮುಖ್ಯಸ್ಥರು · NEST ಮೈಸೂರು' : 'Head of Institution · NEST Mysore'}
                  </span>
                </div>
              </div>

              {/* Verified Principal Qualifications & Office Information */}
              <div className="space-y-3 font-sans text-xs sm:text-sm text-slate-200 leading-relaxed bg-[#112440]/80 p-4 rounded-xl border border-white/10">
                <div className="flex items-center justify-between pb-2 border-b border-white/10">
                  <span className="text-xs text-[#D4AF37] font-bold uppercase tracking-wider">
                    {currentLanguage === 'kn' ? 'ಶೈಕ್ಷಣಿಕ ಅರ್ಹತೆಗಳು' : 'Academic Credentials'}
                  </span>
                  <span className="font-mono font-bold text-white bg-white/10 px-2 py-0.5 rounded text-xs">
                    M.Th, B.D, B.Th
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {currentLanguage === 'kn'
                    ? 'ರೆವ. ಸಂತೋಷ್ ಕೆ. ಚಾಕೊ ರವರು NEST ಮೈಸೂರು ಸಂಸ್ಥೆಯ ಪ್ರಾಂಶುಪಾಲರಾಗಿದ್ದು, ಶೈಕ್ಷಣಿಕ ಪ್ರವೇಶ, ಕೋರ್ಸ್‌ಗಳ ಪರಿಶೀಲನೆ ಹಾಗೂ ಸಂಸ್ಥೆಯ ಆಡಳಿತವನ್ನು ನೇರವಾಗಿ ನಿರ್ವಹಿಸುತ್ತಾರೆ.'
                    : 'Rev. Santhosh K. Chacko serves as Principal of Native Evangelical School of Theology, overseeing academic leadership, ATA accreditation compliance, and ministerial training in Mysore.'}
                </p>
              </div>

              {/* Direct Official Contact Registry */}
              <div className="space-y-2.5 text-xs text-slate-200 font-sans">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#D4AF37] mt-0.5 flex-shrink-0" />
                  <span className="leading-snug">{t('fullAddress')}</span>
                </div>
                
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                  <a href={`tel:${INSTITUTION_INFO.phone}`} className="font-mono text-[#D4AF37] font-bold hover:underline">
                    {INSTITUTION_INFO.phoneFormatted}
                  </a>
                </div>

                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                  <a href={`mailto:${INSTITUTION_INFO.email}`} className="font-mono text-slate-200 hover:text-[#D4AF37] hover:underline">
                    {INSTITUTION_INFO.email}
                  </a>
                </div>
              </div>

            </div>

            {/* Application CTA */}
            <div className="pt-4 border-t border-white/20">
              <button
                onClick={onOpenApplyModal}
                className="w-full py-3 rounded bg-[#D4AF37] hover:bg-white text-[#1A365D] font-sans font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg cursor-pointer"
              >
                <GraduationCap className="w-4 h-4" />
                <span>{t('navApplyNow')} 2026–2027</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
