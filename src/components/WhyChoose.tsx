import React from 'react';
import { Stethoscope, LineChart, Apple, Pill, Smartphone } from 'lucide-react';

const pillars = [
  {
    icon: <LineChart size={28} />,
    title: 'Smart Diagnostics & Root Cause Analysis',
    description: 'Begin with CGM monitoring for 2 weeks — 1000+ real-time data points mapping your Personalised Glycemic Response (PGR). Plus 80+ biomarker panel covering insulin resistance, inflammation, and organ health.',
    highlight: '80+ biomarkers analysed',
  },
  {
    icon: <Apple size={28} />,
    title: 'Personalised 1:1 Coaching',
    description: 'Dedicated nutrition expert (diet based on your PGR data), fitness expert (safe, tailored exercise prescription), and habit/success coach for sleep and stress management.',
    highlight: 'Unlimited consultations',
  },
  {
    icon: <Stethoscope size={28} />,
    title: 'Doctor-Led Guidance',
    description: 'Endocrinologists and physicians oversee your entire journey, providing expert clinical guidance to diagnose and manage metabolic conditions with precision.',
    highlight: 'Specialist-led care',
  },
  {
    icon: <Pill size={28} />,
    title: 'Science-Backed Supplements',
    description: 'Correct nutritional deficiencies with targeted supplementation, with a focus on essential micro-nutrients that support metabolic function and accelerate your path to remission.',
    highlight: 'Micro-nutrient focused',
  },
  {
    icon: <Smartphone size={28} />,
    title: 'Seamless Digital Experience',
    description: 'Manage your journey through the GoodFlip App with a personalised Health Dashboard, unlimited in-app chat, exclusive community access, and Live Group Expert Sessions.',
    highlight: '24/7 app support',
  },
];

const WhyChoose: React.FC = () => {
  return (
    <section id="why-choose" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block text-sm font-semibold text-gf-green bg-gf-green-light px-4 py-1.5 rounded-full mb-4">
            The GoodFlip Approach
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-gf-dark mb-4">
            Your 5-Pillar Ecosystem
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A clinically-validated, digital-first therapy built on global standards from the ADA and IDF — targeting root causes, not just symptoms.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {pillars.map((pillar, i) => (
            <div
              key={i}
              className="rounded-2xl p-8 bg-white border border-gray-100 hover:border-gf-green/30 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-gf-green/10 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-gf-green group-hover:text-white transition-all">
                <span className="text-gf-green group-hover:text-white transition-colors">{pillar.icon}</span>
              </div>

              <h3 className="text-lg font-bold text-gf-dark mb-3">{pillar.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">{pillar.description}</p>

              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-gf-green bg-gf-green-light px-3 py-1.5 rounded-full">
                <span className="w-1.5 h-1.5 bg-gf-green rounded-full" />
                {pillar.highlight}
              </span>
            </div>
          ))}
        </div>

        {/* Mission bar */}
        <div className="mt-12 bg-gradient-to-r from-gf-green to-gf-green-dark rounded-2xl p-8 md:p-10 text-center text-white">
          <p className="text-2xl md:text-3xl font-serif font-bold mb-2">Our Mission</p>
          <p className="text-lg text-green-100">
            Help <span className="font-bold text-white">1 million people</span> achieve remission by <span className="font-bold text-white">2030</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
