import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CookieConsent } from './components/CookieConsent';
import { HomePage } from './pages/HomePage';
import { CorporateHealthPage } from './pages/CorporateHealthPage';

export default function App() {
  const [showCookieConsent, setShowCookieConsent] = useState(false);

  useEffect(() => {
    // Set document title
    document.title = 'Borg Helse';
    
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      setShowCookieConsent(true);
    }
  }, []);

  const handleAcceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowCookieConsent(false);
  };

  const handleDeclineCookies = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setShowCookieConsent(false);
  };

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-neutral-50">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/bedriftshelse" element={<CorporateHealthPage />} />
        </Routes>
        <Footer />
        {showCookieConsent && (
          <CookieConsent
            onAccept={handleAcceptCookies}
            onDecline={handleDeclineCookies}
          />
        )}
      </div>
    </BrowserRouter>
  );
}