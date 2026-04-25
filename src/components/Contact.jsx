import React from 'react';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../context/AuthContext';

export default function Contact({ onOpenContact, onOpenAuth }) {
  const { t } = useTranslation();
  const { currentUser } = useAuth();

  const handleMessageClick = () => {
    if (currentUser) {
      onOpenContact();
    } else {
      onOpenAuth();
    }
  };

  return (
    <section id="contact" className="contact-section section">
      <div className="container">
        <div className="section-header">
          <h2>{t('contact.title', 'Get In ')}<span className="highlight">{t('contact.title_highlight', 'Touch')}</span></h2>
          <p>{t('contact.subtitle', 'Have questions? We are here to help you connect with the world.')}</p>
        </div>

        {/* Top Row: Info Cards */}
        <div className="contact-info-grid">
          {/* Address Card */}
          <div className="info-card">
            <div style={{ fontSize: '2rem', marginBottom: '15px' }}>📍</div>
            <h4>{t('contact.address_label', 'Address')}</h4>
            <p className="text-muted">Aba Mengesha Geneme Public Library, Bahir Dar, Ethiopia</p>
          </div>

          {/* Contact Details Card */}
          <div className="info-card">
            <div style={{ fontSize: '2rem', marginBottom: '15px' }}>📞</div>
            <h4>{t('contact.contact_label', 'Contact Info')}</h4>
            <p className="text-muted" style={{ marginBottom: '5px' }}><strong>✉️</strong> info@americancornerbd.org</p>
            <p className="text-muted"><strong>📞</strong> +251 58 220 1665</p>
          </div>

          {/* Opening Hours Card */}
          <div className="info-card">
            <div style={{ fontSize: '2rem', marginBottom: '15px' }}>🕒</div>
            <h4>{t('footer.hours_title', 'Opening Hours')}</h4>
            <div style={{ fontSize: '0.9rem' }} className="text-muted">
              <p>{t('footer.mon_fri')}</p>
              <p>{t('footer.sat')}</p>
              <p style={{ marginTop: '5px', fontStyle: 'italic' }}>{t('footer.lunch_break')}</p>
            </div>
          </div>
        </div>

        {/* Bottom Row: Map and CTA */}
        <div className="contact-main-grid">
          {/* Map Container */}
          <div className="map-container">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3907.5458652495687!2d37.3888323!3d11.5976527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1643290940562e87%3A0xe9634f9a0c7c093a!2sAba%20Mengesha%20Geneme%20Public%20Library!5e0!3m2!1sen!2set!4v1713972000000!5m2!1sen!2set" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps"
            ></iframe>
          </div>

          {/* CTA Card */}
          <div className="contact-cta-card">
            <div style={{ fontSize: '3.5rem', marginBottom: '20px' }}>✉️</div>
            <h3 style={{ marginBottom: '15px' }}>{t('contact.cta_title', 'Leave a Message')}</h3>
            <p style={{ marginBottom: '30px' }} className="text-muted">
              {t('contact.cta_subtitle', 'Click the button below to send us a direct message or feedback.')}
            </p>
            <button 
              className="btn btn-primary btn-lg btn-full" 
              onClick={handleMessageClick}
              style={{ boxShadow: '0 10px 20px rgba(37, 99, 235, 0.2)' }}
            >
              {currentUser ? t('contact.cta_button', 'Leave a Message') : t('auth.log_in', 'Log In to Message')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
