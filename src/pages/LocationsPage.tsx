import { TargetAreasSection } from '../components/TargetAreasSection';
import { BespokeExperienceConfig } from '../types';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { MapPin, Car, Clock, Sparkles, ArrowRight, Phone } from 'lucide-react';
import { BRANDING } from '../data/branding';

interface LocationsPageProps {
  onApplyConfigToBuilder: (config: Partial<BespokeExperienceConfig>) => void;
  onOpenInquiry: () => void;
}

const corridors = [
  { name: 'Kurla', emoji: '🏛️', time: '2 min', desc: 'Our flagship estate is IN Kurla West — zero transit required.', color: '#6B1724' },
  { name: 'Sion', emoji: '🌆', time: '6 min', desc: 'A short, smooth luxury chauffeur drive across the Eastern Express.', color: '#8C3A4D' },
  { name: 'Dadar', emoji: '🌸', time: '10 min', desc: 'From the heart of Central Mumbai to your private sanctuary.', color: '#C59A5D' },
  { name: 'Mahim', emoji: '🌊', time: '8 min', desc: 'Cross the causeway in luxury and arrive in style.', color: '#7A551E' },
  { name: 'Wadala', emoji: '🌿', time: '10 min', desc: 'BKC corridor connects Wadala directly to Kurla in minutes.', color: '#4A6741' },
  { name: 'Chembur', emoji: '🏙️', time: '12 min', desc: 'Eastern Express Highway brings you right to our gates.', color: '#4A3E5C' }
];

const transitFeatures = [
  {
    icon: <Car className="w-5 h-5 text-[#C59A5D]" />,
    title: 'VIP Chauffeured Pickup',
    desc: 'A luxury sedan arrives at your exact doorstep with welcome mocktails and a floral corsage.'
  },
  {
    icon: <Clock className="w-5 h-5 text-[#C59A5D]" />,
    title: 'Curated Journey Music',
    desc: 'Your signature couple song plays softly as you travel to the estate.'
  },
  {
    icon: <Sparkles className="w-5 h-5 text-[#C59A5D]" />,
    title: 'Grand Arrival Reveal',
    desc: 'Step out to a candlelit pathway, live violin, and a private butler welcome.'
  },
  {
    icon: <MapPin className="w-5 h-5 text-[#C59A5D]" />,
    title: 'Return Drop-off',
    desc: 'Chauffeured ride back home with luxury keepsake hampers and photo prints.'
  }
];

