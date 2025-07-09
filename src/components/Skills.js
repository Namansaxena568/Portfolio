import React from 'react';
import '../App.css';

export default function Skills() {
  return (
    <section
      id="skills"
      className="section fade-in"
      style={{
        background: 'linear-gradient(to bottom, #040b14, #0f1d32)',
        padding: '80px 20px',
        color: '#fff',
      }}
    >
      <h2
        style={{
          fontSize: '2.5rem',
          color: '#149ddd',
          marginBottom: '30px',
          textAlign: 'center',
        }}
      >
        Skills
      </h2>

      <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'left' }}>
        <div className="skill-box">
          <label style={{ color: '#fff' }}>HTML/CSS</label>
          <div className="progress"><div className="bar" style={{ width: '90%' }}></div></div>
        </div>
        <div className="skill-box">
          <label style={{ color: '#fff' }}>JavaScript</label>
          <div className="progress"><div className="bar" style={{ width: '85%' }}></div></div>
        </div>
        <div className="skill-box">
          <label style={{ color: '#fff' }}>React.js</label>
          <div className="progress"><div className="bar" style={{ width: '80%' }}></div></div>
        </div>
        <div className="skill-box">
          <label style={{ color: '#fff' }}>Java (Core + Advance)</label>
          <div className="progress"><div className="bar" style={{ width: '85%' }}></div></div>
        </div>
        <div className="skill-box">
          <label style={{ color: '#fff' }}>Spring | Hibernate | JDBC</label>
          <div className="progress"><div className="bar" style={{ width: '75%' }}></div></div>
        </div>
        <div className="skill-box">
          <label style={{ color: '#fff' }}>Odoo (Python + XML + QWeb)</label>
          <div className="progress"><div className="bar" style={{ width: '70%' }}></div></div>
        </div>
      </div>
    </section>
  );
}
