import React from 'react';
import './Navbar.css';
import { FaHome, FaServicestack, FaInfoCircle, FaEnvelope } from 'react-icons/fa';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Osumare</div>
      <ul className="navbar-links">
        <li><a href="#"><FaHome /> Home</a></li>
        <li><a href="#"><FaServicestack /> Services</a></li>
        <li><a href="#"><FaInfoCircle /> About</a></li>
        <li><a href="#"><FaEnvelope /> Contact</a></li>
      </ul>
    </nav>
  );
}

