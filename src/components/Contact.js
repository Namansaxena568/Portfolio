import React from 'react';
import '../App.css';

export default function Contact() {
  return (
    <section
      id="contact"
      className="section fade-in"
      style={{
        background: 'linear-gradient(to bottom, #040b14, #0f1d32)',
        padding: '80px 20px',
        color: '#fff',
        textAlign: 'center',
      }}
    >
      <h2
        style={{
          fontSize: '2.5rem',
          color: '#149ddd',
          marginBottom: '30px',
        }}
      >
        Contact Me
      </h2>

      <form className="contact-form" style={{ maxWidth: '600px', margin: '0 auto' }}>
        <input
          type="text"
          placeholder="Your Name"
          required
          style={inputStyle}
        />
        <input
          type="email"
          placeholder="Your Email"
          required
          style={inputStyle}
        />
        <textarea
          placeholder="Your Message"
          rows="5"
          required
          style={{ ...inputStyle, resize: 'vertical' }}
        ></textarea>
        <button
          type="submit"
          className="btn"
          style={{
            marginTop: '15px',
            padding: '10px 30px',
            backgroundColor: '#149ddd',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            fontWeight: 'bold',
            cursor: 'pointer',
          }}
        >
          Send Message
        </button>
      </form>
    </section>
  );
}

const inputStyle = {
  width: '100%',
  padding: '12px 15px',
  marginBottom: '15px',
  border: '1px solid #ccc',
  borderRadius: '4px',
  fontSize: '1rem',
  backgroundColor: '#fff',
  color: '#000',
};
