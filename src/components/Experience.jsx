import React from 'react';
import { FaUsers } from 'react-icons/fa';
import { FaArrowUpRightFromSquare, FaCodeBranch, FaDatabase, FaWaveSquare } from 'react-icons/fa6';
import { useSitePreferences } from '../context/SitePreferences';

const experiences = [
  {
    period: '2026 — Present',
    company: 'n11',
    location: 'İstanbul',
    role: 'Backend Developer Intern',
    featured: true,
    brand: 'n11',
    brandClass: 'n11',
    companyUrl: 'https://www.n11.com/',
    eyebrow: ['Marketplace Engineering', 'Pazaryeri Mühendisliği'],
    description: [
      'Contributing to the modernization of a high-traffic e-commerce platform by separating monolithic capabilities into independently deployable Java and Spring Boot microservices.',
      'Yüksek trafikli bir e-ticaret platformunda monolitik yeteneklerin bağımsız deploy edilebilen Java ve Spring Boot mikroservislerine ayrıştırılmasına katkı sağlıyorum.',
    ],
    highlights: [
      [
        'Working synchronously across the DMALL platform and 40+ interconnected microservices; tracing cross-service dependencies, production defects and data flows.',
        'DMALL platformu ve birbiriyle bağlantılı 40+ mikroservis üzerinde eş zamanlı çalışıyor; servis bağımlılıklarını, production bug kayıtlarını ve veri akışlarını takip ediyorum.',
      ],
      [
        'Managing e-commerce domain integrations around product information, Kafka topics and PIMS-related flows; using Kafka-based audit trails to investigate business events.',
        'Ürün bilgisi, Kafka topic’leri ve PIMS odaklı e-ticaret akışlarında entegrasyon süreçlerini yönetiyor; iş olaylarını incelemek için Kafka tabanlı audit kayıtlarını kullanıyorum.',
      ],
      [
        'Following application behavior through Elasticsearch and Kibana logs, preparing Oracle PL/SQL and PostgreSQL scripts, and supporting data migration and consistency work.',
        'Elasticsearch ve Kibana üzerinden uygulama davranışını ve logları inceliyor; Oracle PL/SQL ve PostgreSQL scriptleri hazırlayarak veri taşıma ve tutarlılık süreçlerini destekliyorum.',
      ],
      [
        'Supporting CI/CD and runtime operations with Maven, Jenkins, Docker and Kubernetes; collaborating through Jira and Slack in bug, release and deployment workflows.',
        'Maven, Jenkins, Docker ve Kubernetes ile CI/CD ve çalışma zamanı operasyonlarını destekliyor; bug, release ve deployment süreçlerinde Jira ve Slack üzerinden ekiplerle çalışıyorum.',
      ],
    ],
    metrics: [
      { value: '40+', label: ['Synchronized services', 'Senkronize servis'] },
      { value: 'DMALL', label: ['Core platform', 'Ana platform'] },
      { value: 'CI/CD', label: ['Production delivery', 'Üretim teslimatı'] },
    ],
    focus: [
      { icon: FaCodeBranch, label: ['Monolith → Microservices', 'Monolit → Mikroservis'] },
      { icon: FaWaveSquare, label: ['Events, Audit & Messaging', 'Event, Audit ve Mesajlaşma'] },
      { icon: FaDatabase, label: ['Data Migration & SQL', 'Veri Taşıma ve SQL'] },
    ],
    stack: [
      'Java', 'Spring Boot', 'Maven', 'Kafka', 'RabbitMQ', 'Elasticsearch', 'Kibana',
      'Jenkins', 'Docker', 'Kubernetes', 'Oracle PL/SQL', 'PostgreSQL', 'Jira', 'Slack',
    ],
  },
  {
    period: ['Ongoing', 'Aktif / Güncel'],
    company: 'SoftArt Studios',
    location: 'Türkiye · Remote',
    role: 'Co-Founder · CTO & Product Owner',
    featured: true,
    brand: 'SA',
    brandClass: 'softart',
    companyUrl: 'https://softartstudios.com/',
    eyebrow: ['Product & Engineering Leadership', 'Ürün ve Mühendislik Liderliği'],
    description: [
      'Leading the product and technology direction of SoftArt Studios while coordinating a three-person software team from discovery and architecture through delivery and iteration.',
      'SoftArt Studios’un ürün ve teknoloji yönünü belirliyor; üç kişilik yazılım ekibini keşif ve mimariden teslimat ve iyileştirme süreçlerine kadar koordine ediyorum.',
    ],
    highlights: [
      [
        'Coordinating a three-person engineering team by defining ownership, prioritizing work, removing blockers and guiding implementation decisions.',
        'Üç kişilik yazılım ekibinde sorumlulukları tanımlıyor, işleri önceliklendiriyor, engelleri kaldırıyor ve teknik uygulama kararlarında yönlendirme yapıyorum.',
      ],
      [
        'Owning product vision, roadmap and backlog; translating customer needs and business opportunities into clear product requirements and delivery milestones.',
        'Ürün vizyonu, yol haritası ve backlog’u yönetiyor; müşteri ihtiyaçlarıyla iş fırsatlarını net ürün gereksinimlerine ve teslimat hedeflerine dönüştürüyorum.',
      ],
      [
        'Setting architecture, technology and quality standards; reviewing critical code paths and making release, security and scalability decisions.',
        'Mimari, teknoloji ve kalite standartlarını belirliyor; kritik kod akışlarını inceliyor, release, güvenlik ve ölçeklenebilirlik kararlarını alıyorum.',
      ],
      [
        'Managing client discovery, scope, estimation, demos and feedback loops across POS, reservation, automation, web and AI-enabled products.',
        'POS, rezervasyon, otomasyon, web ve yapay zekâ destekli ürünlerde müşteri keşfi, kapsam, tahmin, demo ve geri bildirim süreçlerini yönetiyorum.',
      ],
    ],
    metrics: [
      { value: '3', label: ['Engineering team', 'Yazılım ekibi'] },
      { value: 'CTO', label: ['Technical direction', 'Teknik yön'] },
      { value: '0→1', label: ['Product delivery', 'Ürün geliştirme'] },
    ],
    focus: [
      { icon: FaUsers, label: ['Team Direction', 'Ekip Yönlendirme'] },
      { icon: FaWaveSquare, label: ['Product Ownership', 'Ürün Sahipliği'] },
      { icon: FaCodeBranch, label: ['Architecture & Delivery', 'Mimari ve Teslimat'] },
    ],
    stack: [
      'Leadership', 'Product Strategy', 'Architecture', 'Code Review', 'Agile',
      'Java', '.NET', 'React', 'PostgreSQL', 'Docker', 'CI/CD', 'n8n', 'AI Agents',
    ],
  },
  {
    period: 'Dec 2025 — Feb 2026',
    company: 'Akademik İnovasyon Yazılım',
    location: 'Samsun',
    role: 'Software Engineering Intern',
    description: [
      'Built microservices for news, CRM and subscription workflows behind an API gateway, with secure authentication and asynchronous communication.',
      'API gateway arkasında güvenli kimlik doğrulama ve asenkron iletişim kullanan haber, CRM ve abonelik mikroservisleri geliştirdim.',
    ],
    stack: ['Spring Boot', 'JWT', 'PostgreSQL', 'Redis', 'RabbitMQ', 'JUnit'],
  },
  {
    period: 'Oct — Dec 2025',
    company: 'Pusula Teknoloji',
    location: 'İstanbul',
    role: 'Software Engineering Intern',
    description: [
      'Developed a hospital document management system with modular DDD-oriented architecture, real-time flows, search and API documentation.',
      'Modüler DDD odaklı mimari, gerçek zamanlı akışlar, arama ve API dokümantasyonuyla hastane doküman yönetim sistemi geliştirdim.',
    ],
    stack: ['ABP', 'Blazor', 'EF Core', 'PostgreSQL', 'RabbitMQ', 'SignalR'],
  },
  {
    period: 'Aug — Sep 2024',
    company: 'Borsan Group',
    location: 'Samsun',
    role: 'Software Engineering Intern',
    description: [
      'Delivered an internal full-stack platform with natural-language search, an OpenAI-powered assistant, ERP ticket reporting and production analytics.',
      'Doğal dilde arama, OpenAI destekli asistan, ERP talep raporlama ve üretim analitiği içeren kurum içi full-stack platform geliştirdim.',
    ],
    stack: ['React', 'Express.js', 'MS SQL', 'OpenAI', 'Power BI'],
  },
];

