import {
  RepairGroup,
  MarketplaceProduct,
  GroupBuyBundle,
  MovingSaleCollection,
  CommunityPost,
  ProviderJob,
  AdminKYCRequest
} from '../types';

export const INITIAL_REPAIR_GROUPS: RepairGroup[] = [
  {
    id: 'group-ac-1',
    appliance: 'AC Repair & Jet Service',
    title: 'Split & Window AC Deep Jet Cleaning & Gas Top-up',
    icon: '❄️',
    category: 'Air Conditioners',
    society: 'Green Valley Society',
    membersJoined: 5,
    maxMembers: 8,
    originalPrice: 650,
    groupPrice: 480,
    savings: 170,
    preferredDay: 'This Saturday, 11:00 AM onwards',
    closesIn: '02 Days 14 Hours',
    status: 'open',
    description: 'High-pressure foam jet cleaning of indoor and outdoor coils, filter wash, refrigerant pressure check, and drain line cleaning by verified technician.',
    scope: [
      'Indoor & Outdoor unit high-pressure wash',
      'Gas leak detection & pressure test',
      'Anti-fungal coil sanitization',
      'Free 30-day service warranty'
    ],
    members: [
      { name: 'Rajat Sharma', flat: '402', tower: 'Tower B', isYou: true },
      { name: 'Neha Sharma', flat: '302', tower: 'Tower A' },
      { name: 'Amit Verma', flat: '501', tower: 'Tower A' },
      { name: 'Pooja Singh', flat: '703', tower: 'Tower C' },
      { name: 'Vikram Mehta', flat: '204', tower: 'Tower B' }
    ],
    provider: {
      name: 'Manoj Kumar',
      businessName: 'Manoj AC & Appliance Care',
      rating: 4.8,
      jobsCount: 248,
      verified: true,
      phone: '+91 98101 23456'
    }
  },
  {
    id: 'group-fridge-1',
    appliance: 'Refrigerator Repair',
    title: 'Double Door & Inverter Refrigerator Diagnostic & Gas Refill',
    icon: '🧊',
    category: 'Refrigerators',
    society: 'Green Valley Society',
    membersJoined: 3,
    maxMembers: 5,
    originalPrice: 700,
    groupPrice: 550,
    savings: 150,
    preferredDay: 'This Sunday, 2:00 PM',
    closesIn: '03 Days 08 Hours',
    status: 'open',
    description: 'Complete cooling diagnostic, defrost sensor inspection, condenser coil blow cleaning, and compressor vibration dampening.',
    scope: [
      'Complete cooling & thermostat diagnostic',
      'Condenser coil cleaning & dust extraction',
      'Door gasket seal airtightness inspection',
      'Genuine spare parts guarantee at wholesale rate'
    ],
    members: [
      { name: 'Sanjay Rawat', flat: '102', tower: 'Tower C' },
      { name: 'Kavita Menon', flat: '604', tower: 'Tower A' },
      { name: 'Deepak Joshi', flat: '801', tower: 'Tower B' }
    ],
    provider: {
      name: 'Sharma Appliance Care',
      businessName: 'Sharma Cooling Tech',
      rating: 4.7,
      jobsCount: 189,
      verified: true,
      phone: '+91 98711 44552'
    }
  },
  {
    id: 'group-wm-1',
    appliance: 'Washing Machine Service',
    title: 'Front & Top Load Drum Descaling & Vibration Fix',
    icon: '🌀',
    category: 'Washing Machines',
    society: 'Green Valley Society',
    membersJoined: 3,
    maxMembers: 6,
    originalPrice: 670,
    groupPrice: 550,
    savings: 120,
    preferredDay: 'This Saturday, 3:30 PM',
    closesIn: '01 Day 22 Hours',
    status: 'open',
    description: 'Drum deep cleaning using industrial scale remover, suspension rod dampener greasing, drain pump lint filter clean.',
    scope: [
      'Drum descaling with citric acid formulation',
      'Inlet water solenoid valve descaling',
      'Suspension shocker dampening alignment',
      'Noise and spin cycle calibration'
    ],
    members: [
      { name: 'Rahul Chawla', flat: '204', tower: 'Tower B' },
      { name: 'Sunita Roy', flat: '405', tower: 'Tower C' },
      { name: 'Ananya Guha', flat: '902', tower: 'Tower A' }
    ],
    provider: {
      name: 'Manoj Kumar',
      businessName: 'Manoj AC & Appliance Care',
      rating: 4.8,
      jobsCount: 248,
      verified: true,
      phone: '+91 98101 23456'
    }
  },
  {
    id: 'group-ro-1',
    appliance: 'RO Water Purifier',
    title: 'RO Multi-Stage Filter & RO Membrane Replacement Service',
    icon: '💧',
    category: 'Water Purifiers',
    society: 'Green Valley Society',
    membersJoined: 6,
    maxMembers: 10,
    originalPrice: 600,
    groupPrice: 420,
    savings: 180,
    preferredDay: 'Tomorrow, 5:00 PM',
    closesIn: '18 Hours',
    status: 'open',
    description: 'Pre-carbon, sediment filter replacement, TDS test, UV chamber cleaning, and high-pressure pump pressure adjustment.',
    scope: [
      'Pre-filter candle & spun filter change',
      'TDS digital measurement before & after',
      'Tank sanitization with food-grade wash',
      'Free pipe & connector leak checks'
    ],
    members: [
      { name: 'Vivek Singhal', flat: '301', tower: 'Tower B' },
      { name: 'Priya Nair', flat: '503', tower: 'Tower C' },
      { name: 'Arun Goel', flat: '702', tower: 'Tower A' },
      { name: 'Megha Sen', flat: '104', tower: 'Tower A' },
      { name: 'Gaurav K.', flat: '602', tower: 'Tower B' },
      { name: 'Harish R.', flat: '401', tower: 'Tower C' }
    ],
    provider: {
      name: 'AquaPure Society Solutions',
      businessName: 'AquaPure Services',
      rating: 4.9,
      jobsCount: 312,
      verified: true,
      phone: '+91 99588 33211'
    }
  }
];

