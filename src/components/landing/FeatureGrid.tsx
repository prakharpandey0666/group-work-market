import React from 'react';
import { useApp } from '../../context/AppContext';
import { 
  Wrench, 
  ShoppingCart, 
  ShoppingBag, 
  Users, 
  Package, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { NavigationTab } from '../../types';

export const FeatureGrid: React.FC = () => {
  const { setCurrentTab } = useApp();

  const features: {
    id: string;
    title: string;
    tagline: string;
    description: string;
    icon: React.ReactNode;
    color: string;
    badgeColor: string;
    cta: string;
    tab: NavigationTab;
  }[] = [
    {
      id: 'repair',
      title: 'Repair Together',
      tagline: 'Group appliance requests & save up to 35%',
      description: 'Group similar repair requests for AC, Fridge, RO, and Washing Machine to get bulk rates from trusted local mechanics.',
      icon: <Wrench className="w-6 h-6 text-emerald-600" />,
      color: 'bg-emerald-50/70 border-emerald-200/80 hover:border-emerald-500',
      badgeColor: 'bg-emerald-100 text-emerald-800',
      cta: 'Explore Repairs',
      tab: 'services'
    },
    {
      id: 'buy',
      title: 'Buy Together',
      tagline: 'Bulk groceries & household essentials',
      description: 'Combine dairy, produce, and cleaning essentials demand with neighbours to unlock wholesale distributor pricing directly at your gate.',
      icon: <ShoppingCart className="w-6 h-6 text-amber-600" />,
      color: 'bg-amber-50/70 border-amber-200/80 hover:border-amber-500',
      badgeColor: 'bg-amber-100 text-amber-800',
      cta: 'Explore Group Buying',
      tab: 'buy-together'
    },
    {
      id: 'marketplace',
      title: 'Marketplace',
      tagline: 'Pre-owned items from verified neighbours',
      description: 'Buy and sell pre-owned appliances, furniture, and kids toys directly inside your society towers with zero shipping hassle.',
      icon: <ShoppingBag className="w-6 h-6 text-purple-600" />,
      color: 'bg-purple-50/70 border-purple-200/80 hover:border-purple-500',
      badgeColor: 'bg-purple-100 text-purple-800',
      cta: 'Browse Marketplace',
      tab: 'marketplace'
    },
    {
      id: 'services',
      title: 'Trusted Services',
      tagline: 'Police-verified local handymen',
      description: 'Find verified electricians, plumbers, carpenters, and deep cleaners rated by your actual neighbours in Green Valley Society.',
      icon: <Users className="w-6 h-6 text-blue-600" />,
      color: 'bg-blue-50/70 border-blue-200/80 hover:border-blue-500',
      badgeColor: 'bg-blue-100 text-blue-800',
      cta: 'Find Services',
      tab: 'services'
    },
    {
      id: 'moving',
      title: 'Moving Out Sale',
      tagline: 'Relocating? Clear your home in 1 week',
      description: 'Moving to another city? Create a multi-item package and sell your entire household directly to incoming neighbours.',
      icon: <Package className="w-6 h-6 text-emerald-700" />,
      color: 'bg-teal-50/70 border-teal-200/80 hover:border-teal-500',
      badgeColor: 'bg-teal-100 text-teal-800',
      cta: 'Explore Sales',
      tab: 'moving-sale'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/70 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Everything Your Society Needs</span>
          </div>
          <h2 className="font-poppins font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
            One Society. Many Possibilities.
          </h2>
          <p className="font-inter text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
            Socio+ aggregates demand across multiple daily needs, transforming small individual expenses into organized, high-bargaining community power.
          </p>
        </div>

        {/* 5 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, idx) => (
            <div
              key={item.id}
              className={`rounded-3xl p-7 border transition-all duration-200 hover:-translate-y-1 hover:shadow-card flex flex-col justify-between ${item.color} ${
                idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-xs flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${item.badgeColor}`}>
                    {item.tagline}
                  </span>
                </div>

                <h3 className="font-poppins font-bold text-xl text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-6 mt-4 border-t border-slate-200/40">
                <button
                  onClick={() => setCurrentTab(item.tab)}
                  className="flex items-center gap-1.5 text-xs sm:text-sm font-bold text-slate-900 hover:text-emerald-700 transition-colors cursor-pointer group"
                >
                  <span>{item.cta}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-emerald-600" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
