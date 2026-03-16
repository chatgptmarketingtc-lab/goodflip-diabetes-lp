import React, { useState } from 'react';
import { Send, Shield, Clock, Phone } from 'lucide-react';

// ============================================================
// GOOGLE SHEETS WEBHOOK CONFIG
// Replace the URL below with your Google Apps Script / Zapier / Make webhook URL
const WEBHOOK_URL = '';
// ============================================================

interface FormData {
  name: string;
  phone: string;
  email: string;
  age: string;
  diabetesType: string;
  medication: string;
  city: string;
}

const LeadForm: React.FC = () => {
  const [form, setForm] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    age: '',
    diabetesType: '',
    medication: '',
    city: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!form.name || !form.phone || !form.email) {
      setError('Please fill in all required fields.');
      return;
    }

    if (!/^\d{10}$/.test(form.phone)) {
      setError('Please enter a valid 10-digit phone number.');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError('Please enter a valid email address.');
      return;
    }

    setLoading(true);

    try {
      if (WEBHOOK_URL) {
        await fetch(WEBHOOK_URL, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            ...form,
            timestamp: new Date().toISOString(),
            source: 'GoodFlip Landing Page',
          }),
        });
      }
      setSubmitted(true);
    } catch (err) {
      setError('Something went wrong. Please try again or call us directly.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <section id="lead-form" className="py-16 md:py-24 bg-gf-green-light">
        <div className="max-w-xl mx-auto px-4 text-center">
          <div className="bg-white rounded-3xl p-10 shadow-lg">
            <div className="w-20 h-20 bg-gf-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-4xl">&#10003;</span>
            </div>
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-gf-dark mb-4">
              Thank You, {form.name}!
            </h3>
            <p className="text-gray-600 mb-6">
              Our care team will reach out to you within 24 hours to schedule your free consultation and discuss your personalised diabetes management plan.
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
              <Phone size={16} className="text-gf-green" />
              <span>Or call us now: <a href="tel:+918511975757" className="text-gf-green font-semibold">+91 851 197 5757</a></span>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="lead-form" className="py-16 md:py-24 bg-gf-green-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - copy */}
          <div>
            <span className="inline-block text-sm font-semibold text-gf-green bg-white px-4 py-1.5 rounded-full mb-4">
              Free Consultation
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gf-dark mb-4">
              Start Your Journey to Diabetes Remission
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Book a free consultation with our care team. We'll assess your condition and recommend a personalised plan — no commitment required.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
                  <Clock size={20} className="text-gf-green" />
                </div>
                <div>
                  <p className="font-semibold text-gf-dark">Response within 24 hours</p>
                  <p className="text-sm text-gray-500">Our care team will call you to understand your needs.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
                  <Shield size={20} className="text-gf-green" />
                </div>
                <div>
                  <p className="font-semibold text-gf-dark">100% confidential</p>
                  <p className="text-sm text-gray-500">Your health data is private and secure with us.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - form */}
          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl">
            <h3 className="text-xl font-bold text-gf-dark mb-6">Talk to a Health Counsellor</h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name <span className="text-gf-red">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gf-green focus:ring-2 focus:ring-gf-green/20 outline-none transition-all text-sm"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number <span className="text-gf-red">*</span>
                  </label>
                  <div className="flex">
                    <span className="inline-flex items-center px-3 py-3 rounded-l-xl border border-r-0 border-gray-200 bg-gray-50 text-sm text-gray-500">
                      +91
                    </span>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="10-digit number"
                      maxLength={10}
                      className="w-full px-4 py-3 rounded-r-xl border border-gray-200 focus:border-gf-green focus:ring-2 focus:ring-gf-green/20 outline-none transition-all text-sm"
                      required
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address <span className="text-gf-red">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gf-green focus:ring-2 focus:ring-gf-green/20 outline-none transition-all text-sm"
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Age</label>
                  <input
                    type="number"
                    name="age"
                    value={form.age}
                    onChange={handleChange}
                    placeholder="Your age"
                    min="18"
                    max="100"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gf-green focus:ring-2 focus:ring-gf-green/20 outline-none transition-all text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                  <input
                    type="text"
                    name="city"
                    value={form.city}
                    onChange={handleChange}
                    placeholder="Your city"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gf-green focus:ring-2 focus:ring-gf-green/20 outline-none transition-all text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Diabetes Type</label>
                  <select
                    name="diabetesType"
                    value={form.diabetesType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gf-green focus:ring-2 focus:ring-gf-green/20 outline-none transition-all text-sm bg-white"
                  >
                    <option value="">Select type</option>
                    <option value="prediabetes">Prediabetes / Borderline</option>
                    <option value="type2">Type 2 Diabetes</option>
                    <option value="type1">Type 1 Diabetes</option>
                    <option value="gestational">Gestational Diabetes</option>
                    <option value="unsure">Not sure</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Current Medication</label>
                  <select
                    name="medication"
                    value={form.medication}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gf-green focus:ring-2 focus:ring-gf-green/20 outline-none transition-all text-sm bg-white"
                  >
                    <option value="">Select</option>
                    <option value="none">No medication</option>
                    <option value="oral">Oral medication only</option>
                    <option value="insulin">On insulin</option>
                    <option value="both">Both oral & insulin</option>
                  </select>
                </div>
              </div>

              {error && (
                <p className="text-gf-red text-sm font-medium">{error}</p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gf-green hover:bg-gf-green-dark text-white py-4 rounded-full font-semibold text-base transition-all hover:shadow-xl hover:shadow-gf-green/25 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <span className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full" />
                ) : (
                  <>
                    <Send size={18} />
                    Talk to a Health Counsellor
                  </>
                )}
              </button>

              <p className="text-xs text-gray-400 text-center">
                By submitting, you agree to our Privacy Policy. We'll never spam you.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadForm;
