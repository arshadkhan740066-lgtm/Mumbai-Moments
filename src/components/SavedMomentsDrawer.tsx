import { VenueTransformationTheme } from '../types';
import { X, Trash2, Heart, ArrowUpRight, Share2, Check, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

interface SavedMomentsDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  savedThemes: VenueTransformationTheme[];
  onRemoveSavedTheme: (themeId: string) => void;
  onClearAll: () => void;
  onSelectTheme: (theme: VenueTransformationTheme) => void;
}

export const SavedMomentsDrawer = ({
  isOpen,
  onClose,
  savedThemes,
  onRemoveSavedTheme,
  onClearAll,
  onSelectTheme
}: SavedMomentsDrawerProps) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleShareList = () => {
    const listSummary = savedThemes
      .map((t) => `• ${t.title} (${t.spaceArea}) - ${t.basePriceDisplay}`)
      .join('\n');
    const fullText = `My Saved Mumbai Moments Setup Wishlist:\n\n${listSummary}\n\nPrivate Venue in Bandra, Mumbai • By AuraWed`;
    navigator.clipboard.writeText(fullText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-hidden">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        />

        <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="w-screen max-w-md bg-white border-l border-[#E5D9C8] shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="p-6 bg-[#FAF7F2] border-b border-[#E5D9C8] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-[#6B1724] fill-[#6B1724]" />
                <h3 className="font-serif-display text-xl font-bold text-[#1E1B18]">
                  Saved Moodboards ({savedThemes.length})
                </h3>
              </div>

              <button
                onClick={onClose}
                className="p-2 rounded-full bg-white border border-[#DFCDB7] text-[#52453E] hover:text-[#1E1B18] transition-colors cursor-pointer"
                aria-label="Close saved drawer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* List Body */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {savedThemes.length === 0 ? (
                <div className="text-center py-16 text-[#736359]">
                  <Sparkles className="w-10 h-10 text-[#C59A5D] mx-auto mb-3 opacity-60" />
                  <p className="font-serif-display text-lg text-[#1E1B18] font-bold mb-1">
                    No Saved Setups Yet
                  </p>
                  <p className="text-xs text-[#736359] max-w-xs mx-auto">
                    Click the heart icon on any custom setup or in the Experience Builder to save ideas for your partner or proposal.
                  </p>
                </div>
              ) : (
                savedThemes.map((theme) => (
                  <div
                    key={theme.id}
                    className="bg-[#FAF7F2] border border-[#E5D9C8] rounded-2xl p-3.5 flex gap-3 group shadow-xs"
                  >
                    <img
                      src={theme.coverImage}
                      alt={theme.title}
                      className="w-20 h-20 rounded-xl object-cover flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0 flex flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between gap-1">
                          <h4 className="font-serif-display text-sm font-bold text-[#1E1B18] truncate group-hover:text-[#6B1724] transition-colors">
                            {theme.title}
                          </h4>
                          <button
                            onClick={() => onRemoveSavedTheme(theme.id)}
                            className="text-[#8C6D46] hover:text-red-600 p-1 cursor-pointer"
                            title="Remove from saved"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <div className="text-xs text-[#736359]">
                          {theme.spaceArea} •{' '}
                          <span className="text-[#6B1724] font-bold">
                            {theme.basePriceDisplay}
                          </span>
                        </div>
                      </div>

                      <button
                        onClick={() => {
                          onClose();
                          onSelectTheme(theme);
                        }}
                        className="inline-flex items-center gap-1 text-[11px] font-bold text-[#6B1724] hover:text-[#1E1B18] self-start mt-2 cursor-pointer"
                      >
                        <span>View Details</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            {savedThemes.length > 0 && (
              <div className="p-6 bg-[#FAF7F2] border-t border-[#E5D9C8] space-y-3">
                <button
                  onClick={handleShareList}
                  className="w-full py-3 rounded-full aurawed-button-primary text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  {copied ? <Check className="w-4 h-4" /> : <Share2 className="w-4 h-4" />}
                  <span>{copied ? 'List Copied to Clipboard!' : 'Share Moodboard with Partner'}</span>
                </button>

                <button
                  onClick={onClearAll}
                  className="w-full py-2 text-xs text-[#8C6D46] hover:text-red-600 uppercase tracking-wider font-bold cursor-pointer"
                >
                  Clear All Saved Setups
                </button>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
};
