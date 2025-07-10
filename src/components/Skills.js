import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaReact, FaJava, FaGitAlt, FaTools } from 'react-icons/fa';
import { SiJavascript, SiSpring, SiOdoo } from 'react-icons/si';
import '../App.css';

export default function Skills() {
  const skills = [
    {
      category: 'Frontend Development',
      list: [
        { icon: <FaHtml5 />, name: 'HTML/CSS', level: '90%' },
        { icon: <SiJavascript />, name: 'JavaScript', level: '85%' },
        { icon: <FaReact />, name: 'React.js', level: '80%' },
      ],
    },
    {
      category: 'Backend Development',
      list: [
        { icon: <FaJava />, name: 'Java (Core + Advance)', level: '85%' },
        { icon: <SiSpring />, name: 'Spring | Hibernate | JDBC', level: '75%' },
        { icon: <SiOdoo />, name: 'Odoo (Python + XML + QWeb)', level: '70%' },
      ],
    },
    {
      category: 'Tools & Version Control',
      list: [
        { icon: <FaGitAlt />, name: 'Git & GitHub', level: '80%' },
        { icon: <FaTools />, name: 'VS Code / Eclipse / NetBeans', level: '85%' },
      ],
    },
  ];

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

      <div style={{ maxWidth: '700px', margin: '0 auto' }}>
        {skills.map((group, index) => (
          <div key={index} style={{ marginBottom: '40px' }}>
            <h3 style={{ color: '#ccc', marginBottom: '15px' }}>{group.category}</h3>
            {group.list.map((skill, i) => (
              <div className="skill-box" key={i} style={{ marginBottom: '20px' }}>
                <label style={{ color: '#fff', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  {skill.icon} {skill.name}
                </label>
                <div className="progress" style={{ height: '8px', background: '#1e2a38', borderRadius: '4px' }}>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: skill.level }}
                    transition={{ duration: 1 }}
                    className="bar"
                    style={{
                      background: '#149ddd',
                      height: '100%',
                      borderRadius: '4px',
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
