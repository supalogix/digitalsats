import React from 'react';

const HeroSection = () => {
  return (
    <div className="hero__container">
      <h1 className="hero__title">Pioneering the New Space Revolution</h1>
      <div className="hero__row">
        <p className="hero__subtitle">
          DigitalSats transforms breakthrough research into industry-leading space technology.
          Discover our gravitational anomaly detection and open source satellite simulation tools.
        </p>
        <div className="hero__video">
          <div className="video-container">
            {/* Replace with your actual YouTube embed code */}
            <iframe
              title="DigitalSats Intro"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
