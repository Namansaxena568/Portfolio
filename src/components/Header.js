import React, { useState } from 'react';
import '../App.css';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Sidebar */}
      <header className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
        <div className="profile">
          <img src="/naman.jpeg" alt="Profile" />
          <h1>Naman Saxena</h1>
        </div>
        <nav className="nav-menu">
          <a href="#hero" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#about" onClick={() => setIsOpen(false)}>About</a>
          <a href="#skills" onClick={() => setIsOpen(false)}>Skills</a>
          <a href="#resume" onClick={() => setIsOpen(false)}>Resume</a>
          <a href="#portfolio" onClick={() => setIsOpen(false)}>Portfolio</a>
          <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
        </nav>
        <div className="social-icons">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </header>

      {/* Hamburger Toggle Button (Only visible on mobile) */}
     <button
  className="hamburger"
  onClick={() => setIsOpen(!isOpen)}
  aria-label="Toggle Sidebar"
>
  {isOpen ? '✖' : '☰'}
</button>
    </>
  );
}