const architectureLabs = [
  {
    index: '01',
    name: 'Transactional Outbox',
    url: 'https://github.com/bircany/outbox-poc',
    description: [
      'Reliable event delivery with Kafka, Debezium, PostgreSQL and Docker.',
      'Kafka, Debezium, PostgreSQL ve Docker ile güvenilir event teslimatı.',
    ],
    tags: ['Kafka', 'Debezium', 'CDC', 'PostgreSQL'],
  },
  {
    index: '02',
    name: 'Saga Orchestration',
    url: 'https://github.com/bircany/saga-orchestrator-poc',
    description: [
      'Compensating transactions and consistency across distributed order flows.',
      'Dağıtık sipariş akışlarında telafi işlemleri ve veri tutarlılığı.',
    ],
    tags: ['Spring Boot', 'Kafka', 'Saga', 'Docker'],
  },
];

const Experience = () => {
  const { language, t } = useSitePreferences();
  const copyIndex = language === 'tr' ? 1 : 0;
  const labCopy = language === 'tr' ? {
    kicker: 'GitHub / Mimari Pratik',
    title: 'Üretim problemlerini yeniden üretilebilir sistem desenlerine dönüştürüyorum.',
    body: 'Dağıtık sistemlerde güvenilir mesajlaşma ve veri tutarlılığı üzerine açık kaynak çalışmalar.',
    action: 'Repository’yi incele',
    github: 'Tüm GitHub profilini aç',
  } : {
    kicker: 'GitHub / Architecture Practice',
    title: 'Turning production problems into reproducible system patterns.',
    body: 'Open-source studies on reliable messaging and data consistency in distributed systems.',
    action: 'Explore repository',
    github: 'View the full GitHub profile',
  };

  return (
    <section id="experience" className="section section-dark">
      <div className="container">
        <div className="section-kicker section-kicker-dark"><span>02</span> {t.experience.kicker}</div>
        <div className="experience-heading">
          <h2>{t.experience.title}</h2>
          <p>{t.experience.body}</p>
        </div>

        <div className="experience-list">
          {experiences.map((item, index) => (
            <article className={`experience-row${item.featured ? ` experience-row-featured experience-row-${item.brandClass}` : ''}`} key={item.company}>
              <div className="experience-index">0{index + 1}</div>
              <div className="experience-period">{Array.isArray(item.period) ? item.period[copyIndex] : item.period}</div>
              <div className="experience-main">
                {item.featured && (
                  <div className="experience-featured-head">
                    <div className={`experience-brand experience-brand-${item.brandClass}`} aria-label={item.company}>{item.brand}</div>
                    <div>
                      <span className="experience-eyebrow">{item.eyebrow[copyIndex]}</span>
                      <h3>{item.role}</h3>
                    </div>
                  </div>
                )}

                {!item.featured && <h3>{item.role}</h3>}

                {item.companyUrl ? (
                  <a className="experience-company" href={item.companyUrl} target="_blank" rel="noreferrer">
                    {item.company} <span>· {item.location}</span> <FaArrowUpRightFromSquare />
                  </a>
                ) : (
                  <div className="experience-company">
                    {item.company} <span>· {item.location}</span>
                  </div>
                )}

                <p>{item.description[copyIndex]}</p>

                {item.metrics && (
                  <div className="experience-metrics">
                    {item.metrics.map((metric) => (
                      <div key={metric.value}>
                        <strong>{metric.value}</strong>
                        <span>{metric.label[copyIndex]}</span>
                      </div>
                    ))}
                  </div>
                )}

                {item.focus && (
                  <div className="experience-focus">
                    {item.focus.map(({ icon: Icon, label }) => (
                      <div key={label[0]}>
                        <Icon />
                        <span>{label[copyIndex]}</span>
                      </div>
                    ))}
                  </div>
                )}

                {item.highlights && (
                  <ul className="experience-highlights">
                    {item.highlights.map((highlight) => <li key={highlight[0]}>{highlight[copyIndex]}</li>)}
                  </ul>
                )}

                <div className="tag-list experience-stack">
                  {item.stack.map((tech) => <span key={tech}>{tech}</span>)}
                </div>
              </div>
            </article>
          ))}
        </div>

        <aside className="architecture-proof">
          <div className="architecture-proof-heading">
            <div>
              <span>{labCopy.kicker}</span>
              <h3>{labCopy.title}</h3>
            </div>
            <div>
              <p>{labCopy.body}</p>
              <a href="https://github.com/bircany" target="_blank" rel="noreferrer">
                {labCopy.github} <FaArrowUpRightFromSquare />
              </a>
            </div>
          </div>
          <div className="architecture-proof-grid">
            {architectureLabs.map((lab) => (
              <a href={lab.url} target="_blank" rel="noreferrer" key={lab.name}>
                <span className="architecture-proof-index">{lab.index}</span>
                <h4>{lab.name}</h4>
                <p>{lab.description[copyIndex]}</p>
                <div className="tag-list">{lab.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                <strong>{labCopy.action} <FaArrowUpRightFromSquare /></strong>
              </a>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Experience;
