import React from 'react';
import '../App.css';

export default function Header() {
  return (
    <header className="sidebar">
      <div className="profile">
        <img src="/naman.jpeg" alt="Profile" />
        <h1>Naman Saxena</h1>
      </div>
      <nav className="nav-menu">
        <a href="#hero">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#resume">Resume</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contact">Contact</a>
      </nav>
      <div className="social-icons">
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </header>
  );
}
