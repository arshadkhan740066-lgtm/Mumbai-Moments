import React, { useState, useEffect, FormEvent } from 'react';
import {
  Occasion,
  VenueSpaceArea,
  DesignThemeStyle,
  DiningStyle,
  BespokeExperienceConfig
} from '../types';
import { BRANDING } from '../data/branding';
import { VENUE_SPACES, VENUE_THEMES, BESPOKE_ADDONS } from '../data/venueData';
import {
  X,
  Sparkles,
  Check,
  Calendar,
  MessageSquare,
  Lock,
  Heart,
  Phone,
  Mail,
  User,
  Clock,
  Send
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface BespokeInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialConfig?: BespokeExperienceConfig | null;
}

export const BespokeInquiryModal = ({
  isOpen,
  onClose,
  initialConfig
}: BespokeInquiryModalProps) => {
  const [clientName, setClientName] = useState('');
  const [partnerName, setPartnerName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredSlot, setPreferredSlot] = useState('7:30 PM – Starlight Candlelight');
  const [occasion, setOccasion] = useState<Occasion>('Proposal');
  const [spaceArea, setSpaceArea] = useState<VenueSpaceArea>('The Starlit Rooftop Deck');
  const [themeStyle, setThemeStyle] = useState<DesignThemeStyle>(
    'Celestial Candlelight & Fairy Lights'
  );
  const [diningStyle, setDiningStyle] = useState<DiningStyle>(
    '5-Course Private Chef Gourmet Tasting'
  );
  const [customVisionText, setCustomVisionText] = useState('');
  const [selectedAddOnIds, setSelectedAddOnIds] = useState<string[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (initialConfig) {
      if (initialConfig.occasion) setOccasion(initialConfig.occasion);
      if (initialConfig.spaceArea) setSpaceArea(initialConfig.spaceArea);
      if (initialConfig.themeStyle) setThemeStyle(initialConfig.themeStyle);
      if (initialConfig.diningStyle) setDiningStyle(initialConfig.diningStyle);
      if (initialConfig.selectedAddOnIds) setSelectedAddOnIds(initialConfig.selectedAddOnIds);
      if (initialConfig.customRequests) setCustomVisionText(initialConfig.customRequests);
    }
  }, [initialConfig, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleSendWhatsApp = () => {
    const selectedAddonNames = selectedAddOnIds
      .map((id) => BESPOKE_ADDONS.find((a) => a.id === id)?.name)
      .filter(Boolean)
      .join(', ');

    const message = `Hello Mumbai Moments VIP Concierge!
I would like to reserve your private venue in Bandra for a bespoke celebration:

👤 Name: ${clientName || 'Private Client'} ${partnerName ? `& ${partnerName}` : ''}
💍 Occasion: ${occasion}
📅 Preferred Date: ${preferredDate || 'Upcoming Date'} (${preferredSlot})
🏛️ Private Zone: ${spaceArea}
✨ Theme & Decor: ${themeStyle}
🍽️ Dining: ${diningStyle}
${selectedAddonNames ? `🎁 Enhancements: ${selectedAddonNames}\n` : ''}${
      customVisionText ? `📝 Special Vision / Notes: ${customVisionText}\n` : ''
    }
Please confirm availability and arrange our design consultation.`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${BRANDING.whatsappNumber}?text=${encoded}`, '_blank');
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-3xl bg-white rounded-3xl border border-[#E8D9DC] overflow-hidden shadow-2xl my-8 flex flex-col max-h-[90vh]"
        >
          {/* Header */}
          <div className="p-6 border-b border-[#E8D9DC] flex items-center justify-between bg-[#FFFDFB]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#FFFDFB] border border-[#C9A15B] flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-[#C9A15B]" />
              </div>
              <div>
                <h2 className="font-serif-display text-xl sm:text-2xl font-bold text-[#241E20]">
                  Reserve Private Venue & Consultation
                </h2>
                <p className="text-xs text-[#C9A15B] font-medium">
                  Mumbai Moments • 100% Exclusive Private Estate in Bandra
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white border border-[#E8D9DC] hover:bg-[#FFFDFB] text-[#241E20] transition-colors cursor-pointer"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Form Content */}
          <div className="overflow-y-auto p-6 sm:p-8">
            {isSubmitted ? (
              <div className="py-12 text-center max-w-md mx-auto space-y-5">
                <div className="w-16 h-16 rounded-full bg-[#FFFDFB] border-2 border-[#8F3F50] text-[#8F3F50] flex items-center justify-center mx-auto shadow-md">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="font-serif-display text-3xl font-bold text-[#241E20]">
                  Inquiry Received!
                </h3>
                <p className="text-xs sm:text-sm text-[#5C4E52] font-light leading-relaxed">
                  Thank you, <strong>{clientName || 'there'}</strong>. Our senior event director will connect with you via WhatsApp or phone within 2 hours to confirm your date and share your 3D setup moodboard.
                </p>

                <div className="pt-4 flex flex-col gap-3">
                  <button
                    onClick={handleSendWhatsApp}
                    className="w-full py-3.5 rounded-full bg-[#25D366] text-white text-xs uppercase tracking-wider font-bold flex items-center justify-center gap-2 hover:bg-[#1EBE5D] transition-colors cursor-pointer shadow-md"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Instant VIP WhatsApp Chat</span>
                  </button>

                  <button
                    onClick={onClose}
                    className="w-full py-3 rounded-full aurawed-button-secondary text-xs uppercase tracking-wider font-semibold cursor-pointer"
                  >
                    Close Window
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Notice Pill */}
                <div className="p-3.5 rounded-2xl bg-[#FFFDFB] border border-[#E8D9DC] flex items-center gap-2.5 text-xs text-[#8F3F50]">
                  <Lock className="w-4 h-4 text-[#C9A15B] flex-shrink-0" />
                  <span>
                    <strong>Complete Exclusivity:</strong> Only 1 couple/group is hosted per evening slot. Complete privacy guaranteed.
                  </span>
                </div>

                {/* Couple / Contact Details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div>
                    <label className="aurawed-form-label">
                      Your Full Name <span className="text-[#8F3F50]">*</span>
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-[#C9A15B] absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        required
                        value={clientName}
                        onChange={(e) => setClientName(e.target.value)}
                        placeholder="e.g. Aryan Sharma"
                        className="w-full pl-10 pr-4 py-3 rounded-xl border-2 border-[#E8D9DC] bg-white text-sm text-[#241E20] font-medium placeholder-[#5C4E52] focus:border-[#8F3F50] focus:ring-4 focus:ring-[#8F3F50]/10 focus:outline-none transition-all shadow-xs"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="aurawed-form-label">
                      Partner's Name <span className="text-[10px] text-[#C9A15B] font-normal normal-case">(Optional)</span>
                    </label>
                    <div className="relative">
                      <Heart className="w-4 h-4 text-[#C9A15B] absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        value={partnerName}
                        onChange={(e) => setPartnerName(e.target.value)}
                        placeholder="e.g. Simran"
                        className="w-full pl-10 pr-4 py-3 rounded-xl border-2 border-[#E8D9DC] bg-white text-sm text-[#241E20] font-medium placeholder-[#5C4E52] focus:border-[#8F3F50] focus:ring-4 focus:ring-[#8F3F50]/10 focus:outline-none transition-all shadow-xs"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="aurawed-form-label">
                      WhatsApp / Phone Number <span className="text-[#8F3F50]">*</span>
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-[#C9A15B] absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="tel"
                        required
                        value={clientPhone}
                        onChange={(e) => setClientPhone(e.target.value)}
                        placeholder="+91 98200 XXXXX"
                        className="w-full pl-10 pr-4 py-3 rounded-xl border-2 border-[#E8D9DC] bg-white text-sm text-[#241E20] font-medium placeholder-[#5C4E52] focus:border-[#8F3F50] focus:ring-4 focus:ring-[#8F3F50]/10 focus:outline-none transition-all shadow-xs"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="aurawed-form-label">
                      Email Address <span className="text-[#8F3F50]">*</span>
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-[#C9A15B] absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="email"
                        required
                        value={clientEmail}
                        onChange={(e) => setClientEmail(e.target.value)}
                        placeholder="aryan@gmail.com"
                        className="w-full pl-10 pr-4 py-3 rounded-xl border-2 border-[#E8D9DC] bg-white text-sm text-[#241E20] font-medium placeholder-[#5C4E52] focus:border-[#8F3F50] focus:ring-4 focus:ring-[#8F3F50]/10 focus:outline-none transition-all shadow-xs"
                      />
                    </div>
                  </div>
                </div>

                {/* Date & Time Slot */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 pt-2">
                  <div>
                    <label className="aurawed-form-label">
                      Preferred Date <span className="text-[#8F3F50]">*</span>
                    </label>
                    <div className="relative">
                      <Calendar className="w-4 h-4 text-[#C9A15B] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <input
                        type="date"
                        required
                        value={preferredDate}
                        onChange={(e) => setPreferredDate(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 rounded-xl border-2 border-[#E8D9DC] bg-white text-sm text-[#241E20] font-medium focus:border-[#8F3F50] focus:ring-4 focus:ring-[#8F3F50]/10 focus:outline-none transition-all shadow-xs"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="aurawed-form-label">
                      Evening Slot
                    </label>
                    <div className="relative">
                      <Clock className="w-4 h-4 text-[#C9A15B] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <select
                        value={preferredSlot}
                        onChange={(e) => setPreferredSlot(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 rounded-xl border-2 border-[#E8D9DC] bg-white text-sm text-[#241E20] font-medium focus:border-[#8F3F50] focus:ring-4 focus:ring-[#8F3F50]/10 focus:outline-none transition-all shadow-xs cursor-pointer"
                      >
                        <option>5:30 PM – Golden Hour Sunset</option>
                        <option>7:30 PM – Starlight Candlelight</option>
                        <option>10:00 PM – Midnight Stargazing & Wine</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Setup Preferences Overview */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 pt-2 border-t border-[#E8D9DC]">
                  <div>
                    <label className="aurawed-form-label">
                      Occasion
                    </label>
                    <select
                      value={occasion}
                      onChange={(e) => setOccasion(e.target.value as Occasion)}
                      className="w-full px-4 py-3 rounded-xl border-2 border-[#E8D9DC] bg-white text-sm text-[#241E20] font-medium focus:border-[#8F3F50] focus:ring-4 focus:ring-[#8F3F50]/10 focus:outline-none transition-all shadow-xs cursor-pointer"
                    >
                      <option>Proposal</option>
                      <option>Anniversary</option>
                      <option>Date Night</option>
                      <option>Birthday Celebration</option>
                      <option>Intimate Engagement</option>
                      <option>Candlelight Surprise</option>
                    </select>
                  </div>

                  <div>
                    <label className="aurawed-form-label">
                      Private Venue Zone
                    </label>
                    <select
                      value={spaceArea}
                      onChange={(e) => setSpaceArea(e.target.value as VenueSpaceArea)}
                      className="w-full px-4 py-3 rounded-xl border-2 border-[#E8D9DC] bg-white text-sm text-[#241E20] font-medium focus:border-[#8F3F50] focus:ring-4 focus:ring-[#8F3F50]/10 focus:outline-none transition-all shadow-xs cursor-pointer"
                    >
                      {VENUE_SPACES.map((s) => (
                        <option key={s.id} value={s.name}>
                          {s.name}
                        </option>
                      ))}
                      <option value="Full Private Venue Exclusive">
                        Full Private Venue Exclusive (All Zones)
                      </option>
                    </select>
                  </div>
                </div>

                {/* Special Vision & Notes */}
                <div>
                  <label className="aurawed-form-label">
                    Your Vision / Song Requests / Special Touches
                  </label>
                  <textarea
                    rows={3}
                    value={customVisionText}
                    onChange={(e) => setCustomVisionText(e.target.value)}
                    placeholder="Tell us any specific ideas, favorite love songs for the reveal cue, dietary preferences (Jain, Vegan, Seafood), or floral preferences..."
                    className="w-full p-3.5 rounded-xl border-2 border-[#E8D9DC] bg-white text-sm text-[#241E20] font-medium placeholder-[#5C4E52] focus:border-[#8F3F50] focus:ring-4 focus:ring-[#8F3F50]/10 focus:outline-none transition-all shadow-xs"
                  />
                </div>

                {/* Submit Actions */}
                <div className="pt-4 border-t border-[#E8D9DC] flex flex-col sm:flex-row items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={handleSendWhatsApp}
                    className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-[#25D366] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#1EBE5D] transition-colors cursor-pointer shadow-md"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Inquire via WhatsApp</span>
                  </button>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3.5 rounded-full aurawed-button-primary text-xs uppercase tracking-widest font-bold flex items-center justify-center gap-2 cursor-pointer shadow-md"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Reservation Request</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
