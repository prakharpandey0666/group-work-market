import React, { createContext, useContext, useState } from 'react';
import confetti from 'canvas-confetti';
import {
  UserRole,
  NavigationTab,
  RepairGroup,
  MarketplaceProduct,
  GroupBuyBundle,
  MovingSaleCollection,
  CommunityPost,
  ProviderJob,
  AdminKYCRequest
} from '../types';
import {
  INITIAL_REPAIR_GROUPS,
  INITIAL_MARKETPLACE_PRODUCTS,
  INITIAL_GROUP_BUY_BUNDLES,
  INITIAL_MOVING_SALES,
  INITIAL_COMMUNITY_POSTS,
  INITIAL_PROVIDER_JOBS,
  INITIAL_ADMIN_KYC
} from '../data/mockData';

interface ToastState {
  title: string;
  message: string;
  type: 'success' | 'info';
}

interface AppContextType {
  role: UserRole;
  setRole: (role: UserRole) => void;
  currentTab: NavigationTab;
  setCurrentTab: (tab: NavigationTab) => void;
  repairGroups: RepairGroup[];
  marketplaceProducts: MarketplaceProduct[];
  groupBuyBundles: GroupBuyBundle[];
  movingSales: MovingSaleCollection[];
  communityPosts: CommunityPost[];
  providerJobs: ProviderJob[];
  adminKYC: AdminKYCRequest[];
  activeGroupId: string | null;
  setActiveGroupId: (id: string | null) => void;
  activeProductId: string | null;
  setActiveProductId: (id: string | null) => void;
  toast: ToastState | null;
  showToast: (title: string, message: string, type?: 'success' | 'info') => void;
  clearToast: () => void;
  
  // Interactive Actions
  joinRepairGroup: (groupId: string) => void;
  createRepairRequest: (request: { appliance: string; issue: string; preferredDay: string }) => void;
  joinGroupBuy: (bundleId: string) => void;
  toggleFavoriteProduct: (productId: string) => void;
  createMarketplaceListing: (listing: {
    title: string;
    category: MarketplaceProduct['category'];
    brand: string;
    age: string;
    condition: MarketplaceProduct['condition'];
    price: number;
    tower: string;
    flat: string;
    description: string;
  }) => void;
  sendProviderQuote: (jobId: string, quoteAmount: number) => void;
  acceptProviderJob: (jobId: string) => void;
  approveKYC: (kycId: string) => void;
  rejectKYC: (kycId: string) => void;
  toggleEventInterest: (postId: string) => void;
  createCommunityPost: (post: {
    title: string;
    category: CommunityPost['category'];
    content: string;
    date: string;
    location: string;
  }) => void;
  
  // Chat modal state
  isChatOpen: boolean;
  activeChatProduct: MarketplaceProduct | null;
  openChatWithSeller: (product: MarketplaceProduct) => void;
  closeChat: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [role, setRoleState] = useState<UserRole>('resident');
  const [currentTab, setCurrentTabState] = useState<NavigationTab>('landing');
  const [repairGroups, setRepairGroups] = useState<RepairGroup[]>(INITIAL_REPAIR_GROUPS);
  const [marketplaceProducts, setMarketplaceProducts] = useState<MarketplaceProduct[]>(INITIAL_MARKETPLACE_PRODUCTS);
  const [groupBuyBundles, setGroupBuyBundles] = useState<GroupBuyBundle[]>(INITIAL_GROUP_BUY_BUNDLES);
  const [movingSales] = useState<MovingSaleCollection[]>(INITIAL_MOVING_SALES);
  const [communityPosts, setCommunityPosts] = useState<CommunityPost[]>(INITIAL_COMMUNITY_POSTS);
  const [providerJobs, setProviderJobs] = useState<ProviderJob[]>(INITIAL_PROVIDER_JOBS);
  const [adminKYC, setAdminKYC] = useState<AdminKYCRequest[]>(INITIAL_ADMIN_KYC);
  
  const [activeGroupId, setActiveGroupId] = useState<string | null>('group-ac-1');
  const [activeProductId, setActiveProductId] = useState<string | null>(null);
  const [toast, setToast] = useState<ToastState | null>(null);
  
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [activeChatProduct, setActiveChatProduct] = useState<MarketplaceProduct | null>(null);

  const showToast = (title: string, message: string, type: 'success' | 'info' = 'success') => {
    setToast({ title, message, type });
    setTimeout(() => {
      setToast(null);
    }, 4500);
  };

  const clearToast = () => setToast(null);

  const setRole = (newRole: UserRole) => {
    setRoleState(newRole);
    if (newRole === 'provider') {
      setCurrentTabState('provider-jobs');
      showToast('Switched to Manoj Kumar (Service Provider)', 'Viewing incoming society repair groups and quoting tools.', 'info');
    } else if (newRole === 'admin') {
      setCurrentTabState('admin');
      showToast('Switched to Vikram Mehta (Society Admin)', 'Managing Green Valley RWA approvals and broadcasts.', 'info');
    } else {
      showToast('Switched to Rajat Sharma (Resident)', 'Exploring Green Valley Society resident features.', 'info');
    }
  };

