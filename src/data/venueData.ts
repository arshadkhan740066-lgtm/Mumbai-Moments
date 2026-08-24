import {
  VenueTransformationTheme,
  VenueSpaceHighlight,
  CustomAddOn,
  RealClientTransformation,
  NeighborhoodInfo
} from '../types';

export const VENUE_PROPERTY_INFO = {
  name: 'The Mumbai Moments Estate',
  propertyType: 'Exclusive Private Luxury Venue & Event Studio',
  location: 'Kurla West (BKC Corridor), Mumbai',
  address: 'Private Sanctuary Estate, Premier Luxury Enclave, Kurla West (Adjacent to BKC Corridor), Mumbai 400070',
  description:
    'An architectural private sanctuary strategically situated in Kurla West, seamlessly connecting couples from Sion, Dadar, Mahim, Wadala, and Chembur within 5 to 15 minutes. Unlike public restaurants with crowded tables and noise, The Mumbai Moments Estate is 100% exclusive to one booking at a time. Every inch of the space — from the botanical glasshouse to the starlit sky deck — is custom-designed, styled, and catered tailored strictly to your vision.',
  capacityForCouples: 'Exclusively 2 Guests (or up to 12 for intimate family celebrations)',
  bookingModel: '1 Private Booking Per Evening Slot (Complete Privacy Guaranteed)',
  inclusionsStandard: [
    '100% Exclusive Private Venue Access (Zero Public Intrusion)',
    'Dedicated Executive Private Chef & Custom Tasting Menu',
    'Personal White-Glove Butler & Hospitality Host',
    'Full Custom Bespoke Décor & Mood Lighting Setup',
    'Curated High-Fidelity Ambient Soundscape',
    'Personalized Welcome Mocktail / Wine Toast',
    'Private Dressing Suite & Valet Parking'
  ]
};

export const VENUE_SPACES: VenueSpaceHighlight[] = [
  {
    id: 'space-glasshouse',
    name: 'The Glasshouse Pavilion',
    capacity: '2 – 8 Guests',
    viewType: 'Surrounded by illuminated botanical gardens',
    privacyLevel: '100% Enclosed & Temperature Controlled Luxury',
    tagline: 'A dreamlike glass sanctuary surrounded by thousand twinkling fairy lights',
    description:
      'A climate-controlled conservatory featuring floor-to-ceiling glass walls, warm parquet flooring, and a soaring glass ceiling wrapped in hand-strung micro-fairy lights. Perfect for intimate candlelight dining and lavish rose decor regardless of weather.',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop',
    keyFeatures: [
      'Over 800 suspended warm fairy lights',
      'Air-conditioned comfort with garden views',
      'Acoustically tuned for private music or speech',
      'Custom chandelier and floral rigging points'
    ]
  },
  {
    id: 'space-rooftop',
    name: 'The Starlit Rooftop Deck',
    capacity: '2 – 12 Guests',
    viewType: 'Panoramic Mumbai Skyline & Arabian Sea Horizon',
    privacyLevel: 'Completely Open-Air Private High-Rise Deck',
    tagline: 'Dine above the city under the canopy of Mumbai stars and coastal breeze',
    description:
      'An expansive open-air hardwood deck perched atop Pali Hill. Surrounded by sleek glass balustrades, lush coastal palms, and custom perimeter uplighting, this space captures the golden hour sunset transforming into the sparkling Mumbai skyline.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop',
    keyFeatures: [
      'Unobstructed sunset & twilight horizon view',
      'Teakwood dining platform with luxury drapery',
      'Cold pyro and sparkular safety approved zone',
      'Starlit open-air cinema screen mounting'
    ]
  },
  {
    id: 'space-courtyard',
    name: 'The Candlelit Garden Courtyard',
    capacity: '2 – 10 Guests',
    viewType: 'Centuries-old Frangipani trees & cobblestone pathway',
    privacyLevel: 'Walled Secluded Courtyard Sanctuary',
    tagline: 'Old-world Mediterranean warmth with rustic terracotta and candle arches',
    description:
      'Hidden behind tall ivy-clad privacy gates, our garden courtyard is paved with natural stone, centered around an ancient frangipani tree, and surrounded by hundreds of pillar candles and antique brass lanterns.',
    image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=1200&auto=format&fit=crop',
    keyFeatures: [
      'Illuminated tree canopy with hanging glass orbs',
      'Live barbecue & charcoal grill station',
      'Private cobblestone entry with rose petal runway',
      'Secluded lounge alcoves with antique brass lanterns'
    ]
  },
  {
    id: 'space-cabana',
    name: 'The Sunset Oceanview Cabana',
    capacity: '2 Guests Exclusive',
    viewType: 'Direct Sunset & Coastal Sea Breeze',
    privacyLevel: 'Ultra-Private Intimate Enclave',
    tagline: 'A Bohemian luxury cabana crafted for timeless romantic proposals and dates',
    description:
      'Raised on an elevated wooden plinth, draped in flowing sheer ivory chiffon, and styled with Moroccan rugs, plush bohemian floor cushions, and pampas floral arrangements.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop',
    keyFeatures: [
      'Flowing ivory chiffon curtains for complete privacy',
      'Plush velvet cushions and low dining table option',
      'Direct golden hour photo backdrops',
      'Integrated hidden Bose surround sound system'
    ]
  }
];

