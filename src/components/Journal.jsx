import React, { useEffect, useState } from 'react';
import {
  FaArrowRight,
  FaBookOpen,
  FaCameraRetro,
  FaCalendarAlt,
  FaClock,
  FaFacebookF,
  FaFeatherAlt,
  FaFlask,
  FaInstagram,
  FaNewspaper,
  FaPlayCircle,
  FaYoutube,
} from 'react-icons/fa';
import { useSitePreferences } from '../context/SitePreferences';

const MEDIUM_FEED = 'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@bircany';
const fallbackArticles = [
  { title: 'How to Write Better Code with AI: The Power of Prompt Engineering — Part 1', description: 'How clear context, constraints and intent turn AI tools into better engineering collaborators.', pubDate: '2026-03-04', readingTime: 8, link: 'https://medium.com/@bircany' },
  { title: 'Bulut Bilişim, On-Premise, IaaS, SaaS, PaaS Nedir?', description: 'A practical guide to the cloud service models shaping modern software delivery.', pubDate: '2025-09-13', readingTime: 3, link: 'https://medium.com/@bircany' },
  { title: 'Dependency Injection in Spring Framework', description: 'Understanding dependency injection and why it matters in maintainable Java applications.', pubDate: '2024-09-14', readingTime: 8, link: 'https://medium.com/@bircany' },
];

const pressStories = [
  {
    featured: true,
    source: 'Samsun İlk Haber',
    date: '27.02.2026',
    category: ['AI & Sustainability', 'Yapay Zekâ & Sürdürülebilirlik'],
    title: [
      'AI Usage Growth Could Deepen the Water Crisis',
      'Yapay Zekâ Kullanımındaki Artış Su Krizini Derinleştirebilir',
    ],
    description: [
      'Bircan Yılmaz discusses the energy and cooling requirements of data centers, their pressure on water resources and rainwater-based local solutions for Samsun.',
      'Bircan Yılmaz; veri merkezlerinin enerji ve soğutma ihtiyacını, su kaynakları üzerindeki baskıyı ve Samsun için yağmur suyu temelli yerel çözümleri değerlendiriyor.',
    ],
    links: [
      { label: ['Read article', 'Haberi oku'], url: 'https://www.samsunilkhaber.com.tr/yapay-zeka-uzmani-bircan-yilmaz-yapay-zeka-kullanimindaki-artis-su-krizini-derinlestirebilir', icon: FaNewspaper },
      { label: ['Video gallery', 'Video galeri'], url: 'https://www.samsunilkhaber.com.tr/video-galeri/yapay-zeka-uzmani-bircan-yilmaz-yapay-zeka-kullanimindaki-artis-su-krizini-derinlestirebilir', icon: FaPlayCircle },
      { label: ['Instagram Reel', 'Instagram Reel'], url: 'https://www.instagram.com/reels/DVQ1BX_EwRZ/', icon: FaInstagram },
      { label: ['Facebook post', 'Facebook paylaşımı'], url: 'https://www.facebook.com/habercarsambacom/photos/1512689766901046/', icon: FaFacebookF },
    ],
  },
  {
    source: 'Samsun İlk Haber',
    date: '07.04.2026',
    category: ['Digital Literacy', 'Dijital Okuryazarlık'],
    title: [
      'Restrict Uncontrolled Consumption, Keep Education Open',
      'Kontrolsüz Tüketime Yasak, Eğitime Devam',
    ],
    description: [
      'An assessment of age controls on social media, parental supervision, digital literacy and keeping education-focused platforms accessible to children.',
      'Sosyal medyada yaş kontrolü, ebeveyn denetimi ve dijital okuryazarlık ele alınırken eğitim odaklı platformların çocuklar için erişilebilir kalması savunuluyor.',
    ],
    links: [
      { label: ['Read article', 'Haberi oku'], url: 'https://www.samsunilkhaber.com.tr/bircan-yilmaz-kontrolsuz-tuketime-yasak-egitime-devam', icon: FaNewspaper },
      { label: ['Facebook video', 'Facebook videosu'], url: 'https://www.facebook.com/Samsunilkhaber/videos/2019279395673734/', icon: FaFacebookF },
      { label: ['YouTube video', 'YouTube videosu'], url: 'https://www.youtube.com/watch?v=5C5COb_B1dA', icon: FaYoutube },
    ],
  },
  {
    source: 'Samsun İlk Haber',
    date: '2026',
    category: ['Cyber Awareness', 'Siber Farkındalık'],
    title: [
      'Ramadan Scam Warning: Do Not Click Unknown Links',
      'Ramazan Dolandırıcılarına Dikkat: Tanımadığınız Linklere Tıklamayın',
    ],
    description: [
      'A short public-awareness video about fraudulent messages, suspicious links and safer digital behavior during seasonal campaigns.',
      'Sahte mesajlar, şüpheli bağlantılar ve dönemsel kampanyalarda daha güvenli dijital davranış üzerine kısa bir farkındalık videosu.',
    ],
    links: [
      { label: ['Watch Instagram Reel', 'Instagram Reel’i izle'], url: 'https://www.instagram.com/reels/DVLWHRwk9Mq/', icon: FaInstagram },
    ],
  },
];

