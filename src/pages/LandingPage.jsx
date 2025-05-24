import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import FormModal from '../components/FormModal';
import SubmissionTable from '../components/SubmissionTable';
import '../styles/Responsive.css';

export default function LandingPage() {
  const [showForm, setShowForm] = useState(false);
  const [formDataList, setFormDataList] = useState([]);

  const handleFormSubmit = (data) => {
    const newData = { ...data, timestamp: new Date().toLocaleString() };
    setFormDataList((prev) => [...prev, newData]);
  };

  return (
    <div className="landing-page">
      <Navbar />
      <Hero />
      <About />
      <Testimonials />
      <CTA openForm={() => setShowForm(true)} />
      <Footer />
      {showForm && <FormModal onClose={() => setShowForm(false)} onSubmit={handleFormSubmit} />}
      <SubmissionTable data={formDataList} />
    </div>
  );
}

