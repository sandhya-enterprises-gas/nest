import React, { useState } from 'react';
import { X, Lock, Key, ShieldCheck, UserCheck, AlertCircle, Sparkles, Eye, EyeOff, CheckCircle2 } from 'lucide-react';
import { useAdminData, DEFAULT_ADMIN_CREDENTIALS } from '../context/AdminDataContext';
import { NestLogo } from './NestLogo';
import { useLanguage } from '../context/LanguageContext';

interface AdminLoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: () => void;
}

export const AdminLoginModal: React.FC<AdminLoginModalProps> = ({
  isOpen,
  onClose,
  onLoginSuccess,
}) => {
  const { login, currentPasswordHint } = useAdminData();
  const { currentLanguage } = useLanguage();

  const [idOrEmail, setIdOrEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    setTimeout(() => {
      const res = login(idOrEmail, password);
      setLoading(false);
      if (res.success) {
        onLoginSuccess();
        onClose();
      } else {
        setError(res.error || 'Invalid credentials');
      }
    }, 350);
  };

  const handleQuickFill = () => {
    setIdOrEmail(DEFAULT_ADMIN_CREDENTIALS.username);
    setPassword(currentPasswordHint);
    setError(null);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="bg-[#112440] text-white rounded-3xl max-w-md w-full overflow-hidden border-2 border-[#D4AF37] shadow-2xl space-y-0 relative">
        
        {/* Top Header */}
        <div className="p-5 sm:p-6 bg-[#1A365D] border-b border-[#D4AF37]/40 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#112440] border border-[#D4AF37] flex items-center justify-center text-[#D4AF37] shadow">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-[#D4AF37] block">
                NEST Mysore · Portal Control
              </span>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-white">
                {currentLanguage === 'kn' ? 'ವೆಬ್‌ಸೈಟ್ ಆಡಳಿತ ಲಾಗಿನ್' : 'Administrative Portal Login'}
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#D4AF37] hover:text-[#1A365D] text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close login modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Credentials Notice Box (As requested: "id mate passwords na ile kodu") */}
        <div className="p-5 bg-[#0e1d33] border-b border-white/10 space-y-3">
          <div className="flex items-start gap-2.5">
            <Sparkles className="w-4 h-4 text-[#D4AF37] flex-shrink-0 mt-0.5" />
            <div className="space-y-1">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider block font-sans">
                {currentLanguage === 'kn' ? 'ಅಧಿಕೃತ ಅಡ್ಮಿನ್ ರುಜುವಾತುಗಳು (Credentials)' : 'Official Admin Credentials'}
              </span>
              <p className="text-[11px] text-slate-300 font-sans leading-relaxed">
                {currentLanguage === 'kn'
                  ? 'ವೆಬ್‌ಸೈಟ್‌ನ ಎಲ್ಲಾ ವಿವರಗಳನ್ನು ಬದಲಾಯಿಸಲು, ಹೊಸದನ್ನು ಸೇರಿಸಲು ಮತ್ತು ಅಳಿಸಲು ಕೆಳಗಿನ ಐಡಿ ಮತ್ತು ಪಾಸ್‌ವರ್ಡ್ ಬಳಸಿ:'
                  : 'Full administrative rights to edit institutional information, faculty, programs, photos, and view admissions.'}
              </p>
            </div>
          </div>

          {/* Credential Details Card */}
          <div className="p-3 rounded-xl bg-[#1A365D]/80 border border-[#D4AF37]/40 text-xs font-mono space-y-1.5 shadow-inner">
            <div className="flex items-center justify-between text-slate-300">
              <span className="text-[#D4AF37] font-sans font-semibold text-[11px]">Admin ID / Email:</span>
              <span className="font-bold text-white select-all">{DEFAULT_ADMIN_CREDENTIALS.username}</span>
            </div>
            <div className="flex items-center justify-between text-slate-300 border-t border-white/10 pt-1.5">
              <span className="text-[#D4AF37] font-sans font-semibold text-[11px]">Password:</span>
              <span className="font-bold text-[#D4AF37] select-all">{currentPasswordHint}</span>
            </div>
          </div>

          {/* Quick One-Click Auto Fill Button */}
          <button
            type="button"
            onClick={handleQuickFill}
            className="w-full py-2 px-3 rounded-lg bg-[#D4AF37]/20 hover:bg-[#D4AF37]/30 text-[#D4AF37] border border-[#D4AF37]/50 text-xs font-sans font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
          >
            <Key className="w-3.5 h-3.5" />
            <span>
              {currentLanguage === 'kn'
                ? '⚡ ಒಂದೇ ಕ್ಲಿಕ್‌ನಲ್ಲಿ ರುಜುವಾತು ತುಂಬಿರಿ (One-Click Fill)'
                : '⚡ Auto-Fill Credentials for Quick Access'}
            </span>
          </button>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {error && (
            <div className="p-3 rounded-xl bg-red-950/80 border border-red-500/50 text-red-200 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0" />
              <span>{error}</span>
            </div>
          )}

          {/* ID / Username Field */}
          <div className="space-y-1">
            <label className="text-xs font-sans font-bold text-slate-200 block">
              {currentLanguage === 'kn' ? 'ಅಡ್ಮಿನ್ ಐಡಿ ಅಥವಾ ಇಮೇಲ್' : 'Administrator ID / Email'}
            </label>
            <div className="relative">
              <input
                type="text"
                required
                value={idOrEmail}
                onChange={(e) => setIdOrEmail(e.target.value)}
                placeholder="admin@nestmysore.org"
                className="w-full px-4 py-2.5 rounded-xl bg-[#0c182b] border border-white/20 focus:border-[#D4AF37] focus:outline-none text-white text-xs sm:text-sm font-sans"
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="space-y-1">
            <label className="text-xs font-sans font-bold text-slate-200 block">
              {currentLanguage === 'kn' ? 'ಪಾಸ್‌ವರ್ಡ್' : 'Password'}
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                className="w-full px-4 py-2.5 pr-10 rounded-xl bg-[#0c182b] border border-white/20 focus:border-[#D4AF37] focus:outline-none text-white text-xs sm:text-sm font-sans"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                title={showPassword ? 'Hide' : 'Show'}
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-xl bg-[#D4AF37] hover:bg-white text-[#1A365D] font-sans font-bold uppercase tracking-wider text-xs transition-colors flex items-center justify-center gap-2 shadow-lg cursor-pointer"
            >
              {loading ? (
                <span>{currentLanguage === 'kn' ? 'ಪರಿಶೀಲಿಸಲಾಗುತ್ತಿದೆ...' : 'Verifying Credentials...'}</span>
              ) : (
                <>
                  <ShieldCheck className="w-4 h-4" />
                  <span>{currentLanguage === 'kn' ? 'ಅಡ್ಮಿನ್ ಪೋರ್ಟಲ್ ಪ್ರವೇಶಿಸಿ' : 'Enter Admin Control Panel'}</span>
                </>
              )}
            </button>
          </div>

          {/* Notice footer */}
          <div className="pt-2 text-center text-[11px] text-slate-400 font-sans">
            <span>Authorized: Rev. Santhosh K. Chacko · Native Evangelical School of Theology</span>
          </div>
        </form>

      </div>
    </div>
  );
};
