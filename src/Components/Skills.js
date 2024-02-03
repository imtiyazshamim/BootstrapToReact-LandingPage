// Importing necessary React hooks and libraries
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Importing styles and assets
import '../assets/css/Skills.css';
import skillsImage from '../assets/img/skills.png'; // Adjust the import path as necessary

// SkillBar component - displays individual skill progress
function SkillBar({ skillName, skillLevel }) {
  return (
    <div className="progress">
      <span className="skill">{skillName} <i className="val">{skillLevel}%</i></span>
      <div className="progress-bar-wrap">
        <div className="progress-bar" role="progressbar" aria-valuenow={skillLevel} aria-valuemin="0" aria-valuemax="100" style={{width: `${skillLevel}%`}}></div>
      </div>
    </div>
  );
}

// Main Skills component
function Skills() {
  // Initialize AOS for animations
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false
    });
  }, []);

  // Skill data
  const skills = [
    { name: 'HTML', level: 100 },
    { name: 'CSS', level: 90 },
    { name: 'JavaScript', level: 75 },
    { name: 'Photoshop', level: 55 },
    // Add more skills here if needed
  ];

  // Rendering the Skills section
  return (
    <section id="skills" className="skills">
      <div className="container" data-aos="fade-up">
        <div className="row">
          <div className="col-lg-6 d-flex align-items-center" data-aos="fade-right" data-aos-delay="100">
            <img src={skillsImage} className="img-fluid" alt="Skills Representation" />
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0 content" data-aos="fade-left" data-aos-delay="100">
            <h3>Voluptatem dignissimos provident quasi corporis voluptates</h3>
            <p className="fst-italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="skills-content">
              {skills.map((skill, index) => (
                <SkillBar key={index} skillName={skill.name} skillLevel={skill.level} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