export const LocationsPage = ({ onApplyConfigToBuilder, onOpenInquiry }: LocationsPageProps) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      {/* Hero */}
      <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-20 bg-gradient-to-br from-[#1E160E] via-[#1A1C0E] to-[#181310] overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img src="https://images.unsplash.com/photo-1570168007204-dfb528c6958f?q=80&w=1600&auto=format&fit=crop" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#1E160E]/90 to-[#1E160E]/80" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#DFB776] text-xs font-semibold uppercase tracking-widest mb-5">
            <MapPin className="w-3.5 h-3.5" />
            <span>Kurla West, Mumbai</span>
          </div>
          <h1 className="font-serif-display text-4xl sm:text-6xl font-bold text-white tracking-tight mb-4">
            Serving All of Central Mumbai
          </h1>
          <p className="text-white/70 text-base sm:text-lg font-light max-w-2xl mx-auto mb-10">
            Strategically located in Kurla West (BKC Corridor) — the romantic heart of Mumbai, connecting Sion, Dadar, Kurla, Mahim, Wadala, and Chembur in minutes.
          </p>

          {/* Corridor Pills */}
          <div className="flex flex-wrap justify-center gap-3">
            {corridors.map((c) => (
              <div key={c.name} className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20">
                <span className="text-base">{c.emoji}</span>
                <span className="text-sm font-semibold text-white">{c.name}</span>
                <span className="text-xs text-[#DFB776] font-medium">{c.time}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transit ETA Cards */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#E5D9C8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-serif-display text-3xl sm:text-4xl font-bold text-[#181310] mb-3">Your Neighborhood, Our Estate</h2>
            <p className="text-sm text-[#52453E] font-light">Every pickup includes a luxury sedan, welcome drink, and your chosen music — making the journey part of the experience.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {corridors.map((corridor, i) => (
              <motion.div
                key={corridor.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="aurawed-card rounded-3xl p-6 space-y-4"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{corridor.emoji}</span>
                    <div>
                      <h3 className="font-serif-display text-xl font-bold text-[#181310]">{corridor.name}</h3>
                      <p className="text-[10px] text-[#8C6D46] uppercase tracking-wider font-semibold">Central Mumbai Corridor</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-bold text-[#6B1724] font-serif-display">{corridor.time}</div>
                    <div className="text-[10px] text-[#8C6D46] uppercase tracking-wider">Transit</div>
                  </div>
                </div>
                <p className="text-xs text-[#52453E] font-light leading-relaxed">{corridor.desc}</p>
                <button
                  onClick={() => navigate('/ai-studio')}
                  className="w-full py-2.5 rounded-full aurawed-button-secondary text-[11px] font-semibold uppercase tracking-wider cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#C59A5D]" />
                  <span>Generate {corridor.name} Date Route</span>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* VIP Chauffeur Features */}
      <section className="py-16 sm:py-20 bg-[#FAF7F2] border-b border-[#E5D9C8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-serif-display text-3xl font-bold text-[#181310] mb-3">The VIP Chauffeur Experience</h2>
            <p className="text-sm text-[#52453E] font-light">The celebration begins the moment you step into the car — not just when you arrive.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {transitFeatures.map((feat, i) => (
              <div key={i} className="bg-white border border-[#EBE2D5] rounded-3xl p-6 space-y-3 shadow-sm">
                <div className="w-10 h-10 rounded-2xl bg-[#FAF5EE] border border-[#DFCDB7] flex items-center justify-center">
                  {feat.icon}
                </div>
                <h3 className="font-serif-display text-base font-bold text-[#181310]">{feat.title}</h3>
                <p className="text-xs text-[#52453E] font-light leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Neighborhood Romantic Routes via AI */}
      <TargetAreasSection
        onSelectAreaForBuilder={(area) => {
          onApplyConfigToBuilder({
            spaceArea: area.recommendedSpace,
            themeStyle: area.recommendedTheme,
            selectedAddOnIds: area.suggestedAddOns,
            targetNeighborhood: area.id,
            customRequests: `VIP Chauffeured pickup from ${area.name}.`
          });
          navigate('/builder');
        }}
        onApplyConfigToBuilder={onApplyConfigToBuilder}
        onNavigateSection={(id) => {
          if (id === 'experience-builder') navigate('/builder');
        }}
      />

      {/* Contact / Book */}
      <section className="py-14 bg-gradient-to-br from-[#1E160E] to-[#181310] text-white border-t border-[#362A22]">
        <div className="max-w-3xl mx-auto px-4 text-center space-y-5">
          <h2 className="font-serif-display text-3xl font-bold">Ready to Reserve Your Slot?</h2>
          <p className="text-white/70 text-sm font-light">Book your private estate and arrange your VIP chauffeur pickup in one quick call.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={onOpenInquiry}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#6B1724] border border-white/20 text-white text-xs uppercase tracking-widest font-bold hover:bg-[#7F1D2C] transition-colors cursor-pointer shadow-xl"
            >
              <Sparkles className="w-4 h-4 text-[#DFB776]" />
              <span>Reserve Private Estate</span>
            </button>
            <a
              href={`https://wa.me/${BRANDING.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#25D366] text-white text-xs uppercase tracking-widest font-bold hover:bg-[#1EBE5D] transition-colors cursor-pointer shadow-xl"
            >
              <Phone className="w-4 h-4" />
              <span>WhatsApp Now</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
