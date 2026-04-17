import { useRef } from 'react';
import './EnvelopeScene.css';
import {
  WaxSealSVG,
  CornerSparkleSVG,
  SparkleBorderSVG,
  SparkleClusterSVG,
} from '../OrnamentSVG/OrnamentSVG';

export default function EnvelopeScene({ phase, onOpen, onComplete }) {
  const perspRef = useRef(null);

  const handleClick = () => {
    if (phase === 'envelope') onOpen();
  };

  // onComplete fires when the zoom-rush animation ends
  const handleAnimEnd = (e) => {
    if (e.animationName === 'envelope-rush') onComplete();
  };

  const isOpening = phase === 'opening' || phase === 'open';

  return (
    <div
      className="envelope-scene"
      onClick={handleClick}
      style={{ visibility: phase === 'gone' ? 'hidden' : 'visible' }}
    >
      <div className="envelope-scene__bg" />

      {/* Full-page corner floral ornaments */}
      <div className="envelope-scene__corners">
        <CornerSparkleSVG size={100} className="envelope-scene__corner envelope-scene__corner--tl" />
        <CornerSparkleSVG size={100} className="envelope-scene__corner envelope-scene__corner--tr" />
        <CornerSparkleSVG size={100} className="envelope-scene__corner envelope-scene__corner--bl" />
        <CornerSparkleSVG size={100} className="envelope-scene__corner envelope-scene__corner--br" />
      </div>

      {/* Perspective + zoom target */}
      <div
        className={`envelope-perspective${isOpening ? ' envelope--opening' : ''}`}
        ref={perspRef}
        onAnimationEnd={handleAnimEnd}
      >
        {/* The envelope card */}
        <div className="envelope-card">

          {/* CENTER PANEL: visible through the 4 open flaps */}
          <div className="envelope__center">
            <SparkleBorderSVG width="72%" height={24} id="ec1" />
            <p className="envelope__center-eyebrow">Шақыру</p>
            <p className="envelope__center-text">Жангельды &amp; Самал</p>
            <p className="envelope__center-footer">Үйлену той</p>
            <SparkleBorderSVG width="72%" height={24} id="ec2" />
          </div>

          {/* TOP FLAP — triangle pointing to center-bottom */}
          <div className="envelope__flap envelope__flap--top">
            <div className="envelope__flap-content">
              <SparkleClusterSVG size={48} />
            </div>
          </div>

          {/* BOTTOM FLAP */}
          <div className="envelope__flap envelope__flap--bottom" />

          {/* LEFT FLAP */}
          <div className="envelope__flap envelope__flap--left" />

          {/* RIGHT FLAP */}
          <div className="envelope__flap envelope__flap--right" />

          {/* WAX SEAL — centered on card, above all flaps */}
          <div className="envelope__seal">
            <WaxSealSVG size={104} />
          </div>

        </div>
      </div>

      <p className="envelope-scene__hint">
        Басу үшін нұқыңыз
      </p>
    </div>
  );
}
