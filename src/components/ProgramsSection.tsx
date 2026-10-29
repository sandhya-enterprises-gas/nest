import React, { useState } from 'react';
import { BookOpen, Clock, Globe, Award, CheckCircle, ArrowRight, Sparkles, Filter, ChevronRight, FileText, Languages } from 'lucide-react';
import { AcademicProgram } from '../types';
import { OfficialLanguagesCard } from './OfficialLanguagesCard';
import { useLanguage } from '../context/LanguageContext';
import { useAdminData } from '../context/AdminDataContext';

interface ProgramsSectionProps {
  onSelectProgramToApply: (programId: string) => void;
}

export const ProgramsSection: React.FC<ProgramsSectionProps> = ({ onSelectProgramToApply }) => {
  const { programsList, institutionInfo } = useAdminData();
  const INSTITUTION_INFO = institutionInfo;
  const [activeFilter, setActiveFilter] = useState<'All' | 'Bachelor' | 'Master' | 'Diploma'>('All');
  const [selectedProgramModal, setSelectedProgramModal] = useState<AcademicProgram | null>(null);

  const filteredPrograms = activeFilter === 'All'
    ? programsList
    : programsList.filter(p => p.degreeLevel === activeFilter);

  return (
    <section id="programs" className="py-16 sm:py-24 bg-[#F4F1EA] text-[#2D2D2D] border-b border-[#D1C7B7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#D4AF37]/20 text-[#1A365D] text-xs font-sans font-bold uppercase tracking-widest border border-[#D4AF37]">
            Academic Offerings
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A365D] tracking-tight">
            Theological Degree &amp; Ministry Programs
          </h2>
          <p className="text-slate-700 text-base sm:text-lg font-sans">
            Grounded in biblical inerrancy, practical ministry competence, and contextual native leadership for Karnataka and all of India.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 pt-4 font-sans">
            {(['All', 'Bachelor', 'Master', 'Diploma'] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 text-xs sm:text-sm font-bold uppercase tracking-wider rounded transition-all cursor-pointer ${
                  activeFilter === filter
                    ? 'bg-[#1A365D] text-[#D4AF37] border-2 border-[#D4AF37] shadow-sm'
                    : 'bg-white text-slate-700 hover:bg-[#E9E4DB] border border-[#D1C7B7]'
                }`}
              >
                {filter === 'All' ? 'All Accredited Degrees' : filter}
              </button>
            ))}
          </div>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {filteredPrograms.map((program) => (
            <div
              key={program.id}
              className={`bg-white rounded-2xl border transition-all duration-300 flex flex-col justify-between overflow-hidden relative shadow-sm hover:shadow-xl ${
                program.featured
                  ? 'border-2 border-[#D4AF37] ring-1 ring-[#D4AF37]/40'
                  : 'border-[#D1C7B7] hover:border-[#D4AF37]'
              }`}
            >
              {program.featured && (
                <div className="absolute top-0 right-0 bg-[#1A365D] text-[#D4AF37] text-[10px] font-sans font-bold px-3 py-1 rounded-bl-xl uppercase tracking-widest border-b border-l border-[#D4AF37] shadow-sm">
                  Featured Degree
                </div>
              )}

              <div className="p-6 sm:p-8 space-y-5">
                {/* Program Badges */}
                <div className="flex flex-wrap items-center gap-2 font-sans">
                  <span className="px-2.5 py-1 rounded bg-[#1A365D] text-[#D4AF37] font-bold text-xs border border-[#D4AF37]/50">
                    {program.code}
                  </span>
                  <span className="px-2.5 py-1 rounded bg-[#F4F1EA] text-[#1A365D] font-semibold text-xs border border-[#D1C7B7]">
                    {program.duration}
                  </span>
                  <span className="px-2.5 py-1 rounded bg-[#D4AF37]/15 text-[#1A365D] font-bold text-xs border border-[#D4AF37]/40">
                    {program.mode}
                  </span>
                  {program.ataAccredited && (
                    <span className="px-2.5 py-1 rounded bg-[#1A365D] text-[#D4AF37] font-bold text-xs border border-[#D4AF37] inline-flex items-center gap-1 shadow-sm">
                      <Award className="w-3.5 h-3.5 text-[#D4AF37]" />
                      <span>ATA India Accredited</span>
                    </span>
                  )}
                </div>

                {/* Title & Description */}
                <div>
                  <h3 className="font-serif text-2xl font-bold text-[#1A365D] mb-2">
                    {program.title}
                  </h3>
                  <p className="text-slate-700 text-sm leading-relaxed font-sans">
                    {program.description}
                  </p>
                </div>

                {/* Eligibility Box & Language Medium */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-3 bg-[#F4F1EA] rounded-xl border border-[#D1C7B7] text-xs text-slate-700 space-y-1 font-sans">
                    <span className="font-bold text-[#1A365D] uppercase tracking-wider text-[10px] block">Eligibility:</span>
                    <p>{program.eligibility}</p>
                  </div>
                  <div className="p-3 bg-[#F4F1EA] rounded-xl border border-[#D1C7B7] text-xs text-slate-700 space-y-1 font-sans">
                    <span className="font-bold text-[#1A365D] uppercase tracking-wider text-[10px] flex items-center gap-1">
                      <Globe className="w-3 h-3 text-[#D4AF37]" />
                      <span>Medium of Instruction:</span>
                    </span>
                    <p className="font-medium text-[#1A365D]">{program.language}</p>
                  </div>
                </div>

                {/* Institutional Highlights */}
                <div className="p-3.5 bg-[#F4F1EA] rounded-xl border border-[#D1C7B7] text-xs text-slate-700 font-sans space-y-1.5">
                  <span className="font-bold text-[#1A365D] uppercase tracking-wider text-[10px] block">
                    Accreditation &amp; Delivery:
                  </span>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-white text-[#1A365D] font-semibold border border-[#D1C7B7]">
                      {program.mode}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-[#1A365D] text-[#D4AF37] font-semibold">
                      ATA India Accredited
                    </span>
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-6 bg-[#F4F1EA] border-t border-[#D1C7B7] flex flex-wrap items-center justify-between gap-3 font-sans">
                <button
                  onClick={() => setSelectedProgramModal(program)}
                  className="text-xs font-bold uppercase tracking-wider text-[#1A365D] hover:text-[#D4AF37] inline-flex items-center gap-1 group py-1 cursor-pointer"
                >
                  <span>Program Details</span>
                  <ChevronRight className="w-4 h-4 text-[#D4AF37] group-hover:translate-x-0.5 transition-transform" />
                </button>

                <button
                  onClick={() => onSelectProgramToApply(program.id)}
                  className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-white bg-[#1A365D] hover:bg-[#D4AF37] hover:text-[#1A365D] rounded shadow-sm transition-all inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Apply for {program.code}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Official Languages Showcase Card */}
        <div className="mb-12">
          <OfficialLanguagesCard />
        </div>

        {/* Bottom Educational Note */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border-2 border-[#D4AF37] shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h4 className="font-serif text-lg font-bold text-[#1A365D]">
              Inquiries Regarding Programs &amp; Admission Eligibility
            </h4>
            <p className="text-sm text-slate-700 font-sans max-w-2xl">
              For official syllabus inquiries, admissions eligibility verification, or academic counseling, contact the Principal&apos;s Office.
            </p>
          </div>
          <a
            href={`tel:${INSTITUTION_INFO.phone}`}
            className="px-6 py-3 text-xs font-sans font-bold uppercase tracking-wider text-[#1A365D] bg-[#D4AF37] hover:bg-[#1A365D] hover:text-white rounded transition-colors whitespace-nowrap flex-shrink-0 inline-flex items-center gap-2 shadow"
          >
            <span>Call Admissions: {INSTITUTION_INFO.phoneFormatted}</span>
          </a>
        </div>

      </div>

      {/* Program Details Modal */}
      {selectedProgramModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#112440]/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border-2 border-[#D4AF37] p-6 sm:p-8 space-y-6">
            
            <div className="flex items-start justify-between border-b border-[#E5E5E5] pb-4">
              <div>
                <span className="px-2.5 py-0.5 rounded bg-[#1A365D] text-[#D4AF37] font-bold text-xs font-sans uppercase tracking-wider">
                  {selectedProgramModal.code} · {selectedProgramModal.degreeLevel}
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#1A365D] mt-1">
                  {selectedProgramModal.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedProgramModal(null)}
                className="p-1 rounded text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4 text-sm text-slate-700 font-sans">
              <p className="leading-relaxed">{selectedProgramModal.description}</p>

              <div className="grid grid-cols-2 gap-3 p-4 bg-[#F4F1EA] rounded-xl text-xs border border-[#D1C7B7]">
                <div>
                  <span className="font-bold text-[#1A365D] uppercase tracking-wider block">Duration:</span>
                  <span>{selectedProgramModal.duration}</span>
                </div>
                <div>
                  <span className="font-bold text-[#1A365D] uppercase tracking-wider block">Study Mode:</span>
                  <span>{selectedProgramModal.mode}</span>
                </div>
                <div className="col-span-2 pt-2 border-t border-[#D1C7B7]">
                  <span className="font-bold text-[#1A365D] uppercase tracking-wider block">Instruction Medium:</span>
                  <span>{selectedProgramModal.language}</span>
                </div>
                <div className="col-span-2 pt-2 border-t border-[#D1C7B7]">
                  <span className="font-bold text-[#1A365D] uppercase tracking-wider block">Eligibility:</span>
                  <span>{selectedProgramModal.eligibility}</span>
                </div>
                <div className="col-span-2 pt-2 border-t border-[#D1C7B7]">
                  <span className="font-bold text-[#1A365D] uppercase tracking-wider block">Accreditation:</span>
                  <span>Asia Theological Association India (ATA India)</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#E5E5E5] flex items-center justify-end gap-3 font-sans">
              <button
                onClick={() => setSelectedProgramModal(null)}
                className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-slate-600 hover:text-slate-800 cursor-pointer"
              >
                Close
              </button>
              <button
                onClick={() => {
                  const progId = selectedProgramModal.id;
                  setSelectedProgramModal(null);
                  onSelectProgramToApply(progId);
                }}
                className="px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-[#1A365D] bg-[#D4AF37] hover:bg-[#1A365D] hover:text-white rounded shadow transition-colors inline-flex items-center gap-1.5 cursor-pointer"
              >
                <span>Proceed to Apply</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};

