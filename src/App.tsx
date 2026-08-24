import { useState, useEffect } from 'react';
import {
  Occasion,
  VenueSpaceArea,
  DesignThemeStyle,
  DiningStyle,
  VenueTransformationTheme,
  BespokeExperienceConfig
} from './types';
import { VENUE_THEMES } from './data/venueData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WhyPrivateSection } from './components/WhyPrivateSection';
import { EstateOverviewSection } from './components/EstateOverviewSection';
import { ExperienceBuilder } from './components/ExperienceBuilder';
import { LoveAIStudio } from './components/LoveAIStudio';
import { TargetAreasSection } from './components/TargetAreasSection';
import { VenueThemesSection } from './components/VenueThemesSection';
import { VenueSpacesSection } from './components/VenueSpacesSection';
import { OccasionsSection } from './components/OccasionsSection';
import { LookbookSection } from './components/LookbookSection';
import { ThemeDetailModal } from './components/ThemeDetailModal';
import { BespokeInquiryModal } from './components/BespokeInquiryModal';
import { SavedMomentsDrawer } from './components/SavedMomentsDrawer';
import { InfoModals, InfoModalType } from './components/InfoModals';
import { LoveAIConciergeModal } from './components/LoveAIConciergeModal';
import { Footer } from './components/Footer';
import { Sparkles, Heart } from 'lucide-react';

