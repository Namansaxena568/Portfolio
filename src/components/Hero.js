import React from 'react';
import { motion } from 'framer-motion';
import '../App.css';

export default function Hero() {
  return (
    <motion.section
      id="hero"
      className="section fade-in"
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
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
      <motion.img
        src="/naman.jpeg"
        alt="Naman Saxena"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1, rotate: 2 }}
        transition={{ duration: 0.6 }}
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

      <motion.h1
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        whileHover={{ scale: 1.05, color: '#149ddd' }}
        transition={{ delay: 0.2 }}
        style={{ fontSize: '3rem', marginBottom: '1rem', cursor: 'default' }}
      >
        Hi, I'm Naman
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        whileHover={{ scale: 1.02 }}
        style={{
          fontSize: '1.2rem',
          textAlign: 'center',
          maxWidth: '700px',
          lineHeight: '1.6',
          cursor: 'default',
        }}
      >
        HTML | CSS | JavaScript | React.js | Java (Core & Advance) | JSP | Servlet | JDBC | Hibernate | Spring | Odoo Developer
      </motion.p>

      <motion.a
        href="#portfolio"
        className="btn"
        whileHover={{
          scale: 1.1,
          backgroundColor: '#fff',
          color: '#149ddd',
          boxShadow: '0 0 12px #149ddd',
        }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.3 }}
        style={{
          marginTop: '30px',
          padding: '12px 30px',
          borderRadius: '30px',
          backgroundColor: '#149ddd',
          color: '#fff',
          textDecoration: 'none',
          fontWeight: 600,
          transition: 'all 0.3s ease',
        }}
      >
        See My Work
      </motion.a>
    </motion.section>
  );
}
