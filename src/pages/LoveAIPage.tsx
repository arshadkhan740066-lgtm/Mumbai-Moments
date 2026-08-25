import { LoveAIStudio } from '../components/LoveAIStudio';
import { BespokeExperienceConfig } from '../types';
import { Sparkles, Wand2, Heart, Calendar, MessageSquare } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface LoveAIPageProps {
  onApplyConfigToBuilder: (config: Partial<BespokeExperienceConfig>) => void;
  onOpenInquiry: () => void;
}

const studioFeatures = [
  {
    icon: <Wand2 className="w-5 h-5 text-[#C59A5D]" />,
    title: 'Love Letter & Proposal Speech',
    desc: 'AI generates a bespoke, emotionally resonant speech personalized to your love story.'
  },
  {
    icon: <Calendar className="w-5 h-5 text-[#C59A5D]" />,
    title: 'Romantic Timeline Sequencer',
    desc: 'A minute-by-minute, curated surprise itinerary for your perfect evening.'
  },
  {
    icon: <Heart className="w-5 h-5 text-[#C59A5D]" />,
    title: 'Romance Vibe Quiz & Matcher',
    desc: 'Answer 4 questions and let AI match you to your ideal space and theme.'
  },
  {
    icon: <Sparkles className="w-5 h-5 text-[#C59A5D]" />,
    title: 'Couple Monogram & Keepsake',
    desc: 'Custom digital monograms and love vow keepsakes to print on luxury parchment.'
  }
];

export const LoveAIPage = ({ onApplyConfigToBuilder, onOpenInquiry }: LoveAIPageProps) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      {/* Hero */}
      <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-20 bg-gradient-to-br from-[#1E160E] via-[#2A0F1A] to-[#1A0E1C] overflow-hidden">
        {/* Background glow orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#6B1724]/30 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#C59A5D]/20 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#DFB776] text-xs font-semibold uppercase tracking-widest mb-5">
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            <span>AI-Powered Romance Studio</span>
          </div>
          <h1 className="font-serif-display text-4xl sm:text-6xl font-bold text-white tracking-tight mb-4">
            Love AI Studio
          </h1>
          <p className="text-white/70 text-base sm:text-lg font-light max-w-2xl mx-auto mb-10">
            Mumbai Moments' exclusive AI concierge. Generate personalized proposal speeches, surprise itineraries, and find your perfect romantic match — all tailored to your unique love story.
          </p>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {studioFeatures.map((feat, i) => (
              <div key={i} className="bg-white/10 border border-white/15 rounded-2xl p-5 text-left space-y-3 hover:bg-white/15 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                  {feat.icon}
                </div>
                <h3 className="font-serif-display text-sm font-bold text-white leading-snug">{feat.title}</h3>
                <p className="text-[11px] text-white/60 font-light leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main AI Studio Component */}
      <LoveAIStudio
        onApplyConfigToBuilder={onApplyConfigToBuilder}
        onNavigateSection={(id) => {
          if (id === 'experience-builder') navigate('/builder');
        }}
      />

      {/* Final CTA */}
      <section className="py-14 bg-[#FAF5EE] border-t border-[#E5D9C8]">
        <div className="max-w-3xl mx-auto px-4 text-center space-y-5">
          <h2 className="font-serif-display text-3xl font-bold text-[#181310]">Ready to Make It Real?</h2>
          <p className="text-sm text-[#52453E] font-light">Your AI-crafted speech, matched theme, and timeline are ready. Now let's reserve the private estate exclusively for you.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={onOpenInquiry}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full aurawed-button-primary text-xs uppercase tracking-widest font-bold cursor-pointer shadow-lg"
            >
              <MessageSquare className="w-4 h-4 text-[#DFB776]" />
              <span>Reserve Private Estate</span>
            </button>
            <button
              onClick={() => navigate('/builder')}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full aurawed-button-secondary text-xs uppercase tracking-widest font-bold cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-[#C59A5D]" />
              <span>Design in Builder</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
