import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Check, Clock } from 'lucide-react';
import { ReactComponent as Logo } from '../goodflip-logo.svg';

interface Program {
  slug: string;
  condition: string;
  tagline: string;
  stat: string;
  statLabel: string;
  ctaLabel: string;
  available: boolean;
  features: string[];
  foundingNote?: string;
}

const programs: Program[] = [
  {
    slug: '/diabetes-program',
    condition: 'Diabetes Care Program',
    tagline: 'Doctor-led remission program for lasting blood sugar control.',
    stat: '92%',
    statLabel: 'of members saw HbA1c reduction',
    ctaLabel: 'View Program',
    available: true,
    foundingNote: 'Clinically validated — published in Frontiers in Clinical Diabetes & Healthcare.',
    features: [
      'Doctor-led program oversight',
      'Personalised nutrition & fitness coaching',
      'Real-time CGM glucose monitoring',
      'Smart Body Composition Analyser included',
      '80+ biomarker diagnostic panel',
      'CBT-based habit & stress coaching',
      'Daily live group exercise sessions',
      'GoodFlip App with 24/7 chat support',
    ],
  },
  {
    slug: '/pcos-program',
    condition: 'PCOS Care Program',
    tagline: 'Hormone-first care targeting the root causes of PCOS.',
    stat: 'Coming Soon',
    statLabel: '',
    ctaLabel: 'Notify Me',
    available: false,
    features: [
      'Endocrinologist-led care',
      'Hormone & metabolic panel diagnostics',
      'Personalised nutrition for PCOS',
      'Cycle tracking & symptom monitoring',
      'Targeted supplement protocol',
      'Stress & cortisol coaching',
    ],
  },
  {
    slug: '/hypertension-program',
    condition: 'Hypertension Care Program',
    tagline: 'Clinician-led lifestyle intervention to bring BP under control.',
    stat: 'Coming Soon',
    statLabel: '',
    ctaLabel: 'Notify Me',
    available: false,
    features: [
      'Cardiologist-reviewed program',
      'BP trend monitoring & alerts',
      'DASH diet personalisation',
      'Stress & breathwork coaching',
      'Cardiovascular biomarker tracking',
      'Medication adherence support',
    ],
  },
];

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gf-gray">

      {/* Navbar — logo only */}
      <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-20 flex items-center">
          <Logo className="h-14 md:h-16 w-auto" />
        </div>
      </nav>

      {/* Page heading */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10 text-center">
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-gf-dark">
          Choose Your Program
        </h1>
        <p className="text-gray-500 text-lg mt-3">
          Doctor-led care programs built for lasting results.
        </p>
      </div>

      {/* Program cards */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 space-y-5">
        {programs.map((program) => (
          <div
            key={program.slug}
            className={`bg-white rounded-2xl border overflow-hidden transition-all duration-300 ${
              program.available
                ? 'border-gray-200 hover:border-gf-green/40 hover:shadow-lg'
                : 'border-gray-200 opacity-60'
            }`}
          >
            <div className="grid md:grid-cols-5">

              {/* Left — name, stat, CTA */}
              <div className="md:col-span-2 p-8 flex flex-col justify-between border-b md:border-b-0 md:border-r border-gray-100">
                <div>
                  <h2 className="text-xl font-bold text-gf-dark mb-2">{program.condition}</h2>
                  <p className="text-sm text-gray-500 leading-relaxed mb-6">{program.tagline}</p>

                  {program.available ? (
                    <div className="mb-6">
                      <p className="font-serif text-5xl font-black text-gf-green leading-none">
                        {program.stat}
                      </p>
                      <p className="text-xs text-gray-400 mt-1">{program.statLabel}</p>
                    </div>
                  ) : (
                    <div className="mb-6 flex items-center gap-2 text-gray-400">
                      <Clock size={16} />
                      <span className="text-sm font-medium">Coming Soon</span>
                    </div>
                  )}

                  {program.foundingNote && (
                    <p className="text-xs text-gf-green font-medium mb-6 leading-relaxed">
                      {program.foundingNote}
                    </p>
                  )}
                </div>

                <button
                  onClick={() => program.available && navigate(program.slug)}
                  disabled={!program.available}
                  className={`w-full py-3.5 rounded-xl font-semibold text-sm transition-all flex items-center justify-center gap-2 group ${
                    program.available
                      ? 'bg-gf-dark hover:bg-gray-800 text-white cursor-pointer'
                      : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  {program.ctaLabel}
                  {program.available && (
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  )}
                </button>
              </div>

              {/* Right — feature bullets */}
              <div className="md:col-span-3 p-8">
                <ul className="space-y-3">
                  {program.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                        program.available ? 'bg-gf-green' : 'bg-gray-300'
                      }`}>
                        <Check size={11} className="text-white" />
                      </span>
                      <span className="text-sm text-gray-600 leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="border-t border-gray-200 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center">
          <p className="text-sm text-gray-400">© 2026 GoodFlip. All rights reserved.</p>
        </div>
      </div>

    </div>
  );
};

export default Home;
