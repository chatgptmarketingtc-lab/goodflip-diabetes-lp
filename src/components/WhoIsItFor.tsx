import React from 'react';
import { AlertTriangle, Target, Gauge } from 'lucide-react';

const personas = [
  {
    icon: <AlertTriangle size={28} />,
    title: 'Borderline, Not Yet Diabetic',
    description: 'Stop diabetes early with easy food swaps, movement tracking, and simple lifestyle changes before it progresses.',
    tag: 'Prevention',
    color: 'bg-amber-50 text-amber-600 border-amber-200',
    iconBg: 'bg-amber-100',
  },
  {
    icon: <Target size={28} />,
    title: 'High Sugar, Want Control or Remission',
    description: 'Lower your HbA1c with coach-guided nutrition, personalised activity plans, and doctor-led treatment optimisation.',
    tag: 'Most Popular',
    color: 'bg-gf-green-light text-gf-green border-gf-green/20',
    iconBg: 'bg-gf-green/10',
  },
  {
    icon: <Gauge size={28} />,
    title: 'On Insulin, Need Daily Clarity',
    description: 'Live steadier days using real-time CGM insights, smart meal planning, and proactive care teamwork with your doctor.',
    tag: 'Advanced Care',
    color: 'bg-blue-50 text-blue-600 border-blue-200',
    iconBg: 'bg-blue-100',
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
            Whether you're prediabetic or managing diabetes daily, our program adapts to your stage and goals.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {personas.map((persona, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gf-green/20 group relative overflow-hidden"
            >
              {/* Tag */}
              <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full border mb-6 ${persona.color}`}>
                {persona.tag}
              </span>

              <div className={`w-14 h-14 ${persona.iconBg} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                <span className="text-gf-green">{persona.icon}</span>
              </div>

              <h3 className="text-xl font-bold text-gf-dark mb-3">{persona.title}</h3>
              <p className="text-gray-600 leading-relaxed">{persona.description}</p>

              <button
                onClick={() => document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="mt-6 text-gf-green font-semibold text-sm hover:underline inline-flex items-center gap-1"
              >
                Get Started &rarr;
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoIsItFor;
