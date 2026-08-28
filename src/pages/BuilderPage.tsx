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
    <div className="min-h-screen bg-[#FFFDFB]">
      {/* Header */}
      <section className="relative pt-28 pb-10 sm:pt-36 sm:pb-12 bg-gradient-to-b from-[#FFFDFB] to-[#FFFDFB] border-b border-[#E8D9DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#E8D9DC] text-[#8F3F50] text-xs font-semibold uppercase tracking-widest mb-5 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#C9A15B]" />
            <span>Interactive Design Studio</span>
          </div>
          <h1 className="font-serif-display text-4xl sm:text-6xl font-bold text-[#241E20] tracking-tight mb-4">
            Design Your Bespoke Experience
          </h1>
          <p className="text-sm sm:text-base text-[#5C4E52] font-light max-w-2xl mx-auto leading-relaxed">
            Step by step, build your perfect private celebration. Choose your venue zone, décor theme, dining style, bespoke enhancements, and see a live cost estimate.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-3 text-xs text-[#5C4E52]">
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[#E8D9DC]">
              ✦ Step-by-step customizer
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[#E8D9DC]">
              ✦ Live price calculator
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[#E8D9DC]">
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
      <section className="py-14 bg-gradient-to-br from-[#241E20] to-[#2A1400] text-white border-t border-[#362A22]">
        <div className="max-w-3xl mx-auto px-4 text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#C9A15B] text-xs font-bold uppercase tracking-widest">
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
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#C9A15B] text-[#241E20] text-sm font-bold uppercase tracking-widest hover:brightness-105 transition-all cursor-pointer shadow-xl"
          >
            <Sparkles className="w-4 h-4" />
            <span>Launch Love AI Studio</span>
          </button>
        </div>
      </section>
    </div>
  );
};
