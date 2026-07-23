import React, { useState, useEffect } from 'react';
import { HomePage } from './pages/Home';
import { AboutPage } from './pages/About';
import './styles/index.css';

function App() {
  const [currentPage, setCurrentPage] = useState(() => {
    return window.location.hash === '#about' ? 'about' : 'home';
  });

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#about') {
        setCurrentPage('about');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#home' || hash === '' || hash === '#services' || hash === '#features' || hash === '#contact') {
        setCurrentPage('home');
        if (hash === '#home' || hash === '') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return currentPage === 'about' ? <AboutPage /> : <HomePage />;
}

export default App;
