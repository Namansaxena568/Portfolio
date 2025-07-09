import React from 'react';
import '../App.css';

export default function About() {
  return (
    <section
      id="about"
      className="section fade-in"
      style={{
        background: 'linear-gradient(to bottom, #040b14, #0f1d32)',
        padding: '80px 20px',
        color: '#fff',
      }}
    >
      <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.5rem', color: '#149ddd', marginBottom: '20px' }}>
          About Me
        </h2>
        <p
          style={{
            fontSize: '1.1rem',
            lineHeight: '1.8',
            color: '#ccc',
            fontWeight: 300,
          }}
        >
          I am a passionate <strong style={{ color: '#fff' }}>Full Stack Web Developer</strong> with expertise in building dynamic, responsive, and visually appealing web applications.
          I enjoy working with modern technologies like <strong style={{ color: '#149ddd' }}>React.js</strong>, <strong style={{ color: '#149ddd' }}>Java</strong>, and <strong style={{ color: '#149ddd' }}>Odoo</strong>.
          My goal is to deliver high-quality software that solves real-world problems and makes a positive impact.
        </p>
      </div>
    </section>
  );
}
