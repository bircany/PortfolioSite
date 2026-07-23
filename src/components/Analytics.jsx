import { useEffect } from 'react';
import { useSitePreferences } from '../context/SitePreferences';

const Analytics = () => {
  const { consent } = useSitePreferences();
  const measurementId = process.env.REACT_APP_GA_MEASUREMENT_ID;
  const googleAdsId = process.env.REACT_APP_GOOGLE_ADS_ID;

  useEffect(() => {
    if (consent !== 'granted' || (!measurementId && !googleAdsId) || document.querySelector('script[data-portfolio-gtag]')) return;
    const id = measurementId || googleAdsId;
    const script = document.createElement('script');
    script.async = true;
    script.dataset.portfolioGtag = 'true';
    script.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
    document.head.appendChild(script);
    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag(){ window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    if (measurementId) window.gtag('config', measurementId, { anonymize_ip: true });
    if (googleAdsId) window.gtag('config', googleAdsId);
  }, [consent, measurementId, googleAdsId]);

  return null;
};

export default Analytics;
