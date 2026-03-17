import React from 'react';
import { Check } from 'lucide-react';
import bcaDeviceImg from '../assets/bca-device.jpeg';
import cgmDeviceImg from '../assets/cgm-device.jpeg';


const Devices: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gf-gray">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-sm font-semibold text-gf-green bg-gf-green-light px-4 py-1.5 rounded-full mb-4">
            Integrated Devices
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-gf-dark mb-4">
            Smart Devices That Power Your Program
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Your care journey is backed by clinical-grade hardware that feeds real-time data to your
            coaches and doctors — turning every reading into a personalised action plan.
          </p>
        </div>

        {/* Two-column cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* BCA Card */}
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300">
            {/* Card header */}
            <div className="bg-gf-green px-6 py-4 flex items-center justify-between">
              <h3 className="text-lg font-bold text-white">Smart Body Composition Analyser</h3>
              <span className="text-xs font-semibold bg-white text-gf-green px-3 py-1 rounded-full flex-shrink-0 ml-2">
                Included
              </span>
            </div>

            {/* Product Image */}
            <div className="bg-white">
              <img
                src={bcaDeviceImg}
                alt="GoodFlip Smart Body Composition Analyser"
                className="w-full object-contain max-h-96 block"
              />
            </div>

            {/* What is it */}
            <div className="px-6 pt-2 pb-4">
              <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-2">What is it?</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                A Bluetooth-enabled smart scale that goes far beyond weight. It uses multi-frequency
                bioimpedance analysis to measure body fat percentage, muscle mass, heart rate, hydration
                levels, bone density, and metabolic age — syncing all data instantly to the GoodFlip app.
              </p>
            </div>

            {/* How it helps */}
            <div className="px-6 pb-6">
              <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-3">
                How it helps in the program
              </h4>
              <div className="space-y-2.5">
                {[
                  'Tracks body composition changes — not just weight — to reveal true metabolic progress',
                  'Feeds data into your Metabolic Score so coaches can adjust your nutrition and exercise plan',
                  'Monitors muscle-to-fat ratio shifts that correlate with insulin sensitivity improvement',
                  'Daily readings build a trend line your doctor uses during consultations',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <span className="mt-0.5 w-5 h-5 bg-gf-green/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check size={12} className="text-gf-green" />
                    </span>
                    <p className="text-sm text-gray-600 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="px-6 pb-6">
              <div className="bg-gf-green-light rounded-xl px-4 py-3 text-center">
                <p className="text-sm font-medium text-gf-green-dark">
                  Bundled with every program at no extra cost
                </p>
              </div>
            </div>
          </div>

          {/* CGM Card */}
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300">
            {/* Card header */}
            <div className="bg-gf-dark px-6 py-4 flex items-center justify-between">
              <h3 className="text-lg font-bold text-white">Continuous Glucose Monitor</h3>
              <span className="text-xs font-semibold bg-white text-gf-dark px-3 py-1 rounded-full flex-shrink-0 ml-2">
                Add-on
              </span>
            </div>

            {/* Product Image */}
            <div className="bg-white">
              <img
                src={cgmDeviceImg}
                alt="GoodFlip Smart CGM Device"
                className="w-full object-contain max-h-96 block"
              />
            </div>

            {/* What is it */}
            <div className="px-6 pt-2 pb-4">
              <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-2">What is it?</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                GoodFlip CGM is powered by AI insights, delivering a glucose reading every 3 minutes —
                no scanning needed. With clinical-grade accuracy (MARD 9.07%), a 14-day sensor life, and
                a reusable transmitter, it gives you and your care team 480 data points per day for
                precise, real-time glucose tracking.
              </p>
            </div>

            {/* How it helps */}
            <div className="px-6 pb-6">
              <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-3">
                How it helps in the program
              </h4>
              <div className="space-y-2.5">
                {[
                  'Reveals exactly how your body responds to specific foods, exercise, stress, and sleep',
                  'Real-time high/low alerts help you act before a spike becomes a pattern',
                  'Coaches use your glucose trends to fine-tune meal plans and exercise timing',
                  'Eliminates guesswork — your doctor sees continuous data, not a single fasting number',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <span className="mt-0.5 w-5 h-5 bg-gf-dark/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check size={12} className="text-gf-dark" />
                    </span>
                    <p className="text-sm text-gray-600 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="px-6 pb-6">
              <div className="bg-gray-100 rounded-xl px-4 py-3 text-center">
                <p className="text-sm font-medium text-gray-600">
                  Available as an add-on — recommended by your Health Counsellor based on your profile
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Devices;
