import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { 
  Wrench, 
  Clock, 
  Users, 
  Plus, 
  Check, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Star,
  Search
} from 'lucide-react';

interface ServicesViewProps {
  onOpenRepairModal: () => void;
}

export const ServicesView: React.FC<ServicesViewProps> = ({ onOpenRepairModal }) => {
  const { repairGroups, joinRepairGroup, setActiveGroupId, setCurrentTab } = useApp();
  const [filterCategory, setFilterCategory] = useState<string>('All');
  const [search, setSearch] = useState('');

  const categories = ['All', 'Air Conditioners', 'Refrigerators', 'Washing Machines', 'Water Purifiers'];

  const filteredGroups = repairGroups.filter(g => {
    const matchesCat = filterCategory === 'All' || g.category === filterCategory;
    const matchesSearch = g.appliance.toLowerCase().includes(search.toLowerCase()) ||
                          g.title.toLowerCase().includes(search.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-2">
              <Wrench className="w-3.5 h-3.5 text-emerald-600" />
              <span>Collective Appliance Servicing</span>
            </div>
            <h1 className="font-poppins font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
              Repair Together Groups
            </h1>
            <p className="font-inter text-slate-600 text-sm sm:text-base mt-1">
              Join live appliance repair slots with your neighbours in Green Valley Society and save up to 35%.
            </p>
          </div>

          <button
            onClick={onOpenRepairModal}
            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-poppins font-bold text-sm px-6 py-3.5 rounded-2xl shadow-md shadow-emerald-600/25 transition-all cursor-pointer shrink-0"
          >
            <Plus className="w-5 h-5" />
            <span>Raise Repair Request</span>
          </button>
        </div>

        {/* Search and Category Filter */}
        <div className="bg-white p-4 rounded-3xl border border-slate-200 shadow-soft flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilterCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                  filterCategory === cat
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
            <input
              type="text"
              placeholder="Search AC, Fridge, RO..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-xs rounded-xl border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-emerald-500/30"
            />
          </div>
        </div>

        {/* Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGroups.map((group) => {
            const isJoined = group.members.some(m => m.isYou);
            const progressPercent = Math.min(100, Math.round((group.membersJoined / group.maxMembers) * 100));

            return (
              <div
                key={group.id}
                className="bg-white rounded-3xl p-6 border border-slate-200 shadow-soft hover:shadow-card hover:border-emerald-400 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-2xl shadow-xs group-hover:scale-105 transition-transform">
                      {group.icon}
                    </div>
                    <div className="text-right">
                      <div className="inline-flex items-center gap-1 text-[10px] font-bold text-amber-800 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-full">
                        <Clock className="w-3 h-3 text-amber-600" />
                        <span>{group.closesIn}</span>
                      </div>
                      <div className="text-[10px] text-slate-400 mt-1">
                        {group.society}
                      </div>
                    </div>
                  </div>

                  <h3 
                    onClick={() => {
                      setActiveGroupId(group.id);
                      setCurrentTab('group-details');
                    }}
                    className="font-poppins font-bold text-base text-slate-900 mb-1 hover:text-emerald-700 cursor-pointer transition-colors"
                  >
                    {group.appliance}
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2 mb-4">
                    {group.title}
                  </p>

                  {/* Progress Bar */}
                  <div className="space-y-1.5 mb-4 bg-slate-50 p-3 rounded-2xl border border-slate-100">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold text-slate-700 flex items-center gap-1">
                        <Users className="w-3.5 h-3.5 text-emerald-600" />
                        <strong>{group.membersJoined}/{group.maxMembers}</strong> joined
                      </span>
                      <span className="text-[11px] text-slate-500 font-medium">
                        {group.maxMembers - group.membersJoined} more needed
                      </span>
                    </div>

                    <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-emerald-500 to-teal-500 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${progressPercent}%` }}
                      />
                    </div>
                  </div>

                  {/* Pricing */}
                  <div className="flex items-baseline justify-between pt-2 border-t border-slate-100 mb-4">
                    <div>
                      <span className="text-xs text-slate-400 line-through">₹{group.originalPrice}</span>
                      <div className="text-[10px] text-slate-400">Regular</div>
                    </div>

                    <div className="text-right">
                      <span className="font-poppins font-extrabold text-xl text-emerald-600">
                        ₹{group.groupPrice}
                      </span>
                      <span className="text-[11px] text-slate-500">/person</span>
                      <div className="text-[10px] text-emerald-700 font-bold">
                        Save ₹{group.savings}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <button
                    onClick={() => isJoined ? setCurrentTab('group-details') : joinRepairGroup(group.id)}
                    className={`w-full py-2.5 px-4 rounded-xl text-xs sm:text-sm font-poppins font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                      isJoined
                        ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                        : 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-md shadow-emerald-600/20'
                    }`}
                  >
                    {isJoined ? (
                      <>
                        <Check className="w-4 h-4" />
                        <span>Joined (View Details)</span>
                      </>
                    ) : (
                      <>
                        <span>Join Group</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <button
                    onClick={() => {
                      setActiveGroupId(group.id);
                      setCurrentTab('group-details');
                    }}
                    className="w-full text-center text-[11px] font-semibold text-slate-500 hover:text-slate-800 transition-colors py-1 cursor-pointer"
                  >
                    View Group Details & Technicians →
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};
