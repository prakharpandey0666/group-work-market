import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { 
  Wrench, 
  Star, 
  Calendar, 
  MapPin, 
  Coins, 
  Users, 
  CheckCircle2, 
  Phone, 
  Clock, 
  Sparkles, 
  ChevronRight, 
  Check, 
  X,
  Send
} from 'lucide-react';
import { ProviderJob } from '../../types';

export const ProviderView: React.FC = () => {
  const { providerJobs, sendProviderQuote, acceptProviderJob, showToast } = useApp();

  const [activeJobForQuote, setActiveJobForQuote] = useState<ProviderJob | null>(null);
  const [quoteInput, setQuoteInput] = useState('2400');
  const [selectedJobForDetails, setSelectedJobForDetails] = useState<ProviderJob | null>(null);

  const handleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!activeJobForQuote || !quoteInput) return;

    sendProviderQuote(activeJobForQuote.id, parseFloat(quoteInput));
    setActiveJobForQuote(null);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Top Header Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-soft flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-blue-600 text-white font-bold flex items-center justify-center text-2xl shadow-lg shadow-blue-600/20">
              MK
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="font-poppins font-extrabold text-2xl sm:text-3xl text-slate-900">
                  Good morning, Manoj 👋
                </h1>
                <span className="text-xs bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-full">
                  ✓ Verified Partner
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                Manoj AC & Appliance Care • Certified Society Contractor
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 bg-blue-50 border border-blue-200/80 px-4 py-2.5 rounded-2xl text-xs font-semibold text-blue-900">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>Available for Green Valley Society Routes</span>
          </div>
        </div>

        {/* 4 Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-soft">
            <div className="flex items-center justify-between text-slate-500 mb-2">
              <span className="text-xs font-semibold uppercase tracking-wider">New Groups</span>
              <Users className="w-4 h-4 text-blue-600" />
            </div>
            <div className="font-poppins font-extrabold text-2xl sm:text-3xl text-slate-900">
              12
            </div>
            <div className="text-[11px] text-blue-600 font-medium mt-1">
              Ready for quotes
            </div>
          </div>

          <div className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-soft">
            <div className="flex items-center justify-between text-slate-500 mb-2">
              <span className="text-xs font-semibold uppercase tracking-wider">Upcoming Jobs</span>
              <Calendar className="w-4 h-4 text-emerald-600" />
            </div>
            <div className="font-poppins font-extrabold text-2xl sm:text-3xl text-slate-900">
              28
            </div>
            <div className="text-[11px] text-emerald-600 font-medium mt-1">
              Confirmed society slots
            </div>
          </div>

          <div className="bg-emerald-50/60 rounded-3xl p-5 border border-emerald-200/80 shadow-soft">
            <div className="flex items-center justify-between text-emerald-800 mb-2">
              <span className="text-xs font-semibold uppercase tracking-wider">This Month</span>
              <Coins className="w-4 h-4 text-emerald-600" />
            </div>
            <div className="font-poppins font-extrabold text-2xl sm:text-3xl text-emerald-700">
              ₹42,500
            </div>
            <div className="text-[11px] text-emerald-800 font-medium mt-1">
              Direct society payouts
            </div>
          </div>

          <div className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-soft">
            <div className="flex items-center justify-between text-slate-500 mb-2">
              <span className="text-xs font-semibold uppercase tracking-wider">Overall Rating</span>
              <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
            </div>
            <div className="font-poppins font-extrabold text-2xl sm:text-3xl text-slate-900 flex items-center gap-1.5">
              <span>4.8</span>
              <span className="text-sm font-normal text-slate-400">/ 5.0</span>
            </div>
            <div className="text-[11px] text-slate-400 mt-1">
              Based on 248 resident reviews
            </div>
          </div>
        </div>

        {/* Active Group Opportunities */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-soft space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-poppins font-bold text-xl text-slate-900">
                Group Service Opportunities
              </h2>
              <p className="text-xs text-slate-500">
                One society visit, multiple customers. High density routes with zero customer acquisition cost.
              </p>
            </div>
            <span className="text-xs font-bold text-blue-700 bg-blue-50 px-3 py-1 rounded-full">
              3 Pending Society Batches
            </span>
          </div>

          <div className="space-y-4">
            {providerJobs.map((job) => (
              <div
                key={job.id}
                className="p-5 sm:p-6 rounded-3xl bg-slate-50/70 hover:bg-slate-50 border border-slate-200/80 transition-all flex flex-col lg:flex-row lg:items-center justify-between gap-6"
              >
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold bg-blue-100 text-blue-800 px-2.5 py-0.5 rounded-full">
                      {job.society}
                    </span>
                    <span className="text-xs font-semibold text-slate-500 flex items-center gap-1">
                      <Users className="w-3.5 h-3.5 text-blue-600" />
                      {job.customerCount} customers pooled
                    </span>
                  </div>

                  <h3 className="font-poppins font-bold text-lg text-slate-900">
                    {job.groupTitle}
                  </h3>

                  <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      <span>{job.slot}</span>
                    </div>
                    <div className="flex items-center gap-1.5 font-bold text-emerald-700">
                      <Coins className="w-3.5 h-3.5" />
                      <span>Est. Earning: ₹{job.estimatedEarnings.toLocaleString('en-IN')}</span>
                    </div>
                  </div>
                </div>

                {/* Actions & Status */}
                <div className="flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => setSelectedJobForDetails(job)}
                    className="px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
                  >
                    View Customer List
                  </button>

                  {job.status === 'new_request' && (
                    <>
                      <button
                        onClick={() => {
                          setActiveJobForQuote(job);
                          setQuoteInput(job.estimatedEarnings.toString());
                        }}
                        className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-poppins font-bold text-xs shadow-md transition-all cursor-pointer flex items-center gap-1.5"
                      >
                        <Send className="w-3.5 h-3.5" />
                        <span>Send Quote</span>
                      </button>

                      <button
                        onClick={() => acceptProviderJob(job.id)}
                        className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-poppins font-bold text-xs shadow-md transition-all cursor-pointer flex items-center gap-1.5"
                      >
                        <Check className="w-3.5 h-3.5" />
                        <span>Accept Group</span>
                      </button>
                    </>
                  )}

                  {job.status === 'quote_sent' && (
                    <div className="px-4 py-2 rounded-xl bg-amber-100 text-amber-900 text-xs font-bold flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      <span>Quote Sent (₹{job.quotedAmount})</span>
                    </div>
                  )}

                  {job.status === 'accepted' && (
                    <div className="px-4 py-2 rounded-xl bg-emerald-100 text-emerald-900 text-xs font-bold flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Accepted & Route Scheduled</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal: Send Quote */}
        {activeJobForQuote && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-150">
            <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-slate-200 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <h3 className="font-poppins font-bold text-base text-slate-900">
                  Send Group Quote to Society
                </h3>
                <button
                  onClick={() => setActiveJobForQuote(null)}
                  className="p-1 rounded-full text-slate-400 hover:text-slate-600"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleQuoteSubmit} className="space-y-4">
                <div>
                  <div className="text-xs font-semibold text-slate-700 mb-1">
                    Group: {activeJobForQuote.groupTitle}
                  </div>
                  <div className="text-xs text-slate-500">
                    Location: {activeJobForQuote.society} ({activeJobForQuote.customerCount} flats)
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">
                    Total Lump-sum Quote for All {activeJobForQuote.customerCount} Flats (₹)
                  </label>
                  <input
                    type="number"
                    required
                    value={quoteInput}
                    onChange={(e) => setQuoteInput(e.target.value)}
                    className="w-full p-2.5 rounded-xl border border-slate-300 text-sm font-bold focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <div className="text-[11px] text-slate-500 mt-1">
                    Average: ₹{Math.round(parseFloat(quoteInput || '0') / activeJobForQuote.customerCount)}/resident
                  </div>
                </div>

                <div className="p-3 bg-blue-50 rounded-xl text-xs text-blue-800">
                  Residents will receive an instant notification to confirm this slot.
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-sm transition-all shadow-md cursor-pointer"
                >
                  Submit Quote to Green Valley RWA
                </button>
              </form>
            </div>
          </div>
        )}

        {/* Modal: View Customers */}
        {selectedJobForDetails && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-150">
            <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-slate-200 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div>
                  <h3 className="font-poppins font-bold text-base text-slate-900">
                    Resident Customer Route
                  </h3>
                  <p className="text-xs text-slate-500">{selectedJobForDetails.groupTitle}</p>
                </div>
                <button
                  onClick={() => setSelectedJobForDetails(null)}
                  className="p-1 rounded-full text-slate-400 hover:text-slate-600"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-2.5 max-h-80 overflow-y-auto pr-1">
                {selectedJobForDetails.customerList.map((cust, idx) => (
                  <div key={idx} className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 text-xs space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-slate-900">{cust.name}</span>
                      <span className="bg-blue-100 text-blue-800 font-bold px-2 py-0.5 rounded-md">
                        {cust.tower} • Flat {cust.flat}
                      </span>
                    </div>
                    <div className="text-slate-600">Issue: {cust.issue}</div>
                    <div className="text-slate-400 flex items-center gap-1 pt-1">
                      <Phone className="w-3 h-3 text-emerald-600" />
                      <span>{cust.phone}</span>
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={() => setSelectedJobForDetails(null)}
                className="w-full py-2.5 bg-slate-900 text-white font-semibold text-xs rounded-xl cursor-pointer"
              >
                Close List
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
