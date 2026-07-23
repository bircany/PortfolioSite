import React from 'react';
import { Link } from 'react-scroll';
import { FaArrowUp } from 'react-icons/fa';
import { useSitePreferences } from '../context/SitePreferences';

const Footer = () => {
  const { t } = useSitePreferences();
  return (
  <footer className="footer">
    <div className="container footer-content">
      <div className="wordmark footer-wordmark">
        <span className="wordmark-mark">BY</span>
        <span className="wordmark-copy">Bircan Yılmaz<small>Backend & AI Developer</small></span>
      </div>
      <p>© {new Date().getFullYear()} {t.footer.built} · <a href="/privacy.html">{t.footer.privacy}</a></p>
      <Link to="hero" smooth duration={500} className="back-to-top">{t.footer.top} <FaArrowUp /></Link>
    </div>
  </footer>
  );
};

export default Footer;
