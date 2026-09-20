import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Counters from './components/Counters';
import Services from './components/Services';
import Events from './components/Events';
import Teachings from './components/Teachings';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Modals
import EventModal from './components/Modals/EventModal';
import PujaModal from './components/Modals/PujaModal';
import LightboxModal from './components/Modals/LightboxModal';
import BlogModal from './components/Modals/BlogModal';

export default function Home() {
  const [activeEvent, setActiveEvent] = useState<any>(null);
  const [activeService, setActiveService] = useState<any>(null);
  const [isPujaModalOpen, setIsPujaModalOpen] = useState(false);
  const [activeGalleryItem, setActiveGalleryItem] = useState<any>(null);
  const [activeBlogPost, setActiveBlogPost] = useState<any>(null);

  // Toast Notification state
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 4000);
  };

  const handleSendMessage = (data: { name: string }) => {
    showToast(`Thank you ${data.name}! Your message has been received.`);
  };

  const handleOpenPujaModal = (service?: any) => {
    setActiveService(service || null);
    setIsPujaModalOpen(true);
  };

  return (
    <div className="sacred-bg">
      {/* Navbar Header */}
      <Navbar />

      {/* Main Page Sections */}
      <main>
        <Hero onBookPuja={() => handleOpenPujaModal()} />

        <About onLearnMore={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })} />

        <Blog 
          onSelectPost={(post: any) => setActiveBlogPost(post)}
        />

        <Counters />

        <Services onBookService={handleOpenPujaModal} />

        {/* Sacred Section Divider */}
        <div className="divider-om">
          <span>.</span>
        </div>

        <Events 
          onRegisterEvent={(evt: any) => setActiveEvent(evt)}
        />

        <Teachings />

        <Gallery 
          onOpenLightbox={(item: any) => setActiveGalleryItem(item)}
        />

        <Testimonials />

        <Contact 
          onSendMessage={handleSendMessage}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Modals */}
      {activeEvent && (
        <EventModal 
          event={activeEvent} 
          onClose={() => setActiveEvent(null)} 
        />
      )}

      {isPujaModalOpen && (
        <PujaModal 
          service={activeService} 
          onClose={() => setIsPujaModalOpen(false)} 
        />
      )}

      {activeGalleryItem && (
        <LightboxModal 
          item={activeGalleryItem} 
          onClose={() => setActiveGalleryItem(null)} 
        />
      )}

      {activeBlogPost && (
        <BlogModal 
          post={activeBlogPost} 
          onClose={() => setActiveBlogPost(null)} 
        />
      )}

      {/* Toast Notification Banner */}
      {toastMessage && (
        <div 
          style={{
            position: 'fixed',
            bottom: '2rem',
            right: '2rem',
            zIndex: 9999,
            background: 'var(--gradient-saffron)',
            color: 'var(--bg-dark)',
            padding: '1rem 1.5rem',
            borderRadius: '16px',
            boxShadow: 'var(--shadow-saffron)',
            fontWeight: '600',
            maxWidth: '380px',
            animation: 'fadeIn 0.3s ease'
          }}
        >
          {toastMessage}
        </div>
      )}
    </div>
  );
}

export { Home };

