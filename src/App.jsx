import { useState, useEffect, useCallback, useRef } from 'react';
import './App.css';

import headerImg from './assets/header.png';
import EnvelopeScene from './components/EnvelopeScene/EnvelopeScene';
import Paper, { PaperDivider } from './components/Paper/Paper';
import InvitationReveal from './components/InvitationReveal/InvitationReveal';
import Hosts from './components/Hosts/Hosts';
import EventDetails from './components/EventDetails/EventDetails';
import RSVPForm from './components/RSVPForm/RSVPForm';
import AdminModal from './components/AdminModal/AdminModal';
import MusicToggle from './components/MusicToggle/MusicToggle';

export default function App() {
  // phase: 'envelope' → 'opening' → 'open' → 'gone'
  const [phase, setPhase] = useState('envelope');

  // Lock scroll while envelope is showing
  useEffect(() => {
    const locked = phase === 'envelope' || phase === 'opening';
    document.body.classList.toggle('no-scroll', locked);
  }, [phase]);

  const handleOpen = useCallback(() => {
    setPhase('opening');
    // Fallback: if animationend never fires (e.g. reduced-motion), advance after 2.5s
    setTimeout(() => setPhase(p => p === 'opening' ? 'gone' : p), 3500);
  }, []);

  const handleComplete = useCallback(() => {
    // envelope-rush animation just ended; hide envelope, unlock scroll
    setPhase('gone');
    document.body.classList.remove('no-scroll');
  }, []);

  const showEnvelope = phase !== 'gone';
  const showPaper    = phase === 'opening' || phase === 'open' || phase === 'gone';

  const headerRef = useRef(null);
  useEffect(() => {
    if (!showPaper) return;
    const measure = () => {
      const paper = document.querySelector('.paper');
      if (!paper || !headerRef.current) return;
      const bottom = headerRef.current.getBoundingClientRect().bottom
                   - paper.getBoundingClientRect().top;
      paper.style.setProperty('--header-bottom', `${bottom}px`);
    };
    const id = requestAnimationFrame(measure);
    const ro = new ResizeObserver(measure);
    if (headerRef.current) ro.observe(headerRef.current);
    return () => { cancelAnimationFrame(id); ro.disconnect(); };
  }, [showPaper]);

  return (
    <>
      {/* Paper renders behind the envelope during burst; fades in as envelope zooms away */}
      <Paper visible={showPaper}>
        <div ref={headerRef} style={{ paddingBottom: '80px' }}>
          <img src={headerImg} alt="" style={{ width: '60%', display: 'block', margin: '0 auto' }} />
        </div>
        <InvitationReveal />
        <PaperDivider />
        <EventDetails />
        <PaperDivider />
        <RSVPForm />
        <PaperDivider />
        <Hosts />

        <footer style={{
          textAlign: 'center',
          padding: '24px 0 8px',
          borderTop: '1px solid var(--gold-light)',
          marginTop: 16,
        }}>
          <p style={{
            fontFamily: 'var(--font-head)',
            fontSize: 'clamp(1.1rem, 3vw, 1.6rem)',
            fontStyle: 'italic',
            color: 'var(--gold)',
            letterSpacing: '0.05em',
          }}>
            Жангельды &amp; Самал
          </p>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.7rem',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: 'var(--gold-dark)',
            marginTop: 4,
          }}>
            29 тамыз 2026 · Қостанай
          </p>
        </footer>
      </Paper>

      {/* Envelope is on top (z:100); disappears via zoom-rush animation */}
      {showEnvelope && (
        <EnvelopeScene
          phase={phase}
          onOpen={handleOpen}
          onComplete={handleComplete}
        />
      )}

      <MusicToggle />

      <AdminModal />
    </>
  );
}
