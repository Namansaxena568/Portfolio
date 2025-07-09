import React from "react";
import "../App.css";

export default function Projects() {
  return (
    <section
      className="section fade-in"
      id="projects"
      style={{
        background: 'linear-gradient(to bottom, #0f1d32, #040b14)',
        padding: '80px 20px',
        color: '#fff',
        textAlign: 'center',
      }}
    >
      <h2
        style={{
          fontSize: '2.5rem',
          color: '#149ddd',
          marginBottom: '40px',
        }}
      >
        Projects
      </h2>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '30px',
          maxWidth: '1000px',
          margin: '0 auto',
        }}
      >
        <div
          style={{
            background: '#0d1b2a',
            borderRadius: '8px',
            padding: '25px',
            boxShadow: '0 4px 16px rgba(0,0,0,0.3)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.boxShadow = '0 8px 24px rgba(20, 157, 221, 0.3)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.3)';
          }}
        >
          <h3 style={{ color: '#149ddd' }}>Sample Project</h3>
          <p style={{ color: '#ccc', marginTop: '10px' }}>
            This is a placeholder for your amazing project! You can describe the tools, goals, or features here.
          </p>
        </div>
      </div>
    </section>
  );
}
