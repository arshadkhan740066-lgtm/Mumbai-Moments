import React, { useState } from 'react';
import {
  Sparkles,
  X,
  Send,
  Heart,
  MessageSquare,
  Wand2,
  Music,
  MapPin,
  Clock,
  Check,
  Copy,
  Lightbulb
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface LoveAIConciergeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateSection: (sectionId: string) => void;
}

export const LoveAIConciergeModal: React.FC<LoveAIConciergeModalProps> = ({
  isOpen,
  onClose,
  onNavigateSection
}) => {
  const [promptInput, setPromptInput] = useState('');
  const [messages, setMessages] = useState<Array<{ role: 'user' | 'assistant'; text: string }>>([
    {
      role: 'assistant',
      text: "Namaste & Welcome! ✨ I am your Aura Love AI™ Concierge at Mumbai Moments. Tell me about your partner or dream celebration (e.g. 'I want to propose with live violin in Bandra' or 'How should I surprise my wife for our 5th anniversary?'), and I will craft the perfect romantic vision for you."
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const quickPrompts = [
    "💍 Best proposal timing & cue ideas",
    "💌 3-sentence emotional love toast",
    "🎻 Top romantic Hindi & English acoustic songs",
    "✨ Secret surprise blindfold reveal flow"
  ];

  const handleSendMessage = async (textToSend?: string) => {
    const text = textToSend || promptInput.trim();
    if (!text || isLoading) return;

    const newMessages = [...messages, { role: 'user' as const, text }];
    setMessages(newMessages);
    setPromptInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/love-ai/generate-letter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          specialMemories: text,
          occasion: 'Proposal / Romantic Date',
          tone: 'Expert Luxury Romantic Event Director & Wordsmith',
          languageStyle: 'Romantic and sophisticated with practical Mumbai Moments venue suggestions'
        })
      });

      const data = await response.json();
      if (data.success && data.content) {
        setMessages((prev) => [
          ...prev,
          {
            role: 'assistant',
            text: data.content
          }
        ]);
      } else {
        // Fallback rich answer
        setMessages((prev) => [
          ...prev,
          {
            role: 'assistant',
            text: "For an unforgettable experience at Mumbai Moments, we recommend starting with a chauffeured arrival at Pali Hill. As you walk into the Glasshouse Pavilion lit with 500+ glass candle lanterns, have our live violinist play your signature song. The 4ft illuminated marquee lights up at the exact moment of your proposal, followed by a celebratory 5-course private tasting by our resident chef!"
          }
        ]);
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          text: "Here is our secret director tip: Keep the ring with our private butler before arrival. When the second course arrives under a silver cloche dome, your personalized love letter and ring box will be revealed together under ambient starlight!"
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = (text: string, idx: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(idx);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="bg-white rounded-3xl border border-[#E8D9DC] shadow-2xl w-full max-w-2xl max-h-[85vh] flex flex-col overflow-hidden relative"
        >
          {/* Header */}
          <div className="p-4 sm:p-5 bg-[#F8EDEF] border-b border-[#E8D9DC] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#8F3F50] border border-[#C9A15B] flex items-center justify-center text-white shadow-xs">
                <Sparkles className="w-5 h-5 text-[#C9A15B]" />
              </div>
              <div>
                <h3 className="font-serif-display font-bold text-base text-[#241E20] flex items-center gap-2">
                  <span>Aura Love AI™ Assistant</span>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-[#F8EDEF] text-[#8F3F50] border border-[#E8D9DC]">
                    Live Concierge
                  </span>
                </h3>
                <p className="text-[11px] text-[#5C4E52]">
                  Instant romantic ideas, proposal speeches & custom venue tips
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-white border border-[#E8D9DC] flex items-center justify-center text-[#5C4E52] hover:bg-[#F8EDEF] cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Chat Messages Body */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 bg-[#FFFDFB]">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex gap-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.role === 'assistant' && (
                  <div className="w-7 h-7 rounded-full bg-[#8F3F50] text-white flex items-center justify-center shrink-0 text-xs shadow-xs mt-1">
                    <Heart className="w-3.5 h-3.5 fill-[#C9A15B] text-[#C9A15B]" />
                  </div>
                )}

                <div
                  className={`max-w-[85%] sm:max-w-[80%] rounded-2xl p-4 text-xs sm:text-sm leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-[#8F3F50] text-white rounded-tr-xs shadow-xs'
                      : 'bg-white text-[#241E20] border border-[#E8D9DC] rounded-tl-xs shadow-xs relative group'
                  }`}
                >
                  <p className="whitespace-pre-line">{msg.text}</p>

                  {msg.role === 'assistant' && index > 0 && (
                    <button
                      onClick={() => handleCopy(msg.text, index)}
                      className="absolute bottom-2 right-2 p-1.5 rounded-md bg-[#FFFDFB] text-[#C9A15B] hover:text-[#241E20] border border-[#E8D9DC] opacity-80 hover:opacity-100 text-[10px] flex items-center gap-1 cursor-pointer"
                    >
                      {copiedIndex === index ? (
                        <>
                          <Check className="w-3 h-3 text-emerald-600" />
                          <span className="text-emerald-700">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  )}
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex gap-3 justify-start">
                <div className="w-7 h-7 rounded-full bg-[#8F3F50] text-white flex items-center justify-center shrink-0 text-xs mt-1">
                  <Sparkles className="w-3.5 h-3.5 text-[#C9A15B] animate-spin" />
                </div>
                <div className="bg-white border border-[#E8D9DC] rounded-2xl p-4 text-xs text-[#5C4E52] flex items-center gap-2">
                  <span className="animate-pulse">Aura Love AI is weaving ideas...</span>
                </div>
              </div>
            )}
          </div>

          {/* Quick Prompts */}
          <div className="px-4 py-2 bg-[#F8EDEF]/60 border-t border-[#E8D9DC] flex flex-wrap gap-2">
            {quickPrompts.map((prompt, idx) => (
              <button
                key={idx}
                onClick={() => handleSendMessage(prompt)}
                disabled={isLoading}
                className="text-[11px] px-2.5 py-1 rounded-full bg-white border border-[#E8D9DC] text-[#5C4E52] hover:border-[#8F3F50] hover:text-[#8F3F50] transition-colors cursor-pointer"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Input Box */}
          <div className="p-4 bg-white border-t border-[#E8D9DC] flex items-center gap-2">
            <input
              type="text"
              value={promptInput}
              onChange={(e) => setPromptInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleSendMessage();
              }}
              placeholder="Ask for proposal speech, song list, surprise cues..."
              className="flex-1 px-4 py-2.5 rounded-full border border-[#E8D9DC] bg-[#FFFDFB] text-xs focus:outline-none focus:border-[#8F3F50]"
            />

            <button
              onClick={() => handleSendMessage()}
              disabled={!promptInput.trim() || isLoading}
              className="w-10 h-10 rounded-full aurawed-button-primary flex items-center justify-center shrink-0 cursor-pointer disabled:opacity-40"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
