import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { SitePreferencesProvider } from './context/SitePreferences';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SitePreferencesProvider>
      <App />
    </SitePreferencesProvider>
  </React.StrictMode>
);
