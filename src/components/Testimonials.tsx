import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Girish Durve',
    age: 66,
    gender: 'Male',
    city: 'Mumbai',
    quote: 'My weight dropped from 77kg to 73.5kg. I feel more energetic, digestion has improved, blood sugar has reduced by 50%, HbA1c has gone from 10.2 to 8.8. Grateful for team GoodFlip\'s expertise.',
    program: 'Diabetes Remission & Management Program',
    metric: 'HbA1c: 10.2 → 8.8',
    metricLabel: 'HbA1c Improved',
  },
  {
    name: 'Sandhya Parab',
    age: 63,
    gender: 'Female',
    city: 'Mumbai',
    quote: 'I am a senior citizen. Dr. Amandeep Kaur and Dr. Shweta Wankhade were really helpful. My HbA1c levels were normal in just 3 months. Really happy with GoodFlip.',
    program: 'Diabetes Remission & Management Program',
    metric: 'HbA1c Normal',
    metricLabel: 'In 3 Months',
  },
  {
    name: 'Seger Dsouza',
    age: 38,
    gender: 'Male',
    city: 'Mumbai',
    quote: 'I was once overweight at 103 kg. Thanks to GoodFlip coaches, I now weigh 93 kg. I struggled with hunger, low energy, and constant tiredness. Now, my hunger is under control, I feel energetic, and my tiredness is gone.',
    program: 'Diabetes Remission & Management Program',
    metric: '-10 kg',
    metricLabel: 'Weight Lost',
  },
];

const Testimonials: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-gf-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block text-sm font-semibold text-gf-green bg-gf-green-light px-4 py-1.5 rounded-full mb-4">
            Real Results
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-gf-dark mb-4">
            For Many, Results Are Life-Changing
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Hear from people who transformed their diabetes management with GoodFlip.
          </p>
        </div>

        {/* Desktop: Show all cards */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all border border-gray-100 flex flex-col">
              {/* Metric highlight */}
              <div className="bg-gf-green-light rounded-xl p-4 mb-6 text-center">
                <p className="text-2xl font-bold text-gf-green">{t.metric}</p>
                <p className="text-xs text-gray-500 mt-1">{t.metricLabel}</p>
              </div>

              <Quote size={24} className="text-gf-green/20 mb-4" />

              <p className="text-gray-600 leading-relaxed flex-1 text-sm">"{t.quote}"</p>

              <div className="mt-6 pt-6 border-t border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gf-green/10 rounded-full flex items-center justify-center">
                    <span className="text-gf-green font-bold text-lg">{t.name[0]}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gf-dark">{t.name}</p>
                    <p className="text-xs text-gray-500">{t.age}, {t.gender} | {t.city}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: Carousel */}
        <div className="md:hidden">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="bg-gf-green-light rounded-xl p-4 mb-6 text-center">
              <p className="text-2xl font-bold text-gf-green">{testimonials[current].metric}</p>
              <p className="text-xs text-gray-500 mt-1">{testimonials[current].metricLabel}</p>
            </div>

            <Quote size={20} className="text-gf-green/20 mb-3" />
            <p className="text-gray-600 leading-relaxed text-sm mb-6">"{testimonials[current].quote}"</p>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gf-green/10 rounded-full flex items-center justify-center">
                <span className="text-gf-green font-bold">{testimonials[current].name[0]}</span>
              </div>
              <div>
                <p className="font-semibold text-gf-dark text-sm">{testimonials[current].name}</p>
                <p className="text-xs text-gray-500">{testimonials[current].age}, {testimonials[current].gender} | {testimonials[current].city}</p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 mt-6">
            <button onClick={prev} className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gf-green hover:text-white hover:border-gf-green transition-all">
              <ChevronLeft size={20} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${i === current ? 'bg-gf-green w-6' : 'bg-gray-300'}`}
                />
              ))}
            </div>
            <button onClick={next} className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gf-green hover:text-white hover:border-gf-green transition-all">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
