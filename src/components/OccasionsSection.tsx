import { Occasion } from '../types';
import { ArrowRight, Sparkles, Heart } from 'lucide-react';
import { motion } from 'motion/react';

interface OccasionsSectionProps {
  onSelectOccasionForBuilder: (occasion: Occasion) => void;
}

const OCCASION_CARDS = [
  {
    name: 'Proposal' as Occasion,
    badge: '100% "Yes" Track Record',
    tagline: 'Giant 4ft "MARRY ME" illuminated marquee letters, 50ft rose aisle, synchronized cold fireworks & hidden 4K drone crew.',
    bgImage: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=1200&auto=format&fit=crop',
    recommendedZone: 'The Starlit Rooftop Deck'
  },
  {
    name: 'Anniversary' as Occasion,
    badge: 'Pure Romantic Elegance',
    tagline: '300+ real taper candles, suspended fairy lights, personal love letter wax presentation & private violinist playing your song.',
    bgImage: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop',
    recommendedZone: 'The Glasshouse Pavilion'
  },
  {
    name: 'Date Night' as Occasion,
    badge: 'Total Acoustic Intimacy',
    tagline: 'Escape the city rush with bohemian cabanas, golden hour sunset views, artisanal tapas, and zero nearby strangers.',
    bgImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop',
    recommendedZone: 'The Sunset Oceanview Cabana'
  },
  {
    name: 'Birthday Celebration' as Occasion,
    badge: 'Bespoke Surprise',
    tagline: '120-Inch open-air 4K cinema screening personal memory video montage, velvet daybeds, and designer cake.',
    bgImage: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=1200&auto=format&fit=crop',
    recommendedZone: 'The Starlit Rooftop Deck'
  },
  {
    name: 'Intimate Engagement' as Occasion,
    badge: '2 to 12 Guests',
    tagline: 'Full private estate exclusivity for your closest family with live master barbecue grills and champagne flutes.',
    bgImage: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=1200&auto=format&fit=crop',
    recommendedZone: 'The Candlelit Garden Courtyard'
  },
  {
    name: 'Candlelight Surprise' as Occasion,
    badge: 'Unforgettable Starlight',
    tagline: 'A blindfolded entrance leading to an ethereal glowing glasshouse with personalized chef tasting menu.',
    bgImage: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop',
    recommendedZone: 'The Glasshouse Pavilion'
  }
];

export const OccasionsSection = ({ onSelectOccasionForBuilder }: OccasionsSectionProps) => {
  return (
    <section id="occasions" className="py-20 bg-[#FFFDFB] border-b border-[#E8D9DC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F8EDEF] border border-[#E8D9DC] text-[#8F3F50] text-xs font-semibold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#C9A15B]" />
            <span>Tailored To Your Occasion</span>
          </div>
          <h2 className="font-serif-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#241E20]">
            Crafted for Life’s Greatest Moments
          </h2>
          <p className="text-sm sm:text-base text-[#5C4E52] font-light mt-3">
            Every celebration requires a unique ambiance. Tell us what you are celebrating, and we transform our private venue into your customized sanctuary.
          </p>
        </div>

        {/* Occasion Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {OCCASION_CARDS.map((item, idx) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="group aurawed-card rounded-3xl flex flex-col overflow-hidden shadow-[0_4px_20px_rgba(80,50,30,0.04)] hover:shadow-[0_15px_35px_rgba(80,50,30,0.08)] transition-all duration-300"
            >
              {/* Image with Dark Gradient */}
              <div className="relative aspect-[16/9] overflow-hidden bg-[#FFFDFB]">
                <img
                  src={item.bgImage}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/95 text-[10px] uppercase tracking-wider text-[#8F3F50] font-bold shadow-xs">
                  {item.badge}
                </div>
                <div className="absolute bottom-3 left-4 text-white text-[11px] font-semibold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#C9A15B]" />
                  <span>Best in: {item.recommendedZone}</span>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif-display text-2xl font-bold text-[#241E20] group-hover:text-[#8F3F50] transition-colors mb-2">
                    {item.name}
                  </h3>
                  <p className="text-xs text-[#5C4E52] font-light leading-relaxed mb-6">
                    {item.tagline}
                  </p>
                </div>

                <button
                  onClick={() => onSelectOccasionForBuilder(item.name)}
                  className="w-full py-3 rounded-full aurawed-button-secondary text-[#8F3F50] font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer group/btn hover:border-[#8F3F50]"
                >
                  <span>Design a {item.name}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
