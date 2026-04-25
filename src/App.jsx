import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Events from './components/Events';
import TelegramFeed from './components/TelegramFeed';
import Booking from './components/Booking';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { AuthProvider } from './context/AuthContext';
import AuthModal from './components/AuthModal';
import ContactModal from './components/ContactModal';

export default function App() {
  const { t } = useTranslation();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState('');

  const handleBookEvent = (eventTitle) => {
    setSelectedEvent(eventTitle);
    const bookSection = document.getElementById('book');
    if (bookSection) {
      bookSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const events = [
    {
      id: "digital",
      title: t('app_events.e1_title'),
      date: t('app_events.e1_date', 'May 5, 2026'),
      desc: t('app_events.e1_desc'),
    },
    {
      id: "english",
      title: t('app_events.e2_title'),
      date: t('app_events.e2_date', 'May 8, 2026'),
      desc: t('app_events.e2_desc'),
    },
    {
      id: "coding",
      title: t('app_events.e3_title'),
      date: t('app_events.e3_date', 'May 12, 2026'),
      desc: t('app_events.e3_desc'),
    },
    {
      id: "leadership",
      title: t('app_events.e4_title'),
      date: t('app_events.e4_date', 'May 15, 2026'),
      desc: t('app_events.e4_desc'),
    },
  ];

  return (
    <AuthProvider>
      <div className="app-container">
        <Navbar 
          onOpenAuth={() => setIsAuthModalOpen(true)} 
          onOpenContact={() => setIsContactModalOpen(true)}
        />
        <main>
          <Hero />
          <About />
          <Events events={events} onBookEvent={handleBookEvent} />
          <TelegramFeed />
          <Booking 
            selectedEvent={selectedEvent} 
            events={events} 
            onOpenAuth={() => setIsAuthModalOpen(true)}
          />
          <Contact 
            onOpenContact={() => setIsContactModalOpen(true)} 
            onOpenAuth={() => setIsAuthModalOpen(true)}
          />
        </main>
        <Footer />
        <AuthModal
          isOpen={isAuthModalOpen}
          onClose={() => setIsAuthModalOpen(false)}
        />
        <ContactModal
          isOpen={isContactModalOpen}
          onClose={() => setIsContactModalOpen(false)}
        />
      </div>
    </AuthProvider>
  );
}
