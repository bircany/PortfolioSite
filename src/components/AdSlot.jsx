import React, { useEffect } from 'react';
import { useSitePreferences } from '../context/SitePreferences';

const AdSlot = ({ slot }) => {
  const client = process.env.REACT_APP_ADSENSE_CLIENT;
  const { consent } = useSitePreferences();

  useEffect(() => {
    if (consent !== 'granted' || !client || document.querySelector('script[data-portfolio-adsense]')) return;
    const script = document.createElement('script');
    script.async = true;
    script.crossOrigin = 'anonymous';
    script.dataset.portfolioAdsense = 'true';
    script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${client}`;
    document.head.appendChild(script);
  }, [client, consent]);

  useEffect(() => {
    if (consent !== 'granted' || !client || !slot) return;
    try { (window.adsbygoogle = window.adsbygoogle || []).push({}); } catch { /* Ad blockers can safely prevent initialization. */ }
  }, [client, slot, consent]);

  if (consent !== 'granted' || !client || !slot) return null;

  return (
    <aside className="ad-region" aria-label="Advertisement">
      <span>ADVERTISEMENT</span>
      <ins className="adsbygoogle" style={{ display: 'block' }} data-ad-client={client} data-ad-slot={slot} data-ad-format="auto" data-full-width-responsive="true" />
    </aside>
  );
};

export default AdSlot;
