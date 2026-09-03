import React from 'react';
import { ShieldCheck, UserCheck, CreditCard, Star } from 'lucide-react';

export const TrustSection: React.FC = () => {
  const pillars = [
    {
      title: 'Verified Residents',
      description: 'Only KYC-approved residents of Green Valley Society get access. Zero anonymous buyers, sellers, or outside spammers.',
      icon: <UserCheck className="w-6 h-6 text-emerald-600" />,
      badge: 'KYC Verified'
    },
    {
      title: 'Verified Providers',
      description: 'Every mechanic, electrician, and technician undergoes background checks, skill verification, and society security checks.',
      icon: <ShieldCheck className="w-6 h-6 text-blue-600" />,
      badge: 'Police Checked'
    },
    {
      title: 'Secure Payments',
      description: '100% transparent pricing with zero surprise add-ons. Direct UPI payments with instant GST receipts and society escrow.',
      icon: <CreditCard className="w-6 h-6 text-amber-600" />,
      badge: 'Escrow Safe'
    },
    {
      title: 'Ratings & Reviews',
      description: 'Reviews are written exclusively by neighbours living in your towers who have actually availed the service.',
      icon: <Star className="w-6 h-6 text-purple-600" />,
      badge: '100% Genuine'
    }
  ];

  return (
    <section className="py-20 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Community Trust Framework</span>
          </div>
          <h2 className="font-poppins font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
            Built for people you trust.
          </h2>
          <p className="font-inter text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
            Unlike generic classifieds or national service aggregators, Socio+ is strictly bounded by your society gates. Your neighbours are your guarantee.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-slate-50/70 rounded-3xl p-6 border border-slate-200/80 hover:border-emerald-400 hover:shadow-card hover:bg-white transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-xs border border-slate-100 flex items-center justify-center">
                    {pillar.icon}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-slate-200/70 text-slate-700 px-2 py-0.5 rounded-full">
                    {pillar.badge}
                  </span>
                </div>

                <h3 className="font-poppins font-bold text-lg text-slate-900 mb-2">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center gap-1.5 text-emerald-700 text-xs font-semibold">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Protected by Socio+</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
