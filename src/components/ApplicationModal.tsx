import React, { useState, useEffect } from 'react';
import { X, GraduationCap, CheckCircle2, Send, MessageSquare, Phone } from 'lucide-react';
import { useAdminData } from '../context/AdminDataContext';

interface ApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProgramId?: string;
}

export const ApplicationModal: React.FC<ApplicationModalProps> = ({
  isOpen,
  onClose,
  initialProgramId = 'b-th',
}) => {
  const { programsList, institutionInfo, submitAdmissionInquiry } = useAdminData();
  const INSTITUTION_INFO = institutionInfo;

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    cityState: '',
    program: initialProgramId,
    languageTrack: 'English',
    qualification: '10+2 / PUC',
    churchName: '',
    callingBrief: '',
    housingNeeded: true,
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [whatsAppUrl, setWhatsAppUrl] = useState('');

  useEffect(() => {
    if (initialProgramId) {
      setFormData((prev) => ({ ...prev, program: initialProgramId }));
    }
  }, [initialProgramId]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const selectedProgram = programsList.find(p => p.id === formData.program) || programsList[0];
    const programName = `${selectedProgram.code} — ${selectedProgram.title} (${selectedProgram.duration})`;

    // Automatically record submission in Admin Portal CMS
    submitAdmissionInquiry({
      fullName: formData.fullName,
      phone: formData.phone,
      email: formData.email,
      cityState: formData.cityState,
      programId: selectedProgram.id,
      programName: programName,
      languageTrack: formData.languageTrack,
      qualification: formData.qualification,
      churchName: formData.churchName,
      callingBrief: formData.callingBrief,
      housingNeeded: formData.housingNeeded,
      notes: 'Submitted through online application modal.',
    });

    const messageLines = [
      `🎓 *NEW ADMISSION APPLICATION - NEST MYSORE*`,
      `━━━━━━━━━━━━━━━━━━━━━━━`,
      `*Full Name:* ${formData.fullName}`,
      `*Phone / WhatsApp:* ${formData.phone}`,
      `*Email:* ${formData.email}`,
      `*City & State:* ${formData.cityState}`,
      `*Degree Program:* ${programName}`,
      `*Language Medium Track:* ${formData.languageTrack}`,
      `*Qualification:* ${formData.qualification}`,
      `*Church & Pastor:* ${formData.churchName}`,
      formData.callingBrief ? `*Ministry Calling / Goal:* ${formData.callingBrief}` : null,
      `*Hostel & Dining in Mysore:* ${formData.housingNeeded ? 'Yes, Required' : 'No / Not needed'}`,
      `━━━━━━━━━━━━━━━━━━━━━━━`,
      `_Application forwarded directly to Principal Rev. Santhosh K. Chacko (${institutionInfo.phoneFormatted})_`
    ].filter(Boolean);

    const encodedText = encodeURIComponent(messageLines.join('\n'));
    const targetUrl = `https://wa.me/${institutionInfo.phone}?text=${encodedText}`;
    setWhatsAppUrl(targetUrl);

    // Direct redirection to WhatsApp
    window.open(targetUrl, '_blank');

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 400);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#112440]/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#F4F1EA] rounded-xl max-w-xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border-2 border-[#D4AF37] p-6 sm:p-8 space-y-6 relative text-slate-800 font-sans">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded text-[#1A365D] hover:text-[#1A365D] hover:bg-[#E2DDD2] transition-colors cursor-pointer"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="border-b border-[#D1C7B7] pb-4 pr-8">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-[#1A365D] text-[#D4AF37] font-bold text-xs mb-1.5 uppercase tracking-wider">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Admission Application 2026–2027</span>
          </div>
          <h3 className="font-serif text-2xl font-bold text-[#1A365D]">
            Native Evangelical School of Theology
          </h3>
          <p className="text-xs sm:text-sm text-slate-700">
            Principal&apos;s Desk: <strong>{INSTITUTION_INFO.principal}</strong> · Mysore Campus
          </p>
        </div>

        {submitted ? (
          <div className="py-8 text-center space-y-5 bg-white rounded-lg p-6 border-2 border-[#D4AF37]">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto border-2 border-emerald-500">
              <CheckCircle2 className="w-10 h-10 text-emerald-600" />
            </div>

            <div className="space-y-1">
              <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#1A365D]">
                Application Sent to Principal&apos;s WhatsApp!
              </h4>
              <p className="text-xs sm:text-sm text-slate-700 max-w-sm mx-auto">
                Thank you, <strong className="text-[#1A365D]">{formData.fullName}</strong>. Your admission details have been directed straight to the Principal&apos;s WhatsApp desk.
              </p>
            </div>

            {/* Direct WhatsApp Action */}
            <div className="space-y-2 pt-2">
              {whatsAppUrl && (
                <a
                  href={whatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm rounded-lg transition-colors inline-flex items-center justify-center gap-2 shadow-md cursor-pointer"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>Open WhatsApp Chat with Principal (8880111763)</span>
                </a>
              )}

              <a
                href={`tel:${institutionInfo.phone}`}
                className="w-full py-2.5 px-4 bg-[#1A365D] hover:bg-[#112440] text-[#D4AF37] font-bold text-xs rounded-lg transition-colors inline-flex items-center justify-center gap-2 border border-[#D4AF37]"
              >
                <Phone className="w-4 h-4" />
                <span>Call Principal Desk Directly: {institutionInfo.phoneFormatted}</span>
              </a>
            </div>

            <button
              onClick={handleReset}
              className="text-xs text-slate-600 hover:text-slate-900 underline pt-2 cursor-pointer"
            >
              Close &amp; Return to Website
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm font-sans">
            
            {/* Direct to WhatsApp Notice */}
            <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-lg flex items-center gap-2.5 text-emerald-900 text-xs">
              <MessageSquare className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <span>
                Your application will be sent directly to <strong>Rev. Santhosh K. Chacko (Principal)</strong> via WhatsApp on <strong>8880111763</strong>.
              </span>
            </div>

            {/* Full Name & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-bold text-[#1A365D] mb-1">
                  Full Name <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="e.g. Samuel Kumar"
                  className="w-full px-3 py-2 rounded border border-[#D1C7B7] focus:border-[#1A365D] focus:ring-1 focus:ring-[#1A365D] bg-white text-slate-900 outline-none"
                />
              </div>

              <div>
                <label className="block font-bold text-[#1A365D] mb-1">
                  Phone / WhatsApp <span className="text-red-600">*</span>
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="e.g. 8880111763"
                  className="w-full px-3 py-2 rounded border border-[#D1C7B7] focus:border-[#1A365D] focus:ring-1 focus:ring-[#1A365D] bg-white text-slate-900 outline-none"
                />
              </div>
            </div>

            {/* Email & City */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-bold text-[#1A365D] mb-1">
                  Email Address <span className="text-red-600">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your.email@gmail.com"
                  className="w-full px-3 py-2 rounded border border-[#D1C7B7] focus:border-[#1A365D] focus:ring-1 focus:ring-[#1A365D] bg-white text-slate-900 outline-none"
                />
              </div>

              <div>
                <label className="block font-bold text-[#1A365D] mb-1">
                  Current City / State <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.cityState}
                  onChange={(e) => setFormData({ ...formData, cityState: e.target.value })}
                  placeholder="e.g. Mysore, Karnataka"
                  className="w-full px-3 py-2 rounded border border-[#D1C7B7] focus:border-[#1A365D] focus:ring-1 focus:ring-[#1A365D] bg-white text-slate-900 outline-none"
                />
              </div>
            </div>

            {/* Desired Degree Program & Language Track */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-bold text-[#1A365D] mb-1">
                  Selected Degree Program <span className="text-red-600">*</span>
                </label>
                <select
                  value={formData.program}
                  onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                  className="w-full px-3 py-2 rounded border border-[#D1C7B7] focus:border-[#1A365D] focus:ring-1 focus:ring-[#1A365D] bg-white font-medium text-slate-900 outline-none cursor-pointer"
                >
                  {programsList.map((prog) => (
                    <option key={prog.id} value={prog.id}>
                      {prog.code} — {prog.title}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block font-bold text-[#1A365D] mb-1">
                  Language Medium <span className="text-red-600">*</span>
                </label>
                <select
                  value={formData.languageTrack}
                  onChange={(e) => setFormData({ ...formData, languageTrack: e.target.value })}
                  className="w-full px-3 py-2 rounded border border-[#D1C7B7] focus:border-[#1A365D] focus:ring-1 focus:ring-[#1A365D] bg-white font-medium text-slate-900 outline-none cursor-pointer"
                >
                  <option value="English Medium (Official)">English Medium (Official - B.Th / M.Div / Dip.Th)</option>
                  <option value="Kannada & English Combined (Dip.Th Only)">Kannada &amp; English Combined (Dip.Th Only)</option>
                </select>
              </div>
            </div>

            {/* Church & Pastor */}
            <div>
              <label className="block font-bold text-[#1A365D] mb-1">
                Local Church &amp; Pastor Name <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.churchName}
                onChange={(e) => setFormData({ ...formData, churchName: e.target.value })}
                placeholder="e.g. Evangelical Fellowship Church / Pastor Timothy"
                className="w-full px-3 py-2 rounded border border-[#D1C7B7] focus:border-[#1A365D] focus:ring-1 focus:ring-[#1A365D] bg-white text-slate-900 outline-none"
              />
            </div>

            {/* Brief Calling */}
            <div>
              <label className="block font-bold text-[#1A365D] mb-1">
                Ministry Goal / Calling Brief
              </label>
              <textarea
                rows={2}
                value={formData.callingBrief}
                onChange={(e) => setFormData({ ...formData, callingBrief: e.target.value })}
                placeholder="Briefly state your ministry goal (e.g. Pastor, Church Planter, Evangelist)..."
                className="w-full px-3 py-2 rounded border border-[#D1C7B7] focus:border-[#1A365D] focus:ring-1 focus:ring-[#1A365D] bg-white text-slate-900 outline-none"
              ></textarea>
            </div>

            {/* Housing preference */}
            <div className="flex items-center gap-2 pt-1">
              <input
                type="checkbox"
                id="modalHousing"
                checked={formData.housingNeeded}
                onChange={(e) => setFormData({ ...formData, housingNeeded: e.target.checked })}
                className="w-4 h-4 text-[#1A365D] rounded border-[#D1C7B7] focus:ring-[#1A365D]"
              />
              <label htmlFor="modalHousing" className="text-slate-800 cursor-pointer text-xs font-medium">
                Request On-Campus Residential Hostel &amp; Dining in Mysore
              </label>
            </div>

            {/* Submit */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 bg-emerald-700 hover:bg-emerald-800 text-white font-bold rounded shadow transition-colors flex items-center justify-center gap-2 text-sm disabled:opacity-50 cursor-pointer uppercase tracking-wider border border-emerald-500"
              >
                {loading ? (
                  <span>Opening WhatsApp...</span>
                ) : (
                  <>
                    <MessageSquare className="w-4 h-4" />
                    <span>Send Application to Principal on WhatsApp (8880111763)</span>
                  </>
                )}
              </button>
            </div>

            <div className="text-center pt-2 text-[11px] text-slate-600">
              Direct Principal Desk: <strong className="text-[#1A365D] font-mono font-bold">{INSTITUTION_INFO.phoneFormatted}</strong>
            </div>

          </form>
        )}

      </div>
    </div>
  );
};
