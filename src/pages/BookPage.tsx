import { useState } from 'react';
import { BespokeInquiryModal } from '../components/BespokeInquiryModal';
import { BespokeExperienceConfig } from '../types';
import { Sparkles, MessageSquare, Phone, Lock, Check, Heart, Clock, Calendar } from 'lucide-react';
import { BRANDING } from '../data/branding';
import { motion } from 'motion/react';

interface BookPageProps {
  initialConfig?: BespokeExperienceConfig | null;
}

const bookingSteps = [
  {
    num: '01',
    title: 'Submit Your Inquiry',
    desc: 'Fill the reservation form below or WhatsApp us directly with your occasion and preferred date.'
  },
  {
    num: '02',
    title: 'Design Consultation',
    desc: 'Our event director will call you within 2 hours to walk through your custom setup, preferences and decor vision.'
  },
  {
    num: '03',
    title: 'Your Date is Reserved',
    desc: 'Your slot is locked exclusively for you — zero chance of another booking on the same evening.'
  },
  {
    num: '04',
    title: 'We Handle Everything',
    desc: 'Our team sets up the full transformation while you focus on the person you\'re celebrating.'
  }
];

const timeSlots = [
  {
    time: '5:30 PM',
    name: 'Golden Hour Sunset',
    desc: 'Arrive during the most magical light of the day. Perfect for proposals and intimate rooftop dates.',
    icon: '🌅'
  },
  {
    time: '7:30 PM',
    name: 'Starlight Candlelight',
    desc: 'The signature evening slot. Full candlelit ambiance, live music, and a 3-hour private dining experience.',
    icon: '✨',
    popular: true
  },
  {
    time: '10:00 PM',
    name: 'Midnight Stargazing & Wine',
    desc: 'Late-night luxury under the open sky. Private rooftop wine tasting and stargazing.',
    icon: '🌙'
  }
];

