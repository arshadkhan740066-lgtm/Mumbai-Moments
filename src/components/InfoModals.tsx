import { X, Sparkles, Mail, Building2, ShieldCheck, Lock, Phone } from 'lucide-react';
import { motion } from 'motion/react';
import { BRANDING } from '../data/branding';

export type InfoModalType =
  | 'about'
  | 'contact'
  | 'privacy'
  | 'terms'
  | 'editorial'
  | 'faq'
  | null;

interface InfoModalsProps {
  modalType: InfoModalType;
  onClose: () => void;
  onOpenInquiry: () => void;
}

export const InfoModals = ({
  modalType,
  onClose,
  onOpenInquiry
}: InfoModalsProps) => {
  if (!modalType) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-sm overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 20 }}
        className="bg-white border border-[#E5D9C8] w-full max-w-2xl rounded-3xl overflow-hidden my-auto max-h-[90vh] flex flex-col shadow-[0_20px_60px_rgba(0,0,0,0.2)]"
      >
        {/* Header */}
        <div className="p-6 bg-[#FAF7F2] border-b border-[#E5D9C8] flex items-center justify-between flex-shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#6B1724]" />
            <h3 className="font-serif-display text-2xl font-bold text-[#1E1B18]">
              {modalType === 'about' && 'About Mumbai Moments'}
              {modalType === 'contact' && 'VIP Concierge Desk'}
              {modalType === 'privacy' && 'Privacy & Confidentiality'}
              {modalType === 'terms' && 'Booking & Customization Terms'}
              {modalType === 'editorial' && 'Our Exclusivity Standards'}
              {modalType === 'faq' && 'Frequently Asked Questions'}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white border border-[#DFCDB7] text-[#52453E] hover:text-[#1E1B18] transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-sm text-[#52453E] font-light leading-relaxed">
          {modalType === 'about' && (
            <div className="space-y-4">
              <p className="text-base text-[#6B1724] font-serif-display italic">
                "We founded Mumbai Moments with a singular mission: To give couples in Mumbai a 100% private, world-class luxury sanctuary that transforms exclusively to their love story."
              </p>
              <p>
                Unlike commercial restaurants that squeeze dozens of noisy tables into a single room, Mumbai Moments is an exclusive private estate in Bandra West. We host only <strong>one private booking per slot</strong>.
              </p>
              <div className="p-5 rounded-2xl bg-[#FAF5EE] border border-[#DFCDB7] space-y-2">
                <h4 className="text-xs uppercase tracking-wider font-bold text-[#6B1724] flex items-center gap-2">
                  <Lock className="w-4 h-4 text-[#C59A5D]" />
                  <span>The 100% Exclusivity Promise</span>
                </h4>
                <p className="text-xs text-[#52453E]">
                  From the moment you step through our private gates, the entire space, dedicated executive chef, private butler, custom soundscape, and bespoke floral decor belong exclusively to you.
                </p>
              </div>
            </div>
          )}

          {modalType === 'contact' && (
            <div className="space-y-4">
              <p>
                Our private concierge is available 7 days a week to discuss date availability, custom set designs, and confidential proposal orchestrations.
              </p>
              <div className="space-y-3 pt-2">
                <div className="p-5 rounded-2xl bg-[#FAF7F2] border border-[#E5D9C8] flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#C59A5D]" />
                  <div>
                    <div className="text-xs text-[#8C6D46] font-medium">WhatsApp & VIP Hotline</div>
                    <div className="text-sm font-bold text-[#1E1B18]">{BRANDING.contactPhone}</div>
                  </div>
                </div>
                <div className="p-5 rounded-2xl bg-[#FAF7F2] border border-[#E5D9C8] flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#C59A5D]" />
                  <div>
                    <div className="text-xs text-[#8C6D46] font-medium">Concierge Inquiries</div>
                    <div className="text-sm font-bold text-[#1E1B18]">{BRANDING.contactEmail}</div>
                  </div>
                </div>
                <div className="p-5 rounded-2xl bg-[#FAF7F2] border border-[#E5D9C8] flex items-center gap-3">
                  <Building2 className="w-5 h-5 text-[#C59A5D]" />
                  <div>
                    <div className="text-xs text-[#8C6D46] font-medium">The Private Estate Location</div>
                    <div className="text-sm font-bold text-[#1E1B18]">Pali Hill, Bandra West, Mumbai 400050</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {modalType === 'editorial' && (
            <div className="space-y-4">
              <h4 className="text-xs uppercase tracking-wider font-bold text-[#6B1724]">
                Our 4 Pillars of Bespoke Production
              </h4>
              <ol className="text-xs space-y-2 text-[#52453E] list-decimal list-inside">
                <li><strong>Absolute Acoustic & Spatial Intimacy:</strong> Guaranteed zero public interference or outside guests during your booking slot.</li>
                <li><strong>Authentic Master Craftsmanship:</strong> Real taper candles in hurricane glass, hand-tied fresh floral arches, and custom calligraphic signages.</li>
                <li><strong>Culinary Exclusivity:</strong> Private chef dining with 100% personalized courses customized to dietary preferences.</li>
                <li><strong>Flawless Confidentiality:</strong> We coordinate all proposal timing and surprise cues discreetly via confidential communication.</li>
              </ol>
            </div>
          )}

          {modalType === 'faq' && (
            <div className="space-y-4">
              <div className="bg-[#FAF7F2] border border-[#E5D9C8] rounded-2xl p-4">
                <h4 className="font-serif-display text-base font-bold text-[#1E1B18] mb-1">
                  How many guests can attend?
                </h4>
                <p className="text-xs text-[#52453E] font-light">
                  Most setups are designed for private couples (2 guests). However, our garden courtyard and rooftop deck can host intimate family celebrations of up to 10–12 guests.
                </p>
              </div>
              <div className="bg-[#FAF7F2] border border-[#E5D9C8] rounded-2xl p-4">
                <h4 className="font-serif-display text-base font-bold text-[#1E1B18] mb-1">
                  Can we bring our own music or media?
                </h4>
                <p className="text-xs text-[#52453E] font-light">
                  Yes, absolutely! You have full control over the venue’s Bose sound system, and we can screen your custom video montage on our 120-inch 4K screen.
                </p>
              </div>
              <div className="bg-[#FAF7F2] border border-[#E5D9C8] rounded-2xl p-4">
                <h4 className="font-serif-display text-base font-bold text-[#1E1B18] mb-1">
                  What is the cancellation / rescheduling policy?
                </h4>
                <p className="text-xs text-[#52453E] font-light">
                  We allow free date rescheduling up to 72 hours prior to your booked slot, subject to date availability.
                </p>
              </div>
            </div>
          )}

          {modalType === 'privacy' && (
            <div className="space-y-3 text-xs text-[#52453E]">
              <p>
                We treat every client proposal and celebration with complete discretion and confidentiality.
              </p>
              <p>
                Any photos or drone videos captured during your event are shared privately with you and will never be published on social media without your express written consent.
              </p>
            </div>
          )}

          {modalType === 'terms' && (
            <div className="space-y-3 text-xs text-[#52453E]">
              <p>
                A 50% advance reservation fee is required to lock in the private venue date and initiate custom floral and set fabrication.
              </p>
              <p>
                All dietary preferences must be finalized 48 hours prior to allow our executive chef to source fresh organic ingredients.
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-6 bg-[#FAF7F2] border-t border-[#E5D9C8] flex items-center justify-between flex-shrink-0">
          <button
            onClick={() => {
              onClose();
              onOpenInquiry();
            }}
            className="px-6 py-2.5 rounded-full aurawed-button-primary text-xs font-bold uppercase tracking-wider cursor-pointer shadow-sm"
          >
            Reserve a Date
          </button>
          <button
            onClick={onClose}
            className="px-6 py-2 rounded-full aurawed-button-secondary text-[#6B1724] text-xs font-bold uppercase tracking-wider cursor-pointer"
          >
            Close
          </button>
        </div>
      </motion.div>
    </div>
  );
};
