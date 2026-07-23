import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

const SitePreferencesContext = createContext(null);

const copy = {
  en: {
    nav: { about: 'About', services: 'Services', experience: 'Experience', skills: 'Skills', lab: 'Systems lab', writing: 'Journal', projects: 'Projects', education: 'Education', contact: "Let's talk" },
    hero: {
      availability: 'Open to backend & AI opportunities',
      role: 'BACKEND DEVELOPER · AI DEVELOPER',
      titleBefore: 'I build the systems',
      titleEmphasis: 'behind',
      titleAfter: 'great products.',
      lead: "I'm Bircan Yılmaz — a software engineer focused on scalable backend architecture, microservices and AI-integrated products.",
      work: 'Explore my work',
      contact: 'Contact me',
      location: 'İstanbul, Türkiye',
    },
    about: {
      kicker: 'About',
      titleBefore: 'Engineering with the',
      titleEmphasis: 'whole system',
      titleAfter: 'in mind.',
      lead: 'I develop production-oriented backend systems across Java/Spring Boot and .NET, with a strong interest in scalable architecture and AI-powered products.',
      body: 'My experience spans e-commerce, news and subscription platforms, healthcare software and internal enterprise tools. I care about code quality, delivery pipelines and the runtime signals that keep software dependable after release.',
      cta: 'Start a conversation',
    },
    services: { kicker: 'Available for projects', titleBefore: 'From backend architecture to', titleEmphasis: 'digital growth.', body: 'Selected services delivered independently and with my software consultancy network.', backend: 'Backend & API Development', backendBody: 'Scalable Java, Spring Boot and .NET services, integrations and modernization.', ai: 'AI & Workflow Automation', aiBody: 'LLM integrations, RAG, agents and n8n-based business automations.', seo: 'Web, SEO & GEO', seoBody: 'Fast websites with technical SEO, structured data and AI-search discoverability.', ads: 'Google Ads & Conversion', adsBody: 'Campaign-ready landing pages, measurement foundations and conversion-focused iteration.', cta: 'Discuss a project' },
    experience: { kicker: 'Experience', title: 'From product requirements to production systems.', body: 'Hands-on experience across commerce, media, healthcare and enterprise software.' },
    skills: { kicker: 'Capabilities', titleBefore: 'A backend toolkit built for', titleEmphasis: 'real-world constraints.', body: 'Architecture, data, delivery and AI — considered as one connected system.', exploring: 'Currently exploring', github: "See what I'm building" },
    lab: { kicker: 'Interactive systems lab', title: 'How I think about a production backend.', body: 'Move your cursor across the system. Each layer is designed to make the next one more reliable.', hint: 'Hover a node to inspect its responsibility.' },
    journal: { kicker: 'Journal', titleBefore: 'Ideas, research and', titleEmphasis: 'life beyond code.', body: 'Technical writing, academic work and a growing personal archive.', articles: 'Articles', publications: 'Publications', life: 'Life stories', photos: 'Photos', all: 'All articles', read: 'Read article', thesis: 'Graduation thesis', thesisTitle: 'Revita — AI-driven healthcare assistant', thesisBody: 'NLP-based guidance, medication tracking and personalized health support.', research: 'Research focus', researchBody: 'Applied NLP, trustworthy health guidance and human-centered AI product design.', coming: 'New stories and photo essays are being prepared.', fieldNotes: 'Field notes', fieldNotesBody: 'Lessons from internships, building products and learning how systems behave outside the diagram.', photoNotes: 'Visual notebook', photoNotesBody: 'Workspaces, cities, events and the small details behind the work.' },
    projects: { kicker: 'Selected work', titleBefore: 'Proof is in the', titleEmphasis: 'repository.', body: 'Open a project card for its technical snapshot and repository link.', github: 'View GitHub', snapshot: 'PROJECT SNAPSHOT', stack: 'Primary stack', updated: 'Updated', open: 'Open repository', live: 'Live project', fallback: 'Explore the source, architecture and implementation details directly in the repository.' },
    education: { kicker: 'Education', degree: 'BSc in Software Engineering', thesis: 'Graduation thesis', community: 'Community', languages: 'Languages', honor: 'Honor Degree' },
    contact: { kicker: 'Contact', title: 'Have a system to build or a problem to solve?', body: "I'm always interested in thoughtful backend, platform and applied AI work.", email: 'Email', location: 'Location', name: 'Name', subject: 'Subject', message: 'Message', namePlaceholder: 'Your name', emailPlaceholder: 'you@company.com', subjectPlaceholder: 'What are we building?', messagePlaceholder: 'Tell me a little about the project...', send: 'Open email draft', privacy: 'Your message opens in your email app — no data is stored here.' },
    footer: { built: 'Built with intention, curiosity and clean code.', privacy: 'Privacy', top: 'Back to top' },
    controls: { language: 'Language', theme: 'Theme', light: 'Light', dark: 'Dark' },
    consent: { text: 'This site can use optional analytics and advertising cookies to measure visits and support the journal.', accept: 'Accept', reject: 'Reject', privacy: 'Privacy-first: optional scripts stay off until you accept.' },
  },
  tr: {
    nav: { about: 'Hakkımda', services: 'Hizmetler', experience: 'Deneyim', skills: 'Yetkinlikler', lab: 'Sistem labı', writing: 'Günlük', projects: 'Projeler', education: 'Eğitim', contact: 'İletişime geç' },
    hero: {
      availability: 'Backend ve yapay zekâ fırsatlarına açığım',
      role: 'BACKEND DEVELOPER · AI DEVELOPER',
      titleBefore: 'İyi ürünlerin',
      titleEmphasis: 'arkasındaki',
      titleAfter: 'sistemleri kuruyorum.',
      lead: 'Ben Bircan Yılmaz — ölçeklenebilir backend mimarileri, mikroservisler ve yapay zekâ entegre ürünler üzerine çalışan bir yazılım mühendisiyim.',
      work: 'Projelerimi incele',
      contact: 'İletişime geç',
      location: 'İstanbul, Türkiye',
    },
    about: {
      kicker: 'Hakkımda',
      titleBefore: 'Mühendisliğe',
      titleEmphasis: 'sistemin bütünüyle',
      titleAfter: 'bakıyorum.',
      lead: 'Java/Spring Boot ve .NET ile üretim odaklı backend sistemleri geliştiriyor; ölçeklenebilir mimari ve yapay zekâ destekli ürünlere odaklanıyorum.',
      body: 'E-ticaret, haber ve abonelik platformları, sağlık yazılımları ve kurumsal iç sistemlerde deneyim sahibiyim. Kod kalitesi, teslimat süreçleri ve yazılımı yayından sonra güvenilir tutan çalışma zamanı sinyallerini önemsiyorum.',
      cta: 'Birlikte konuşalım',
    },
    services: { kicker: 'Projelere açığım', titleBefore: 'Backend mimarisinden', titleEmphasis: 'dijital büyümeye.', body: 'Bağımsız olarak ve yazılım danışmanlığı ağımla sunduğum seçili hizmetler.', backend: 'Backend & API Geliştirme', backendBody: 'Ölçeklenebilir Java, Spring Boot ve .NET servisleri, entegrasyonlar ve modernizasyon.', ai: 'Yapay Zekâ & Otomasyon', aiBody: 'LLM entegrasyonları, RAG, ajanlar ve n8n tabanlı iş otomasyonları.', seo: 'Web, SEO & GEO', seoBody: 'Teknik SEO, yapılandırılmış veri ve yapay zekâ arama görünürlüğü güçlü hızlı siteler.', ads: 'Google Ads & Dönüşüm', adsBody: 'Kampanyaya hazır açılış sayfaları, ölçüm altyapısı ve dönüşüm odaklı iyileştirme.', cta: 'Projeyi konuşalım' },
    experience: { kicker: 'Deneyim', title: 'Ürün ihtiyacından canlı sistemlere.', body: 'E-ticaret, medya, sağlık ve kurumsal yazılım alanlarında uygulamalı deneyim.' },
    skills: { kicker: 'Yetkinlikler', titleBefore: 'Gerçek dünyanın', titleEmphasis: 'kısıtları için', body: 'Mimari, veri, teslimat ve yapay zekâ — tek bir bağlı sistem olarak.', exploring: 'Şu anda araştırıyorum', github: 'Ürettiklerimi incele' },
    lab: { kicker: 'İnteraktif sistem laboratuvarı', title: 'Canlı bir backend sistemini nasıl düşünüyorum?', body: 'İmleci sistem üzerinde gezdir. Her katman bir sonrakini daha güvenilir hale getirecek şekilde tasarlandı.', hint: 'Sorumluluğunu görmek için bir düğümün üzerine gel.' },
    journal: { kicker: 'Günlük', titleBefore: 'Fikirler, araştırmalar ve', titleEmphasis: 'kodun ötesindeki hayat.', body: 'Teknik yazılar, akademik çalışmalar ve büyüyen kişisel bir arşiv.', articles: 'Makaleler', publications: 'Yayınlarım', life: 'Hayattan hikâyeler', photos: 'Fotoğraflar', all: 'Tüm yazılar', read: 'Makaleyi oku', thesis: 'Mezuniyet tezi', thesisTitle: 'Revita — Yapay zekâ destekli sağlık asistanı', thesisBody: 'NLP tabanlı yönlendirme, ilaç takibi ve kişiselleştirilmiş sağlık desteği.', research: 'Araştırma odağı', researchBody: 'Uygulamalı NLP, güvenilir sağlık yönlendirmesi ve insan odaklı yapay zekâ ürün tasarımı.', coming: 'Yeni hikâyeler ve fotoğraf denemeleri hazırlanıyor.', fieldNotes: 'Saha notları', fieldNotesBody: 'Stajlardan, ürün geliştirmekten ve sistemlerin diyagram dışında nasıl davrandığını öğrenmekten kalan notlar.', photoNotes: 'Görsel defter', photoNotesBody: 'Çalışma alanları, şehirler, etkinlikler ve üretimin arkasındaki küçük ayrıntılar.' },
    projects: { kicker: 'Seçili projeler', titleBefore: 'Kanıt', titleEmphasis: 'repository’de.', body: 'Teknik özet ve repository bağlantısı için proje kartını aç.', github: "GitHub'ı aç", snapshot: 'PROJE ÖZETİ', stack: 'Ana teknoloji', updated: 'Güncelleme', open: "Repository'yi aç", live: 'Canlı proje', fallback: 'Kaynak kodu, mimariyi ve uygulama ayrıntılarını doğrudan repository üzerinden incele.' },
    education: { kicker: 'Eğitim', degree: 'Yazılım Mühendisliği Lisans', thesis: 'Mezuniyet tezi', community: 'Topluluk', languages: 'Diller', honor: 'Onur Derecesi' },
    contact: { kicker: 'İletişim', title: 'Kurulacak bir sistem veya çözülecek bir problem mi var?', body: 'Backend, platform ve uygulamalı yapay zekâ projeleriyle her zaman ilgileniyorum.', email: 'E-posta', location: 'Konum', name: 'İsim', subject: 'Konu', message: 'Mesaj', namePlaceholder: 'Adınız', emailPlaceholder: 'siz@sirket.com', subjectPlaceholder: 'Ne geliştiriyoruz?', messagePlaceholder: 'Projeden biraz bahsedin...', send: 'E-posta taslağını aç', privacy: 'Mesajınız e-posta uygulamanızda açılır — burada veri saklanmaz.' },
    footer: { built: 'Özen, merak ve temiz kodla geliştirildi.', privacy: 'Gizlilik', top: 'Yukarı dön' },
    controls: { language: 'Dil', theme: 'Tema', light: 'Açık', dark: 'Koyu' },
    consent: { text: 'Bu site ziyaretleri ölçmek ve günlüğü desteklemek için isteğe bağlı analiz ve reklam çerezleri kullanabilir.', accept: 'Kabul et', reject: 'Reddet', privacy: 'Gizlilik öncelikli: kabul edene kadar isteğe bağlı kodlar çalışmaz.' },
  },
};

