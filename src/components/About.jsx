import React from 'react';
import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="about-section section">
      <div className="container">
        <div className="about-layout">
          <div className="about-content">
            <div className="section-header" style={{ textAlign: 'left' }}>
              <h2>{t('about.title')}<span className="highlight">{t('about.title_highlight')}</span></h2>
            </div>

            <div className="about-text-content">
              <p className="lead-text">
                {t('about.p1')}
              </p>

              <div className="about-features">
                <div className="feature-item">
                  <div className="feature-icon">💻</div>
                  <p>{t('about.f1')}</p>
                </div>

                <div className="feature-item">
                  <div className="feature-icon">🚀</div>
                  <p>{t('about.f2')}</p>
                </div>
              </div>

              <div className="mission-statement">
                <h3>{t('about.mission_title')}</h3>
                <p>
                  {t('about.mission_text')}
                </p>
              </div>
            </div>
          </div>

          <div className="about-visual">
            <div className="visual-grid">
              <div className="visual-card primary-card">
                <span className="visual-stat">100%</span>
                <span className="visual-label">{t('about.stat_free')}</span>
              </div>
              <div className="visual-card image-card img-1"></div>
              <div className="visual-card image-card img-2"></div>
              <div className="visual-card secondary-card">
                <span className="visual-stat">{t('about.stat_global_val', 'Global')}</span>
                <span className="visual-label">{t('about.stat_global')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
