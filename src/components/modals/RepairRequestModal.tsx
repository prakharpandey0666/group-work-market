import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { 
  Wrench, 
  X, 
  Check, 
  Calendar, 
  Camera, 
  ArrowRight, 
  Sparkles, 
  Loader2, 
  Users, 
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

interface RepairRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const APPLIANCES = [
  { id: 'AC', name: 'AC (Split / Window)', icon: '❄️', popular: true },
  { id: 'Refrigerator', name: 'Refrigerator', icon: '🧊', popular: true },
  { id: 'Washing Machine', name: 'Washing Machine', icon: '🌀', popular: true },
  { id: 'RO', name: 'RO Water Purifier', icon: '💧', popular: true },
  { id: 'Geyser', name: 'Geyser / Water Heater', icon: '⚡' },
  { id: 'Cooler', name: 'Air Cooler', icon: '💨' },
  { id: 'TV', name: 'Television / Audio', icon: '📺' },
  { id: 'Microwave', name: 'Microwave Oven', icon: '♨️' },
];

export const RepairRequestModal: React.FC<RepairRequestModalProps> = ({ isOpen, onClose }) => {
  const { createRepairRequest } = useApp();
  
  const [step, setStep] = useState<1 | 2 | 3 | 4 | 5>(1);
  const [selectedAppliance, setSelectedAppliance] = useState('AC');
  const [issueDescription, setIssueDescription] = useState('AC is not cooling properly and indoor unit airflow is weak.');
  const [preferredDay, setPreferredDay] = useState('This Weekend');
  const [customDate, setCustomDate] = useState('');
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const [isMatching, setIsMatching] = useState(false);

  if (!isOpen) return null;

  const handleNext = () => {
    if (step < 4) {
      setStep((step + 1) as any);
    } else if (step === 4) {
      // Trigger matching animation
      setStep(5);
      setIsMatching(true);
      setTimeout(() => {
        setIsMatching(false);
      }, 1600);
    }
  };

  const handleFinishMatch = () => {
    const finalDay = preferredDay === 'Choose Date' && customDate ? customDate : preferredDay;
    createRepairRequest({
      appliance: selectedAppliance,
      issue: issueDescription,
      preferredDay: finalDay
    });
    onClose();
    setStep(1);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="bg-white rounded-3xl max-w-lg w-full shadow-2xl border border-slate-200 overflow-hidden animate-in zoom-in-95 duration-150 flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200/60">
                Step {step} of 4 • Demand Aggregation
              </span>
            </div>
            <h3 className="font-poppins font-bold text-lg text-slate-900 mt-1">
              Raise Appliance Repair Request
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto flex-1">
          
          {/* STEP 1: Select Appliance */}
          {step === 1 && (
            <div className="space-y-4">
              <div>
                <h4 className="font-poppins font-semibold text-base text-slate-900">
                  Select your appliance
                </h4>
                <p className="text-xs text-slate-500">
                  We'll search for neighbours in Green Valley Society needing the same repair.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {APPLIANCES.map((app) => {
                  const isSelected = selectedAppliance === app.id;
                  return (
                    <button
                      key={app.id}
                      type="button"
                      onClick={() => setSelectedAppliance(app.id)}
                      className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between h-24 ${
                        isSelected
                          ? 'border-emerald-500 bg-emerald-50/60 shadow-sm ring-1 ring-emerald-500'
                          : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-2xl">{app.icon}</span>
                        {isSelected && <Check className="w-4 h-4 text-emerald-600" />}
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-800">{app.name}</div>
                        {app.popular && (
                          <div className="text-[10px] text-emerald-700 font-medium">
                            Active group available
                          </div>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 2: Describe Issue */}
          {step === 2 && (
            <div className="space-y-4">
              <div>
                <h4 className="font-poppins font-semibold text-base text-slate-900">
                  Describe the issue with your {selectedAppliance}
                </h4>
                <p className="text-xs text-slate-500">
                  Help the mechanic bring the exact spare parts and diagnostic tools.
                </p>
              </div>

              <div className="space-y-2">
                <textarea
                  rows={4}
                  value={issueDescription}
                  onChange={(e) => setIssueDescription(e.target.value)}
                  placeholder="e.g. AC is not cooling properly, making buzzing noise, or water leakage from indoor unit..."
                  className="w-full p-3.5 rounded-2xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 text-sm"
                />
                
                {/* Common tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {['Not cooling', 'Water leaking', 'Noisy sound', 'Tripping MCB', 'Odour/Smell'].map(tag => (
                    <button
                      key={tag}
                      type="button"
                      onClick={() => setIssueDescription(prev => prev + ` [${tag}]`)}
                      className="text-[11px] bg-slate-100 hover:bg-slate-200 text-slate-700 px-2.5 py-1 rounded-lg transition-colors cursor-pointer"
                    >
                      + {tag}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* STEP 3: Upload Photos (Optional) */}
          {step === 3 && (
            <div className="space-y-4">
              <div>
                <h4 className="font-poppins font-semibold text-base text-slate-900">
                  Upload photos or model label (Optional)
                </h4>
                <p className="text-xs text-slate-500">
                  Photos help verified technicians provide the most accurate group quote.
                </p>
              </div>

              <div 
                onClick={() => setPhotoPreview('/assets/washing-machine.jpg')}
                className="border-2 border-dashed border-slate-300 hover:border-emerald-500 rounded-3xl p-6 text-center cursor-pointer bg-slate-50/50 hover:bg-emerald-50/30 transition-all"
              >
                {photoPreview ? (
                  <div className="space-y-3">
                    <img 
                      src={photoPreview} 
                      alt="Preview" 
                      className="h-32 w-auto mx-auto rounded-xl object-cover shadow-sm" 
                    />
                    <div className="text-xs text-emerald-600 font-semibold flex items-center justify-center gap-1">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Photo Attached (Click to change)</span>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                      <Camera className="w-6 h-6" />
                    </div>
                    <div className="text-xs font-semibold text-slate-700">
                      Tap to attach photo or camera shot
                    </div>
                    <div className="text-[11px] text-slate-400">
                      JPG, PNG, HEIC up to 10MB
                    </div>
                  </div>
                )}
              </div>

              <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-800 flex items-start gap-2">
                <span className="text-base">💡</span>
                <span>
                  Tip: Capturing the barcode or brand model sticker helps the technician bring genuine filters/parts directly on the visit.
                </span>
              </div>
            </div>
          )}

          {/* STEP 4: Preferred Day */}
          {step === 4 && (
            <div className="space-y-4">
              <div>
                <h4 className="font-poppins font-semibold text-base text-slate-900">
                  When would you prefer the service visit?
                </h4>
                <p className="text-xs text-slate-500">
                  Similar timeslots in Green Valley Society are aggregated for maximum price discount.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: 'Today Evening', desc: 'Between 5 PM - 8 PM' },
                  { label: 'Tomorrow', desc: 'Any convenient slot' },
                  { label: 'This Weekend', desc: 'Saturday / Sunday', best: true },
                  { label: 'Choose Date', desc: 'Select custom day' },
                ].map((item) => {
                  const isSelected = preferredDay === item.label;
                  return (
                    <button
                      key={item.label}
                      type="button"
                      onClick={() => setPreferredDay(item.label)}
                      className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                        isSelected
                          ? 'border-emerald-500 bg-emerald-50/60 shadow-sm ring-1 ring-emerald-500'
                          : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                      }`}
                    >
                      <div>
                        <div className="text-xs font-bold text-slate-900 flex items-center justify-between">
                          <span>{item.label}</span>
                          {item.best && (
                            <span className="text-[9px] bg-emerald-600 text-white px-1.5 py-0.5 rounded-full font-bold">
                              Most Neighbours
                            </span>
                          )}
                        </div>
                        <div className="text-[11px] text-slate-500 mt-1">{item.desc}</div>
                      </div>
                    </button>
                  );
                })}
              </div>

              {preferredDay === 'Choose Date' && (
                <div className="pt-2">
                  <label className="text-xs font-semibold text-slate-700 block mb-1">
                    Select date
                  </label>
                  <input
                    type="date"
                    value={customDate}
                    onChange={(e) => setCustomDate(e.target.value)}
                    className="w-full p-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
              )}
            </div>
          )}

          {/* STEP 5: Matching Animation & Result */}
          {step === 5 && (
            <div className="py-6 text-center space-y-5">
              {isMatching ? (
                <div className="py-8 space-y-4">
                  <div className="relative w-20 h-20 mx-auto flex items-center justify-center">
                    <div className="absolute inset-0 rounded-full border-4 border-emerald-100 animate-ping opacity-75" />
                    <div className="w-16 h-16 rounded-full bg-emerald-600 text-white flex items-center justify-center shadow-lg shadow-emerald-500/30">
                      <Sparkles className="w-8 h-8 animate-spin" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-poppins font-bold text-lg text-slate-900">
                      Scanning Green Valley Society...
                    </h4>
                    <p className="text-xs text-slate-500 mt-1 max-w-xs mx-auto">
                      Matching your {selectedAppliance} request with 428 flats in Towers A, B, and C.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="space-y-4 animate-in zoom-in-95 duration-200">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md shadow-emerald-500/20">
                    <CheckCircle2 className="w-10 h-10 text-emerald-600" />
                  </div>

                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full">
                      Match Confirmed!
                    </span>
                    <h4 className="font-poppins font-bold text-xl text-slate-900 mt-2">
                      Great! We found neighbours with similar requests.
                    </h4>
                    <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
                      5 neighbours in your society are having their AC serviced this Saturday.
                    </p>
                  </div>

                  {/* Match Card Preview */}
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 text-left space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">❄️</span>
                        <div>
                          <div className="text-xs font-bold text-slate-900">AC Repair Group</div>
                          <div className="text-[11px] text-slate-500">Green Valley Society • 5/8 Joined</div>
                        </div>
                      </div>
                      <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                        Save ₹170
                      </span>
                    </div>

                    <div className="flex items-baseline gap-2 pt-1 border-t border-slate-200/60">
                      <span className="text-xs text-slate-400 line-through">₹650</span>
                      <span className="font-poppins font-bold text-lg text-emerald-600">₹480</span>
                      <span className="text-xs text-slate-600">/ resident</span>
                    </div>

                    <div className="text-[11px] text-slate-600 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      <span>Preferred Slot: <strong>Saturday, 11:00 AM onwards</strong></span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

        </div>

        {/* Modal Footer Controls */}
        <div className="px-6 py-4 border-t border-slate-100 bg-slate-50/50 flex items-center justify-between">
          {step > 1 && step < 5 ? (
            <button
              type="button"
              onClick={() => setStep((step - 1) as any)}
              className="text-xs font-semibold text-slate-600 hover:text-slate-900 px-3 py-2 rounded-xl cursor-pointer"
            >
              Back
            </button>
          ) : (
            <div />
          )}

          {step < 4 && (
            <button
              type="button"
              onClick={handleNext}
              className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs sm:text-sm px-5 py-2.5 rounded-xl shadow-md shadow-emerald-600/20 transition-all cursor-pointer"
            >
              <span>Next</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}

          {step === 4 && (
            <button
              type="button"
              onClick={handleNext}
              className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm px-6 py-2.5 rounded-xl shadow-md shadow-emerald-600/20 transition-all cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              <span>Find My Repair Group</span>
            </button>
          )}

          {step === 5 && !isMatching && (
            <button
              type="button"
              onClick={handleFinishMatch}
              className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm py-3 rounded-xl shadow-lg shadow-emerald-600/30 transition-all cursor-pointer"
            >
              <span>View Group Details & Join</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>

      </div>
    </div>
  );
};
