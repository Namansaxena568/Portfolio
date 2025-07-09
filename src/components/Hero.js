import React from 'react';
import '../App.css';

export default function Hero() {
  return (
    <section
      className="section fade-in"
      style={{
        background: 'linear-gradient(to bottom, #040b14, #0f1d32)',
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: '60px',
        paddingBottom: '60px',
      }}
    >
      <img
        src="/naman.jpeg"
        alt="Naman Saxena"
        style={{
          width: '150px',
          height: '150px',
          borderRadius: '50%',
          objectFit: 'cover',
          marginBottom: '20px',
          border: '4px solid #149ddd',
          boxShadow: '0 6px 20px rgba(20,157,221,0.4)',
        }}
      />
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Hi, I'm Naman</h1>
      <p style={{ fontSize: '1.2rem', textAlign: 'center', maxWidth: '700px', lineHeight: '1.6' }}>
        HTML | CSS | JavaScript | React.js | Java (Core & Advance) | JSP | Servlet | JDBC | Hibernate | Spring | Odoo Developer
      </p>
      <a href="#portfolio" className="btn" style={{ marginTop: '30px' }}>
        See My Work
      </a>
    </section>
  );
}
