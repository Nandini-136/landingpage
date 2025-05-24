import React from 'react';
import './About.css';
import aboutImg from '../assets/about.jpg';

export default function About() {
  return (
    <section className="about">
      <div className="about-background">
        <div className="about-image-wrapper">
          <img src={aboutImg} alt="About Osumare" className="about-image" />
        </div>
        <div className="about-overlay">
          <div className="about-content">
            <h2>About Us</h2>
            <p>
              Osumare is a performance-driven digital marketing agency that merges creativity with technology.
              We believe in empowering brands through targeted, data-driven strategies that resonate with their audience.
              Our team of experts continuously adapts to the changing digital landscape, ensuring that each campaign delivers results.
            </p>
            <p>
              From SEO and social media to content marketing and paid advertising, Osumare is your full-stack digital partner.
              Let us help you transform your brand presence and scale with confidence in a competitive marketplace.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
