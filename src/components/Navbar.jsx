import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../context/AuthContext';

export default function Navbar({ onOpenAuth, onOpenContact }) {
  const { t, i18n } = useTranslation();
  const { currentUser, logout } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a className="logo" href="/">
          <img src="/American Spaces.jpg" alt="American Corner Logo" onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/100x100/0f172a/ffffff?text=AC' }} />
          <span dangerouslySetInnerHTML={{ __html: t('nav.title') }} />
        </a>

        <div className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <div className="nav-links">
            <a href="#" onClick={toggleMobileMenu}>{t('nav.home')}</a>
            <a href="#events" onClick={toggleMobileMenu}>{t('nav.events')}</a>
            <a href="#book" onClick={toggleMobileMenu}>{t('nav.book')}</a>
            <a href="#about" onClick={toggleMobileMenu}>{t('nav.about')}</a>
            <a href="#contact" onClick={toggleMobileMenu}>{t('nav.contact', 'Contact')}</a>
          </div>
          <div className="nav-actions">
            {currentUser ? (
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <span style={{ fontWeight: '500', color: 'var(--primary)' }}>
                  {t('nav.hi')}, {currentUser.name.split(' ')[0]}
                </span>
                <button className="btn btn-outline" onClick={logout}>
                  {t('nav.logout')}
                </button>
              </div>
            ) : (
              <button className="btn btn-primary login-btn" onClick={() => { toggleMobileMenu(); onOpenAuth(); }}>
                {t('nav.login', 'Login')}
              </button>
            )}
          </div>
        </div>

        <div className="right-controls">
          <select
            onChange={handleLanguageChange}
            defaultValue={i18n.language}
            className="language-select"
          >
            <option value="en">English</option>
            <option value="am">አማርኛ</option>
            <option value="om">Oromoo</option>
            <option value="ti">ትግርኛ</option>
            <option value="so">Somali</option>
          </select>

          <button className="hamburger" onClick={toggleMobileMenu} aria-label="Toggle navigation">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  );
}
