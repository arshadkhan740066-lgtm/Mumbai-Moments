import { ExperienceBuilder } from '../components/ExperienceBuilder';
import { BespokeExperienceConfig, VenueTransformationTheme } from '../types';
import { Sparkles, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface BuilderPageProps {
  onBookExperience: (config: BespokeExperienceConfig) => void;
  onOpenInquiry: () => void;
}

export const BuilderPage = ({ onBookExperience, onOpenInquiry }: BuilderPageProps) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      {/* Header */}
      <section className="relative pt-28 pb-10 sm:pt-36 sm:pb-12 bg-gradient-to-b from-[#FAF5EE] to-[#FAF7F2] border-b border-[#E5D9C8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#DFCDB7] text-[#6B1724] text-xs font-semibold uppercase tracking-widest mb-5 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#C59A5D]" />
            <span>Interactive Design Studio</span>
          </div>
          <h1 className="font-serif-display text-4xl sm:text-6xl font-bold text-[#181310] tracking-tight mb-4">
            Design Your Bespoke Experience
          </h1>
          <p className="text-sm sm:text-base text-[#52453E] font-light max-w-2xl mx-auto leading-relaxed">
            Step by step, build your perfect private celebration. Choose your venue zone, décor theme, dining style, bespoke enhancements, and see a live cost estimate.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-3 text-xs text-[#736359]">
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[#E5D9C8]">
              ✦ Step-by-step customizer
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[#E5D9C8]">
              ✦ Live price calculator
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[#E5D9C8]">
              ✦ Instant WhatsApp inquiry
            </span>
          </div>
        </div>
      </section>

      {/* Experience Builder Component */}
      <ExperienceBuilder
        onBookExperience={onBookExperience}
        onSelectTheme={() => navigate('/themes')}
        onOpenLoveAI={() => navigate('/ai-studio')}
      />

      {/* AI Studio CTA */}
      <section className="py-14 bg-gradient-to-br from-[#1E160E] to-[#2A1400] text-white border-t border-[#362A22]">
        <div className="max-w-3xl mx-auto px-4 text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#DFB776] text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            <span>Love AI Studio</span>
          </div>
          <h2 className="font-serif-display text-3xl sm:text-4xl font-bold tracking-tight">
            Need a Personalized Proposal Speech?
          </h2>
          <p className="text-white/70 text-sm font-light max-w-xl mx-auto">
            Our AI generates a completely bespoke, emotionally resonant love letter or proposal speech tailored to your unique love story.
          </p>
          <button
            onClick={() => navigate('/ai-studio')}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#DFB776] text-[#18140E] text-sm font-bold uppercase tracking-widest hover:brightness-105 transition-all cursor-pointer shadow-xl"
          >
            <Sparkles className="w-4 h-4" />
            <span>Launch Love AI Studio</span>
          </button>
        </div>
      </section>
    </div>
  );
};
