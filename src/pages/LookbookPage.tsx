import { LookbookSection } from '../components/LookbookSection';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { Star, Camera, Sparkles, ArrowRight, Heart } from 'lucide-react';

interface LookbookPageProps {
  onOpenInquiry: () => void;
}

const testimonials = [
  {
    name: 'Rahul & Priya Mehta',
    occasion: 'Proposal — Glasshouse Pavilion',
    rating: 5,
    text: 'She was in absolute tears — of joy. The candlelit glasshouse, the violin serenade, the photographer who caught the exact moment I went down on one knee... beyond anything I imagined. The team truly made it perfect.',
    location: 'Dadar, Mumbai',
    image: 'https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?q=80&w=400&auto=format&fit=crop&crop=face'
  },
  {
    name: 'Arjun & Kavya Sharma',
    occasion: 'Anniversary — Starlit Rooftop Deck',
    rating: 5,
    text: 'Our 5th anniversary on the rooftop felt like we were the only two people in Mumbai. The open-air cinema playing our wedding video under the stars, the chef\'s tasting menu... absolutely magical.',
    location: 'Chembur, Mumbai',
    image: 'https://images.unsplash.com/photo-1529391409965-5c0c1f8e5c6c?q=80&w=400&auto=format&fit=crop&crop=face'
  },
  {
    name: 'Sahil Verma',
    occasion: 'Surprise Date Night — Royal Garden Courtyard',
    rating: 5,
    text: 'I surprised my girlfriend completely. From the chauffeur pickup to the blindfold arrival to the 500-candle garden reveal — she could not stop smiling. Worth every rupee, completely unforgettable.',
    location: 'Kurla, Mumbai',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop&crop=face'
  },
  {
    name: 'Meera & Vikram Nair',
    occasion: 'Birthday — Bohemian Cabana',
    rating: 5,
    text: 'Mumbai Moments turned my wife\'s birthday into a boho fantasy she\'d always dreamed of. The pampas decor, the personalized marquee letters, and the private chef who cooked her favourites — she never forgot.',
    location: 'Mahim, Mumbai',
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=400&auto=format&fit=crop&crop=face'
  },
  {
    name: 'Dev & Ananya Patel',
    occasion: 'Engagement — Full Estate Buyout',
    rating: 5,
    text: 'We hired the full estate for our intimate engagement party. The 10 guests we invited said it was the most beautiful private party they\'d ever attended. The privacy, the custom décor, the chef — flawless.',
    location: 'Sion, Mumbai',
    image: 'https://images.unsplash.com/photo-1488161628813-04466f872be2?q=80&w=400&auto=format&fit=crop&crop=face'
  },
  {
    name: 'Rohan Malhotra',
    occasion: 'Candlelight Surprise — Glasshouse Pavilion',
    rating: 5,
    text: 'My partner had no idea. From the moment I said "dress up nicely tonight" to when she saw 400 candles in a private glasshouse with a violin playing her favourite song — she cried, I cried. Thank you Mumbai Moments.',
    location: 'Wadala, Mumbai',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop&crop=face'
  }
];

const galleryImages = [
  'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1558346547-4439467bd1d5?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1583876950993-9a3af5a4437a?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?q=80&w=800&auto=format&fit=crop',
];

export const LookbookPage = ({ onOpenInquiry }: LookbookPageProps) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      {/* Hero */}
      <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-20 bg-[#FAF5EE] border-b border-[#E5D9C8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#DFCDB7] text-[#6B1724] text-xs font-semibold uppercase tracking-widest mb-5 shadow-sm">
            <Camera className="w-3.5 h-3.5 text-[#C59A5D]" />
            <span>Real Transformations & Stories</span>
          </div>
          <h1 className="font-serif-display text-4xl sm:text-6xl font-bold text-[#181310] tracking-tight mb-4">
            The Lookbook
          </h1>
          <p className="text-sm sm:text-lg text-[#52453E] font-light max-w-2xl mx-auto leading-relaxed">
            Real couples. Real moments. Real transformations. Browse our gallery and read their stories.
          </p>
        </div>
      </section>

      {/* Photo Gallery Grid */}
      <section className="py-16 sm:py-24 border-b border-[#E5D9C8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-serif-display text-3xl font-bold text-[#181310] mb-2">Photo Gallery</h2>
            <p className="text-sm text-[#52453E] font-light">Real estate transformations captured by our documentary photography team.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {galleryImages.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className={`relative rounded-2xl overflow-hidden ${i === 0 || i === 4 ? 'col-span-2 row-span-2' : ''} aspect-square`}
              >
                <img src={img} alt={`Gallery image ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#E5D9C8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAF5EE] border border-[#DFCDB7] text-[#6B1724] text-xs font-semibold uppercase tracking-widest mb-4">
              <Heart className="w-3.5 h-3.5 fill-[#6B1724] text-[#6B1724]" />
              <span>Real Love Stories</span>
            </div>
            <h2 className="font-serif-display text-3xl sm:text-4xl font-bold text-[#181310]">What Our Couples Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="bg-[#FAF7F2] border border-[#EBE2D5] rounded-3xl p-6 space-y-4"
              >
                <div className="flex items-center gap-1">
                  {[...Array(t.rating)].map((_, si) => (
                    <Star key={si} className="w-3.5 h-3.5 fill-[#C59A5D] text-[#C59A5D]" />
                  ))}
                </div>
                <p className="text-sm text-[#382E28] font-light leading-relaxed italic">"{t.text}"</p>
                <div className="pt-2 flex items-center gap-3 border-t border-[#EBE2D5]">
                  <img src={t.image} alt={t.name} className="w-10 h-10 rounded-full object-cover border-2 border-[#C59A5D]" />
                  <div>
                    <p className="text-sm font-bold text-[#181310]">{t.name}</p>
                    <p className="text-[10px] text-[#8C6D46] font-medium">{t.occasion}</p>
                    <p className="text-[10px] text-[#8C6D46]">{t.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <LookbookSection onOpenInquiry={onOpenInquiry} />

      {/* CTA */}
      <section className="py-14 bg-gradient-to-br from-[#6B1724] to-[#3A0B12] text-white">
        <div className="max-w-3xl mx-auto px-4 text-center space-y-5">
          <h2 className="font-serif-display text-3xl sm:text-4xl font-bold">Ready to Create Your Story?</h2>
          <p className="text-white/75 text-sm font-light">Join hundreds of couples who chose Mumbai Moments for the most important evenings of their lives.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={onOpenInquiry}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#DFB776] text-[#18140E] text-xs font-bold uppercase tracking-widest hover:brightness-105 transition-all cursor-pointer shadow-xl"
            >
              <Sparkles className="w-4 h-4" />
              <span>Book Your Date</span>
            </button>
            <button
              onClick={() => navigate('/themes')}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border-2 border-white/30 text-white text-xs font-bold uppercase tracking-widest hover:bg-white/10 transition-all cursor-pointer"
            >
              <span>Explore All Themes</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
