import React, { useState, useEffect } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';
import { Container } from '../../ui/Container';
import { Button } from '../../ui/Button';
import { images } from '../../assets/images';
import styles from './Navbar.module.css';

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentHash, setCurrentHash] = useState(() => window.location.hash || '#home');

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash || '#home');
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home', key: 'home' },
    { label: 'About', href: '#about', key: 'about' },
    { label: 'Services', href: '#services', key: 'services' },
  ];

  const isAboutActive = currentHash === '#about';

  return (
    <header className={styles.header}>
      <Container className={styles.container}>
        {/* Floating White Pill Nav Bar */}
        <div className={styles.floatingPillNav}>
          {/* Logo */}
          <a href="#home" className={styles.logo}>
            <img src={images.brand.navLogo} alt="FlexiFitPay" className={styles.logoImg} />
          </a>

          {/* Nav Links */}
          <nav className={styles.desktopNav}>
            {navItems.map((item) => {
              const isActive = item.key === 'about' ? isAboutActive : (!isAboutActive && (currentHash === item.href || (item.key === 'home' && currentHash === '#home')));
              return (
                <a
                  key={item.key}
                  href={item.href}
                  className={`${styles.navLink} ${isActive ? styles.activeLink : ''}`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* CTA Button & Mobile Toggle */}
          <div className={styles.actions}>
            <Button href="#contact" variant="primary" size="md" icon={ArrowRight} className={styles.contactBtn}>
              Contact Us
            </Button>

            <button
              type="button"
              className={styles.mobileMenuToggle}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className={styles.mobileMenu}>
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className={styles.mobileNavLink}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button href="#contact" variant="primary" size="md" icon={ArrowRight} className={styles.mobileCta}>
              Contact Us
            </Button>
          </div>
        )}
      </Container>
    </header>
  );
};
