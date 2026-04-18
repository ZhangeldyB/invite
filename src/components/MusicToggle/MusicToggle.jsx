import { useEffect, useRef, useState } from 'react';
import './MusicToggle.css';
import { MusicNoteSVG } from '../OrnamentSVG/OrnamentSVG';

export default function MusicToggle() {
  const audioRef = useRef(null);
  // Optimistic "on" — the UI shows playing state from the start.
  // Real audio starts immediately or on the first user interaction.
  const [playing, setPlaying] = useState(true);

  // Try to autoplay on mount. If the browser blocks it (most do until the
  // user has interacted with the page), fall back to starting on the first
  // user interaction anywhere — which naturally includes the envelope click.
  useEffect(() => {
    const a = audioRef.current;
    if (!a) return;
    a.volume = 0.55;

    // Stay optimistic on failure — the interaction listener below will retry.
    a.play().catch(() => {});

    const startOnInteraction = () => {
      if (!a.paused) return;
      a.play().then(() => setPlaying(true)).catch(() => {});
    };
    const opts = { capture: true };
    window.addEventListener('pointerdown', startOnInteraction, opts);
    window.addEventListener('keydown',     startOnInteraction, opts);

    const onPlay  = () => setPlaying(true);
    const onPause = () => setPlaying(false);
    a.addEventListener('play',  onPlay);
    a.addEventListener('pause', onPause);

    return () => {
      window.removeEventListener('pointerdown', startOnInteraction, opts);
      window.removeEventListener('keydown',     startOnInteraction, opts);
      a.removeEventListener('play',  onPlay);
      a.removeEventListener('pause', onPause);
    };
  }, []);

  const toggle = () => {
    const a = audioRef.current;
    if (!a) return;
    if (a.paused) {
      a.play().then(() => setPlaying(true)).catch(() => {});
    } else {
      a.pause();
      setPlaying(false);
    }
  };

  return (
    <>
      <audio ref={audioRef} src="/sound.mpeg" loop preload="auto" />
      <button
        type="button"
        onClick={toggle}
        className={`music-toggle${playing ? ' music-toggle--playing' : ''}`}
        aria-label={playing ? 'Музыканы өшіру' : 'Музыканы қосу'}
      >
        <MusicNoteSVG size={22} />
        <span className="music-toggle__ring music-toggle__ring--1" />
        <span className="music-toggle__ring music-toggle__ring--2" />
        {!playing && <span className="music-toggle__slash" aria-hidden="true" />}
      </button>
    </>
  );
}