const stripHtml = (value = '') => value.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();

const Journal = () => {
  const [tab, setTab] = useState('articles');
  const [articles, setArticles] = useState(fallbackArticles);
  const { language, t } = useSitePreferences();

  useEffect(() => {
    fetch(MEDIUM_FEED)
      .then((response) => response.json())
      .then((data) => {
        if (data.status === 'ok' && data.items?.length) {
          setArticles(data.items.slice(0, 3).map((item) => ({
            ...item,
            description: stripHtml(item.description).slice(0, 180),
            readingTime: Math.max(2, Math.ceil(stripHtml(item.content).split(' ').length / 200)),
          })));
        }
      })
      .catch(() => undefined);
  }, []);

  const tabs = [
    ['articles', t.journal.articles, <FaBookOpen />],
    ['press', language === 'tr' ? 'Basın & Medya' : 'Press & Media', <FaNewspaper />],
    ['publications', t.journal.publications, <FaFlask />],
    ['life', t.journal.life, <FaFeatherAlt />],
    ['photos', t.journal.photos, <FaCameraRetro />],
  ];

  return (
    <section id="journal" className="section journal-section">
      <div className="container">
        <div className="section-kicker"><span>05</span> {t.journal.kicker}</div>
        <div className="journal-heading">
          <div><h2>{t.journal.titleBefore} <em>{t.journal.titleEmphasis}</em></h2><p>{t.journal.body}</p></div>
          <a href="https://medium.com/@bircany" target="_blank" rel="noreferrer" className="text-link">{t.journal.all} <FaArrowRight /></a>
        </div>
        <div className="journal-tabs" role="tablist" aria-label={t.journal.kicker}>
          {tabs.map(([id, label, icon]) => (
            <button key={id} role="tab" aria-selected={tab === id} className={tab === id ? 'active' : ''} onClick={() => setTab(id)}>{icon}{label}</button>
          ))}
        </div>

        <div className="journal-content">
          {tab === 'articles' && (
            <div className="journal-article-grid">
              {articles.map((article, index) => (
                <article key={article.title}>
                  <span className="journal-index">0{index + 1}</span>
                  <div className="article-meta"><span><FaCalendarAlt /> {new Date(article.pubDate).toLocaleDateString(language === 'tr' ? 'tr-TR' : 'en-GB')}</span><span><FaClock /> {article.readingTime} min</span></div>
                  <h3>{article.title}</h3><p>{article.description}</p>
                  <a href={article.link} target="_blank" rel="noreferrer">{t.journal.read} <FaArrowRight /></a>
                </article>
              ))}
            </div>
          )}
          {tab === 'publications' && (
            <div className="publication-grid">
              <article className="publication-feature">
                <span>2026 · {t.journal.thesis}</span>
                <h3>{t.journal.thesisTitle}</h3>
                <p>{t.journal.thesisBody}</p>
                <div className="tag-list"><span>NLP</span><span>AI in Healthcare</span><span>Human-centered AI</span></div>
              </article>
              <article><span>{t.journal.research}</span><h3>Applied AI × Backend Systems</h3><p>{t.journal.researchBody}</p></article>
            </div>
          )}
          {tab === 'press' && (
            <div className="press-grid">
              {pressStories.map((story, index) => (
                <article className={`press-card${story.featured ? ' press-card-featured' : ''}`} key={story.title[0]}>
                  <div className="press-card-meta">
                    <span>0{index + 1} / {story.source}</span>
                    <time>{story.date}</time>
                  </div>
                  <span className="press-category">{story.category[language === 'tr' ? 1 : 0]}</span>
                  <h3>{story.title[language === 'tr' ? 1 : 0]}</h3>
                  <p>{story.description[language === 'tr' ? 1 : 0]}</p>
                  <div className="press-links">
                    {story.links.map(({ label, url, icon: Icon }) => (
                      <a href={url} target="_blank" rel="noreferrer" key={url}>
                        <Icon /> {label[language === 'tr' ? 1 : 0]}
                      </a>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          )}
          {tab === 'life' && (
            <div className="life-grid">
              <article><span>01</span><h3>{t.journal.fieldNotes}</h3><p>{t.journal.fieldNotesBody}</p></article>
              <article className="coming-card"><FaFeatherAlt /><h3>{t.journal.coming}</h3></article>
            </div>
          )}
          {tab === 'photos' && (
            <div className="photo-journal">
              <div className="photo-main"><img src="/bircan-yilmaz-studio.png" alt="Bircan Yılmaz studio portrait" /><span>STUDIO / 2026</span></div>
              <div className="photo-note"><FaCameraRetro /><h3>{t.journal.photoNotes}</h3><p>{t.journal.photoNotesBody}</p><small>{t.journal.coming}</small></div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Journal;
