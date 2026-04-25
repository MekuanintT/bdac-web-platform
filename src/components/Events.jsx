import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Events({ events, onBookEvent }) {
  const { t } = useTranslation();

  return (
    <section id="events" className="events-section section">
      <div className="container">
        <div className="section-header">
          <h2>{t('events.title')}<span className="highlight">{t('events.title_highlight')}</span></h2>
          <p>{t('events.subtitle')}</p>
        </div>
        <div className="event-grid">
          {events.map((event, index) => (
            <div key={index} className="event-card">
              <div className="event-card-date">
                <span className="date-icon">📅</span> {event.date}
              </div>
              <h3 className="event-card-title">{event.title}</h3>
              <p className="event-card-desc">{event.desc}</p>
              <button 
                className="btn btn-primary btn-full"
                onClick={() => onBookEvent(event.id)}
              >
                {t('events.book_now')}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
