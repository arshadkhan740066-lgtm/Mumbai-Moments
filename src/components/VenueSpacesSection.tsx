import { VENUE_SPACES } from '../data/venueData';
import { VenueSpaceHighlight } from '../types';
import { Sparkles, Check, Lock, MapPin } from 'lucide-react';
import { motion } from 'motion/react';

interface VenueSpacesSectionProps {
  onSelectSpaceForBuilder: (spaceName: string) => void;
}

export const VenueSpacesSection = ({ onSelectSpaceForBuilder }: VenueSpacesSectionProps) => {
  return (
    <section id="private-spaces" className="py-16 sm:py-24 bg-[#FAF7F2] border-b border-[#E5D9C8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#DFCDB7] text-[#6B1724] text-xs font-semibold uppercase tracking-widest mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#C59A5D]" />
            <span>Pali Hill Private Estate</span>
          </div>

          <h2 className="font-serif-display text-3xl sm:text-5xl font-bold text-[#1E1B18] tracking-tight">
            Explore The Venue Zones
          </h2>
          <p className="text-sm sm:text-base text-[#52453E] font-light mt-3 leading-relaxed">
            Our private estate features multiple distinct spaces designed for complete acoustic and visual intimacy. Whichever zone you select is 100% private to you.
          </p>
        </div>

        {/* 2x2 Grid of Spatial Zones */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {VENUE_SPACES.map((space: VenueSpaceHighlight) => (
            <motion.div
              key={space.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-3xl border border-[#E5D9C8] overflow-hidden shadow-[0_4px_20px_rgba(80,50,30,0.04)] flex flex-col group"
            >
              {/* Image with overlay badge */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#F0E6D8]">
                <img
                  src={space.image}
                  alt={space.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-white/95 text-[10px] uppercase tracking-widest text-[#6B1724] font-bold shadow-xs flex items-center gap-1.5">
                    <Lock className="w-3 h-3 text-[#C59A5D]" />
                    <span>{space.privacyLevel}</span>
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="flex items-center gap-1 text-[11px] text-[#DFB776] font-semibold uppercase tracking-wider mb-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{space.viewType}</span>
                  </div>
                  <h3 className="font-serif-display text-2xl font-bold leading-snug">
                    {space.name}
                  </h3>
                </div>
              </div>

              {/* Space Details */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <p className="text-xs text-[#8C6D46] font-semibold uppercase tracking-wider">
                    {space.tagline}
                  </p>
                  <p className="text-xs text-[#52453E] font-light mt-2 leading-relaxed">
                    {space.description}
                  </p>
                </div>

                {/* Key Features List */}
                <div className="space-y-2 pt-3 border-t border-[#EBE2D5]">
                  <span className="text-[10px] uppercase tracking-wider text-[#8C6D46] font-bold block">
                    Architectural Features:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {space.keyFeatures.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-[#52453E]">
                        <Check className="w-3.5 h-3.5 text-[#6B1724] flex-shrink-0 mt-0.5" />
                        <span className="text-[11px]">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action to book this space */}
                <div className="pt-3 border-t border-[#EBE2D5]">
                  <button
                    onClick={() => onSelectSpaceForBuilder(space.name)}
                    className="w-full py-2.5 rounded-full aurawed-button-secondary text-xs uppercase tracking-wider font-semibold text-center cursor-pointer hover:border-[#6B1724]"
                  >
                    Select {space.name} in Experience Builder
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
