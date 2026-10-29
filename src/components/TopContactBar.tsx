import React from 'react';
import { Phone, Mail, MapPin, Youtube, Facebook, ArrowUpRight, Lock, ShieldCheck } from 'lucide-react';
import { LanguageSelector } from './LanguageSelector';
import { useLanguage } from '../context/LanguageContext';
import { useAdminData } from '../context/AdminDataContext';

interface TopContactBarProps {
  onOpenAdminLogin: () => void;
  onOpenAdminPortal: () => void;
}

export const TopContactBar: React.FC<TopContactBarProps> = ({
  onOpenAdminLogin,
  onOpenAdminPortal,
}) => {
  const { t, currentLanguage } = useLanguage();
  const { institutionInfo, announcements, isAdminLoggedIn } = useAdminData();

  // Active announcement
  const activeAnnouncement = announcements.find((a) => a.isActive) || announcements[0];

  return (
    <div className="w-full">
      {/* Top Utility Bar */}
      <div className="bg-[#112440] text-slate-300 text-xs border-b border-[#D4AF37]/30 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex flex-wrap items-center justify-between gap-y-2 gap-x-4">
          
          {/* Left side: Contact points */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-1">
            {/* Phone */}
            <a
              href={`tel:${institutionInfo.phone}`}
              className="flex items-center gap-1.5 hover:text-[#D4AF37] transition-colors group"
              title="Call Native Evangelical School of Theology"
            >
              <Phone className="w-3.5 h-3.5 text-[#D4AF37] group-hover:scale-110 transition-transform" />
              <span className="font-semibold tracking-wide font-sans">{institutionInfo.phoneFormatted}</span>
            </a>

            {/* Email */}
            <a
              href={`mailto:${institutionInfo.email}?subject=Inquiry%20regarding%20Theological%20Studies%20at%20NEST`}
              className="flex items-center gap-1.5 hover:text-[#D4AF37] transition-colors group"
              title="Email NEST Admissions & Administration"
            >
              <Mail className="w-3.5 h-3.5 text-[#D4AF37] group-hover:scale-110 transition-transform" />
              <span className="font-sans">{institutionInfo.email}</span>
            </a>

            {/* Location & ATA Directory Link */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href={institutionInfo.socialLinks.location}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-[#D4AF37] transition-colors group"
                title="Open Campus Location on Google Maps"
              >
                <MapPin className="w-3.5 h-3.5 text-[#D4AF37] group-hover:scale-110 transition-transform" />
                <span className="truncate max-w-[220px]">Mysore, Karnataka, India</span>
              </a>

              <span className="text-white/20">•</span>

              <a
                href={institutionInfo.accreditation.directoryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-[#D4AF37] hover:underline font-bold text-[11px]"
                title="View Asia Theological Association (ATA India) Accreditation"
              >
                <span>ATA India Accredited</span>
                <ArrowUpRight className="w-3 h-3 text-[#D4AF37]" />
              </a>
            </div>
          </div>

          {/* Right side: Language Selector, Admin Portal Login & Socials */}
          <div className="flex items-center gap-2.5 ml-auto">
            
            {/* Admin Login / Portal Button */}
            {isAdminLoggedIn ? (
              <button
                onClick={onOpenAdminPortal}
                className="px-2.5 py-1 rounded bg-[#D4AF37] text-[#1A365D] hover:bg-white text-[11px] font-sans font-bold uppercase tracking-wider flex items-center gap-1 cursor-pointer shadow-sm transition-all"
                title="Open Admin Portal"
              >
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>{currentLanguage === 'kn' ? 'ಆಡಳಿತ ಪೋರ್ಟಲ್' : 'Admin Portal'}</span>
              </button>
            ) : (
              <button
                onClick={onOpenAdminLogin}
                className="px-2.5 py-1 rounded bg-white/10 hover:bg-[#D4AF37] hover:text-[#1A365D] text-slate-200 border border-white/20 hover:border-[#D4AF37] text-[11px] font-sans font-bold uppercase tracking-wider flex items-center gap-1.5 cursor-pointer transition-all"
                title="Administrator Login"
              >
                <Lock className="w-3 h-3 text-[#D4AF37]" />
                <span>{currentLanguage === 'kn' ? 'ಅಡ್ಮಿನ್ ಲಾಗಿನ್' : 'Admin Login'}</span>
              </button>
            )}

            {/* Language Selector */}
            <div className="flex items-center">
              <LanguageSelector variant="topbar" />
            </div>

            <div className="flex items-center gap-2 border-l border-white/20 pl-2.5">
              {/* Facebook */}
              <a
                href={institutionInfo.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1 rounded hover:bg-[#1A365D] text-slate-300 hover:text-[#D4AF37] transition-colors"
                title="Official Facebook Page"
                aria-label="Facebook"
              >
                <Facebook className="w-3.5 h-3.5" />
              </a>

              {/* YouTube */}
              <a
                href={institutionInfo.socialLinks.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1 rounded hover:bg-[#1A365D] text-slate-300 hover:text-[#D4AF37] transition-colors"
                title="Official YouTube Channel"
                aria-label="YouTube"
              >
                <Youtube className="w-3.5 h-3.5" />
              </a>

              {/* Google Location */}
              <a
                href={institutionInfo.socialLinks.location}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1 rounded hover:bg-[#1A365D] text-slate-300 hover:text-[#D4AF37] transition-colors"
                title="Campus Map Location"
                aria-label="Google Maps Location"
              >
                <MapPin className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Official Institutional Bulletin Ribbon (ATA India Standard) */}
      {activeAnnouncement && (
        <div className="bg-[#0c192c] text-[#D4AF37] text-[11px] sm:text-xs py-1.5 px-4 border-b border-[#D4AF37]/30 shadow-inner">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded bg-[#D4AF37] text-[#1A365D] font-bold uppercase tracking-wider text-[10px]">
                {currentLanguage === 'kn' ? activeAnnouncement.badgeKn : activeAnnouncement.badgeEn}
              </span>
              <span className="text-slate-200">
                {currentLanguage === 'kn' ? activeAnnouncement.titleKn : activeAnnouncement.titleEn}
              </span>
            </div>

            <div className="hidden lg:flex items-center gap-4 text-slate-300">
              <span>{currentLanguage === 'kn' ? activeAnnouncement.subKn : activeAnnouncement.subEn}</span>
              {activeAnnouncement.linkUrl && (
                <>
                  <span className="text-[#D4AF37]">•</span>
                  <a
                    href={activeAnnouncement.linkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#D4AF37] hover:underline flex items-center gap-1 font-semibold"
                  >
                    <span>{currentLanguage === 'kn' ? (activeAnnouncement.linkTextKn || 'ವಿವರ ನೋಡಿ') : (activeAnnouncement.linkTextEn || 'Verify Listing')}</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
