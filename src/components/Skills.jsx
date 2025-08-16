import React, { useState, useRef } from 'react';
import { FaChevronLeft, FaChevronRight, FaCheckCircle, FaUserFriends, FaRobot, FaAndroid, FaTools, FaJava, FaDotCircle, FaPython, FaMobileAlt, FaBuilding, FaGlobe } from 'react-icons/fa';

const Skills = () => {
  const skillCategories = [
    {
      title: "Soft Skills",
      icon: <FaUserFriends style={{ color: '#0a66c2', marginRight: 8, fontSize: 28 }} />,
      items: [
        {
          type: 'main',
          icon: <FaJava color="#0a66c2" style={{ fontSize: 24 }} />,
          text: 'I actively develop backend applications using both Java & Spring Boot and .NET, with experience in secure, testable, and scalable API architectures.'
        },
        {
          type: 'main',
          icon: <FaDotCircle color="#0a66c2" style={{ fontSize: 24 }} />,
          text: 'I am also proficient in the .NET ecosystem, including technologies like Entity Framework, LINQ, and Minimal APIs for modern RESTful services.'
        },
        {
          type: 'main',
          icon: <FaPython color="#0a66c2" style={{ fontSize: 24 }} />,
          text: 'I work with Python for AI and data-driven projects, leveraging libraries for data processing, machine learning, and automation.'
        },
        {
          type: 'main',
          icon: <FaMobileAlt color="#0a66c2" style={{ fontSize: 24 }} />,
          text: 'I also have a background in mobile development, building Android apps using Kotlin/Java, Jetpack Compose, Firebase, Google APIs.'
        },
        // Ortadaki SoftArt Studios kutusu
        {
          type: 'studio',
          icon: <FaBuilding color="#14b8a6" style={{ fontSize: 22 }} />,
          text: (
            <div style={{ fontWeight: 500 }}>
              Currently, I'm an active contributor at <b>SoftArt Studios</b>, a software consultancy initiative I co-founded with colleagues.<br />
              <span style={{ fontWeight: 400 }}>We provide tailored digital solutions for businesses, including:</span>
              <ul style={{ margin: '10px 0 0 0', paddingLeft: 18, fontSize: 17 }}>
                <li>✅ POS software development & payment integrations</li>
                <li>✅ AI-powered decision support systems</li>
                <li>✅ Automation and reservation systems</li>
                <li>✅ Website development & SEO management & Social Media Management</li>
                <li>✅ QR menu and restaurant software solutions</li>
                <li>✅ Workflow automation using n8n Agents and .NET-based MCP architectures
                  <ul style={{ margin: '10px 0 0 0', paddingLeft: 18, fontSize: 16 }}>
                    <li>📚 <a href="https://github.com/bircany/EFCoreTutorial" target="_blank" rel="noopener noreferrer">EFCoreTutorial</a> – EF Core best practices & examples</li>
                    <li>🚗 <a href="https://github.com/bircany/DriveFlex-" target="_blank" rel="noopener noreferrer">DriveFlex</a> – Modern car rental platform</li>
                    <li>💼 <a href="https://github.com/bircany/softart-portfolio-site" target="_blank" rel="noopener noreferrer">softart-portfolio-site</a> – Portfolio & business showcase</li>
                    <li>🛒 <a href="https://github.com/bircany/pos-studio" target="_blank" rel="noopener noreferrer">pos-studio</a> – POS & payment solutions</li>
                    <li>🛍️ <a href="https://github.com/bircany/Modasepetim-MernApp" target="_blank" rel="noopener noreferrer">Modasepetim-MernApp</a> – MERN stack e-commerce</li>
                    <li>🔐 <a href="https://github.com/bircany/RS4Encryption" target="_blank" rel="noopener noreferrer">RS4Encryption</a> – RC4-based encryption/decryption</li>
                    <li>🗂️ <a href="https://github.com/bircany/FileConverter" target="_blank" rel="noopener noreferrer">FileConverter</a> – File format conversion utility</li>
                    <li>🌐 <a href="https://github.com/bircany/BorsanWeb" target="_blank" rel="noopener noreferrer">BorsanWeb</a> – Full-stack web platform</li>
                  </ul>
                </li>
              </ul>
            </div>
          )
        },
        // En alttaki kısa özet
        {
          type: 'summary',
          icon: <FaGlobe color="#0a66c2" style={{ fontSize: 22 }} />,
          text: 'Versatile in multi-language, real-world software solutions.'
        }
      ]
    },
    // Diğer kategoriler aynı kalacak (kısaltılmış gösterim)
    {
      title: "AI & ML",
      icon: <FaRobot style={{ color: '#0a66c2', marginRight: 8, fontSize: 28 }} />,
      items: [
        // Üstteki ana yetenekler
        {
          type: 'main',
          icon: <FaCheckCircle color="#14b8a6" style={{ fontSize: 24 }} />,
          text: 'Strong understanding of Machine Learning & Deep Learning  concepts (supervised/unsupervised, optimization, evaluation)'
        },
        {
          type: 'main',
          icon: <FaCheckCircle color="#14b8a6" style={{ fontSize: 24 }} />,
          text: 'Hands-on ML/DL projects: data preprocessing, feature engineering, dataset optimization, benchmarking (HuggingFace, Kaggle)'
        },
        {
          type: 'main',
          icon: <FaCheckCircle color="#14b8a6" style={{ fontSize: 24 }} />,
          text: 'Deploying ML models as scalable APIs (Flask) for real-time inference'
        },
        {
          type: 'main',
          icon: <FaCheckCircle color="#14b8a6" style={{ fontSize: 24 }} />,
          text: 'LLM/Chatbot: Custom ML/DL pipelines, LangChain, RAG, vector DBs, document-aware LLM responses'
        },
        {
          type: 'apps',
          icon: <FaBuilding color="#14b8a6" style={{ fontSize: 22 }} />,
          text: (
            <div style={{ fontWeight: 500 }}>
              <span>Project & Application Examples:</span>
              <ul style={{ margin: '10px 0 0 0', paddingLeft: 18, fontSize: 17 }}>
                <li>🤖 LLM-powered chatbot (LLaMA, Gemini, GPT) in production<br />
                  <a href="https://github.com/bircany/BorsanWeb" target="_blank" rel="noopener noreferrer">BorsanWeb</a>
                </li>
                <li>🦾 AI Agents in backend (MCP, multimodal: TTS, STT, Audio Processing)<br />
                  <a href="https://github.com/bircany/Speakify" target="_blank" rel="noopener noreferrer">Speakify</a> – <span style={{ color: '#0a66c2', fontWeight: 600 }}>[a .NET BASED using MCP's an OPENAI API Text-To-Speech Speech-To-Text project]</span>
                </li>
                <li>🖼️ High-accuracy image classification (PyTorch, ResNet, fine-tuning)<br />
                  <a href="https://github.com/bircany/face-recogniton" target="_blank" rel="noopener noreferrer">Face Recognition</a>
                </li>
                <li>📚 NLP & Language Models, research & notes<br />
                  <a href="https://github.com/bircany/nlp-notes" target="_blank" rel="noopener noreferrer">NLP Notes</a>
                </li>
                <li>⚽️ Football Player Value Prediction with AI<br />
                  <a href="https://github.com/bircany/ValueScoutAI" target="_blank" rel="noopener noreferrer">ValueScoutAI</a> – <span style={{ color: '#0a66c2', fontWeight: 600 }}>[AI-powered football player market value prediction]</span>
                </li>
                <li>🛡️ Big Data Cyberattack Analysis<br />
                  <a href="https://github.com/bircany/cyberattack-bigdata-analysis" target="_blank" rel="noopener noreferrer">Cyberattack BigData Analysis</a>
                </li>
                <li>🎨 Generative AI: OpenAI API, DALL·E image generation<br />
                  <a href="https://github.com/bircany/BorsanWeb" target="_blank" rel="noopener noreferrer">BorsanWeb</a>
                </li>
                <li>☁️ Big Data: Hadoop, Spark, real-time streaming with Kafka<br />
                  <a href="https://github.com/bircany/BorsanWeb" target="_blank" rel="noopener noreferrer">BorsanWeb</a>
                </li>
              </ul>
            </div>
          )
        },
        // En alttaki kısa özet
        {
          type: 'summary',
          icon: <FaGlobe color="#0a66c2" style={{ fontSize: 22 }} />,
          text: 'Bringing AI to production with scalable, real-world solutions.'
        }
      ]
    },
    {
      title: "Android Development",
      icon: <FaAndroid style={{ color: '#0a66c2', marginRight: 8, fontSize: 28 }} />,
      items: [
        // Üstteki ana yetenekler
        {
          type: 'main',
          icon: <FaCheckCircle color="#14b8a6" style={{ fontSize: 24 }} />,
          text: 'Kotlin & Java, for modern Android UI/UX usingJetpack Compose, '
        },
        {
          type: 'main',
          icon: <FaCheckCircle color="#14b8a6" style={{ fontSize: 24 }} />,
          text: 'Firebase Auth & Firestore, scalable backend integration and real-time data synchronization and storing.'
        },
        {
          type: 'main',
          icon: <FaCheckCircle color="#14b8a6" style={{ fontSize: 24 }} />,
          text: 'Google APIs, Maps, location-based features'
        },
        {
          type: 'main',
          icon: <FaCheckCircle color="#14b8a6" style={{ fontSize: 24 }} />,
          text: 'MVVM, Hilt, JUnit, robust architecture & testing'
        },
        {
          type: 'apps',
          icon: <FaBuilding color="#14b8a6" style={{ fontSize: 22 }} />,
          text: (
            <div style={{ fontWeight: 500 }}>
              <span>Project Examples:</span>
              <ul style={{ margin: '10px 0 0 0', paddingLeft: 18, fontSize: 17 }}>
                <li>💡 <a href="https://github.com/bircany/AndroidProjects" target="_blank" rel="noopener noreferrer">AndroidProjects Repository</a></li>
                <li>🎬 <a href="https://github.com/bircany/MovieApp" target="_blank" rel="noopener noreferrer">MovieApp – Jetpack Compose Sample</a></li>
                <li>🗺️ <a href="https://github.com/bircany/RouteApp" target="_blank" rel="noopener noreferrer">RouteApp</a></li>
              </ul>
            </div>
          )
        },
        // En alttaki kısa özet
        {
          type: 'summary',
          icon: <FaGlobe color="#0a66c2" style={{ fontSize: 22 }} />,
          text: 'Building modern, scalable Android apps with best practices.'
        }
      ]
    },
    {
      title: "Tools & Technologies",
      icon: <FaTools style={{ color: '#0a66c2', marginRight: 8, fontSize: 28 }} />,
      items: [
        // Üstteki ana yetenekler
        {
          type: 'main',
          icon: <FaCheckCircle color="#14b8a6" style={{ fontSize: 24 }} />,
          text: 'SQL & NoSQL: MsSQL, MySQL, MongoDB '
        },
        {
          type: 'main',
          icon: <FaCheckCircle color="#14b8a6" style={{ fontSize: 24 }} />,
          text: 'Git & GitHub: version control, collaboration, PR review, fixing conflicts, and maintaining clean commit history in both team and solo projects.'
        },
        {
          type: 'main',
          icon: <FaCheckCircle color="#14b8a6" style={{ fontSize: 24 }} />,
          text: 'Docker: containerization, lightweight dev environments for production and development.'
        },
        {
          type: 'main',
          icon: <FaCheckCircle color="#14b8a6" style={{ fontSize: 24 }} />,
          text: 'Kafka: caching, message queuing, real-time streaming for scalable applications.'
        },
        // Ortadaki uygulama örnekleri kutusu
        {
          type: 'apps',
          icon: <FaBuilding color="#14b8a6" style={{ fontSize: 22 }} />,
          text: (
            <div style={{ fontWeight: 500 }}>
              <span>API & Architecture:</span>
              <ul style={{ margin: '10px 0 0 0', paddingLeft: 18, fontSize: 17 }}>
                <li>🔗 Robust RESTful API with ASP.NET Core Minimal APIs</li>
                <li>🧩 Layered architecture (n-layered): DI, Repository, AutoMapper, EFCore</li>
                <li>🔒 Identity, JWT (refresh tokens) for Authentication</li>
                <li>🗃️ CRUD operations, BLOB/CLOB management </li>
                <li>📄 Swagger Doc, CORS, global error handling <br />
                  <a href="https://github.com/bircany/BookAPI" target="_blank" rel="noopener noreferrer">BookAPI</a> – <span style={{ color: '#0a66c2', fontWeight: 600 }}>[minimal-API - WebAPI project]</span>
                </li>
              </ul>
            </div>
          )
        },
        // En alttaki kısa özet
        {
          type: 'summary',
          icon: <FaGlobe color="#0a66c2" style={{ fontSize: 22 }} />,
          text: 'Delivering robust, scalable backend and devops solutions.'
        }
      ]
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef(null);

  // Otomatik geçiş kaldırıldı

  const goToPrev = () => {
    setActiveIndex(prev => (prev - 1 + skillCategories.length) % skillCategories.length);
  };
  const goToNext = () => {
    setActiveIndex(prev => (prev + 1) % skillCategories.length);
  };

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="section-header">
          <h2>Skills</h2>
          <div className="section-divider"></div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 24, margin: '32px 0' }}>
          <button onClick={goToPrev} aria-label="Previous" style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 32, color: 'var(--primary-color)' }}>
            <FaChevronLeft />
          </button>
          <div className="skills-slider-content" style={{ maxWidth: 900, minWidth: 400, background: 'var(--bg-card-light)', border: '2.5px solid #0a66c2', borderRadius: 22, boxShadow: '0 2px 16px rgba(0,0,0,0.10)', padding: '2.8rem 3.2rem', minHeight: 260, transition: 'all 0.3s' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 22 }}>
              {skillCategories[activeIndex].icon}
              <h3 style={{ color: 'var(--primary-color)', fontWeight: 700, fontSize: 28, margin: 0 }}>{skillCategories[activeIndex].title}</h3>
            </div>
            {/* Soft Skills ve AI&ML özel düzeni */}
            {activeIndex === 0 || activeIndex === 1 || activeIndex === 2 || activeIndex === 3 ? (
              <>
                {/* Üstteki ana yetenekler */}
                <div style={{ fontFamily: 'Fira Code, monospace', marginBottom: 22 }}>
                  {skillCategories[activeIndex].items.filter(i => i.type === 'main').map((item, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'center', fontSize: 20, fontWeight: 500, marginBottom: 14, gap: 14 }}>
                      {item.icon}
                      <span>{item.text}</span>
                    </div>
                  ))}
                </div>
                {/* Ortadaki kutu */}
                <div style={{ background: '#f3f6fa', border: '1.5px solid #14b8a6', borderRadius: 12, padding: '1.2rem 1.5rem', marginBottom: 22 }}>
                  {skillCategories[activeIndex].items.find(i => i.type === (activeIndex === 0 ? 'studio' : 'apps')).icon}
                  <span style={{ marginLeft: 12 }}>{skillCategories[activeIndex].items.find(i => i.type === (activeIndex === 0 ? 'studio' : 'apps')).text}</span>
                </div>
                {/* Kısa özet */}
                <div style={{ display: 'flex', alignItems: 'center', fontSize: 18, fontWeight: 600, color: '#0a66c2', fontFamily: 'Fira Code, monospace' }}>
                  {skillCategories[activeIndex].items.find(i => i.type === 'summary').icon}
                  <span style={{ marginLeft: 10 }}>{skillCategories[activeIndex].items.find(i => i.type === 'summary').text}</span>
                </div>
              </>
            ) : (
              <ul style={{ padding: 0, margin: 0 }}>
                {skillCategories[activeIndex].items.map((item, idx) => (
                  <li key={idx} className="skill-item" style={{ display: 'flex', alignItems: 'center', fontSize: 20, fontWeight: 500, marginBottom: 18, letterSpacing: 0.1, gap: 14 }}>
                    {item.icon}
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <button onClick={goToNext} aria-label="Next" style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 32, color: 'var(--primary-color)' }}>
            <FaChevronRight />
          </button>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginTop: 12 }}>
          {skillCategories.map((_, idx) => (
            <span key={idx} style={{ width: 14, height: 14, borderRadius: '50%', background: idx === activeIndex ? 'var(--primary-color)' : '#d1d5db', display: 'inline-block', transition: 'background 0.2s' }}></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;