export const VENUE_THEMES: VenueTransformationTheme[] = [
  {
    id: 'theme-celestial-glasshouse',
    title: 'The Celestial Candlelight Glasshouse',
    subtitle: 'Over 300 real flame candles inside a glowing fairy-light conservatory',
    description:
      'Our most sought-after transformation. We convert the Glasshouse Pavilion into a breathtaking sea of candlelight with 300+ taper candles, floating water votives, delicate gypsophila clouds, and an intimate 5-course gourmet tasting menu prepared live by your private chef.',
    spaceArea: 'The Glasshouse Pavilion',
    themeStyle: 'Celestial Candlelight & Fairy Lights',
    diningStyle: '5-Course Private Chef Gourmet Tasting',
    suitableOccasions: ['Proposal', 'Anniversary', 'Date Night', 'Milestone Celebration'],
    basePrice: 14500,
    basePriceDisplay: '₹14,500 all-inclusive for 2',
    rating: 4.98,
    reviewsCount: 142,
    coverImage: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop'
    ],
    inclusions: [
      'Exclusive 3.5 Hours Venue Reservation for 2',
      '300+ Real Taper & Pillar Candles in Hurricane Glass',
      'Suspended Fairy-Light Canopy & Baby’s Breath Clouds',
      '5-Course Curated Chef Menu (Customized to dietary needs)',
      'Dedicated Private Butler & Personalized Welcome Toast',
      'Custom Printed Menus with Couple Names'
    ],
    atmosphereHighlight: 'An ethereal golden cocoon where every surface flickers with gentle candlelight.',
    designerNote:
      'We recommend the 7:30 PM slot so the glasshouse transforms seamlessly from blue hour dusk to pitch-black starlight reflections.',
    setupTimeHours: 4,
    customizationOptions: [
      'Choice of flower color palette (Blush Pink, Ivory White, or Crimson Red)',
      'Custom message in calligraphy on the welcome easel',
      'Dietary alignment (Jain, Vegan, Gluten-free, Seafood, or Lamb)'
    ],
    badge: 'Most Booked Experience',
    isPopular: true
  },
  {
    id: 'theme-grand-marquee-proposal',
    title: 'The "Marry Me" Grand Proposal Experience',
    subtitle: '4-Foot illuminated marquee letters, 50ft rose petal runway & cold pyro',
    description:
      'Crafted for the once-in-a-lifetime question. We transform the open-air Starlit Rooftop Deck with 4-foot illuminated "MARRY ME" marquee letters, a lush crimson rose petal pathway flanked by hundreds of lanterns, and synchronized cold-pyro sparkular fountains the second you bend the knee.',
    spaceArea: 'The Starlit Rooftop Deck',
    themeStyle: 'Royal Velvet & Red Rose Sanctum',
    diningStyle: '5-Course Private Chef Gourmet Tasting',
    suitableOccasions: ['Proposal', 'Intimate Engagement'],
    basePrice: 22000,
    basePriceDisplay: '₹22,000 all-inclusive for 2',
    rating: 5.0,
    reviewsCount: 98,
    coverImage: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop'
    ],
    inclusions: [
      'Full Private Rooftop Deck Reservation (4 Hours)',
      '4-Foot Warm White "MARRY ME" Illuminated Marquee',
      '50-Foot Red Rose Petal Carpet with Hurricane Lanterns',
      '4x Cold-Pyro Safe Sparkular Fountains on Proposal Cue',
      'Chilled Moët / Sparkling Toast in Crystal Flutes',
      'Gourmet 5-Course Candlelight Dinner & Dessert Platter',
      'Discrete On-Site Coordinator to manage timing perfectly'
    ],
    atmosphereHighlight: 'Dramatic skyline backdrop with theatrical sparkulars timed to your exact proposal moment.',
    designerNote:
      'We work directly with you beforehand via confidential WhatsApp to orchestrate the exact music cue and timing.',
    setupTimeHours: 6,
    customizationOptions: [
      'Custom Marquee Letters (Initials, Forever, Marry Me)',
      'Add live acoustic violinist to play her favourite song',
      'Add discreet 4K Drone & Candid Cinematographer'
    ],
    badge: '100% "Yes" Rate',
    isPopular: true
  },
  {
    id: 'theme-boho-sunset-cabana',
    title: 'Bohemian Sunset Deck & Pampas Grass',
    subtitle: 'Sunken velvet lounge, macrame lanterns, coastal breeze & tapas pairing',
    description:
      'Designed for couples who love effortless warmth and golden hour aesthetics. The sunset cabana is dressed in earthy terracotta tones, fluffy pampas grass, Persian rugs, rattan lanterns, and low velvet lounge seating with an artisanal Mediterranean tapas menu.',
    spaceArea: 'The Sunset Oceanview Cabana',
    themeStyle: 'Bohemian Sunset & Pampas Grass',
    diningStyle: 'Mediterranean Tapas & Wine Pairing',
    suitableOccasions: ['Anniversary', 'Date Night', 'Birthday Celebration', 'Candlelight Surprise'],
    basePrice: 12500,
    basePriceDisplay: '₹12,500 all-inclusive for 2',
    rating: 4.94,
    reviewsCount: 86,
    coverImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=1200&auto=format&fit=crop'
    ],
    inclusions: [
      'Exclusive Sunset Cabana Access (3 Hours)',
      'Handcrafted Pampas & Dried Floral Installations',
      'Moroccan Rugs, Floor Cushions & Low Rustic Table',
      '6-Course Gourmet Mediterranean Tapas & Cheese Board',
      'Artisanal Sangria / Signature Mocktail Pitcher',
      'Personal Bluetooth Sound System for your private playlist'
    ],
    atmosphereHighlight: 'Watching the Arabian sun dip below the horizon with pampas swaying in the evening breeze.',
    designerNote:
      'We schedule this slot at 5:30 PM so you soak in 45 minutes of golden hour before the lanterns glow.',
    setupTimeHours: 3.5,
    customizationOptions: [
      'Choose low floor seating or standard elevated dining chairs',
      'Customized acoustic guitar playlist',
      'Add artisanal celebration cake with botanical frosting'
    ],
    badge: 'Sunset Favourite',
    isPopular: false
  },
  {
    id: 'theme-open-air-cinema',
    title: 'Open-Air Private Cinema Under The Stars',
    subtitle: '120-Inch 4K projection, plush daybed, gourmet popcorn & couple story montage',
    description:
      'A private movie date like no other. We convert the courtyard or rooftop into an open-air cinema equipped with a 120-inch screen, surround sound, an ultra-luxurious double velvet daybed with cashmere throws, fresh gourmet truffle popcorn, and your favorite film or personalized couple video montage.',
    spaceArea: 'The Starlit Rooftop Deck',
    themeStyle: 'Open-Air Cinema Under The Stars',
    diningStyle: 'Artisanal Grazing Table & Champagne',
    suitableOccasions: ['Date Night', 'Birthday Celebration', 'Anniversary', 'Candlelight Surprise'],
    basePrice: 13500,
    basePriceDisplay: '₹13,500 all-inclusive for 2',
    rating: 4.96,
    reviewsCount: 112,
    coverImage: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop'
    ],
    inclusions: [
      'Private 120-Inch 4K Projection & Hi-Fi Audio Setup',
      'Plush Double Daybed with Silky Pillows & Throws',
      'Screening of any movie of your choice (Netflix/Apple TV/USB)',
      'Free Montage Screening of your personal photos & clips',
      'Artisanal Grazing Platter with Sliders, Tacos & Truffle Popcorn',
      'Custom Dessert Fondue & Mocktail Bar'
    ],
    atmosphereHighlight: 'Cuddling under warm throws under the Mumbai night sky watching your favorite memories.',
    designerNote:
      'Send us your photos/videos 48 hours prior and our video editor creates a complimentary 3-minute opening montage.',
    setupTimeHours: 3,
    customizationOptions: [
      'Add romantic movie theme décor (Vintage Hollywood or Cozy Nordic)',
      'Personalized popcorn boxes with couple photos'
    ],
    badge: 'Cozy & Romantic',
    isPopular: false
  },
  {
    id: 'theme-royal-velvet-roses',
    title: 'The Royal Velvet & Red Rose Sanctum',
    subtitle: '2,000 fresh Dutch roses, crystal candelabras & royal 5-course feast',
    description:
      'Pure timeless opulence. The private dining salon is dressed in deep burgundy velvet drapery, crystal chandeliers, royal gold tableware, and over two thousand velvety red roses cascading from the ceiling to the table centerpiece.',
    spaceArea: 'The Intimate Dining Sanctum',
    themeStyle: 'Royal Velvet & Red Rose Sanctum',
    diningStyle: 'Royal Indian Fine Dining Feasts',
    suitableOccasions: ['Anniversary', 'Proposal', 'Milestone Celebration'],
    basePrice: 18500,
    basePriceDisplay: '₹18,500 all-inclusive for 2',
    rating: 4.99,
    reviewsCount: 74,
    coverImage: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop'
    ],
    inclusions: [
      'Exclusive 4 Hours Private Salon Access',
      '2,000+ Fresh Velvet Red Roses in Sculpted Installations',
      'Crystal Candelabras with Tall Taper Candles',
      '24K Gold Rimmed Charger Plates & Fine Linen',
      'Royal 5-Course Dining Experience by Master Chefs',
      'Personalized Love Letter Wax-Sealed Presentation'
    ],
    atmosphereHighlight: 'An intoxicating scent of fresh roses combined with the grandeur of a private royal banquet.',
    designerNote:
      'We source our Dutch roses directly on the morning of your event for maximum bloom and aroma.',
    setupTimeHours: 5,
    customizationOptions: [
      'Rose color customization (Classic Red, Royal Crimson, or Champagne Gold)',
      'Add live acoustic cello / violin performance'
    ],
    badge: 'Ultimate Luxury',
    isPopular: false
  },
  {
    id: 'theme-enchanted-gazebo',
    title: 'Enchanted Frangipani Garden Gazebo',
    subtitle: 'Floral-wrapped wooden gazebo, fairy-lit tree canopy & live barbecue',
    description:
      'Nestled inside our secluded cobblestone courtyard beneath century-old frangipani trees. The rustic timber gazebo is woven with fresh jasmine, wisteria, and fairy lights, with a private live charcoal chef preparing sizzling grills at your table.',
    spaceArea: 'The Candlelit Garden Courtyard',
    themeStyle: 'Enchanted Forest & Floral Archway',
    diningStyle: 'Live Barbecue & Alfresco Grill',
    suitableOccasions: ['Anniversary', 'Birthday Celebration', 'Date Night'],
    basePrice: 13900,
    basePriceDisplay: '₹13,900 all-inclusive for 2',
    rating: 4.92,
    reviewsCount: 65,
    coverImage: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop'
    ],
    inclusions: [
      'Full Garden Courtyard Exclusive Reservation (3.5 Hours)',
      'Handcrafted Floral Gazebo with Fairy Light Weaves',
      'Live Charcoal BBQ Master Grill at your personal station',
      '6-Course Gourmet Grill Tasting (Veg & Non-Veg options)',
      'Acoustic Frangipani Garden Ambient Lighting',
      'Fresh Floral Crown & Boutonnière on Arrival'
    ],
    atmosphereHighlight: 'The rustic aroma of fresh jasmine blossoms and charcoal embers under glowing trees.',
    designerNote:
      'Ideal for couples who cherish open nature, aromatic flowers, and interactive live culinary moments.',
    setupTimeHours: 4,
    customizationOptions: [
      'Choice of wood-smoked specialties (Smoked paneer, lamb chops, prawns, or exotic veggies)',
      'Custom fairy light curtain backdrop'
    ],
    badge: 'Romantic Nature',
    isPopular: false
  },
  {
    id: 'theme-bespoke-custom',
    title: 'Bespoke Custom Concept: Designed From Scratch',
    subtitle: 'Your dream Pinterest / Instagram moodboard brought to life by our senior designers',
    description:
      'Have a unique dream vision? An anniversary theme from your first trip to Paris? A vintage Italian trattoria? A Harry Potter or celestial galaxy setting? Our senior set designers and master florists build your entire custom environment from concept sketch to flawless execution.',
    spaceArea: 'Full Private Venue Exclusive',
    themeStyle: 'Bespoke Custom Concept',
    diningStyle: '5-Course Private Chef Gourmet Tasting',
    suitableOccasions: ['Proposal', 'Anniversary', 'Birthday Celebration', 'Intimate Engagement', 'Milestone Celebration'],
    basePrice: 25000,
    basePriceDisplay: 'Custom Quote from ₹25,000',
    rating: 5.0,
    reviewsCount: 52,
    coverImage: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop'
    ],
    inclusions: [
      '1-on-1 Design Consultation with Senior Creative Director',
      'Full 3D Render & Moodboard Presentation',
      'Full Private Estate Access (Both Indoor & Rooftop zones)',
      'Custom Fabricated Decor Elements, Props & Florals',
      'Custom 6-Course Bespoke Chef Menu created for your story',
      'Dedicated Event Director & Full Production Crew'
    ],
    atmosphereHighlight: 'A completely unique, never-before-seen romantic wonderland created solely for the two of you.',
    designerNote:
      'We require at least 5 days notice to source custom fabrications, rare florals, and specialty props.',
    setupTimeHours: 8,
    customizationOptions: [
      'Unlimited customization of colors, florals, lighting, props, and furniture',
      'Full estate multi-zone experience (Appetizers in Garden, Dinner on Rooftop, Movie in Glasshouse)'
    ],
    badge: '1-of-1 Creation',
    isPopular: false
  }
];