export const INITIAL_MARKETPLACE_PRODUCTS: MarketplaceProduct[] = [
  {
    id: 'prod-wm-1',
    title: 'LG 7kg Inverter Fully-Automatic Front Load',
    category: 'Appliances',
    brand: 'LG',
    age: '2 years old',
    condition: 'Excellent',
    price: 12000,
    originalPrice: 32000,
    tower: 'Tower B',
    flat: 'Flat 204',
    sellerName: 'Rahul Chawla',
    sellerVerified: true,
    image: '/assets/washing-machine.jpg',
    description: 'Flawless condition with 6-motion direct drive technology. Moving to another tower so upgrading to larger 9kg. Regularly descaled every 3 months. Available for inspection anytime this evening.',
    isFavorite: false,
    postedDate: '2 hours ago'
  },
  {
    id: 'prod-sofa-1',
    title: '3-Seater Comfort Fabric Sofa (Grey)',
    category: 'Furniture',
    brand: 'Urban Ladder',
    age: '1.5 years old',
    condition: 'Like New',
    price: 8000,
    originalPrice: 24000,
    tower: 'Tower A',
    flat: 'Flat 302',
    sellerName: 'Neha Sharma',
    sellerVerified: true,
    image: '/assets/sofa.jpg',
    description: 'High-density foam with premium stain-resistant grey upholstery. Always kept with sofa throws so absolutely zero marks or scratches. Pet-free and smoke-free apartment.',
    isFavorite: true,
    postedDate: 'Yesterday'
  },
  {
    id: 'prod-fridge-1',
    title: 'Samsung 256L Frost-Free Double Door Refrigerator',
    category: 'Appliances',
    brand: 'Samsung',
    age: '3 years old',
    condition: 'Good',
    price: 15500,
    originalPrice: 29500,
    tower: 'Tower A',
    flat: 'Flat 501',
    sellerName: 'Amit Verma',
    sellerVerified: true,
    image: '/assets/fridge.jpg',
    description: 'Digital inverter with smart connect inverter technology. Extremely silent, chilling is 100% optimum. Selling because our parents relocated here and we bought a 450L French door.',
    isFavorite: false,
    postedDate: '3 days ago'
  },
  {
    id: 'prod-study-1',
    title: 'Solid Sheesham Wood Work-From-Home Table',
    category: 'Furniture',
    brand: 'Wakefit',
    age: '1 year old',
    condition: 'Like New',
    price: 3500,
    originalPrice: 9000,
    tower: 'Tower B',
    flat: 'Flat 601',
    sellerName: 'Vikram Mehta',
    sellerVerified: true,
    image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=800&auto=format&fit=crop&q=80',
    description: 'Sturdy ergonomic desk with cable management port and 2 smooth drawers. Can easily support dual monitors and laptop mount.',
    isFavorite: false,
    postedDate: '4 days ago'
  },
  {
    id: 'prod-cycle-1',
    title: 'Decathlon Rockrider ST30 Mountain Bike (26T)',
    category: 'Kids',
    brand: 'Decathlon',
    age: '8 months old',
    condition: 'Excellent',
    price: 5200,
    originalPrice: 11000,
    tower: 'Tower C',
    flat: 'Flat 703',
    sellerName: 'Pooja Singh',
    sellerVerified: true,
    image: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=800&auto=format&fit=crop&q=80',
    description: 'Front suspension with 7-speed Shimano gear shift. My son outgrew it quickly. Includes mudguards, bottle holder, and bell.',
    isFavorite: false,
    postedDate: '5 days ago'
  },
  {
    id: 'prod-micro-1',
    title: 'IFB 23L Convection Microwave Oven',
    category: 'Home & Kitchen',
    brand: 'IFB',
    age: '2 years old',
    condition: 'Good',
    price: 4800,
    originalPrice: 12500,
    tower: 'Tower A',
    flat: 'Flat 104',
    sellerName: 'Priya Nair',
    sellerVerified: true,
    image: 'https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?w=800&auto=format&fit=crop&q=80',
    description: 'Clean stainless steel cavity with grill rack and glass turntable. Bakes cakes and warms milk perfectly.',
    isFavorite: false,
    postedDate: '1 week ago'
  }
];

