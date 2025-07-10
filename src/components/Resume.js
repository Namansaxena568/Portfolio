import React from 'react';
import '../App.css';

export default function Resume() {
  return (
    <section
  id="resume"
  className="section fade-in"
  style={{
    background: 'linear-gradient(to bottom, #040b14, #0f1d32)',
    color: '#fff'
  }}
>
      <h2
        style={{
          fontSize: '2.5rem',
          color: '#149ddd',
          marginBottom: '40px',
          textAlign: 'center',
        }}
      >
        Resume
      </h2>
      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-icon">🎯</div>
          <div className="timeline-content">
            <h3>Career Objective</h3>
            <p>
              I aim to become a software professional where I can work as a team member and contribute my skills to the organization’s growth while enhancing my technical knowledge and experience.
            </p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-icon">🎓</div>
          <div className="timeline-content">
            <h3>Bachelor of Technology (CSE)</h3>
            <span className="date">2019 - 2023</span>
            <p>AKTU University, Lucknow, Uttar Pradesh</p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-icon">🏫</div>
          <div className="timeline-content">
            <h3>Intermediate</h3>
            <span className="date">2018 - 2019</span>
            <p>Uttar Pradesh Board</p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-icon">🏫</div>
          <div className="timeline-content">
            <h3>High School</h3>
            <span className="date">2016 - 2017</span>
            <p>Uttar Pradesh Board</p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-icon">📚</div>
          <div className="timeline-content">
            <h3>Learning & Training</h3>
            <p>Currently pursuing Full Stack Java Developer training from DUCAT, Noida.</p>
            <p>Joined various programming seminars and workshops in college.</p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-icon">💼</div>
          <div className="timeline-content">
            <h3>Intern - Odoo Developer</h3>
            <span className="date">2023 - 2024</span>
            <p>Worked on custom Odoo modules, QWeb PDF reports, XML views, and API integration.</p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-icon">🚀</div>
          <div className="timeline-content">
            <h3>Frontend Developer</h3>
            <span className="date">2024 - Present</span>
            <p>Building responsive React apps, reusable components, and integrating RESTful APIs.</p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-icon">🛠️</div>
          <div className="timeline-content">
            <h3>Tech Stack</h3>
            <p><strong>Languages:</strong> Java (Core & Advance)</p>
            <p><strong>Database:</strong> MySQL</p>
            <p><strong>Web:</strong> HTML, CSS, JavaScript</p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-icon">📁</div>
          <div className="timeline-content">
            <h3>Academic Project - Tour and Travels Website</h3>
            <p>
              Developed a web-based platform using HTML, CSS, JavaScript, and Java for travel reviews and online booking. Enhanced customer convenience and reduced offline workload.
            </p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-icon">💪</div>
          <div className="timeline-content">
            <h3>Strengths</h3>
            <ul>
              <li>Quick Learner</li>
              <li>Team Player</li>
              <li>Good Communication Skills</li>
            </ul>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-icon">📌</div>
          <div className="timeline-content">
            <h3>Personal Details</h3>
            <p><strong>Name:</strong> Naman Saxena</p>
            <p><strong>Father's Name:</strong> Mr. Deepak Saxena</p>
            <p><strong>Gender:</strong> Male</p>
            <p><strong>Date of Birth:</strong> 22-10-2002</p>
            <p><strong>Address:</strong> Bahadurgarh, Hapur</p>
            <p><strong>Phone:</strong> +91 8171433987</p>
          </div>
        </div>
      </div>
    </section>
  );
}