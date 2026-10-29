import React from 'react';
import { BookOpen, Flame, HeartHandshake, CheckCircle2, Clock, ExternalLink, Sparkles, Church } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { INSTITUTION_INFO } from '../data/nestData';

export const CampusLifeSection: React.FC = () => {
  const { currentLanguage } = useLanguage();

  // Daily Schedule of a Seminary Student (from user's screenshot: "ಸೆಮಿನರಿ ವಿದ್ಯಾರ್ಥಿಯ ದೈನಂದಿನ ಕಾರ್ಯಕ್ರಮ")
  const dailySchedule = [
    {
      time: "6:00 AM – 7:30 AM",
      titleEn: "Morning Prayer & Personal Devotion",
      titleKn: "ಮುಂಜಾನೆಯ ಪ್ರಾರ್ಥನೆ",
      descEn: "Personal scripture meditation, corporate prayer for India, and breakfast fellowship.",
      descKn: "ವೈಯಕ್ತಿಕ ಸತ್ಯವೇದ ಧ್ಯಾನ ಮತ್ತು ಸಮೂಹ ಪ್ರಾರ್ಥನೆ ಹಾಗೂ ಉಪಾಹಾರ.",
      icon: Flame,
    },
    {
      time: "8:30 AM – 1:00 PM",
      titleEn: "Classroom Lectures & Biblical Languages",
      titleKn: "ತರಗತಿ ಬೋಧನೆ & ಭಾಷಾ ಅಧ್ಯಯನ",
      descEn: "In-depth teaching in Biblical Greek, Hebrew, Systematic Theology, Church History, and Evangelism.",
      descKn: "ಸತ್ಯವೇದ ಗ್ರೀಕ್, ಹೀಬ್ರೂ, ಧರ್ಮಶಾಸ್ತ್ರ, ಸಭಾ ಇತಿಹಾಸ ಮತ್ತು ಸುವಾರ್ತಾ ತತ್ವಗಳ ಬೋಧನೆ.",
      icon: BookOpen,
    },
    {
      time: "2:00 PM – 5:00 PM",
      titleEn: "Library Research & Ministry Preparation",
      titleKn: "ಗ್ರಂಥಾಲಯ ಅಧ್ಯಯನ & ಸೇವಾ ತಯಾರಿ",
      descEn: "Theological library research, homiletics sermon workshops, and campus community duties.",
      descKn: "ದೇವತಾಶಾಸ್ತ್ರ, ಗ್ರಂಥಾಲಯ ಸಂಶೋಧನೆ, ಪ್ರಸಂಗ ತಯಾರಿ ಕಾರ್ಯಾಗಾರ ಮತ್ತು ಕ್ಯಾಂಪಸ್ ಜವಾಬ್ದಾರಿ.",
      icon: HeartHandshake,
    },
    {
      time: "6:30 PM – 8:30 PM",
      titleEn: "Evening Chapel & Community Fellowship",
      titleKn: "ಸಂಜೆಯ ಚಾಪೆಲ್ & ಸಹವಾಸ",
      descEn: "Evening chapel worship, preaching of the Word, dinner, and fraternal brotherhood gathering.",
      descKn: "ಸಂಜೆಯ ಚಾಪೆಲ್ ಆರಾಧನೆ, ದೈವಜನರ ವಾಕ್ಯ ಸಂದೇಶ, ಭೋಜನ ಹಾಗೂ ಸಹೋದರತ್ವದ ಕೂಟ.",
      icon: Church,
    },
  ];

  // Authentic Milestones Using User's 100% Original Photos
  const milestoneCards = [
    {
      tagEn: "Academic Milestone",
      tagKn: "ಪದವಿ ಪ್ರದಾನ ಸಮಾರಂಭ",
      titleEn: "ATA India Graduation Convocation",
      titleKn: "ATA India ಪದವಿ ಪ್ರಧಾನ ಮಹೋತ್ಸವ",
      descEn: "7th Graduation Ceremony conferring accredited B.Th and M.Div degrees upon dedicated ministers sent out across Karnataka and India.",
      descKn: "ಭಾರತದ ನಾನಾ ಭಾಗಗಳಲ್ಲಿ ಸೇವೆ ಮಾಡಲು ಸಮರ್ಪಿತರಾದ ಪದವೀಧರರಿಗೆ ಬಿ.ಟಿ.ಎಚ್ ಮತ್ತು ಎಂ.ಡಿವ್ ಅಧಿಕೃತ ಪದವಿ ಪ್ರದಾನ ಮಹೋತ್ಸವ.",
      image: '/assets/aistudio/5_81316861.webp',
      alt: "7th Graduation Ceremony of NEST Mysore",
      type: "Academic Milestone",
    },
    {
      tagEn: "Spiritual Life",
      tagKn: "ಚಾಪೆಲ್ ಆರಾಧನೆ & ಪ್ರಾರ್ಥನಾ ಜಾಗರಣೆ",
      titleEn: "Seminary Chapel Worship & Word Ministry",
      titleKn: "ಸೆಮಿನರಿ ಚಾಪೆಲ್‌ನಲ್ಲಿ ಆರಾಧನೆ ಮತ್ತು ಸತ್ಯವೇದ ಪ್ರಸಂಗ",
      descEn: "Heartfelt intercession, earnest Bible exposition, and vibrant choral worship in the campus chapel sanctuary.",
      descKn: "ಕರ್ನಾಟಕ ಮತ್ತು ರಾಷ್ಟ್ರದ ಸುವಾರ್ತೆಗಾಗಿ ಸೆಮಿನರಿ ಚಾಪೆಲ್‌ನಲ್ಲಿ ನಿತ್ಯ ಆರಾಧನೆ, ಉಪವಾಸ ಪ್ರಾರ್ಥನೆ ಹಾಗೂ ವಾಕ್ಯ ಬೋಧನೆ.",
      image: '/assets/aistudio/chapel_d7e08b0f.webp',
      alt: "Seminary Chapel Worship Service at NEST",
      type: "Spiritual Life",
    },
    {
      tagEn: "Community Fellowship",
      tagKn: "ವಿದ್ಯಾರ್ಥಿ ಭೋಜನ ಮತ್ತು ಸಹವಾಸ",
      titleEn: "Residential Fellowship & Student Dining",
      titleKn: "ವಿದ್ಯಾರ್ಥಿ ಭೋಜನಾಲಯ ಮತ್ತು ಸಹೋದರತ್ವ ಕೂಟ",
      descEn: "Sharing nutritious daily meals, spiritual encouragement, and mutual fellowship in the spacious seminary refectory.",
      descKn: "ವಿದ್ಯಾರ್ಥಿಗಳು ಒಟ್ಟಾಗಿ ಊಟ ಸೇವಿಸುತ್ತಾ ಪರಸ್ಪರ ಸಾಕ್ಷ್ಯ, ಪ್ರಾರ್ಥನಾ ವಿನಂತಿ ಹಾಗೂ ಸಹೋದರತ್ವವನ್ನು ಹಂಚಿಕೊಳ್ಳುವ ಸಹವಾಸ.",
      image: '/assets/aistudio/dinig_hall_3a8b4555.webp',
      alt: "Seminary students in dining hall fellowship",
      type: "Student Fellowship",
    },
  ];

  return (
    <section id="campus-life" className="py-16 sm:py-24 bg-[#F4F1EA] text-[#2D2D2D] border-b border-[#D1C7B7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* SECTION 1: DAILY REGIMEN OF A SEMINARY STUDENT */}
        <div className="space-y-10">
          <div className="max-w-3xl mx-auto text-center space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#1A365D] text-[#D4AF37] text-xs font-sans font-bold uppercase tracking-widest border border-[#D4AF37]">
              <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>{currentLanguage === 'kn' ? 'ವಿದ್ಯಾರ್ಥಿ ದಿನಚರಿ' : 'Daily Seminary Discipline'}</span>
            </div>
            
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A365D] tracking-tight">
              {currentLanguage === 'kn'
                ? 'ಸೆಮಿನರಿ ವಿದ್ಯಾರ್ಥಿಯ ದೈನಂದಿನ ಕಾರ್ಯಕ್ರಮ'
                : 'Daily Regimen of a Seminary Student'}
            </h2>
            
            <p className="text-slate-700 text-base sm:text-lg font-sans leading-relaxed">
              {currentLanguage === 'kn'
                ? 'ಪ್ರಾರ್ಥನೆ, ತರಗತಿ ಅಧ್ಯಯನ, ಗ್ರಂಥಾಲಯ ಸಂಶೋಧನೆ ಮತ್ತು ಸಂಜೆಯ ಆರಾಧನೆಯ ಶಿಸ್ತುಬದ್ಧ ಜೀವನ.'
                : 'A disciplined rhythm of prayer, rigorous classroom exegesis, theological library research, and evening chapel fellowship.'}
            </p>
          </div>

          {/* 4 Daily Schedule Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {dailySchedule.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#EFECE4] rounded-2xl p-6 border-2 border-[#D8D2C4] hover:border-[#D4AF37] transition-all hover:shadow-lg flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    {/* Time Header with Icon */}
                    <div className="flex items-center gap-2 text-[#9A6216] font-bold text-xs sm:text-sm font-sans tracking-wide">
                      <IconComp className="w-4 h-4 text-[#9A6216] flex-shrink-0" />
                      <span className="font-mono">{item.time}</span>
                    </div>

                    {/* Kannada / English Title */}
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-[#1A365D] leading-snug">
                      {currentLanguage === 'kn' ? item.titleKn : item.titleEn}
                    </h3>

                    {/* Kannada / English Description */}
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-sans">
                      {currentLanguage === 'kn' ? item.descKn : item.descEn}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#DCD5C6] flex items-center gap-1.5 text-[11px] font-semibold text-[#1A365D]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>{currentLanguage === 'kn' ? 'ದೈನಂದಿನ ಶಿಸ್ತು' : 'Daily Schedule'}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* SECTION 2: SEMINARY LIFE & MINISTRY ACTION (100% Real Photographs) */}
        <div className="space-y-8 bg-[#112440] text-white rounded-3xl p-6 sm:p-10 border-2 border-[#D4AF37] shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-white/20">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#D4AF37] uppercase tracking-wider font-sans">
                <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                <span>{currentLanguage === 'kn' ? 'ಕ್ಷೇತ್ರ ಸೇವೆ ಮತ್ತು ನೈಜ ಚಿತ್ರಗಳು' : 'Genuine Campus Photographs'}</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
                {currentLanguage === 'kn' ? 'ಜೀವಂತ ಸೆಮಿನರಿ ಜೀವನ ಮತ್ತು ಸಭಾ ಸೇವೆ' : 'Seminary Life in Action & Local Church Ministry'}
              </h3>
            </div>

            <a
              href={INSTITUTION_INFO.socialLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-[#1A365D] hover:bg-[#D4AF37] text-[#D4AF37] hover:text-[#1A365D] border border-[#D4AF37] rounded-lg text-xs font-bold uppercase tracking-wider transition-all inline-flex items-center gap-1.5 self-start md:self-auto cursor-pointer"
            >
              <span>{currentLanguage === 'kn' ? 'ಫೇಸ್‌ಬುಕ್‌ನಲ್ಲಿ ಇನ್ನಷ್ಟು ನೋಡಿ' : 'View Updates on Facebook'}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* 3 Milestone Image Cards with Genuine Photos */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {milestoneCards.map((card, idx) => (
              <div
                key={idx}
                className="bg-[#1A365D] rounded-2xl overflow-hidden border border-[#D4AF37]/50 shadow-xl flex flex-col justify-between group hover:border-[#D4AF37] transition-all"
              >
                {/* Image Container with Top Badge */}
                <div className="relative aspect-[16/10] overflow-hidden bg-black/40">
                  <img
                    src={card.image}
                    alt={card.alt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A365D] via-transparent to-black/30"></div>
                  
                  {/* Top Left Badge on Photo */}
                  <div className="absolute top-3 left-3 px-3 py-1 rounded bg-[#112440]/90 backdrop-blur-sm border border-[#D4AF37]/60 text-[11px] font-sans font-bold text-[#D4AF37] shadow">
                    {currentLanguage === 'kn' ? card.tagKn : card.tagEn}
                  </div>
                </div>

                {/* Content Box */}
                <div className="p-5 space-y-3 flex-grow flex flex-col justify-between">
                  <div className="space-y-2">
                    <h4 className="font-serif text-lg sm:text-xl font-bold text-white group-hover:text-[#D4AF37] transition-colors leading-snug">
                      {currentLanguage === 'kn' ? card.titleKn : card.titleEn}
                    </h4>

                    <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-sans">
                      {currentLanguage === 'kn' ? card.descKn : card.descEn}
                    </p>
                  </div>

                  {/* Card Footer with Category & Facebook Link */}
                  <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-sans">
                    <div className="flex items-center gap-1.5 text-[#D4AF37] font-semibold">
                      <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                      <span>{card.type}</span>
                    </div>

                    <a
                      href={INSTITUTION_INFO.socialLinks.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-300 hover:text-[#D4AF37] flex items-center gap-1 font-medium transition-colors"
                      title="View on Official Facebook"
                    >
                      <span>Facebook</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
