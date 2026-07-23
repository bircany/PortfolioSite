import React, { useEffect, useMemo, useState } from 'react';
import {
  FaArrowLeft,
  FaArrowRight,
  FaCodeBranch,
  FaExternalLinkAlt,
  FaGithub,
  FaGlobe,
  FaGooglePlay,
  FaLock,
  FaMobileAlt,
  FaStar,
  FaTimes,
} from 'react-icons/fa';
import { useSitePreferences } from '../context/SitePreferences';

const GITHUB_API = 'https://api.github.com/users/bircany/repos?per_page=100&sort=updated';

const productShowcase = [
  {
    id: 'softbeauty',
    name: 'SoftBeauty',
    group: 'products',
    featured: true,
    private: true,
    type: 'Mobile App + SaaS',
    description: {
      tr: 'Güzellik merkezleri için yapay zekâ destekli randevu, müşteri, stok ve gelir yönetim platformu.',
      en: 'AI-powered appointment, customer, inventory and revenue management platform for beauty businesses.',
    },
    topics: ['Mobile', 'SaaS', 'AI', 'Booking'],
    homepage: 'https://softbeautyapp.com/',
    store: 'https://play.google.com/store/apps/details?id=com.softart.beautyapp',
    appStore: 'https://apps.apple.com/tr/app/soft-beauty/id6761267617?l=tr',
    image: '/project-previews/softbeauty.png',
    livePreview: true,
  },
  {
    id: 'softreserve',
    name: 'SoftReserve',
    group: 'products',
    featured: true,
    private: true,
    type: 'AI Reservation System',
    description: {
      tr: 'WhatsApp üzerinden 7/24 çalışan yapay zekâ destekli restoran ve etkinlik rezervasyon sistemi.',
      en: 'AI-powered restaurant and event reservation system operating 24/7 through WhatsApp.',
    },
    topics: ['WhatsApp', 'AI Agent', 'Reservation', 'Automation'],
    homepage: 'https://softrezerve.com/',
    image: '/project-previews/softreserve.png',
    livePreview: true,
  },
  {
    id: 'horecapos',
    name: 'HorecaPOS',
    group: 'products',
    featured: true,
    private: true,
    type: 'Restaurant POS',
    description: {
      tr: 'Restoran ve kafeler için hızlı adisyon, masa, stok ve operasyon yönetimi sunan ticari POS ürünü.',
      en: 'Commercial POS product for fast order, table, inventory and restaurant operations management.',
    },
    topics: ['POS', 'Restaurant', 'Inventory', '.NET'],
    homepage: 'https://softartstudios.com/',
  },
  {
    id: 'sescim',
    name: 'SESCIM',
    group: 'products',
    featured: true,
    private: true,
    type: 'B2B Marketplace',
    description: {
      tr: 'Organizatörlerle etkinlik tedarikçilerini brief, teklif ve karar süreçlerinde buluşturan B2B marketplace.',
      en: 'B2B marketplace connecting event organizers and suppliers through brief, offer and decision workflows.',
    },
    topics: ['Mobile', 'Marketplace', 'B2B', 'Events'],
    homepage: 'https://www.sescim.com.tr/',
    store: 'https://play.google.com/store/apps/details?id=com.softart.sescim&hl=tr',
    appStore: 'https://apps.apple.com/tr/app/sescim/id6761890157?l=tr',
    image: '/project-previews/sescim.png',
    livePreview: true,
  },
  {
    id: 'tatilbungalov',
    name: 'TatilBungalov',
    group: 'products',
    featured: true,
    private: true,
    type: 'Travel Marketplace',
    description: {
      tr: 'Seçili bungalovları keşfetme, karşılaştırma ve rezervasyon akışları sunan modern tatil platformu.',
      en: 'Modern travel platform for discovering, comparing and booking curated bungalow stays.',
    },
    topics: ['Travel', 'Marketplace', 'Booking', 'Web'],
    homepage: 'https://tatilbungalov.com/',
    image: '/project-previews/tatilbungalov.png',
    livePreview: true,
  },
  {
    id: 'bungalovya',
    name: 'Bungalovya',
    group: 'products',
    featured: true,
    private: true,
    type: 'Mobile Travel App',
    description: {
      tr: 'Bungalov keşfi ve rezervasyon deneyimini mobile taşıyan Android uygulaması.',
      en: 'Android application bringing bungalow discovery and booking into a mobile experience.',
    },
    topics: ['Android', 'Travel', 'Booking'],
    homepage: 'http://bungalovya.com/',
    store: 'https://play.google.com/store/apps/details?id=com.softart.bungalovya&hl=tr',
  },
];

