import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import LogoLight from '../assets/img/logo.png';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const navItems = [
    { name: 'Homepage', to: 'hero', offset: -70 },
    { name: 'About Me', to: 'about', offset: -70 },
    { name: 'Skills', to: 'skills', offset: -70 },
    { name: 'Articles', to: 'articles', offset: -70 },
    { name: 'Projects', to: 'projects', offset: -70 },
    { name: 'Education', to: 'education', offset: -70 },
    { name: 'Contact', to: 'contact', offset: -70 },
  ];

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <nav className="navbar">
        <div className="container">
          <a href="#hero" className="navbar-brand">
            <img 
              src={LogoLight}
              alt="Bircan Yılmaz Logo"
              className="logo-img"
            />
          </a>
          
          <div className="navbar-right">
            <button 
              className={`navbar-toggler ${menuOpen ? 'active' : ''}`} 
              onClick={toggleMenu}
              aria-label={menuOpen ? 'Menüyü Kapat' : 'Menüyü Aç'}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
          
          <div className={`navbar-collapse ${menuOpen ? 'show' : ''}`}>
            <ul className="navbar-nav">
              {navItems.map((item, index) => (
                <li className="nav-item" key={index}>
                  <Link
                    activeClass="active"
                    to={item.to}
                    spy={true}
                    smooth={true}
                    offset={item.offset}
                    duration={500}
                    className="nav-link"
                    onClick={closeMenu}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}

            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header; 