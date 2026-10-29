import React from 'react';
import { BookOpen, Cross, HeartHandshake, Compass, Users, Sparkles, ShieldCheck, Flame, Award, CheckCircle2 } from 'lucide-react';
import { NestLogo } from './NestLogo';
import { INSTITUTION_INFO } from '../data/nestData';
import { useLanguage } from '../context/LanguageContext';

export const AboutSection: React.FC = () => {
  const { currentLanguage, t } = useLanguage();

  return (
    <section id="about" className="py-16 sm:py-24 bg-[#F4F1EA] text-[#2D2D2D] border-b border-[#D1C7B7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#D4AF37]/20 text-[#1A365D] text-xs font-sans font-bold uppercase tracking-widest border border-[#D4AF37]">
            {t('aboutBadge')}
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A365D] tracking-tight">
            {t('aboutHeading')}
          </h2>
          <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-sans">
            {currentLanguage === 'kn'
              ? 'ನೇಟಿವ್ ಇವಾಂಜೆಲಿಕಲ್ ಸ್ಕೂಲ್ ಆಫ್ ಥಿಯಾಲಜಿ (NEST) ಮೈಸೂರಿನಲ್ಲಿರುವ ಪ್ರತಿಷ್ಠಿತ ದೇವತಾಶಾಸ್ತ್ರ ಶಿಕ್ಷಣ ಸಂಸ್ಥೆಯಾಗಿದ್ದು, ಸತ್ಯವೇದದ ಮೂಲ ಸತ್ಯಗಳು, ಪ್ರಾಯೋಗಿಕ ಸುವಾರ್ತಾ ಸೇವೆ ಮತ್ತು ಸ್ಥಳೀಯ ಸಾಂಸ್ಕೃತಿಕ ಹಿನ್ನೆಲೆಯಲ್ಲಿ ನಾಯಕರನ್ನು ರೂಪಿಸಲು ಸಮರ್ಪಿತವಾಗಿದೆ.'
              : 'Native Evangelical School of Theology (NEST) is a premier evangelical theological institution situated in the historic heritage city of Mysore, Karnataka, committed to biblically sound, practically tested, and culturally contextual ministry preparation.'}
          </p>
        </div>

        {/* 2-Column Showcase: About Story & The Logo Emblem Meaning */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Left Column: Vision & Identity */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4 text-slate-700 leading-relaxed text-base font-sans">
              <p>
                {currentLanguage === 'kn' ? (
                  <>
                    ಸ್ಥಳೀಯ ಸಭಾಪಾಲಕರು, ಸುವಾರ್ತಿಕರು ಮತ್ತು ಕ್ರೈಸ್ತ ಬೋಧಕರನ್ನು ಸಿದ್ಧಪಡಿಸುವ ಉತ್ಕಟ ಆಶಯದೊಂದಿಗೆ ಸ್ಥಾಪಿತವಾದ <strong className="text-[#1A365D] font-bold">NEST (Native Evangelical School of Theology)</strong>, ಸತ್ಯವೇದಾಧಾರಿತ ಶಿಕ್ಷಣ, ಆತ್ಮೀಕ ಶಿಷ್ಯತ್ವ ಮತ್ತು ಮಿಷನರಿ ಕಳಕಳಿಯನ್ನು ನೀಡುವ ಪವಿತ್ರ ಆಲಯವಾಗಿದೆ.
                  </>
                ) : (
                  <>
                    Founded with a burning passion to train indigenous evangelists, pastors, and Christian educators, <strong className="text-[#1A365D] font-bold">NEST (Native Evangelical School of Theology)</strong> provides a sanctuary for rigorous theological learning, spiritual discipleship, and missionary zeal.
                  </>
                )}
              </p>
              <p>
                {currentLanguage === 'kn' ? (
                  <>
                    ಮೈಸೂರಿನ <span className="text-[#1A365D] font-semibold">ರಾಯನಕೆರೆ ಬಳಿಯ ನಾಗರಹಳ್ಳಿಯಲ್ಲಿರುವ</span> ನಮ್ಮ ಹಸಿರಿನಿಂದ ಕೂಡಿದ ಶಾಂತ ಕ್ಯಾಂಪಸ್, ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಸತ್ಯವೇದದ ಆಳವಾದ ಅಧ್ಯಯನ, ನಿರಂತರ ಪ್ರಾರ್ಥನಾ ಜೀವನ ಮತ್ತು ಕರ್ನಾಟಕದ ಸುತ್ತಮುತ್ತಲಿನ ಹಳ್ಳಿಗಳಲ್ಲಿ ಪ್ರಾಯೋಗಿಕ ಸುವಾರ್ತೆ ಸಾರಲು ಅತ್ಯುತ್ತಮ ವಾತಾವರಣ ಒದಗಿಸುತ್ತದೆ.
                  </>
                ) : (
                  <>
                    Located in Mysore at <span className="text-[#1A365D] font-semibold">Nagarthalli, Rayanakere Post</span>, our serene campus environment offers students a quiet haven for intensive study of the Holy Scriptures alongside vibrant fellowship and weekly field evangelism in nearby towns and villages.
                  </>
                )}
              </p>
              <p>
                {currentLanguage === 'kn' ? (
                  <>
                    ಭಾರತದ ಸಭೆಗಳ ಭವಿಷ್ಯವು ದೇವರ ವಾಕ್ಯದಲ್ಲಿ ದೃಢವಾಗಿ ನಿಂತ, ಪವಿತ್ರಾತ್ಮಭರಿತ ಮತ್ತು ಸ್ಥಳೀಯ ಭಾಷೆ-ಸಂಸ್ಕೃತಿಗಳ ಅರಿವುಳ್ಳ ಸಮರ್ಪಿತ ದೈವಸೇವಕರ ಮೇಲೆ ಆಧಾರಿತವಾಗಿದೆ ಎಂದು ನಾವು ದೃಢವಾಗಿ ನಂಬುತ್ತೇವೆ.
                  </>
                ) : (
                  <>
                    We believe that the future of the church in India rests on faithful leaders who are deeply grounded in orthodox evangelical doctrine, full of the Holy Spirit, and equipped with practical skills to plant healthy churches and minister with cultural sensitivity.
                  </>
                )}
              </p>
            </div>

            {/* Key Distinctive Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white border border-[#D1C7B7] shadow-sm space-y-1.5 hover:border-[#D4AF37] transition-all">
                <div className="flex items-center gap-2 text-[#1A365D] font-bold text-sm font-sans">
                  <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                  <span>{currentLanguage === 'kn' ? 'ಅಚಲ ಸತ್ಯವೇದದ ಸತ್ಯ' : 'Uncompromising Biblical Truth'}</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-sans">
                  {currentLanguage === 'kn'
                    ? 'ದೇವರ ವಾಕ್ಯದ ದೋಷರಹಿತತೆ ಮತ್ತು ಪರಮ ಅಧಿಕಾರಕ್ಕೆ ನಮ್ಮ ಎಲ್ಲ ಕೋರ್ಸ್‌ಗಳಲ್ಲಿ ಮೊದಲ ಆದ್ಯತೆ.'
                    : "Steadfast commitment to the inerrancy and supreme authority of God's Word in all academic courses."}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#D1C7B7] shadow-sm space-y-1.5 hover:border-[#D4AF37] transition-all">
                <div className="flex items-center gap-2 text-[#1A365D] font-bold text-sm font-sans">
                  <Compass className="w-4 h-4 text-[#D4AF37]" />
                  <span>{currentLanguage === 'kn' ? 'ಸ್ಥಳೀಯ ಸಾಂಸ್ಕೃತಿಕ ತರಬೇತಿ' : 'Native Contextual Equipping'}</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-sans">
                  {currentLanguage === 'kn'
                    ? 'ಕರ್ನಾಟಕ ಮತ್ತು ಭಾರತೀಯ ಸಾಂಸ್ಕೃತಿಕ ವಾಸ್ತವಗಳಿಗೆ ಅನುಗುಣವಾದ ಪ್ರಾಯೋಗಿಕ ಸುವಾರ್ತಾ ತರಬೇತಿ.'
                    : 'Theological reflection tailored to the cultural, linguistic, and societal realities of Karnataka and India.'}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#D1C7B7] shadow-sm space-y-1.5 hover:border-[#D4AF37] transition-all">
                <div className="flex items-center gap-2 text-[#1A365D] font-bold text-sm font-sans">
                  <Flame className="w-4 h-4 text-[#D4AF37]" />
                  <span>{currentLanguage === 'kn' ? 'ದೈನಂದಿನ ಆತ್ಮೀಕ ರೂಪಾಂತರ' : 'Daily Spiritual Formation'}</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-sans">
                  {currentLanguage === 'kn'
                    ? 'ದೈನಂದಿನ ಚಾಪೆಲ್ ಪ್ರಾರ್ಥನೆ, ಉಪವಾಸ ಹಾಗೂ ಸತ್ಯನಿಷ್ಠೆಯ ಸೇವಕರ ಬೆಳವಣಿಗೆ.'
                    : 'Holistic discipleship cultivating deep personal prayer, humility, integrity, and servant leadership.'}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#D1C7B7] shadow-sm space-y-1.5 hover:border-[#D4AF37] transition-all">
                <div className="flex items-center gap-2 text-[#1A365D] font-bold text-sm font-sans">
                  <HeartHandshake className="w-4 h-4 text-[#D4AF37]" />
                  <span>{currentLanguage === 'kn' ? 'ಹಳ್ಳಿಗಳಲ್ಲಿ ಸುವಾರ್ತಾ ಸೇವೆ' : 'Hands-on Village Ministry'}</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-sans">
                  {currentLanguage === 'kn'
                    ? 'ಪ್ರತಿ ವಾರಾಂತ್ಯದಲ್ಲಿ ಗ್ರಾಮೀಣ ಭಾಗಗಳಲ್ಲಿ ಮನೆ-ಮನೆ ಭೇಟಿ, ಸುವಾರ್ತಾ ಪ್ರಚಾರ ಮತ್ತು ಸಭಾ ಸೇವೆ.'
                    : 'Weekly supervised weekend outreach, church internships, and open-air gospel proclamation.'}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Emblem & Symbolism Deep Dive Card */}
          <div className="lg:col-span-5">
            <div className="bg-[#1A365D] text-white rounded-2xl p-7 shadow-xl border-2 border-[#D4AF37] space-y-6">
              
              <div className="flex items-center justify-between border-b border-white/20 pb-4">
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0">
                    <NestLogo size="md" variant="badge" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-white">
                      {currentLanguage === 'kn' ? 'NEST ಅಧಿಕೃತ ಲಾಂಛನ' : 'The NEST Emblem'}
                    </h3>
                    <p className="text-xs text-[#D4AF37] font-sans font-bold uppercase tracking-wider">
                      {currentLanguage === 'kn' ? 'ಚಿಹ್ನೆಯ ಅರ್ಥ ಮತ್ತು ದರ್ಶನ' : 'Symbolic Meaning & Vision'}
                    </p>
                  </div>
                </div>
                <span className="text-xs font-mono px-2.5 py-1 rounded bg-[#112440] text-[#D4AF37] border border-[#D4AF37]/50 font-bold">
                  {t('heroMottoScripture')}
                </span>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-200 font-sans">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#112440] border border-[#D4AF37] flex items-center justify-center text-xs font-bold text-[#D4AF37] flex-shrink-0 mt-0.5">
                    1
                  </div>
                  <div>
                    <h4 className="font-bold text-[#D4AF37]">
                      {currentLanguage === 'kn' ? 'ದ್ರಾಕ್ಷಾಬಳ್ಳಿ ಮತ್ತು ಫಲಭರಿತ ರೆಂಬೆಗಳು' : 'The Vine & Fruitful Branches'}
                    </h4>
                    <p className="text-slate-200 text-xs mt-0.5 leading-relaxed">
                      {currentLanguage === 'kn'
                        ? 'ಯೇಸು ಕ್ರಿಸ್ತನೇ ನಿಜವಾದ ದ್ರಾಕ್ಷಾಬಳ್ಳಿ. ಆತನಲ್ಲಿ ನೆಲೆಗೊಂಡಾಗ ಮಾತ್ರ ಸೇವಕರು ಜೀವಮಾನವಿಡೀ ಸ್ಥಿರವಾದ ಆತ್ಮೀಕ ಫಲವನ್ನು ಕೊಡಲು ಸಾಧ್ಯ.'
                        : 'Representing Christ as the True Vine. Only by abiding in Him do ministers and believers flourish with lasting spiritual fruit.'}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#112440] border border-[#D4AF37] flex items-center justify-center text-xs font-bold text-[#D4AF37] flex-shrink-0 mt-0.5">
                    2
                  </div>
                  <div>
                    <h4 className="font-bold text-[#D4AF37]">
                      {currentLanguage === 'kn' ? 'ಕೇಂದ್ರ ಶಿಲುಬೆಯ ಪ್ರಾಯಶ್ಚಿತ್ತ' : 'The Central Cross Trunk'}
                    </h4>
                    <p className="text-slate-200 text-xs mt-0.5 leading-relaxed">
                      {currentLanguage === 'kn'
                        ? 'ಶಿಲುಬೆಯು ನಮ್ಮ ಉಪದೇಶ, ಬೋಧನೆ ಮತ್ತು ಸಮರ್ಪಿತ ಕ್ರೈಸ್ತ ಸೇವೆಯ ಮೂಲಾಧಾರವಾಗಿದೆ.'
                        : 'The cross is the bedrock of our theology, preaching, and sacrificial Christian service.'}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#112440] border border-[#D4AF37] flex items-center justify-center text-xs font-bold text-[#D4AF37] flex-shrink-0 mt-0.5">
                    3
                  </div>
                  <div>
                    <h4 className="font-bold text-[#D4AF37]">
                      {currentLanguage === 'kn' ? 'ಕೈಮುಗಿದು ಆರಾಧಿಸುವ ಸ್ಥಳೀಯ ವಿಶ್ವಾಸಿಗಳು' : 'The Worshipping Native Community'}
                    </h4>
                    <p className="text-slate-200 text-xs mt-0.5 leading-relaxed">
                      {currentLanguage === 'kn'
                        ? 'ಸ್ಥಳೀಯ ಮಣ್ಣಿನಲ್ಲೇ ದೇವರಿಗೆ ಕೈಯೆತ್ತಿ ಆರಾಧಿಸುವ ನಂಬಿಗಸ್ತ ದೈವಜನರ ಮತ್ತು ಸಭೆಗಳ ಒಗ್ಗಟ್ಟು.'
                        : 'Indigenous believers and future pastors lifting up hands in united praise, fellowship, and prayer on the harvest soil.'}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#112440] border border-[#D4AF37] flex items-center justify-center text-xs font-bold text-[#D4AF37] flex-shrink-0 mt-0.5">
                    4
                  </div>
                  <div>
                    <h4 className="font-bold text-[#D4AF37]">
                      {currentLanguage === 'kn' ? 'NEST (ಗೂಡು / ಪೋಷಣೆಯ ನೆಲೆ)' : '“NEST” Lettering & Foundation'}
                    </h4>
                    <p className="text-slate-200 text-xs mt-0.5 leading-relaxed">
                      {currentLanguage === 'kn'
                        ? 'ದೈವ ಸೇವಕರನ್ನು ಪೋಷಿಸಿ, ವಾಕ್ಯದಲ್ಲಿ ಬಲಪಡಿಸಿ ರಾಷ್ಟ್ರಗಳ ಕೊಯ್ಲಿಗಾಗಿ ಕಳುಹಿಸಿಕೊಡುವ ಸುರಕ್ಷಿತ ಆತ್ಮೀಕ ಗೂಡು.'
                        : 'A nurturing home of growth and safety where servant leaders are hatched, nurtured, and sent out into the world.'}
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-white/20 text-center">
                <p className="text-xs text-[#D4AF37] italic font-serif">
                  {currentLanguage === 'kn'
                    ? '“ಬಳ್ಳಿಯಲ್ಲಿ ನೆಲೆನಿಂತು, ರಾಷ್ಟ್ರಗಳಿಗಾಗಿ ಫಲಕೊಡುವ ಸೇವಕರು — ಯೋಹಾನ 15:5”'
                    : '“Rooted in the Vine, Bearing Fruit for the Nations — John 15:5”'}
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
