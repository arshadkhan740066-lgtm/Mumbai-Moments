import React, { useState } from 'react';
import {
  Sparkles,
  Heart,
  Scroll,
  Clock,
  Music,
  Copy,
  Check,
  RotateCcw,
  Send,
  Wand2,
  Calendar,
  Compass,
  FileText,
  Volume2,
  Star,
  Flame,
  Wine,
  Shield,
  Crown,
  Share2,
  Download
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Occasion, BespokeExperienceConfig, VenueSpaceArea, DesignThemeStyle, DiningStyle, TargetNeighborhood } from '../types';
import { TARGET_NEIGHBORHOODS } from '../data/venueData';

interface LoveAIStudioProps {
  onApplyConfigToBuilder?: (config: Partial<BespokeExperienceConfig>) => void;
  onOpenBookingWithLetter?: (letter: string, partnerName: string) => void;
  onNavigateSection?: (sectionId: string) => void;
}

type StudioTab = 'love-words' | 'surprise-itinerary' | 'vibe-matcher' | 'couple-seal';

export const LoveAIStudio: React.FC<LoveAIStudioProps> = ({
  onApplyConfigToBuilder,
  onOpenBookingWithLetter,
  onNavigateSection
}) => {
  const [activeTab, setActiveTab] = useState<StudioTab>('love-words');

  // --- 1. Love Words State ---
  const [partnerName, setPartnerName] = useState('');
  const [yourName, setYourName] = useState('');
  const [occasion, setOccasion] = useState<Occasion>('Proposal');
  const [tone, setTone] = useState('Deeply Emotional & Poetic');
  const [specialMemories, setSpecialMemories] = useState('');
  const [favoriteThings, setFavoriteThings] = useState('');
  const [languageStyle, setLanguageStyle] = useState('Refined English with subtle romantic shayari nuance');
  const [generatedLetter, setGeneratedLetter] = useState<string | null>(null);
  const [isGeneratingLetter, setIsGeneratingLetter] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  // --- 2. Itinerary State ---
  const [itineraryOccasion, setItineraryOccasion] = useState<Occasion>('Proposal');
  const [spaceArea, setSpaceArea] = useState<VenueSpaceArea>('The Glasshouse Pavilion');
  const [themeStyle, setThemeStyle] = useState<DesignThemeStyle>('Celestial Candlelight & Fairy Lights');
  const [partnerPersonality, setPartnerPersonality] = useState('Appreciates heartfelt deep emotion, soft acoustic music, and cinematic reveals');
  const [surpriseLevel, setSurpriseLevel] = useState('Grand & Cinematic with live violin & cold pyro');
  const [generatedTimeline, setGeneratedTimeline] = useState<any[] | null>(null);
  const [curatorAdvice, setCuratorAdvice] = useState<string | null>(null);
  const [recommendedSongs, setRecommendedSongs] = useState<string[]>([]);
  const [isGeneratingTimeline, setIsGeneratingTimeline] = useState(false);

  // --- 3. Vibe Matcher Quiz State ---
  const [quizStep, setQuizStep] = useState(1);
  const [quizAnswers, setQuizAnswers] = useState({
    dreamSetting: 'Starlit glasshouse surrounded by 500+ warm candlelight lanterns',
    musicTaste: 'Emotional acoustic live violin & classical romantic melodies',
    partnerStyle: 'Loves grand, cinematic surprises with photo-worthy details',
    favoriteCuisine: '5-Course fine dining gourmet tasting crafted by a private chef'
  });
  const [vibeMatchResult, setVibeMatchResult] = useState<any | null>(null);
  const [isMatchingVibe, setIsMatchingVibe] = useState(false);

  // --- 4. Couple Monogram & Love Keepsake State ---
  const [monogramInitials, setMonogramInitials] = useState({ p1: 'R', p2: 'S' });
  const [monogramStyle, setMonogramStyle] = useState<'royal-gold' | 'infinity-knot' | 'rose-sanctum'>('royal-gold');
  const [customVowKeepsake, setCustomVowKeepsake] = useState('Together in our private paradise — today, tomorrow, always.');
  const [isKeepsakeCopied, setIsKeepsakeCopied] = useState(false);

  // --- Handlers ---
  const handleGenerateLetter = async () => {
    setIsGeneratingLetter(true);
    setGeneratedLetter(null);

    try {
      const response = await fetch('/api/love-ai/generate-letter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          partnerName: partnerName || 'My Love',
          yourName: yourName || 'Forever Yours',
          occasion,
          tone,
          specialMemories,
          favoriteThings,
          languageStyle
        })
      });

      const data = await response.json();
      if (data.success && data.content) {
        setGeneratedLetter(data.content);
      } else {
        setGeneratedLetter(
          `My Dearest ${partnerName || 'Love'},\n\nFrom the moment you walked into my life, you turned every ordinary Mumbai evening into pure magic. Remembering ${specialMemories || 'all our shared laughs and quiet walks'} fills my heart with an overwhelming sense of gratitude.\n\nTonight, in this private sanctuary illuminated just for us, I give you my whole heart and promise to love and cherish you every single day.\n\nForever and always,\n${yourName || 'Your Love'}`
        );
      }
    } catch (err) {
      // Fallback
      setGeneratedLetter(
        `My Dearest ${partnerName || 'Love'},\n\nFrom the very first day, your smile made Mumbai feel like the most romantic place on earth. Every memory we've created together is my most prized treasure.\n\nTonight, surrounded by starlight and candlelight, I want you to know that choosing you is the easiest, truest decision I will ever make.\n\nYours always,\n${yourName || 'Your Love'}`
      );
    } finally {
      setIsGeneratingLetter(false);
    }
  };

  const handleCopyLetter = () => {
    if (!generatedLetter) return;
    navigator.clipboard.writeText(generatedLetter);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2500);
  };

  const handleGenerateTimeline = async () => {
    setIsGeneratingTimeline(true);
    setGeneratedTimeline(null);

    try {
      const response = await fetch('/api/love-ai/curate-timeline', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          occasion: itineraryOccasion,
          spaceArea,
          themeStyle,
          partnerPersonality,
          surpriseLevel,
          selectedAddOns: ['Live Violinist', 'Cold Pyro Fountains', '4ft Marquee Letters', '4K Memory Cinema']
        })
      });

      const data = await response.json();
      if (data.success && data.timeline) {
        setGeneratedTimeline(data.timeline);
        setCuratorAdvice(data.curatorAdvice || null);
        setRecommendedSongs(data.recommendedSongChoices || [
          "Perfect — Ed Sheeran (Violin Acoustic)",
          "Can't Help Falling in Love — Kina Grannis",
          "Kesariya — Instrumental Acoustic Live"
        ]);
      } else {
        // Fallback
        setGeneratedTimeline([
          { time: "07:00 PM", phase: "Blindfold Arrival & Lantern Walk", description: "Chauffeured drop-off at Pali Hill. Hand-in-hand walk down a 500-candle pathway with soft ambient mist." },
          { time: "07:20 PM", phase: "Champagne Uncorking & Live Violin", description: "Private estate reveal with chilled Moët champagne and live acoustic violin playing their favorite melody." },
          { time: "07:45 PM", phase: "The Climax (The Proposal / Big Reveal)", description: "4ft illuminated Marquee letters light up with soft cold pyro sparkle fountains as you present your love letter." },
          { time: "08:15 PM", phase: "Private Chef 5-Course Tasting", description: "Candlelit dining served course-by-course under the illuminated glasshouse canopy." },
          { time: "09:30 PM", phase: "4K Memory Cinema & Slow Dance", description: "Private outdoor projection of your couple photo milestones followed by slow dancing under the starlight." }
        ]);
        setCuratorAdvice("Our discreet photographer will stay hidden in the greenery until the proposal moment so your partner suspects nothing.");
      }
    } catch {
      setGeneratedTimeline([
        { time: "07:00 PM", phase: "Chauffeured Entrance", description: "Arrival at the private Bandra estate. Fairy light pathway reveal." },
        { time: "07:30 PM", phase: "Proposal Moment", description: "Marquee letters ignite, live acoustic violin serenade." },
        { time: "08:00 PM", phase: "Private Chef Feast", description: "Gourmet multi-course tasting under the glasshouse." },
        { time: "09:15 PM", phase: "Memory Cinema Screening", description: "Starlit movie projection and dessert champagne toast." }
      ]);
    } finally {
      setIsGeneratingTimeline(false);
    }
  };

  const handleRunVibeMatcher = async () => {
    setIsMatchingVibe(true);
    setVibeMatchResult(null);

    try {
      const response = await fetch('/api/love-ai/match-vibe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ answers: quizAnswers })
      });

      const data = await response.json();
      if (data.success) {
        setVibeMatchResult(data);
      } else {
        setVibeMatchResult({
          matchName: "The Celestial Starlit Glasshouse Sanctuary",
          recommendedSpace: "The Glasshouse Pavilion",
          recommendedTheme: "Celestial Candlelight & Fairy Lights",
          recommendedDining: "5-Course Private Chef Gourmet Tasting",
          recommendedAddOns: ["violinist", "photographer", "cinematic-video"],
          matchReasoning: "Your answers highlight an appreciation for refined intimacy, ethereal starlight, and emotional live acoustic melodies."
        });
      }
    } catch {
      setVibeMatchResult({
        matchName: "The Celestial Starlit Glasshouse Sanctuary",
        recommendedSpace: "The Glasshouse Pavilion",
        recommendedTheme: "Celestial Candlelight & Fairy Lights",
        recommendedDining: "5-Course Private Chef Gourmet Tasting",
        recommendedAddOns: ["violinist", "photographer", "cinematic-video"],
        matchReasoning: "Your dream vision perfectly aligns with our signature Glasshouse transformation."
      });
    } finally {
      setIsMatchingVibe(false);
    }
  };

  const applyVibeToBuilder = () => {
    if (!vibeMatchResult) return;
    if (onApplyConfigToBuilder) {
      onApplyConfigToBuilder({
        spaceArea: vibeMatchResult.recommendedSpace,
        themeStyle: vibeMatchResult.recommendedTheme,
        diningStyle: vibeMatchResult.recommendedDining,
        selectedAddOnIds: vibeMatchResult.recommendedAddOns || ['violinist', 'photographer']
      });
    }
    if (onNavigateSection) {
      onNavigateSection('experience-builder');
    }
  };

  return (
    <section id="love-ai-studio" className="py-20 bg-[#FFFDFB] border-b border-[#E8D9DC] relative overflow-hidden">
      {/* Background luxury elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#8F3F50]/4 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#C9A15B]/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F8EDEF] border border-[#E8D9DC] text-[#8F3F50] text-xs font-semibold uppercase tracking-widest mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#C9A15B]" />
            <span>Aura Love AI™ Concierge</span>
          </div>

          <h2 className="font-serif-display text-3xl sm:text-5xl font-bold text-[#241E20] tracking-tight mb-4">
            Love AI Automation Suite
          </h2>

          <p className="text-sm sm:text-base text-[#5C4E52] font-light leading-relaxed">
            Let our romantic artificial intelligence craft your personalized proposal speech, tailor a minute-by-minute surprise itinerary, and curate the perfect estate setup tailored to your partner.
          </p>

          {/* Navigation Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-8 p-1.5 bg-[#F8EDEF] rounded-full max-w-2xl mx-auto border border-[#E8D9DC]">
            <button
              onClick={() => setActiveTab('love-words')}
              className={`flex-1 py-2.5 px-3.5 rounded-full text-xs font-semibold tracking-wider transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                activeTab === 'love-words'
                  ? 'bg-[#8F3F50] text-white shadow-md'
                  : 'text-[#5C4E52] hover:text-[#241E20]'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Love Words</span>
            </button>

            <button
              onClick={() => setActiveTab('surprise-itinerary')}
              className={`flex-1 py-2.5 px-3.5 rounded-full text-xs font-semibold tracking-wider transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                activeTab === 'surprise-itinerary'
                  ? 'bg-[#8F3F50] text-white shadow-md'
                  : 'text-[#5C4E52] hover:text-[#241E20]'
              }`}
            >
              <Clock className="w-3.5 h-3.5" />
              <span>Surprise Itinerary</span>
            </button>

            <button
              onClick={() => setActiveTab('vibe-matcher')}
              className={`flex-1 py-2.5 px-3.5 rounded-full text-xs font-semibold tracking-wider transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                activeTab === 'vibe-matcher'
                  ? 'bg-[#8F3F50] text-white shadow-md'
                  : 'text-[#5C4E52] hover:text-[#241E20]'
              }`}
            >
              <Compass className="w-3.5 h-3.5" />
              <span>Vibe Matcher</span>
            </button>

            <button
              onClick={() => setActiveTab('couple-seal')}
              className={`flex-1 py-2.5 px-3.5 rounded-full text-xs font-semibold tracking-wider transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                activeTab === 'couple-seal'
                  ? 'bg-[#8F3F50] text-white shadow-md'
                  : 'text-[#5C4E52] hover:text-[#241E20]'
              }`}
            >
              <Crown className="w-3.5 h-3.5 text-[#C9A15B]" />
              <span>Love Monogram</span>
            </button>
          </div>
        </div>

        {/* Tab Content Panes */}
        <div className="max-w-5xl mx-auto">
          {/* TAB 1: LOVE WORDS & PROPOSAL SPEECH GENERATOR */}
          {activeTab === 'love-words' && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
            >
              {/* Form Input Column */}
              <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-3xl border border-[#E8D9DC] shadow-sm space-y-4">
                <div className="flex items-center gap-2 pb-3 border-b border-[#F8EDEF]">
                  <Wand2 className="w-4 h-4 text-[#C9A15B]" />
                  <h3 className="font-serif-display text-lg font-bold text-[#241E20]">
                    Personalize Your Romantic Message
                  </h3>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-[#5C4E52] uppercase tracking-wider mb-1">
                      Partner's Name
                    </label>
                    <input
                      type="text"
                      value={partnerName}
                      onChange={(e) => setPartnerName(e.target.value)}
                      placeholder="e.g. Ananya"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#E8D9DC] bg-[#FFFDFB] text-sm focus:outline-none focus:border-[#8F3F50]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#5C4E52] uppercase tracking-wider mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      value={yourName}
                      onChange={(e) => setYourName(e.target.value)}
                      placeholder="e.g. Rohan"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#E8D9DC] bg-[#FFFDFB] text-sm focus:outline-none focus:border-[#8F3F50]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-[#5C4E52] uppercase tracking-wider mb-1">
                      Occasion
                    </label>
                    <select
                      value={occasion}
                      onChange={(e) => setOccasion(e.target.value as Occasion)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#E8D9DC] bg-[#FFFDFB] text-xs focus:outline-none focus:border-[#8F3F50]"
                    >
                      <option value="Proposal">💍 Marriage Proposal</option>
                      <option value="Anniversary">🥂 Milestone Anniversary</option>
                      <option value="Date Night">✨ Ultra-Luxe Date Night</option>
                      <option value="Birthday Celebration">🎂 Private Birthday Surprise</option>
                      <option value="Intimate Engagement">💍 Intimate Engagement</option>
                      <option value="Candlelight Surprise">🕯️ Candlelight Surprise</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#5C4E52] uppercase tracking-wider mb-1">
                      Emotional Tone
                    </label>
                    <select
                      value={tone}
                      onChange={(e) => setTone(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#E8D9DC] bg-[#FFFDFB] text-xs focus:outline-none focus:border-[#8F3F50]"
                    >
                      <option value="Deeply Emotional & Poetic">Deeply Emotional & Poetic</option>
                      <option value="Tearjerker & Heartfelt">Tearjerker & Heartfelt</option>
                      <option value="Romantic with Hindi-English Shayari flair">Hindi-English Poetic Touch</option>
                      <option value="Playful, Sweet & Loving">Playful, Sweet & Loving</option>
                      <option value="Classic Timeless Elegance">Classic Timeless Elegance</option>
                    </select>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="block text-xs font-semibold text-[#5C4E52] uppercase tracking-wider">
                      Special Memories / Mumbai Love Story
                    </label>
                  </div>

                  {/* Neighborhood Quick Prompt Chips */}
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {TARGET_NEIGHBORHOODS.map((nh) => (
                      <button
                        key={nh.id}
                        type="button"
                        onClick={() => {
                          setSpecialMemories(
                            `Our memories in ${nh.name} (${nh.romanticLandmarks[0]}), sunset walks, and shared laughter...`
                          );
                        }}
                        className="text-[10px] px-2 py-0.5 rounded-full bg-[#FFFDFB] hover:bg-[#F8EDEF] border border-[#E8D9DC] text-[#8F3F50] font-medium transition-colors cursor-pointer"
                      >
                        {nh.iconSymbol} {nh.name} Memory
                      </button>
                    ))}
                  </div>

                  <textarea
                    rows={2}
                    value={specialMemories}
                    onChange={(e) => setSpecialMemories(e.target.value)}
                    placeholder="e.g. Our first chai date in Bandra, Five Gardens walks in Wadala, sunset at Dadar Chowpatty..."
                    className="w-full px-3.5 py-2 rounded-xl border border-[#E8D9DC] bg-[#FFFDFB] text-xs focus:outline-none focus:border-[#8F3F50] resize-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#5C4E52] uppercase tracking-wider mb-1">
                    Favorite Inside Jokes / Promises
                  </label>
                  <input
                    type="text"
                    value={favoriteThings}
                    onChange={(e) => setFavoriteThings(e.target.value)}
                    placeholder="e.g. Always holding hands through flights, making breakfast on Sundays"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#E8D9DC] bg-[#FFFDFB] text-xs focus:outline-none focus:border-[#8F3F50]"
                  />
                </div>

                <button
                  onClick={handleGenerateLetter}
                  disabled={isGeneratingLetter}
                  className="w-full py-3.5 rounded-full aurawed-button-primary text-xs uppercase tracking-widest font-bold flex items-center justify-center gap-2 cursor-pointer shadow-md hover:shadow-lg disabled:opacity-50"
                >
                  {isGeneratingLetter ? (
                    <>
                      <Sparkles className="w-4 h-4 animate-spin text-[#C9A15B]" />
                      <span>Composing Bespoke Romantic Words...</span>
                    </>
                  ) : (
                    <>
                      <Wand2 className="w-4 h-4 text-[#C9A15B]" />
                      <span>Generate Romantic Speech & Letter</span>
                    </>
                  )}
                </button>
              </div>

              {/* Output Preview Column - Vintage Parchment Styling */}
              <div className="lg:col-span-6">
                <div className="bg-[#F8EDEF] rounded-3xl p-6 sm:p-8 border-2 border-[#E8D9DC] shadow-xl relative min-h-[460px] flex flex-col justify-between">
                  {/* Wax Seal Monogram Badge */}
                  <div className="absolute -top-4 right-6 w-12 h-12 rounded-full bg-[#8F3F50] border-2 border-[#C9A15B] shadow-md flex items-center justify-center text-white">
                    <Heart className="w-5 h-5 fill-[#C9A15B] text-[#C9A15B]" />
                  </div>

                  <div>
                    <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#C9A15B] mb-4 pb-2 border-b border-[#E8D9DC]">
                      <Scroll className="w-4 h-4 text-[#C9A15B]" />
                      <span>Vintage Keepsake Parchment Preview</span>
                    </div>

                    {isGeneratingLetter ? (
                      <div className="py-16 text-center space-y-3">
                        <Sparkles className="w-8 h-8 text-[#C9A15B] animate-spin mx-auto" />
                        <p className="text-sm font-cursive text-2xl text-[#8F3F50]">
                          Weaving your love memories into poetry...
                        </p>
                        <p className="text-xs text-[#5C4E52]">
                          Gemini 3.7 Flash Romantic Architecture Engine
                        </p>
                      </div>
                    ) : generatedLetter ? (
                      <div className="space-y-4">
                        <div className="font-serif-display text-sm sm:text-base text-[#241E20] leading-relaxed whitespace-pre-line italic bg-[#F8EDEF]/60 p-5 rounded-2xl border border-[#E8D9DC]">
                          "{generatedLetter}"
                        </div>
                      </div>
                    ) : (
                      <div className="py-16 text-center space-y-3 text-[#5C4E52]">
                        <Scroll className="w-12 h-12 text-[#E8D9DC] mx-auto" />
                        <h4 className="font-serif-display text-lg font-bold text-[#241E20]">
                          Your Custom Letter Will Appear Here
                        </h4>
                        <p className="text-xs max-w-xs mx-auto text-[#5C4E52]">
                          Fill in your partner's name and details on the left, then click "Generate" to craft a breathtaking keepsake.
                        </p>
                      </div>
                    )}
                  </div>

                  {generatedLetter && (
                    <div className="pt-4 border-t border-[#E8D9DC] flex flex-wrap items-center justify-between gap-3 mt-4">
                      <button
                        onClick={handleCopyLetter}
                        className="px-4 py-2 rounded-full bg-white border border-[#E8D9DC] text-xs font-semibold text-[#241E20] flex items-center gap-1.5 cursor-pointer hover:bg-[#F8EDEF] transition-colors"
                      >
                        {isCopied ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-600" />
                            <span className="text-emerald-700">Copied to Clipboard!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5 text-[#C9A15B]" />
                            <span>Copy Letter</span>
                          </>
                        )}
                      </button>

                      {onOpenBookingWithLetter && (
                        <button
                          onClick={() => onOpenBookingWithLetter(generatedLetter, partnerName)}
                          className="px-5 py-2 rounded-full aurawed-button-primary text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 cursor-pointer shadow-sm"
                        >
                          <Send className="w-3.5 h-3.5" />
                          <span>Print On Vintage Table Parchment</span>
                        </button>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 2: SURPRISE ITINERARY SEQUENCER */}
          {activeTab === 'surprise-itinerary' && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
            >
              {/* Form Input Column */}
              <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-3xl border border-[#E8D9DC] shadow-sm space-y-4">
                <div className="flex items-center gap-2 pb-3 border-b border-[#F8EDEF]">
                  <Clock className="w-4 h-4 text-[#C9A15B]" />
                  <h3 className="font-serif-display text-lg font-bold text-[#241E20]">
                    Configure Your Evening Flow
                  </h3>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#5C4E52] uppercase tracking-wider mb-1">
                    Celebration Occasion
                  </label>
                  <select
                    value={itineraryOccasion}
                    onChange={(e) => setItineraryOccasion(e.target.value as Occasion)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#E8D9DC] bg-[#FFFDFB] text-xs focus:outline-none focus:border-[#8F3F50]"
                  >
                    <option value="Proposal">💍 Marriage Proposal Secret Flow</option>
                    <option value="Anniversary">🥂 Milestone Anniversary Toast</option>
                    <option value="Date Night">✨ Romantic Candlelight Date</option>
                    <option value="Birthday Celebration">🎂 Birthday Surprise Dinner</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#5C4E52] uppercase tracking-wider mb-1">
                    Private Estate Space
                  </label>
                  <select
                    value={spaceArea}
                    onChange={(e) => setSpaceArea(e.target.value as VenueSpaceArea)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#E8D9DC] bg-[#FFFDFB] text-xs focus:outline-none focus:border-[#8F3F50]"
                  >
                    <option value="The Glasshouse Pavilion">The Glasshouse Pavilion (All-Weather Crystal Dome)</option>
                    <option value="The Starlit Rooftop Deck">The Starlit Rooftop Deck (Skyline Panorama)</option>
                    <option value="The Sunset Oceanview Cabana">The Sunset Oceanview Cabana (Arabian Sea Breeze)</option>
                    <option value="The Candlelit Garden Courtyard">The Candlelit Garden Courtyard (Enchanted Ivy)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#5C4E52] uppercase tracking-wider mb-1">
                    Partner's Vibe & Energy
                  </label>
                  <textarea
                    rows={2}
                    value={partnerPersonality}
                    onChange={(e) => setPartnerPersonality(e.target.value)}
                    placeholder="e.g. Loves emotional moments, surprises, private acoustic music, and gourmet food"
                    className="w-full px-3.5 py-2 rounded-xl border border-[#E8D9DC] bg-[#FFFDFB] text-xs focus:outline-none focus:border-[#8F3F50] resize-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#5C4E52] uppercase tracking-wider mb-1">
                    Surprise Reveal Impact
                  </label>
                  <select
                    value={surpriseLevel}
                    onChange={(e) => setSurpriseLevel(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#E8D9DC] bg-[#FFFDFB] text-xs focus:outline-none focus:border-[#8F3F50]"
                  >
                    <option value="Grand & Cinematic with live violin & cold pyro">Grand & Cinematic (Pyro + Marquee + Violin)</option>
                    <option value="Intimate & Emotional Candlelight Whisper">Intimate & Emotional (Private Table Whisper)</option>
                    <option value="Memory Cinema Nostalgic Screening">Memory Cinema (4K Photo Movie Under Stars)</option>
                  </select>
                </div>

                <button
                  onClick={handleGenerateTimeline}
                  disabled={isGeneratingTimeline}
                  className="w-full py-3.5 rounded-full aurawed-button-primary text-xs uppercase tracking-widest font-bold flex items-center justify-center gap-2 cursor-pointer shadow-md hover:shadow-lg disabled:opacity-50"
                >
                  {isGeneratingTimeline ? (
                    <>
                      <Sparkles className="w-4 h-4 animate-spin text-[#C9A15B]" />
                      <span>Sequencing Minute-by-Minute Magic...</span>
                    </>
                  ) : (
                    <>
                      <Clock className="w-4 h-4 text-[#C9A15B]" />
                      <span>Sequence Surprise Itinerary</span>
                    </>
                  )}
                </button>
              </div>

              {/* Timeline Output Column */}
              <div className="lg:col-span-7">
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8D9DC] shadow-md min-h-[460px]">
                  <div className="flex items-center justify-between pb-4 border-b border-[#F8EDEF] mb-6">
                    <div>
                      <h4 className="font-serif-display text-xl font-bold text-[#241E20]">
                        3-Hour VIP Private Estate Schedule
                      </h4>
                      <p className="text-xs text-[#C9A15B] font-medium">
                        Seamlessly coordinated with private butler, chef & AV crew
                      </p>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-[#F8EDEF] text-[#8F3F50] font-semibold text-xs border border-[#E8D9DC]">
                      100% Private
                    </span>
                  </div>

                  {isGeneratingTimeline ? (
                    <div className="py-20 text-center space-y-3">
                      <Sparkles className="w-8 h-8 text-[#C9A15B] animate-spin mx-auto" />
                      <p className="font-cursive text-2xl text-[#8F3F50]">
                        Orchestrating the perfect romantic surprise cues...
                      </p>
                    </div>
                  ) : generatedTimeline ? (
                    <div className="space-y-6">
                      {/* Timeline Items */}
                      <div className="space-y-4 relative before:absolute before:top-3 before:bottom-3 before:left-[19px] before:w-0.5 before:bg-[#E8D9DC]">
                        {generatedTimeline.map((item, idx) => (
                          <div key={idx} className="relative flex items-start gap-4">
                            <div className="w-10 h-10 rounded-full bg-[#F8EDEF] border-2 border-[#8F3F50] flex items-center justify-center text-[#8F3F50] font-bold text-xs shrink-0 shadow-xs z-10">
                              {idx + 1}
                            </div>
                            <div className="bg-[#FFFDFB] p-4 rounded-2xl border border-[#E8D9DC] flex-1">
                              <div className="flex flex-wrap items-center justify-between gap-1 mb-1">
                                <span className="font-serif-display font-bold text-[#241E20] text-sm">
                                  {item.phase}
                                </span>
                                <span className="text-xs font-mono font-bold text-[#8F3F50] bg-white px-2 py-0.5 rounded-md border border-[#E8D9DC]">
                                  {item.time}
                                </span>
                              </div>
                              <p className="text-xs text-[#5C4E52] leading-relaxed">
                                {item.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Curator Insider Advice */}
                      {curatorAdvice && (
                        <div className="p-4 rounded-2xl bg-[#F8EDEF] border border-[#E8D9DC] flex items-start gap-3">
                          <Star className="w-4 h-4 text-[#C9A15B] shrink-0 mt-0.5" />
                          <div className="text-xs text-[#241E20]">
                            <strong className="font-semibold text-[#241E20]">Director's Secret Touch: </strong>
                            {curatorAdvice}
                          </div>
                        </div>
                      )}

                      {/* Recommended Melodies */}
                      {recommendedSongs.length > 0 && (
                        <div className="pt-3 border-t border-[#F8EDEF]">
                          <div className="flex items-center gap-2 text-xs font-semibold text-[#C9A15B] uppercase tracking-wider mb-2">
                            <Music className="w-3.5 h-3.5 text-[#C9A15B]" />
                            <span>Recommended Background Melodies</span>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {recommendedSongs.map((song, i) => (
                              <span key={i} className="text-xs px-3 py-1 bg-[#F8EDEF] text-[#8F3F50] rounded-full border border-[#E8D9DC]">
                                🎵 {song}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="py-20 text-center space-y-3 text-[#5C4E52]">
                      <Clock className="w-12 h-12 text-[#E8D9DC] mx-auto" />
                      <h5 className="font-serif-display text-lg font-bold text-[#241E20]">
                        Surprise Sequence Ready to Orchestrate
                      </h5>
                      <p className="text-xs max-w-sm mx-auto">
                        Choose your preferred space and surprise impact level, then hit "Sequence Surprise Itinerary" to generate your custom timeline.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 3: LOVE VIBE MATCHER QUIZ */}
          {activeTab === 'vibe-matcher' && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E8D9DC] shadow-md max-w-3xl mx-auto"
            >
              {!vibeMatchResult ? (
                <div className="space-y-6">
                  <div className="text-center pb-4 border-b border-[#F8EDEF]">
                    <span className="text-xs font-semibold uppercase tracking-widest text-[#C9A15B]">
                      Questionnaire • Step {quizStep} of 4
                    </span>
                    <h3 className="font-serif-display text-2xl font-bold text-[#241E20] mt-1">
                      {quizStep === 1 && "What atmosphere describes your dream evening?"}
                      {quizStep === 2 && "What musical vibe touches their soul?"}
                      {quizStep === 3 && "What kind of surprise creates the biggest smile?"}
                      {quizStep === 4 && "What gourmet dining style do you desire?"}
                    </h3>
                  </div>

                  {/* Step 1 Options */}
                  {quizStep === 1 && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      {[
                        { label: "Starlit glasshouse surrounded by 500+ warm candlelight lanterns", title: "Glasshouse Starlight", icon: "✨" },
                        { label: "Rooftop panoramic skyline with cold pyro and champagne under stars", title: "Skyline Panorama", icon: "🌆" },
                        { label: "Boho sunset cabana with pampas grass, macrame and Arabian sea breeze", title: "Bohemian Sunset", icon: "🌾" },
                        { label: "Enchanted floral garden courtyard with lush roses and ivy canopy", title: "Enchanted Courtyard", icon: "🌹" },
                      ].map((opt, i) => (
                        <button
                          key={i}
                          onClick={() => {
                            setQuizAnswers((prev) => ({ ...prev, dreamSetting: opt.label }));
                            setQuizStep(2);
                          }}
                          className="p-5 rounded-2xl border border-[#E8D9DC] bg-[#FFFDFB] hover:bg-[#F8EDEF] hover:border-[#8F3F50] text-left transition-all cursor-pointer group"
                        >
                          <div className="text-2xl mb-2">{opt.icon}</div>
                          <div className="font-serif-display font-bold text-sm text-[#241E20] group-hover:text-[#8F3F50]">
                            {opt.title}
                          </div>
                          <div className="text-xs text-[#5C4E52] mt-1">
                            {opt.label}
                          </div>
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Step 2 Options */}
                  {quizStep === 2 && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      {[
                        { label: "Emotional acoustic live violin & classical romantic melodies", title: "Live Acoustic Violin", icon: "🎻" },
                        { label: "Curated vintage vinyl record playlist & slow jazz", title: "Vintage Jazz & Vinyl", icon: "🎷" },
                        { label: "Bollywood acoustic romantic ballads and Hindi unplugged", title: "Bollywood Unplugged", icon: "🎶" },
                        { label: "Modern chillout romantic ambient beats", title: "Ambient Romance", icon: "🎧" },
                      ].map((opt, i) => (
                        <button
                          key={i}
                          onClick={() => {
                            setQuizAnswers((prev) => ({ ...prev, musicTaste: opt.label }));
                            setQuizStep(3);
                          }}
                          className="p-5 rounded-2xl border border-[#E8D9DC] bg-[#FFFDFB] hover:bg-[#F8EDEF] hover:border-[#8F3F50] text-left transition-all cursor-pointer group"
                        >
                          <div className="text-2xl mb-2">{opt.icon}</div>
                          <div className="font-serif-display font-bold text-sm text-[#241E20] group-hover:text-[#8F3F50]">
                            {opt.title}
                          </div>
                          <div className="text-xs text-[#5C4E52] mt-1">
                            {opt.label}
                          </div>
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Step 3 Options */}
                  {quizStep === 3 && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      {[
                        { label: "Loves grand, cinematic surprises with photo-worthy details (4ft letters & fireworks)", title: "Cinematic & Grand", icon: "🎆" },
                        { label: "Prefers intimate, quiet moments with personal handwritten notes and soft candlelight", title: "Intimate & Deep", icon: "💌" },
                        { label: "Nostalgic storytelling through childhood and couple milestone photos on a 4K screen", title: "Memory Cinema", icon: "🎬" },
                        { label: "Loves artistic culinary journeys and wine pairings", title: "Gourmet Epicurean", icon: "🍷" },
                      ].map((opt, i) => (
                        <button
                          key={i}
                          onClick={() => {
                            setQuizAnswers((prev) => ({ ...prev, partnerStyle: opt.label }));
                            setQuizStep(4);
                          }}
                          className="p-5 rounded-2xl border border-[#E8D9DC] bg-[#FFFDFB] hover:bg-[#F8EDEF] hover:border-[#8F3F50] text-left transition-all cursor-pointer group"
                        >
                          <div className="text-2xl mb-2">{opt.icon}</div>
                          <div className="font-serif-display font-bold text-sm text-[#241E20] group-hover:text-[#8F3F50]">
                            {opt.title}
                          </div>
                          <div className="text-xs text-[#5C4E52] mt-1">
                            {opt.label}
                          </div>
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Step 4 Options */}
                  {quizStep === 4 && (
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                        {[
                          { label: "5-Course fine dining gourmet tasting crafted by a private chef", title: "5-Course Chef Tasting", icon: "🍽️" },
                          { label: "Live Alfresco Barbecue & Grill under open starlight", title: "Live Alfresco Grill", icon: "🥩" },
                          { label: "Artisanal grazing table, tapas & Moët champagne", title: "Artisanal Tapas & Champagne", icon: "🥂" },
                          { label: "Royal Indian bespoke feast with traditional recipes", title: "Royal Indian Fine Dining", icon: "👑" },
                        ].map((opt, i) => (
                          <button
                            key={i}
                            onClick={() => {
                              setQuizAnswers((prev) => ({ ...prev, favoriteCuisine: opt.label }));
                            }}
                            className={`p-5 rounded-2xl border text-left transition-all cursor-pointer group ${
                              quizAnswers.favoriteCuisine === opt.label
                                ? 'border-[#8F3F50] bg-[#F8EDEF]'
                                : 'border-[#E8D9DC] bg-[#FFFDFB]'
                            }`}
                          >
                            <div className="text-2xl mb-2">{opt.icon}</div>
                            <div className="font-serif-display font-bold text-sm text-[#241E20]">
                              {opt.title}
                            </div>
                            <div className="text-xs text-[#5C4E52] mt-1">
                              {opt.label}
                            </div>
                          </button>
                        ))}
                      </div>

                      <div className="flex justify-between items-center pt-4">
                        <button
                          onClick={() => setQuizStep((p) => Math.max(1, p - 1))}
                          className="px-5 py-2.5 rounded-full border border-[#E8D9DC] text-xs font-semibold text-[#5C4E52] hover:bg-[#F8EDEF] cursor-pointer"
                        >
                          Back
                        </button>

                        <button
                          onClick={handleRunVibeMatcher}
                          disabled={isMatchingVibe}
                          className="px-8 py-3 rounded-full aurawed-button-primary text-xs uppercase tracking-widest font-bold flex items-center gap-2 cursor-pointer shadow-md"
                        >
                          {isMatchingVibe ? (
                            <>
                              <Sparkles className="w-4 h-4 animate-spin text-[#C9A15B]" />
                              <span>Analyzing Romantic Synergy...</span>
                            </>
                          ) : (
                            <>
                              <Wand2 className="w-4 h-4 text-[#C9A15B]" />
                              <span>Reveal Tailored Estate Match</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                /* Result Display */
                <div className="text-center space-y-6">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F8EDEF] border border-[#E8D9DC] text-[#8F3F50] text-xs font-bold uppercase tracking-widest">
                    <Sparkles className="w-3.5 h-3.5 text-[#C9A15B]" />
                    <span>Your Bespoke Match Found</span>
                  </div>

                  <h3 className="font-serif-display text-3xl sm:text-4xl font-bold text-[#241E20]">
                    {vibeMatchResult.matchName}
                  </h3>

                  <p className="text-sm text-[#5C4E52] max-w-xl mx-auto leading-relaxed italic bg-[#FFFDFB] p-5 rounded-2xl border border-[#E8D9DC]">
                    "{vibeMatchResult.matchReasoning}"
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
                    <div className="p-4 rounded-2xl bg-[#FFFDFB] border border-[#E8D9DC]">
                      <div className="text-xs uppercase font-semibold text-[#C9A15B] mb-1">Recommended Zone</div>
                      <div className="font-serif-display font-bold text-sm text-[#241E20]">
                        {vibeMatchResult.recommendedSpace}
                      </div>
                    </div>

                    <div className="p-4 rounded-2xl bg-[#FFFDFB] border border-[#E8D9DC]">
                      <div className="text-xs uppercase font-semibold text-[#C9A15B] mb-1">Curated Theme</div>
                      <div className="font-serif-display font-bold text-sm text-[#241E20]">
                        {vibeMatchResult.recommendedTheme}
                      </div>
                    </div>

                    <div className="p-4 rounded-2xl bg-[#FFFDFB] border border-[#E8D9DC]">
                      <div className="text-xs uppercase font-semibold text-[#C9A15B] mb-1">Dining Experience</div>
                      <div className="font-serif-display font-bold text-sm text-[#241E20]">
                        {vibeMatchResult.recommendedDining}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-4">
                    <button
                      onClick={applyVibeToBuilder}
                      className="w-full sm:w-auto px-8 py-3.5 rounded-full aurawed-button-primary text-xs uppercase tracking-widest font-bold flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                    >
                      <Sparkles className="w-4 h-4 text-[#C9A15B]" />
                      <span>Apply To Experience Builder</span>
                    </button>

                    <button
                      onClick={() => {
                        setVibeMatchResult(null);
                        setQuizStep(1);
                      }}
                      className="w-full sm:w-auto px-6 py-3.5 rounded-full border border-[#E8D9DC] bg-white text-xs uppercase tracking-wider font-semibold text-[#5C4E52] hover:bg-[#F8EDEF] flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Retake Quiz</span>
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          )}

          {/* TAB 4: COUPLE CREST, INFINITY SEAL & LOVE MONOGRAM */}
          {activeTab === 'couple-seal' && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
            >
              {/* Left Configurator Column (5 cols) */}
              <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-3xl border border-[#E8D9DC] shadow-sm space-y-5">
                <div className="flex items-center gap-2 pb-3 border-b border-[#F8EDEF]">
                  <Crown className="w-4 h-4 text-[#C9A15B]" />
                  <h3 className="font-serif-display text-lg font-bold text-[#241E20]">
                    Craft Your Bespoke Love Monogram
                  </h3>
                </div>

                <p className="text-xs text-[#5C4E52] leading-relaxed">
                  Every booking at Mumbai Moments includes your custom royal couple crest projected in ambient light, printed on keepsake linen menus, and sealed on vintage wax invitation envelopes.
                </p>

                {/* Couple Initials */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-[#5C4E52] uppercase tracking-wider mb-1">
                      Partner 1 Initial
                    </label>
                    <input
                      type="text"
                      maxLength={1}
                      value={monogramInitials.p1}
                      onChange={(e) =>
                        setMonogramInitials((prev) => ({
                          ...prev,
                          p1: e.target.value.toUpperCase() || 'R'
                        }))
                      }
                      className="w-full text-center font-serif-display text-xl font-bold py-2 rounded-xl border border-[#E8D9DC] bg-[#FFFDFB] focus:outline-none focus:border-[#8F3F50]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#5C4E52] uppercase tracking-wider mb-1">
                      Partner 2 Initial
                    </label>
                    <input
                      type="text"
                      maxLength={1}
                      value={monogramInitials.p2}
                      onChange={(e) =>
                        setMonogramInitials((prev) => ({
                          ...prev,
                          p2: e.target.value.toUpperCase() || 'S'
                        }))
                      }
                      className="w-full text-center font-serif-display text-xl font-bold py-2 rounded-xl border border-[#E8D9DC] bg-[#FFFDFB] focus:outline-none focus:border-[#8F3F50]"
                    />
                  </div>
                </div>

                {/* Seal Style Selector */}
                <div>
                  <label className="block text-xs font-semibold text-[#5C4E52] uppercase tracking-wider mb-2">
                    Love Emblem & Seal Motif
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: 'royal-gold', label: '👑 Royal Crown', desc: 'Regal Gold Crest' },
                      { id: 'infinity-knot', label: '♾️ Infinity Heart', desc: 'Eternal Love Knot' },
                      { id: 'rose-sanctum', label: '🌹 Rose Sanctum', desc: 'Velvet Wax Seal' }
                    ].map((st) => (
                      <button
                        key={st.id}
                        onClick={() => setMonogramStyle(st.id as any)}
                        className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                          monogramStyle === st.id
                            ? 'bg-[#F8EDEF] border-[#8F3F50] text-[#8F3F50] font-bold shadow-xs'
                            : 'bg-[#FFFDFB] border-[#E8D9DC] text-[#5C4E52] hover:bg-[#FFFDFB]'
                        }`}
                      >
                        <span className="text-xs block font-serif-display">{st.label}</span>
                        <span className="text-[10px] text-[#5C4E52] block mt-0.5">{st.desc}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Keepsake Vow Text */}
                <div>
                  <label className="block text-xs font-semibold text-[#5C4E52] uppercase tracking-wider mb-1">
                    Engraved Keepsake Quote
                  </label>
                  <textarea
                    rows={2}
                    value={customVowKeepsake}
                    onChange={(e) => setCustomVowKeepsake(e.target.value)}
                    placeholder="e.g. Together in our private paradise — today, tomorrow, always."
                    className="w-full px-3.5 py-2 rounded-xl border border-[#E8D9DC] bg-[#FFFDFB] text-xs focus:outline-none focus:border-[#8F3F50] resize-none"
                  />
                </div>

                <div className="p-3 bg-[#F8EDEF] rounded-xl border border-[#E8D9DC] flex items-center gap-2 text-xs text-[#8F3F50]">
                  <Sparkles className="w-4 h-4 text-[#C9A15B] shrink-0" />
                  <span>
                    Your monogram is prepared by our master calligrapher and projected live during your evening.
                  </span>
                </div>
              </div>

              {/* Right Visual Certificate & Wax Seal Preview (7 cols) */}
              <div className="lg:col-span-7">
                <div className="bg-[#F8EDEF] rounded-3xl p-6 sm:p-10 border-2 border-[#E8D9DC] shadow-xl relative overflow-hidden flex flex-col items-center justify-between text-center">
                  {/* Decorative Border Frame */}
                  <div className="absolute inset-3 border border-[#E8D9DC] rounded-2xl pointer-events-none" />
                  <div className="absolute inset-5 border border-dashed border-[#E8D9DC]/60 rounded-xl pointer-events-none" />

                  {/* Corner Love Emblems */}
                  <span className="absolute top-6 left-6 text-sm text-[#C9A15B]">✨</span>
                  <span className="absolute top-6 right-6 text-sm text-[#C9A15B]">✨</span>
                  <span className="absolute bottom-6 left-6 text-sm text-[#C9A15B]">💖</span>
                  <span className="absolute bottom-6 right-6 text-sm text-[#C9A15B]">💖</span>

                  {/* Header */}
                  <div className="relative z-10 pt-2 pb-4">
                    <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-[#C9A15B] block mb-1">
                      Mumbai Moments • Private Estate Sanctum
                    </span>
                    <h4 className="font-serif-display text-xl sm:text-2xl font-bold text-[#241E20]">
                      Certificate of Bespoke Romantic Sanctuary
                    </h4>
                  </div>

                  {/* Central Monogram Emblem */}
                  <div className="relative z-10 my-6">
                    <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-linear-to-br from-[#8F3F50] via-[#8F3F50] to-[#8F3F50] border-4 border-[#C9A15B] shadow-2xl flex flex-col items-center justify-center text-white relative group">
                      {/* Outer Ring Sparkles */}
                      <div className="absolute -top-3 w-8 h-8 rounded-full bg-[#C9A15B] text-[#241E20] flex items-center justify-center text-xs shadow-md">
                        {monogramStyle === 'royal-gold' ? '👑' : monogramStyle === 'infinity-knot' ? '♾️' : '🌹'}
                      </div>

                      {/* Initials with Infinity Knot / Heart */}
                      <div className="flex items-center justify-center gap-1">
                        <span className="font-serif-display text-4xl sm:text-5xl font-bold text-[#F8EDEF] drop-shadow-md">
                          {monogramInitials.p1}
                        </span>
                        <div className="flex flex-col items-center">
                          <Heart className="w-4 h-4 fill-[#C9A15B] text-[#C9A15B] animate-pulse" />
                          <span className="text-[10px] text-[#C9A15B] font-bold">&</span>
                        </div>
                        <span className="font-serif-display text-4xl sm:text-5xl font-bold text-[#F8EDEF] drop-shadow-md">
                          {monogramInitials.p2}
                        </span>
                      </div>

                      <span className="text-[8px] uppercase tracking-[0.2em] text-[#C9A15B] mt-1 font-semibold">
                        Pali Hill • Mumbai
                      </span>
                    </div>
                  </div>

                  {/* Engraved Vow */}
                  <div className="relative z-10 max-w-md mx-auto space-y-2 mb-6">
                    <p className="font-serif-display text-sm sm:text-base text-[#241E20] italic leading-relaxed">
                      "{customVowKeepsake}"
                    </p>
                    <span className="text-[11px] text-[#5C4E52] block">
                      Dedicated exclusively to {monogramInitials.p1} & {monogramInitials.p2}
                    </span>
                  </div>

                  {/* Action Buttons */}
                  <div className="relative z-10 w-full pt-4 border-t border-[#E8D9DC] flex flex-wrap items-center justify-center gap-3">
                    <button
                      onClick={() => {
                        const copyText = `✨ *Custom Love Monogram — Mumbai Moments*\nCouple Initials: ${monogramInitials.p1} & ${monogramInitials.p2}\nStyle: ${monogramStyle}\nVow: "${customVowKeepsake}"\nReserved at The Private Estate, Pali Hill, Bandra.`;
                        navigator.clipboard.writeText(copyText);
                        setIsKeepsakeCopied(true);
                        setTimeout(() => setIsKeepsakeCopied(false), 2000);
                      }}
                      className="px-5 py-2.5 rounded-full bg-white border border-[#E8D9DC] text-xs font-semibold text-[#241E20] hover:bg-[#F8EDEF] flex items-center gap-1.5 cursor-pointer shadow-xs"
                    >
                      {isKeepsakeCopied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                          <span className="text-emerald-700">Monogram Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-[#C9A15B]" />
                          <span>Copy Monogram Text</span>
                        </>
                      )}
                    </button>

                    <button
                      onClick={() => {
                        if (onNavigateSection) onNavigateSection('experience-builder');
                      }}
                      className="px-6 py-2.5 rounded-full aurawed-button-primary text-xs uppercase tracking-wider font-bold flex items-center gap-1.5 cursor-pointer shadow-md"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-[#C9A15B]" />
                      <span>Engrave on My Booking Setup</span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};
