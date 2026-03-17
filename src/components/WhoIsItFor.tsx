import React from 'react';
import { Target, Gauge, TrendingDown, ArrowRight } from 'lucide-react';

const personas = [
  {
    icon: <Target size={28} />,
    title: 'High Sugar, Want Control or Remission',
    description: 'Whether it\'s been a few months or a few years — you\'re tired of watching your numbers climb. You know there\'s a way back. With the right guidance, nutrition, and tracking — remission isn\'t just possible, it\'s within reach.',
    tag: 'Most Popular',
    color: 'bg-gf-green-light text-gf-green border-gf-green/20',
    iconBg: 'bg-gf-green/10',
    ranges: [
      { label: 'HbA1c', value: '6.5% – 9%' },
      { label: 'Fasting Glucose', value: '130 – 250 mg/dL' },
    ],
    callout: 'Up to 1 point HbA1c reduction in just 3 months',
    calloutIcon: <TrendingDown size={16} />,
  },
  {
    icon: <Gauge size={28} />,
    title: 'On Insulin, Need Daily Clarity',
    description: 'Years of adjusting doses, tracking meals, and still feeling uncertain. You\'re managing with insulin but still riding the rollercoaster of spikes and crashes. You deserve steadier days and a care team that works alongside your doctor.',
    tag: 'Advanced Care',
    color: 'bg-blue-50 text-blue-600 border-blue-200',
    iconBg: 'bg-blue-100',
    ranges: [
      { label: 'HbA1c', value: '9% and above' },
      { label: 'Fasting Glucose', value: '250+ mg/dL' },
    ],
    callout: 'Members reduced Fasting Blood Sugar by 54 mg/dL in just 3 months',
    calloutIcon: <TrendingDown size={16} />,
  },
];

const WhoIsItFor: React.FC = () => {
  return (
    <section id="program" className="py-16 md:py-24 bg-gf-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block text-sm font-semibold text-gf-green bg-gf-green-light px-4 py-1.5 rounded-full mb-4">
            Is This Program For You?
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-gf-dark mb-4">
            Who Is This Program For?
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            You've been told to "manage" your diabetes — but you want more than that. You want your life back.
            This program is built for people with diabetes who refuse to settle, and are ready to work toward remission with expert support by their side.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {personas.map((persona, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gf-green/20 group relative overflow-hidden flex flex-col"
            >
              {/* Tag */}
              <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full border mb-6 self-start ${persona.color}`}>
                {persona.tag}
              </span>

              <div className={`w-14 h-14 ${persona.iconBg} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                <span className="text-gf-green">{persona.icon}</span>
              </div>

              <h3 className="text-xl font-bold text-gf-dark mb-3">{persona.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-5">{persona.description}</p>

              {/* Clinical ranges */}
              <div className="bg-gf-gray rounded-xl p-4 mb-5 space-y-2">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">If your numbers look like this:</p>
                {persona.ranges.map((range, j) => (
                  <div key={j} className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">{range.label}</span>
                    <span className="text-sm font-bold text-gf-dark">{range.value}</span>
                  </div>
                ))}
              </div>

              {/* HbA1c reduction callout */}
              <div className="bg-gf-green-light border border-gf-green/20 rounded-xl p-4 mb-6 flex items-start gap-3">
                <div className="w-8 h-8 bg-gf-green/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-gf-green">{persona.calloutIcon}</span>
                </div>
                <p className="text-sm font-semibold text-gf-green leading-snug">{persona.callout}</p>
              </div>

              <button
                onClick={() => document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="mt-auto w-full bg-gf-dark hover:bg-gray-800 text-white py-3.5 rounded-full font-semibold text-sm transition-all flex items-center justify-center gap-2 group/btn"
              >
                Talk to a Health Counsellor
                <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoIsItFor;
