import React, { useEffect, useState } from 'react';
import { FaArrowRight, FaCalendarAlt, FaClock } from 'react-icons/fa';

const MEDIUM_FEED = 'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@bircany';

const fallbackArticles = [
  {
    title: 'How to Write Better Code with AI: The Power of Prompt Engineering — Part 1',
    description: 'How clear context, constraints and intent turn AI tools into better engineering collaborators.',
    pubDate: '2026-03-04',
    readingTime: 8,
    link: 'https://medium.com/@bircany',
  },
  {
    title: 'Bulut Bilişim, On-Premise, IaaS, SaaS, PaaS Nedir?',
    description: 'A practical guide to the cloud service models shaping modern software delivery.',
    pubDate: '2025-09-13',
    readingTime: 3,
    link: 'https://medium.com/@bircany',
  },
  {
    title: 'Dependency Injection in Spring Framework',
    description: 'Understanding dependency injection and why it matters in maintainable Java applications.',
    pubDate: '2024-09-14',
    readingTime: 8,
    link: 'https://medium.com/@bircany',
  },
];

const stripHtml = (value = '') => value.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();

const Articles = () => {
  const [articles, setArticles] = useState(fallbackArticles);

  useEffect(() => {
    const loadArticles = async () => {
      try {
        const response = await fetch(MEDIUM_FEED);
        const data = await response.json();
        if (data.status === 'ok' && data.items?.length) {
          setArticles(data.items.slice(0, 3).map((item) => ({
            ...item,
            description: stripHtml(item.description).slice(0, 190),
            readingTime: Math.max(2, Math.ceil(stripHtml(item.content).split(' ').length / 200)),
          })));
        }
      } catch {
        // The curated fallback keeps the section useful when the public RSS bridge is unavailable.
      }
    };
    loadArticles();
  }, []);

  const formatDate = (dateString) => new Date(dateString).toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });

  return (
    <section id="articles" className="section articles-section">
      <div className="container">
        <div className="section-kicker section-kicker-dark"><span>04</span> Writing</div>
        <div className="articles-heading">
          <h2>Notes from the <em>engineering desk.</em></h2>
          <a href="https://medium.com/@bircany" target="_blank" rel="noreferrer" className="text-link light-link">
            All articles <FaArrowRight />
          </a>
        </div>
        <div className="articles-grid">
          {articles.map((article, index) => (
            <article className="article-card" key={`${article.title}-${index}`}>
              <div className="article-number">0{index + 1}</div>
              <div className="article-meta">
                <span><FaCalendarAlt /> {formatDate(article.pubDate)}</span>
                <span><FaClock /> {article.readingTime} min</span>
              </div>
              <h3>{article.title}</h3>
              <p>{article.description}{article.description?.length >= 190 ? '…' : ''}</p>
              <a href={article.link} target="_blank" rel="noreferrer" aria-label={`Read ${article.title}`}>
                Read article <FaArrowRight />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Articles;
