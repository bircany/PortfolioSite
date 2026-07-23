import React from 'react';
import { FaArrowRight, FaCodeBranch, FaDatabase, FaLayerGroup, FaRobot } from 'react-icons/fa';
import { useSitePreferences } from '../context/SitePreferences';

const pillars = [
  { icon: <FaLayerGroup />, title: ['Backend Architecture', 'Backend Mimarisi'], text: ['Maintainable services shaped around clear business boundaries.', 'Net iş alanı sınırları etrafında şekillenen sürdürülebilir servisler.'] },
  { icon: <FaCodeBranch />, title: ['Distributed Systems', 'Dağıtık Sistemler'], text: ['Microservices, messaging and reliable integration patterns.', 'Mikroservisler, mesajlaşma ve güvenilir entegrasyon desenleri.'] },
  { icon: <FaDatabase />, title: ['Data & Observability', 'Veri & Gözlemlenebilirlik'], text: ['Databases, caching, search, logs and metrics that explain the system.', 'Sistemi açıklayan veritabanları, önbellek, arama, log ve metrikler.'] },
  { icon: <FaRobot />, title: ['Applied AI', 'Uygulamalı Yapay Zekâ'], text: ['LLMs and automation integrated into products where they create real value.', 'Gerçek değer ürettiği yerde ürünlere entegre edilen LLM ve otomasyonlar.'] },
];

const About = () => {
  const { language, t } = useSitePreferences();
  const copyIndex = language === 'tr' ? 1 : 0;
  return (
  <section id="about" className="section section-light">
    <div className="container">
      <div className="section-kicker"><span>01</span> {t.about.kicker}</div>
      <div className="about-grid">
        <div className="section-title-block">
          <h2>{t.about.titleBefore} <em>{t.about.titleEmphasis}</em> {t.about.titleAfter}</h2>
        </div>
        <div className="about-copy">
          <p className="lead">{t.about.lead}</p>
          <p>{t.about.body}</p>
          <a href="mailto:bircanyilmaz622@gmail.com" className="text-link">
            {t.about.cta} <FaArrowRight />
          </a>
        </div>
      </div>
      <div className="pillar-grid">
        {pillars.map((pillar, index) => (
          <article className="pillar-card" key={pillar.title[0]}>
            <div className="pillar-top"><span>0{index + 1}</span>{pillar.icon}</div>
            <h3>{pillar.title[copyIndex]}</h3>
            <p>{pillar.text[copyIndex]}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
  );
};

export default About;
