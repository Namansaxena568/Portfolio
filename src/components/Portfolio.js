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
          <img src="/tours-travels.jpeg" alt="Tour and Travels Website" />
          <div className="portfolio-info">
            <h3>Tour and Travels Website</h3>
            <p>
              A dynamic and user-friendly travel booking platform developed using <strong>HTML, CSS, JavaScript, and Core Java</strong>. 
              This project enables users to explore a wide range of destinations, view images, read detailed itineraries, and make online tour bookings with ease. 
              It also features an admin panel for managing destinations, packages, and bookings. The design is fully responsive and optimized for all devices, providing a seamless experience for users on mobile, tablet, and desktop.
            </p>
          </div>
        </div>

        {/* Project 2: All in One Calculator */}
        <div className="portfolio-item">
          <img src="/all-in-one-calculator.png" alt="All in One Calculator Website" />
          <div className="portfolio-info">
            <h3>All in One Calculator Website</h3>
            <p>
              A modern web application built with <strong>React.js</strong> that provides a comprehensive suite of calculation tools in one place. 
              It includes utilities such as Age Calculator, BMI Calculator, GPA Calculator, Currency Converter, Tip Calculator, Loan Calculator, and many more. 
              The app features a clean, intuitive interface with responsive design and real-time calculations. It's ideal for students, professionals, and anyone looking for quick, reliable conversions or calculations directly in the browser.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
