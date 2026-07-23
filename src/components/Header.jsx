import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useSitePreferences } from '../context/SitePreferences';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { language, setLanguage, theme, setTheme, t } = useSitePreferences();
  const navItems = [
    [t.nav.about, 'about'],
    [t.nav.services, 'services'],
    [t.nav.experience, 'experience'],
    [t.nav.skills, 'skills'],
    [t.nav.lab, 'systems-lab'],
    [t.nav.writing, 'journal'],
    [t.nav.projects, 'projects'],
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <nav className="navbar container" aria-label="Main navigation">
        <Link to="hero" smooth duration={500} className="wordmark" onClick={() => setMenuOpen(false)}>
          <span className="wordmark-mark">BY</span>
          <span className="wordmark-copy">Bircan Yılmaz<small>Backend & AI</small></span>
        </Link>

        <button
          className={`navbar-toggler ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span /><span /><span />
        </button>

        <div className={`navbar-collapse ${menuOpen ? 'show' : ''}`}>
          <ul className="navbar-nav">
            {navItems.map(([name, target]) => (
              <li key={target}>
                <Link
                  activeClass="active"
                  to={target}
                  spy
                  smooth
                  offset={-76}
                  duration={500}
                  className="nav-link"
                  onClick={() => setMenuOpen(false)}
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="preference-controls">
            <button onClick={() => setLanguage(language === 'en' ? 'tr' : 'en')} aria-label={`${t.controls.language}: ${language === 'en' ? 'Türkçe' : 'English'}`}>
              {language === 'en' ? 'TR' : 'EN'}
            </button>
            <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} aria-label={`${t.controls.theme}: ${theme === 'dark' ? t.controls.light : t.controls.dark}`}>
              {theme === 'dark' ? <FaSun /> : <FaMoon />}
            </button>
          </div>
          <Link to="contact" smooth offset={-76} duration={500} className="nav-cta" onClick={() => setMenuOpen(false)}>
            {t.nav.contact}
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
