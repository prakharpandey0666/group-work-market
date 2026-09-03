export type UserRole = 'resident' | 'provider' | 'admin';

export type NavigationTab = 
  | 'landing' 
  | 'how-it-works' 
  | 'services' 
  | 'repairs-wizard' 
  | 'group-details' 
  | 'marketplace' 
  | 'sell-item' 
  | 'buy-together' 
  | 'moving-sale' 
  | 'community' 
  | 'dashboard' 
  | 'provider-jobs' 
  | 'admin';

export interface RepairMember {
  name: string;
  flat: string;
  tower: string;
  isYou?: boolean;
}

export interface RepairProvider {
  name: string;
  businessName: string;
  rating: number;
  jobsCount: number;
  verified: boolean;
  phone: string;
  avatar?: string;
}

export interface RepairGroup {
  id: string;
  appliance: string;
  title: string;
  icon: string;
  category: string;
  society: string;
  membersJoined: number;
  maxMembers: number;
  originalPrice: number;
  groupPrice: number;
  savings: number;
  preferredDay: string;
  closesIn: string;
  status: 'open' | 'confirmed' | 'in_progress' | 'completed';
  description: string;
  scope: string[];
  members: RepairMember[];
  provider: RepairProvider;
}

export interface MarketplaceProduct {
  id: string;
  title: string;
  category: 'Appliances' | 'Furniture' | 'Electronics' | 'Kids' | 'Home & Kitchen' | 'Others';
  brand: string;
  age: string;
  condition: 'Like New' | 'Excellent' | 'Good' | 'Fair';
  price: number;
  originalPrice?: number;
  tower: string;
  flat: string;
  sellerName: string;
  sellerVerified: boolean;
  image: string;
  description: string;
  isFavorite?: boolean;
  postedDate: string;
}

export interface GroupBuyBundle {
  id: string;
  title: string;
  subtitle: string;
  itemsList: string[];
  joinedCount: number;
  targetCount: number;
  individualPrice: number;
  groupPrice: number;
  savings: number;
  deliveryDay: string;
  closesIn: string;
  category: string;
  badge: string;
  joinedByYou?: boolean;
}

export interface MovingSaleCollection {
  id: string;
  title: string;
  residentName: string;
  tower: string;
  flat: string;
  totalItems: number;
  daysLeft: number;
  itemHighlights: string[];
  pricingNote: string;
  urgency: string;
}

export interface CommunityPost {
  id: string;
  title: string;
  category: 'Event' | 'Notice' | 'Celebration' | 'Lost & Found';
  author: string;
  date: string;
  time?: string;
  interestedCount: number;
  userInterested?: boolean;
  content: string;
  location: string;
  isOfficial: boolean;
}

export interface ProviderJob {
  id: string;
  groupTitle: string;
  society: string;
  customerCount: number;
  slot: string;
  estimatedEarnings: number;
  status: 'new_request' | 'quote_sent' | 'accepted' | 'in_progress' | 'completed';
  quotedAmount?: number;
  customerList: { name: string; flat: string; tower: string; issue: string; phone: string }[];
}

export interface AdminKYCRequest {
  id: string;
  residentName: string;
  tower: string;
  flat: string;
  documentType: string;
  phone: string;
  status: 'pending' | 'approved' | 'rejected';
  submittedAt: string;
}
