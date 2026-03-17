import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'What is GoodFlip, and how does it help with diabetes?',
    a: 'GoodFlip is a health platform that helps individuals manage and reverse metabolic health conditions like diabetes. It provides personalised care programs combining medical expertise, smart CGM tracking, lifestyle coaching, and science-backed supplements.',
  },
  {
    q: 'Can GoodFlip help me achieve diabetes remission?',
    a: 'Yes. GoodFlip focuses on long-term remission rather than just symptom management. Our programs help individuals improve their metabolic health through sustainable lifestyle changes, coaching, and medical interventions. 92% of our members have seen a reduction in HbA1c.',
  },
  {
    q: 'What does a GoodFlip care program include?',
    a: 'Each program includes specialist consultations with expert doctors, smart tracking using CGM devices, advanced diagnostics with 80+ biomarkers, personalised 1:1 coaching from nutritionists and fitness experts, and science-backed supplements to accelerate improvements.',
  },
  {
    q: 'How is the diet program personalised for me?',
    a: 'Your diet program is based on your Personalised Glycemic Response (PGR) data from the CGM device, your cuisine preferences, and regional food habits. This means your program is built on actual data of how YOUR body responds to different foods — not generic guidelines.',
  },
  {
    q: 'Do I need to stop my current medication?',
    a: 'No. GoodFlip works in partnership with your existing doctor. We do not recommend medication changes ourselves, but we provide the clinical outcomes that empower your physician to safely de-prescribe or reduce dosage when remission is achieved.',
  },
  {
    q: 'How do I track my progress?',
    a: 'You can track your health progress using the GoodFlip app, which integrates data from the CGM device, diagnostic results, and coaching insights to give you a real-time health snapshot via your personalised Metabolic Score dashboard.',
  },
  {
    q: 'What support is available during the program?',
    a: 'GoodFlip provides unlimited 1:1 consultations, 24/7 in-app chat support, access to an exclusive community, and Live Group Expert Sessions. You can also reach out via WhatsApp or our support helpline anytime.',
  },
];

const FAQ: React.FC = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-gf-dark mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600">
            Have more questions? Call us at{' '}
            <a href="tel:+918511975757" className="text-gf-green font-semibold">+91 851 197 5757</a>
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`border rounded-2xl transition-all duration-300 ${
                open === i ? 'border-gf-green/30 bg-gf-green-light/30 shadow-sm' : 'border-gray-200'
              }`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className={`font-semibold text-sm md:text-base pr-4 ${open === i ? 'text-gf-green' : 'text-gf-dark'}`}>
                  {faq.q}
                </span>
                <ChevronDown
                  size={20}
                  className={`flex-shrink-0 transition-transform duration-300 ${
                    open === i ? 'rotate-180 text-gf-green' : 'text-gray-400'
                  }`}
                />
              </button>
              {open === i && (
                <div className="px-5 pb-5">
                  <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