  const setCurrentTab = (tab: NavigationTab) => {
    setCurrentTabState(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // 1. Join Repair Group
  const joinRepairGroup = (groupId: string) => {
    setRepairGroups(prev => prev.map(group => {
      if (group.id === groupId) {
        const alreadyIn = group.members.some(m => m.isYou);
        if (alreadyIn) {
          showToast('Already in this group', 'You are already registered for this group repair slot.', 'info');
          return group;
        }

        const newMembers = [
          ...group.members,
          { name: 'Rajat Sharma', flat: '402', tower: 'Tower B', isYou: true }
        ];
        
        // Trigger celebratory confetti
        try {
          confetti({
            particleCount: 80,
            spread: 60,
            origin: { y: 0.6 },
            colors: ['#10B981', '#047857', '#F59E0B', '#3B82F6']
          });
        } catch {
          // ignore
        }

        showToast(
          '🎉 You joined the repair group!',
          `You saved ₹${group.savings}! Technician visit scheduled for ${group.preferredDay}.`,
          'success'
        );

        return {
          ...group,
          membersJoined: group.membersJoined + 1,
          members: newMembers
        };
      }
      return group;
    }));
  };

  // 2. Create Repair Request & Match Group
  const createRepairRequest = (request: { appliance: string; issue: string; preferredDay: string }) => {
    // Check if matching group exists
    const existingGroup = repairGroups.find(g => 
      g.appliance.toLowerCase().includes(request.appliance.toLowerCase()) ||
      request.appliance.toLowerCase().includes(g.category.toLowerCase())
    );

    if (existingGroup) {
      joinRepairGroup(existingGroup.id);
      setActiveGroupId(existingGroup.id);
      setCurrentTab('group-details');
    } else {
      // Create new group for demand aggregation
      const newId = `group-custom-${Date.now()}`;
      const newGroup: RepairGroup = {
        id: newId,
        appliance: request.appliance,
        title: `${request.appliance} Comprehensive Repair & Maintenance`,
        icon: '🔧',
        category: request.appliance,
        society: 'Green Valley Society',
        membersJoined: 1,
        maxMembers: 5,
        originalPrice: 650,
        groupPrice: 480,
        savings: 170,
        preferredDay: request.preferredDay,
        closesIn: '03 Days 00 Hours',
        status: 'open',
        description: `Resident reported: "${request.issue}". Socio+ is pooling neighbours with similar requests.`,
        scope: [
          'Comprehensive multi-point diagnosis',
          'Labour and servicing included',
          '30-day society-backed service warranty'
        ],
        members: [
          { name: 'Rajat Sharma', flat: '402', tower: 'Tower B', isYou: true }
        ],
        provider: {
          name: 'Manoj Kumar',
          businessName: 'Manoj AC & Appliance Care',
          rating: 4.8,
          jobsCount: 248,
          verified: true,
          phone: '+91 98101 23456'
        }
      };

      setRepairGroups(prev => [newGroup, ...prev]);
      setActiveGroupId(newId);
      setCurrentTab('group-details');

      try {
        confetti({
          particleCount: 60,
          spread: 70,
          origin: { y: 0.5 },
          colors: ['#10B981', '#F59E0B']
        });
      } catch {
        // ignore
      }

      showToast(
        '🚀 Repair Group Created!',
        `Your request has been published. We've notified 14 nearby neighbours in Green Valley Society!`,
        'success'
      );
    }
  };

  // 3. Join Group Buy
  const joinGroupBuy = (bundleId: string) => {
    setGroupBuyBundles(prev => prev.map(bundle => {
      if (bundle.id === bundleId) {
        if (bundle.joinedByYou) {
          showToast('Already joined', 'You are already in this group purchase.', 'info');
          return bundle;
        }

        try {
          confetti({
            particleCount: 70,
            spread: 50,
            origin: { y: 0.7 },
            colors: ['#F59E0B', '#10B981']
          });
        } catch {
          // ignore
        }

        showToast(
          '🛒 Joined Group Buy!',
          `You saved ₹${bundle.savings}! Delivery scheduled for ${bundle.deliveryDay}.`,
          'success'
        );

        return {
          ...bundle,
          joinedCount: bundle.joinedCount + 1,
          joinedByYou: true
        };
      }
      return bundle;
    }));
  };

  // 4. Toggle Favorite
  const toggleFavoriteProduct = (productId: string) => {
    setMarketplaceProducts(prev => prev.map(p => {
      if (p.id === productId) {
        const next = !p.isFavorite;
        showToast(
          next ? 'Added to Saved Items' : 'Removed from Saved Items',
          `"${p.title}" updated in your favorites.`,
          'info'
        );
        return { ...p, isFavorite: next };
      }
      return p;
    }));
  };

  // 5. Create Marketplace Listing
  const createMarketplaceListing = (listing: {
    title: string;
    category: MarketplaceProduct['category'];
    brand: string;
    age: string;
    condition: MarketplaceProduct['condition'];
    price: number;
    tower: string;
    flat: string;
    description: string;
  }) => {
    const newProduct: MarketplaceProduct = {
      id: `prod-user-${Date.now()}`,
      title: listing.title,
      category: listing.category,
      brand: listing.brand || 'Original Brand',
      age: listing.age,
      condition: listing.condition,
      price: Number(listing.price),
      originalPrice: Math.round(Number(listing.price) * 1.8),
      tower: listing.tower,
      flat: listing.flat,
      sellerName: 'Rajat Sharma',
      sellerVerified: true,
      image: '/assets/sofa.jpg', // realistic fallback
      description: listing.description,
      isFavorite: false,
      postedDate: 'Just now'
    };

    setMarketplaceProducts(prev => [newProduct, ...prev]);
    setCurrentTab('marketplace');
    showToast(
      '🏷️ Listing Published!',
      `"${listing.title}" is now live for all 428 residents of Green Valley Society.`,
      'success'
    );
  };

  // 6. Provider Actions
  const sendProviderQuote = (jobId: string, quoteAmount: number) => {
    setProviderJobs(prev => prev.map(job => {
      if (job.id === jobId) {
        showToast(
          '💼 Quote Submitted Successfully!',
          `Quote of ₹${quoteAmount} sent to Green Valley Society residents for ${job.groupTitle}.`,
          'success'
        );
        return {
          ...job,
          status: 'quote_sent',
          quotedAmount: quoteAmount
        };
      }
      return job;
    }));
  };

  const acceptProviderJob = (jobId: string) => {
    setProviderJobs(prev => prev.map(job => {
      if (job.id === jobId) {
        showToast(
          '✅ Repair Job Confirmed!',
          `You accepted ${job.groupTitle}. Job added to your upcoming Saturday calendar.`,
          'success'
        );
        return {
          ...job,
          status: 'accepted'
        };
      }
      return job;
    }));
  };

  // 7. Admin Actions
  const approveKYC = (kycId: string) => {
    setAdminKYC(prev => prev.map(req => {
      if (req.id === kycId) {
        showToast(
          '🛡️ Resident Verified',
          `${req.residentName} (${req.tower} - ${req.flat}) KYC approved. Society credentials granted.`,
          'success'
        );
        return { ...req, status: 'approved' };
      }
      return req;
    }));
  };

  const rejectKYC = (kycId: string) => {
    setAdminKYC(prev => prev.map(req => {
      if (req.id === kycId) {
        showToast('KYC Rejected', `Request for ${req.residentName} marked as rejected.`, 'info');
        return { ...req, status: 'rejected' };
      }
      return req;
    }));
  };

  const toggleEventInterest = (postId: string) => {
    setCommunityPosts(prev => prev.map(post => {
      if (post.id === postId) {
        const next = !post.userInterested;
        return {
          ...post,
          userInterested: next,
          interestedCount: next ? post.interestedCount + 1 : post.interestedCount - 1
        };
      }
      return post;
    }));
  };

  const createCommunityPost = (post: {
    title: string;
    category: CommunityPost['category'];
    content: string;
    date: string;
    location: string;
  }) => {
    const newPost: CommunityPost = {
      id: `post-${Date.now()}`,
      title: post.title,
      category: post.category,
      author: 'Vikram Mehta (RWA President)',
      date: post.date || 'Today',
      time: '10:00 AM',
      interestedCount: 1,
      userInterested: true,
      content: post.content,
      location: post.location || 'Green Valley Clubhouse',
      isOfficial: true
    };

    setCommunityPosts(prev => [newPost, ...prev]);
    showToast('📢 Notice Broadcasted', `New update posted to all residents of Green Valley Society.`, 'success');
  };

  // Chat methods
  const openChatWithSeller = (product: MarketplaceProduct) => {
    setActiveChatProduct(product);
    setIsChatOpen(true);
  };

  const closeChat = () => {
    setIsChatOpen(false);
    setActiveChatProduct(null);
  };

  return (
    <AppContext.Provider
      value={{
        role,
        setRole,
        currentTab,
        setCurrentTab,
        repairGroups,
        marketplaceProducts,
        groupBuyBundles,
        movingSales,
        communityPosts,
        providerJobs,
        adminKYC,
        activeGroupId,
        setActiveGroupId,
        activeProductId,
        setActiveProductId,
        toast,
        showToast,
        clearToast,
        joinRepairGroup,
        createRepairRequest,
        joinGroupBuy,
        toggleFavoriteProduct,
        createMarketplaceListing,
        sendProviderQuote,
        acceptProviderJob,
        approveKYC,
        rejectKYC,
        toggleEventInterest,
        createCommunityPost,
        isChatOpen,
        activeChatProduct,
        openChatWithSeller,
        closeChat
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
