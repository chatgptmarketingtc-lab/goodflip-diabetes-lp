import React from 'react';
import {
  Droplets,
  ShieldCheck,
  Activity,
  Heart,
  Atom,
  FlaskConical,
  Microscope,
  Beaker,
} from 'lucide-react';

const labTests = [
  {
    icon: <Droplets size={24} />,
    name: 'Glucose (Fasting)',
    importance:
      'Measures baseline sugar control after overnight fasting. High values indicate poor glucose regulation or insulin resistance.',
    outcome:
      'Reduction in fasting glucose variability; improved morning energy and reduced cravings.',
  },
  {
    icon: <Activity size={24} />,
    name: 'HOMA-IR',
    importance:
      'Calculates how resistant the body is to insulin — a key driver of metabolic dysfunction.',
    outcome:
      'Improvement indicates better insulin sensitivity and fat metabolism.',
  },
  {
    icon: <Beaker size={24} />,
    name: 'Liver Profile',
    importance:
      'Evaluates liver fat accumulation (Fatty Liver) and inflammation. Critical in metabolic syndrome.',
    outcome:
      'Improved liver detox capacity and reduction in metabolic inflammation.',
  },
  {
    icon: <Heart size={24} />,
    name: 'Lipid Profile',
    importance:
      'Monitors cholesterol and triglycerides — key markers of heart and metabolic health.',
    outcome:
      'Improved HDL, reduced triglycerides; better cardiovascular health.',
  },
  {
    icon: <ShieldCheck size={24} />,
    name: 'Apolipoprotein B',
    importance:
      'Reflects number of atherogenic (bad) particles; a better predictor for heart risk than LDL alone.',
    outcome:
      'Decreased ApoB shows better lipid clearance and arterial health.',
  },
  {
    icon: <FlaskConical size={24} />,
    name: 'HbA1c Test',
    importance:
      'Reflects average blood glucose over 3 months; helps identify prediabetes or diabetes linked to obesity.',
    outcome:
      'Lower HbA1c signals chronic glucose control and improved metabolic flexibility.',
  },
  {
    icon: <Microscope size={24} />,
    name: 'Kidney Profile',
    importance:
      'Evaluates kidney function — diabetes increases strain on kidneys and risk of early nephropathy.',
    outcome:
      'Improved values indicate reduced filtration stress and healthier kidney function.',
  },
];

const LabTests: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-sm font-semibold text-gf-green bg-gf-green-light px-4 py-1.5 rounded-full mb-4">
            Comprehensive Diagnostics
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-gf-dark mb-4">
            Every Marker That Matters, Built Into Your Program
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Remission isn't a feeling — it's measured. Every program includes a diagnostic panel that
            tracks the metabolic markers that matter most. Your progress is defined by the betterment
            of these parameters, not guesswork.
          </p>
        </div>

        {/* Lab test cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {labTests.map((test, i) => (
            <div
              key={i}
              className="bg-gf-gray rounded-2xl p-6 border border-gray-100 hover:border-gf-green/30 hover:shadow-lg transition-all duration-300 group"
            >
              {/* Icon + Name */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 bg-gf-green/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-gf-green transition-colors">
                  <span className="text-gf-green group-hover:text-white transition-colors">
                    {test.icon}
                  </span>
                </div>
                <h3 className="text-base font-bold text-gf-dark">{test.name}</h3>
              </div>

              {/* Why important */}
              <p className="text-sm text-gray-600 leading-relaxed mb-4">{test.importance}</p>

              {/* Expected outcome */}
              <div className="bg-gf-green-light/60 rounded-xl px-4 py-3">
                <p className="text-xs font-semibold text-gf-green mb-0.5">Expected with GoodFlip</p>
                <p className="text-sm text-gf-dark leading-relaxed">{test.outcome}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Value callout */}
        <div className="mt-10 max-w-2xl mx-auto bg-gf-green-light border border-gf-green/20 rounded-xl px-6 py-4 text-center">
          <p className="text-sm font-medium text-gf-green-dark">
            This comprehensive panel is included in every program — diagnostics that would
            typically cost ₹5,000+ independently are built into your care journey at no extra
            charge.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LabTests;
