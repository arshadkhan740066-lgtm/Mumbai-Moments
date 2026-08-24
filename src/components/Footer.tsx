import { InfoModalType } from './InfoModals';
import { Heart, Sparkles, MessageSquare, Lock } from 'lucide-react';
import { BRAND_ASSETS } from '../data/branding';

interface FooterProps {
  onNavigateSection: (sectionId: string) => void;
  onOpenInfoModal: (type: InfoModalType) => void;
  onOpenInquiryModal: () => void;
  onOpenExperienceBuilder: () => void;
}

export const Footer = ({
  onNavigateSection,
  onOpenInfoModal,
  onOpenInquiryModal,
  onOpenExperienceBuilder
}: FooterProps) => {
  return (
    <footer className="bg-[#181310] text-[#E8DCCF] border-t border-[#362A22] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-[#362A22]">
          {/* Brand Column (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={BRAND_ASSETS.logo}
                alt="Mumbai Moments Logo"
                className="w-10 h-10 rounded-full object-cover border border-[#C59A5D]/60 shadow-md"
              />
              <div className="flex flex-col">
                <span className="font-serif-display text-xl font-bold tracking-wider text-[#FDFBF7]">
                  Mumbai Moments
                </span>
                <span className="font-cursive text-sm text-[#C59A5D] leading-none">
                  Bespoke Luxury Private Venue • By AuraWed
                </span>
              </div>
            </div>
            <p className="font-serif-display text-base text-[#D4AF37] italic">
              One private estate. Transformed tailored to your love story.
            </p>
            <p className="text-xs sm:text-sm text-[#A8988B] font-light max-w-sm leading-relaxed">
              Mumbai’s exclusive private venue in Kurla West (BKC Corridor). We never host multiple parties. Every booking receives complete private estate exclusivity, customized decor, and a dedicated private chef. Serving Sion, Dadar, Kurla, Mahim, Wadala & Chembur with luxury chauffeured transit.
            </p>
            <div className="pt-2 flex flex-wrap gap-2">
              <button
                onClick={onOpenExperienceBuilder}
                className="px-5 py-2.5 rounded-full bg-[#2A1F18] border border-[#C59A5D]/40 text-xs font-semibold uppercase tracking-wider text-[#F4F2EE] hover:text-[#D4AF37] hover:border-[#D4AF37] transition-colors cursor-pointer flex items-center gap-1.5"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#C59A5D]" />
                <span>Design Experience</span>
              </button>
              <button
                onClick={onOpenInquiryModal}
                className="px-5 py-2.5 rounded-full bg-[#6B1724] text-xs font-semibold uppercase tracking-wider text-white hover:bg-[#831D2D] transition-colors cursor-pointer flex items-center gap-1.5 shadow-sm"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Book Consultation</span>
              </button>
            </div>
          </div>

          {/* Venue & Studio Navigation */}
          <div>
            <h4 className="font-serif-display text-base font-bold uppercase tracking-wider text-[#FDFBF7] mb-4">
              The Venue
            </h4>
            <ul className="space-y-2.5 text-xs text-[#A8988B]">
              <li>
                <button
                  onClick={() => onNavigateSection('estate-overview')}
                  className="hover:text-[#D4AF37] transition-colors cursor-pointer"
                >
                  Pali Hill Estate Overview
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('experience-builder')}
                  className="hover:text-[#D4AF37] transition-colors cursor-pointer text-[#D4AF37] font-semibold"
                >
                  Interactive Experience Builder
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('venue-themes')}
                  className="hover:text-[#D4AF37] transition-colors cursor-pointer"
                >
                  Custom Themes & Setups
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('private-spaces')}
                  className="hover:text-[#D4AF37] transition-colors cursor-pointer"
                >
                  Private Zones & Spaces
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('occasions')}
                  className="hover:text-[#D4AF37] transition-colors cursor-pointer"
                >
                  Celebration Occasions
                </button>
              </li>
            </ul>
          </div>

          {/* Experience & Stories */}
          <div>
            <h4 className="font-serif-display text-base font-bold uppercase tracking-wider text-[#FDFBF7] mb-4">
              Experience
            </h4>
            <ul className="space-y-2.5 text-xs text-[#A8988B]">
              <li>
                <button
                  onClick={() => onNavigateSection('why-private')}
                  className="hover:text-[#D4AF37] transition-colors cursor-pointer"
                >
                  Why 100% Private Venue
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('lookbook')}
                  className="hover:text-[#D4AF37] transition-colors cursor-pointer"
                >
                  Client Transformations
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenInfoModal('faq')}
                  className="hover:text-[#D4AF37] transition-colors cursor-pointer"
                >
                  FAQ & Booking Guide
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenInquiryModal}
                  className="hover:text-[#D4AF37] transition-colors cursor-pointer"
                >
                  Schedule Venue Walkthrough
                </button>
              </li>
            </ul>
          </div>

          {/* Concierge & Legal */}
          <div>
            <h4 className="font-serif-display text-base font-bold uppercase tracking-wider text-[#FDFBF7] mb-4">
              Concierge
            </h4>
            <ul className="space-y-2.5 text-xs text-[#A8988B]">
              <li>
                <button
                  onClick={() => onOpenInfoModal('about')}
                  className="hover:text-[#D4AF37] transition-colors cursor-pointer"
                >
                  About Mumbai Moments
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenInfoModal('contact')}
                  className="hover:text-[#D4AF37] transition-colors cursor-pointer"
                >
                  VIP Hotline & WhatsApp
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenInfoModal('privacy')}
                  className="hover:text-[#D4AF37] transition-colors cursor-pointer"
                >
                  Privacy & Confidentiality
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenInfoModal('terms')}
                  className="hover:text-[#D4AF37] transition-colors cursor-pointer"
                >
                  Reservation Terms
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8C7D70]">
          <p>© 2026 Mumbai Moments by AuraWed. All rights reserved.</p>
          <div className="flex items-center gap-1.5">
            <Lock className="w-3.5 h-3.5 text-[#C59A5D]" />
            <span>100% Exclusive Private Venue in Bandra, Mumbai</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
