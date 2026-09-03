import React from 'react';
import { useApp } from '../../context/AppContext';
import { 
  Clock, 
  Users, 
  Check, 
  ArrowRight, 
  TrendingDown, 
  ShieldCheck,
  Sparkles 
} from 'lucide-react';

export const LiveSavingsSection: React.FC = () => {
  const { repairGroups, joinRepairGroup, setActiveGroupId, setCurrentTab } = useApp();

  const handleCardClick = (groupId: string) => {
    setActiveGroupId(groupId);
    setCurrentTab('group-details');
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span>Live Society Demand</span>
            </div>
            <h2 className="font-poppins font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
              Your neighbours are already saving.
            </h2>
            <p className="font-inter text-slate-600 text-sm sm:text-base mt-2">
              Join open repair groups in Green Valley Society before the countdown closes.
            </p>
          </div>

          <button
            onClick={() => setCurrentTab('services')}
            className="inline-flex items-center gap-2 text-sm font-bold text-emerald-700 hover:text-emerald-800 transition-colors cursor-pointer group"
          >
            <span>View All Society Groups</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {repairGroups.map((group) => {
            const isJoined = group.members.some(m => m.isYou);
            const progressPercent = Math.min(100, Math.round((group.membersJoined / group.maxMembers) * 100));

            return (
              <div
                key={group.id}
                className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-soft hover:shadow-card hover:border-emerald-400 transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Bar: Icon, Society, Countdown */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-2xl shadow-xs group-hover:scale-105 transition-transform">
                      {group.icon}
                    </div>
                    <div className="text-right">
                      <div className="inline-flex items-center gap-1 text-[10px] font-bold text-amber-800 bg-amber-50 border border-amber-200/80 px-2 py-0.5 rounded-full">
                        <Clock className="w-3 h-3 text-amber-600" />
                        <span>{group.closesIn}</span>
                      </div>
                      <div className="text-[10px] text-slate-400 mt-1">
                        {group.society}
                      </div>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 
                    onClick={() => handleCardClick(group.id)}
                    className="font-poppins font-bold text-base text-slate-900 mb-1 hover:text-emerald-700 cursor-pointer transition-colors"
                  >
                    {group.appliance}
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2 mb-4">
                    {group.title}
                  </p>

                  {/* Progress Bar & Members joined */}
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

                  {/* Pricing Breakdown */}
                  <div className="flex items-baseline justify-between pt-2 border-t border-slate-100 mb-4">
                    <div>
                      <div className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">Regular</div>
                      <span className="text-xs text-slate-400 line-through">₹{group.originalPrice}</span>
                    </div>

                    <div className="text-right">
                      <div className="text-[10px] uppercase tracking-wider text-emerald-700 font-bold">Group Price</div>
                      <span className="font-poppins font-extrabold text-xl text-emerald-600">
                        ₹{group.groupPrice}
                      </span>
                      <span className="text-[11px] text-slate-500">/person</span>
                    </div>
                  </div>

                  {/* Savings pill */}
                  <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold py-1.5 px-3 rounded-xl text-center mb-4 flex items-center justify-center gap-1">
                    <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Save ₹{group.savings} per flat</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="space-y-2">
                  <button
                    onClick={() => isJoined ? handleCardClick(group.id) : joinRepairGroup(group.id)}
                    className={`w-full py-2.5 px-4 rounded-xl text-xs sm:text-sm font-poppins font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                      isJoined
                        ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                        : 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-md shadow-emerald-600/20 hover:shadow-emerald-600/30'
                    }`}
                  >
                    {isJoined ? (
                      <>
                        <Check className="w-4 h-4" />
                        <span>Joined (View Group)</span>
                      </>
                    ) : (
                      <>
                        <span>Join Group</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <button
                    onClick={() => handleCardClick(group.id)}
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
    </section>
  );
};
