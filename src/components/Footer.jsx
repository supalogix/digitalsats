import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__navigation">
        <a href="#home" className="footer__link">Home</a>
        <a href="#about" className="footer__link">About Us</a>
        <a href="#projects" className="footer__link">Projects</a>
        <a href="#blog" className="footer__link">Blog</a>
        <a href="#founders" className="footer__link">Founders</a>
        <a href="#contact" className="footer__link">Contact</a>
      </div>
      <div className="footer__social">
        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="footer__social-link">YouTube</a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="footer__social-link">LinkedIn</a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="footer__social-link">Twitter</a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="footer__social-link">Instagram</a>
      </div>
      <div className="footer__deep-links">
        <a href="#careers" className="footer__deep-link">Careers</a>
        <a href="#legal" className="footer__deep-link">Legal/Privacy</a>
        <a href="#faq" className="footer__deep-link">FAQ</a>
      </div>
      <p className="footer__copyright">
        © {new Date().getFullYear()} DigitalSats. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