export const SitePreferencesProvider = ({ children }) => {
  const queryLanguage = new URLSearchParams(window.location.search).get('lang');
  const [language, setLanguageState] = useState(() => queryLanguage === 'tr' || queryLanguage === 'en' ? queryLanguage : localStorage.getItem('portfolio-language') || 'en');
  const [theme, setTheme] = useState(() => localStorage.getItem('portfolio-theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'));
  const [consent, setConsentState] = useState(() => localStorage.getItem('portfolio-consent'));

  const setLanguage = (nextLanguage) => {
    setLanguageState(nextLanguage);
    const url = new URL(window.location.href);
    url.searchParams.set('lang', nextLanguage);
    window.history.replaceState({}, '', url);
  };

  useEffect(() => {
    document.documentElement.lang = language;
    localStorage.setItem('portfolio-language', language);
    document.title = language === 'tr' ? 'Bircan Yılmaz — Backend & Yapay Zekâ Geliştirici' : 'Bircan Yılmaz — Backend & AI Developer';
    const description = language === 'tr'
      ? 'Bircan Yılmaz; Java, Spring Boot, .NET, mikroservisler ve yapay zekâ entegre ürünler geliştiren backend geliştirici.'
      : 'Bircan Yılmaz is a backend and AI developer building Java, Spring Boot, .NET, microservices and AI-integrated products.';
    document.querySelector('meta[name="description"]')?.setAttribute('content', description);
  }, [language]);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const setConsent = (value) => {
    localStorage.setItem('portfolio-consent', value);
    setConsentState(value);
  };

  const value = useMemo(() => ({ language, setLanguage, theme, setTheme, consent, setConsent, t: copy[language] }), [language, theme, consent]);
  return <SitePreferencesContext.Provider value={value}>{children}</SitePreferencesContext.Provider>;
};

export const useSitePreferences = () => {
  const context = useContext(SitePreferencesContext);
  if (!context) throw new Error('useSitePreferences must be used inside SitePreferencesProvider');
  return context;
};
