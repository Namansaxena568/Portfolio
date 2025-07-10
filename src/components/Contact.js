import React, { useState } from 'react';
import '../App.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaLinkedin, FaWhatsapp } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill all the fields');
      return;
    }
    toast.success('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
  };

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

      <form onSubmit={handleSubmit} className="contact-form" style={{ maxWidth: '600px', margin: '0 auto' }}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          style={inputStyle}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          style={inputStyle}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
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

      {/* ✅ Icons with same background as section + hover highlight */}
      <div style={{ marginTop: '40px', display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
        <a
          href="https://linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
          style={iconStyle}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#149ddd'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#0f1d32'}
        >
          <FaLinkedin size={24} /> LinkedIn
        </a>
        <a
          href="https://wa.me/918171433987"
          target="_blank"
          rel="noopener noreferrer"
          style={iconStyle}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#149ddd'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#0f1d32'}
        >
          <FaWhatsapp size={24} /> WhatsApp
        </a>
      </div>

      <ToastContainer position="bottom-center" />
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

const iconStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  backgroundColor: '#0f1d32', // same as section bg
  color: '#fff',
  padding: '10px 20px',
  borderRadius: '5px',
  textDecoration: 'none',
  fontWeight: 'bold',
  transition: 'all 0.3s ease',
  cursor: 'pointer',
};
