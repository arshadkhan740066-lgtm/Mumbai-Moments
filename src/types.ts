export type Occasion =
  | 'Proposal'
  | 'Anniversary'
  | 'Date Night'
  | 'Birthday Celebration'
  | 'Intimate Engagement'
  | 'Candlelight Surprise'
  | 'Milestone Celebration';

export type VenueSpaceArea =
  | 'The Starlit Rooftop Deck'
  | 'The Glasshouse Pavilion'
  | 'The Candlelit Garden Courtyard'
  | 'The Sunset Oceanview Cabana'
  | 'The Intimate Dining Sanctum'
  | 'Full Private Venue Exclusive';

export type DesignThemeStyle =
  | 'Celestial Candlelight & Fairy Lights'
  | 'Bohemian Sunset & Pampas Grass'
  | 'Royal Velvet & Red Rose Sanctum'
  | 'Minimalist Scandinavian White & Gold'
  | 'Open-Air Cinema Under The Stars'
  | 'Enchanted Forest & Floral Archway'
  | 'Bespoke Custom Concept';

export type DiningStyle =
  | '5-Course Private Chef Gourmet Tasting'
  | 'Live Barbecue & Alfresco Grill'
  | 'Mediterranean Tapas & Wine Pairing'
  | 'Royal Indian Fine Dining Feasts'
  | 'Artisanal Grazing Table & Champagne';

export interface CustomAddOn {
  id: string;
  name: string;
  category: 'Entertainment' | 'Visuals & Décor' | 'Photography' | 'Gastronomy' | 'Special Effects';
  description: string;
  price: number;
  priceDisplay: string;
  iconName: string;
  popularFor: Occasion[];
  image: string;
}

export interface VenueTransformationTheme {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  spaceArea: VenueSpaceArea;
  themeStyle: DesignThemeStyle;
  diningStyle: DiningStyle;
  suitableOccasions: Occasion[];
  basePrice: number;
  basePriceDisplay: string;
  rating: number;
  reviewsCount: number;
  coverImage: string;
  gallery: string[];
  inclusions: string[];
  atmosphereHighlight: string;
  designerNote: string;
  setupTimeHours: number;
  customizationOptions: string[];
  badge?: string;
  isPopular?: boolean;
}

export interface VenueSpaceHighlight {
  id: string;
  name: VenueSpaceArea;
  capacity: string;
  viewType: string;
  privacyLevel: string;
  tagline: string;
  description: string;
  image: string;
  keyFeatures: string[];
}

export interface RealClientTransformation {
  id: string;
  coupleNames: string;
  occasion: Occasion;
  themeApplied: string;
  spaceUsed: VenueSpaceArea;
  quote: string;
  story: string;
  coverImage: string;
  addOnsIncluded: string[];
  date: string;
}

export interface BespokeExperienceConfig {
  occasion: Occasion;
  spaceArea: VenueSpaceArea;
  themeStyle: DesignThemeStyle;
  diningStyle: DiningStyle;
  guestCount?: number; // usually 2, can be up to 10 for intimate parties
  selectedAddOnIds: string[];
  preferredDate?: string;
  preferredSlot?: string;
  specialRequests?: string;
  customRequests?: string;
  targetNeighborhood?: TargetNeighborhood;
}

export type TargetNeighborhood =
  | 'Sion'
  | 'Dadar'
  | 'Kurla'
  | 'Mahim'
  | 'Wadala'
  | 'Chembur';

export interface NeighborhoodInfo {
  id: TargetNeighborhood;
  name: string;
  tagline: string;
  vibe: string;
  driveTimeMins: string;
  iconSymbol: string;
  pickupHighlight: string;
  romanticLandmarks: string[];
  popularOccasion: string;
  loveQuote: string;
  recommendedTheme: DesignThemeStyle;
  recommendedSpace: VenueSpaceArea;
  suggestedAddOns: string[];
}

export interface BespokeInquirySubmission {
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  partnerName?: string;
  occasion: Occasion;
  preferredDate: string;
  preferredSpace: VenueSpaceArea;
  chosenTheme: DesignThemeStyle;
  diningStyle: DiningStyle;
  guestCount: number;
  estimatedBudget: string;
  selectedAddOns: string[];
  customVisionText: string;
  howDidYouHear?: string;
}
