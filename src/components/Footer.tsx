import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { ReactComponent as Logo } from '../goodflip-logo.svg';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubscribed(true);
  };

  return (
    <footer className="bg-gf-dark text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand + Subscribe */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <Logo className="h-16 w-auto brightness-0 invert" />
            </div>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Subscribe for discounts and health tips.
            </p>
            {subscribed ? (
              <p className="text-gf-green text-sm font-medium">Thanks for subscribing!</p>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  className="flex-1 px-4 py-2.5 bg-white/10 border border-white/20 rounded-lg text-sm text-white placeholder-gray-500 focus:border-gf-green focus:outline-none"
                  required
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 bg-gf-green hover:bg-gf-green-dark rounded-lg text-sm font-semibold transition-colors"
                >
                  Join
                </button>
              </form>
            )}
            <p className="text-xs text-gray-500 mt-3">
              By subscribing you agree to the Terms of Use &amp; Privacy Policy.
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
            <a
              href="#"
              className="inline-block bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl px-5 py-3 transition-colors mb-4"
            >
              <p className="text-xs text-gray-400">Download on</p>
              <p className="text-sm font-semibold text-white">Google Play &amp; App Store</p>
            </a>

            <h4 className="font-semibold text-white mb-3 mt-6">Explore</h4>
            <ul className="space-y-2">
              <li>
                <a href="https://shop.goodflip.in/collections/care-plans" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-gf-green transition-colors">
                  Care Programs
                </a>
              </li>
              <li>
                <a href="https://shop.goodflip.in/collections/all" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-gf-green transition-colors">
                  Supplements
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-white mb-4">Follow Us</h4>
            <div className="flex gap-3 mb-6">
              <a href="https://www.facebook.com/goodflip.in/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 hover:bg-gf-green rounded-lg flex items-center justify-center transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="https://x.com/goodflip_in" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 hover:bg-gf-green rounded-lg flex items-center justify-center transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="https://www.instagram.com/goodflip.in/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 hover:bg-gf-green rounded-lg flex items-center justify-center transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
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
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500">&copy; 2026 GoodFlip. All rights reserved.</p>
            <div className="flex flex-wrap items-center gap-4 md:gap-6">
              <a href="https://shop.goodflip.in/pages/about-us" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 hover:text-gf-green transition-colors">About Us</a>
              <a href="https://shop.goodflip.in/pages/contact-us" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 hover:text-gf-green transition-colors">Contact Us</a>
              <a href="https://shop.goodflip.in/policies/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 hover:text-gf-green transition-colors">Privacy Policy</a>
              <a href="https://shop.goodflip.in/policies/terms-of-service" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 hover:text-gf-green transition-colors">Terms &amp; Conditions</a>
              <a href="https://shop.goodflip.in/policies/refund-policy" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 hover:text-gf-green transition-colors">Refund &amp; Replacement Policy</a>
              <a href="https://shop.goodflip.in/policies/shipping-policy" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 hover:text-gf-green transition-colors">Shipping Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
