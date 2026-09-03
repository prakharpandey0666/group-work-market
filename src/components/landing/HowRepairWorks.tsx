import React from 'react';
import { 
  FileText, 
  Search, 
  Users, 
  TrendingDown, 
  ArrowRight, 
  Check, 
  Sparkles,
  ShieldCheck
} from 'lucide-react';

interface HowRepairWorksProps {
  onOpenRepairModal: () => void;
}

export const HowRepairWorks: React.FC<HowRepairWorksProps> = ({ onOpenRepairModal }) => {
  const steps = [
    {
      num: '01',
      title: 'Raise a request',
      description: 'Select appliance, describe the problem, and choose your preferred day.',
      icon: <FileText className="w-5 h-5 text-emerald-600" />
    },
    {
      num: '02',
      title: 'Find your neighbours',
      description: 'Socio+ automatically matches similar requests across your society towers.',
      icon: <Search className="w-5 h-5 text-emerald-600" />
    },
    {
      num: '03',
      title: 'Create a group',
      description: 'Neighbours join the same repair slot with live countdown timers.',
      icon: <Users className="w-5 h-5 text-emerald-600" />
    },
    {
      num: '04',
      title: 'Get better pricing',
      description: 'A verified mechanic gives a group quote and completes jobs in one visit.',
      icon: <TrendingDown className="w-5 h-5 text-emerald-600" />
    }
  ];

  return (
    <section className="py-20 bg-[#F8FAFC] border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100/70 border border-emerald-300/60 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>Demand Aggregation Principle</span>
          </div>
          <h2 className="font-poppins font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
            How Repair Together Works
          </h2>
          <p className="font-inter text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
            Instead of 5 mechanics making 5 separate trips, Socio+ brings one verified professional for the whole society — passing massive travel & acquisition savings back to you.
          </p>
        </div>

        {/* 4 Steps Horizontal Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 shadow-soft border border-slate-200 hover:border-emerald-500 hover:shadow-card transition-all relative group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-poppins font-extrabold text-3xl text-slate-200 group-hover:text-emerald-500 transition-colors">
                    {step.num}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center">
                    {step.icon}
                  </div>
                </div>

                <h3 className="font-poppins font-bold text-base text-slate-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {idx < 3 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-slate-300">
                  <ArrowRight className="w-5 h-5 text-emerald-400" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Visual Demand Aggregation Comparison Box */}
        <div className="mt-12 bg-white rounded-3xl p-6 sm:p-8 border border-emerald-200 shadow-card">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            <div className="lg:col-span-4">
              <div className="flex items-center gap-2">
                <span className="text-3xl">❄️</span>
                <div>
                  <h4 className="font-poppins font-bold text-lg text-slate-900">
                    AC Repair Example
                  </h4>
                  <p className="text-xs text-slate-500">
                    Green Valley Society • 5 Neighbours Joined
                  </p>
                </div>
              </div>
              <p className="text-xs text-slate-600 mt-2">
                5 separate independent visits cost mechanics high fuel & time. Socio+ combines them into one seamless Saturday route.
              </p>
            </div>

            {/* Price transformation visual */}
            <div className="lg:col-span-5 bg-emerald-50/70 rounded-2xl p-4 sm:p-5 border border-emerald-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-center sm:text-left">
                <div className="text-[11px] uppercase tracking-wider text-slate-500 font-semibold">Individual Booking</div>
                <div className="font-poppins font-bold text-xl text-slate-400 line-through">₹650</div>
                <div className="text-[10px] text-slate-400">Regular urban rate</div>
              </div>

              <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-md">
                →
              </div>

              <div className="text-center sm:text-right">
                <div className="text-[11px] uppercase tracking-wider text-emerald-800 font-semibold">Society Group Price</div>
                <div className="font-poppins font-extrabold text-2xl text-emerald-700">₹480 <span className="text-xs font-normal">/ person</span></div>
                <div className="text-[10px] text-emerald-700 font-bold">5 of 8 Joined</div>
              </div>
            </div>

            {/* Savings Badge & CTA */}
            <div className="lg:col-span-3 text-center lg:text-right space-y-2">
              <div className="inline-block bg-emerald-600 text-white px-4 py-1.5 rounded-full font-poppins font-bold text-sm shadow-md shadow-emerald-600/20">
                Save ₹170 / person
              </div>
              <div>
                <button
                  onClick={onOpenRepairModal}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs sm:text-sm px-5 py-2.5 rounded-xl transition-all cursor-pointer"
                >
                  <span>Start a Repair Group</span>
                  <ArrowRight className="w-3.5 h-3.5 text-emerald-400" />
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
