import { useState } from 'react';
import { VenueTransformationTheme, Occasion } from '../types';
import { VENUE_THEMES } from '../data/venueData';
import { Sparkles, Heart, Clock, Star, ArrowRight, ShieldCheck, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface VenueThemesSectionProps {
  onSelectTheme: (theme: VenueTransformationTheme) => void;
  onCustomizeTheme: (theme: VenueTransformationTheme) => void;
  onToggleSaveTheme: (themeId: string) => void;
  savedThemeIds: string[];
}

export const VenueThemesSection = ({
  onSelectTheme,
  onCustomizeTheme,
  onToggleSaveTheme,
  savedThemeIds
}: VenueThemesSectionProps) => {
  const [filterOccasion, setFilterOccasion] = useState<string>('All');

  const occasionFilters: string[] = [
    'All',
    'Proposal',
    'Anniversary',
    'Date Night',
    'Birthday Celebration',
    'Intimate Engagement'
  ];

  const filteredThemes = VENUE_THEMES.filter((t) => {
    if (filterOccasion === 'All') return true;
    return t.suitableOccasions.includes(filterOccasion as Occasion);
  });

  return (
    <section id="venue-themes" className="py-16 sm:py-24 bg-[#FFFDFB] border-b border-[#E8D9DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#E8D9DC] text-[#8F3F50] text-xs font-semibold uppercase tracking-widest mb-3 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#C9A15B]" />
              <span>Signature Transformations</span>
            </div>
            <h2 className="font-serif-display text-3xl sm:text-5xl font-bold text-[#241E20] tracking-tight">
              Custom Themes & Setups
            </h2>
            <p className="text-sm sm:text-base text-[#5C4E52] font-light mt-3 leading-relaxed">
              Explore how our master decorators and floral artists transform our single private estate in Bandra for your specific celebration.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {occasionFilters.map((occ) => (
              <button
                key={occ}
                onClick={() => setFilterOccasion(occ)}
                className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer border ${
                  filterOccasion === occ
                    ? 'aurawed-pill-active shadow-xs'
                    : 'aurawed-pill'
                }`}
              >
                {occ}
              </button>
            ))}
          </div>
        </div>

        {/* Themes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredThemes.map((theme) => {
              const isSaved = savedThemeIds.includes(theme.id);
              return (
                <motion.div
                  key={theme.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-3xl border border-[#E8D9DC] overflow-hidden shadow-[0_4px_20px_rgba(80,50,30,0.04)] hover:shadow-[0_15px_35px_rgba(80,50,30,0.08)] transition-all duration-300 flex flex-col group"
                >
                  {/* Image Container with Badges */}
                  <div className="relative aspect-[16/11] overflow-hidden bg-[#F8EDEF]">
                    <img
                      src={theme.coverImage}
                      alt={theme.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                    {/* Top Badges */}
                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      {theme.badge && (
                        <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[10px] font-bold text-[#8F3F50] uppercase tracking-widest shadow-xs">
                          {theme.badge}
                        </span>
                      )}
                      <span className="px-2.5 py-1 rounded-full bg-[#241E20]/70 backdrop-blur-md text-[10px] font-semibold text-white uppercase tracking-wider">
                        {theme.spaceArea}
                      </span>
                    </div>

                    {/* Heart Wishlist Button */}
                    <button
                      onClick={() => onToggleSaveTheme(theme.id)}
                      className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-[#241E20] hover:text-[#8F3F50] transition-colors shadow-md cursor-pointer"
                      aria-label="Save setup to wishlist"
                    >
                      <Heart
                        className={`w-4 h-4 ${
                          isSaved ? 'text-[#8F3F50] fill-[#8F3F50]' : 'text-[#5C4E52]'
                        }`}
                      />
                    </button>

                    {/* Price & Rating Overlay at Bottom */}
                    <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white">
                      <div className="font-serif-display text-lg font-bold text-white drop-shadow-md">
                        {theme.basePriceDisplay}
                      </div>
                      <div className="flex items-center gap-1 text-xs bg-black/40 backdrop-blur-xs px-2.5 py-1 rounded-full text-[#C9A15B] font-semibold">
                        <Star className="w-3.5 h-3.5 fill-[#C9A15B]" />
                        <span>{theme.rating.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <h3 className="font-serif-display text-xl font-bold text-[#241E20] group-hover:text-[#8F3F50] transition-colors leading-snug">
                        {theme.title}
                      </h3>
                      <p className="text-xs text-[#C9A15B] font-medium mt-1">
                        {theme.subtitle}
                      </p>
                      <p className="text-xs text-[#5C4E52] font-light mt-2 line-clamp-2 leading-relaxed">
                        {theme.description}
                      </p>
                    </div>

                    {/* Inclusions summary pills */}
                    <div className="space-y-2 pt-2 border-t border-[#E8D9DC]">
                      <span className="text-[10px] uppercase tracking-wider text-[#C9A15B] font-bold block">
                        Signature Highlights:
                      </span>
                      <ul className="text-xs text-[#5C4E52] space-y-1.5">
                        {theme.inclusions.slice(0, 3).map((inc, i) => (
                          <li key={i} className="flex items-start gap-2 text-[11px]">
                            <Check className="w-3 h-3 text-[#8F3F50] flex-shrink-0 mt-0.5" />
                            <span className="line-clamp-1">{inc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-3 border-t border-[#E8D9DC] flex items-center gap-2.5">
                      <button
                        onClick={() => onSelectTheme(theme)}
                        className="flex-1 py-2.5 px-4 rounded-full aurawed-button-secondary text-xs uppercase tracking-wider font-semibold text-center cursor-pointer"
                      >
                        Setup Details
                      </button>
                      <button
                        onClick={() => onCustomizeTheme(theme)}
                        className="flex-1 py-2.5 px-4 rounded-full aurawed-button-primary text-xs uppercase tracking-wider font-semibold flex items-center justify-center gap-1.5 cursor-pointer"
                      >
                        <span>Customize</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
