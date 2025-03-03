import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import About from './components/About';
import Projects from './components/Projects';
import Founders from './components/Founders';
import BlogList from './components/BlogList';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <section id="home" className="hero">
          <HeroSection />
        </section>
        <section id="about" className="about">
          <About />
        </section>
        <section id="projects" className="projects">
          <Projects />
        </section>
        <section id="blog" className="blog">
          <BlogList />
        </section>
        <section id="founders" className="founders">
          <Founders />
        </section>
        <section id="contact" className="contact">
          <div className="contact__container">
            <h2 className="contact__title">Contact Us</h2>
            <p className="contact__text">
              For partnership inquiries, please email us at 
              <a href="mailto:info@digitalsats.com"> info@digitalsats.com</a>.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