export default function App() {
  // Experience Builder prefill / active configuration
  const [activeConfig, setActiveConfig] = useState<BespokeExperienceConfig | null>(null);

  // Modals & Drawers state
  const [activeTheme, setActiveTheme] = useState<VenueTransformationTheme | null>(null);
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);
  const [isSavedDrawerOpen, setIsSavedDrawerOpen] = useState(false);
  const [isLoveAIConciergeOpen, setIsLoveAIConciergeOpen] = useState(false);
  const [infoModalType, setInfoModalType] = useState<InfoModalType>(null);

  // Saved theme IDs in localStorage
  const [savedThemeIds, setSavedThemeIds] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem('mumbai_moments_saved_themes');
      return stored ? JSON.parse(stored) : ['celestial-glasshouse', 'rooftop-proposal'];
    } catch {
      return ['celestial-glasshouse', 'rooftop-proposal'];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('mumbai_moments_saved_themes', JSON.stringify(savedThemeIds));
    } catch {
      // ignore
    }
  }, [savedThemeIds]);

  const toggleSaveTheme = (themeId: string) => {
    setSavedThemeIds((prev) =>
      prev.includes(themeId) ? prev.filter((id) => id !== themeId) : [...prev, themeId]
    );
  };

  const removeSavedTheme = (themeId: string) => {
    setSavedThemeIds((prev) => prev.filter((id) => id !== themeId));
  };

  const clearAllSaved = () => {
    setSavedThemeIds([]);
  };

  const savedThemes = VENUE_THEMES.filter((t) => savedThemeIds.includes(t.id));

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSelectThemeForCustomization = (theme: VenueTransformationTheme) => {
    setActiveConfig((prev) => ({
      ...(prev || {
        occasion: 'Proposal',
        spaceArea: theme.spaceArea,
        themeStyle: theme.themeStyle,
        diningStyle: '5-Course Private Chef Gourmet Tasting',
        selectedAddOnIds: ['addon-violinist', 'addon-photographer'],
        customRequests: '',
        preferredSlot: '7:30 PM – Starlight Candlelight'
      }),
      themeStyle: theme.themeStyle,
      spaceArea: theme.spaceArea
    }));
    scrollToSection('experience-builder');
  };

  const handleSelectSpaceForBuilder = (spaceArea: VenueSpaceArea) => {
    setActiveConfig((prev) => ({
      ...(prev || {
        occasion: 'Proposal',
        spaceArea,
        themeStyle: 'Celestial Candlelight & Fairy Lights',
        diningStyle: '5-Course Private Chef Gourmet Tasting',
        selectedAddOnIds: ['addon-violinist', 'addon-photographer'],
        customRequests: '',
        preferredSlot: '7:30 PM – Starlight Candlelight'
      }),
      spaceArea
    }));
    scrollToSection('experience-builder');
  };

  const handleSelectOccasionForBuilder = (occasion: Occasion) => {
    setActiveConfig((prev) => ({
      ...(prev || {
        occasion,
        spaceArea: 'The Starlit Rooftop Deck',
        themeStyle: 'Grand Illuminations Proposal Marquee',
        diningStyle: '5-Course Private Chef Gourmet Tasting',
        selectedAddOnIds: ['addon-cold-pyro', 'addon-marquee-letters', 'addon-photographer'],
        customRequests: '',
        preferredSlot: '7:30 PM – Starlight Candlelight'
      }),
      occasion
    }));
    scrollToSection('experience-builder');
  };

  const handleApplyAIConfigToBuilder = (aiConfig: Partial<BespokeExperienceConfig>) => {
    setActiveConfig((prev) => ({
      ...(prev || {
        occasion: 'Proposal',
        spaceArea: 'The Glasshouse Pavilion',
        themeStyle: 'Celestial Candlelight & Fairy Lights',
        diningStyle: '5-Course Private Chef Gourmet Tasting',
        selectedAddOnIds: ['addon-cold-pyro', 'addon-marquee-letters'],
        customRequests: '',
        preferredSlot: '7:30 PM – Starlight Candlelight'
      }),
      ...aiConfig
    }));
    scrollToSection('experience-builder');
  };

  const handleBookFromConfig = (config: BespokeExperienceConfig) => {
    setActiveConfig(config);
    setIsInquiryModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FCFAF7] text-[#1E1B18] font-sans selection:bg-[#6B1724] selection:text-white relative overflow-hidden">
      {/* Ambient warm luxury background glow */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-[#C59A5D]/8 rounded-full blur-[140px]" />
        <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] bg-[#6B1724]/5 rounded-full blur-[160px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] bg-[#E5D9C8]/40 rounded-full blur-[180px]" />
      </div>

      {/* Navigation Bar */}
      <Navbar
        onOpenInquiry={() => setIsInquiryModalOpen(true)}
        onOpenSaved={() => setIsSavedDrawerOpen(true)}
        savedCount={savedThemeIds.length}
        onNavigateSection={scrollToSection}
      />

      {/* Main Content Sections */}
      <main className="relative z-10">
        {/* 1. Hero Section: Private Venue & Bespoke Studio */}
        <Hero
          onStartDesigning={() => scrollToSection('experience-builder')}
          onExploreSetups={() => scrollToSection('venue-themes')}
          onOpenLoveAI={() => scrollToSection('love-ai-studio')}
        />

        {/* 2. Why 100% Private Venue (Value Proposition vs Crowded Public Restaurants) */}
        <WhyPrivateSection onOpenInquiry={() => setIsInquiryModalOpen(true)} />

        {/* 3. The Estate Overview (Architecture, Amenities & Standard Inclusions) */}
        <EstateOverviewSection
          onOpenInquiry={() => setIsInquiryModalOpen(true)}
          onExploreThemes={() => scrollToSection('venue-themes')}
        />

        {/* 4. Targeted Mumbai Romance Corridors (Sion, Dadar, Kurla, Mahim, Wadala, Chembur) */}
        <TargetAreasSection
          onSelectAreaForBuilder={(area) => {
            handleApplyAIConfigToBuilder({
              spaceArea: area.recommendedSpace,
              themeStyle: area.recommendedTheme,
              selectedAddOnIds: area.suggestedAddOns,
              targetNeighborhood: area.id,
              customRequests: `VIP Chauffeured pickup from ${area.name}.`
            });
          }}
          onApplyConfigToBuilder={handleApplyAIConfigToBuilder}
          onNavigateSection={scrollToSection}
        />

        {/* 5. Interactive Bespoke Experience Builder (Studio Configurator) */}
        <ExperienceBuilder
          onBookExperience={handleBookFromConfig}
          onSelectTheme={setActiveTheme}
          onOpenLoveAI={() => scrollToSection('love-ai-studio')}
        />

        {/* 5. Aura Love AI Automation Studio (Proposal Speeches, Custom Timelines & Vibe Matcher) */}
        <LoveAIStudio
          onApplyConfigToBuilder={handleApplyAIConfigToBuilder}
          onNavigateSection={scrollToSection}
        />

        {/* 6. Custom Transformation Themes & Setups Gallery */}
        <VenueThemesSection
          onSelectTheme={setActiveTheme}
          onCustomizeTheme={handleSelectThemeForCustomization}
          savedThemeIds={savedThemeIds}
          onToggleSaveTheme={toggleSaveTheme}
        />

        {/* 7. Private Estate Zones & Spaces (Glasshouse, Sky Deck, Cabana, Courtyard) */}
        <VenueSpacesSection onSelectSpaceForBuilder={handleSelectSpaceForBuilder} />

        {/* 8. Milestone Occasions Tailored (Proposals, Anniversaries, Date Nights, etc.) */}
        <OccasionsSection onSelectOccasionForBuilder={handleSelectOccasionForBuilder} />

        {/* 9. Lookbook of Real Transformations & FAQs */}
        <LookbookSection onOpenInquiry={() => setIsInquiryModalOpen(true)} />
      </main>

      {/* Floating Action Button: Quick Love AI Concierge */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => setIsLoveAIConciergeOpen(true)}
          className="group flex items-center gap-2.5 px-4 sm:px-5 py-3 rounded-full bg-[#6B1724] hover:bg-[#831D2D] text-white border-2 border-[#DFB776] shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
          title="Open Love AI Concierge"
          aria-label="Open Love AI Concierge"
        >
          <div className="w-6 h-6 rounded-full bg-[#DFB776]/20 flex items-center justify-center text-[#DFB776]">
            <Sparkles className="w-4 h-4 animate-spin" style={{ animationDuration: '6s' }} />
          </div>
          <span className="text-xs sm:text-sm font-semibold tracking-wide flex items-center gap-1.5 font-serif-display">
            <span>Love AI Concierge</span>
            <Heart className="w-3.5 h-3.5 fill-[#DFB776] text-[#DFB776]" />
          </span>
        </button>
      </div>

      {/* Footer */}
      <Footer
        onNavigateSection={scrollToSection}
        onOpenInfoModal={setInfoModalType}
        onOpenInquiryModal={() => setIsInquiryModalOpen(true)}
        onOpenExperienceBuilder={() => scrollToSection('experience-builder')}
      />

      {/* Modals & Drawers */}
      {/* 1. Transformation Theme Detail Modal */}
      <ThemeDetailModal
        theme={activeTheme}
        isOpen={!!activeTheme}
        onClose={() => setActiveTheme(null)}
        onCustomizeTheme={handleSelectThemeForCustomization}
        onToggleSaveTheme={toggleSaveTheme}
        isSaved={activeTheme ? savedThemeIds.includes(activeTheme.id) : false}
      />

      {/* 2. VIP Bespoke Consultation & Booking Reservation Modal */}
      <BespokeInquiryModal
        isOpen={isInquiryModalOpen}
        onClose={() => setIsInquiryModalOpen(false)}
        initialConfig={activeConfig}
      />

      {/* 3. Saved Moodboard / Setups Drawer */}
      <SavedMomentsDrawer
        isOpen={isSavedDrawerOpen}
        onClose={() => setIsSavedDrawerOpen(false)}
        savedThemes={savedThemes}
        onRemoveSavedTheme={removeSavedTheme}
        onClearAll={clearAllSaved}
        onSelectTheme={setActiveTheme}
      />

      {/* 4. Love AI Floating Quick Concierge Modal */}
      <LoveAIConciergeModal
        isOpen={isLoveAIConciergeOpen}
        onClose={() => setIsLoveAIConciergeOpen(false)}
        onNavigateSection={scrollToSection}
      />

      {/* 5. Informational Legal, Privacy & About Modals */}
      <InfoModals
        modalType={infoModalType}
        onClose={() => setInfoModalType(null)}
        onOpenInquiry={() => {
          setInfoModalType(null);
          setIsInquiryModalOpen(true);
        }}
      />
    </div>
  );
}
