import React, { useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Hero = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.fade-in');
      elements.forEach((element) => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementPosition < windowHeight * 0.8) 
        {
          element.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
    
    return () => { 
      window.removeEventListener('scroll', handleScroll); 
    };
   }, []);

  return (
    <section id="hero" className="hero-section">
      <div className="container">
        <div className="hero-content fade-in">
          <h1>Bircan Yılmaz</h1>
          <h2>Software Engineer</h2>
          <p>
            Driven by a passion for AI and backend development to build the technologies of tomorrow.
          </p>
          <div className="hero-buttons">
            <Link to="contact" smooth={true} offset={-70} duration={500}>
              <button className="btn btn-primary">Contact With</button>
            </Link>
            <Link to="projects" smooth={true} offset={-70} duration={500}>
              <button className="btn btn-outline">See My Projects</button>
            </Link>
          </div>
          <div className="social-icons">
            <a href="https://github.com/bircany" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/bircany/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="mailto:bircanyilmaz@622.gmail.com">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 