export const BESPOKE_ADDONS: CustomAddOn[] = [
  {
    id: 'addon-violinist',
    name: 'Private Acoustic Violinist / Guitarist',
    category: 'Entertainment',
    description: 'A professional classical or contemporary acoustic musician playing your favorite romantic love songs live during dinner.',
    price: 6500,
    priceDisplay: '₹6,500',
    iconName: 'Music',
    popularFor: ['Proposal', 'Anniversary', 'Date Night'],
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'addon-cinematography',
    name: '4K Drone & Candid Cinematography',
    category: 'Photography',
    description: 'A discreet high-end cinematographer capturing cinematic 4K video reels and 50+ edited high-resolution photos delivered in 48 hours.',
    price: 8500,
    priceDisplay: '₹8,500',
    iconName: 'Camera',
    popularFor: ['Proposal', 'Anniversary', 'Intimate Engagement'],
    image: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'addon-cold-pyro',
    name: 'Cold-Pyro Sparkular Fountains (4 Units)',
    category: 'Special Effects',
    description: 'Indoor & outdoor safe cold-spark fountains shooting 8-foot golden sparks without smoke or fire hazard at your peak moment.',
    price: 4500,
    priceDisplay: '₹4,500',
    iconName: 'Sparkles',
    popularFor: ['Proposal', 'Birthday Celebration', 'Milestone Celebration'],
    image: 'https://images.unsplash.com/photo-1498931299472-f7a63a5a1cfa?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'addon-marquee-letters',
    name: '4-Foot Illuminated Marquee Letters',
    category: 'Visuals & Décor',
    description: 'Giant warm-white LED wooden letters spelling "MARRY ME", "I LOVE YOU", custom initials, or age numbers.',
    price: 5000,
    priceDisplay: '₹5,000',
    iconName: 'Type',
    popularFor: ['Proposal', 'Birthday Celebration'],
    image: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'addon-video-montage',
    name: 'Personal Love Story Video Montage',
    category: 'Visuals & Décor',
    description: 'Our in-house editor curates your couple photos, WhatsApp audio clips, and song into a heart-melting 4-minute movie played on our 4K screen.',
    price: 3500,
    priceDisplay: '₹3,500',
    iconName: 'Film',
    popularFor: ['Anniversary', 'Proposal', 'Birthday Celebration'],
    image: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'addon-rose-bouquet',
    name: '100-Stem Dutch Rose Luxury Bouquet',
    category: 'Visuals & Décor',
    description: 'A grand bespoke arrangement of 100 long-stem premium velvety roses presented in a signature hat box with satin ribbon.',
    price: 4200,
    priceDisplay: '₹4,200',
    iconName: 'Heart',
    popularFor: ['Proposal', 'Anniversary', 'Birthday Celebration'],
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'addon-custom-cake',
    name: 'Artisanal Designer Fondant Cake (1 Kg)',
    category: 'Gastronomy',
    description: 'Handcrafted by Mumbai’s finest pastry chef with personalized edible sugar florals, flavor of choice, and custom calligraphy plaque.',
    price: 2800,
    priceDisplay: '₹2,800',
    iconName: 'Cake',
    popularFor: ['Birthday Celebration', 'Anniversary', 'Proposal'],
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'addon-vintage-car',
    name: 'Luxury Vintage Sedan Chauffeur Transfer',
    category: 'Gastronomy',
    description: 'Private chauffeur pick-up from your home in an immaculate luxury Mercedes/Vintage classic sedan with champagne on arrival.',
    price: 7500,
    priceDisplay: '₹7,500',
    iconName: 'Car',
    popularFor: ['Proposal', 'Milestone Celebration'],
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=600&auto=format&fit=crop'
  }
];

