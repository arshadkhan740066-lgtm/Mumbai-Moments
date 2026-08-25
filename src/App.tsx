import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import {
  BespokeExperienceConfig,
  VenueTransformationTheme,
  VenueSpaceArea,
  Occasion
} from './types';
import { VENUE_THEMES } from './data/venueData';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { BespokeInquiryModal } from './components/BespokeInquiryModal';
import { LoveAIConciergeModal } from './components/LoveAIConciergeModal';
import { InfoModals, InfoModalType } from './components/InfoModals';
import { Sparkles, Heart } from 'lucide-react';

// Pages
import { HomePage } from './pages/HomePage';
import { SpacesPage } from './pages/SpacesPage';
import { ThemesPage } from './pages/ThemesPage';
import { BuilderPage } from './pages/BuilderPage';
import { LoveAIPage } from './pages/LoveAIPage';
import { OccasionsPage } from './pages/OccasionsPage';
import { LocationsPage } from './pages/LocationsPage';
import { LookbookPage } from './pages/LookbookPage';
import { BookPage } from './pages/BookPage';
import { SavedPage } from './pages/SavedPage';

export default function App() {
  const navigate = useNavigate();

  // Active config for the builder / inquiry modal
  const [activeConfig, setActiveConfig] = useState<BespokeExperienceConfig | null>(null);

  // Modals state
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);
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

  const handleApplyConfigToBuilder = (config: Partial<BespokeExperienceConfig>) => {
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
      ...config
    }));
    navigate('/builder');
  };

  const handleBookFromConfig = (config: BespokeExperienceConfig) => {
    setActiveConfig(config);
    setIsInquiryModalOpen(true);
  };

  const openInquiry = () => setIsInquiryModalOpen(true);

  return (
    <div className="min-h-screen bg-[#FCFAF7] text-[#1E1B18] font-sans selection:bg-[#6B1724] selection:text-white relative overflow-hidden">
      <ScrollToTop />

      {/* Ambient warm luxury background glow */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-[#C59A5D]/6 rounded-full blur-[140px]" />
        <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] bg-[#6B1724]/4 rounded-full blur-[160px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] bg-[#E5D9C8]/35 rounded-full blur-[180px]" />
      </div>

      {/* Navigation */}
      <Navbar
        onOpenInquiry={openInquiry}
        onOpenSaved={() => navigate('/saved')}
        savedCount={savedThemeIds.length}
      />

      {/* Main Content — all pages */}
      <main className="relative z-10">
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                onOpenInquiry={openInquiry}
                savedThemeIds={savedThemeIds}
                onToggleSaveTheme={toggleSaveTheme}
              />
            }
          />
          <Route
            path="/spaces"
            element={<SpacesPage onOpenInquiry={openInquiry} />}
          />
          <Route
            path="/themes"
            element={
              <ThemesPage
                savedThemeIds={savedThemeIds}
                onToggleSaveTheme={toggleSaveTheme}
                onOpenInquiry={openInquiry}
              />
            }
          />
          <Route
            path="/builder"
            element={
              <BuilderPage
                onBookExperience={handleBookFromConfig}
                onOpenInquiry={openInquiry}
              />
            }
          />
          <Route
            path="/ai-studio"
            element={
              <LoveAIPage
                onApplyConfigToBuilder={handleApplyConfigToBuilder}
                onOpenInquiry={openInquiry}
              />
            }
          />
          <Route
            path="/occasions"
            element={<OccasionsPage onOpenInquiry={openInquiry} />}
          />
          <Route
            path="/locations"
            element={
              <LocationsPage
                onApplyConfigToBuilder={handleApplyConfigToBuilder}
                onOpenInquiry={openInquiry}
              />
            }
          />
          <Route
            path="/lookbook"
            element={<LookbookPage onOpenInquiry={openInquiry} />}
          />
          <Route
            path="/book"
            element={<BookPage initialConfig={activeConfig} />}
          />
          <Route
            path="/saved"
            element={
              <SavedPage
                savedThemeIds={savedThemeIds}
                onRemoveSavedTheme={removeSavedTheme}
                onClearAll={clearAllSaved}
                onToggleSaveTheme={toggleSaveTheme}
                onOpenInquiry={openInquiry}
              />
            }
          />
          {/* 404 fallback → redirect to home */}
          <Route
            path="*"
            element={
              <div className="min-h-screen flex flex-col items-center justify-center text-center pt-32 pb-20 px-4">
                <h1 className="font-serif-display text-6xl font-bold text-[#6B1724] mb-3">404</h1>
                <p className="font-cursive text-3xl text-[#C59A5D] mb-6">Page Not Found</p>
                <p className="text-sm text-[#52453E] font-light mb-8">The page you're looking for doesn't exist. Let's get you back on track.</p>
                <button onClick={() => navigate('/')} className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full aurawed-button-primary text-xs uppercase tracking-widest font-bold cursor-pointer">
                  <Heart className="w-4 h-4 text-[#DFB776]" />
                  <span>Return Home</span>
                </button>
              </div>
            }
          />
        </Routes>
      </main>

      {/* Floating AI Concierge Button */}
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
        onNavigateSection={(sectionId) => {
          const routes: Record<string, string> = {
            'estate-overview': '/spaces',
            'experience-builder': '/builder',
            'venue-themes': '/themes',
            'private-spaces': '/spaces',
            'love-ai-studio': '/ai-studio',
            'targeted-areas': '/locations',
            'occasions': '/occasions',
            'lookbook': '/lookbook',
            'why-private': '/',
          };
          const route = routes[sectionId];
          if (route) navigate(route);
        }}
        onOpenInfoModal={setInfoModalType}
        onOpenInquiryModal={openInquiry}
        onOpenExperienceBuilder={() => navigate('/builder')}
      />

      {/* Global Modals */}
      <BespokeInquiryModal
        isOpen={isInquiryModalOpen}
        onClose={() => setIsInquiryModalOpen(false)}
        initialConfig={activeConfig}
      />

      <LoveAIConciergeModal
        isOpen={isLoveAIConciergeOpen}
        onClose={() => setIsLoveAIConciergeOpen(false)}
        onNavigateSection={(sectionId) => {
          const routes: Record<string, string> = {
            'experience-builder': '/builder',
            'love-ai-studio': '/ai-studio',
            'venue-themes': '/themes',
          };
          const route = routes[sectionId];
          if (route) navigate(route);
        }}
      />

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
