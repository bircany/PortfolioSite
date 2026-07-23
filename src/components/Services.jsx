import React from 'react';
import { FaArrowRight, FaBullseye, FaCode, FaRobot, FaSearch } from 'react-icons/fa';
import { Link } from 'react-scroll';
import { useSitePreferences } from '../context/SitePreferences';

const Services = () => {
  const { t } = useSitePreferences();
  const items = [
    { icon: <FaCode />, title: t.services.backend, body: t.services.backendBody, tag: 'JAVA · .NET · API' },
    { icon: <FaRobot />, title: t.services.ai, body: t.services.aiBody, tag: 'LLM · RAG · N8N' },
    { icon: <FaSearch />, title: t.services.seo, body: t.services.seoBody, tag: 'SEO · SCHEMA · GEO' },
    { icon: <FaBullseye />, title: t.services.ads, body: t.services.adsBody, tag: 'ADS · ANALYTICS · CRO' },
  ];

  return (
    <section id="services" className="services-strip">
      <div className="container">
        <div className="services-heading">
          <div><span>{t.services.kicker}</span><h2>{t.services.titleBefore} <em>{t.services.titleEmphasis}</em></h2></div>
          <div><p>{t.services.body}</p><Link to="contact" smooth offset={-76} duration={500}>{t.services.cta} <FaArrowRight /></Link></div>
        </div>
        <div className="service-grid">
          {items.map((item) => <article key={item.title}><div>{item.icon}<span>{item.tag}</span></div><h3>{item.title}</h3><p>{item.body}</p></article>)}
        </div>
      </div>
    </section>
  );
};

export default Services;
