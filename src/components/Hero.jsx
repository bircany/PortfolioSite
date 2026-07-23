import React, { useRef } from 'react';
import { Link } from 'react-scroll';
import { FaArrowRight, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { useSitePreferences } from '../context/SitePreferences';

const Hero = () => {
  const visualRef = useRef(null);
  const { t } = useSitePreferences();

  const handlePointerMove = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    visualRef.current?.style.setProperty('--parallax-x', `${x * 28}px`);
    visualRef.current?.style.setProperty('--parallax-y', `${y * 22}px`);
    visualRef.current?.style.setProperty('--tilt-x', `${y * -4}deg`);
    visualRef.current?.style.setProperty('--tilt-y', `${x * 5}deg`);
  };

  return (
  <section id="hero" className="hero-section">
    <div className="hero-grid container" onPointerMove={handlePointerMove} onPointerLeave={() => visualRef.current?.removeAttribute('style')}>
      <div className="hero-copy">
        <div className="availability"><span /> {t.hero.availability}</div>
        <p className="eyebrow">{t.hero.role}</p>
        <h1>{t.hero.titleBefore} <em>{t.hero.titleEmphasis}</em> {t.hero.titleAfter}</h1>
        <p className="hero-lead">{t.hero.lead}</p>
        <div className="hero-actions">
          <Link to="projects" smooth offset={-76} duration={500} className="button button-primary">
            {t.hero.work} <FaArrowRight />
          </Link>
          <Link to="contact" smooth offset={-76} duration={500} className="button button-ghost">
            {t.hero.contact}
          </Link>
        </div>
        <div className="hero-social">
          <a href="https://github.com/bircany" target="_blank" rel="noreferrer"><FaGithub /> GitHub</a>
          <a href="https://www.linkedin.com/in/bircany/" target="_blank" rel="noreferrer"><FaLinkedinIn /> LinkedIn</a>
        </div>
      </div>

      <div className="hero-visual" aria-label="Bircan Yılmaz profile" ref={visualRef}>
        <div className="parallax-orbit orbit-one" />
        <div className="parallax-orbit orbit-two" />
        <div className="portrait-frame">
          <div className="portrait-index">01 / ENGINEER</div>
          <img src="/bircan-yilmaz.png" alt="Bircan Yılmaz" />
          <div className="portrait-caption">
            <strong>Bircan Yılmaz</strong>
            <span>{t.hero.location}</span>
          </div>
        </div>
        <div className="system-card">
          <div className="system-head"><span /><span /><span /><small>system.profile</small></div>
          <code>
            <span className="code-muted">{'{'}</span><br />
            &nbsp;&nbsp;role: <b>"backend_developer"</b>,<br />
            &nbsp;&nbsp;stack: <b>["Java", ".NET", "AI"]</b>,<br />
            &nbsp;&nbsp;status: <i>"building"</i><br />
            <span className="code-muted">{'}'}</span>
          </code>
        </div>
      </div>
    </div>
    <div className="hero-marquee" aria-hidden="true">
      <div>JAVA · SPRING BOOT · .NET CORE · MICROSERVICES · POSTGRESQL · DOCKER · AI SYSTEMS · CI/CD ·</div>
    </div>
  </section>
  );
};

export default Hero;
