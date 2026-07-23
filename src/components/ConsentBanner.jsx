import React from 'react';
import { useSitePreferences } from '../context/SitePreferences';

const ConsentBanner = () => {
  const { consent, setConsent, t } = useSitePreferences();
  if (consent) return null;

  return (
    <aside className="consent-banner" aria-label="Cookie preferences">
      <div><strong>PRIVACY / ANALYTICS</strong><p>{t.consent.text}</p><small>{t.consent.privacy}</small></div>
      <div className="consent-actions">
        <button onClick={() => setConsent('denied')}>{t.consent.reject}</button>
        <button className="consent-accept" onClick={() => setConsent('granted')}>{t.consent.accept}</button>
      </div>
    </aside>
  );
};

export default ConsentBanner;
