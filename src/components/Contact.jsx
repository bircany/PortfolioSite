import React, { useState } from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      console.log('Form data:', formData);
      setFormSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      setTimeout(() => {
        setFormSubmitted(false);
      }, 5000);
    }, 500);
  };

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt />,
      title: 'Location',
      content: 'Samsun, Türkiye'
    },
    {
      icon: <FaPhone />,
      title: 'Phone',
    },
    {
      icon: <FaEnvelope />,
      title: 'Email',
      content: 'bircanyilmaz622@gmail.com',
      link: 'mailto:bircanyilmaz622@gmail.com'
    }
  ];

  const socialLinks = [
    {
      icon: <FaGithub />,
      name: 'GitHub',
      link: 'https://github.com/bircany'
    },
    {
      icon: <FaLinkedin />,
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/in/bircany'
    },
    {
      icon: <FaInstagram />,
      name: 'Instagram',
      link: 'https://www.instagram.com/bircnnyilmz/'
    }
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-header">
          <h2>Contact</h2>
          <div className="section-divider"></div>
        </div>
        
        <div className="contact-container">
          <div className="contact-info-container">
            <div className="contact-info">
              <h3>Information</h3>
              
              {contactInfo.map((info, index) => (
                <div className="contact-info-item" key={index}>
                  <div className="contact-info-icon">
                    {info.icon}
                  </div>
                  <div className="contact-info-content">
                    <h5>{info.title}</h5>
                    {info.link ? (
                      <a href={info.link}>{info.content}</a>
                    ) : (
                      <p>{info.content}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="social-links">
              <h3>Social Media</h3>
              <div className="social-icons-large">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index} 
                    href={social.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    <span className="social-icon">{social.icon}</span>
                    <span className="social-name">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div className="contact-form-container">
            <h3>Send Me a Message</h3>
            
            {formSubmitted && (
              <div className="success-message">
                Your message has been sent successfully! I will get back to you as soon as possible.
              </div>
            )}
            
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input 
                  type="text" 
                  name="name" 
                  placeholder="Your Name" 
                  required 
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              
              <div className="form-group">
                <input 
                  type="email" 
                  name="email" 
                  placeholder="Your Email Address" 
                  required 
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              
              <div className="form-group">
                <input 
                  type="text" 
                  name="subject" 
                  placeholder="Subject" 
                  required 
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>
              
              <div className="form-group">
                <textarea 
                  name="message" 
                  rows="5" 
                  placeholder="Your Message" 
                  required 
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 