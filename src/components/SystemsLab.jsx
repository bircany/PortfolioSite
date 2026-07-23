import React, { useRef, useState } from 'react';
import { FaBrain, FaBroadcastTower, FaDatabase, FaLayerGroup, FaServer, FaShieldAlt } from 'react-icons/fa';
import { useSitePreferences } from '../context/SitePreferences';

const nodes = [
  { id: 'gateway', label: 'API Gateway', icon: <FaShieldAlt />, x: 12, y: 44, en: 'Authentication, routing, throttling and a stable contract at the edge.', tr: 'Kimlik doğrulama, yönlendirme, istek sınırlama ve dış katmanda kararlı sözleşme.' },
  { id: 'services', label: 'Domain Services', icon: <FaLayerGroup />, x: 39, y: 20, en: 'Business capabilities split around clear domain boundaries.', tr: 'Net iş alanı sınırları etrafında ayrıştırılmış yetenekler.' },
  { id: 'events', label: 'Event Backbone', icon: <FaBroadcastTower />, x: 42, y: 69, en: 'Asynchronous communication, retries and delivery guarantees.', tr: 'Asenkron iletişim, yeniden denemeler ve teslimat garantileri.' },
  { id: 'runtime', label: 'Runtime', icon: <FaServer />, x: 67, y: 44, en: 'Containerized workloads with health checks and observable behavior.', tr: 'Sağlık kontrolleri ve gözlemlenebilir davranışla konteyner iş yükleri.' },
  { id: 'data', label: 'Data Layer', icon: <FaDatabase />, x: 87, y: 22, en: 'Fit-for-purpose relational, cache and search stores.', tr: 'İhtiyaca uygun ilişkisel veritabanı, önbellek ve arama depoları.' },
  { id: 'ai', label: 'AI Workflows', icon: <FaBrain />, x: 86, y: 69, en: 'Grounded models and agents behind governed application interfaces.', tr: 'Kontrollü uygulama arayüzlerinin arkasında kaynaklı modeller ve ajanlar.' },
];

const SystemsLab = () => {
  const [active, setActive] = useState(nodes[0]);
  const sceneRef = useRef(null);
  const { language, t } = useSitePreferences();

  const moveScene = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    sceneRef.current?.style.setProperty('--lab-x', `${((event.clientX - rect.left) / rect.width - .5) * 22}px`);
    sceneRef.current?.style.setProperty('--lab-y', `${((event.clientY - rect.top) / rect.height - .5) * 16}px`);
  };

  return (
    <section id="systems-lab" className="section systems-lab">
      <div className="container">
        <div className="section-kicker section-kicker-dark"><span>04</span> {t.lab.kicker}</div>
        <div className="lab-heading">
          <h2>{t.lab.title}</h2>
          <p>{t.lab.body}</p>
        </div>
        <div className="lab-shell" onPointerMove={moveScene}>
          <div className="architecture-scene" ref={sceneRef}>
            <div className="architecture-grid" />
            <svg className="architecture-lines" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
              <path d="M12 44 L39 20 L67 44 L87 22" />
              <path d="M12 44 L42 69 L67 44 L86 69" />
              <path d="M39 20 L42 69" />
            </svg>
            {nodes.map((node) => (
              <button
                key={node.id}
                className={`architecture-node ${active.id === node.id ? 'active' : ''}`}
                style={{ left: `${node.x}%`, top: `${node.y}%` }}
                onMouseEnter={() => setActive(node)}
                onFocus={() => setActive(node)}
                onClick={() => setActive(node)}
              >
                <span>{node.icon}</span>
                <strong>{node.label}</strong>
              </button>
            ))}
          </div>
          <aside className="node-inspector">
            <span>ACTIVE NODE / {active.id.toUpperCase()}</span>
            <div className="inspector-icon">{active.icon}</div>
            <h3>{active.label}</h3>
            <p>{language === 'tr' ? active.tr : active.en}</p>
            <small>{t.lab.hint}</small>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default SystemsLab;