export const INITIAL_GROUP_BUY_BUNDLES: GroupBuyBundle[] = [
  {
    id: 'gb-essentials-1',
    title: 'Weekly Breakfast & Kitchen Staples',
    subtitle: 'Direct society delivery from wholesale Mandi & Dairy partner',
    itemsList: [
      'Amul Taaza Milk (2L)',
      'Harvest Gold Brown Bread',
      'Cage-Free Eggs (Crate of 30)',
      'Aashirvaad Shudh Chakki Atta (5kg)',
      'Fortune Sunlite Refined Oil (1L)',
      'Origami 2-Ply Kitchen Tissue (Pack of 4)'
    ],
    joinedCount: 18,
    targetCount: 25,
    individualPrice: 500,
    groupPrice: 420,
    savings: 80,
    deliveryDay: 'Friday Morning, 7:00 AM at Gate 2',
    closesIn: '1 Day 14 Hours',
    category: 'Groceries',
    badge: 'Popular Society Pick',
    joinedByYou: false
  },
  {
    id: 'gb-cleaning-1',
    title: 'Society Cleaning & Hygiene Bulk Pack',
    subtitle: 'High volume wholesale pricing direct from manufacturer',
    itemsList: [
      'Surf Excel Matic Liquid (4 Litres)',
      'Lizol Disinfectant Citrus Floor Cleaner (2L)',
      'Harpic Power Plus 1L (Pack of 2)',
      'Scotch-Brite Scrub Sponge (Pack of 6)',
      'Godrej aer Pocket Bathroom Fragrance (Pack of 3)'
    ],
    joinedCount: 14,
    targetCount: 20,
    individualPrice: 850,
    groupPrice: 680,
    savings: 170,
    deliveryDay: 'Saturday Afternoon at Clubhouse',
    closesIn: '2 Days 06 Hours',
    category: 'Household',
    badge: 'Save 20%',
    joinedByYou: false
  },
  {
    id: 'gb-fruits-1',
    title: 'Farm-Fresh Alphonso & Seasonal Fruit Crate',
    subtitle: 'Direct farm harvest from Ratnagiri cooperative',
    itemsList: [
      'Ratnagiri GI-Tagged Alphonso Mangoes (1 Dozen / Grade A)',
      'Washington Red Apples (1kg)',
      'Nagpur Sweet Oranges (2kg)',
      'Fresh Tender Green Coconuts (Pack of 3)'
    ],
    joinedCount: 22,
    targetCount: 30,
    individualPrice: 1450,
    groupPrice: 1100,
    savings: 350,
    deliveryDay: 'Sunday 8:00 AM at Central Gazebo',
    closesIn: '3 Days 02 Hours',
    category: 'Farm Fresh',
    badge: 'Farm Direct',
    joinedByYou: true
  }
];

