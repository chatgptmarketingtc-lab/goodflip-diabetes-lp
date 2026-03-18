import React, { useState, useMemo } from 'react';
import { Send, Shield, Clock, ChevronRight, ChevronLeft, Check } from 'lucide-react';

// ============================================================
// GOOGLE SHEETS WEBHOOK CONFIG
// Replace the URL below with your Google Apps Script / Zapier / Make webhook URL
const WEBHOOK_URL = 'https://script.google.com/macros/s/AKfycbyPl0se_Vcf3kkdszE-wjHdT8sjwBUeu6I7A-uEM5Jgq-jpSJrAMLO074LHi9cexHhu/exec';
// ============================================================

interface FormData {
  name: string;
  phone: string;
  city: string;
  ageGroup: string;
  hba1c: string;
  bloodSugar: string;
  diabetesDuration: string;
  treatment: string[];
  comorbidities: string[];
  healthGoal: string;
  investmentReady: string;
}

const initialForm: FormData = {
  name: '',
  phone: '',
  city: '',
  ageGroup: '',
  hba1c: '',
  bloodSugar: '',
  diabetesDuration: '',
  treatment: [],
  comorbidities: [],
  healthGoal: '',
  investmentReady: '',
};

// Simple math captcha
const generateCaptcha = () => {
  const a = Math.floor(Math.random() * 10) + 1;
  const b = Math.floor(Math.random() * 10) + 1;
  return { question: `${a} + ${b} = ?`, answer: a + b };
};

const TOTAL_STEPS = 4;

