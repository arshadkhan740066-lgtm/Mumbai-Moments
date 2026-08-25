import { useNavigate } from 'react-router-dom';
import { SavedMomentsDrawer } from '../components/SavedMomentsDrawer';
import { ThemeDetailModal } from '../components/ThemeDetailModal';
import { VenueTransformationTheme } from '../types';
import { useState } from 'react';
import { Heart, Sparkles, ArrowRight, Trash2 } from 'lucide-react';
import { VENUE_THEMES } from '../data/venueData';

interface SavedPageProps {
  savedThemeIds: string[];
  onRemoveSavedTheme: (id: string) => void;
  onClearAll: () => void;
  onToggleSaveTheme: (id: string) => void;
  onOpenInquiry: () => void;
}

export const SavedPage = ({
  savedThemeIds,
  onRemoveSavedTheme,
  onClearAll,
  onToggleSaveTheme,
  onOpenInquiry
}: SavedPageProps) => {
  const navigate = useNavigate();
  const [activeTheme, setActiveTheme] = useState<VenueTransformationTheme | null>(null);

  const savedThemes = VENUE_THEMES.filter((t) => savedThemeIds.includes(t.id));

  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      {/* Header */}
      <section className="relative pt-28 pb-12 sm:pt-36 sm:pb-16 bg-[#FAF5EE] border-b border-[#E5D9C8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#DFCDB7] text-[#6B1724] text-xs font-semibold uppercase tracking-widest mb-5 shadow-sm">
            <Heart className="w-3.5 h-3.5 fill-[#6B1724] text-[#6B1724]" />
            <span>Your Saved Moodboard</span>
          </div>
          <h1 className="font-serif-display text-4xl sm:text-5xl font-bold text-[#181310] tracking-tight mb-3">
            Saved Themes & Configurations
          </h1>
          <p className="text-sm text-[#52453E] font-light max-w-xl mx-auto">
            Your wishlist of handpicked setups. Review, customize, or book them here.
          </p>
          {savedThemes.length > 0 && (
            <div className="mt-4 flex items-center justify-center gap-3">
              <span className="text-sm font-bold text-[#181310]">{savedThemes.length} saved setup{savedThemes.length !== 1 ? 's' : ''}</span>
              <button
                onClick={onClearAll}
                className="inline-flex items-center gap-1.5 text-xs text-[#8C6D46] hover:text-[#6B1724] transition-colors cursor-pointer"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Clear All</span>
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Saved Grid */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {savedThemes.length === 0 ? (
            <div className="text-center py-20 space-y-5">
              <div className="w-20 h-20 rounded-full bg-[#FAF5EE] border border-[#DFCDB7] flex items-center justify-center mx-auto">
                <Heart className="w-8 h-8 text-[#C59A5D]" />
              </div>
              <h2 className="font-serif-display text-2xl font-bold text-[#181310]">Your moodboard is empty</h2>
              <p className="text-sm text-[#52453E] font-light">Browse our themes and tap the ♥ icon to save setups you love.</p>
              <button
                onClick={() => navigate('/themes')}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full aurawed-button-primary text-xs uppercase tracking-widest font-bold cursor-pointer shadow-lg"
              >
                <Sparkles className="w-4 h-4 text-[#DFB776]" />
                <span>Explore All Themes</span>
              </button>
            </div>
          ) : (
            <div className="space-y-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {savedThemes.map((theme) => (
                  <div key={theme.id} className="aurawed-card rounded-3xl overflow-hidden">
                    <div className="relative aspect-[4/3] cursor-pointer overflow-hidden" onClick={() => setActiveTheme(theme)}>
                      <img src={theme.coverImage} alt={theme.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                      <button
                        onClick={(e) => { e.stopPropagation(); onRemoveSavedTheme(theme.id); }}
                        className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 flex items-center justify-center shadow-md hover:scale-110 transition-transform cursor-pointer"
                        title="Remove from saved"
                      >
                        <Heart className="w-4 h-4 fill-[#6B1724] text-[#6B1724]" />
                      </button>
                      <div className="absolute bottom-3 left-3 right-3">
                        <p className="text-[#DFB776] text-[10px] uppercase tracking-widest font-bold">{theme.spaceArea}</p>
                        <h3 className="font-serif-display text-base font-bold text-white leading-tight mt-0.5">{theme.title}</h3>
                      </div>
                    </div>
                    <div className="p-5 space-y-3">
                      <p className="text-xs text-[#52453E] font-light line-clamp-2">{theme.tagline}</p>
                      <div className="flex items-center justify-between pt-2 border-t border-[#F0E8DC]">
                        <div>
                          <p className="text-[10px] text-[#8C6D46] uppercase tracking-wider font-semibold">From</p>
                          <p className="text-sm font-bold text-[#181310]">₹{theme.basePrice.toLocaleString('en-IN')}</p>
                        </div>
                        <div className="flex gap-2">
                          <button
                            onClick={() => navigate('/builder')}
                            className="px-4 py-2 rounded-full aurawed-button-primary text-[11px] font-semibold uppercase tracking-wider cursor-pointer"
                          >
                            Customize
                          </button>
                          <button
                            onClick={onOpenInquiry}
                            className="px-4 py-2 rounded-full aurawed-button-secondary text-[11px] font-semibold uppercase tracking-wider cursor-pointer"
                          >
                            Book
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bulk actions */}
              <div className="flex flex-wrap justify-center gap-3 pt-6 border-t border-[#E5D9C8]">
                <button
                  onClick={onOpenInquiry}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full aurawed-button-primary text-xs uppercase tracking-widest font-bold cursor-pointer shadow-lg"
                >
                  <Sparkles className="w-4 h-4 text-[#DFB776]" />
                  <span>Book Any Saved Setup</span>
                </button>
                <button
                  onClick={() => navigate('/themes')}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full aurawed-button-secondary text-xs uppercase tracking-widest font-bold cursor-pointer"
                >
                  <span>Explore More Themes</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
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
