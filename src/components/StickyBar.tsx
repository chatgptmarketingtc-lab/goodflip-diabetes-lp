import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const StickyBar: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 600);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] p-3">
      <button
        onClick={() => document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' })}
        className="w-full bg-gf-green hover:bg-gf-green-dark text-white py-3.5 rounded-full font-semibold text-sm transition-all flex items-center justify-center gap-2"
      >
        Talk to a Health Counsellor
        <ArrowRight size={16} />
      </button>
    </div>
  );
};

export default StickyBar;
