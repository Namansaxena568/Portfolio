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
          I am a dedicated and passionate <strong style={{ color: '#fff' }}>Full Stack Web Developer</strong> with a strong background in creating efficient, scalable, and user-friendly web applications. My expertise lies in both frontend and backend development, allowing me to take a holistic approach to solving complex problems.
          <br /><br />
          I have hands-on experience with modern technologies like <strong style={{ color: '#149ddd' }}>React.js</strong> for building dynamic UIs, and backend technologies such as <strong style={{ color: '#149ddd' }}>Java (Core & Advance)</strong>, <strong style={{ color: '#149ddd' }}>JSP</strong>, <strong style={{ color: '#149ddd' }}>Servlet</strong>, <strong style={{ color: '#149ddd' }}>Hibernate</strong>, and <strong style={{ color: '#149ddd' }}>Spring</strong> for building robust server-side logic. I’m also well-versed in ERP development as an <strong style={{ color: '#149ddd' }}>Odoo Developer</strong>, where I build customized solutions for businesses to streamline operations.
          <br /><br />
          I enjoy learning new technologies, collaborating on innovative projects, and continuously improving my skills. My mission is to develop impactful digital solutions that provide real value to users and businesses alike.
        </p>
      </div>
    </section>
  );
}