export const REAL_CLIENT_TRANSFORMATIONS: RealClientTransformation[] = [
  {
    id: 'trans-rohit-ananya',
    coupleNames: 'Rohit & Ananya',
    occasion: 'Proposal',
    themeApplied: 'The "Marry Me" Grand Proposal Experience',
    spaceUsed: 'The Starlit Rooftop Deck',
    quote: 'She thought we were just going to a friend’s dinner. Walking into the rooftop with the giant Marry Me letters and cold pyro gave her goosebumps. Best night of our lives.',
    story: 'Rohit wanted a rooftop proposal that felt like a movie scene without crowds staring. We customized the deck with 4-ft marquee letters, a 40ft crimson petal aisle, and timed the cold spark fountains to the exact chorus of their favourite song.',
    coverImage: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=1200&auto=format&fit=crop',
    addOnsIncluded: ['Cold-Pyro Sparkular Fountains', '4K Drone & Candid Cinematography', '100-Stem Dutch Rose Bouquet'],
    date: 'Last Weekend'
  },
  {
    id: 'trans-kabir-meera',
    coupleNames: 'Kabir & Meera',
    occasion: 'Anniversary',
    themeApplied: 'The Celestial Candlelight Glasshouse',
    spaceUsed: 'The Glasshouse Pavilion',
    quote: 'We celebrate our 5th anniversary every year, but having an entire glasshouse with 300 candles and a private chef made us feel like royalty. Absolute magic.',
    story: 'Kabir wanted an ultra-romantic, intimate dinner away from city noise. We transformed the glasshouse with floating candles, gypsophila clouds, and prepared a custom 5-course truffle and seafood menu.',
    coverImage: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop',
    addOnsIncluded: ['Private Acoustic Violinist', 'Artisanal Designer Fondant Cake'],
    date: '2 Weeks Ago'
  },
  {
    id: 'trans-sid-tanya',
    coupleNames: 'Siddharth & Tanya',
    occasion: 'Birthday Celebration',
    themeApplied: 'Open-Air Private Cinema Under The Stars',
    spaceUsed: 'The Starlit Rooftop Deck',
    quote: 'Tanya was stunned when her childhood home videos started playing on the 120-inch screen under the starry sky. The grazing board and daybed setup was perfection.',
    story: 'Siddharth wanted to surprise Tanya for her 25th birthday. We set up an open-air cinema on the deck with custom daybeds, blankets, warm fairy lights, and played a curated surprise video montage followed by her favorite film.',
    coverImage: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=1200&auto=format&fit=crop',
    addOnsIncluded: ['Personal Love Story Video Montage', 'Artisanal Designer Fondant Cake'],
    date: 'Last Month'
  }
];

