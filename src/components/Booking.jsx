import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../context/AuthContext';
import emailjs from '@emailjs/browser';
import { EMAIL_CONFIG } from '../config/emailConfig';

export default function Booking({ selectedEvent, events, onOpenAuth }) {
  const { t } = useTranslation();
  const { currentUser } = useAuth();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    event: '',
    password: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Update event when selectedEvent prop changes
  useEffect(() => {
    if (selectedEvent) {
      setFormData(prev => ({
        ...prev,
        event: selectedEvent
      }));
    }
  }, [selectedEvent]);

  // Auto-fill form if user is logged in
  useEffect(() => {
    if (currentUser) {
      setFormData(prev => ({
        ...prev,
        name: currentUser.name || '',
        email: currentUser.email || '',
        password: currentUser.password || ''
      }));
    }
  }, [currentUser]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    // Find full event details
    const selectedEventDetails = events?.find(ev => ev.id === formData.event);
    const eventTitle = selectedEventDetails?.title || formData.event;
    const eventDate = selectedEventDetails?.date || 'To be announced';

    try {
      // 1. Send confirmation email via EmailJS
      if (EMAIL_CONFIG.SERVICE_ID && EMAIL_CONFIG.SERVICE_ID !== 'YOUR_SERVICE_ID') {
        const result = await emailjs.send(
          EMAIL_CONFIG.SERVICE_ID,
          EMAIL_CONFIG.TEMPLATE_ID,
          {
            name: formData.name,
            email: formData.email,
            title: eventTitle,
            date: eventDate,
            password: formData.password,
            reply_to: formData.email,
          },
          EMAIL_CONFIG.PUBLIC_KEY
        );
        console.log('EmailJS Success:', result.text);
      } else {
        throw new Error('Email configuration is missing or invalid.');
      }

      // 2. Save booking to localStorage for "persistence"
      const bookings = JSON.parse(localStorage.getItem('ac_bookings') || '[]');
      bookings.push({
        ...formData,
        date: new Date().toISOString()
      });
      localStorage.setItem('ac_bookings', JSON.stringify(bookings));

      setIsSubmitting(false);
      setIsSubmitted(true);

      // Reset after a few seconds
      setTimeout(() => {
        setIsSubmitted(false);
        if (!currentUser) {
          setFormData({ name: '', email: '', event: '' });
        } else {
          setFormData(prev => ({ ...prev, event: '' }));
        }
      }, 8000);
    } catch (err) {
      console.error('Booking failed:', err);
      const errorMessage = err?.text || err?.message || 'Connection error';
      setError(`${t('booking.error_message', 'Could not send confirmation email.')} (${errorMessage})`);
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section id="book" className="booking-section section booking-section-premium">
        <div className="container">
          <div className="booking-success-message" style={{
            textAlign: 'center',
            padding: '60px 20px',
            backgroundColor: 'white',
            borderRadius: '24px',
            boxShadow: 'var(--shadow-lg)',
            maxWidth: '600px',
            margin: '0 auto',
            border: '1px solid var(--border-color)'
          }}>
            <div style={{ fontSize: '4rem', marginBottom: '20px' }}>🎉</div>
            <h2 style={{ color: 'var(--primary)', marginBottom: '15px' }}>{t('booking.success_title', 'Booking Confirmed!')}</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: '1.6' }}>
              {t('booking.success_message', 'Thank you for registering! We have sent a confirmation email to your address with further details.')}
            </p>
            <button
              className="btn btn-outline"
              style={{ marginTop: '30px' }}
              onClick={() => setIsSubmitted(false)}
            >
              {t('booking.book_another', 'Book Another Event')}
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="book" className="booking-section section booking-section-premium">
      <div className="booking-glow"></div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="booking-wrapper">
          {/* Left Side: Content & Benefits */}
          <div className="booking-content">
            <h2 style={{ fontSize: '3rem', marginBottom: '24px', color: 'var(--primary)' }}>
              {t('booking.title', 'Secure Your ')}
              <span className="highlight" style={{ position: 'relative', display: 'inline-block' }}>
                {t('booking.title_highlight', 'Spot')}
                <div style={{
                  position: 'absolute',
                  bottom: '5px',
                  left: '0',
                  width: '100%',
                  height: '8px',
                  background: 'rgba(37, 99, 235, 0.1)',
                  zIndex: -1
                }}></div>
              </span>
            </h2>
            <p className="hero-subtitle">
              {t('booking.subtitle', 'Join our upcoming workshops and training sessions. Space is limited, so book early!')}
            </p>
            
            <div className="booking-benefits-grid">
              {[
                { icon: '📜', text: t('booking.benefit1', 'Free Certificate upon completion') },
                { icon: '🛠️', text: t('booking.benefit2', 'Hands-on practical training') },
                { icon: '🌐', text: t('booking.benefit3', 'Access to global resources') }
              ].map((benefit, i) => (
                <div key={i} className="benefit-card">
                  <span style={{ fontSize: '1.5rem', marginRight: '16px' }}>{benefit.icon}</span>
                  <span style={{ fontWeight: '500', color: 'var(--primary)' }}>{benefit.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Glass Form or Login Prompt */}
          <div className="booking-form-container booking-glass-form">
            {!currentUser ? (
              <div className="login-required-prompt" style={{
                textAlign: 'center',
                padding: '40px 20px',
                background: 'rgba(255, 255, 255, 0.9)',
                borderRadius: '20px',
                backdropFilter: 'blur(10px)',
                border: '1px solid var(--border-color)',
                boxShadow: 'var(--shadow-lg)'
              }}>
                <div style={{ fontSize: '3rem', marginBottom: '20px' }}>🔐</div>
                <h3 style={{ color: 'var(--primary)', marginBottom: '15px' }}>{t('booking.login_required_title', 'Login Required')}</h3>
                <p style={{ color: 'var(--text-muted)', marginBottom: '25px', lineHeight: '1.6' }}>
                  {t('booking.login_required_msg', 'Please sign in to your account to book a seat for our upcoming events.')}
                </p>
                <button 
                  className="btn btn-primary btn-full"
                  onClick={onOpenAuth}
                >
                  {t('auth.log_in', 'Log In')}
                </button>
              </div>
            ) : (
              <form className="booking-form" onSubmit={handleSubmit}>
                {error && (
                  <div className="modal-error" style={{ marginBottom: '20px' }}>
                    {error}
                  </div>
                )}
                <div className="form-group">
                  <label>{t('booking.name_label', 'Full Name')}</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t('booking.name_placeholder', 'Enter your name')} 
                    required 
                    disabled={true}
                    className="premium-input"
                  />
                </div>
                
                <div className="form-group">
                  <label>{t('booking.email_label', 'Email Address')}</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t('booking.email_placeholder', 'Enter your email')} 
                    required 
                    disabled={true}
                    className="premium-input"
                  />
                </div>

                <div className="form-group">
                  <label>{t('booking.event_label', 'Choose Event')}</label>
                  <select 
                    name="event"
                    value={formData.event}
                    onChange={handleChange}
                    required
                    className="premium-input premium-select"
                  >
                    <option value="">{t('booking.event_placeholder', 'Select an event')}</option>
                    <option value="digital">{t('app_events.e1_title', 'Digital Skills Training')}</option>
                    <option value="english">{t('app_events.e2_title', 'English Discussion Club')}</option>
                    <option value="coding">{t('app_events.e3_title', 'Youth Coding Initiative')}</option>
                    <option value="leadership">{t('app_events.e4_title', 'Leadership & Ethics Workshop')}</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>{t('booking.password_label', 'Password / Access Code')}</label>
                  <input 
                    type="password" 
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder={t('booking.password_placeholder', 'Enter password or access code')} 
                    required 
                    className="premium-input"
                  />
                </div>

                <button 
                  type="submit" 
                  className="btn btn-primary btn-full btn-lg"
                  disabled={isSubmitting}
                  style={{
                    boxShadow: '0 10px 25px rgba(37, 99, 235, 0.25)',
                  }}
                >
                  {isSubmitting ? t('booking.processing', 'Processing...') : t('booking.confirm', 'Confirm Booking')}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
