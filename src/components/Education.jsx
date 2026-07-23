import React from 'react';
import { FaGraduationCap, FaLanguage, FaUsers } from 'react-icons/fa';
import { useSitePreferences } from '../context/SitePreferences';

const Education = () => {
  const { language, t } = useSitePreferences();
  const tr = language === 'tr';
  return (
  <section id="education" className="section education-section">
    <div className="container">
      <div className="section-kicker"><span>07</span> {t.education.kicker}</div>
      <div className="education-layout">
        <div className="education-intro">
          <p className="eyebrow">SAMSUN UNIVERSITY</p>
          <h2>{t.education.degree}</h2>
          <p>2022 — 2026 · Samsun, Türkiye</p>
          <div className="gpa-badge"><span>GPA</span><strong>3.53</strong><small>/ 4.00 · {t.education.honor}</small></div>
        </div>
        <div className="education-details">
          <article>
            <FaGraduationCap />
            <div><span>{t.education.thesis}</span><h3>{tr ? 'Revita — Yapay zekâ destekli sağlık asistanı' : 'Revita — AI-driven healthcare assistant'}</h3><p>{tr ? 'NLP tabanlı yönlendirme, ilaç takibi ve kişiselleştirilmiş sağlık desteği.' : 'NLP-based guidance, medication tracking and personalized health support.'}</p></div>
          </article>
          <article>
            <FaUsers />
            <div><span>{t.education.community}</span><h3>Google Developer Groups</h3><p>{tr ? 'GDG Samsun University kurucu üyesi.' : 'Founder member of GDG Samsun University.'}</p></div>
          </article>
          <article>
            <FaLanguage />
            <div><span>{t.education.languages}</span><h3>{tr ? 'Türkçe · İngilizce B2' : 'Turkish · English B2'}</h3><p>{tr ? 'Ana dil Türkçe ve profesyonel çalışma düzeyinde İngilizce.' : 'Native Turkish and professional working proficiency in English.'}</p></div>
          </article>
        </div>
      </div>
    </div>
  </section>
  );
};

export default Education;
