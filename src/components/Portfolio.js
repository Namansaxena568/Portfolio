import React from 'react';
import '../App.css';

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="section fade-in"
      style={{
        background: 'linear-gradient(to bottom, #040b14, #0f1d32)',
        color: '#fff',
      }}
    >
      <h2 style={{ fontSize: '2.5rem', color: '#149ddd', marginBottom: '30px', textAlign: 'center' }}>
        Portfolio
      </h2>
      <div className="portfolio-grid">

        {/* Project 1: Tour and Travels Website */}
        <div className="portfolio-item">
          <img src="https://via.placeholder.com/300x200" alt="Tour and Travels Website" />
          <div className="portfolio-info">
            <h3>Tour and Travels Website</h3>
            <p>
              A responsive travel booking platform using <strong>HTML, CSS, JavaScript, and Java</strong>.
              Allows users to browse, review, and book tours online—reducing time and improving experience.
            </p>
          </div>
        </div>

        {/* Project 2: All in One Calculator */}
        <div className="portfolio-item">
          <img src="https://via.placeholder.com/300x200" alt="All in One Calculator Website" />
          <div className="portfolio-info">
            <h3>All in One Calculator Website</h3>
            <p>
              A web application built with <strong>React.js</strong> providing multiple utilities like Age Calculator, BMI, GPA, Currency Converter, Tip Calculator, etc.  
              Designed for responsiveness and ease of use with modern UI/UX.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
