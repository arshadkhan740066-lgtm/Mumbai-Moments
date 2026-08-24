import React, { useState } from 'react';
import {
  MapPin,
  Car,
  Clock,
  Heart,
  Sparkles,
  ArrowRight,
  Send,
  Check,
  Copy,
  Compass,
  Music,
  Share2,
  Gift,
  ShieldCheck,
  Crown
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { TARGET_NEIGHBORHOODS } from '../data/venueData';
import { TargetNeighborhood, NeighborhoodInfo, BespokeExperienceConfig } from '../types';

interface TargetAreasSectionProps {
  onSelectAreaForBuilder: (area: NeighborhoodInfo) => void;
  onNavigateSection: (sectionId: string) => void;
  onApplyConfigToBuilder?: (config: Partial<BespokeExperienceConfig>) => void;
}

export const TargetAreasSection: React.FC<TargetAreasSectionProps> = ({
  onSelectAreaForBuilder,
  onNavigateSection,
  onApplyConfigToBuilder
}) => {
  const [selectedAreaId, setSelectedAreaId] = useState<TargetNeighborhood>('Kurla');
  const [coupleNames, setCoupleNames] = useState('');
  const [specialMemoryInput, setSpecialMemoryInput] = useState('');
  const [isGeneratingRoute, setIsGeneratingRoute] = useState(false);
  const [generatedRoute, setGeneratedRoute] = useState<{
    routeName: string;
    transitETA: string;
    romanticNarrative: string;
    steps: Array<{ stepNumber: number; title: string; time: string; detail: string }>;
    loveVowSuggestion: string;
  } | null>(null);
  const [isCopied, setIsCopied] = useState(false);

  const currentArea = TARGET_NEIGHBORHOODS.find((a) => a.id === selectedAreaId) || TARGET_NEIGHBORHOODS[0];

  const handleGenerateAIRoute = async () => {
    setIsGeneratingRoute(true);
    try {
      const response = await fetch('/api/love-ai/generate-neighborhood-date-route', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          neighborhood: currentArea.name,
          coupleNames: coupleNames || 'Rohan & Simran',
          occasion: currentArea.popularOccasion,
          specialMemory: specialMemoryInput || currentArea.romanticLandmarks.join(', '),
          preferredVibe: currentArea.vibe
        })
      });

      const data = await response.json();
      if (data.success) {
        setGeneratedRoute({
          routeName: data.routeName || `${currentArea.name} to Kurla Starlit Private Sanctuary`,
          transitETA: data.transitETA || currentArea.driveTimeMins,
          romanticNarrative: data.romanticNarrative || currentArea.loveQuote,
          steps: data.steps || [],
          loveVowSuggestion: data.loveVowSuggestion || currentArea.loveQuote
        });
      }
    } catch {
      // Fallback
      setGeneratedRoute({
        routeName: `${currentArea.name} to Kurla Starlit Private Sanctuary`,
        transitETA: currentArea.driveTimeMins,
        romanticNarrative: `Your romantic evening begins with a chauffeured luxury sedan pickup in ${currentArea.name}. Arrive at our 100% private estate in Kurla West where 500+ glowing candles, an illuminated glasshouse, and a private chef await exclusively for two.`,
        steps: [
          {
            stepNumber: 1,
            title: `VIP Chauffeur Pickup in ${currentArea.name}`,
            time: '06:45 PM',
            detail: `Doorstep arrival with chilled welcome mocktails and a fresh red rose corsage.`
          },
          {
            stepNumber: 2,
            title: 'Intimate Sunset Drive to Kurla Sanctuary',
            time: '07:05 PM',
            detail: `Enjoy an intimate sunset drive with your personalized acoustic couple playlist.`
          },
          {
            stepNumber: 3,
            title: 'Grand Reveal & Live Violinist Serenade',
            time: '07:20 PM',
            detail: `Step into the private Kurla botanical sanctuary with live acoustic violin and starlit pathway.`
          },
          {
            stepNumber: 4,
            title: '5-Course Private Chef Feast & Marquee Proposal',
            time: '08:00 PM',
            detail: `Private candlelit dinner Course by Course with personalized love toast and 4ft marquee letters.`
          },
          {
            stepNumber: 5,
            title: `Chauffeured Return to ${currentArea.name}`,
            time: '10:30 PM',
            detail: `Relaxed luxury drive back home with framed keepsake couple portrait and gift hampers.`
          }
        ],
        loveVowSuggestion: `From our cherished memories in ${currentArea.name} to this private paradise in Kurla, you will always be my home.`
      });
    } finally {
      setIsGeneratingRoute(false);
    }
  };

  const handleShareWhatsApp = () => {
    if (!generatedRoute) return;
    const text = `💍 *Bespoke Romantic Proposal Plan — Mumbai Moments*\n\n🌟 *Route:* ${generatedRoute.routeName}\n🚗 *Pickup / Transit:* ${currentArea.name} (${generatedRoute.transitETA})\n💌 *Narrative:* ${generatedRoute.romanticNarrative}\n\n*Evening Itinerary:*\n${generatedRoute.steps
      .map((s) => `• ${s.time} - ${s.title}: ${s.detail}`)
      .join('\n')}\n\n✨ *Love Vow:* "${generatedRoute.loveVowSuggestion}"\n\nReserved exclusively at Mumbai Moments Private Estate, Kurla West (BKC Corridor).`;

    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/?text=${encoded}`, '_blank');
  };

  const handleApplyToBuilder = () => {
    if (onApplyConfigToBuilder) {
      onApplyConfigToBuilder({
        spaceArea: currentArea.recommendedSpace,
        themeStyle: currentArea.recommendedTheme,
        selectedAddOnIds: currentArea.suggestedAddOns,
        targetNeighborhood: currentArea.id,
        customRequests: `VIP Chauffeured pickup from ${currentArea.name}. Couple: ${coupleNames || 'Two of Us'}. Special memory: ${specialMemoryInput || currentArea.romanticLandmarks[0]}`
      });
    } else {
      onSelectAreaForBuilder(currentArea);
    }
    onNavigateSection('experience-builder');
  };

  return (
    <section id="targeted-areas" className="py-14 sm:py-20 bg-[#FAF7F2] border-b border-[#E5D9C8] relative overflow-hidden">
      {/* Subtle Romantic Heart & Starlight Background Watermarks */}
      <div className="absolute top-6 left-1/4 opacity-10 pointer-events-none text-[#6B1724]">
        <Heart className="w-48 sm:w-64 h-48 sm:h-64 stroke-1 fill-[#DFB776]/20" />
      </div>
      <div className="absolute bottom-6 right-8 opacity-10 pointer-events-none text-[#6B1724]">
        <Sparkles className="w-36 sm:w-48 h-36 sm:h-48 stroke-1 text-[#DFB776]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-[#FAF0E1] border border-[#DFCDB7] mb-3 sm:mb-4 shadow-xs">
            <Crown className="w-3.5 h-3.5 text-[#DFB776]" />
            <span className="text-[10px] sm:text-xs uppercase tracking-wider sm:tracking-widest font-bold text-[#6B1724]">
              Prime Mumbai Locations & Flagship Kurla Venue
            </span>
          </div>

          <h2 className="font-serif-display text-2xl sm:text-4xl text-[#1E1B18] font-bold tracking-tight px-1">
            Flagship Venue Sanctuary in Kurla West
            <br />
            <span className="text-[#6B1724] italic text-xl sm:text-3xl font-medium block mt-1">
              Swift 5–12 Min VIP Access from Sion • Dadar • Kurla • Mahim • Wadala • Chembur
            </span>
          </h2>

          <p className="text-xs sm:text-base text-[#52453E] font-light mt-3 leading-relaxed max-w-2xl mx-auto">
            Centrally located in Kurla West (adjacent to BKC corridor), our 100% private estate is easily accessible for couples across Central Mumbai. Enjoy door-to-door luxury Mercedes/BMW chauffeured transfers, bespoke private chef dining, and tailor-made romantic setups.
          </p>
        </div>

        {/* 6 Targeted Neighborhood Selection Bar (Mobile-friendly Wrapping) */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8 sm:mb-10">
          {TARGET_NEIGHBORHOODS.map((area) => {
            const isSelected = area.id === selectedAreaId;
            const isKurla = area.id === 'Kurla';
            return (
              <button
                key={area.id}
                onClick={() => {
                  setSelectedAreaId(area.id);
                  setGeneratedRoute(null);
                }}
                className={`px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 flex items-center gap-1.5 sm:gap-2 cursor-pointer shadow-xs ${
                  isSelected
                    ? 'bg-[#6B1724] text-white border-2 border-[#DFB776] shadow-md scale-102 sm:scale-105'
                    : 'bg-white text-[#52453E] border border-[#DFCDB7] hover:border-[#6B1724] hover:bg-[#FAF0E1]'
                }`}
              >
                <span className="text-sm sm:text-base">{area.iconSymbol}</span>
                <span className="font-bold whitespace-nowrap">
                  {area.name} {isKurla && <span className="text-[10px] text-[#DFB776] ml-1">(Venue)</span>}
                </span>
                <span
                  className={`text-[9px] sm:text-[10px] px-1.5 sm:px-2 py-0.5 rounded-full font-medium whitespace-nowrap ${
                    isSelected ? 'bg-[#DFB776] text-[#1E1B18]' : 'bg-[#FAF0E1] text-[#6B1724]'
                  }`}
                >
                  {area.driveTimeMins}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Neighborhood Feature Card & AI Route Architect Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          {/* Left Column: Neighborhood Romance Profile (5 cols) */}
          <div className="lg:col-span-5 bg-white rounded-3xl border border-[#DFCDB7] p-5 sm:p-7 shadow-md relative overflow-hidden">
            {/* Top Badge & Love Emblem */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#EBE2D5] pb-4 mb-5">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#FAF0E1] border border-[#DFCDB7] flex items-center justify-center text-xl sm:text-2xl shadow-xs shrink-0">
                  {currentArea.iconSymbol}
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#8C6D46] block">
                    {currentArea.id === 'Kurla' ? 'Prime Venue Destination' : 'Central Mumbai Corridor'}
                  </span>
                  <h3 className="font-serif-display text-lg sm:text-xl font-bold text-[#1E1B18]">
                    {currentArea.name} Edition
                  </h3>
                </div>
              </div>

              <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center bg-[#FCFAF7] sm:bg-transparent px-3 py-1.5 sm:p-0 rounded-xl sm:rounded-none border sm:border-0 border-[#EBE2D5]">
                <span className="text-[10px] sm:text-[11px] text-[#736359]">Kurla Venue Access</span>
                <span className="text-xs sm:text-sm font-bold text-[#6B1724] flex items-center gap-1">
                  <Car className="w-3.5 h-3.5 text-[#DFB776]" />
                  {currentArea.driveTimeMins}
                </span>
              </div>
            </div>

            {/* Tagline & Love Quote */}
            <div className="mb-5 p-3.5 sm:p-4 rounded-2xl bg-[#FCFAF7] border border-[#EBE2D5]">
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#6B1724] mb-1">
                <Heart className="w-3.5 h-3.5 fill-[#DFB776] text-[#DFB776]" />
                <span>Romantic Atmosphere:</span>
              </div>
              <p className="text-xs text-[#52453E] italic leading-relaxed">
                "{currentArea.loveQuote}"
              </p>
            </div>

            {/* Key Romantic Landmarks in this Area */}
            <div className="mb-5 space-y-2">
              <span className="text-xs font-bold text-[#1E1B18] flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5 text-[#6B1724]" />
                <span>Nostalgic Couple Landmarks:</span>
              </span>
              <div className="flex flex-wrap gap-1.5">
                {currentArea.romanticLandmarks.map((lm, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] sm:text-[11px] px-2.5 py-1 rounded-full bg-[#FAF5EE] border border-[#E5D9C8] text-[#52453E]"
                  >
                    📍 {lm}
                  </span>
                ))}
              </div>
            </div>

            {/* VIP Chauffeur Pickup Perks */}
            <div className="mb-5 p-3.5 sm:p-4 rounded-2xl bg-[#FAF0E1]/80 border border-[#DFCDB7]">
              <div className="flex items-center gap-2 mb-1.5 text-xs font-bold text-[#6B1724]">
                <ShieldCheck className="w-4 h-4 text-[#DFB776] shrink-0" />
                <span>VIP Chauffeur & Transit Advantage:</span>
              </div>
              <p className="text-xs text-[#52453E] leading-relaxed">
                {currentArea.pickupHighlight}
              </p>
            </div>

            {/* Suggested Matching Setup */}
            <div className="border-t border-[#EBE2D5] pt-4 space-y-2 text-xs">
              <div className="flex justify-between items-center text-[#736359]">
                <span>Recommended Space:</span>
                <span className="font-semibold text-[#1E1B18] text-right">{currentArea.recommendedSpace}</span>
              </div>
              <div className="flex justify-between items-center text-[#736359]">
                <span>Curated Theme:</span>
                <span className="font-semibold text-[#6B1724] text-right">{currentArea.recommendedTheme}</span>
              </div>
            </div>

            {/* Quick Action Button */}
            <button
              onClick={handleApplyToBuilder}
              className="mt-5 w-full py-3 rounded-full aurawed-button-primary text-xs uppercase tracking-wider font-semibold flex items-center justify-center gap-2 cursor-pointer shadow-sm"
            >
              <Sparkles className="w-4 h-4 text-[#DFB776]" />
              <span>Customize for {currentArea.name} Couple</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Right Column: AI Neighborhood Date & Proposal Roadmap Generator (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-[#DFCDB7] p-5 sm:p-7 shadow-md">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-5">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#8C6D46] flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#DFB776] animate-pulse" />
                  <span>Aura Love AI™ Automation</span>
                </span>
                <h3 className="font-serif-display text-lg sm:text-xl font-bold text-[#1E1B18]">
                  Automated {currentArea.name} Proposal Roadmap & Story
                </h3>
              </div>

              <div className="hidden sm:flex w-9 h-9 rounded-full bg-[#FAF0E1] border border-[#DFCDB7] items-center justify-center text-[#6B1724] shrink-0">
                <Heart className="w-4 h-4 fill-[#DFB776] text-[#DFB776]" />
              </div>
            </div>

            {/* Input fields for couple personalization */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-5">
              <div>
                <label className="block text-xs font-bold text-[#1E1B18] mb-1">
                  Couple Names / Initials:
                </label>
                <input
                  type="text"
                  value={coupleNames}
                  onChange={(e) => setCoupleNames(e.target.value)}
                  placeholder="e.g. Rohan & Simran"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#DFCDB7] bg-[#FCFAF7] text-xs focus:outline-none focus:border-[#6B1724]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#1E1B18] mb-1">
                  Special Memory in {currentArea.name}:
                </label>
                <input
                  type="text"
                  value={specialMemoryInput}
                  onChange={(e) => setSpecialMemoryInput(e.target.value)}
                  placeholder={`e.g. ${currentArea.romanticLandmarks[0]}`}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#DFCDB7] bg-[#FCFAF7] text-xs focus:outline-none focus:border-[#6B1724]"
                />
              </div>
            </div>

            {/* Generate Trigger */}
            <button
              onClick={handleGenerateAIRoute}
              disabled={isGeneratingRoute}
              className="w-full py-3 px-3 rounded-full bg-[#FAF0E1] hover:bg-[#F5ECE1] border border-[#DFCDB7] text-[#6B1724] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer transition-all shadow-xs disabled:opacity-50 mb-5 text-center leading-tight"
            >
              <Sparkles className={`w-4 h-4 text-[#DFB776] shrink-0 ${isGeneratingRoute ? 'animate-spin' : ''}`} />
              <span>
                {isGeneratingRoute
                  ? `Weaving ${currentArea.name} Love Story...`
                  : `Generate AI Chauffeured Proposal Plan (${currentArea.name} → Kurla Venue)`}
              </span>
            </button>

            {/* Generated Plan Display */}
            {generatedRoute ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-[#FCFAF7] border border-[#DFCDB7] rounded-2xl p-4 sm:p-5 space-y-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#EBE2D5] pb-3">
                  <div>
                    <h4 className="font-serif-display font-bold text-sm sm:text-base text-[#1E1B18]">
                      {generatedRoute.routeName}
                    </h4>
                    <span className="text-[11px] text-[#736359] block mt-0.5">
                      Venue Transit ETA: {generatedRoute.transitETA} • 100% Private Kurla Estate
                    </span>
                  </div>

                  <div className="flex items-center gap-2 self-start sm:self-auto">
                    <button
                      onClick={handleShareWhatsApp}
                      className="px-3 py-1.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold flex items-center gap-1 cursor-pointer transition-colors shadow-xs"
                      title="Share to WhatsApp"
                    >
                      <Share2 className="w-3 h-3" />
                      <span>WhatsApp</span>
                    </button>
                    <button
                      onClick={() => {
                        const copyStr = `${generatedRoute.routeName}\n${generatedRoute.romanticNarrative}\n\n${generatedRoute.steps
                          .map((s) => `${s.time} - ${s.title}: ${s.detail}`)
                          .join('\n')}`;
                        navigator.clipboard.writeText(copyStr);
                        setIsCopied(true);
                        setTimeout(() => setIsCopied(false), 2000);
                      }}
                      className="p-1.5 rounded-full bg-white border border-[#DFCDB7] text-[#52453E] hover:text-[#1E1B18] text-xs cursor-pointer flex items-center gap-1"
                      title="Copy itinerary"
                    >
                      {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>

                <p className="text-xs text-[#52453E] italic leading-relaxed bg-white p-3 rounded-xl border border-[#EBE2D5]">
                  "{generatedRoute.romanticNarrative}"
                </p>

                {/* Steps */}
                <div className="space-y-2.5 pt-1">
                  {generatedRoute.steps.map((step) => (
                    <div
                      key={step.stepNumber}
                      className="flex items-start gap-2.5 sm:gap-3 bg-white p-2.5 sm:p-3 rounded-xl border border-[#EBE2D5]"
                    >
                      <span className="w-6 h-6 rounded-full bg-[#FAF0E1] text-[#6B1724] font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                        {step.stepNumber}
                      </span>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs font-bold text-[#1E1B18] gap-0.5 sm:gap-2">
                          <span className="truncate">{step.title}</span>
                          <span className="text-[10px] text-[#8C6D46] font-mono shrink-0">{step.time}</span>
                        </div>
                        <p className="text-[11px] text-[#736359] mt-0.5 leading-normal">{step.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Love Vow */}
                <div className="p-3 bg-[#FAF0E1] rounded-xl border border-[#DFCDB7] text-xs text-[#6B1724]">
                  <span className="font-bold block mb-0.5">💌 Curated Proposal Toast:</span>
                  <span className="italic font-serif-display">"{generatedRoute.loveVowSuggestion}"</span>
                </div>

                <button
                  onClick={handleApplyToBuilder}
                  className="w-full py-2.5 sm:py-3 rounded-full aurawed-button-primary text-xs uppercase tracking-wider font-bold flex items-center justify-center gap-2 cursor-pointer shadow-xs text-center"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#DFB776]" />
                  <span>Transfer Itinerary to Experience Builder</span>
                </button>
              </motion.div>
            ) : (
              <div className="p-6 sm:p-8 text-center bg-[#FCFAF7] rounded-2xl border border-dashed border-[#DFCDB7] space-y-3">
                <div className="w-12 h-12 rounded-full bg-[#FAF0E1] text-[#6B1724] mx-auto flex items-center justify-center text-xl">
                  {currentArea.iconSymbol}
                </div>
                <h4 className="font-serif-display font-bold text-sm text-[#1E1B18]">
                  Automate a Bespoke Date Starting from {currentArea.name}
                </h4>
                <p className="text-xs text-[#736359] max-w-sm mx-auto leading-relaxed">
                  Click the button above to generate a customized chauffeur timeline, scenic arrival cue at Kurla estate, live acoustic song transition, and private chef tasting sequence.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
