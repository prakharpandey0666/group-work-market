import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { 
  Users, 
  Calendar, 
  MapPin, 
  Heart, 
  Check, 
  Plus, 
  ShieldCheck, 
  Sparkles, 
  Search,
  X
} from 'lucide-react';
import { CommunityPost } from '../../types';

export const CommunityView: React.FC = () => {
  const { communityPosts, toggleEventInterest, createCommunityPost } = useApp();

  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [isNewPostModalOpen, setIsNewPostModalOpen] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newCategory, setNewCategory] = useState<CommunityPost['category']>('Notice');
  const [newContent, setNewContent] = useState('');
  const [newDate, setNewDate] = useState('Tomorrow');
  const [newLocation, setNewLocation] = useState('Central Clubhouse');

  const categories = ['All', 'Notice', 'Event', 'Celebration', 'Lost & Found'];

  const filteredPosts = activeFilter === 'All'
    ? communityPosts
    : communityPosts.filter(p => p.category === activeFilter);

  const handlePostSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle || !newContent) return;

    createCommunityPost({
      title: newTitle,
      category: newCategory,
      content: newContent,
      date: newDate,
      location: newLocation
    });

    setIsNewPostModalOpen(false);
    setNewTitle('');
    setNewContent('');
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-8 sm:py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-2">
              <Users className="w-3.5 h-3.5 text-emerald-600" />
              <span>Green Valley Society Noticeboard</span>
            </div>
            <h1 className="font-poppins font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
              Community Pulse & Notices
            </h1>
            <p className="font-inter text-slate-600 text-sm sm:text-base mt-1">
              Stay in the loop with RWA maintenance, upcoming festivals, social drives, and lost & found reports.
            </p>
          </div>

          <button
            onClick={() => setIsNewPostModalOpen(true)}
            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-poppins font-bold text-sm px-6 py-3.5 rounded-2xl shadow-md shadow-emerald-600/20 transition-all cursor-pointer shrink-0"
          >
            <Plus className="w-5 h-5" />
            <span>Post Society Update</span>
          </button>
        </div>

        {/* Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                activeFilter === cat
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Posts Feed */}
        <div className="space-y-4">
          {filteredPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-soft hover:shadow-card transition-all space-y-4"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                      {post.category}
                    </span>
                    {post.isOfficial && (
                      <span className="text-[10px] bg-emerald-600 text-white font-bold px-2 py-0.5 rounded-md">
                        Official Notice
                      </span>
                    )}
                    <span className="text-xs text-slate-400">
                      Posted by <strong>{post.author}</strong>
                    </span>
                  </div>

                  <h3 className="font-poppins font-bold text-lg sm:text-xl text-slate-900">
                    {post.title}
                  </h3>
                </div>

                <button
                  onClick={() => toggleEventInterest(post.id)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer border shrink-0 ${
                    post.userInterested
                      ? 'bg-emerald-50 text-emerald-800 border-emerald-300 font-bold'
                      : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
                  }`}
                >
                  {post.userInterested ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600 font-bold" />
                      <span>Going ({post.interestedCount})</span>
                    </>
                  ) : (
                    <>
                      <Heart className="w-3.5 h-3.5 text-slate-400" />
                      <span>Interested ({post.interestedCount})</span>
                    </>
                  )}
                </button>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed">
                {post.content}
              </p>

              <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center gap-4 text-xs text-slate-500">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-emerald-600" />
                  <span>{post.date} {post.time ? `• ${post.time}` : ''}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-emerald-600" />
                  <span>{post.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal: New Society Post */}
        {isNewPostModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-150">
            <div className="bg-white rounded-3xl max-w-md w-full shadow-2xl border border-slate-200 overflow-hidden animate-in zoom-in-95 duration-150 p-6 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <h3 className="font-poppins font-bold text-lg text-slate-900">
                  Broadcast Society Notice
                </h3>
                <button
                  onClick={() => setIsNewPostModalOpen(false)}
                  className="p-1 rounded-full text-slate-400 hover:text-slate-600"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handlePostSubmit} className="space-y-3.5">
                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">
                    Notice Title *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Lift Modernization or Badminton Tournament"
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    className="w-full p-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-semibold text-slate-700 block mb-1">
                      Category
                    </label>
                    <select
                      value={newCategory}
                      onChange={(e) => setNewCategory(e.target.value as any)}
                      className="w-full p-2.5 rounded-xl border border-slate-300 text-sm bg-white"
                    >
                      <option value="Notice">Notice</option>
                      <option value="Event">Event</option>
                      <option value="Celebration">Celebration</option>
                      <option value="Lost & Found">Lost & Found</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-700 block mb-1">
                      Date
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. This Saturday"
                      value={newDate}
                      onChange={(e) => setNewDate(e.target.value)}
                      className="w-full p-2.5 rounded-xl border border-slate-300 text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">
                    Venue / Location
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Tower B Entrance or Clubhouse"
                    value={newLocation}
                    onChange={(e) => setNewLocation(e.target.value)}
                    className="w-full p-2.5 rounded-xl border border-slate-300 text-sm"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">
                    Details & Instructions *
                  </label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Write details for the residents of Green Valley Society..."
                    value={newContent}
                    onChange={(e) => setNewContent(e.target.value)}
                    className="w-full p-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-md transition-all cursor-pointer text-sm"
                  >
                    Publish to Society Noticeboard
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
