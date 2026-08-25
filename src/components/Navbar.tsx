import { useState, useEffect } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { Sparkles, Menu, X, Heart, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { BRANDING } from '../data/branding';

interface NavbarProps {
  onOpenInquiry: () => void;
  onOpenSaved: () => void;
  savedCount: number;
}

const navLinks = [
  { label: 'Locations', to: '/locations', icon: null },
  { label: 'Private Spaces', to: '/spaces', icon: null },
  { label: 'AI Studio', to: '/ai-studio', icon: 'sparkles' },
  { label: 'Design Builder', to: '/builder', icon: null },
  { label: 'Themes', to: '/themes', icon: null },
  { label: 'Occasions', to: '/occasions', icon: null },
  { label: 'Lookbook', to: '/lookbook', icon: null },
];

export const Navbar = ({
  onOpenInquiry,
  onOpenSaved,
  savedCount,
}: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const activeClass = 'text-[#6B1724] bg-[#FAF0E1] border border-[#DFCDB7] font-bold';
  const inactiveClass = 'text-[#4A3E39] hover:text-[#6B1724] hover:bg-[#FAF5EE] border border-transparent';

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF7F2]/96 backdrop-blur-md border-b border-[#E5D9C8] py-2.5 shadow-[0_4px_20px_rgba(80,50,30,0.07)]'
            : 'bg-gradient-to-b from-[#FAF7F2]/90 via-[#FAF7F2]/60 to-transparent py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Brand Logo */}
          <Link
            to="/"
            className="text-left group focus:outline-none flex items-center gap-3 flex-shrink-0"
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
                <span className="font-serif-display text-lg sm:text-xl font-bold tracking-[0.12em] text-[#181310] uppercase group-hover:text-[#6B1724] transition-colors">
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
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-0.5 p-1 rounded-full bg-white/90 border border-[#E5D9C8] shadow-sm text-[11px] tracking-wide uppercase font-semibold">
            <NavLink
              to="/locations"
              className={({ isActive }) =>
                `px-3 py-1.5 rounded-full transition-all cursor-pointer flex items-center gap-1 ${isActive ? activeClass : inactiveClass}`
              }
            >
              <Heart className="w-3 h-3 fill-[#DFB776] text-[#DFB776]" />
              <span>6 Locations</span>
            </NavLink>

            <NavLink to="/spaces" className={({ isActive }) => `px-3 py-1.5 rounded-full transition-all cursor-pointer ${isActive ? activeClass : inactiveClass}`}>
              Estate
            </NavLink>

            <NavLink to="/ai-studio" className={({ isActive }) => `px-3 py-1.5 rounded-full transition-all cursor-pointer flex items-center gap-1 ${isActive ? activeClass : inactiveClass}`}>
              <Sparkles className="w-3 h-3 text-[#C59A5D]" />
              <span>Love AI</span>
            </NavLink>

            <NavLink to="/builder" className={({ isActive }) => `px-3 py-1.5 rounded-full transition-all cursor-pointer ${isActive ? activeClass : inactiveClass}`}>
              Designer
            </NavLink>

            <NavLink to="/themes" className={({ isActive }) => `px-3 py-1.5 rounded-full transition-all cursor-pointer ${isActive ? activeClass : inactiveClass}`}>
              Themes
            </NavLink>

            <NavLink to="/occasions" className={({ isActive }) => `px-3 py-1.5 rounded-full transition-all cursor-pointer ${isActive ? activeClass : inactiveClass}`}>
              Occasions
            </NavLink>

            <NavLink to="/lookbook" className={({ isActive }) => `px-3 py-1.5 rounded-full transition-all cursor-pointer ${isActive ? activeClass : inactiveClass}`}>
              Lookbook
            </NavLink>
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-2 sm:gap-2.5 flex-shrink-0">
            {/* Saved Wishlist Button */}
            <NavLink
              to="/saved"
              className="relative p-2.5 rounded-full aurawed-button-secondary text-[#1E1B18] hover:border-[#C59A5D] transition-all cursor-pointer shadow-sm flex items-center justify-center"
              title="Saved Configurations"
              aria-label="View saved moodboards"
            >
              <Heart className="w-4 h-4 text-[#6B1724]" />
              {savedCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#6B1724] text-white text-[10px] font-bold rounded-full flex items-center justify-center shadow-md">
                  {savedCount}
                </span>
              )}
            </NavLink>

            {/* Book Consultation */}
            <button
              onClick={onOpenInquiry}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full aurawed-button-primary text-[11px] font-bold uppercase tracking-wider cursor-pointer"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#DFB776]" />
              <span>Book</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-full aurawed-button-secondary text-[#1E1B18] cursor-pointer"
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
            className="fixed inset-x-0 top-[65px] z-30 bg-[#FAF7F2] border-b border-[#E5D9C8] p-5 lg:hidden shadow-xl max-h-[85vh] overflow-y-auto"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `text-left text-sm uppercase tracking-wider font-semibold py-3 px-3 rounded-xl border-b border-[#EBE2D5] flex items-center justify-between transition-colors ${
                      isActive
                        ? 'text-[#6B1724] bg-[#FAF5EE]'
                        : 'text-[#1E1B18] hover:text-[#6B1724] hover:bg-[#FAF5EE]/60'
                    }`
                  }
                >
                  <span className="flex items-center gap-2">
                    {link.icon === 'sparkles' && <Sparkles className="w-4 h-4 text-[#C59A5D]" />}
                    {link.label}
                  </span>
                  {link.icon === 'sparkles' && (
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#FAF0E1] text-[#6B1724] font-bold">AI</span>
                  )}
                </NavLink>
              ))}

              <div className="pt-3 flex flex-col gap-2.5">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenInquiry();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full aurawed-button-primary text-xs uppercase tracking-widest font-bold cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 text-[#DFB776]" />
                  <span>Reserve Date / Inquire</span>
                </button>
                <NavLink
                  to="/saved"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-full aurawed-button-secondary text-xs uppercase tracking-widest font-semibold cursor-pointer"
                >
                  <Heart className="w-4 h-4 text-[#6B1724]" />
                  <span>My Saved Moodboard {savedCount > 0 ? `(${savedCount})` : ''}</span>
                </NavLink>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
