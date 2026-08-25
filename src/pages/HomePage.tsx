import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { WhyPrivateSection } from '../components/WhyPrivateSection';
import { EstateOverviewSection } from '../components/EstateOverviewSection';
import { OccasionsSection } from '../components/OccasionsSection';
import { LookbookSection } from '../components/LookbookSection';
import { BespokeInquiryModal } from '../components/BespokeInquiryModal';
import { Occasion, VenueTransformationTheme, BespokeExperienceConfig } from '../types';
import { Sparkles, ArrowRight, Heart, Star, MapPin, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import { VENUE_THEMES } from '../data/venueData';
import { ThemeDetailModal } from '../components/ThemeDetailModal';

interface HomePageProps {
  onOpenInquiry: () => void;
  savedThemeIds: string[];
  onToggleSaveTheme: (id: string) => void;
}

export const HomePage = ({ onOpenInquiry, savedThemeIds, onToggleSaveTheme }: HomePageProps) => {
  const navigate = useNavigate();
  const [activeTheme, setActiveTheme] = useState<VenueTransformationTheme | null>(null);

  const handleSelectOccasionForBuilder = (_occasion: Occasion) => {
    navigate('/builder');
  };

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div>
      <Hero
        onStartDesigning={() => navigate('/builder')}
        onExploreSetups={() => navigate('/themes')}
        onOpenLoveAI={() => navigate('/ai-studio')}
      />
      <WhyPrivateSection onOpenInquiry={onOpenInquiry} />
      <EstateOverviewSection
        onOpenInquiry={onOpenInquiry}
        onExploreThemes={() => navigate('/themes')}
      />

      {/* Featured Themes Preview */}
      <section className="py-16 sm:py-24 bg-[#FAF7F2] border-b border-[#E5D9C8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#DFCDB7] text-[#6B1724] text-xs font-semibold uppercase tracking-widest mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#C59A5D]" />
              <span>Curated Themes</span>
            </div>
            <h2 className="font-serif-display text-3xl sm:text-5xl font-bold text-[#1E1B18] tracking-tight">
              Signature Transformations
            </h2>
            <p className="text-sm sm:text-base text-[#52453E] font-light mt-3 leading-relaxed">
              Each setup is custom-crafted by our artisan team to turn our private estate into your dream scene.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {VENUE_THEMES.slice(0, 6).map((theme, i) => (
              <motion.div
                key={theme.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="aurawed-card rounded-3xl overflow-hidden cursor-pointer"
                onClick={() => setActiveTheme(theme)}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={theme.coverImage} alt={theme.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <button
                    onClick={(e) => { e.stopPropagation(); onToggleSaveTheme(theme.id); }}
                    className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 flex items-center justify-center shadow-md hover:scale-110 transition-transform cursor-pointer"
                  >
                    <Heart className={`w-4 h-4 ${savedThemeIds.includes(theme.id) ? 'fill-[#6B1724] text-[#6B1724]' : 'text-[#8C6D46]'}`} />
                  </button>
                  <div className="absolute bottom-3 left-3 right-3">
                    <h3 className="font-serif-display text-base font-bold text-white leading-tight">{theme.title}</h3>
                    <p className="text-[10px] text-[#DFB776] uppercase tracking-wider mt-0.5">{theme.spaceArea}</p>
                  </div>
                </div>
                <div className="p-4 flex items-center justify-between">
                  <span className="text-xs text-[#52453E] font-light line-clamp-1 flex-1">{theme.tagline}</span>
                  <ChevronRight className="w-4 h-4 text-[#C59A5D] flex-shrink-0 ml-2" />
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/themes" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full aurawed-button-primary text-xs uppercase tracking-widest font-bold shadow-lg">
              <span>Explore All Themes</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Locations teaser */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-[#1E160E] to-[#181310] text-white border-b border-[#362A22]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#DFB776] text-xs font-semibold uppercase tracking-widest mb-4">
              <MapPin className="w-3.5 h-3.5" />
              <span>Serving All Central Mumbai</span>
            </div>
            <h2 className="font-serif-display text-3xl sm:text-4xl font-bold tracking-tight">
              VIP Chauffeur from Your Doorstep
            </h2>
            <p className="text-sm text-white/60 font-light mt-3">Quick luxury transit from all major Mumbai corridors in 5–12 minutes.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {['Sion', 'Dadar', 'Kurla', 'Mahim', 'Wadala', 'Chembur'].map((area) => (
              <span key={area} className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm font-medium text-white/90">{area}</span>
            ))}
          </div>
          <div className="text-center">
            <Link to="/locations" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border-2 border-[#C59A5D] text-[#DFB776] text-xs uppercase tracking-widest font-bold hover:bg-[#C59A5D]/10 transition-colors">
              <span>View All Locations</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <OccasionsSection onSelectOccasionForBuilder={handleSelectOccasionForBuilder} />
      <LookbookSection onOpenInquiry={onOpenInquiry} />

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