export const INITIAL_MOVING_SALES: MovingSaleCollection[] = [
  {
    id: 'move-1',
    title: 'Relocating to Bengaluru — Complete 3BHK Clearance!',
    residentName: 'Sandeep & Priya Gupta',
    tower: 'Tower B',
    flat: 'Flat 902',
    totalItems: 25,
    daysLeft: 11,
    itemHighlights: [
      'LG 1.5T Inverter AC (₹18,000)',
      'Solid Teak King Size Bed with Storage (₹14,000)',
      '6-Seater Glass Dining Table (₹9,500)',
      'Bosch Front Load Washing Machine (₹13,000)',
      'Indoor Balcony Planters & Bonsai setup (₹2,500)',
      'Sony Bravia 50-inch 4K LED TV (₹22,000)'
    ],
    pricingNote: 'Discounts up to 40% on bulk packages for neighbours!',
    urgency: 'Flat handover on 25th of this month'
  },
  {
    id: 'move-2',
    title: 'Downsizing Sale — Kids Room & Electronics Must Go',
    residentName: 'Karan Mehra',
    tower: 'Tower C',
    flat: 'Flat 404',
    totalItems: 14,
    daysLeft: 6,
    itemHighlights: [
      'Kids Bunk Bed with Ladder (₹7,500)',
      'Study Bookshelf & Ergonomic Chair (₹4,200)',
      'Yamaha 61-Key Keyboard with Stand (₹6,000)',
      'PlayStation 4 with 2 Controllers + 5 Games (₹14,500)'
    ],
    pricingNote: 'Inspection open every evening between 6 PM - 9 PM.',
    urgency: 'Moving next weekend'
  }
];

export const INITIAL_COMMUNITY_POSTS: CommunityPost[] = [
  {
    id: 'post-1',
    title: 'Society Monsoon Cleaning & Tree Plantation Drive',
    category: 'Event',
    author: 'RWA Green Committee',
    date: 'Sunday, 14th Sep',
    time: '8:00 AM - 10:30 AM',
    interestedCount: 28,
    userInterested: true,
    content: 'Join us near Central Lawn as we plant 50 indigenous saplings and clear stormwater drains before monsoon. Free refreshments and saplings distribution by RWA.',
    location: 'Central Lawn & Amphitheatre',
    isOfficial: true
  },
  {
    id: 'post-2',
    title: 'Water Supply Update & Overhead Tank Maintenance',
    category: 'Notice',
    author: 'Estate Management Office',
    date: '12th May (Next Tuesday)',
    time: '10:00 AM to 2:00 PM',
    interestedCount: 54,
    userInterested: false,
    content: 'Annual cleaning and chlorination of overhead tanks for Tower A & Tower B. Water supply will be temporarily restricted during this window. Residents are advised to store sufficient water in advance.',
    location: 'Towers A & B Main Risers',
    isOfficial: true
  },
  {
    id: 'post-3',
    title: 'Grand Navratri & Garba Night Celebration 2026',
    category: 'Celebration',
    author: 'Cultural Club — Green Valley',
    date: 'Saturday, 20th May',
    time: '7:30 PM onwards',
    interestedCount: 89,
    userInterested: true,
    content: 'Live Dhol, DJ, food stalls by resident home-chefs, and best traditional attire awards! Passes are free for registered residents of Green Valley Society.',
    location: 'Clubhouse Banquet & Open Arena',
    isOfficial: true
  },
  {
    id: 'post-4',
    title: 'Lost & Found: Hero Sprint Blue Bicycle Found',
    category: 'Lost & Found',
    author: 'Security Gate 1 Desk',
    date: 'Today, 2:15 PM',
    interestedCount: 7,
    userInterested: false,
    content: 'A blue Hero Sprint gear bicycle was left unlocked near Tower B basement car wash area. The owner can collect it from Security Gate 1 after verifying key or frame number.',
    location: 'Tower B Basement / Gate 1',
    isOfficial: false
  }
];

