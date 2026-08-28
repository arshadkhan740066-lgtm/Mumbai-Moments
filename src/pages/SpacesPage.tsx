import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { VenueSpacesSection } from '../components/VenueSpacesSection';
import { VenueSpaceArea, VenueTransformationTheme } from '../types';
import { VENUE_SPACES, VENUE_PROPERTY_INFO } from '../data/venueData';
import { motion } from 'motion/react';
import { ShieldCheck, Lock, Star, Sparkles, ArrowRight, Check, Heart } from 'lucide-react';
import { ThemeDetailModal } from '../components/ThemeDetailModal';

interface SpacesPageProps {
  onOpenInquiry: () => void;
}

export const SpacesPage = ({ onOpenInquiry }: SpacesPageProps) => {
  const navigate = useNavigate();
  const [selectedSpace, setSelectedSpace] = useState<string | null>(null);

  const handleSelectSpaceForBuilder = (_space: VenueSpaceArea) => {
    navigate('/builder');
  };

  return (
    <div className="min-h-screen bg-[#FFFDFB]">
      {/* Hero */}
      <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-20 bg-gradient-to-br from-[#F8EDEF] to-[#FFFDFB] border-b border-[#E8D9DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#E8D9DC] text-[#8F3F50] text-xs font-semibold uppercase tracking-widest mb-5 shadow-sm">
            <Lock className="w-3.5 h-3.5 text-[#8F3F50]" />
            <span>Private Estate Zones</span>
          </div>
          <h1 className="font-serif-display text-4xl sm:text-6xl font-bold text-[#241E20] tracking-tight mb-4">
            4 Exclusive Private Zones
          </h1>
          <p className="text-sm sm:text-lg text-[#5C4E52] font-light max-w-2xl mx-auto mb-8">
            Each space is completely private, custom-transformed, and reserved exclusively for your booking — never shared with other guests.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {VENUE_SPACES.map((space) => (
              <button
                key={space.id}
                onClick={() => setSelectedSpace(selectedSpace === space.id ? null : space.id)}
                className={`px-5 py-2.5 rounded-full text-[11px] font-semibold uppercase tracking-wider transition-all cursor-pointer shadow-sm ${
                  selectedSpace === space.id
                    ? 'bg-[#8F3F50] text-white border-2 border-[#8F3F50]'
                    : 'bg-white border border-[#E8D9DC] text-[#241E20] hover:bg-[#F8EDEF]'
                }`}
              >
                {space.name.replace('The ', '')}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Property Inclusions */}
      <section className="py-10 border-b border-[#E8D9DC] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {VENUE_PROPERTY_INFO.inclusionsStandard.map((item, i) => (
              <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFFDFB] border border-[#E8D9DC]">
                <Check className="w-3.5 h-3.5 text-[#8F3F50] flex-shrink-0" />
                <span className="text-xs font-medium text-[#241E20]">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Space Cards */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {VENUE_SPACES.map((space, idx) => (
            <motion.div
              key={space.id}
              id={space.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${idx % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
            >
              {/* Image */}
              <div className={`relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                <img src={space.image} alt={space.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1.5 rounded-full bg-white/95 text-[10px] font-bold uppercase tracking-widest text-[#8F3F50] shadow-md">
                    100% Private
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-[#C9A15B] text-[10px] uppercase tracking-widest font-bold">{space.capacity}</p>
                  <p className="text-white text-sm font-medium mt-0.5">{space.viewType}</p>
                </div>
              </div>

              {/* Content */}
              <div className={`space-y-6 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFFDFB] border border-[#E8D9DC] text-[#C9A15B] text-[10px] font-bold uppercase tracking-widest mb-3">
                    <ShieldCheck className="w-3 h-3" />
                    <span>{space.privacyLevel}</span>
                  </div>
                  <h2 className="font-serif-display text-3xl sm:text-4xl font-bold text-[#241E20] mb-2">{space.name}</h2>
                  <p className="font-cursive text-xl text-[#C9A15B]">{space.tagline}</p>
                </div>

                <p className="text-sm text-[#5C4E52] font-light leading-relaxed">{space.description}</p>

                <div className="space-y-2.5">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#5C4E52]">Signature Features</p>
                  <ul className="space-y-2">
                    {space.keyFeatures.map((feature, fi) => (
                      <li key={fi} className="flex items-start gap-2.5 text-sm text-[#241E20]">
                        <Star className="w-3.5 h-3.5 text-[#C9A15B] fill-[#C9A15B] flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-3 pt-2">
                  <button
                    onClick={() => { handleSelectSpaceForBuilder(space.name as VenueSpaceArea); }}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full aurawed-button-primary text-xs uppercase tracking-wider font-bold cursor-pointer"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-[#C9A15B]" />
                    <span>Design in Builder</span>
                  </button>
                  <button
                    onClick={onOpenInquiry}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full aurawed-button-secondary text-xs uppercase tracking-wider font-bold cursor-pointer"
                  >
                    <span>Inquire & Reserve</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Full Exclusive Buyout */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-[#8F3F50] to-[#8F3F50] text-white border-t border-[#E8D9DC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 border border-white/25 text-[#C9A15B] text-xs font-bold uppercase tracking-widest">
            <Heart className="w-3.5 h-3.5 fill-[#C9A15B]" />
            <span>Ultimate Exclusivity</span>
          </div>
          <h2 className="font-serif-display text-3xl sm:text-5xl font-bold tracking-tight">
            Full Private Estate Buyout
          </h2>
          <p className="text-white/75 text-sm sm:text-base font-light max-w-2xl mx-auto leading-relaxed">
            Reserve all 4 private zones — Glasshouse, Rooftop Deck, Garden Courtyard & Cabana — for the most expansive, ultra-exclusive celebration in all of Mumbai.
          </p>
          <button
            onClick={onOpenInquiry}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#C9A15B] text-[#241E20] text-sm font-bold uppercase tracking-widest shadow-xl hover:brightness-105 transition-all cursor-pointer"
          >
            <Sparkles className="w-4 h-4" />
            <span>Book Full Estate Exclusive</span>
          </button>
        </div>
      </section>

      <VenueSpacesSection onSelectSpaceForBuilder={handleSelectSpaceForBuilder} />
    </div>
  );
};
