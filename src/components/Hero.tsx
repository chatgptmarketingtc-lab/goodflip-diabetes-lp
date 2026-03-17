import React from 'react';
import { ArrowRight, Shield, FlaskConical, Cpu, HeartPulse, Activity } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToForm = () => {
    document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-20 md:pt-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gf-green-light via-white to-gf-warm" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-gf-green/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-gf-green/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="max-w-xl">
            {/* Trust badge */}
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-gf-green/20 rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 bg-gf-green rounded-full animate-pulse" />
              <span className="text-sm text-gray-600">Clinically validated by ADA &amp; IDF standards and published in Frontiers</span>
            </div>

            <h1 className="font-serif text-4xl md:text-5xl lg:text-[56px] font-bold text-gf-dark leading-tight mb-6">
              Take Control of Your{' '}
              <span className="text-gf-green relative">
                Diabetes
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none">
                  <path d="M1 5.5C47 2 153 2 199 5.5" stroke="#299D6B" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              </span>
              {' '}Naturally
            </h1>

            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-2">
              Doctor-led guidance, real-time CGM tracking, personalised nutrition, exercise &amp; CBT coaching, and comprehensive lab tests to measure outcomes.
            </p>
            <p className="text-lg md:text-xl font-semibold text-gf-dark mb-8">
              92% of members saw a reduction in HbA1c.*
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <button
                onClick={scrollToForm}
                className="group bg-gf-green hover:bg-gf-green-dark text-white px-8 py-4 rounded-full text-lg font-semibold transition-all hover:shadow-xl hover:shadow-gf-green/25 flex items-center justify-center gap-2"
              >
                Talk to a Health Counsellor
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-gf-green text-gf-green hover:bg-gf-green hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all flex items-center justify-center"
              >
                View Programs
              </button>
            </div>

            {/* Trust indicators */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Shield size={18} className="text-gf-green flex-shrink-0" />
                <span>Doctor-led program</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <FlaskConical size={18} className="text-gf-green flex-shrink-0" />
                <span>Comprehensive Lab tests</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Cpu size={18} className="text-gf-green flex-shrink-0" />
                <span>Integrated with IoT Devices - BCA and CGM</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <HeartPulse size={18} className="text-gf-green flex-shrink-0" />
                <span>Metabolic-first approach</span>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative">
              {/* Main card */}
              <div className="bg-white rounded-3xl shadow-2xl p-8 w-[400px]">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-gf-green/10 rounded-2xl flex items-center justify-center">
                    <Activity size={28} className="text-gf-green" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Your Metabolic Score</p>
                    <p className="text-2xl font-bold text-gf-dark">360° Analysis</p>
                  </div>
                </div>
                {/* Simulated score bars */}
                <div className="space-y-4">
                  {[
                    { label: 'Profile Score', value: 85, color: 'bg-gf-green' },
                    { label: 'Wellness Score', value: 72, color: 'bg-emerald-400' },
                    { label: 'Habit Score', value: 68, color: 'bg-teal-400' },
                    { label: 'Diagnostics Score', value: 78, color: 'bg-gf-green' },
                  ].map((item) => (
                    <div key={item.label}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600">{item.label}</span>
                        <span className="font-semibold text-gf-dark">{item.value}%</span>
                      </div>
                      <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
                        <div className={`h-full ${item.color} rounded-full`} style={{ width: `${item.value}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-lg p-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-lg">&#x2193;</span>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Avg HbA1c Drop</p>
                  <p className="font-bold text-gf-green">0.99 points</p>
                </div>
              </div>

              {/* Floating badge bottom */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-lg p-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-gf-green font-bold">
                  92%
                </div>
                <div>
                  <p className="text-xs text-gray-500">Members Improved</p>
                  <p className="font-bold text-gf-dark text-sm">HbA1c Reduction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave divider */}
      <div className="relative">
        <svg viewBox="0 0 1440 60" fill="none" className="w-full">
          <path d="M0 60V30C240 0 480 0 720 30C960 60 1200 60 1440 30V60H0Z" fill="white" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