const clientProjects = [
  ['mentora', 'Mentora', 'https://mentora.softartdevstudios.cloud/', 'Learning Platform', ['Education', 'Web App']],
  ['muteqr', 'Mute QR', 'https://muteqr.com.tr/', 'QR Menu', ['Restaurant', 'QR Menu']],
  ['samsunilkhaber', 'Samsun İlk Haber', 'https://samsunilkhaber.com.tr/', 'News Platform', ['News', 'CMS']],
  ['mizander', 'Mizan Der', 'https://www.mizander.com.tr/', 'Corporate Website', ['Corporate', 'Web']],
  ['marel', 'Marel Plise Perde', 'https://marelpliseperde.com.tr/', 'Product Platform', ['E-commerce', 'Configurator']],
  ['softart', 'SoftArt Studios', 'http://softartstudios.com/', 'Agency Platform', ['Agency', 'Portfolio']],
  ['firikzeytin', 'Firik Zeytin', 'https://firikzeytin.com.tr/', 'Brand Website', ['Food', 'Brand']],
  ['rummeyhanesi', 'Rum Meyhanesi', 'https://rummeyhanesi.com.tr/', 'Restaurant Website', ['Restaurant', 'Menu']],
  ['mideasamsun', 'Midea Samsun', 'https://mideasamsun.vercel.app/', 'Corporate Website', ['Corporate', 'Landing Page']],
  ['jimmyjames', 'Jimmy James Pub', 'https://www.jimmyjamespub.com/menu/', 'Digital Menu', ['Restaurant', 'Menu']],
  ['backline', 'Backline Ses', 'https://www.backlineses.com/', 'Equipment Platform', ['Events', 'Catalog']],
  ['ruveyda', 'Rüveyda Özdemir', 'https://www.ruveydaozdemir.com.tr/', 'Professional Portfolio', ['Portfolio', 'Personal Brand']],
  ['diladilara', 'Dila Dilara Aytekin', 'https://www.diladilaraaytekin.com.tr/', 'Professional Portfolio', ['Portfolio', 'Personal Brand']],
  ['bogualp', 'Boğualp Çağatay Çağlar', 'https://www.bogualpcagataycaglar.com.tr/', 'Professional Portfolio', ['Portfolio', 'Personal Brand']],
  ['beyzanur', 'Beyzanur Özgüngör', 'https://www.beyzanurozgungor.com.tr/', 'Professional Portfolio', ['Portfolio', 'Personal Brand']],
];

const curatedClientProjects = clientProjects.map(([id, name, homepage, type, topics]) => ({
  id: `client-${id}`,
  name,
  group: 'client',
  type,
  topics,
  homepage,
  description: {
    tr: `${name} için yayındaki dijital deneyim ve web platformu.`,
    en: `Live digital experience and web platform delivered for ${name}.`,
  },
}));

