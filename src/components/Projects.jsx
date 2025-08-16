import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight, FaStar, FaCodeBranch, FaBookOpen } from 'react-icons/fa';

const GITHUB_API = 'https://api.github.com/users/bircany/repos?per_page=100&sort=updated';

const Projects = () => {
  const [repos, setRepos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRepos = async () => {
      setLoading(true);
      try {
        const res = await fetch(GITHUB_API);
        if (!res.ok) throw new Error('Failed to fetch repositories');
        const data = await res.json();
        setRepos(data);
      } catch (err) {
        setError('An error occurred while loading repositories.');
      } finally {
        setLoading(false);
      }
    };
    fetchRepos();
  }, []);

  const totalPages = Math.ceil(repos.length / projectsPerPage);
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = repos.slice(indexOfFirstProject, indexOfLastProject);

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      document.getElementById('projects').scrollIntoView();
    }
  };
  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      document.getElementById('projects').scrollIntoView();
    }
  };
  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
    document.getElementById('projects').scrollIntoView();
  };

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-header">
          <h2>Projects</h2>
          <div className="section-divider"></div>
          <p className="section-description">
            You can examine some of the projects I have developed below.            
          </p>
        </div>
        {loading ? (
          <div style={{ textAlign: 'center', padding: '2rem' }}>Loading projects...</div>
        ) : error ? (
          <div style={{ textAlign: 'center', color: '#e74c3c', padding: '2rem' }}>{error}</div>
        ) : (
          <>
            <div className="projects-grid">
              {currentProjects.map((repo, index) => (
                <div
                  className="project-card fade-in"
                  key={repo.id}
                  onClick={() => window.open(repo.html_url, '_blank')}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="project-icon"><FaBookOpen /></div>
                  <h4>{repo.name}</h4>
                  <p>{repo.description || 'No description provided.'}</p>
                  <div className="project-tags">
                    {repo.topics && repo.topics.length > 0
                      ? repo.topics.map((tag, tagIndex) => (
                          <span key={tagIndex}>{tag}</span>
                        ))
                      : repo.language && <span>{repo.language}</span>}
                  </div>
                  <div style={{ display: 'flex', gap: 12, marginTop: 10, alignItems: 'center', fontSize: 15 }}>
                    <span><FaStar style={{ color: '#fbbf24', marginRight: 4 }} />{repo.stargazers_count}</span>
                    <span><FaCodeBranch style={{ color: '#64748b', marginRight: 4 }} />{repo.forks_count}</span>
                    <span style={{ color: '#64748b' }}>Updated: {new Date(repo.updated_at).toLocaleDateString()}</span>
                  </div>
                </div>
              ))}
            </div>
            {/* Pagination */}
            <div className="pagination">
              <button 
                className="pagination-arrow" 
                onClick={goToPreviousPage} 
                disabled={currentPage === 1}
              >
                <FaChevronLeft />
              </button>
              <div className="pagination-numbers">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(number => (
                  <button
                    key={number}
                    className={`pagination-number ${currentPage === number ? 'active' : ''}`}
                    onClick={() => goToPage(number)}
                  >
                    {number}
                  </button>
                ))}
              </div>
              <button 
                className="pagination-arrow" 
                onClick={goToNextPage} 
                disabled={currentPage === totalPages}
              >
                <FaChevronRight />
              </button>
            </div>
            <div className="pagination-info">
              Displaying: {indexOfFirstProject + 1}-{Math.min(indexOfLastProject, repos.length)} / Total: {repos.length} projects
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Projects;