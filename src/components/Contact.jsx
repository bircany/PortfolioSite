import React, { useState } from 'react';
import {
  FaArrowRight,
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaMediumM,
  FaSpotify,
  FaStackOverflow,
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { useSitePreferences } from '../context/SitePreferences';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const { t } = useSitePreferences();

  const handleSubmit = (event) => {
    event.preventDefault();
    const body = `Hi Bircan,\n\n${formData.message}\n\nFrom: ${formData.name}\nEmail: ${formData.email}`;
    window.location.href = `mailto:bircanyilmaz622@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="section-kicker section-kicker-dark"><span>08</span> {t.contact.kicker}</div>
        <div className="contact-grid">
          <div className="contact-copy">
            <h2>{t.contact.title}</h2>
            <p>{t.contact.body}</p>
            <div className="contact-lines">
              <a href="mailto:bircanyilmaz622@gmail.com"><FaEnvelope /><span>{t.contact.email}<strong>bircanyilmaz622@gmail.com</strong></span></a>
              <div><FaMapMarkerAlt /><span>{t.contact.location}<strong>Samsun · İstanbul, Türkiye</strong></span></div>
            </div>
            <div className="contact-social">
              <a href="https://github.com/bircany" target="_blank" rel="noreferrer"><FaGithub /> GitHub</a>
              <a href="https://www.linkedin.com/in/bircany/" target="_blank" rel="noreferrer"><FaLinkedinIn /> LinkedIn</a>
              <a href="https://www.instagram.com/bircnnyilmz/" target="_blank" rel="noreferrer"><FaInstagram /> Instagram</a>
              <a href="https://x.com/devbym3" target="_blank" rel="noreferrer"><FaXTwitter /> X</a>
              <a href="https://stackoverflow.com/users/18478547/bircany" target="_blank" rel="noreferrer"><FaStackOverflow /> Stack Overflow</a>
              <a href="https://medium.com/@bircany" target="_blank" rel="noreferrer"><FaMediumM /> Medium</a>
              <a href="https://open.spotify.com/user/1sn44mgdy7rbgijeize5lpxti?si=4865b83f7181419f" target="_blank" rel="noreferrer"><FaSpotify /> Spotify</a>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <label>{t.contact.name}<input name="name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder={t.contact.namePlaceholder} required /></label>
              <label>{t.contact.email}<input type="email" name="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder={t.contact.emailPlaceholder} required /></label>
            </div>
            <label>{t.contact.subject}<input name="subject" value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })} placeholder={t.contact.subjectPlaceholder} required /></label>
            <label>{t.contact.message}<textarea name="message" rows="5" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder={t.contact.messagePlaceholder} required /></label>
            <button type="submit" className="button button-primary">{t.contact.send} <FaArrowRight /></button>
            <small>{t.contact.privacy}</small>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
