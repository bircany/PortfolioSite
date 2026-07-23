import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Experience from './components/Experience';
import Skills from './components/Skills';
import SystemsLab from './components/SystemsLab';
import Journal from './components/Journal';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import AdSlot from './components/AdSlot';
import Analytics from './components/Analytics';
import ConsentBanner from './components/ConsentBanner';
import './assets/css/style.css';

function App() {
  return (
    <div className="site-shell">
      <Analytics />
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Experience />
        <Skills />
        <SystemsLab />
        <Journal />
        <AdSlot slot={process.env.REACT_APP_ADSENSE_SLOT_JOURNAL} />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
      <ConsentBanner />
    </div>
  );
}

export default App;
