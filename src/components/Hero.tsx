import { ArrowRight, Sparkles, MapPin, Heart, Star, ShieldCheck, Lock } from 'lucide-react';
import { motion } from 'motion/react';
import { BRANDING } from '../data/branding';

interface HeroProps {
  onStartDesigning: () => void;
  onExploreSetups: () => void;
  onOpenLoveAI?: () => void;
}

export const Hero = ({
  onStartDesigning,
  onExploreSetups,
  onOpenLoveAI
}: HeroProps) => {
  return (
    <section id="hero" className="relative pt-28 sm:pt-32 pb-16 lg:pb-24 aurawed-bg-pattern overflow-hidden border-b border-[#E8D9DC]">
      {/* Decorative luxury radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-[#F8EDEF] to-transparent rounded-full blur-3xl pointer-events-none opacity-70" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Editorial Eyebrow matching the Logo Header Style */}
        <div className="flex flex-col items-center justify-center text-center mb-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.28em] text-[#C9A15B] uppercase font-semibold mb-1"
          >
            <span>One Private Venue</span>
            <span className="text-[#C9A15B] font-light">/</span>
            <span>Kurla Flagship Estate</span>
            <span className="text-[#C9A15B] font-light">/</span>
            <span>Tailored To You</span>
          </motion.div>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="font-cursive text-2xl sm:text-3xl text-[#8F3F50]"
          >
            Kurla West (BKC Corridor) • Mumbai
          </motion.span>
        </div>

        {/* Central Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Brand Story & CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-5 sm:space-y-6">
            {/* Exclusive Private Property Tag */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-[#F8EDEF] border border-[#E8D9DC] text-[#8F3F50] text-[10px] sm:text-xs font-semibold uppercase tracking-wider sm:tracking-widest shadow-xs max-w-full text-center"
            >
              <Lock className="w-3.5 h-3.5 text-[#C9A15B] shrink-0" />
              <span>100% Exclusive Private Venue • Zero Public Intrusion</span>
            </motion.div>

            {/* Main Luxury Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <h1 className="font-serif-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#241E20] leading-[1.1]">
                One private estate. <br className="hidden sm:block" />
                <span className="italic font-normal font-serif-display text-[#8F3F50]">Custom designed</span>{' '}
                <span className="font-cursive text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-[#C9A15B] font-normal block sm:inline mt-1 sm:mt-0">
                  for your love.
                </span>
              </h1>
            </motion.div>

            {/* Narrative description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-sm sm:text-base md:text-lg text-[#5C4E52] font-light leading-relaxed max-w-xl mx-auto lg:mx-0"
            >
              We don’t offer generic tables in crowded restaurants. <strong className="text-[#241E20] font-medium">Mumbai Moments</strong> is a private luxury property in Kurla West (BKC Corridor) exclusively reserved for you. Enjoy quick 5–12 min VIP transit from Sion, Dadar, Kurla, Mahim, Wadala, and Chembur.
            </motion.p>

            {/* Micro value tags */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 sm:gap-4 text-[11px] sm:text-xs font-medium text-[#5C4E52] uppercase tracking-wider"
            >
              <span className="flex items-center gap-1.5 text-[#241E20]">
                <Heart className="w-3.5 h-3.5 text-[#8F3F50] fill-[#8F3F50]" />
                Only 1 Couple Per Slot
              </span>
              <span className="text-[#C9A15B] hidden sm:inline">•</span>
              <span className="flex items-center gap-1.5 text-[#241E20]">
                <Star className="w-3.5 h-3.5 text-[#C9A15B] fill-[#C9A15B]" />
                Dedicated Private Chef
              </span>
              <span className="text-[#C9A15B] hidden sm:inline">•</span>
              <span className="flex items-center gap-1.5 text-[#241E20]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#C9A15B]" />
                Bespoke Decor & Lighting
              </span>
            </motion.div>

            {/* Targeted Mumbai Corridor Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.28 }}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-2xl sm:rounded-full bg-[#F8EDEF] border border-[#E8D9DC] text-[#8F3F50] text-[11px] sm:text-xs font-semibold text-center leading-snug max-w-full"
            >
              <span className="text-sm shrink-0">💖</span>
              <span>
                Flagship Kurla Venue • VIP Chauffeur: <strong>Sion • Dadar • Kurla • Mahim • Wadala • Chembur</strong>
              </span>
            </motion.div>

            {/* AuraWed CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 pt-2"
            >
              <button
                onClick={onStartDesigning}
                className="w-full sm:w-auto px-6 sm:px-7 py-3 sm:py-3.5 rounded-full aurawed-button-primary font-semibold text-xs uppercase tracking-wider sm:tracking-widest flex items-center justify-center gap-2 group cursor-pointer shadow-sm"
              >
                <Sparkles className="w-4 h-4 text-[#C9A15B]" />
                <span>Design Experience</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              {onOpenLoveAI && (
                <button
                  onClick={onOpenLoveAI}
                  className="w-full sm:w-auto px-5 sm:px-6 py-3 sm:py-3.5 rounded-full bg-[#F8EDEF] border border-[#E8D9DC] text-[#8F3F50] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer hover:bg-[#F8EDEF] transition-all shadow-xs"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#C9A15B] animate-pulse" />
                  <span>Love AI Studio ✨</span>
                </button>
              )}

              <button
                onClick={onExploreSetups}
                className="w-full sm:w-auto px-5 sm:px-6 py-3 sm:py-3.5 rounded-full aurawed-button-secondary font-semibold text-xs uppercase tracking-wider sm:tracking-widest flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Themes</span>
              </button>
            </motion.div>

            {/* Bottom Brand Inclusions Summary */}
            <div className="pt-4 border-t border-[#E8D9DC] text-[10px] sm:text-xs text-[#C9A15B] tracking-[0.14em] sm:tracking-[0.16em] uppercase font-semibold text-center lg:text-left flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-3">
              <span>Glasshouse Pavilion</span>
              <span className="text-[#C9A15B]">•</span>
              <span>Starlit Sky Deck</span>
              <span className="text-[#C9A15B]">•</span>
              <span>Courtyard Garden</span>
              <span className="text-[#C9A15B]">•</span>
              <span>Sunset Cabana</span>
            </div>
          </div>

          {/* Right Column: AuraWed Arched Editorial Image Gallery & Embossed Logo Card */}
          <div className="lg:col-span-5 relative flex justify-center mt-4 lg:mt-0">
            {/* Ambient Shadow and Backdrop Frame */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full max-w-md px-2 sm:px-0"
            >
              {/* Main Arched Frame */}
              <div className="relative rounded-t-[100px] sm:rounded-t-[140px] rounded-b-3xl overflow-hidden border-4 border-white shadow-2xl bg-[#F8EDEF] aspect-[4/5]">
                <img
                  src={BRANDING.heroRomantic}
                  alt="Romantic Mumbai Private Venue Transformation"
                  className="w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />

                {/* Overlaid Bottom Title */}
                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 text-white text-left">
                  <div className="flex items-center gap-1.5 text-[11px] sm:text-xs text-[#C9A15B] font-semibold uppercase tracking-wider mb-1">
                    <MapPin className="w-3.5 h-3.5 shrink-0" />
                    <span>Kurla West Sanctuary • 100% Private Estate</span>
                  </div>
                  <h3 className="font-serif-display text-xl sm:text-2xl font-bold leading-snug">
                    Transformed For One Couple At A Time
                  </h3>
                </div>
              </div>

              {/* Floating Luxury Logo Monogram Card */}
              <motion.div
                initial={{ opacity: 0, x: -10, y: 10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="absolute -bottom-4 sm:-bottom-6 left-2 sm:-left-6 bg-[#FFFDFB] p-2.5 sm:p-3 rounded-2xl border-2 border-[#C9A15B] shadow-xl max-w-[170px] sm:max-w-[200px] text-center"
              >
                <div className="w-12 sm:w-16 h-12 sm:h-16 mx-auto rounded-full overflow-hidden border border-[#C9A15B] mb-1 shadow-xs bg-white">
                  <img
                    src={BRANDING.logoUrl}
                    alt="Mumbai Moments Official Seal"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="font-serif-display text-[11px] sm:text-xs font-bold text-[#241E20] uppercase tracking-wider">
                  Mumbai Moments
                </div>
                <div className="text-[10px] text-[#8F3F50] font-cursive sm:text-sm -mt-0.5">
                  100% Private Luxury Venue
                </div>
              </motion.div>

              {/* Floating Verified Curator Badge */}
              <motion.div
                initial={{ opacity: 0, x: 10, y: -10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.7, delay: 0.45 }}
                className="absolute -top-3 sm:-top-4 right-2 sm:-right-6 bg-white py-1.5 sm:py-2.5 px-3 sm:px-4 rounded-2xl border border-[#E8D9DC] shadow-lg flex items-center gap-2 sm:gap-3"
              >
                <div className="w-7 sm:w-9 h-7 sm:h-9 rounded-full bg-[#F8EDEF] flex items-center justify-center text-[#C9A15B] shrink-0">
                  <Star className="w-4 sm:w-5 h-4 sm:h-5 fill-[#C9A15B]" />
                </div>
                <div className="text-left">
                  <div className="text-xs sm:text-sm font-bold text-[#241E20] font-serif-display">5.0 / 5.0</div>
                  <div className="text-[9px] sm:text-[10px] text-[#C9A15B] uppercase font-semibold tracking-wider">Client Rating</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