export const FAQ_LIST = [
  {
    q: 'Are there other guests or diners present at the venue during my booking?',
    a: 'No, absolutely never. Mumbai Moments operates strictly on a 100% private exclusivity model. When you book a slot, the entire designated space (or full estate) is reserved exclusively for the two of you. There are no public tables, no strangers, and no interruptions.'
  },
  {
    q: 'How does the custom design and styling process work?',
    a: 'Once you choose a theme or share your custom Pinterest vision, our senior event designer coordinates with you to finalize colors, flowers, personalized signages, and music. On the day of your event, our production crew spends 3 to 6 hours transforming the venue so it is completely ready before you arrive.'
  },
  {
    q: 'Can the food and dietary preferences be customized?',
    a: 'Yes, 100%. You will have a dedicated private executive chef. We cater to all dietary needs including Pure Vegetarian, Jain, Vegan, Keto, Gluten-free, Seafood, and European or Royal Indian fine dining menus. A personalized menu tasting consultation is included.'
  },
  {
    q: 'How far in advance should I book my date?',
    a: 'Because we only host one private couple per slot to guarantee exclusivity, weekends and sunset slots fill up quickly. We recommend booking at least 3 to 7 days in advance. For customized bespoke fabrication concepts, 5 days is recommended.'
  },
  {
    q: 'Can I visit the venue before booking my proposal or anniversary?',
    a: 'Yes! We offer private walkthrough appointments between 11:00 AM and 3:00 PM upon scheduling with our concierge team.'
  }
];

