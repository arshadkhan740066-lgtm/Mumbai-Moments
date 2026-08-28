import { VENUE_PROPERTY_INFO } from '../data/venueData';
import { BRANDING } from '../data/branding';
import { Sparkles, Lock, MapPin, Check, ShieldCheck, Heart, Utensils, Music, Eye } from 'lucide-react';
import { motion } from 'motion/react';

interface EstateOverviewSectionProps {
  onOpenInquiry: () => void;
  onExploreThemes: () => void;
}

export const EstateOverviewSection = ({
  onOpenInquiry,
  onExploreThemes
}: EstateOverviewSectionProps) => {
  return (
    <section id="estate-overview" className="py-16 sm:py-24 bg-[#FFFDFB] border-b border-[#E8D9DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#E8D9DC] text-[#8F3F50] text-xs font-semibold uppercase tracking-widest mb-3 shadow-xs">
            <Lock className="w-3.5 h-3.5 text-[#C9A15B]" />
            <span>The Signature Property</span>
          </div>

          <h2 className="font-serif-display text-3xl sm:text-5xl font-bold text-[#241E20] tracking-tight">
            The Mumbai Moments Estate
          </h2>
          <p className="text-sm sm:text-base text-[#5C4E52] font-light mt-3 leading-relaxed">
            {VENUE_PROPERTY_INFO.description}
          </p>
        </div>

        {/* 2-Column Split: Architectural Presentation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-16">
          {/* Left Column: Multi-Angle Photo Collage */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="rounded-3xl overflow-hidden shadow-lg border border-[#E8D9DC] aspect-[4/5] bg-[#FFFDFB]">
                <img
                  src={BRANDING.proposalSpot}
                  alt="Glasshouse Pavilion Setup"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 rounded-2xl bg-white border border-[#E8D9DC] text-center shadow-xs">
                <span className="text-[10px] uppercase font-bold text-[#C9A15B] tracking-wider block">
                  Location
                </span>
                <span className="text-xs font-bold text-[#241E20]">Pali Hill, Bandra West</span>
              </div>
            </div>

            <div className="space-y-4 pt-6">
              <div className="p-4 rounded-2xl bg-white border border-[#E8D9DC] text-center shadow-xs">
                <span className="text-[10px] uppercase font-bold text-[#C9A15B] tracking-wider block">
                  Exclusivity
                </span>
                <span className="text-xs font-bold text-[#8F3F50]">Only 1 Booking Per Slot</span>
              </div>
              <div className="rounded-3xl overflow-hidden shadow-lg border border-[#E8D9DC] aspect-[4/5] bg-[#FFFDFB]">
                <img
                  src={BRANDING.heroRomantic}
                  alt="Starlit Sky Deck Twilight Ambiance"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Key Estate Privileges & Inclusions */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-1.5 text-xs text-[#C9A15B] font-semibold uppercase tracking-wider">
              <MapPin className="w-4 h-4 text-[#C9A15B]" />
              <span>Pali Hill Sanctuary • Bandra West</span>
            </div>

            <h3 className="font-serif-display text-2xl sm:text-4xl font-bold text-[#241E20] leading-tight">
              A private luxury canvas with five-star hospitality
            </h3>

            <p className="text-sm text-[#5C4E52] font-light leading-relaxed">
              When you book Mumbai Moments, you aren’t just booking a table; you are reserving an entire private luxury residence and an entire production team dedicated exclusively to you for the evening.
            </p>

            {/* Standard Inclusions Checklist */}
            <div className="space-y-3 pt-2">
              <span className="text-xs uppercase tracking-widest text-[#8F3F50] font-bold block">
                Standard Inclusions with Every Reservation:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {VENUE_PROPERTY_INFO.inclusionsStandard.map((inc, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-2xl bg-white border border-[#E8D9DC] flex items-start gap-2.5 shadow-xs"
                  >
                    <Check className="w-4 h-4 text-[#8F3F50] flex-shrink-0 mt-0.5" />
                    <span className="text-xs text-[#5C4E52] font-medium leading-tight">
                      {inc}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="pt-4 flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={onOpenInquiry}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full aurawed-button-primary text-xs uppercase tracking-widest font-bold cursor-pointer shadow-md"
              >
                Schedule Private Walkthrough
              </button>
              <button
                onClick={onExploreThemes}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full aurawed-button-secondary text-xs uppercase tracking-wider font-bold cursor-pointer"
              >
                View Decor Transformations
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
