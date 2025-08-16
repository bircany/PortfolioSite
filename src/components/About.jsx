import { FaInstagram, FaLinkedin, FaMedium, FaStackOverflow, FaUserGraduate, FaProjectDiagram, FaRobot, FaEnvelope } from 'react-icons/fa';
import { SiSpringboot, SiDotnet, SiPython, SiDocker, SiApachekafka, SiMongodb, SiPostgresql, SiGit } from 'react-icons/si';
import { DiMsqlServer, DiMysql } from 'react-icons/di';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="section-header">
          <h2>👤 About Me</h2>
          <div className="section-divider"></div>
        </div>
        <div className="about-content-single" style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: '2.5rem', flexWrap: 'wrap' }}>
          {/* Left Side: Info & Cards */}
          <div style={{ flex: 2, minWidth: 320 }}>
            {/* Top Intro Card */}
            <div className="about-intro-card" style={{ background: 'var(--bg-card-light)', borderRadius: 14, boxShadow: '0 2px 12px rgba(0,0,0,0.07)', padding: '1.2rem 1.5rem', marginBottom: 24 }}>
              <h1 style={{ fontSize: '1.6rem', marginBottom: 4 }}>👋 Hi, I'm <strong>Bircan</strong></h1>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--primary-color)' }}>💻 Backend Developer & AI Enthusiast</h3>
            </div>
            {/* Extra Info Card (My Expertise üstü) */}
            <div className="about-extra-card" style={{ background: 'var(--bg-card-light)', borderRadius: 14, boxShadow: '0 2px 12px rgba(0,0,0,0.07)', padding: '1.2rem 1.5rem', marginBottom: 24, maxWidth: 700 }}>
              <p><FaProjectDiagram style={{ color: '#14b8a6', marginRight: 8 }}/> I especially enjoy developing smart and modern applications by integrating <b>AI and automation</b> into backend infrastructure.</p>
              <p><FaRobot style={{ color: '#0a66c2', marginRight: 8 }}/> I build reliable and scalable backend systems using <b>Java, Spring .NET</b> and <b>Python</b>.</p>
            </div>
            {/* Expertise Card */}
            <div className="about-expertise-card" style={{ background: 'var(--bg-card-light)', borderRadius: 14, boxShadow: '0 2px 12px rgba(0,0,0,0.07)', padding: '1.2rem 1.5rem', marginBottom: 24 }}>
              <h4 style={{ marginBottom: 12, fontWeight: 700 }}>🚀 My Expertise</h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.2rem' }}>
                <div style={{ minWidth: 180, flex: 1 }}><SiSpringboot /> Java & Spring Boot</div>
                <div style={{ minWidth: 180, flex: 1 }}><SiDotnet /> .NET Core, EF Core, LINQ</div>
                <div style={{ minWidth: 180, flex: 1 }}><SiPython /> Python, PyTorch, LangChain, Flask, Selenium</div>
                <div style={{ minWidth: 180, flex: 1 }}>🔗 REST API & Microservices</div>
                <div style={{ minWidth: 180, flex: 1 }}>🧩 Clean Code, Design Patterns</div>
                <div style={{ minWidth: 180, flex: 1 }}>🧠 Data Structures & Algorithms</div>
                <div style={{ minWidth: 180, flex: 1 }}><DiMsqlServer /> MsSQL / <SiMongodb /> MongoDB</div>
                <div style={{ minWidth: 180, flex: 1 }}><SiDocker /> Docker</div>
                <div style={{ minWidth: 180, flex: 1 }}><SiApachekafka /> Kafka</div>
                <div style={{ minWidth: 180, flex: 1 }}><SiGit /> Git & GitHub</div>
              </div>
            </div>
            {/* Education & Projects Card */}
            <div className="about-edu-card" style={{ background: 'var(--bg-card-light)', borderRadius: 14, boxShadow: '0 2px 12px rgba(0,0,0,0.07)', padding: '1.2rem 1.5rem', marginBottom: 24 }}>
              <h4 style={{ marginBottom: 12, fontWeight: 700 }}><FaUserGraduate style={{ color: '#0a66c2', marginRight: 8 }}/> Education & Projects</h4>
              <ul style={{ marginBottom: 0 }}>
                <li>🎓 Software Engineering student at Samsun University</li>
                <li>⚙️ Co-founder of <b>SoftArt Studios</b> – developing POS, automation, and restaurant software</li>
                <li>🤖 Actively working on ML & DL, LLM, and automation projects</li>
                <li>📱 Developing Android apps with Kotlin/Java</li>
                <li>🌟 Participating in AI-based projects that solve real-world problems</li>
              </ul>
            </div>
            {/* Contact Card */}
            <div className="about-contact-card" style={{ background: 'var(--bg-card-light)', borderRadius: 14, boxShadow: '0 2px 12px rgba(0,0,0,0.07)', padding: '1.2rem 1.5rem', marginBottom: 0 }}>
              <h4 style={{ marginBottom: 12, fontWeight: 700 }}>📬 Contact Me</h4>
              <div style={{ marginTop: '0.5rem', display: 'flex', gap: '1.2rem' }}>
                <a href="https://instagram.com/bircnnyilmz/" target="_blank" rel="noopener noreferrer">
                  <FaInstagram size={24} title="Instagram" />
                </a>
                <a href="https://linkedin.com/in/bircany" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin size={24} title="LinkedIn" />
                </a>
                <a href="https://medium.com/@bircany" target="_blank" rel="noopener noreferrer">
                  <FaMedium size={24} title="Medium" />
                </a>
                <a href="https://stackoverflow.com/users/18478547" target="_blank" rel="noopener noreferrer">
                  <FaStackOverflow size={24} title="Stack Overflow" />
                </a>
                <a href="mailto:bircanyilmaz@622.gmail.com" target="_blank" rel="noopener noreferrer">
                  <FaEnvelope size={24} title="Mail" />
                </a>
              </div>
            </div>
          </div>
          {/* Right Side: Avatar */}
          <div style={{ flex: 1, minWidth: '260px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div className="about-avatar">
              <FaRobot size={120} color="#fff" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
