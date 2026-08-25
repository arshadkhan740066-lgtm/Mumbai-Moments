import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { VenueThemesSection } from '../components/VenueThemesSection';
import { ThemeDetailModal } from '../components/ThemeDetailModal';
import { VenueTransformationTheme } from '../types';
import { VENUE_THEMES } from '../data/venueData';
import { motion } from 'motion/react';
import { Sparkles, Heart, Filter, ArrowRight } from 'lucide-react';

interface ThemesPageProps {
  savedThemeIds: string[];
  onToggleSaveTheme: (id: string) => void;
  onOpenInquiry: () => void;
}

type FilterTag = 'All' | 'Proposal' | 'Anniversary' | 'Date Night' | 'Birthday' | 'Boho';

export const ThemesPage = ({ savedThemeIds, onToggleSaveTheme, onOpenInquiry }: ThemesPageProps) => {
  const navigate = useNavigate();
  const [activeTheme, setActiveTheme] = useState<VenueTransformationTheme | null>(null);
  const [activeFilter, setActiveFilter] = useState<FilterTag>('All');

  const filters: FilterTag[] = ['All', 'Proposal', 'Anniversary', 'Date Night', 'Birthday', 'Boho'];

  const filteredThemes = VENUE_THEMES.filter((t) => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Boho') return t.themeStyle.toLowerCase().includes('bohemian') || t.themeStyle.toLowerCase().includes('forest');
    return t.occasions.some((occ) => occ.toLowerCase().includes(activeFilter.toLowerCase()));
  });

  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      {/* Hero Banner */}
      <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-20 bg-gradient-to-br from-[#1E160E] to-[#2A1400] overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <img
            src="https://images.unsplash.com/photo-1558346547-4439467bd1d5?q=80&w=1600&auto=format&fit=crop"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#1E160E]/85 to-[#1E160E]/70" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#DFB776] text-xs font-semibold uppercase tracking-widest mb-5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Bespoke Transformation Themes</span>
          </div>
          <h1 className="font-serif-display text-4xl sm:text-6xl font-bold text-white tracking-tight mb-4">
            Custom Decor Themes & Setups
          </h1>
          <p className="text-white/70 text-base sm:text-lg font-light max-w-2xl mx-auto mb-8">
            Each theme is hand-crafted by our artisan decor team. Browse, save to your moodboard, and customize with our live Experience Builder.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2.5">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                  activeFilter === f
                    ? 'bg-[#C59A5D] text-[#18140E] border-2 border-[#C59A5D] shadow-md'
                    : 'bg-white/10 border border-white/30 text-white/90 hover:bg-white/20'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Themes Grid */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <p className="text-sm text-[#52453E]">
              Showing <strong className="text-[#181310]">{filteredThemes.length}</strong> theme{filteredThemes.length !== 1 ? 's' : ''}
              {activeFilter !== 'All' ? ` for "${activeFilter}"` : ''}
            </p>
            <div className="flex items-center gap-2 text-xs text-[#8C6D46] font-medium">
              <Filter className="w-3.5 h-3.5" />
              <span>Filter: {activeFilter}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredThemes.map((theme, i) => (
              <motion.div
                key={theme.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="aurawed-card rounded-3xl overflow-hidden"
              >
                <div
                  className="relative aspect-[4/3] overflow-hidden cursor-pointer"
                  onClick={() => setActiveTheme(theme)}
                >
                  <img
                    src={theme.coverImage}
                    alt={theme.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                  {/* Save button */}
                  <button
                    onClick={(e) => { e.stopPropagation(); onToggleSaveTheme(theme.id); }}
                    className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-md hover:scale-110 transition-transform cursor-pointer"
                  >
                    <Heart className={`w-4 h-4 ${savedThemeIds.includes(theme.id) ? 'fill-[#6B1724] text-[#6B1724]' : 'text-[#8C6D46]'}`} />
                  </button>

                  {/* Occasions tags */}
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1">
                    {theme.occasions.slice(0, 2).map((occ) => (
                      <span key={occ} className="px-2 py-0.5 rounded-full bg-black/50 text-[10px] text-white font-medium">
                        {occ}
                      </span>
                    ))}
                  </div>

                  <div className="absolute bottom-3 left-3 right-3">
                    <p className="text-[#DFB776] text-[10px] uppercase tracking-widest font-bold">{theme.spaceArea}</p>
                    <h3 className="font-serif-display text-base font-bold text-white leading-tight mt-0.5">{theme.title}</h3>
                  </div>
                </div>

                <div className="p-5 space-y-3">
                  <p className="text-sm text-[#52453E] font-light leading-snug line-clamp-2">{theme.tagline}</p>

                  <div className="flex items-center justify-between pt-1 border-t border-[#F0E8DC]">
                    <div>
                      <p className="text-[10px] text-[#8C6D46] uppercase tracking-wider font-semibold">Starting From</p>
                      <p className="text-sm font-bold text-[#181310]">₹{theme.basePrice.toLocaleString('en-IN')}</p>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => setActiveTheme(theme)}
                        className="px-4 py-2 rounded-full aurawed-button-secondary text-[11px] font-semibold uppercase tracking-wider cursor-pointer"
                      >
                        View
                      </button>
                      <button
                        onClick={() => { navigate('/builder'); }}
                        className="px-4 py-2 rounded-full aurawed-button-primary text-[11px] font-semibold uppercase tracking-wider cursor-pointer"
                      >
                        Customize
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredThemes.length === 0 && (
            <div className="text-center py-20">
              <p className="text-[#52453E] font-light">No themes match your filter. <button onClick={() => setActiveFilter('All')} className="text-[#6B1724] font-semibold underline cursor-pointer">Show all themes</button></p>
            </div>
          )}
        </div>
      </section>

      {/* Bespoke CTA */}
      <section className="py-14 bg-[#FAF5EE] border-t border-[#E5D9C8]">
        <div className="max-w-3xl mx-auto px-4 text-center space-y-5">
          <h2 className="font-serif-display text-3xl sm:text-4xl font-bold text-[#181310]">Don't See Your Dream Setup?</h2>
          <p className="text-sm text-[#52453E] font-light max-w-lg mx-auto">We specialize in fully custom, never-seen-before concepts. Tell us your vision and our creative team will design something exclusively for you.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <button onClick={onOpenInquiry} className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full aurawed-button-primary text-xs uppercase tracking-widest font-bold cursor-pointer shadow-lg">
              <Sparkles className="w-4 h-4 text-[#DFB776]" />
              <span>Request Custom Design</span>
            </button>
            <button onClick={() => navigate('/builder')} className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full aurawed-button-secondary text-xs uppercase tracking-widest font-bold cursor-pointer">
              <span>Use Experience Builder</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      <ThemeDetailModal
        theme={activeTheme}
        isOpen={!!activeTheme}
        onClose={() => setActiveTheme(null)}
        onCustomizeTheme={() => { setActiveTheme(null); navigate('/builder'); }}
        onToggleSaveTheme={onToggleSaveTheme}
        isSaved={activeTheme ? savedThemeIds.includes(activeTheme.id) : false}
      />
    </div>
  );
};
