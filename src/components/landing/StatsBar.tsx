import React from 'react';
import { Building2, Users, Wrench, Coins } from 'lucide-react';

export const StatsBar: React.FC = () => {
  const stats = [
    {
      value: '100+',
      label: 'Societies',
      subtext: 'Active gated communities',
      icon: <Building2 className="w-5 h-5 text-emerald-600" />,
      color: 'bg-emerald-50'
    },
    {
      value: '25K+',
      label: 'Residents',
      subtext: 'Verified apartment flats',
      icon: <Users className="w-5 h-5 text-blue-600" />,
      color: 'bg-blue-50'
    },
    {
      value: '5K+',
      label: 'Verified Providers',
      subtext: 'Mechanics & technicians',
      icon: <Wrench className="w-5 h-5 text-amber-600" />,
      color: 'bg-amber-50'
    },
    {
      value: '₹2Cr+',
      label: 'Potential Savings',
      subtext: 'Saved via collective demand',
      icon: <Coins className="w-5 h-5 text-emerald-600" />,
      color: 'bg-emerald-50'
    }
  ];

  return (
    <section className="relative z-10 -mt-6 sm:-mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-card border border-slate-200/80">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y lg:divide-y-0 lg:divide-x divide-slate-100">
          {stats.map((stat, idx) => (
            <div 
              key={idx} 
              className={`flex items-center gap-4 ${idx > 0 && idx % 2 === 0 ? 'pt-4 lg:pt-0' : ''} ${idx > 0 ? 'lg:pl-6' : ''}`}
            >
              <div className={`w-12 h-12 rounded-2xl ${stat.color} flex items-center justify-center shrink-0 shadow-xs`}>
                {stat.icon}
              </div>
              <div>
                <div className="font-poppins font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight">
                  {stat.value}
                </div>
                <div className="font-inter font-semibold text-xs sm:text-sm text-slate-800">
                  {stat.label}
                </div>
                <div className="text-[11px] text-slate-400">
                  {stat.subtext}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
