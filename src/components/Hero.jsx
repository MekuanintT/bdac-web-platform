import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="hero">
      <div className="hero-content">
        <div className="badge">{t('hero.badge')}</div>
        <h1 className="hero-title">{t('hero.title1')}<span className="highlight">{t('hero.title_highlight')}</span></h1>
        <p className="hero-subtitle">{t('hero.subtitle')}</p>
        <div className="hero-buttons">
          <a href="#events" className="btn btn-primary btn-lg">{t('hero.explore')}</a>
          <a href="#book" className="btn btn-outline btn-lg">{t('hero.book')}</a>
        </div>
      </div>
    </section>
  );
}
