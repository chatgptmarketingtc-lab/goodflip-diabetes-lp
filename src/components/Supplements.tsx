import React from 'react';
import { Fish, Sun, Atom, Grape } from 'lucide-react';

const supplements = [
  {
    icon: <Fish size={28} />,
    name: 'Omega 3',
    benefit: 'Reduces chronic inflammation linked to insulin resistance and protects cardiovascular health.',
  },
  {
    icon: <Sun size={28} />,
    name: 'Vitamin D3 + K2',
    benefit: 'Improves insulin sensitivity and directs calcium to bones — not arteries — reducing vascular risk.',
  },
  {
    icon: <Atom size={28} />,
    name: 'Vitamin B12 + Folate',
    benefit: 'Restores levels depleted by Metformin, supporting nerve health and cellular energy production.',
  },
  {
    icon: <Grape size={28} />,
    name: 'Resveratrol',
    benefit: 'A powerful antioxidant that enhances glucose uptake and supports healthy blood sugar regulation.',
  },
];

const Supplements: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gf-warm">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block text-sm font-semibold text-gf-green bg-gf-green-light px-4 py-1.5 rounded-full mb-4">
            Targeted Micro-Nutrition
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-gf-dark mb-4">
            Correct What's Missing, Recover Faster
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Most diabetics have hidden micro-nutrient gaps that slow remission. Our clinically curated supplement pack bridges these deficiencies — prescribed after your Health Counsellor consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {supplements.map((s, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-gf-green/30 hover:shadow-lg transition-all duration-300 text-center group"
            >
              <div className="w-14 h-14 bg-gf-green/10 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:bg-gf-green group-hover:text-white transition-all">
                <span className="text-gf-green group-hover:text-white transition-colors">{s.icon}</span>
              </div>
              <h3 className="text-lg font-bold text-gf-dark mb-2">{s.name}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{s.benefit}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 max-w-xl mx-auto bg-gf-green-light border border-gf-green/20 rounded-xl px-6 py-4 text-center">
          <p className="text-sm font-medium text-gf-green-dark">
            Supplement pack is an optional add-on, recommended after your initial consultation with a Health Counsellor.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Supplements;