export const INITIAL_PROVIDER_JOBS: ProviderJob[] = [
  {
    id: 'pjob-1',
    groupTitle: 'AC Repair Group (5 Residents)',
    society: 'Green Valley Society',
    customerCount: 5,
    slot: 'Saturday, 11:00 AM - 4:00 PM',
    estimatedEarnings: 2400,
    status: 'new_request',
    customerList: [
      { name: 'Rajat Sharma', flat: '402', tower: 'Tower B', issue: 'Cooling low, jet spray wash needed', phone: '+91 98111 22334' },
      { name: 'Neha Sharma', flat: '302', tower: 'Tower A', issue: 'Indoor unit water dripping', phone: '+91 98222 33445' },
      { name: 'Amit Verma', flat: '501', tower: 'Tower A', issue: 'General season starter service', phone: '+91 98333 44556' },
      { name: 'Pooja Singh', flat: '703', tower: 'Tower C', issue: 'Outdoor fan making rattling noise', phone: '+91 98444 55667' },
      { name: 'Vikram Mehta', flat: '204', tower: 'Tower B', issue: 'Gas level check and filter cleaning', phone: '+91 98555 66778' }
    ]
  },
  {
    id: 'pjob-2',
    groupTitle: 'Washing Machine Repair (3 Residents)',
    society: 'Green Valley Society',
    customerCount: 3,
    slot: 'Saturday, 3:30 PM - 6:00 PM',
    estimatedEarnings: 1650,
    status: 'quote_sent',
    quotedAmount: 1650,
    customerList: [
      { name: 'Rahul Chawla', flat: '204', tower: 'Tower B', issue: 'Drum vibrating violently during spin cycle', phone: '+91 99100 88221' },
      { name: 'Sunita Roy', flat: '405', tower: 'Tower C', issue: 'Water inlet error OE on display', phone: '+91 99100 88222' },
      { name: 'Ananya Guha', flat: '902', tower: 'Tower A', issue: 'Deep scale removal requested', phone: '+91 99100 88223' }
    ]
  },
  {
    id: 'pjob-3',
    groupTitle: 'RO Water Purifier Combo (6 Residents)',
    society: 'Green Valley Society',
    customerCount: 6,
    slot: 'Tomorrow, 5:00 PM - 8:00 PM',
    estimatedEarnings: 2520,
    status: 'accepted',
    customerList: [
      { name: 'Vivek Singhal', flat: '301', tower: 'Tower B', issue: 'Filter change', phone: '+91 98765 00001' },
      { name: 'Priya Nair', flat: '503', tower: 'Tower C', issue: 'TDS high', phone: '+91 98765 00002' },
      { name: 'Arun Goel', flat: '702', tower: 'Tower A', issue: 'Pump leaking', phone: '+91 98765 00003' }
    ]
  }
];

export const INITIAL_ADMIN_KYC: AdminKYCRequest[] = [
  {
    id: 'kyc-1',
    residentName: 'Kunal Singhania',
    tower: 'Tower B',
    flat: 'Flat 804',
    documentType: 'Registered Rent Agreement & Aadhaar',
    phone: '+91 98199 44321',
    status: 'pending',
    submittedAt: 'Today, 10:30 AM'
  },
  {
    id: 'kyc-2',
    residentName: 'Meenakshi Sundaram',
    tower: 'Tower A',
    flat: 'Flat 202',
    documentType: 'Society Electricity Bill & Allotment Letter',
    phone: '+91 94441 55678',
    status: 'pending',
    submittedAt: 'Yesterday, 4:15 PM'
  },
  {
    id: 'kyc-3',
    residentName: 'Rohan Deshmukh',
    tower: 'Tower C',
    flat: 'Flat 502',
    documentType: 'Maintenance Receipt & Voter ID',
    phone: '+91 98200 99881',
    status: 'approved',
    submittedAt: '2 days ago'
  }
];