export const BookPage = ({ initialConfig }: BookPageProps) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState('7:30 PM – Starlight Candlelight');

  return (
    <div className="min-h-screen bg-[#FFFDFB]">
      {/* Hero */}
      <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-20 bg-gradient-to-br from-[#2A1400] via-[#8F3F50] to-[#241E20] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#8F3F50]/90 to-[#241E20]/90" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#C9A15B] text-xs font-semibold uppercase tracking-widest mb-5">
            <Lock className="w-3.5 h-3.5" />
            <span>Reserve Your Private Evening</span>
          </div>
          <h1 className="font-serif-display text-4xl sm:text-6xl font-bold text-white tracking-tight mb-4">
            VIP Reservation & Consultation
          </h1>
          <p className="text-white/70 text-base sm:text-lg font-light max-w-2xl mx-auto">
            Complete the form below or WhatsApp us directly. Our senior event director will connect with you within 2 hours to confirm your date and begin your custom design.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 sm:py-20 bg-white border-b border-[#E8D9DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif-display text-3xl font-bold text-[#241E20]">How It Works</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bookingSteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="relative"
              >
                <div className="text-5xl font-bold font-serif-display text-[#E8D9DC] mb-3">{step.num}</div>
                <h3 className="font-serif-display text-lg font-bold text-[#241E20] mb-2">{step.title}</h3>
                <p className="text-xs text-[#5C4E52] font-light leading-relaxed">{step.desc}</p>
                {i < bookingSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-6 -right-3 text-[#E8D9DC] text-2xl">→</div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Evening Slot Selector */}
      <section className="py-16 bg-[#FFFDFB] border-b border-[#E8D9DC]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#E8D9DC] text-[#8F3F50] text-xs font-semibold uppercase tracking-widest mb-4 shadow-sm">
              <Clock className="w-3.5 h-3.5 text-[#C9A15B]" />
              <span>Choose Your Evening Slot</span>
            </div>
            <h2 className="font-serif-display text-3xl font-bold text-[#241E20]">Select Your Preferred Time</h2>
            <p className="text-sm text-[#5C4E52] font-light mt-2">Each slot has a different ambiance and mood. Choose the one that matches your vision.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {timeSlots.map((slot) => {
              const slotKey = `${slot.time} – ${slot.name}`;
              const isSelected = selectedSlot === slotKey;
              return (
                <button
                  key={slot.time}
                  onClick={() => setSelectedSlot(slotKey)}
                  className={`relative p-6 rounded-3xl text-left transition-all cursor-pointer border-2 ${
                    isSelected
                      ? 'bg-[#FFFDFB] border-[#8F3F50] shadow-lg'
                      : 'bg-white border-[#E8D9DC] hover:border-[#C9A15B] shadow-sm'
                  }`}
                >
                  {slot.popular && (
                    <span className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-[#8F3F50] text-white text-[9px] font-bold uppercase tracking-wider">
                      Most Popular
                    </span>
                  )}
                  <div className="text-3xl mb-3">{slot.icon}</div>
                  <div className="text-[#C9A15B] text-xs font-bold uppercase tracking-widest mb-1">{slot.time}</div>
                  <h3 className={`font-serif-display text-lg font-bold mb-2 ${isSelected ? 'text-[#8F3F50]' : 'text-[#241E20]'}`}>
                    {slot.name}
                  </h3>
                  <p className="text-xs text-[#5C4E52] font-light leading-relaxed">{slot.desc}</p>
                  {isSelected && (
                    <div className="mt-3 flex items-center gap-1.5 text-[#8F3F50]">
                      <Check className="w-4 h-4" />
                      <span className="text-xs font-bold">Selected</span>
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main CTA Buttons */}
      <section className="py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border-2 border-[#E8D9DC] rounded-3xl p-8 sm:p-10 shadow-xl space-y-8">
            {/* Privacy Notice */}
            <div className="flex items-start gap-3 p-4 rounded-2xl bg-[#FFFDFB] border border-[#E8D9DC]">
              <Lock className="w-5 h-5 text-[#C9A15B] flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-bold text-[#381F18]">Complete Exclusivity Guaranteed</p>
                <p className="text-xs text-[#5C4E52] font-light mt-0.5">Only 1 couple or group is hosted per evening slot. Your privacy is absolute — no other guests, no shared spaces, no interruptions.</p>
              </div>
            </div>

            {/* What's Included Summary */}
            <div className="space-y-3">
              <h3 className="font-serif-display text-xl font-bold text-[#241E20]">Every Booking Includes</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  '100% Exclusive Private Venue Access',
                  'Dedicated Executive Private Chef',
                  'Personal White-Glove Butler',
                  'Full Custom Bespoke Décor Setup',
                  'Curated Ambient Soundscape',
                  'Welcome Mocktail / Wine Toast',
                  'Private Dressing Suite & Valet Parking',
                  'Senior Event Director Consultation'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-sm text-[#241E20]">
                    <Check className="w-3.5 h-3.5 text-[#8F3F50] flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Selected Slot Display */}
            <div className="flex items-center gap-3 p-4 rounded-2xl bg-[#FFFDFB] border border-[#E8D9DC]">
              <Calendar className="w-5 h-5 text-[#C9A15B] flex-shrink-0" />
              <div>
                <p className="text-[10px] text-[#C9A15B] uppercase tracking-wider font-bold">Selected Evening Slot</p>
                <p className="text-sm font-bold text-[#241E20]">{selectedSlot}</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-3">
              <button
                onClick={() => setModalOpen(true)}
                className="w-full py-4 rounded-2xl aurawed-button-primary text-sm uppercase tracking-widest font-bold flex items-center justify-center gap-2 cursor-pointer shadow-xl"
              >
                <Sparkles className="w-4 h-4 text-[#C9A15B]" />
                <span>Submit Reservation Request</span>
              </button>

              <a
                href={`https://wa.me/${BRANDING.whatsappNumber}?text=Hello%20Mumbai%20Moments!%20I'd%20like%20to%20reserve%20a%20private%20slot%20for%20my%20special%20occasion.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 rounded-2xl bg-[#25D366] text-white text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#1EBE5D] transition-colors cursor-pointer shadow-md"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Instant WhatsApp Inquiry</span>
              </a>

              <a
                href={`tel:${BRANDING.contactPhone}`}
                className="w-full py-4 rounded-2xl aurawed-button-secondary text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer"
              >
                <Phone className="w-4 h-4" />
                <span>Call Us Directly: {BRANDING.contactPhone}</span>
              </a>
            </div>

            <p className="text-center text-xs text-[#C9A15B] font-light">
              Our senior concierge responds within 2 hours. Complete privacy guaranteed.
            </p>
          </div>
        </div>
      </section>

      <BespokeInquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialConfig={initialConfig}
      />
    </div>
  );
};
