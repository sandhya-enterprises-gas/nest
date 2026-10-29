import React, { useState } from 'react';
import { Camera, ZoomIn, X, ChevronLeft, ChevronRight, CheckCircle2, MapPin, Sparkles, Filter, Info, Eye } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useAdminData } from '../context/AdminDataContext';

export interface GalleryPhoto {
  id: string;
  category: 'chapel' | 'classroom' | 'student-life' | 'faculty' | 'convocation' | 'grounds';
  titleEn: string;
  titleKn: string;
  descEn: string;
  descKn: string;
  locationEn: string;
  locationKn: string;
  imageUrl: string;
  tagEn: string;
  tagKn: string;
}

export const CampusGallery: React.FC = () => {
  const { currentLanguage } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  const categories = [
    { id: 'all', nameEn: 'All Photos (18)', nameKn: 'ಎಲ್ಲ ಫೋಟೋಗಳು (18)' },
    { id: 'grounds', nameEn: 'Campus & Architecture', nameKn: 'ಕ್ಯಾಂಪಸ್ & ಕಟ್ಟಡಗಳು' },
    { id: 'classroom', nameEn: 'Classrooms & Academics', nameKn: 'ತರಗತಿ ಕೊಠಡಿಗಳು' },
    { id: 'chapel', nameEn: 'Chapel & Sanctuary', nameKn: 'ಚಾಪೆಲ್ & ಆರಾಧನೆ' },
    { id: 'faculty', nameEn: 'Faculty & Leadership', nameKn: 'ಬೋಧಕರು & ನಾಯಕತ್ವ' },
    { id: 'convocation', nameEn: 'Graduation Convocation', nameKn: 'ಪದವಿ ಪ್ರದಾನ ಮಹೋತ್ಸವ' },
    { id: 'student-life', nameEn: 'Student Fellowship & Dining', nameKn: 'ವಿದ್ಯಾರ್ಥಿ ಜೀವನ & ಭೋಜನ' },
  ];

  const { galleryPhotos } = useAdminData();


  const filteredPhotos =
    activeCategory === 'all'
      ? galleryPhotos
      : galleryPhotos.filter((item) => item.category === activeCategory);

  const selectedPhoto =
    selectedPhotoIndex !== null && selectedPhotoIndex >= 0 && selectedPhotoIndex < filteredPhotos.length
      ? filteredPhotos[selectedPhotoIndex]
      : null;

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedPhotoIndex !== null && selectedPhotoIndex > 0) {
      setSelectedPhotoIndex(selectedPhotoIndex - 1);
    } else {
      setSelectedPhotoIndex(filteredPhotos.length - 1);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedPhotoIndex !== null && selectedPhotoIndex < filteredPhotos.length - 1) {
      setSelectedPhotoIndex(selectedPhotoIndex + 1);
    } else {
      setSelectedPhotoIndex(0);
    }
  };

  return (
    <section id="gallery" className="py-16 sm:py-24 bg-[#EFECE4] text-[#2D2D2D] border-b-2 border-[#D4AF37]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1A365D] text-[#D4AF37] text-xs font-sans font-bold uppercase tracking-widest border border-[#D4AF37] shadow-sm">
            <Camera className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>{currentLanguage === 'kn' ? 'ನಮ್ಮ ಅಧಿಕೃತ ಕ್ಯಾಂಪಸ್ ಗ್ಯಾಲರಿ' : 'Official Campus Photo Gallery'}</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A365D] tracking-tight">
            {currentLanguage === 'kn'
              ? 'NEST ಮೈಸೂರು ಕ್ಯಾಂಪಸ್ ಚಿತ್ರ ಸಂಪುಟ'
              : 'Authentic Campus & Student Life at NEST'}
          </h2>

          <p className="text-slate-700 text-base sm:text-lg font-sans leading-relaxed">
            {currentLanguage === 'kn'
              ? 'ನಮ್ಮ ಮೈಸೂರು ಕ್ಯಾಂಪಸ್‌ನ ನೈಜ ಕಟ್ಟಡಗಳು, ಚಾಪೆಲ್ ಆರಾಧನೆ, ತರಗತಿ ಬೋಧನೆ, ಪದವಿ ಪ್ರದಾನ ಮಹೋತ್ಸವ ಮತ್ತು ವಿದ್ಯಾರ್ಥಿಗಳ ಸಹೋದರತ್ವ ಜೀವನದ ಅಧಿಕೃತ ಛಾಯಾಚಿತ್ರಗಳು.'
              : 'Explore genuine photographs of our peaceful Mysore residential campus, daily chapel worship, rigorous lectures, graduation convocation, and student fellowship.'}
          </p>
        </div>

        {/* Institutional Quality Bar */}
        <div className="bg-[#1A365D] text-white rounded-2xl p-4 sm:p-5 border-2 border-[#D4AF37] shadow-md flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5 text-left">
            <div className="w-10 h-10 rounded-xl bg-[#112440] border border-[#D4AF37] flex items-center justify-center text-[#D4AF37] flex-shrink-0">
              <CheckCircle2 className="w-5 h-5 text-[#D4AF37]" />
            </div>
            <div>
              <p className="font-sans font-bold text-xs sm:text-sm text-[#D4AF37] uppercase tracking-wider flex items-center gap-1.5">
                <span>{currentLanguage === 'kn' ? '100% ಅಧಿಕೃತ ಹಾಗೂ ನೈಜ ಕ್ಯಾಂಪಸ್ ಛಾಯಾಚಿತ್ರಗಳು' : '100% Authentic Institutional Photographs'}</span>
              </p>
              <p className="text-xs text-slate-300 font-sans mt-0.5">
                {currentLanguage === 'kn'
                  ? 'ನಾಗರಹಳ್ಳಿ, ರಾಯನಕೆರೆ ಪೋಸ್ಟ್, ಮೈಸೂರಿನಲ್ಲಿರುವ ನಮ್ಮ ಸ್ವಂತ ಕ್ಯಾಂಪಸ್ ಮತ್ತು ವಿದ್ಯಾರ್ಥಿಗಳ ನೈಜ ಕ್ಷಣಗಳು.'
                  : 'Native Evangelical School of Theology, Nagarthalli, Rayanakere Post, Mysore · ATA India Accredited'}
              </p>
            </div>
          </div>

          <div className="px-3.5 py-1.5 rounded-lg bg-[#112440] border border-[#D4AF37]/50 text-xs font-sans font-bold text-[#D4AF37] whitespace-nowrap shadow-inner">
            {galleryPhotos.length} {currentLanguage === 'kn' ? 'ಅಧಿಕೃತ ಫೋಟೋಗಳು' : 'Original Photos'}
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 pt-2">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  setSelectedPhotoIndex(null);
                }}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-sans font-bold transition-all shadow-sm flex items-center gap-1.5 cursor-pointer ${
                  isActive
                    ? 'bg-[#1A365D] text-[#D4AF37] border-2 border-[#D4AF37] shadow-md scale-105'
                    : 'bg-white text-slate-700 hover:text-[#1A365D] hover:bg-slate-50 border border-[#D1C7B7]'
                }`}
              >
                <span>{currentLanguage === 'kn' ? cat.nameKn : cat.nameEn}</span>
              </button>
            );
          })}
        </div>

        {/* Responsive Photo Grid (3 Columns Desktop, 2 Tablet, 1 Mobile) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredPhotos.map((photo, index) => (
            <div
              key={photo.id}
              onClick={() => setSelectedPhotoIndex(index)}
              className="group bg-white rounded-2xl overflow-hidden border-2 border-[#D1C7B7] hover:border-[#D4AF37] transition-all duration-300 hover:shadow-2xl flex flex-col justify-between cursor-pointer"
            >
              {/* Photo Image Frame */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-900 border-b border-[#D1C7B7]">
                
                <img
                  src={photo.imageUrl}
                  alt={currentLanguage === 'kn' ? photo.titleKn : photo.titleEn}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/25 opacity-70 group-hover:opacity-90 transition-opacity"></div>

                {/* Top Badge */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10 pointer-events-none">
                  <span className="px-2.5 py-1 rounded-md bg-[#112440]/90 backdrop-blur-md text-[10px] sm:text-[11px] font-sans font-bold uppercase tracking-wider text-[#D4AF37] border border-[#D4AF37]/50 shadow">
                    {currentLanguage === 'kn' ? photo.tagKn : photo.tagEn}
                  </span>

                  <div className="w-8 h-8 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center text-white/90 group-hover:text-[#D4AF37] group-hover:scale-110 transition-all border border-white/20">
                    <ZoomIn className="w-4 h-4" />
                  </div>
                </div>

                {/* Bottom Overlay Title on Image */}
                <div className="absolute bottom-3 left-3 right-3 z-10 pointer-events-none">
                  <h3 className="font-serif font-bold text-white text-base sm:text-lg leading-snug drop-shadow-md">
                    {currentLanguage === 'kn' ? photo.titleKn : photo.titleEn}
                  </h3>
                  <div className="flex items-center gap-1 text-[11px] text-[#D4AF37] font-sans font-medium mt-1">
                    <MapPin className="w-3 h-3 flex-shrink-0" />
                    <span className="truncate">{currentLanguage === 'kn' ? photo.locationKn : photo.locationEn}</span>
                  </div>
                </div>

              </div>

              {/* Card Body & Description */}
              <div className="p-4 sm:p-5 space-y-2.5 bg-white flex-grow flex flex-col justify-between">
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-sans line-clamp-2">
                  {currentLanguage === 'kn' ? photo.descKn : photo.descEn}
                </p>

                <div className="pt-2.5 border-t border-[#E5DFD3] flex items-center justify-between text-[11px] font-sans text-slate-500">
                  <span className="font-semibold text-[#1A365D]">Native Evangelical School</span>
                  <span className="text-[#D4AF37] font-bold flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                    <span>{currentLanguage === 'kn' ? 'ದೊಡ್ಡದಾಗಿ ನೋಡಿ' : 'View Full Image'}</span>
                    <span>→</span>
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Institutional Campus Address Card */}
        <div className="p-6 rounded-2xl bg-white border border-[#D1C7B7] text-center max-w-3xl mx-auto space-y-2 shadow-sm">
          <div className="flex items-center justify-center gap-2 text-xs font-bold text-[#1A365D] uppercase tracking-wider font-sans">
            <MapPin className="w-4 h-4 text-[#D4AF37]" />
            <span>Native Evangelical School of Theology (NEST)</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-700 font-sans">
            Nagarthalli, Rayanakere Post, H.D. Kote Road, Mysore – 570008, Karnataka, India
          </p>
          <div className="text-[11px] text-[#D4AF37] font-sans font-bold pt-1">
            {currentLanguage === 'kn'
              ? 'ಮಾನ್ಯತೆ: ಏಷ್ಯಾ ಥಿಯಾಲಾಜಿಕಲ್ ಅಸೋಸಿಯೇಷನ್ (ATA India)'
              : 'Accreditation: Asia Theological Association (ATA India)'}
          </div>
        </div>

      </div>

      {/* Interactive Lightbox / High Resolution Photo Modal */}
      {selectedPhoto && selectedPhotoIndex !== null && (
        <div 
          onClick={() => setSelectedPhotoIndex(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="bg-[#112440] text-white rounded-3xl max-w-4xl w-full overflow-hidden border-2 border-[#D4AF37] shadow-2xl space-y-0 relative max-h-[92vh] flex flex-col"
          >
            
            {/* Modal Header */}
            <div className="p-4 sm:p-5 bg-[#1A365D] border-b border-[#D4AF37]/40 flex items-center justify-between flex-shrink-0">
              <div className="space-y-0.5 max-w-[80%]">
                <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-[#D4AF37]">
                  {currentLanguage === 'kn' ? selectedPhoto.tagKn : selectedPhoto.tagEn} · NEST MYSORE
                </span>
                <h3 className="font-serif text-base sm:text-xl font-bold text-white truncate">
                  {currentLanguage === 'kn' ? selectedPhoto.titleKn : selectedPhoto.titleEn}
                </h3>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-slate-300 hidden sm:inline">
                  {selectedPhotoIndex + 1} / {filteredPhotos.length}
                </span>
                <button
                  onClick={() => setSelectedPhotoIndex(null)}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#D4AF37] hover:text-[#1A365D] text-white flex items-center justify-center transition-colors focus:outline-none cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Image Area with Navigation Buttons */}
            <div className="relative bg-black flex items-center justify-center flex-grow overflow-hidden min-h-[300px] max-h-[62vh]">
              <img
                src={selectedPhoto.imageUrl}
                alt={currentLanguage === 'kn' ? selectedPhoto.titleKn : selectedPhoto.titleEn}
                className="max-h-full max-w-full object-contain mx-auto"
              />

              {/* Prev Button */}
              <button
                onClick={handlePrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-[#D4AF37] text-white hover:text-[#1A365D] flex items-center justify-center transition-all border border-white/20 cursor-pointer shadow-lg"
                title="Previous photo"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Next Button */}
              <button
                onClick={handleNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-[#D4AF37] text-white hover:text-[#1A365D] flex items-center justify-center transition-all border border-white/20 cursor-pointer shadow-lg"
                title="Next photo"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Description Footer */}
            <div className="p-4 sm:p-6 bg-[#112440] border-t border-white/10 space-y-3 flex-shrink-0">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs text-[#D4AF37] font-sans font-bold">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{currentLanguage === 'kn' ? selectedPhoto.locationKn : selectedPhoto.locationEn}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-200 font-sans leading-relaxed">
                    {currentLanguage === 'kn' ? selectedPhoto.descKn : selectedPhoto.descEn}
                  </p>
                </div>

                <div className="flex items-center gap-2 self-end sm:self-center flex-shrink-0">
                  <button
                    onClick={handlePrev}
                    className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-sans text-slate-200 cursor-pointer"
                  >
                    ← {currentLanguage === 'kn' ? 'ಹಿಂದಿನದು' : 'Prev'}
                  </button>
                  <button
                    onClick={handleNext}
                    className="px-3 py-1.5 rounded-lg bg-[#D4AF37] text-[#1A365D] hover:bg-white text-xs font-sans font-bold cursor-pointer transition-colors"
                  >
                    {currentLanguage === 'kn' ? 'ಮುಂದಿನದು' : 'Next'} →
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
