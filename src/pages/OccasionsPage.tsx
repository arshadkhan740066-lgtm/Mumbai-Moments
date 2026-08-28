import { OccasionsSection } from '../components/OccasionsSection';
import { Occasion } from '../types';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { Sparkles, Heart, ArrowRight, Star } from 'lucide-react';

interface OccasionsPageProps {
  onOpenInquiry: () => void;
}

const occasionShowcases = [
  {
    icon: '💍',
    title: 'Proposals',
    tagline: 'She says Yes. We make sure of it.',
    description: 'The most important moment of your life deserves a private, perfectly orchestrated environment. Our expert proposal specialists handle every last detail — from the bespoke decor setup to the engagement ring placement, live violin serenade, and the hidden photographer capturing every emotion.',
    image: 'https://images.unsplash.com/photo-1583876950993-9a3af5a4437a?q=80&w=1200&auto=format&fit=crop',
    highlights: ['Cold pyro fountain reveal', 'Live acoustic violin serenade', '4K documentation team', 'Personalized love letter service'],
    badge: 'Most Booked',
    color: '#8F3F50'
  },
  {
    icon: '🥂',
    title: 'Anniversaries',
    tagline: 'Celebrate another year of forever.',
    description: 'Marking another chapter of your love story? Our anniversary celebrations are deeply personal — from recreating your first date details to a private screening of your couple memories under the stars with your favourite songs playing live.',
    image: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=1200&auto=format&fit=crop',
    highlights: ['Memory cinema under the stars', 'Personalized decor callbacks', 'Chef-curated anniversary tasting', 'Keepsake memory booklet'],
    badge: 'Most Romantic',
    color: '#8F3F50'
  },
  {
    icon: '✨',
    title: 'Romantic Date Nights',
    tagline: 'Turn an ordinary evening into something extraordinary.',
    description: 'Not every date needs a milestone. Sometimes the best surprise is an ordinary Wednesday turned into a magical private evening. Our date night packages are light, effortless, and unforgettably intimate.',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1200&auto=format&fit=crop',
    highlights: ['Surprise blindfold arrival', 'Curated cocktail welcome', 'Starlit private dining', 'Romantic takeaway hamper'],
    badge: 'Most Spontaneous',
    color: '#C9A15B'
  },
  {
    icon: '🎂',
    title: 'Birthday Celebrations',
    tagline: 'Make their day the most memorable day of the year.',
    description: 'A private birthday setup that goes far beyond a cake. Think: custom floral décor, personalized 4ft marquee letters, a gourmet dessert station, and a curated celebration that feels made just for them.',
    image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?q=80&w=1200&auto=format&fit=crop',
    highlights: ['Custom marquee letter display', 'Personalized dessert spread', 'Floral decor with their fav colors', '4K surprise photo-video capture'],
    badge: 'Most Joyful',
    color: '#B5451B'
  },
  {
    icon: '💎',
    title: 'Intimate Engagements',
    tagline: "The world's most exclusive engagement party.",
    description: 'Just announced your engagement? Celebrate with an intimate gathering of your closest loved ones in a fully private estate that feels like your own palace for the evening.',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1200&auto=format&fit=crop',
    highlights: ['Up to 12 guests in full privacy', 'Custom monogram decor', 'Multi-course family feast', 'Photo booth & documentary coverage'],
    badge: 'Most Premium',
    color: '#5C4E52'
  },
  {
    icon: '🕯️',
    title: 'Candlelight Surprises',
    tagline: "The kind of surprise they'll never forget.",
    description: 'Everything set, candles lit, violin playing — they walk in with a blindfold, and suddenly the entire world becomes just the two of you. Our candlelight surprise packages are fully managed so you can be fully present.',
    image: 'https://images.unsplash.com/photo-1591206369853-4a3ac7cdb58a?q=80&w=1200&auto=format&fit=crop',
    highlights: ['Full surprise logistics management', '300+ pillar candle setup', 'Blindfold arrival protocol', 'Emotional reveal photography'],
    badge: 'Most Dramatic',
    color: '#C9A15B'
  }
];

export const OccasionsPage = ({ onOpenInquiry }: OccasionsPageProps) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#FFFDFB]">
      <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-20 bg-gradient-to-br from-[#F8EDEF] to-[#FFFDFB] border-b border-[#E8D9DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#E8D9DC] text-[#8F3F50] text-xs font-semibold uppercase tracking-widest mb-5 shadow-sm">
            <Heart className="w-3.5 h-3.5 fill-[#8F3F50]" />
            <span>Milestone Occasions</span>
          </div>
          <h1 className="font-serif-display text-4xl sm:text-6xl font-bold text-[#241E20] tracking-tight mb-4">
            Every Occasion, Perfectly Crafted
          </h1>
          <p className="text-sm sm:text-lg text-[#5C4E52] font-light max-w-2xl mx-auto leading-relaxed">
            From world-class proposals to intimate birthday celebrations — each occasion receives its own unique design philosophy and expert execution.
          </p>
        </div>
      </section>

      {/* Occasion Showcase Cards */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {occasionShowcases.map((occ, idx) => (
            <motion.div
              key={occ.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${idx % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
            >
              {/* Image */}
              <div className={`relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                <img src={occ.image} alt={occ.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="text-3xl">{occ.icon}</span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest text-white" style={{ backgroundColor: occ.color }}>
                    {occ.badge}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className={`space-y-5 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div>
                  <h2 className="font-serif-display text-3xl sm:text-4xl font-bold text-[#241E20] mb-1">{occ.title}</h2>
                  <p className="font-cursive text-xl text-[#C9A15B]">{occ.tagline}</p>
                </div>
                <p className="text-sm text-[#5C4E52] font-light leading-relaxed">{occ.description}</p>
                <div className="space-y-2">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#5C4E52]">Signature Features</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {occ.highlights.map((h, hi) => (
                      <li key={hi} className="flex items-center gap-2 text-sm text-[#241E20]">
                        <Star className="w-3.5 h-3.5 text-[#C9A15B] fill-[#C9A15B] flex-shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-wrap gap-3 pt-2">
                  <button
                    onClick={() => navigate('/builder')}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full aurawed-button-primary text-xs uppercase tracking-wider font-bold cursor-pointer"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-[#C9A15B]" />
                    <span>Design This Package</span>
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

      <OccasionsSection onSelectOccasionForBuilder={(_occ) => navigate('/builder')} />
    </div>
  );
};