const LeadForm: React.FC = () => {
  const [form, setForm] = useState<FormData>(initialForm);
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [captcha] = useState(generateCaptcha);
  const [captchaInput, setCaptchaInput] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
  };

  const handleRadio = (name: string, value: string) => {
    setForm({ ...form, [name]: value });
    setError('');
  };

  const handleMultiSelect = (name: 'treatment' | 'comorbidities', value: string) => {
    const current = form[name];
    if (name === 'comorbidities' && value === 'None of these') {
      setForm({ ...form, [name]: current.includes(value) ? [] : [value] });
    } else {
      const filtered = current.filter((v) => v !== 'None of these');
      if (filtered.includes(value)) {
        setForm({ ...form, [name]: filtered.filter((v) => v !== value) });
      } else {
        setForm({ ...form, [name]: [...filtered, value] });
      }
    }
    setError('');
  };

  const validateStep = (s: number): string | null => {
    switch (s) {
      case 1:
        if (!form.name.trim()) return 'Please enter your name.';
        if (!form.phone.trim()) return 'Please enter your mobile number.';
        if (!/^\d{10}$/.test(form.phone)) return 'Please enter a valid 10-digit mobile number.';
        if (!form.city.trim()) return 'Please enter your city.';
        if (!form.ageGroup) return 'Please select your age group.';
        return null;
      case 2:
        if (!form.hba1c) return 'Please select your HbA1c level.';
        if (!form.bloodSugar) return 'Please select your blood sugar level.';
        if (!form.diabetesDuration) return 'Please select how long you\'ve had diabetes.';
        return null;
      case 3:
        if (form.treatment.length === 0) return 'Please select at least one treatment option.';
        return null;
      case 4:
        if (!form.investmentReady) return 'Please let us know if you\'re open to investing in the program.';
        if (parseInt(captchaInput) !== captcha.answer) return 'Captcha answer is incorrect. Please try again.';
        return null;
      default:
        return null;
    }
  };

  const handleNext = () => {
    const err = validateStep(step);
    if (err) {
      setError(err);
      return;
    }
    setError('');
    setStep((s) => Math.min(s + 1, TOTAL_STEPS));
  };

  const handleBack = () => {
    setError('');
    setStep((s) => Math.max(s - 1, 1));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const err = validateStep(step);
    if (err) {
      setError(err);
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
            treatment: form.treatment.join(', '),
            comorbidities: form.comorbidities.join(', '),
            timestamp: new Date().toISOString(),
            source: 'GoodFlip Landing Page',
          }),
        });
      }
      setSubmitted(true);
    } catch {
      setError('Something went wrong. Please try again or call us directly.');
    } finally {
      setLoading(false);
    }
  };

  const progressPercent = useMemo(() => Math.round(((step - 1) / TOTAL_STEPS) * 100), [step]);

  // ── Shared styles ──
  const inputClass =
    'w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gf-green focus:ring-2 focus:ring-gf-green/20 outline-none transition-all text-sm';
  const labelClass = 'block text-sm font-medium text-gray-700 mb-1';
  const subTextClass = 'text-xs text-gray-400 mt-0.5 mb-2';

  const RadioOption = ({ name, value, label }: { name: string; value: string; label: string }) => (
    <label
      className={`flex items-center gap-3 px-4 py-3 rounded-xl border cursor-pointer transition-all text-sm ${
        (form as any)[name] === value
          ? 'border-gf-green bg-gf-green-light text-gf-dark font-medium'
          : 'border-gray-200 hover:border-gf-green/40 text-gray-600'
      }`}
    >
      <input
        type="radio"
        name={name}
        value={value}
        checked={(form as any)[name] === value}
        onChange={() => handleRadio(name, value)}
        className="sr-only"
      />
      <span
        className={`w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
          (form as any)[name] === value ? 'border-gf-green' : 'border-gray-300'
        }`}
      >
        {(form as any)[name] === value && <span className="w-2 h-2 rounded-full bg-gf-green" />}
      </span>
      {label}
    </label>
  );

  const CheckboxOption = ({
    name,
    value,
    label,
  }: {
    name: 'treatment' | 'comorbidities';
    value: string;
    label: string;
  }) => {
    const isChecked = form[name].includes(value);
    return (
      <label
        className={`flex items-center gap-3 px-4 py-3 rounded-xl border cursor-pointer transition-all text-sm ${
          isChecked
            ? 'border-gf-green bg-gf-green-light text-gf-dark font-medium'
            : 'border-gray-200 hover:border-gf-green/40 text-gray-600'
        }`}
      >
        <input
          type="checkbox"
          checked={isChecked}
          onChange={() => handleMultiSelect(name, value)}
          className="sr-only"
        />
        <span
          className={`w-4 h-4 rounded border-2 flex items-center justify-center flex-shrink-0 ${
            isChecked ? 'border-gf-green bg-gf-green' : 'border-gray-300'
          }`}
        >
          {isChecked && <Check size={10} className="text-white" />}
        </span>
        {label}
      </label>
    );
  };

  // ── Success state ──
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
              Our care team will reach out to you within 24 hours to schedule your free consultation
              and discuss your personalised diabetes management program.
            </p>
            <a
              href="https://www.instagram.com/goodflip.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 text-white px-6 py-3 rounded-full font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              Follow us on Instagram
            </a>
          </div>
        </div>
      </section>
    );
  }

  // ── Form steps ──
  return (
    <section id="lead-form" className="py-16 md:py-24 bg-gf-green-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left side - copy */}
          <div className="lg:sticky lg:top-32">
            <span className="inline-block text-sm font-semibold text-gf-green bg-white px-4 py-1.5 rounded-full mb-4">
              15-minute session with a Health Counsellor
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gf-dark mb-4">
              Start Your Journey to Diabetes Remission
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Book a free consultation with our care team. We'll assess your condition and recommend
              a personalised program — no commitment required.
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
            <h3 className="text-xl font-bold text-gf-dark mb-1">Talk to a Health Counsellor</h3>
            <p className="text-sm text-gray-500 mb-4">
              We ask a few quick questions so our Health Counsellor can personalise the program and understand you better before the call. Takes only 2 minutes.
            </p>

            {/* Progress bar */}
            <div className="mb-6">
              <div className="flex justify-between text-xs text-gray-400 mb-1.5">
                <span>Step {step} of {TOTAL_STEPS}</span>
                <span>{progressPercent}% complete</span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gf-green rounded-full transition-all duration-500"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              {/* ── STEP 1: Basic Info ── */}
              {step === 1 && (
                <div className="space-y-4 animate-fadeIn">
                  <div>
                    <label className={labelClass}>
                      Name <span className="text-gf-red">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label className={labelClass}>
                      Mobile Number <span className="text-gf-red">*</span>
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
                        className={`${inputClass} rounded-l-none`}
                      />
                    </div>
                  </div>

                  <div>
                    <label className={labelClass}>
                      City <span className="text-gf-red">*</span>
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={form.city}
                      onChange={handleChange}
                      placeholder="Enter your city"
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label className={labelClass}>
                      What is your age group? <span className="text-gf-red">*</span>
                    </label>
                    <p className={subTextClass}>
                      Diabetes affects different age groups differently. This helps us understand your risk profile.
                    </p>
                    <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                      {['25-30', '31-40', '41-50', '51-60', '60+'].map((opt) => (
                        <RadioOption key={opt} name="ageGroup" value={opt} label={opt} />
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* ── STEP 2: Health Markers ── */}
              {step === 2 && (
                <div className="space-y-5 animate-fadeIn">
                  <div>
                    <label className={labelClass}>
                      Do you know your latest HbA1c level? <span className="text-gf-red">*</span>
                    </label>
                    <p className={subTextClass}>
                      HbA1c is the key marker for diabetes. This helps our Health Counsellors personalise your program.
                    </p>
                    <div className="space-y-2">
                      {[
                        { value: 'below-5.7', label: 'Below 5.7 (normal range)' },
                        { value: '5.7-6.4', label: '5.7 – 6.4 (pre-diabetes range)' },
                        { value: '6.5-7.5', label: '6.5 – 7.5 (diabetes – moderate)' },
                        { value: '7.5-9.0', label: '7.5 – 9.0 (diabetes – needs immediate attention)' },
                        { value: 'above-9.0', label: 'Above 9.0 (diabetes – high risk of comorbidities)' },
                        { value: 'unknown', label: "I don't know" },
                      ].map((opt) => (
                        <RadioOption key={opt.value} name="hba1c" value={opt.value} label={opt.label} />
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className={labelClass}>
                      Do you know your most recent blood sugar level? <span className="text-gf-red">*</span>
                    </label>
                    <p className={subTextClass}>
                      This is the basic sugar test done at most labs. It gives our coaches a starting point even without HbA1c.
                    </p>
                    <div className="space-y-2">
                      {[
                        { value: 'below-100', label: 'Below 100 mg/dL (normal)' },
                        { value: '100-125', label: '100 – 125 mg/dL (borderline / pre-diabetes)' },
                        { value: '126-200', label: '126 – 200 mg/dL (high)' },
                        { value: 'above-200', label: 'Above 200 mg/dL (very high)' },
                        { value: 'unknown', label: "I don't know this" },
                      ].map((opt) => (
                        <RadioOption key={opt.value} name="bloodSugar" value={opt.value} label={opt.label} />
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className={labelClass}>
                      How long have you been living with Diabetes? <span className="text-gf-red">*</span>
                    </label>
                    <div className="space-y-2">
                      {[
                        { value: 'under-1', label: 'Recently diagnosed (under 1 year)' },
                        { value: '1-3', label: '1–3 years' },
                        { value: '3-5', label: '3–5 years' },
                        { value: '5+', label: '5+ years' },
                      ].map((opt) => (
                        <RadioOption key={opt.value} name="diabetesDuration" value={opt.value} label={opt.label} />
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* ── STEP 3: Treatment & Conditions ── */}
              {step === 3 && (
                <div className="space-y-5 animate-fadeIn">
                  <div>
                    <label className={labelClass}>
                      What is your current diabetes treatment? <span className="text-gf-red">*</span>
                    </label>
                    <p className={subTextClass}>
                      This helps our coaches understand where you are in your care journey before your first consultation.
                    </p>
                    <p className="text-xs text-gf-green font-medium mb-2">Select all that apply</p>
                    <div className="space-y-2">
                      {[
                        'Not on any medication yet',
                        'Metformin only',
                        'Metformin + other oral medications',
                        'Insulin (with or without oral meds)',
                        'Only diet and lifestyle changes',
                        "I'm not sure about my medication names",
                      ].map((opt) => (
                        <CheckboxOption key={opt} name="treatment" value={opt} label={opt} />
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className={labelClass}>
                      Have you been diagnosed with any of these conditions?
                    </label>
                    <p className="text-xs text-gf-green font-medium mb-2">Select all that apply (optional)</p>
                    <div className="space-y-2">
                      {[
                        'High Cholesterol',
                        'Hypertension / High Blood Pressure',
                        'Fatty Liver',
                        'Kidney condition',
                        'Hypothyroidism',
                        'None of these',
                      ].map((opt) => (
                        <CheckboxOption key={opt} name="comorbidities" value={opt} label={opt} />
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* ── STEP 4: Goals & Commitment ── */}
              {step === 4 && (
                <div className="space-y-5 animate-fadeIn">
                  <div>
                    <label className={labelClass}>What is your primary health goal right now?</label>
                    <p className={subTextClass}>
                      This helps our coaches design a care program focused on what matters most to you. (optional)
                    </p>
                    <div className="space-y-2">
                      {[
                        "I was recently diagnosed and don't know where to start",
                        'I want to reduce or eventually stop diabetes medication',
                        'I want to achieve Diabetes remission',
                        'I want to prevent progression (pre-diabetic or early stage)',
                        'I want structured guidance, not just generic diet advice',
                      ].map((opt) => (
                        <RadioOption key={opt} name="healthGoal" value={opt} label={opt} />
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className={labelClass}>
                      GoodFlip's Diabetes Care Program is a clinician-led, paid program starting at ₹385 per week. It
                      includes doctor consultations, lab tracking, CGM insights, and a personalised care program. Are you
                      open to investing in this? <span className="text-gf-red">*</span>
                    </label>
                    <div className="space-y-2 mt-2">
                      {[
                        "Yes, I'm interested",
                        "Maybe, I'd like to understand the program first",
                        'Not at this time',
                      ].map((opt) => (
                        <RadioOption key={opt} name="investmentReady" value={opt} label={opt} />
                      ))}
                    </div>
                  </div>

                  {/* Captcha */}
                  <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                    <label className={labelClass}>
                      Verify you're human <span className="text-gf-red">*</span>
                    </label>
                    <div className="flex items-center gap-3">
                      <span className="text-lg font-bold text-gf-dark bg-white px-4 py-2 rounded-lg border border-gray-200 select-none">
                        {captcha.question}
                      </span>
                      <input
                        type="number"
                        value={captchaInput}
                        onChange={(e) => {
                          setCaptchaInput(e.target.value);
                          setError('');
                        }}
                        placeholder="Answer"
                        className="w-24 px-4 py-3 rounded-xl border border-gray-200 focus:border-gf-green focus:ring-2 focus:ring-gf-green/20 outline-none transition-all text-sm"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Error */}
              {error && <p className="text-gf-red text-sm font-medium mt-4">{error}</p>}

              {/* Navigation buttons */}
              <div className="flex gap-3 mt-6">
                {step > 1 && (
                  <button
                    type="button"
                    onClick={handleBack}
                    className="flex items-center gap-1 px-6 py-3 rounded-full border-2 border-gray-200 text-gray-600 hover:border-gf-green hover:text-gf-green font-semibold text-sm transition-all"
                  >
                    <ChevronLeft size={16} />
                    Back
                  </button>
                )}

                {step < TOTAL_STEPS ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="flex-1 flex items-center justify-center gap-2 bg-gf-green hover:bg-gf-green-dark text-white py-3 rounded-full font-semibold text-sm transition-all hover:shadow-lg hover:shadow-gf-green/25"
                  >
                    Continue
                    <ChevronRight size={16} />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex-1 flex items-center justify-center gap-2 bg-gf-green hover:bg-gf-green-dark text-white py-3 rounded-full font-semibold text-sm transition-all hover:shadow-lg hover:shadow-gf-green/25 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <span className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full" />
                    ) : (
                      <>
                        <Send size={16} />
                        Talk to a Health Counsellor
                      </>
                    )}
                  </button>
                )}
              </div>

              <p className="text-xs text-gray-400 text-center mt-4">
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
