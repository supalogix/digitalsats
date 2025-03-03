import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when a link is clicked (mobile)
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header__logo">DigitalSats</div>
      <button 
        className="header__hamburger" 
        onClick={toggleMenu} 
        aria-label="Toggle menu"
      >
        <span className="header__hamburger-line"></span>
        <span className="header__hamburger-line"></span>
        <span className="header__hamburger-line"></span>
      </button>
      <nav className={`header__nav ${isMenuOpen ? "header__nav--open" : ""}`}>
        <ul className="header__nav-list">
          <li className="header__nav-item">
            <a href="#home" className="header__nav-link" onClick={handleLinkClick}>Home</a>
          </li>
          <li className="header__nav-item">
            <a href="#about" className="header__nav-link" onClick={handleLinkClick}>About Us</a>
          </li>
          <li className="header__nav-item">
            <a href="#projects" className="header__nav-link" onClick={handleLinkClick}>Projects</a>
          </li>
          <li className="header__nav-item">
            <a href="#blog" className="header__nav-link" onClick={handleLinkClick}>Blog</a>
          </li>
          <li className="header__nav-item">
            <a href="#founders" className="header__nav-link" onClick={handleLinkClick}>Founders</a>
          </li>
          <li className="header__nav-item">
            <a href="#contact" className="header__nav-link" onClick={handleLinkClick}>Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
