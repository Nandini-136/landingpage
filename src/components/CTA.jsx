import React from 'react';
import './CTA.css';

export default function CTA({ openForm }) {
  return (
    <section className="cta">
      <div className="cta-content">
        <h2>Ready to grow your business?</h2>
        <p>Let Osumare help you get started with powerful marketing solutions tailored to your goals.</p>
        <button onClick={openForm}>Start Organizing</button>
      </div>
    </section>
  );
}