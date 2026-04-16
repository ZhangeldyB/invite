import { useState, useEffect } from 'react';
import './App.css';

import EnvelopeScene from './components/EnvelopeScene/EnvelopeScene';
import Paper, { PaperDivider } from './components/Paper/Paper';
import InvitationReveal from './components/InvitationReveal/InvitationReveal';
import EventDetails from './components/EventDetails/EventDetails';
import RSVPForm from './components/RSVPForm/RSVPForm';
import AdminModal from './components/AdminModal/AdminModal';

export default function App() {
  // phase: 'envelope' → 'opening' → 'open'
  const [phase, setPhase] = useState('envelope');
  const [showPaper, setShowPaper] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('no-scroll', phase === 'envelope');
  }, [phase]);

  const handleOpen     = () => setPhase('opening');
  const handleComplete = () => {
    setPhase('open');
    // Let envelope fade start, then show paper
    setTimeout(() => setShowPaper(true), 150);
  };

  return (
    <>
      {/* Envelope always rendered so its fade-out transition plays */}
      <EnvelopeScene phase={phase} onOpen={handleOpen} onComplete={handleComplete} />

      {/* Paper slides up once envelope opens */}
      <Paper visible={showPaper}>
        <InvitationReveal />

        <PaperDivider />

        <EventDetails />

        <PaperDivider />

        <RSVPForm />

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
            fontSize: '0.65rem',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: 'var(--gold-dark)',
            marginTop: 4,
          }}>
            29 тамыз 2025 · Қостанай
          </p>
        </footer>
      </Paper>

      <AdminModal />
    </>
  );
}
