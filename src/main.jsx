import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// beforeinstallprompt so früh wie möglich abfangen (feuert oft, bevor React bereit ist).
// Der InstallBanner liest dieses gespeicherte Event dann aus.
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  window.__gartenInstallPrompt = e;
  window.dispatchEvent(new Event('gartenai:install-available'));
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
