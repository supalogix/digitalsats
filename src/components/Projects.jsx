import React from 'react';

const Projects = () => {
  return (
    <div className="projects__container">
      <h2 className="projects__title">Projects &amp; Partnerships</h2>
      <div className="projects__item">
        <h3 className="projects__item-title">CubeSat &amp; Simulation Tools</h3>
        <p className="projects__item-text">
          Explore our open source simulation software, evolved from NASA GMAT, tailored for professionals, hobbyists, and students.
        </p>
      </div>
      <div className="projects__item">
        <h3 className="projects__item-title">Gravitational Anomaly Detection</h3>
        <p className="projects__item-text">
          Dive into our pioneering research and development of technology aimed at discovering gravitational anomalies.
        </p>
      </div>
      <div className="projects__cta">
        <a href="#contact" className="projects__cta-link">Learn More &amp; Partner With Us</a>
      </div>
    </div>
  );
};

export default Projects;
