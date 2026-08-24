import { REAL_CLIENT_TRANSFORMATIONS, FAQ_LIST } from '../data/venueData';
import { Sparkles, Heart, Quote, Star, HelpCircle, MessageSquare } from 'lucide-react';
import { motion } from 'motion/react';

interface LookbookSectionProps {
  onOpenInquiry: () => void;
}

export const LookbookSection = ({ onOpenInquiry }: LookbookSectionProps) => {
  return (
    <section id="lookbook" className="py-16 sm:py-24 bg-[#FAF7F2] border-b border-[#E5D9C8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#DFCDB7] text-[#6B1724] text-xs font-semibold uppercase tracking-widest mb-3 shadow-xs">
            <Heart className="w-3.5 h-3.5 text-[#6B1724]" />
            <span>Real Couples • Real Magic</span>
          </div>

          <h2 className="font-serif-display text-3xl sm:text-5xl font-bold text-[#1E1B18] tracking-tight">
            Client Transformations Lookbook
          </h2>
          <p className="text-sm sm:text-base text-[#52453E] font-light mt-3 leading-relaxed">
            See how our single private venue in Bandra was uniquely customized and transformed for different couple celebrations.
          </p>
        </div>

        {/* 3 Real Couple Story Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {REAL_CLIENT_TRANSFORMATIONS.map((story) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-3xl border border-[#E5D9C8] overflow-hidden shadow-[0_4px_20px_rgba(80,50,30,0.04)] flex flex-col group"
            >
              <div className="relative aspect-[16/11] overflow-hidden bg-[#F0E6D8]">
                <img
                  src={story.coverImage}
                  alt={story.coupleNames}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/95 text-[10px] uppercase tracking-widest text-[#6B1724] font-bold shadow-xs">
                  {story.occasion}
                </div>

                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <div className="text-[10px] text-[#DFB776] uppercase tracking-widest font-semibold">
                    {story.spaceUsed}
                  </div>
                  <h3 className="font-serif-display text-xl font-bold leading-tight">
                    {story.coupleNames}
                  </h3>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="relative pl-6 text-xs text-[#1E1B18] font-serif-display italic font-semibold leading-relaxed">
                    <Quote className="w-4 h-4 text-[#C59A5D] absolute top-0 left-0" />
                    "{story.quote}"
                  </div>

                  <p className="text-xs text-[#52453E] font-light leading-relaxed">
                    {story.story}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#EBE2D5]">
                  <span className="text-[10px] uppercase tracking-wider text-[#8C6D46] font-bold block mb-1.5">
                    Custom Setup Additions:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {story.addOnsIncluded.map((add, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-full bg-[#FAF5EE] border border-[#DFCDB7] text-[10px] font-medium text-[#6B1724]"
                      >
                        {add}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* FAQs Section */}
        <div className="bg-white border border-[#E5D9C8] rounded-3xl p-8 sm:p-12 shadow-[0_10px_35px_rgba(80,50,30,0.04)] max-w-4xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-[#8C6D46] font-bold mb-2">
              <HelpCircle className="w-4 h-4 text-[#C59A5D]" />
              <span>Frequently Asked Questions</span>
            </div>
            <h3 className="font-serif-display text-2xl sm:text-4xl font-bold text-[#1E1B18]">
              Everything You Need to Know
            </h3>
          </div>

          <div className="space-y-6">
            {FAQ_LIST.map((faq, i) => (
              <div key={i} className="pb-6 border-b border-[#EBE2D5] last:border-none last:pb-0">
                <h4 className="font-serif-display text-base sm:text-lg font-bold text-[#1E1B18] mb-2 flex items-start gap-2">
                  <span className="text-[#6B1724] font-normal">Q:</span>
                  <span>{faq.q}</span>
                </h4>
                <p className="text-xs sm:text-sm text-[#52453E] font-light leading-relaxed pl-5">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-[#EBE2D5] text-center">
            <p className="text-xs text-[#736359] mb-3">
              Have a custom request or specific dream idea?
            </p>
            <button
              onClick={onOpenInquiry}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full aurawed-button-primary text-xs uppercase tracking-widest font-bold cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chat with Our Private Concierge</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
