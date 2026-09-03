import React from 'react';
import { useApp } from '../../context/AppContext';
import { 
  ArrowLeft, 
  Clock, 
  Users, 
  ShieldCheck, 
  Star, 
  Check, 
  Sparkles, 
  Calendar, 
  CreditCard, 
  AlertCircle,
  Phone
} from 'lucide-react';

export const GroupDetailsView: React.FC = () => {
  const { repairGroups, activeGroupId, joinRepairGroup, setCurrentTab } = useApp();

  const group = repairGroups.find(g => g.id === activeGroupId) || repairGroups[0];
  const isJoined = group.members.some(m => m.isYou);
  const progressPercent = Math.min(100, Math.round((group.membersJoined / group.maxMembers) * 100));

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-8 sm:py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Back navigation */}
        <button
          onClick={() => setCurrentTab('services')}
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors cursor-pointer bg-white px-3.5 py-2 rounded-xl border border-slate-200 shadow-xs"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Groups</span>
        </button>

        {/* Savings banner */}
        <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 rounded-3xl p-5 sm:p-6 text-white shadow-xl shadow-emerald-900/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center shrink-0">
              <Sparkles className="w-6 h-6 text-emerald-200" />
            </div>
            <div>
              <h4 className="font-poppins font-bold text-base sm:text-lg">
                The more people join, the more you may save.
              </h4>
              <p className="text-xs sm:text-sm text-emerald-100">
                Each additional neighbour who joins reduces vehicle trip costs and spare acquisition costs.
              </p>
            </div>
          </div>
          <div className="bg-white text-emerald-800 font-poppins font-extrabold text-sm px-4 py-2 rounded-2xl shadow-sm whitespace-nowrap">
            Save ₹{group.savings}/person
          </div>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-card space-y-8">
          
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b border-slate-100">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-3xl bg-slate-50 border border-slate-200 flex items-center justify-center text-3xl shrink-0 shadow-xs">
                {group.icon}
              </div>
              <div>
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full mb-1">
                  <span>{group.society}</span>
                  <span>•</span>
                  <span>{group.membersJoined}/{group.maxMembers} Joined</span>
                </div>
                <h1 className="font-poppins font-extrabold text-2xl sm:text-3xl text-slate-900">
                  {group.appliance}
                </h1>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  {group.title}
                </p>
              </div>
            </div>

            {/* Countdown Badge */}
            <div className="text-left sm:text-right bg-amber-50 border border-amber-200 rounded-2xl p-3 shrink-0">
              <div className="text-[10px] uppercase font-bold text-amber-800 tracking-wider flex items-center sm:justify-end gap-1">
                <Clock className="w-3.5 h-3.5" />
                <span>Group Closes In</span>
              </div>
              <div className="font-poppins font-extrabold text-lg sm:text-xl text-amber-900 mt-0.5">
                {group.closesIn}
              </div>
              <div className="text-[10px] text-amber-700 font-medium">
                {group.preferredDay}
              </div>
            </div>
          </div>

          {/* Pricing Box */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-slate-50/80 p-5 rounded-2xl border border-slate-200/80 text-center">
            <div className="p-3">
              <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Individual Rate</div>
              <div className="font-poppins font-bold text-xl text-slate-400 line-through mt-1">₹{group.originalPrice}</div>
              <div className="text-[11px] text-slate-400">Regular lone booking</div>
            </div>

            <div className="p-3 bg-white rounded-xl shadow-xs border border-emerald-200">
              <div className="text-xs text-emerald-800 font-bold uppercase tracking-wider">Society Group Price</div>
              <div className="font-poppins font-extrabold text-2xl sm:text-3xl text-emerald-600 mt-1">
                ₹{group.groupPrice}
              </div>
              <div className="text-[11px] text-slate-500 font-medium">per resident flat</div>
            </div>

            <div className="p-3">
              <div className="text-xs text-emerald-700 font-semibold uppercase tracking-wider">Potential Savings</div>
              <div className="font-poppins font-extrabold text-2xl text-emerald-700 mt-1">
                ₹{group.savings}
              </div>
              <div className="text-[11px] text-emerald-600 font-bold">Guaranteed Discount</div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs sm:text-sm font-semibold">
              <span className="text-slate-800 flex items-center gap-1.5">
                <Users className="w-4 h-4 text-emerald-600" />
                <strong>{group.membersJoined} neighbours joined</strong>
              </span>
              <span className="text-emerald-700 font-bold">
                {group.maxMembers - group.membersJoined} more needed to lock minimum tier
              </span>
            </div>

            <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden">
              <div 
                className="bg-gradient-to-r from-emerald-500 to-teal-500 h-3 rounded-full transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Members List */}
          <div className="space-y-3">
            <h3 className="font-poppins font-bold text-base text-slate-900">
              Residents In This Repair Group
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {group.members.map((member, i) => (
                <div 
                  key={i} 
                  className={`p-3 rounded-2xl border flex items-center justify-between ${
                    member.isYou 
                      ? 'bg-emerald-50/80 border-emerald-300 ring-1 ring-emerald-400' 
                      : 'bg-white border-slate-200'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-slate-200 text-slate-700 font-bold text-xs flex items-center justify-center">
                      {member.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-xs text-slate-800 flex items-center gap-1">
                        <span>{member.name}</span>
                        {member.isYou && (
                          <span className="text-[10px] bg-emerald-600 text-white font-bold px-1.5 py-0.2 rounded-full">
                            You
                          </span>
                        )}
                      </div>
                      <div className="text-[11px] text-slate-400">
                        {member.tower} • Flat {member.flat}
                      </div>
                    </div>
                  </div>
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                </div>
              ))}
            </div>
          </div>

          {/* Service Scope Included */}
          <div className="space-y-3 pt-2">
            <h3 className="font-poppins font-bold text-base text-slate-900">
              What's Included in This Service
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {group.scope.map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-slate-700 p-2.5 bg-slate-50 rounded-xl border border-slate-100">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 font-bold" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Assigned Verified Provider */}
          <div className="bg-slate-50/80 rounded-3xl p-5 sm:p-6 border border-slate-200/80 space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Assigned Society Service Provider
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-800 font-bold flex items-center justify-center text-base">
                  {group.provider.name.charAt(0)}
                </div>
                <div>
                  <div className="font-poppins font-bold text-base text-slate-900 flex items-center gap-1.5">
                    <span>{group.provider.name}</span>
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-1.5 py-0.2 rounded">
                      Verified
                    </span>
                  </div>
                  <div className="text-xs text-slate-500">{group.provider.businessName}</div>
                  <div className="flex items-center gap-2 text-xs mt-1">
                    <span className="flex items-center gap-0.5 text-amber-600 font-bold">
                      <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                      {group.provider.rating}
                    </span>
                    <span className="text-slate-400">•</span>
                    <span className="text-slate-500">{group.provider.jobsCount} jobs completed</span>
                  </div>
                </div>
              </div>

              <div className="text-xs text-slate-500 flex items-center gap-1.5 bg-white p-2.5 rounded-xl border border-slate-200">
                <Phone className="w-3.5 h-3.5 text-emerald-600" />
                <span>Contact shared upon booking confirmation</span>
              </div>
            </div>
          </div>

          {/* Join CTA & Payment Note */}
          <div className="space-y-3 pt-4 border-t border-slate-100">
            <button
              onClick={() => joinRepairGroup(group.id)}
              className={`w-full py-4 rounded-2xl font-poppins font-bold text-base transition-all cursor-pointer flex items-center justify-center gap-2 shadow-lg ${
                isJoined
                  ? 'bg-emerald-100 text-emerald-800 border-2 border-emerald-400'
                  : 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-600/30'
              }`}
            >
              {isJoined ? (
                <>
                  <Check className="w-5 h-5 font-bold" />
                  <span>You Are In This Group (Slot Confirmed for {group.preferredDay})</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5 text-emerald-200" />
                  <span>Join Group & Lock ₹{group.savings} Discount</span>
                </>
              )}
            </button>

            <div className="flex items-center justify-center gap-2 text-xs text-slate-400 text-center">
              <CreditCard className="w-4 h-4 text-slate-400" />
              <span>You won't be charged until the booking/payment step after technician inspection.</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
