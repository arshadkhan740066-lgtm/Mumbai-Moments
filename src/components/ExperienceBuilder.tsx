import { useState, useMemo } from 'react';
import {
  Occasion,
  VenueSpaceArea,
  DesignThemeStyle,
  DiningStyle,
  BespokeExperienceConfig,
  VenueTransformationTheme,
  CustomAddOn
} from '../types';
import { VENUE_THEMES, VENUE_SPACES, BESPOKE_ADDONS } from '../data/venueData';
import {
  Sparkles,
  Check,
  Plus,
  Minus,
  Heart,
  MessageSquare,
  ShieldCheck,
  Clock,
  Music,
  Camera,
  Film,
  Type,
  Cake,
  Car
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ExperienceBuilderProps {
  onBookExperience: (config: BespokeExperienceConfig) => void;
  onSelectTheme?: (theme: VenueTransformationTheme) => void;
  onSaveExperience?: (config: BespokeExperienceConfig) => void;
  onOpenLoveAI?: () => void;
  isSaved?: boolean;
}

export const ExperienceBuilder = ({
  onBookExperience,
  onSelectTheme,
  onSaveExperience,
  onOpenLoveAI,
  isSaved
}: ExperienceBuilderProps) => {
  const [occasion, setOccasion] = useState<Occasion>('Proposal');
  const [spaceArea, setSpaceArea] = useState<VenueSpaceArea>('The Starlit Rooftop Deck');
  const [themeStyle, setThemeStyle] = useState<DesignThemeStyle>('Royal Velvet & Red Rose Sanctum');
  const [diningStyle, setDiningStyle] = useState<DiningStyle>('5-Course Private Chef Gourmet Tasting');
  const [selectedAddOnIds, setSelectedAddOnIds] = useState<string[]>([
    'addon-cold-pyro',
    'addon-marquee-letters'
  ]);
  const [guestCount, setGuestCount] = useState<number>(2);

  // Find matching base theme or fallback
  const currentTheme = useMemo(() => {
    return (
      VENUE_THEMES.find(
        (t) => t.themeStyle === themeStyle || t.spaceArea === spaceArea
      ) || VENUE_THEMES[0]
    );
  }, [themeStyle, spaceArea]);

  // Toggle add-on
  const toggleAddOn = (id: string) => {
    setSelectedAddOnIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Calculate dynamic total estimation
  const totalCost = useMemo(() => {
    let base = currentTheme.basePrice;
    if (spaceArea === 'Full Private Venue Exclusive') {
      base += 8000;
    }
    const addOnsTotal = selectedAddOnIds.reduce((sum, addOnId) => {
      const found = BESPOKE_ADDONS.find((a) => a.id === addOnId);
      return sum + (found ? found.price : 0);
    }, 0);

    // If extra guests beyond 2
    const extraGuestsCost = guestCount > 2 ? (guestCount - 2) * 2500 : 0;

    return base + addOnsTotal + extraGuestsCost;
  }, [currentTheme, spaceArea, selectedAddOnIds, guestCount]);

  const currentConfig: BespokeExperienceConfig = {
    occasion,
    spaceArea,
    themeStyle,
    diningStyle,
    guestCount,
    selectedAddOnIds
  };

  const getAddOnIcon = (iconName: string) => {
    switch (iconName) {
      case 'Music':
        return <Music className="w-4 h-4 text-[#C9A15B]" />;
      case 'Camera':
        return <Camera className="w-4 h-4 text-[#C9A15B]" />;
      case 'Sparkles':
        return <Sparkles className="w-4 h-4 text-[#C9A15B]" />;
      case 'Type':
        return <Type className="w-4 h-4 text-[#C9A15B]" />;
      case 'Film':
        return <Film className="w-4 h-4 text-[#C9A15B]" />;
      case 'Cake':
        return <Cake className="w-4 h-4 text-[#C9A15B]" />;
      case 'Car':
        return <Car className="w-4 h-4 text-[#C9A15B]" />;
      default:
        return <Sparkles className="w-4 h-4 text-[#C9A15B]" />;
    }
  };

  return (
    <section
      id="experience-builder"
      className="py-16 sm:py-24 bg-[#FFFDFB] border-b border-[#E8D9DC] relative overflow-hidden"
    >
      {/* Decorative ambient background accents */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#C9A15B]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[400px] h-[400px] bg-[#8F3F50]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#E8D9DC] text-[#8F3F50] text-xs font-semibold uppercase tracking-widest mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#C9A15B]" />
            <span>Interactive Venue Studio</span>
          </div>

          <h2 className="font-serif-display text-3xl sm:text-5xl font-bold text-[#241E20] tracking-tight">
            Design Your Private Experience
          </h2>
          <p className="text-sm sm:text-base text-[#5C4E52] font-light mt-3 leading-relaxed">
            Customize our single private estate in Bandra to match your exact love story. Choose your preferred private zone, décor aesthetic, private chef menu, and bespoke enhancements.
          </p>

          {onOpenLoveAI && (
            <div className="mt-4 inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-[#F8EDEF] border border-[#E8D9DC] shadow-xs">
              <Sparkles className="w-4 h-4 text-[#C9A15B] animate-pulse" />
              <span className="text-xs text-[#5C4E52]">Need romantic inspiration or a custom speech?</span>
              <button
                onClick={onOpenLoveAI}
                className="text-xs font-bold text-[#8F3F50] hover:underline uppercase tracking-wider cursor-pointer"
              >
                Launch Love AI Studio →
              </button>
            </div>
          )}
        </div>

        {/* 2-Column Studio Configurator Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Stepper Configurator (7 Cols) */}
          <div className="lg:col-span-7 space-y-8 bg-white border border-[#E8D9DC] rounded-3xl p-6 sm:p-8 shadow-[0_10px_35px_rgba(80,50,30,0.04)]">
            {/* Step 1: Occasion */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs uppercase tracking-widest text-[#C9A15B] font-bold">
                  Step 1: The Occasion
                </span>
                <span className="text-xs text-[#5C4E52]">What are you celebrating?</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {(
                  [
                    'Proposal',
                    'Anniversary',
                    'Date Night',
                    'Birthday Celebration',
                    'Intimate Engagement',
                    'Candlelight Surprise'
                  ] as Occasion[]
                ).map((occ) => (
                  <button
                    key={occ}
                    onClick={() => setOccasion(occ)}
                    className={`p-3 rounded-2xl text-left text-xs font-semibold transition-all cursor-pointer flex items-center justify-between border ${
                      occasion === occ
                        ? 'aurawed-pill-active font-bold shadow-xs'
                        : 'aurawed-pill'
                    }`}
                  >
                    <span>{occ}</span>
                    {occasion === occ && <Check className="w-3.5 h-3.5 text-white" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Private Space / Zone */}
            <div className="pt-6 border-t border-[#E8D9DC]">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs uppercase tracking-widest text-[#C9A15B] font-bold">
                  Step 2: Private Venue Zone
                </span>
                <span className="text-xs text-[#5C4E52]">100% reserved exclusively</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {VENUE_SPACES.map((space) => {
                  const isSelected = spaceArea === space.name;
                  return (
                    <button
                      key={space.id}
                      onClick={() => setSpaceArea(space.name)}
                      className={`p-3.5 rounded-2xl text-left transition-all cursor-pointer border flex flex-col justify-between ${
                        isSelected
                          ? 'bg-[#FFFDFB] border-[#8F3F50] shadow-xs'
                          : 'bg-[#FFFDFB] border-[#E8D9DC] hover:border-[#C9A15B]'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className={`text-xs font-bold ${isSelected ? 'text-[#8F3F50]' : 'text-[#241E20]'}`}>
                          {space.name}
                        </span>
                        {isSelected && <Check className="w-4 h-4 text-[#8F3F50]" />}
                      </div>
                      <p className="text-[11px] text-[#5C4E52] mt-1 line-clamp-2">
                        {space.tagline}
                      </p>
                      <span className="text-[10px] text-[#C9A15B] font-semibold mt-2 uppercase tracking-wider">
                        {space.capacity}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Decor & Theme Styling */}
            <div className="pt-6 border-t border-[#E8D9DC]">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs uppercase tracking-widest text-[#C9A15B] font-bold">
                  Step 3: Décor Theme & Set Design
                </span>
                <span className="text-xs text-[#5C4E52]">Transformed by our artisans</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {(
                  [
                    'Celestial Candlelight & Fairy Lights',
                    'Royal Velvet & Red Rose Sanctum',
                    'Bohemian Sunset & Pampas Grass',
                    'Open-Air Cinema Under The Stars',
                    'Enchanted Forest & Floral Archway',
                    'Bespoke Custom Concept'
                  ] as DesignThemeStyle[]
                ).map((theme) => {
                  const isSelected = themeStyle === theme;
                  return (
                    <button
                      key={theme}
                      onClick={() => setThemeStyle(theme)}
                      className={`p-3 rounded-2xl text-left text-xs font-semibold transition-all cursor-pointer flex items-center justify-between border ${
                        isSelected
                          ? 'aurawed-pill-active font-bold shadow-xs'
                          : 'aurawed-pill'
                      }`}
                    >
                      <span className="truncate mr-2">{theme}</span>
                      {isSelected && <Check className="w-3.5 h-3.5 text-white flex-shrink-0" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 4: Private Chef Dining Style */}
            <div className="pt-6 border-t border-[#E8D9DC]">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs uppercase tracking-widest text-[#C9A15B] font-bold">
                  Step 4: Private Chef Dining
                </span>
                <span className="text-xs text-[#5C4E52]">Dedicated chef for your table</span>
              </div>
              <div className="space-y-2">
                {(
                  [
                    '5-Course Private Chef Gourmet Tasting',
                    'Live Barbecue & Alfresco Grill',
                    'Mediterranean Tapas & Wine Pairing',
                    'Royal Indian Fine Dining Feasts',
                    'Artisanal Grazing Table & Champagne'
                  ] as DiningStyle[]
                ).map((dining) => {
                  const isSelected = diningStyle === dining;
                  return (
                    <button
                      key={dining}
                      onClick={() => setDiningStyle(dining)}
                      className={`w-full p-3 rounded-2xl text-left text-xs font-semibold transition-all cursor-pointer flex items-center justify-between border ${
                        isSelected
                          ? 'bg-[#FFFDFB] border-[#8F3F50] text-[#8F3F50] font-bold shadow-xs'
                          : 'bg-[#FFFDFB] border-[#E8D9DC] text-[#5C4E52] hover:border-[#C9A15B]'
                      }`}
                    >
                      <span>{dining}</span>
                      {isSelected ? (
                        <Check className="w-4 h-4 text-[#8F3F50]" />
                      ) : (
                        <span className="text-[10px] text-[#C9A15B] font-normal">Included in Package</span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 5: Bespoke Add-Ons & Upgrades */}
            <div className="pt-6 border-t border-[#E8D9DC]">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs uppercase tracking-widest text-[#C9A15B] font-bold">
                  Step 5: Bespoke Enhancements
                </span>
                <span className="text-xs text-[#5C4E52]">Tailor with luxury touches</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {BESPOKE_ADDONS.map((addon) => {
                  const isSelected = selectedAddOnIds.includes(addon.id);
                  return (
                    <button
                      key={addon.id}
                      onClick={() => toggleAddOn(addon.id)}
                      className={`p-3.5 rounded-2xl text-left transition-all cursor-pointer border flex items-start gap-3 ${
                        isSelected
                          ? 'bg-[#FFFDFB] border-[#8F3F50] shadow-xs'
                          : 'bg-[#FFFDFB] border-[#E8D9DC] hover:border-[#C9A15B]'
                      }`}
                    >
                      <div className="p-2 rounded-xl bg-white border border-[#E8D9DC] flex-shrink-0 mt-0.5">
                        {getAddOnIcon(addon.iconName)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <span className={`text-xs font-bold truncate ${isSelected ? 'text-[#8F3F50]' : 'text-[#241E20]'}`}>
                            {addon.name}
                          </span>
                          <span className="text-[11px] font-bold text-[#C9A15B] ml-1">
                            {addon.priceDisplay}
                          </span>
                        </div>
                        <p className="text-[10px] text-[#5C4E52] mt-0.5 line-clamp-2">
                          {addon.description}
                        </p>
                      </div>
                      <div className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-1 border ${
                        isSelected ? 'bg-[#8F3F50] border-[#8F3F50] text-white' : 'border-[#E8D9DC]'
                      }`}>
                        {isSelected && <Check className="w-3 h-3" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Guest Count Selector */}
            <div className="pt-6 border-t border-[#E8D9DC] flex items-center justify-between">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#C9A15B] font-bold block">
                  Guest Count
                </span>
                <span className="text-xs text-[#5C4E52]">Private couple date (or intimate group up to 10)</span>
              </div>
              <div className="flex items-center gap-3 bg-[#FFFDFB] border border-[#E8D9DC] rounded-full p-1.5">
                <button
                  onClick={() => setGuestCount((g) => Math.max(2, g - 1))}
                  className="w-7 h-7 rounded-full bg-white border border-[#E8D9DC] flex items-center justify-center text-[#241E20] cursor-pointer hover:bg-[#FFFDFB]"
                  disabled={guestCount <= 2}
                  aria-label="Decrease guest count"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="text-xs font-bold text-[#241E20] px-2">{guestCount} Guests</span>
                <button
                  onClick={() => setGuestCount((g) => Math.min(10, g + 1))}
                  className="w-7 h-7 rounded-full bg-white border border-[#E8D9DC] flex items-center justify-center text-[#241E20] cursor-pointer hover:bg-[#FFFDFB]"
                  disabled={guestCount >= 10}
                  aria-label="Increase guest count"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Live Summary, Visualization & Booking Desk (5 Cols) */}
          <div className="lg:col-span-5 sticky top-28 space-y-6">
            <div className="bg-white border-2 border-[#C9A15B]/60 rounded-3xl p-6 sm:p-8 shadow-[0_15px_45px_rgba(80,50,30,0.08)] space-y-6">
              {/* Live Preview Card */}
              <div className="relative rounded-2xl overflow-hidden aspect-[16/10] bg-[#FFFDFB]">
                <img
                  src={currentTheme.coverImage}
                  alt={currentTheme.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-white/95 text-[10px] uppercase tracking-widest text-[#8F3F50] font-bold shadow-xs">
                  100% Private Venue
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="text-[10px] text-[#C9A15B] uppercase tracking-widest font-bold">
                    {spaceArea}
                  </div>
                  <h3 className="font-serif-display text-xl font-bold leading-tight mt-0.5">
                    {themeStyle}
                  </h3>
                </div>
              </div>

              {/* Inclusions summary checklist */}
              <div className="space-y-3">
                <div className="text-xs uppercase tracking-widest text-[#8F3F50] font-bold flex items-center justify-between">
                  <span>Custom Experience Inclusions</span>
                  <ShieldCheck className="w-4 h-4 text-[#C9A15B]" />
                </div>
                <ul className="text-xs text-[#5C4E52] space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-[#8F3F50] flex-shrink-0 mt-0.5" />
                    <span><strong>100% Exclusive Privacy:</strong> Entire {spaceArea} reserved for {guestCount} guests</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-[#8F3F50] flex-shrink-0 mt-0.5" />
                    <span><strong>Full Décor Setup:</strong> Styled in {themeStyle} (300+ candles & florals)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-[#8F3F50] flex-shrink-0 mt-0.5" />
                    <span><strong>Culinary:</strong> Dedicated chef for {diningStyle}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-[#8F3F50] flex-shrink-0 mt-0.5" />
                    <span><strong>Hospitality:</strong> Private Butler & Welcome Toast</span>
                  </li>
                  {selectedAddOnIds.length > 0 && (
                    <li className="flex items-start gap-2 text-[#C9A15B] font-medium">
                      <Sparkles className="w-3.5 h-3.5 text-[#C9A15B] flex-shrink-0 mt-0.5" />
                      <span>{selectedAddOnIds.length} Bespoke Add-on{selectedAddOnIds.length > 1 ? 's' : ''} Included</span>
                    </li>
                  )}
                </ul>
              </div>

              {/* Total Estimated Price Display */}
              <div className="p-4 rounded-2xl bg-[#FFFDFB] border border-[#E8D9DC] flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#C9A15B] font-bold block">
                    Estimated All-Inclusive Quote
                  </span>
                  <div className="font-serif-display text-2xl sm:text-3xl font-bold text-[#8F3F50]">
                    ₹{totalCost.toLocaleString('en-IN')}
                  </div>
                  <span className="text-[10px] text-[#5C4E52]">Zero hidden fees • Décor + Food + Venue</span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] uppercase tracking-wider text-[#5C4E52] block">Setup Duration</span>
                  <span className="text-xs font-bold text-[#241E20] flex items-center justify-end gap-1">
                    <Clock className="w-3 h-3 text-[#C9A15B]" />
                    {currentTheme.setupTimeHours} hrs setup
                  </span>
                </div>
              </div>

              {/* Actions */}
              <div className="space-y-3">
                <button
                  onClick={() => onBookExperience(currentConfig)}
                  className="w-full py-4 rounded-full aurawed-button-primary text-xs uppercase tracking-widest font-bold flex items-center justify-center gap-2 cursor-pointer shadow-lg hover:shadow-xl"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Reserve Date with This Design</span>
                </button>

                {onSaveExperience && (
                  <button
                    onClick={() => onSaveExperience(currentConfig)}
                    className="w-full py-3 rounded-full aurawed-button-secondary text-xs uppercase tracking-wider font-bold text-[#241E20] flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Heart className={`w-4 h-4 ${isSaved ? 'text-[#8F3F50] fill-[#8F3F50]' : 'text-[#8F3F50]'}`} />
                    <span>{isSaved ? 'Design Saved to Moodboard' : 'Save Design to Moodboard'}</span>
                  </button>
                )}
              </div>

              <p className="text-[11px] text-center text-[#5C4E52] leading-tight">
                🔒 <strong>100% Privacy Guarantee:</strong> We host only 1 reservation at a time. No other guests will ever be seated in your area.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
