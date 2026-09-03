import React from 'react';
import { useApp } from '../../context/AppContext';
import { 
  Users, 
  Calendar, 
  AlertCircle, 
  Sparkles, 
  Search, 
  ArrowRight,
  Heart,
  MapPin,
  Check
} from 'lucide-react';

export const CommunityPreview: React.FC = () => {
  const { communityPosts, toggleEventInterest, setCurrentTab } = useApp();

  const getCategoryBadge = (category: string) => {
    switch (category) {
      case 'Event':
        return 'bg-emerald-100 text-emerald-800 border-emerald-200';
      case 'Notice':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Celebration':
        return 'bg-amber-100 text-amber-800 border-amber-200';
      case 'Lost & Found':
        return 'bg-rose-100 text-rose-800 border-rose-200';
      default:
        return 'bg-slate-100 text-slate-800 border-slate-200';
    }
  };

  return (
    <section className="py-20 bg-[#F8FAFC] border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-2">
              <Users className="w-3.5 h-3.5 text-emerald-600" />
              <span>Society Noticeboard & Pulse</span>
            </div>
            <h2 className="font-poppins font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
              What's happening in your society
            </h2>
            <p className="font-inter text-slate-600 text-sm sm:text-base mt-2">
              Stay updated with essential maintenance alerts, RWA events, festival gatherings, and lost & found notices.
            </p>
          </div>

          <button
            onClick={() => setCurrentTab('community')}
            className="inline-flex items-center gap-2 text-sm font-bold text-emerald-700 hover:text-emerald-800 transition-colors cursor-pointer group"
          >
            <span>View Full Society Feed</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* 4 Community Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {communityPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-soft hover:shadow-card hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${getCategoryBadge(post.category)}`}>
                    {post.category}
                  </span>
                  {post.isOfficial && (
                    <span className="text-[10px] bg-slate-900 text-white font-semibold px-2 py-0.5 rounded-md">
                      RWA Official
                    </span>
                  )}
                </div>

                <h3 className="font-poppins font-bold text-base text-slate-900 mb-2 leading-snug">
                  {post.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 mb-4">
                  {post.content}
                </p>

                <div className="space-y-1 text-[11px] text-slate-500 pt-3 border-t border-slate-100">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>{post.date} {post.time ? `• ${post.time}` : ''}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span className="truncate">{post.location}</span>
                  </div>
                </div>
              </div>

              {/* Interaction button */}
              <div className="pt-4 mt-2">
                <button
                  onClick={() => toggleEventInterest(post.id)}
                  className={`w-full py-2 px-3 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer border ${
                    post.userInterested
                      ? 'bg-emerald-50 text-emerald-800 border-emerald-300 font-bold'
                      : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
                  }`}
                >
                  {post.userInterested ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Interested ({post.interestedCount})</span>
                    </>
                  ) : (
                    <>
                      <Heart className="w-3.5 h-3.5 text-slate-400" />
                      <span>Interested? ({post.interestedCount})</span>
                    </>
                  )}
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
