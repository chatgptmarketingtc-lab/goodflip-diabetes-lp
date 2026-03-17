import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import WhoIsItFor from './components/WhoIsItFor';
import WhyChoose from './components/WhyChoose';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import LabTests from './components/LabTests';
import Devices from './components/Devices';
import Supplements from './components/Supplements';
import LeadForm from './components/LeadForm';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import StickyBar from './components/StickyBar';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Stats />
      <LeadForm />
      <WhoIsItFor />
      <WhyChoose />
      <Testimonials />
      <Pricing />
      <LabTests />
      <Devices />
      <Supplements />
      <FAQ />
      <Footer />
      <StickyBar />
    </div>
  );
}

export default App;
