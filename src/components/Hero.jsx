import React from 'react';
import './Hero.css';
import heroImg from '../assets/hero-image.jpg';

export default function Hero() {
  return (
    <section className="hero">
      <div
        className="hero-background"
        style={{ backgroundImage: `url(${heroImg})` }}
      />
      <div className="hero-content">
        <div className="hero-text">
          <h1>Welcome to <span className="highlight">Osumare</span></h1>
          <p>Your trusted partner in crafting digital success stories.</p>
        </div>
        <div className="hero-image">
          <img src={heroImg} alt="Digital marketing illustration" />
        </div>
      </div>
    </section>
  );
}
