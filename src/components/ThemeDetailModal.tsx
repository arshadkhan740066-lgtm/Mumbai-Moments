import { useState } from 'react';
import { VenueTransformationTheme } from '../types';
import { BRANDING } from '../data/branding';
import {
  X,
  Sparkles,
  Check,
  Clock,
  Star,
  MessageSquare,
  ShieldCheck,
  Heart,
  ChevronLeft,
  ChevronRight,
  Share2,
  Utensils,
  Lock
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ThemeDetailModalProps {
  theme: VenueTransformationTheme | null;
  isOpen: boolean;
  onClose: () => void;
  onCustomizeTheme: (theme: VenueTransformationTheme) => void;
  onToggleSaveTheme: (themeId: string) => void;
  isSaved: boolean;
}

export const ThemeDetailModal = ({
  theme,
  isOpen,
  onClose,
  onCustomizeTheme,
  onToggleSaveTheme,
  isSaved
}: ThemeDetailModalProps) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [copiedLink, setCopiedLink] = useState(false);

  if (!isOpen || !theme) return null;

  const images = theme.gallery && theme.gallery.length > 0 ? theme.gallery : [theme.coverImage];

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: `${theme.title} | Mumbai Moments`,
          text: `Check out this private bespoke experience setup at Mumbai Moments: ${theme.title}`,
          url: window.location.href
        })
        .catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  const handleWhatsAppBooking = () => {
    const text = encodeURIComponent(
      `Hello Mumbai Moments Concierge! I am interested in reserving your private venue in Bandra for the setup: "${theme.title}" (${theme.basePriceDisplay}). Please let me know available dates.`
    );
    window.open(`https://wa.me/${BRANDING.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-4xl bg-white rounded-3xl border border-[#E8D9DC] overflow-hidden shadow-2xl my-8 flex flex-col max-h-[90vh]"
        >
          {/* Header Bar */}
          <div className="p-4 sm:p-6 border-b border-[#E8D9DC] flex items-center justify-between bg-[#FFFDFB]">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#FFFDFB] border border-[#C9A15B] flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-[#C9A15B]" />
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#C9A15B] font-bold block">
                  Bespoke Setup Concept
                </span>
                <span className="text-xs text-[#5C4E52] font-medium">
                  {theme.spaceArea} • 100% Private Venue
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => onToggleSaveTheme(theme.id)}
                className="p-2 rounded-full bg-white border border-[#E8D9DC] hover:border-[#C9A15B] text-[#241E20] transition-colors cursor-pointer"
                title="Save to Moodboard"
              >
                <Heart
                  className={`w-4 h-4 ${
                    isSaved ? 'text-[#8F3F50] fill-[#8F3F50]' : 'text-[#5C4E52]'
                  }`}
                />
              </button>
              <button
                onClick={handleShare}
                className="p-2 rounded-full bg-white border border-[#E8D9DC] hover:border-[#C9A15B] text-[#241E20] transition-colors cursor-pointer relative"
                title="Share Setup"
              >
                <Share2 className="w-4 h-4 text-[#5C4E52]" />
                {copiedLink && (
                  <span className="absolute -bottom-8 right-0 bg-[#241E20] text-white text-[10px] px-2 py-1 rounded shadow-md whitespace-nowrap">
                    Link copied!
                  </span>
                )}
              </button>
              <button
                onClick={onClose}
                className="p-2 rounded-full bg-white border border-[#E8D9DC] hover:bg-[#FFFDFB] text-[#241E20] transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Modal Scrollable Content */}
          <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
            {/* Gallery Section */}
            <div className="relative rounded-2xl overflow-hidden aspect-[16/9] bg-[#F8EDEF]">
              <img
                src={images[activeImageIndex]}
                alt={theme.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

              {/* Prev / Next Arrows if multiple */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={() =>
                      setActiveImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
                    }
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 text-white flex items-center justify-center hover:bg-black/60 transition-colors cursor-pointer"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() =>
                      setActiveImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
                    }
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 text-white flex items-center justify-center hover:bg-black/60 transition-colors cursor-pointer"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}

              {/* Bottom Gallery Indicators */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
                {images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImageIndex(i)}
                    className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                      activeImageIndex === i ? 'w-6 bg-[#C9A15B]' : 'bg-white/60'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Title & Pricing Overview */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#E8D9DC]">
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="px-3 py-1 rounded-full bg-[#FFFDFB] border border-[#E8D9DC] text-[10px] font-bold text-[#8F3F50] uppercase tracking-widest">
                    {theme.themeStyle}
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-white border border-[#E8D9DC] text-[10px] font-semibold text-[#C9A15B] uppercase tracking-wider flex items-center gap-1">
                    <Lock className="w-3 h-3 text-[#C9A15B]" />
                    <span>Exclusive 2 Guests</span>
                  </span>
                </div>
                <h2 className="font-serif-display text-2xl sm:text-4xl font-bold text-[#241E20]">
                  {theme.title}
                </h2>
                <p className="text-xs sm:text-sm text-[#C9A15B] font-medium mt-1">
                  {theme.subtitle}
                </p>
              </div>

              <div className="sm:text-right bg-[#FFFDFB] p-4 rounded-2xl border border-[#E8D9DC] min-w-[200px]">
                <span className="text-[10px] uppercase tracking-wider text-[#C9A15B] font-bold block">
                  All-Inclusive Package
                </span>
                <div className="font-serif-display text-2xl font-bold text-[#8F3F50]">
                  {theme.basePriceDisplay}
                </div>
                <span className="text-[11px] text-[#5C4E52] flex items-center sm:justify-end gap-1 mt-0.5">
                  <Clock className="w-3 h-3 text-[#C9A15B]" />
                  <span>{theme.setupTimeHours} hrs setup required</span>
                </span>
              </div>
            </div>

            {/* Atmosphere Highlight */}
            <div className="p-4 rounded-2xl bg-[#FFFDFB] border border-[#E8D9DC] flex items-start gap-3.5">
              <Sparkles className="w-5 h-5 text-[#C9A15B] flex-shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-bold text-[#8F3F50] uppercase tracking-wider block">
                  Atmospheric Experience
                </span>
                <p className="text-xs text-[#5C4E52] font-light mt-0.5 leading-relaxed">
                  {theme.atmosphereHighlight}
                </p>
              </div>
            </div>

            {/* Inclusions Checklist */}
            <div className="space-y-3">
              <h3 className="font-serif-display text-lg font-bold text-[#241E20]">
                What’s Included in This Experience
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {theme.inclusions.map((inc, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-xl bg-[#FFFDFB] border border-[#E8D9DC] flex items-start gap-2.5"
                  >
                    <Check className="w-4 h-4 text-[#8F3F50] flex-shrink-0 mt-0.5" />
                    <span className="text-xs text-[#5C4E52] font-medium leading-tight">
                      {inc}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Customization Options */}
            {theme.customizationOptions && theme.customizationOptions.length > 0 && (
              <div className="space-y-3">
                <h3 className="font-serif-display text-lg font-bold text-[#241E20]">
                  Customization Available for You
                </h3>
                <ul className="space-y-2 text-xs text-[#5C4E52]">
                  {theme.customizationOptions.map((opt, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C9A15B] mt-1.5 flex-shrink-0" />
                      <span>{opt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Designer Note */}
            <div className="p-4 rounded-2xl bg-white border border-[#E8D9DC] text-xs text-[#5C4E52] italic">
              <strong className="text-[#241E20] font-bold not-italic">Designer’s Recommendation: </strong>
              "{theme.designerNote}"
            </div>
          </div>

          {/* Sticky Bottom Actions */}
          <div className="p-4 sm:p-6 border-t border-[#E8D9DC] bg-[#FFFDFB] flex flex-col sm:flex-row items-center justify-between gap-3">
            <button
              onClick={handleWhatsAppBooking}
              className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#25D366] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#1EBE5D] transition-colors cursor-pointer shadow-md"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Direct WhatsApp Inquiry</span>
            </button>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                onClick={() => {
                  onClose();
                  onCustomizeTheme(theme);
                }}
                className="flex-1 sm:flex-none px-8 py-3 rounded-full aurawed-button-primary text-xs uppercase tracking-widest font-bold flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <Sparkles className="w-4 h-4 text-[#C9A15B]" />
                <span>Customize in Studio</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
