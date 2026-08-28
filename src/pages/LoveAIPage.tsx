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
    icon: <Wand2 className="w-5 h-5 text-[#C9A15B]" />,
    title: 'Love Letter & Proposal Speech',
    desc: 'AI generates a bespoke, emotionally resonant speech personalized to your love story.'
  },
  {
    icon: <Calendar className="w-5 h-5 text-[#C9A15B]" />,
    title: 'Romantic Timeline Sequencer',
    desc: 'A minute-by-minute, curated surprise itinerary for your perfect evening.'
  },
  {
    icon: <Heart className="w-5 h-5 text-[#C9A15B]" />,
    title: 'Romance Vibe Quiz & Matcher',
    desc: 'Answer 4 questions and let AI match you to your ideal space and theme.'
  },
  {
    icon: <Sparkles className="w-5 h-5 text-[#C9A15B]" />,
    title: 'Couple Monogram & Keepsake',
    desc: 'Custom digital monograms and love vow keepsakes to print on luxury parchment.'
  }
];

export const LoveAIPage = ({ onApplyConfigToBuilder, onOpenInquiry }: LoveAIPageProps) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#FFFDFB]">
      {/* Hero */}
      <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-20 bg-gradient-to-br from-[#F8EDEF] to-[#FFFDFB] border-b border-[#E8D9DC] overflow-hidden">
        {/* Background glow orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#8F3F50]/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#C9A15B]/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#E8D9DC] text-[#8F3F50] text-xs font-semibold uppercase tracking-widest mb-5 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 animate-pulse text-[#8F3F50]" />
            <span>AI-Powered Romance Studio</span>
          </div>
          <h1 className="font-serif-display text-4xl sm:text-6xl font-bold text-[#241E20] tracking-tight mb-4">
            Love AI Studio
          </h1>
          <p className="text-sm sm:text-lg text-[#5C4E52] font-light max-w-2xl mx-auto mb-10">
            Mumbai Moments' exclusive AI concierge. Generate personalized proposal speeches, surprise itineraries, and find your perfect romantic match — all tailored to your unique love story.
          </p>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {studioFeatures.map((feat, i) => (
              <div key={i} className="bg-white border border-[#E8D9DC] rounded-2xl p-5 text-left space-y-3 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-xl bg-[#F8EDEF] border border-[#E8D9DC] flex items-center justify-center">
                  {feat.icon}
                </div>
                <h3 className="font-serif-display text-sm font-bold text-[#241E20] leading-snug">{feat.title}</h3>
                <p className="text-[11px] text-[#5C4E52] font-light leading-relaxed">{feat.desc}</p>
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
      <section className="py-14 bg-[#FFFDFB] border-t border-[#E8D9DC]">
        <div className="max-w-3xl mx-auto px-4 text-center space-y-5">
          <h2 className="font-serif-display text-3xl font-bold text-[#241E20]">Ready to Make It Real?</h2>
          <p className="text-sm text-[#5C4E52] font-light">Your AI-crafted speech, matched theme, and timeline are ready. Now let's reserve the private estate exclusively for you.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={onOpenInquiry}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full aurawed-button-primary text-xs uppercase tracking-widest font-bold cursor-pointer shadow-lg"
            >
              <MessageSquare className="w-4 h-4 text-[#C9A15B]" />
              <span>Reserve Private Estate</span>
            </button>
            <button
              onClick={() => navigate('/builder')}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full aurawed-button-secondary text-xs uppercase tracking-widest font-bold cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-[#C9A15B]" />
              <span>Design in Builder</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
