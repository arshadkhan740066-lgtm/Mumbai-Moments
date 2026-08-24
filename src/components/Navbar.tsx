import { useState, useEffect } from 'react';
import { Sparkles, Menu, X, Heart, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { BRANDING } from '../data/branding';

interface NavbarProps {
  onOpenInquiry: () => void;
  onOpenSaved: () => void;
  savedCount: number;
  onNavigateSection: (sectionId: string) => void;
}

export const Navbar = ({
  onOpenInquiry,
  onOpenSaved,
  savedCount,
  onNavigateSection
}: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    onNavigateSection(sectionId);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E5D9C8] py-3 shadow-[0_4px_20px_rgba(80,50,30,0.06)]'
            : 'bg-gradient-to-b from-[#FAF7F2]/90 via-[#FAF7F2]/60 to-transparent py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo with User's Provided Emblem & Calligraphy */}
          <button
            onClick={() => handleNavClick('hero')}
            className="text-left group focus:outline-none flex items-center gap-3 cursor-pointer"
            aria-label="Mumbai Moments Home"
          >
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden border-2 border-[#C59A5D] shadow-md flex-shrink-0 bg-white">
              <img
                src={BRANDING.logoUrl}
                alt="Mumbai Moments Emblem"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <div className="flex items-baseline gap-1.5">
                <span className="font-serif-display text-lg sm:text-xl font-bold tracking-[0.14em] text-[#1E1B18] uppercase group-hover:text-[#6B1724] transition-colors">
                  Mumbai
                </span>
                <span className="font-cursive text-xl sm:text-2xl text-[#C59A5D] font-normal -ml-0.5">
                  Moments
                </span>
              </div>
              <p className="text-[9px] tracking-[0.22em] text-[#8C6D46] uppercase font-semibold">
                Bespoke Private Venue • By AuraWed
              </p>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 p-1 rounded-full bg-white/85 border border-[#E5D9C8] shadow-sm text-xs tracking-wider uppercase font-medium text-[#4A3E39]">
            <button
              onClick={() => handleNavClick('targeted-areas')}
              className="px-3 py-1.5 rounded-full text-[#6B1724] font-bold bg-[#FAF0E1]/80 hover:bg-[#FAF0E1] border border-[#DFCDB7] transition-all cursor-pointer flex items-center gap-1 shadow-xs"
            >
              <Heart className="w-3 h-3 fill-[#DFB776] text-[#DFB776]" />
              <span>Flagship Kurla & 6 Locations</span>
            </button>
            <button
              onClick={() => handleNavClick('estate-overview')}
              className="px-3 py-1.5 rounded-full hover:text-[#6B1724] hover:bg-[#FAF5EE] transition-all cursor-pointer"
            >
              The Private Estate
            </button>
            <button
              onClick={() => handleNavClick('love-ai-studio')}
              className="px-3 py-1.5 rounded-full hover:text-[#6B1724] hover:bg-[#FAF5EE] transition-all cursor-pointer flex items-center gap-1"
            >
              <Sparkles className="w-3 h-3 text-[#C59A5D]" />
              <span>Love AI Studio</span>
            </button>
            <button
              onClick={() => handleNavClick('experience-builder')}
              className="px-3 py-1.5 rounded-full hover:text-[#6B1724] hover:bg-[#FAF5EE] transition-all cursor-pointer"
            >
              Design Experience
            </button>
            <button
              onClick={() => handleNavClick('venue-themes')}
              className="px-3 py-1.5 rounded-full hover:text-[#6B1724] hover:bg-[#FAF5EE] transition-all cursor-pointer"
            >
              Custom Themes
            </button>
            <button
              onClick={() => handleNavClick('why-private')}
              className="px-3 py-1.5 rounded-full hover:text-[#6B1724] hover:bg-[#FAF5EE] transition-all cursor-pointer"
            >
              Why 100% Private
            </button>
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* Saved Wishlist Button */}
            <button
              onClick={onOpenSaved}
              className="relative p-2.5 rounded-full aurawed-button-secondary text-[#1E1B18] hover:border-[#C59A5D] transition-all cursor-pointer shadow-sm"
              title="Saved Configurations"
              aria-label="View saved moodboards"
            >
              <Heart className="w-4 h-4 text-[#6B1724]" />
              {savedCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#6B1724] text-white text-[10px] font-bold rounded-full flex items-center justify-center shadow-md">
                  {savedCount}
                </span>
              )}
            </button>

            {/* Inquire & Book VIP Consultation */}
            <button
              onClick={onOpenInquiry}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full aurawed-button-primary text-xs font-semibold uppercase tracking-wider cursor-pointer"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#DFB776]" />
              <span>Book Consultation</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-full aurawed-button-secondary text-[#1E1B18]"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[65px] z-30 bg-[#FAF7F2] border-b border-[#E5D9C8] p-6 lg:hidden shadow-xl"
          >
            <div className="flex flex-col gap-2.5">
              <button
                onClick={() => handleNavClick('targeted-areas')}
                className="text-left text-sm uppercase tracking-wider font-bold text-[#6B1724] py-2.5 border-b border-[#EBE2D5] flex items-center justify-between"
              >
                <span>💖 Sion • Dadar • Chembur VIP Hub</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#FAF0E1] text-[#6B1724] font-bold">Chauffeur</span>
              </button>
              <button
                onClick={() => handleNavClick('estate-overview')}
                className="text-left text-sm uppercase tracking-wider font-medium text-[#1E1B18] hover:text-[#6B1724] py-2.5 border-b border-[#EBE2D5]"
              >
                The Private Estate
              </button>
              <button
                onClick={() => handleNavClick('love-ai-studio')}
                className="text-left text-sm uppercase tracking-wider font-bold text-[#6B1724] py-2.5 border-b border-[#EBE2D5] flex items-center justify-between"
              >
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#C59A5D]" />
                  <span>Love AI Studio (Speech, Itinerary & Quiz)</span>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#FAF0E1] text-[#6B1724] font-bold">AI</span>
              </button>
              <button
                onClick={() => handleNavClick('experience-builder')}
                className="text-left text-sm uppercase tracking-wider font-medium text-[#1E1B18] hover:text-[#6B1724] py-2.5 border-b border-[#EBE2D5]"
              >
                Design Custom Experience
              </button>
              <button
                onClick={() => handleNavClick('venue-themes')}
                className="text-left text-sm uppercase tracking-wider font-medium text-[#1E1B18] hover:text-[#6B1724] py-2.5 border-b border-[#EBE2D5]"
              >
                Custom Themes & Setups
              </button>
              <button
                onClick={() => handleNavClick('private-spaces')}
                className="text-left text-sm uppercase tracking-wider font-medium text-[#1E1B18] hover:text-[#6B1724] py-2.5 border-b border-[#EBE2D5]"
              >
                Private Spaces & Zones
              </button>
              <button
                onClick={() => handleNavClick('why-private')}
                className="text-left text-sm uppercase tracking-wider font-medium text-[#1E1B18] hover:text-[#6B1724] py-2.5 border-b border-[#EBE2D5]"
              >
                Why 100% Private Venue
              </button>
              <button
                onClick={() => handleNavClick('lookbook')}
                className="text-left text-sm uppercase tracking-wider font-medium text-[#1E1B18] hover:text-[#6B1724] py-2.5 border-b border-[#EBE2D5]"
              >
                Real Client Transformations
              </button>

              <div className="pt-3 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenInquiry();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-full aurawed-button-primary text-xs uppercase tracking-widest font-semibold"
                >
                  <MessageSquare className="w-4 h-4 text-[#DFB776]" />
                  <span>Reserve Date / Inquire</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
