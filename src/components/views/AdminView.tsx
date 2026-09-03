import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { 
  Building2, 
  ShieldCheck, 
  Users, 
  Coins, 
  CheckCircle2, 
  XCircle, 
  Bell, 
  Check, 
  Plus, 
  Sparkles,
  FileCheck,
  Phone,
  Clock,
  Send,
  X
} from 'lucide-react';

export const AdminView: React.FC = () => {
  const { adminKYC, approveKYC, rejectKYC, createCommunityPost, repairGroups } = useApp();

  const [isBroadcastModalOpen, setIsBroadcastModalOpen] = useState(false);
  const [broadcastTitle, setBroadcastTitle] = useState('');
  const [broadcastMessage, setBroadcastMessage] = useState('');

  const handleBroadcast = (e: React.FormEvent) => {
    e.preventDefault();
    if (!broadcastTitle || !broadcastMessage) return;

    createCommunityPost({
      title: broadcastTitle,
      category: 'Notice',
      content: broadcastMessage,
      date: 'Today',
      location: 'All Towers (A, B, C)'
    });

    setIsBroadcastModalOpen(false);
    setBroadcastTitle('');
    setBroadcastMessage('');
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-soft flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-purple-700 text-white font-bold flex items-center justify-center text-2xl shadow-lg shadow-purple-700/20">
              RWA
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="font-poppins font-extrabold text-2xl sm:text-3xl text-slate-900">
                  Green Valley Society RWA
                </h1>
                <span className="text-xs bg-purple-100 text-purple-800 font-bold px-2 py-0.5 rounded-full">
                  Admin Console
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                Vikram Mehta (RWA President) • Managing 428 Registered Flats
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsBroadcastModalOpen(true)}
              className="inline-flex items-center gap-2 bg-purple-700 hover:bg-purple-800 text-white font-poppins font-bold text-xs sm:text-sm px-5 py-3 rounded-2xl shadow-md transition-all cursor-pointer"
            >
              <Bell className="w-4 h-4" />
              <span>Broadcast Notice</span>
            </button>
          </div>
        </div>

        {/* 4 Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-soft">
            <div className="flex items-center justify-between text-slate-500 mb-2">
              <span className="text-xs font-semibold uppercase tracking-wider">Residents</span>
              <Users className="w-4 h-4 text-purple-600" />
            </div>
            <div className="font-poppins font-extrabold text-2xl sm:text-3xl text-slate-900">
              428
            </div>
            <div className="text-[11px] text-emerald-700 font-medium mt-1">
              98% KYC Verified Flats
            </div>
          </div>

          <div className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-soft">
            <div className="flex items-center justify-between text-slate-500 mb-2">
              <span className="text-xs font-semibold uppercase tracking-wider">Active Groups</span>
              <Building2 className="w-4 h-4 text-emerald-600" />
            </div>
            <div className="font-poppins font-extrabold text-2xl sm:text-3xl text-slate-900">
              12
            </div>
            <div className="text-[11px] text-emerald-700 font-medium mt-1">
              Across AC, RO & Grocery
            </div>
          </div>

          <div className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-soft">
            <div className="flex items-center justify-between text-slate-500 mb-2">
              <span className="text-xs font-semibold uppercase tracking-wider">Community Posts</span>
              <Bell className="w-4 h-4 text-blue-600" />
            </div>
            <div className="font-poppins font-extrabold text-2xl sm:text-3xl text-slate-900">
              8
            </div>
            <div className="text-[11px] text-slate-500 font-medium mt-1">
              Active society notices
            </div>
          </div>

          <div className="bg-emerald-50/60 rounded-3xl p-5 border border-emerald-200/80 shadow-soft">
            <div className="flex items-center justify-between text-emerald-800 mb-2">
              <span className="text-xs font-semibold uppercase tracking-wider">Total Resident Savings</span>
              <Coins className="w-4 h-4 text-emerald-600" />
            </div>
            <div className="font-poppins font-extrabold text-2xl sm:text-3xl text-emerald-700">
              ₹18,450
            </div>
            <div className="text-[11px] text-emerald-800 font-medium mt-1">
              Total collective wealth saved
            </div>
          </div>
        </div>

        {/* Section: Pending Resident KYC Approvals */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-soft space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-poppins font-bold text-xl text-slate-900">
                Resident Verification Requests (KYC)
              </h2>
              <p className="text-xs text-slate-500">
                Verify resident identity against society allotment and rent records to grant resident portal access.
              </p>
            </div>
            <span className="text-xs font-bold text-purple-700 bg-purple-50 px-3 py-1 rounded-full">
              {adminKYC.filter(k => k.status === 'pending').length} Pending Requests
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 border-y border-slate-100 text-slate-400 font-semibold uppercase tracking-wider">
                <tr>
                  <th className="py-3 px-4">Resident</th>
                  <th className="py-3 px-4">Flat / Tower</th>
                  <th className="py-3 px-4">Document Type</th>
                  <th className="py-3 px-4">Contact</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {adminKYC.map((req) => (
                  <tr key={req.id} className="hover:bg-slate-50/60 transition-colors">
                    <td className="py-4 px-4 font-bold text-slate-900">
                      {req.residentName}
                    </td>
                    <td className="py-4 px-4 text-slate-600 font-medium">
                      {req.tower} • {req.flat}
                    </td>
                    <td className="py-4 px-4 text-slate-600">
                      <span className="bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md font-medium">
                        {req.documentType}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-slate-500 font-mono">
                      {req.phone}
                    </td>
                    <td className="py-4 px-4">
                      {req.status === 'pending' && (
                        <span className="bg-amber-100 text-amber-800 font-bold px-2 py-0.5 rounded-full text-[10px]">
                          Pending Approval
                        </span>
                      )}
                      {req.status === 'approved' && (
                        <span className="bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-full text-[10px] flex items-center gap-1 w-fit">
                          <Check className="w-3 h-3" />
                          Approved
                        </span>
                      )}
                      {req.status === 'rejected' && (
                        <span className="bg-rose-100 text-rose-800 font-bold px-2 py-0.5 rounded-full text-[10px]">
                          Rejected
                        </span>
                      )}
                    </td>
                    <td className="py-4 px-4 text-right space-x-2">
                      {req.status === 'pending' ? (
                        <>
                          <button
                            onClick={() => approveKYC(req.id)}
                            className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-lg transition-colors cursor-pointer"
                          >
                            Approve
                          </button>
                          <button
                            onClick={() => rejectKYC(req.id)}
                            className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-lg transition-colors cursor-pointer"
                          >
                            Reject
                          </button>
                        </>
                      ) : (
                        <span className="text-slate-400 text-[11px]">Processed</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Section: Active Society Groups Overview */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-soft space-y-4">
          <h2 className="font-poppins font-bold text-xl text-slate-900">
            Society Repair & Demand Pools (RWA Monitor)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {repairGroups.map((group) => (
              <div key={group.id} className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{group.icon}</span>
                  <div>
                    <div className="font-bold text-slate-900 text-xs">{group.appliance}</div>
                    <div className="text-[11px] text-slate-500">
                      {group.membersJoined}/{group.maxMembers} Joined • Provider: {group.provider.name}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs font-bold text-emerald-700">₹{group.groupPrice}/flat</div>
                  <div className="text-[10px] text-slate-400">Total pool saving: ₹{group.savings * group.membersJoined}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal: Broadcast Notice */}
        {isBroadcastModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-150">
            <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-slate-200 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <h3 className="font-poppins font-bold text-base text-slate-900">
                  Broadcast Society Notice (RWA)
                </h3>
                <button
                  onClick={() => setIsBroadcastModalOpen(false)}
                  className="p-1 rounded-full text-slate-400 hover:text-slate-600"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleBroadcast} className="space-y-4">
                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">
                    Announcement Subject *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Lift Servicing or Security Gate Protocol"
                    value={broadcastTitle}
                    onChange={(e) => setBroadcastTitle(e.target.value)}
                    className="w-full p-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">
                    Notice Details *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Type official broadcast for all 428 flats..."
                    value={broadcastMessage}
                    onChange={(e) => setBroadcastMessage(e.target.value)}
                    className="w-full p-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>

                <div className="p-3 bg-purple-50 rounded-xl text-xs text-purple-800">
                  📢 This notice will be pinned at the top of the resident community feed.
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-purple-700 hover:bg-purple-800 text-white font-bold rounded-xl text-sm transition-all shadow-md cursor-pointer"
                >
                  Send Official Society Broadcast
                </button>
              </form>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
