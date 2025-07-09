// src/App.js
import React from 'react';
import './App.css';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Skills />
      <Resume />
      <Portfolio />
      <Contact />
      <Footer />
      <Header/>
    </div>
  );
}
export default App;