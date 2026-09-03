import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { 
  X, 
  ShieldCheck, 
  Phone, 
  ArrowRight, 
  Check, 
  Building2, 
  Sparkles,
  Lock,
  CheckCircle2
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const POPULAR_SOCIETIES = [
  'Green Valley Society (Current)',
  'DLF Phase 5 Apartments',
  'Prestige Shantiniketan',
  'Godrej Woods Residencies',
  'Sobha Dream Acres'
];

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose }) => {
  const { showToast, setCurrentTab } = useApp();

  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [phoneNumber, setPhoneNumber] = useState('98101 23456');
  const [otp, setOtp] = useState(['1', '2', '3', '4']);
  const [selectedSociety, setSelectedSociety] = useState('Green Valley Society (Current)');
  const [tower, setTower] = useState('Tower B');
  const [flat, setFlat] = useState('Flat 402');
  const [residentType, setResidentType] = useState<'owner' | 'tenant'>('owner');

  if (!isOpen) return null;

  const handlePhoneSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
  };

  const handleOtpVerify = () => {
    setStep(3);
  };

  const handleSocietyJoin = () => {
    setStep(4);
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#10B981', '#047857', '#F59E0B']
      });
    } catch {}
  };

  const handleComplete = () => {
    showToast(
      '🎉 Welcome to Green Valley Society!',
      'Resident verification successful. You now have full society commerce access.',
      'success'
    );
    onClose();
    setCurrentTab('dashboard');
    setStep(1);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="bg-white rounded-3xl max-w-md w-full shadow-2xl border border-slate-200 overflow-hidden animate-in zoom-in-95 duration-150 flex flex-col">
        
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-emerald-50/50">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow-xs">
              <Building2 className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-poppins font-bold text-base text-slate-900">
                Join Your Society on Socio+
              </h3>
              <p className="text-[11px] text-slate-500">Step {step} of 3 • Verified Residential Access</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* STEP 1: Enter Mobile */}
          {step === 1 && (
            <form onSubmit={handlePhoneSubmit} className="space-y-4">
              <div>
                <h4 className="font-poppins font-semibold text-sm text-slate-900">
                  Enter your mobile number
                </h4>
                <p className="text-xs text-slate-500 mt-0.5">
                  We'll send a 4-digit OTP to verify your apartment residency.
                </p>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">
                  Mobile Number
                </label>
                <div className="relative flex items-center">
                  <span className="absolute left-3.5 text-xs font-bold text-slate-500">
                    🇮🇳 +91
                  </span>
                  <input
                    type="tel"
                    required
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="98101 23456"
                    className="w-full pl-16 pr-4 py-2.5 rounded-xl border border-slate-300 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 font-mono"
                  />
                </div>
              </div>

              <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100 text-[11px] text-slate-500 flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Zero spam. Your phone number is strictly encrypted and never shared with vendors.</span>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-poppins font-bold text-sm py-3 rounded-xl shadow-md transition-all cursor-pointer"
              >
                <span>Send OTP Verification</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}

          {/* STEP 2: OTP Verification */}
          {step === 2 && (
            <div className="space-y-4">
              <div>
                <h4 className="font-poppins font-semibold text-sm text-slate-900">
                  Enter 4-digit OTP
                </h4>
                <p className="text-xs text-slate-500 mt-0.5">
                  Sent to <strong>+91 {phoneNumber}</strong> • <button onClick={() => setStep(1)} className="text-emerald-600 underline">Change</button>
                </p>
              </div>

              <div className="flex justify-center gap-3 py-2">
                {otp.map((digit, idx) => (
                  <input
                    key={idx}
                    type="text"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => {
                      const newOtp = [...otp];
                      newOtp[idx] = e.target.value;
                      setOtp(newOtp);
                    }}
                    className="w-12 h-12 text-center font-poppins font-extrabold text-xl rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-slate-50"
                  />
                ))}
              </div>

              <div className="text-center">
                <span className="text-xs text-slate-400">
                  Demo auto-filled with <strong className="text-slate-700">1234</strong>
                </span>
              </div>

              <button
                type="button"
                onClick={handleOtpVerify}
                className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-poppins font-bold text-sm py-3 rounded-xl shadow-md transition-all cursor-pointer"
              >
                <Check className="w-4 h-4" />
                <span>Verify & Continue</span>
              </button>
            </div>
          )}

          {/* STEP 3: Select Society & Flat */}
          {step === 3 && (
            <div className="space-y-4">
              <div>
                <h4 className="font-poppins font-semibold text-sm text-slate-900">
                  Select your apartment society
                </h4>
                <p className="text-xs text-slate-500 mt-0.5">
                  Only verified residents get access to tower commerce and groups.
                </p>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">
                  Apartment Society
                </label>
                <select
                  value={selectedSociety}
                  onChange={(e) => setSelectedSociety(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm bg-white font-medium"
                >
                  {POPULAR_SOCIETIES.map(s => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">
                    Tower / Wing
                  </label>
                  <select
                    value={tower}
                    onChange={(e) => setTower(e.target.value)}
                    className="w-full p-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm bg-white font-medium"
                  >
                    <option value="Tower A">Tower A</option>
                    <option value="Tower B">Tower B</option>
                    <option value="Tower C">Tower C</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">
                    Flat Number
                  </label>
                  <input
                    type="text"
                    value={flat}
                    onChange={(e) => setFlat(e.target.value)}
                    className="w-full p-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm font-medium"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">
                  Residency Status
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setResidentType('owner')}
                    className={`py-2 text-xs font-semibold rounded-xl border cursor-pointer ${
                      residentType === 'owner' 
                        ? 'bg-emerald-50 border-emerald-500 text-emerald-800' 
                        : 'border-slate-200 text-slate-600'
                    }`}
                  >
                    Flat Owner
                  </button>
                  <button
                    type="button"
                    onClick={() => setResidentType('tenant')}
                    className={`py-2 text-xs font-semibold rounded-xl border cursor-pointer ${
                      residentType === 'tenant' 
                        ? 'bg-emerald-50 border-emerald-500 text-emerald-800' 
                        : 'border-slate-200 text-slate-600'
                    }`}
                  >
                    Tenant / Renter
                  </button>
                </div>
              </div>

              <button
                type="button"
                onClick={handleSocietyJoin}
                className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-poppins font-bold text-sm py-3 rounded-xl shadow-md transition-all cursor-pointer"
              >
                <span>Submit for Society Verification</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

          {/* STEP 4: Success Confirmed */}
          {step === 4 && (
            <div className="py-4 text-center space-y-4">
              <div className="w-16 h-16 rounded-3xl bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md">
                <CheckCircle2 className="w-10 h-10 text-emerald-600" />
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full">
                  Verification Active
                </span>
                <h4 className="font-poppins font-bold text-xl text-slate-900 mt-2">
                  Welcome to Green Valley Society!
                </h4>
                <p className="text-xs text-slate-500 mt-1 max-w-xs mx-auto">
                  Your profile for <strong>{tower} - {flat}</strong> is now verified. You can now join repair groups and save immediately.
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-800">
                ⭐ 12 active society groups are open for your tower today!
              </div>

              <button
                type="button"
                onClick={handleComplete}
                className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-sm transition-all shadow-md cursor-pointer"
              >
                Go to My Resident Dashboard →
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
