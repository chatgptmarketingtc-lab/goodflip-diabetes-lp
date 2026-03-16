import React, { useEffect, useRef, useState } from 'react';

interface StatItemProps {
  number: string;
  suffix: string;
  label: string;
  delay: number;
}

const StatItem: React.FC<StatItemProps> = ({ number, suffix, label, delay }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const target = parseFloat(number);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    const timer = setTimeout(() => {
      const duration = 1500;
      const steps = 40;
      const increment = target / steps;
      let current = 0;
      const interval = setInterval(() => {
        current += increment;
        if (current >= target) {
          setCount(target);
          clearInterval(interval);
        } else {
          setCount(parseFloat(current.toFixed(2)));
        }
      }, duration / steps);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timer);
  }, [isVisible, target, delay]);

  return (
    <div ref={ref} className="text-center p-4 md:p-6">
      <p className="font-serif text-4xl md:text-5xl lg:text-[56px] font-black text-gf-green leading-tight mb-3">
        {isVisible ? count.toFixed(number.includes('.') ? 2 : 0) : '0'}
        <span className="text-2xl md:text-3xl">{suffix}</span>
      </p>
      <p className="text-sm md:text-base text-gray-600 leading-snug">{label}</p>
    </div>
  );
};

const Stats: React.FC = () => {
  return (
    <section className="py-8 md:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-gray-500 mb-6">
          As per a study published in <span className="font-semibold">Frontiers</span>, GoodFlip's Diabetes Care Program delivers:
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          <StatItem number="0.99" suffix=" pts" label="Average reduction in HbA1c" delay={0} />
          <StatItem number="54.46" suffix=" mg/dL" label="Reduction in Fasting Blood Sugar" delay={100} />
          <StatItem number="124.62" suffix=" mg/dL" label="Decrease in Postprandial Blood Sugar" delay={200} />
          <StatItem number="2.84" suffix=" kg" label="Average reduction in Body Weight" delay={300} />
        </div>
      </div>
    </section>
  );
};

export default Stats;
