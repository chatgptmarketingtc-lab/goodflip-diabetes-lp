import React, { useState } from 'react';
import { Check, Star, CreditCard, Wallet } from 'lucide-react';

const Pricing: React.FC = () => {
  const [duration, setDuration] = useState<'6' | '12'>('6');

  const plans = {
    '6': [
      {
        name: 'Essential',
        subtitle: 'Without CGM',
        price: '13,999',
        originalPrice: '17,999',
        perMonth: '2,333',
        popular: false,
        features: [
          'Doctor-led program oversight',
          'Personalised nutrition program',
          '1:1 fitness coaching',
          'Habit & stress management',
          '80+ biomarker diagnostics',
          'Smart Body Composition Analyser',
          'GoodFlip App access',
          'Unlimited in-app chat support',
          'Daily live exercise sessions on group webinars',
          'Live Group Expert Sessions',
        ],
      },
      {
        name: 'Complete',
        subtitle: 'With CGM Device',
        price: '18,999',
        originalPrice: '24,999',
        perMonth: '3,167',
        popular: true,
        features: [
          'Everything in Essential, plus:',
          'CGM Device (1 Transmitter + 1 Sensor)',
          '1000+ real-time glucose data points',
          'Personalised Glycemic Response (PGR)',
          'AI-powered insights by Kaira',
          '24/7 glucose monitoring & alerts',
          'Personalised diet based on CGM data',
          'Advanced metabolic score tracking',
          'Priority support access',
          'Community & expert sessions',
        ],
      },
    ],
    '12': [
      {
        name: 'Essential',
        subtitle: 'Without CGM',
        price: '19,999',
        originalPrice: '27,999',
        perMonth: '1,667',
        popular: false,
        features: [
          'Doctor-led program oversight',
          'Personalised nutrition program',
          '1:1 fitness coaching',
          'Habit & stress management',
          '80+ biomarker diagnostics',
          'Smart Body Composition Analyser',
          'GoodFlip App access',
          'Unlimited in-app chat support',
          'Daily live exercise sessions on group webinars',
          'Live Group Expert Sessions',
        ],
      },
      {
        name: 'Complete',
        subtitle: 'With CGM Device',
        price: '24,999',
        originalPrice: '34,999',
        perMonth: '2,083',
        popular: true,
        features: [
          'Everything in Essential, plus:',
          'CGM Device (1 Transmitter + 1 Sensor)',
          '1000+ real-time glucose data points',
          'Personalised Glycemic Response (PGR)',
          'AI-powered insights by Kaira',
          '24/7 glucose monitoring & alerts',
          'Personalised diet based on CGM data',
          'Advanced metabolic score tracking',
          'Priority support access',
          'Community & expert sessions',
        ],
      },
    ],
  };

  const currentPlans = plans[duration];

  return (
    <section id="pricing" className="py-16 md:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block text-sm font-semibold text-gf-green bg-gf-green-light px-4 py-1.5 rounded-full mb-4">
            Simple Pricing
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-gf-dark mb-4">
            Choose Your Program
          </h2>
          <p className="text-gray-600 text-lg max-w-xl mx-auto mb-8">
            Invest in your health with a program that fits your needs. No hidden fees.
          </p>

          {/* Duration Toggle */}
          <div className="inline-flex items-center bg-gf-gray rounded-full p-1.5 gap-1">
            <button
              onClick={() => setDuration('6')}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
                duration === '6'
                  ? 'bg-gf-green text-white shadow-md'
                  : 'text-gray-600 hover:text-gf-dark'
              }`}
            >
              6 Months
            </button>
            <button
              onClick={() => setDuration('12')}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all relative ${
                duration === '12'
                  ? 'bg-gf-green text-white shadow-md'
                  : 'text-gray-600 hover:text-gf-dark'
              }`}
            >
              12 Months
              <span className="absolute -top-2 -right-2 bg-gf-red text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                SAVE
              </span>
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {currentPlans.map((plan, i) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 transition-all duration-300 ${
                plan.popular
                  ? 'bg-gradient-to-b from-gf-green-light to-white border-2 border-gf-green shadow-xl shadow-gf-green/10'
                  : 'bg-white border border-gray-200 hover:border-gf-green/30 hover:shadow-lg'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gf-green text-white px-5 py-1.5 rounded-full text-sm font-semibold flex items-center gap-1.5">
                  <Star size={14} fill="white" />
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-bold text-gf-dark">{plan.name}</h3>
                <p className="text-sm text-gray-500">{plan.subtitle}</p>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl md:text-5xl font-serif font-black text-gf-dark">
                    &#8377;{plan.price}
                  </span>
                  <span className="text-lg text-gray-400 line-through">&#8377;{plan.originalPrice}</span>
                </div>
                <p className="text-sm text-gray-500 mt-1">
                  &#8377;{plan.perMonth}/month &middot; {duration} months
                </p>
              </div>

              <button
                onClick={() => document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' })}
                className={`w-full py-4 rounded-full font-semibold text-base transition-all mb-8 ${
                  plan.popular
                    ? 'bg-gf-green hover:bg-gf-green-dark text-white shadow-lg hover:shadow-xl'
                    : 'bg-gf-dark hover:bg-gray-800 text-white'
                }`}
              >
                Get Started
              </button>

              <ul className="space-y-3">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <Check size={18} className={`mt-0.5 flex-shrink-0 ${j === 0 && i === 1 ? 'text-gf-green font-bold' : 'text-gf-green'}`} />
                    <span className={`text-sm ${j === 0 && i === 1 ? 'font-semibold text-gf-dark' : 'text-gray-600'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-gray-400 mt-8">
          All programs include at-home sample collection from accredited labs.
        </p>

        {/* Easy payment callout */}
        <div className="mt-8 bg-gf-gray border border-gray-200 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gf-green/10 rounded-xl flex items-center justify-center">
              <CreditCard size={20} className="text-gf-green" />
            </div>
            <div>
              <p className="font-semibold text-gf-dark text-sm">Easy EMI Available</p>
              <p className="text-xs text-gray-500">No-cost EMI on select cards</p>
            </div>
          </div>
          <div className="hidden md:block w-px h-10 bg-gray-300" />
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gf-green/10 rounded-xl flex items-center justify-center">
              <Wallet size={20} className="text-gf-green" />
            </div>
            <div>
              <p className="font-semibold text-gf-dark text-sm">Multiple Payment Options</p>
              <p className="text-xs text-gray-500">UPI, Cards, Net Banking &amp; Wallets</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