const Projects = () => {
  const [githubRepos, setGithubRepos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState('featured');
  const [selected, setSelected] = useState(null);
  const [previewMode, setPreviewMode] = useState('image');
  const perPage = 6;
  const { language, t } = useSitePreferences();

  const ui = language === 'tr' ? {
    featured: 'Öne Çıkanlar',
    products: 'Ürünler',
    client: 'Canlı Siteler',
    openSource: 'Açık Kaynak',
    all: 'Tümü',
    private: 'Private / Ticari',
    preview: 'Görsel önizleme',
    tryLive: 'Canlı önizlemeyi dene',
    previewNote: 'Bazı siteler güvenlik politikaları nedeniyle iframe içinde açılmayabilir.',
    website: 'Canlı site',
    play: 'Google Play',
    appStore: 'App Store',
    repo: "Repository'yi aç",
    close: 'Proje detaylarını kapat',
    catalogBody: 'Ticari ürünler, private projeler, canlı müşteri işleri ve açık kaynak çalışmalar tek katalogda.',
  } : {
    featured: 'Featured',
    products: 'Products',
    client: 'Live Websites',
    openSource: 'Open Source',
    all: 'All',
    private: 'Private / Commercial',
    preview: 'Visual preview',
    tryLive: 'Try live preview',
    previewNote: 'Some websites may block iframe previews through their security policy.',
    website: 'Live website',
    play: 'Google Play',
    appStore: 'App Store',
    repo: 'Open repository',
    close: 'Close project details',
    catalogBody: 'Commercial products, private work, live client websites and open-source projects in one catalog.',
  };

  useEffect(() => {
    const loadRepos = async () => {
      try {
        const response = await fetch(GITHUB_API);
        if (!response.ok) return;
        const data = await response.json();
        setGithubRepos(data.filter((repo) => !repo.fork).map((repo) => ({
          ...repo,
          id: `github-${repo.id}`,
          group: 'open-source',
          type: `${repo.language || 'Software'} / Open Source`,
          topics: repo.topics?.length ? repo.topics : [repo.language].filter(Boolean),
          homepage: repo.homepage || null,
          repository: repo.html_url,
          description: {
            tr: repo.description || t.projects.fallback,
            en: repo.description || t.projects.fallback,
          },
        })));
      } catch {
        setGithubRepos([]);
      }
    };
    loadRepos();
  }, [t.projects.fallback]);

  useEffect(() => {
    if (!selected) return undefined;
    const onKeyDown = (event) => event.key === 'Escape' && setSelected(null);
    document.body.classList.add('modal-open');
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.classList.remove('modal-open');
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [selected]);

  const catalog = useMemo(() => [...productShowcase, ...curatedClientProjects, ...githubRepos], [githubRepos]);
  const filteredProjects = useMemo(() => {
    if (filter === 'featured') return catalog.filter((project) => project.featured);
    if (filter === 'products') return catalog.filter((project) => project.group === 'products');
    if (filter === 'client') return catalog.filter((project) => project.group === 'client');
    if (filter === 'open-source') return catalog.filter((project) => project.group === 'open-source');
    return catalog;
  }, [catalog, filter]);

  const totalPages = Math.max(1, Math.ceil(filteredProjects.length / perPage));
  const start = (currentPage - 1) * perPage;
  const visibleProjects = filteredProjects.slice(start, start + perPage);

  const changeFilter = (nextFilter) => {
    setFilter(nextFilter);
    setCurrentPage(1);
  };

  const changePage = (next) => {
    setCurrentPage(next);
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const openProject = (project) => {
    setPreviewMode('image');
    setSelected(project);
  };

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <div className="section-kicker"><span>06</span> {t.projects.kicker}</div>
        <div className="projects-heading">
          <div>
            <h2>{t.projects.titleBefore} <em>{t.projects.titleEmphasis}</em></h2>
            <p>{ui.catalogBody}</p>
          </div>
          <a href="https://github.com/bircany?tab=repositories" target="_blank" rel="noreferrer" className="github-pill">
            <FaGithub /> {t.projects.github}
          </a>
        </div>

        <div className="project-filters" role="tablist" aria-label={t.projects.kicker}>
          {[
            ['featured', ui.featured],
            ['products', ui.products],
            ['client', ui.client],
            ['open-source', ui.openSource],
            ['all', ui.all],
          ].map(([value, label]) => (
            <button key={value} role="tab" aria-selected={filter === value} className={filter === value ? 'active' : ''} onClick={() => changeFilter(value)}>
              {label}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {visibleProjects.map((project, index) => (
            <button className={`project-card ${project.image ? 'has-project-image' : ''}`} key={project.id} onClick={() => openProject(project)}>
              {project.image ? (
                <div className="project-card-image">
                  <img src={project.image} alt={`${project.name} preview`} loading="lazy" />
                  <div className="project-image-shade" />
                </div>
              ) : (
                <div className="project-card-placeholder" aria-hidden="true">
                  <span>{project.name.slice(0, 2).toUpperCase()}</span>
                </div>
              )}
              <div className="project-card-top">
                <span className="project-sequence">{String(start + index + 1).padStart(2, '0')}</span>
                <span className="project-card-flags">
                  {project.private && <FaLock title={ui.private} />}
                  {project.store && <FaMobileAlt title={ui.play} />}
                  <FaExternalLinkAlt />
                </span>
              </div>
              <div className="project-card-copy">
                <p className="project-type">{project.type}</p>
                <h3>{project.name}</h3>
                <p className="project-description">{project.description[language] || project.description.en}</p>
              </div>
              <div className="project-footer">
                <div className="tag-list">
                  {project.topics.slice(0, 4).map((topic) => <span key={topic}>{topic}</span>)}
                </div>
                {project.group === 'open-source' && (
                  <div className="project-stats">
                    <span><FaStar /> {project.stargazers_count || 0}</span>
                    <span><FaCodeBranch /> {project.forks_count || 0}</span>
                  </div>
                )}
              </div>
            </button>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="project-pagination">
            <button onClick={() => changePage(currentPage - 1)} disabled={currentPage === 1} aria-label="Previous projects"><FaArrowLeft /></button>
            <span><b>{String(currentPage).padStart(2, '0')}</b> / {String(totalPages).padStart(2, '0')}</span>
            <button onClick={() => changePage(currentPage + 1)} disabled={currentPage === totalPages} aria-label="Next projects"><FaArrowRight /></button>
          </div>
        )}
      </div>

      {selected && (
        <div className="project-modal-backdrop" onMouseDown={(event) => event.target === event.currentTarget && setSelected(null)}>
          <div className={`project-modal project-showcase-modal ${selected.image ? 'with-preview' : ''}`} role="dialog" aria-modal="true" aria-labelledby="project-modal-title">
            <button className="modal-close" onClick={() => setSelected(null)} aria-label={ui.close}><FaTimes /></button>

            {(selected.image || (selected.livePreview && selected.homepage)) && (
              <div className="modal-preview-panel">
                <div className="preview-toolbar">
                  <span><i /><i /><i /></span>
                  <strong>{previewMode === 'live' ? selected.homepage : ui.preview}</strong>
                  {selected.livePreview && selected.homepage && (
                    <button onClick={() => setPreviewMode(previewMode === 'image' ? 'live' : 'image')}>
                      {previewMode === 'image' ? ui.tryLive : ui.preview}
                    </button>
                  )}
                </div>
                {previewMode === 'live' ? (
                  <div className="project-live-frame">
                    <iframe
                      src={selected.homepage}
                      title={`${selected.name} live preview`}
                      loading="lazy"
                      sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                    />
                    <small>{ui.previewNote}</small>
                  </div>
                ) : (
                  <img src={selected.image} alt={`${selected.name} website preview`} />
                )}
              </div>
            )}

            <div className="modal-project-content">
              <div className="modal-kicker">{selected.private ? ui.private : t.projects.snapshot}</div>
              <h2 id="project-modal-title">{selected.name}</h2>
              <p>{selected.description[language] || selected.description.en}</p>
              <div className="modal-details">
                <div><span>{t.projects.stack}</span><strong>{selected.type}</strong></div>
                <div><span>STATUS</span><strong>{selected.private ? ui.private : 'Public'}</strong></div>
              </div>
              <div className="tag-list modal-tags">
                {selected.topics.map((topic) => <span key={topic}>{topic}</span>)}
              </div>
              <div className="modal-actions">
                {selected.homepage && <a href={selected.homepage} target="_blank" rel="noreferrer" className="button button-primary"><FaGlobe /> {ui.website}</a>}
                {selected.store && <a href={selected.store} target="_blank" rel="noreferrer" className="button button-store"><FaGooglePlay /> {ui.play}</a>}
                {selected.appStore && <a href={selected.appStore} target="_blank" rel="noreferrer" className="button button-ghost"><FaMobileAlt /> {ui.appStore}</a>}
                {selected.repository && <a href={selected.repository} target="_blank" rel="noreferrer" className="button button-ghost"><FaGithub /> {ui.repo}</a>}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
