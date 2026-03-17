import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { ReactComponent as Logo } from '../goodflip-logo.svg';

const quickLinks = [
  { label: 'About Us', href: 'https://shop.goodflip.in/pages/about-us' },
  { label: 'Privacy Policy', href: 'https://shop.goodflip.in/pages/privacy-policy' },
  { label: 'Terms & Conditions', href: 'https://shop.goodflip.in/pages/terms-conditions' },
  { label: 'Refund & Replacement Policy', href: 'https://shop.goodflip.in/pages/refund-policy' },
  { label: 'Shipping Policy', href: 'https://shop.goodflip.in/pages/shipping-policy' },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-gf-dark text-white">
      {/* Footnote - Frontiers citation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-6">
        <div className="bg-white/5 border border-white/10 rounded-xl px-6 py-4">
          <p className="text-sm text-gray-400">
            *Based on a clinical study published in{' '}
            <a href="https://www.frontiersin.org/journals/clinical-diabetes-and-healthcare/articles/10.3389/fcdhc.2024.1494009/full" target="_blank" rel="noopener noreferrer" className="text-gf-green underline hover:text-gf-green/80 transition-colors">Frontiers in Clinical Diabetes and Healthcare</a>
            , a peer-reviewed scientific journal. Results may vary based on individual health conditions and program adherence.
          </p>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 md:pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <Logo className="h-16 w-auto brightness-0 invert" />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Doctor-led diabetes remission programs built on global standards from the ADA and IDF.
            </p>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-gf-green mt-0.5 flex-shrink-0" />
                <p className="text-sm text-gray-400 leading-relaxed">
                  TatvaCare, Incubex HSR27, 1500, 19th Main Rd, 1st Sector, HSR Layout, Bengaluru, Karnataka 560102
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-gf-green flex-shrink-0" />
                <a href="mailto:support@goodflip.in" className="text-sm text-gray-400 hover:text-gf-green transition-colors">
                  support@goodflip.in
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-gf-green flex-shrink-0" />
                <a href="tel:+918511975757" className="text-sm text-gray-400 hover:text-gf-green transition-colors">
                  +91 851 197 5757
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Clock size={16} className="text-gf-green flex-shrink-0" />
                <p className="text-sm text-gray-400">9:00am - 6:00pm, Mon to Sun</p>
              </div>
            </div>
          </div>

          {/* Get the App */}
          <div>
            <h4 className="font-semibold text-white mb-4">Get the App</h4>
            <div className="flex flex-col gap-3">
              {/* Google Play Badge */}
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a href="#" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl px-4 py-2.5 transition-colors w-fit">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-white">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.144 1.24a1 1 0 010 1.731l-2.144 1.24-2.53-2.53 2.53-2.681zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z"/>
                </svg>
                <div>
                  <p className="text-[10px] text-gray-400 leading-none">GET IT ON</p>
                  <p className="text-sm font-semibold text-white leading-tight">Google Play</p>
                </div>
              </a>
              {/* App Store Badge */}
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a href="#" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl px-4 py-2.5 transition-colors w-fit">
                <svg width="20" height="24" viewBox="0 0 384 512" fill="currentColor" className="text-white">
                  <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
                </svg>
                <div>
                  <p className="text-[10px] text-gray-400 leading-none">Download on the</p>
                  <p className="text-sm font-semibold text-white leading-tight">App Store</p>
                </div>
              </a>
            </div>

            {/* Quick Links */}
            <h4 className="font-semibold text-white mb-3 mt-6">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-gf-green transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-white mb-4">Follow Us</h4>
            <div className="flex gap-3 mb-6">
              <a href="https://www.instagram.com/goodflip.in/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 hover:bg-gf-green rounded-lg flex items-center justify-center transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="https://www.linkedin.com/company/goodflip/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 hover:bg-gf-green rounded-lg flex items-center justify-center transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="https://www.youtube.com/channel/UCNAJcoKBdbajzX0Wc1Be4Ww" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 hover:bg-gf-green rounded-lg flex items-center justify-center transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-sm text-gray-500 text-center">&copy; 2026 GoodFlip. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
