import React, { useState, useEffect } from 'react';
import { FaMedium, FaCalendar, FaClock, FaExternalLinkAlt } from 'react-icons/fa';

const MEDIUM_FEED = 'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@bircany';

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch(MEDIUM_FEED);
        const data = await response.json();
        if (data.status === 'ok') {
          setArticles(data.items || []);
        } else {
          setError('An error occurred while loading articles.');
        }
      } catch (err) {
        setError('An error occurred while loading articles.');
      } finally {
        setLoading(false);
      }
    };
    fetchArticles();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('tr-TR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const getReadingTime = (content) => {
    const wordsPerMinute = 200;
    const wordCount = content.split(' ').length;
    return Math.ceil(wordCount / wordsPerMinute);
  };

  const extractImageFromContent = (content) => {
    const imgMatch = content.match(/<img[^>]+src=["']([^"'>]+)["']/);
    return imgMatch ? imgMatch[1] : null;
  };

  if (loading) {
    return (
      <section id="articles" className="articles-section">
        <div className="container">
          <div className="section-header">
            <h2>Articles</h2>
            <div className="section-divider"></div>
          </div>
          <div style={{ textAlign: 'center', padding: '2rem' }}>
            <div className="loading-spinner">Loading articles...</div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="articles" className="articles-section">
        <div className="container">
          <div className="section-header">
            <h2>Articles</h2>
            <div className="section-divider"></div>
          </div>
          <div style={{ textAlign: 'center', padding: '2rem' }}>
            <div className="loading-spinner" style={{ color: '#e74c3c' }}>{error}</div>
            <a 
              href="https://medium.com/@bircany" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '0.5rem',
                marginTop: '1rem',
                padding: '0.5rem 1rem',
                backgroundColor: '#00ab6c',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '5px',
              }}
            >
              <FaMedium /> View My Medium Profile
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="articles" className="articles-section">
      <div className="container">
        <div className="section-header">
          <h2>Articles</h2>
          <div className="section-divider"></div>
          <p className="section-description">
          You can find my articles on technology, software development and artificial intelligence here.
          </p>
        </div>

        {articles.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '2rem' }}>
            <p>No articles found.</p>
            <a 
              href="https://medium.com/@bircany" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '0.5rem',
                marginTop: '1rem',
                padding: '0.5rem 1rem',
                backgroundColor: '#00ab6c',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '5px',
              }}
            >
              <FaMedium /> View My Medium Profile
            </a>
          </div>
        ) : (
          <div className="articles-grid" style={{ display: 'grid', gap: '2rem', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
            {articles.map((article, index) => {
              const imageUrl = extractImageFromContent(article.content);
              const readingTime = getReadingTime(article.content);
              return (
                <article key={index} className="article-card fade-in" style={{ background: '#fff', borderRadius: 12, boxShadow: '0 2px 16px rgba(0,0,0,0.06)', overflow: 'hidden', display: 'flex', flexDirection: 'column', minHeight: 320 }}>
                  {imageUrl && (
                    <div className="article-image" style={{ height: 180, overflow: 'hidden' }}>
                      <img src={imageUrl} alt={article.title} style={{ width: '100%', objectFit: 'cover', height: '100%' }} />
                    </div>
                  )}
                  <div className="article-content" style={{ flex: 1, padding: '1.2rem' }}>
                    <h3 className="article-title" style={{ fontSize: 20, marginBottom: 8 }}>
                      <a 
                        href={article.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={{ color: '#0a66c2', textDecoration: 'none' }}
                      >
                        {article.title}
                      </a>
                    </h3>
                    <p className="article-excerpt" style={{ color: '#444', fontSize: 15, marginBottom: 12 }}>
                      {article.description.replace(/<[^>]*>/g, '').substring(0, 150)}...
                    </p>
                    <div className="article-meta" style={{ display: 'flex', gap: 16, fontSize: 13, color: '#888', marginBottom: 10 }}>
                      <span className="article-date">
                        <FaCalendar /> {formatDate(article.pubDate)}
                      </span>
                      <span className="article-reading-time">
                        <FaClock /> {readingTime} min read
                      </span>
                    </div>
                    <a 
                      href={article.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="article-link"
                      style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: '#00ab6c', fontWeight: 500 }}
                    >
                      <FaExternalLinkAlt /> Read Article
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default Articles; 