import React from 'react';
import './Testimonials.css';
import client1 from '../assets/client1.jpg';
import client2 from '../assets/client2.jpg';

export default function Testimonials() {
  return (
    <section className="testimonials">
      <h2>What Our Clients Say</h2>
      <div className="testimonial-cards">
        <div className="testimonial-card">
          <img src={client1} alt="Client A" />
          <p>"Osumare helped us scale our business through digital marketing like never before!"</p>
          <span>- Client A</span>
        </div>
        <div className="testimonial-card">
          <img src={client2} alt="Client B" />
          <p>"Incredible service and amazing results. Highly recommended!"</p>
          <span>- Client B</span>
        </div>
      </div>
    </section>
  );
}
