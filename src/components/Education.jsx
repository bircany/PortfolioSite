import React from 'react';
import { FaGraduationCap, FaCertificate, FaLanguage} from 'react-icons/fa';

const Education = () => {
  const education = {
    university: "SAMSUN UNIVERSITY",
    location: "Samsun, Türkiye",
    degree: "BSc, Software Engineering",
    period: "2022 - Present (4th Year)",
    gpa: "3.60 / 4.00"
  };

  const certificates = [
    {
    }
  ];

  const languages = [
    {
      name: "English",
      level: "B2+"
    },
  ];

  return (
    <section id="education" className="education-section">
      <div className="container">
        <div className="section-header">
          <h2>Education & Certificates</h2>
          <div className="section-divider"></div>
        </div>
        
        <div className="education-cards">
          {/* Education Card */}
          <div className="education-card fade-in">
            <div className="card-header">
              <FaGraduationCap className="card-icon" />
              <h3>Education</h3>
            </div>
            <div className="education-details">
              <h4>{education.university}</h4>
              <p className="location">{education.location}</p>
              <p className="degree">{education.degree}</p>
              <p className="period">{education.period}</p>
              <p className="gpa"><strong><i>GPA: {education.gpa}</i></strong></p>
            </div>
          </div>
          
          {/* Certificates Card */}
          <div className="education-card fade-in">
            <div className="card-header">
              <FaCertificate className="card-icon" />
              <h3>Certificates</h3>
            </div>
            <ul className="certificates-list">
              {certificates.map((certificate, index) => (
                <li key={index} className="certificate-item">
                  <div>
                    <h4>{certificate.title}</h4>
                    <p>{certificate.organization} {certificate.date}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Foreign Languages Card */}
          <div className="education-card fade-in">
            <div className="card-header">
              <FaLanguage className="card-icon" />
              <h3>Foreign Languages</h3>
            </div>
            <ul className="languages-list">
              {languages.map((language, index) => (
                <li key={index} className="language-item">
                  <div className="language-info">
                    <h4>{language.name}</h4>
                    <div className="language-level-badge">{language.level}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education; 