import React, { useState } from 'react';
import '../styles/FormModal.css';

export default function FormModal({ onClose, onSubmit }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!form.name) errs.name = 'Name is required';
    if (!form.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Valid email is required';
    if (!form.phone || !/^\d{10}$/.test(form.phone)) errs.phone = 'Valid 10-digit phone number is required';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      onSubmit(form);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        onClose();
        setForm({ name: '', email: '', phone: '' });
      }, 2000);
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        {submitted ? (
          <div className="thank-you">
            <h3>Thank you for your interest!</h3>
            <p>We'll get back to you soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <h2>Get Started</h2>
            <label>Name<input type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} /></label>
            {errors.name && <span className="error">{errors.name}</span>}
            <label>Email<input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} /></label>
            {errors.email && <span className="error">{errors.email}</span>}
            <label>Phone<input type="text" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} /></label>
            {errors.phone && <span className="error">{errors.phone}</span>}
            <div className="modal-buttons">
              <button type="submit">Submit</button>
              <button type="button" onClick={onClose} className="cancel">Cancel</button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
