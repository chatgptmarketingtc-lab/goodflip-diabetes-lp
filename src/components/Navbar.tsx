import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { ReactComponent as Logo } from '../goodflip-logo.svg';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Logo className="h-16 md:h-20 w-auto" />
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollTo('program')} className="text-sm text-gray-600 hover:text-gf-green transition-colors">Program</button>
            <button onClick={() => scrollTo('why-choose')} className="text-sm text-gray-600 hover:text-gf-green transition-colors">Why GoodFlip</button>
            <button onClick={() => scrollTo('testimonials')} className="text-sm text-gray-600 hover:text-gf-green transition-colors">Results</button>
            <button onClick={() => scrollTo('pricing')} className="text-sm text-gray-600 hover:text-gf-green transition-colors">Pricing</button>
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center">
            <button onClick={() => scrollTo('lead-form')} className="bg-gf-green hover:bg-gf-green-dark text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all hover:shadow-lg">
              Talk to a Health Counsellor
            </button>
          </div>

          {/* Mobile Toggle */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-gray-100">
            <div className="flex flex-col gap-3 pt-4">
              <button onClick={() => scrollTo('program')} className="text-left px-2 py-2 text-gray-600 hover:text-gf-green">Program</button>
              <button onClick={() => scrollTo('why-choose')} className="text-left px-2 py-2 text-gray-600 hover:text-gf-green">Why GoodFlip</button>
              <button onClick={() => scrollTo('testimonials')} className="text-left px-2 py-2 text-gray-600 hover:text-gf-green">Results</button>
              <button onClick={() => scrollTo('pricing')} className="text-left px-2 py-2 text-gray-600 hover:text-gf-green">Pricing</button>
              <button onClick={() => scrollTo('lead-form')} className="bg-gf-green text-white px-6 py-3 rounded-full text-sm font-semibold mt-2">
                Talk to a Health Counsellor
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
