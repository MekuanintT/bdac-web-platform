import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../context/AuthContext';
import emailjs from '@emailjs/browser';
import { EMAIL_CONFIG } from '../config/emailConfig';

export default function ContactModal({ isOpen, onClose }) {
  const { t } = useTranslation();
  const { currentUser } = useAuth();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);

  // Auto-fill form if user is logged in
  useEffect(() => {
    if (currentUser && isOpen) {
      setFormData(prev => ({
        ...prev,
        name: currentUser.name || '',
        email: currentUser.email || '',
        password: currentUser.password || ''
      }));
    }
  }, [currentUser, isOpen]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const data = {
      from_name: formData.name,
      from_email: formData.email,
      password: formData.password,
      message: formData.message,
      subject: 'New Message from Website Modal',
    };

    try {
      if (EMAIL_CONFIG.SERVICE_ID && EMAIL_CONFIG.SERVICE_ID !== 'YOUR_SERVICE_ID') {
        await emailjs.send(
          EMAIL_CONFIG.SERVICE_ID,
          EMAIL_CONFIG.TEMPLATE_ID,
          data,
          EMAIL_CONFIG.PUBLIC_KEY
        );
      } else {
        await new Promise(resolve => setTimeout(resolve, 1500));
      }
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData(prev => ({ ...prev, message: '' }));
        onClose();
      }, 3000);
    } catch (err) {
      console.error('Modal contact email failed:', err);
      setError('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container contact-modal" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>&times;</button>
        
        {isSubmitted ? (
          <div className="success-message" style={{ textAlign: 'center', padding: '40px 0' }}>
            <div style={{ fontSize: '4rem', marginBottom: '20px' }}>✨</div>
            <h2>{t('contact.success_title', 'Thank You!')}</h2>
            <p>{t('contact.success_message', 'Your message has been sent successfully.')}</p>
          </div>
        ) : (
          <>
            <div className="modal-header">
              <h2>{t('contact.modal_title', 'Send us a ')}<span className="highlight">{t('contact.modal_highlight', 'Message')}</span></h2>
              <p>{t('contact.modal_subtitle', 'We would love to hear from you!')}</p>
            </div>

            <form onSubmit={handleSubmit} className="auth-form">
              <div className="form-group">
                <label>{t('contact.form_name', 'Your Name')}</label>
                <input 
                  type="text" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                  placeholder="John Doe" 
                  disabled={!!currentUser}
                />
              </div>
              <div className="form-group">
                <label>{t('contact.form_email', 'Your Email')}</label>
                <input 
                  type="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                  placeholder="john@example.com" 
                  disabled={!!currentUser}
                />
              </div>
              <div className="form-group">
                <label>{t('booking.password_label', 'Password / Access Code')}</label>
                <input 
                  type="password" 
                  name="password" 
                  value={formData.password}
                  onChange={handleChange}
                  required 
                  placeholder={t('booking.password_placeholder', 'Enter password')} 
                />
              </div>
              <div className="form-group">
                <label>{t('contact.form_message', 'Message')}</label>
                <textarea 
                  name="message" 
                  value={formData.message}
                  onChange={handleChange}
                  required 
                  rows="4" 
                  placeholder={t('contact.form_placeholder', 'How can we help you?')}
                  style={{
                    width: '100%',
                    padding: '12px',
                    borderRadius: '12px',
                    border: '1px solid var(--border-color)',
                    background: 'rgba(255, 255, 255, 0.8)',
                    fontFamily: 'inherit',
                    resize: 'none'
                  }}
                ></textarea>
              </div>
              
              {error && <p className="error-text" style={{ color: '#ef4444', marginBottom: '15px' }}>{error}</p>}
              
              <button type="submit" className="btn btn-primary btn-full" disabled={isSubmitting}>
                {isSubmitting ? t('contact.sending', 'Sending...') : t('contact.submit', 'Send Message')}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
