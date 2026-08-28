import { ShieldCheck, Lock, Sparkles, Utensils, Music, Heart, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

interface WhyPrivateSectionProps {
  onOpenInquiry: () => void;
}

export const WhyPrivateSection = ({ onOpenInquiry }: WhyPrivateSectionProps) => {
  return (
    <section id="why-private" className="py-16 sm:py-24 bg-[#FFFDFB] border-b border-[#E8D9DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#E8D9DC] text-[#8F3F50] text-xs font-semibold uppercase tracking-widest mb-3 shadow-xs">
            <ShieldCheck className="w-3.5 h-3.5 text-[#C9A15B]" />
            <span>The Private Estate Difference</span>
          </div>

          <h2 className="font-serif-display text-3xl sm:text-5xl font-bold text-[#241E20] tracking-tight">
            Why 100% Private Venue Beats Public Restaurants
          </h2>
          <p className="text-sm sm:text-base text-[#5C4E52] font-light mt-3 leading-relaxed">
            Your most meaningful moments deserve absolute intimacy. See why couples choose our private Mumbai estate over standard crowded venues.
          </p>
        </div>

        {/* 4 Contrast Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="bg-white p-6 rounded-3xl border border-[#E8D9DC] shadow-[0_4px_20px_rgba(80,50,30,0.04)] space-y-4"
          >
            <div className="w-12 h-12 rounded-2xl bg-[#F8EDEF] border border-[#E8D9DC] flex items-center justify-center text-[#8F3F50]">
              <Lock className="w-6 h-6 text-[#8F3F50]" />
            </div>
            <h3 className="font-serif-display text-lg font-bold text-[#241E20]">
              Zero Strangers or Noise
            </h3>
            <p className="text-xs text-[#5C4E52] font-light leading-relaxed">
              In public restaurants, strangers sit two feet away and waiters rush you. Here, the entire private estate is locked exclusively for you.
            </p>
            <div className="pt-2 text-[10px] uppercase font-bold text-[#C9A15B] tracking-wider">
              ✓ 100% Private Exclusivity
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="bg-white p-6 rounded-3xl border border-[#E8D9DC] shadow-[0_4px_20px_rgba(80,50,30,0.04)] space-y-4"
          >
            <div className="w-12 h-12 rounded-2xl bg-[#F8EDEF] border border-[#E8D9DC] flex items-center justify-center text-[#8F3F50]">
              <Sparkles className="w-6 h-6 text-[#C9A15B]" />
            </div>
            <h3 className="font-serif-display text-lg font-bold text-[#241E20]">
              Bespoke Theming & Decor
            </h3>
            <p className="text-xs text-[#5C4E52] font-light leading-relaxed">
              Restaurants only offer standard tables. We spend 4 to 6 hours transforming the venue with 300+ candles, fairy canopies, and custom florals.
            </p>
            <div className="pt-2 text-[10px] uppercase font-bold text-[#C9A15B] tracking-wider">
              ✓ Custom Pinterest Reality
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="bg-white p-6 rounded-3xl border border-[#E8D9DC] shadow-[0_4px_20px_rgba(80,50,30,0.04)] space-y-4"
          >
            <div className="w-12 h-12 rounded-2xl bg-[#F8EDEF] border border-[#E8D9DC] flex items-center justify-center text-[#8F3F50]">
              <Utensils className="w-6 h-6 text-[#8F3F50]" />
            </div>
            <h3 className="font-serif-display text-lg font-bold text-[#241E20]">
              Dedicated Private Chef
            </h3>
            <p className="text-xs text-[#5C4E52] font-light leading-relaxed">
              No commercial batch cooking. Your dedicated executive chef prepares a multi-course gourmet tasting menu live to your personal dietary preference.
            </p>
            <div className="pt-2 text-[10px] uppercase font-bold text-[#C9A15B] tracking-wider">
              ✓ White-Glove Butler Service
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.3 }}
            className="bg-white p-6 rounded-3xl border border-[#E8D9DC] shadow-[0_4px_20px_rgba(80,50,30,0.04)] space-y-4"
          >
            <div className="w-12 h-12 rounded-2xl bg-[#F8EDEF] border border-[#E8D9DC] flex items-center justify-center text-[#8F3F50]">
              <Music className="w-6 h-6 text-[#C9A15B]" />
            </div>
            <h3 className="font-serif-display text-lg font-bold text-[#241E20]">
              Your Private Soundtrack
            </h3>
            <p className="text-xs text-[#5C4E52] font-light leading-relaxed">
              Play your personal romantic playlist, project your private video montage on the 120-inch screen, or invite a live violinist with zero restrictions.
            </p>
            <div className="pt-2 text-[10px] uppercase font-bold text-[#C9A15B] tracking-wider">
              ✓ 100% Control Over Vibe
            </div>
          </motion.div>
        </div>

        {/* The 4-Step Bespoke Process Flow */}
        <div className="bg-white border border-[#E8D9DC] rounded-3xl p-8 sm:p-12 shadow-[0_10px_35px_rgba(80,50,30,0.04)]">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs uppercase tracking-widest text-[#C9A15B] font-bold block mb-1">
              Seamless Production
            </span>
            <h3 className="font-serif-display text-2xl sm:text-4xl font-bold text-[#241E20]">
              How Your Experience Comes to Life
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            <div className="space-y-3 text-center sm:text-left">
              <div className="w-10 h-10 rounded-full bg-[#8F3F50] text-white font-serif-display text-lg font-bold flex items-center justify-center mx-auto sm:mx-0 shadow-md">
                1
              </div>
              <h4 className="font-serif-display text-base font-bold text-[#241E20]">
                Select Your Vision
              </h4>
              <p className="text-xs text-[#5C4E52] font-light leading-relaxed">
                Choose your occasion, preferred venue zone, theme aesthetic, and gourmet dining menu in our studio builder.
              </p>
            </div>

            <div className="space-y-3 text-center sm:text-left">
              <div className="w-10 h-10 rounded-full bg-[#8F3F50] text-white font-serif-display text-lg font-bold flex items-center justify-center mx-auto sm:mx-0 shadow-md">
                2
              </div>
              <h4 className="font-serif-display text-base font-bold text-[#241E20]">
                Personal Consultation
              </h4>
              <p className="text-xs text-[#5C4E52] font-light leading-relaxed">
                Our senior event director connects via WhatsApp to finalize song cues, calligraphy signs, and dietary customizations.
              </p>
            </div>

            <div className="space-y-3 text-center sm:text-left">
              <div className="w-10 h-10 rounded-full bg-[#8F3F50] text-white font-serif-display text-lg font-bold flex items-center justify-center mx-auto sm:mx-0 shadow-md">
                3
              </div>
              <h4 className="font-serif-display text-base font-bold text-[#241E20]">
                Master Transformation
              </h4>
              <p className="text-xs text-[#5C4E52] font-light leading-relaxed">
                Our in-house production crew transforms the venue for 4–6 hours prior, lighting 300+ candles and prepping your private chef.
              </p>
            </div>

            <div className="space-y-3 text-center sm:text-left">
              <div className="w-10 h-10 rounded-full bg-[#C9A15B] text-white font-serif-display text-lg font-bold flex items-center justify-center mx-auto sm:mx-0 shadow-md">
                4
              </div>
              <h4 className="font-serif-display text-base font-bold text-[#241E20]">
                Arrive to Magic
              </h4>
              <p className="text-xs text-[#5C4E52] font-light leading-relaxed">
                Step through the private gates to a jaw-dropping romantic sanctuary reserved exclusively for the two of you.
              </p>
            </div>
          </div>

          <div className="mt-10 pt-8 border-t border-[#E8D9DC] text-center">
            <button
              onClick={onOpenInquiry}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full aurawed-button-primary text-xs uppercase tracking-widest font-bold cursor-pointer"
            >
              <span>Schedule Private Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