export const TARGET_NEIGHBORHOODS: NeighborhoodInfo[] = [
  {
    id: 'Kurla',
    name: 'Kurla (Venue Location)',
    tagline: 'Flagship Private Estate & Central Romance Sanctuary',
    vibe: 'Ultra-private, lush botanical oasis, luxury culinary intimacy and candlelit grandeur',
    driveTimeMins: 'Direct / 2 Mins',
    iconSymbol: '👑',
    pickupHighlight: 'Exclusive doorstep VIP chauffeur pickup or on-site private valet at our Kurla West private sanctuary',
    romanticLandmarks: ['Phoenix Luxury Boulevard', 'BKC Skywalk Illuminations', 'CST Road Quiet Enclave', 'Central Botanical Sanctum'],
    popularOccasion: 'Proposal / Milestone Anniversary',
    loveQuote: 'Step inside Kurla’s most exclusive 100% private celebration sanctuary made entirely for two.',
    recommendedTheme: 'Celestial Candlelight & Fairy Lights',
    recommendedSpace: 'The Glasshouse Pavilion',
    suggestedAddOns: ['addon-violinist', 'addon-cinematic-video', 'addon-photographer']
  },
  {
    id: 'Sion',
    name: 'Sion',
    tagline: 'Historic Fort Panoramas & Central Grandeur',
    vibe: 'Hilltop charm, historic elevation and quiet romantic privacy',
    driveTimeMins: '5–7 Mins',
    iconSymbol: '🏰',
    pickupHighlight: 'Lightning-fast 6-minute luxury sedan transit via BKC connector / LBS Marg with romantic acoustic prelude',
    romanticLandmarks: ['Sion Fort Hilltop Overlook', 'SIES Garden Memories', 'Central Heritage Avenues'],
    popularOccasion: 'Proposal / Romantic Date Night',
    loveQuote: 'Where historic Sion memories transform into a private candlelit empire of love in Kurla.',
    recommendedTheme: 'Royal Velvet & Red Rose Sanctum',
    recommendedSpace: 'The Starlit Rooftop Deck',
    suggestedAddOns: ['addon-cold-pyro', 'addon-marquee-letters', 'addon-cake']
  },
  {
    id: 'Dadar',
    name: 'Dadar',
    tagline: 'Seaside Heritage & Iconic Shivaji Park Romance',
    vibe: 'Nostalgic, coastal, cultural and timeless romantic warmth',
    driveTimeMins: '8–12 Mins',
    iconSymbol: '🌊',
    pickupHighlight: 'Smooth 10-minute chauffeured drive via Tilak Bridge & Central Link with chilled welcome mocktails',
    romanticLandmarks: ['Shivaji Park Twilight Walks', 'Dadar Chowpatty Sunset', 'Portuguese Church Lanes'],
    popularOccasion: 'Proposal / 1st Anniversary',
    loveQuote: 'From sunset strolls by Dadar Chowpatty to our private starlit glasshouse sanctuary in Kurla.',
    recommendedTheme: 'Celestial Candlelight & Fairy Lights',
    recommendedSpace: 'The Glasshouse Pavilion',
    suggestedAddOns: ['addon-violinist', 'addon-photographer', 'addon-marquee-letters']
  },
  {
    id: 'Mahim',
    name: 'Mahim',
    tagline: 'Coastal Bay Breeze & Serene Waters',
    vibe: 'Breezy, seaside, intimate and effortlessly close to the venue',
    driveTimeMins: '7–10 Mins',
    iconSymbol: '⛵',
    pickupHighlight: 'Direct 8-minute coastal luxury transfer straight into the private Kurla estate',
    romanticLandmarks: ['Mahim Bay Sunset Horizon', 'St. Michael Quiet Alleys', 'Mahim Nature Sanctuary'],
    popularOccasion: 'Candlelight Surprise / Birthday',
    loveQuote: 'Just eight minutes to a private candlelight world made exclusively for the two of you.',
    recommendedTheme: 'Bohemian Sunset & Pampas Grass',
    recommendedSpace: 'The Sunset Oceanview Cabana',
    suggestedAddOns: ['addon-violinist', 'addon-cinematic-video', 'addon-photographer']
  },
  {
    id: 'Wadala',
    name: 'Wadala',
    tagline: 'Five Gardens Nostalgia & Shaded Tree Avenues',
    vibe: 'Tranquil, leafy, vintage Parsi colony elegance and poetic calm',
    driveTimeMins: '8–12 Mins',
    iconSymbol: '🌿',
    pickupHighlight: 'Private pickup from Five Gardens & Wadala avenues with a personalized floral corsage',
    romanticLandmarks: ['Five Gardens Canopy Walk', 'Parsi Colony Vintage Mansions', 'Wadala Udyan Romance'],
    popularOccasion: 'Proposal / Wedding Anniversary',
    loveQuote: 'From peaceful strolls in Five Gardens to a live violin serenade under Kurla fairy lights.',
    recommendedTheme: 'Enchanted Forest & Floral Archway',
    recommendedSpace: 'The Candlelit Garden Courtyard',
    suggestedAddOns: ['addon-violinist', 'addon-photographer', 'addon-bouquet']
  },
  {
    id: 'Chembur',
    name: 'Chembur',
    tagline: 'Garden Suburb Greenery & Heritage Club Romance',
    vibe: 'Lush, dignified, classic heritage charm and peaceful intimacy',
    driveTimeMins: '10–13 Mins',
    iconSymbol: '🌺',
    pickupHighlight: 'Swift 10-minute drive via Santacruz-Chembur Link Road (SCLR) in Mercedes/BMW with custom playlist',
    romanticLandmarks: ['Diamond Garden Quiet Corners', 'St. Anthony Heritage Greens', 'Chembur Gymkhana Nostalgia'],
    popularOccasion: 'Proposal / Milestone Birthday',
    loveQuote: 'A scenic 10-minute SCLR romantic drive from Chembur’s greens to our private Kurla sanctuary.',
    recommendedTheme: 'Open-Air Cinema Under The Stars',
    recommendedSpace: 'The Starlit Rooftop Deck',
    suggestedAddOns: ['addon-cold-pyro', 'addon-photographer', 'addon-bouquet']
  }
];

