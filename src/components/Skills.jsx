import React from 'react';
import { FaArrowRight, FaBrain, FaCloud, FaCode, FaDatabase } from 'react-icons/fa';
import { useSitePreferences } from '../context/SitePreferences';

const skillGroups = [
  {
    icon: <FaCode />,
    number: '01',
    title: 'Backend',
    statement: ['Services that stay clear as systems grow.', 'Sistem büyürken anlaşılır kalmaya devam eden servisler.'],
    skills: ['Java', 'Spring Boot', '.NET Core', 'EF Core', 'JPA / Hibernate', 'REST', 'Microservices', 'OOP', 'Design Patterns'],
  },
  {
    icon: <FaDatabase />,
    number: '02',
    title: 'Data & Messaging',
    statement: ['The right persistence and communication model for the job.', 'İhtiyaca uygun kalıcılık ve iletişim modeli.'],
    skills: ['PostgreSQL', 'MS SQL', 'MongoDB', 'Redis', 'Elasticsearch', 'RabbitMQ', 'Kafka', 'LINQ'],
  },
  {
    icon: <FaCloud />,
    number: '03',
    title: 'Delivery & Ops',
    statement: ['Software designed to be shipped, observed and maintained.', 'Yayınlanmak, gözlemlenmek ve sürdürülebilmek için tasarlanan yazılım.'],
    skills: ['Docker', 'Jenkins', 'CI/CD', 'Maven', 'Git', 'Grafana', 'Kibana', 'Jira', 'JUnit / xUnit'],
  },
  {
    icon: <FaBrain />,
    number: '04',
    title: 'AI & Automation',
    statement: ['Intelligence embedded into useful product workflows.', 'Faydalı ürün akışlarına yerleştirilen zekâ.'],
    skills: ['Python', 'LLMs', 'NLP', 'PyTorch', 'LangChain', 'RAG', 'n8n', 'OpenAI APIs', 'Computer Vision'],
  },
];

const Skills = () => {
  const { language, t } = useSitePreferences();
  const copyIndex = language === 'tr' ? 1 : 0;
  return (
  <section id="skills" className="section section-paper">
    <div className="container">
      <div className="section-kicker"><span>03</span> {t.skills.kicker}</div>
      <div className="skills-heading">
        <h2>{t.skills.titleBefore} <em>{t.skills.titleEmphasis}</em></h2>
        <p>{t.skills.body}</p>
      </div>
      <div className="skills-bento">
        {skillGroups.map((group) => (
          <article className="skill-panel" key={group.title}>
            <div className="skill-panel-head">
              <span className="skill-number">{group.number}</span>
              <span className="skill-icon">{group.icon}</span>
            </div>
            <h3>{group.title}</h3>
            <p>{group.statement[copyIndex]}</p>
            <div className="skill-cloud">{group.skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
          </article>
        ))}
        <article className="skill-statement">
          <span>{t.skills.exploring}</span>
          <h3>Reliable distributed systems, applied LLM workflows and production-grade automation.</h3>
          <a href="https://github.com/bircany" target="_blank" rel="noreferrer">{t.skills.github} <FaArrowRight /></a>
        </article>
      </div>
    </div>
  </section>
  );
};

export default Skills;
