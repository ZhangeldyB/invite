import { useRef } from 'react';
import './EnvelopeScene.css';
import { WaxSealSVG, JiyekBorderSVG, KoshkarCornerSVG, KoshkarBorderSVG, DiamondChainSVG } from '../OrnamentSVG/OrnamentSVG';

export default function EnvelopeScene({ phase, onOpen, onComplete }) {
  const letterRef = useRef(null);

  const handleClick = () => {
    if (phase === 'envelope') onOpen();
  };

  const handleAnimEnd = (e) => {
    if (e.animationName === 'letter-rise') onComplete();
  };

  const isOpening = phase === 'opening';
  const isFading  = phase === 'open';

  return (
    <div
      className={`envelope-scene${isFading ? ' envelope-scene--fading' : ''}`}
      onClick={handleClick}
    >
      <div className="envelope-scene__bg" />

      {/* Corner koshkar muiz ornaments */}
      <div className="envelope-scene__corners">
        <KoshkarCornerSVG size={90} className="envelope-scene__corner envelope-scene__corner--tl" />
        <KoshkarCornerSVG size={90} className="envelope-scene__corner envelope-scene__corner--tr" />
        <KoshkarCornerSVG size={90} className="envelope-scene__corner envelope-scene__corner--bl" />
        <KoshkarCornerSVG size={90} className="envelope-scene__corner envelope-scene__corner--br" />
      </div>

      {/* The envelope */}
      <div className="envelope-wrapper">
        <div className={`envelope${isOpening || isFading ? ' envelope--opening' : ''}`}>

          {/* Body */}
          <div className="envelope__body">
            <div className="envelope__side-left" />
            <div className="envelope__side-right" />
            <div className="envelope__bottom-fold" />

            <div className="envelope__body-border-top">
              <JiyekBorderSVG height={10} id="bt" />
            </div>
            <div className="envelope__body-border-bottom">
              <JiyekBorderSVG height={10} id="bb" />
            </div>

            {/* Paper that rises */}
            <div
              className="envelope__letter"
              ref={letterRef}
              onAnimationEnd={handleAnimEnd}
            >
              <div className="envelope__letter-preview">
                <div style={{ color: 'var(--gold)', fontSize: '0.6em', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 6 }}>
                  Шақыру · Приглашение
                </div>
                Жангельды &amp; Самал
              </div>
            </div>
          </div>

          {/* Top flap */}
          <div className="envelope__flap-wrapper">
            <div className="envelope__flap" />

            {/* Ornaments inside the flap */}
            <div className="envelope__flap-inner">
              <KoshkarBorderSVG width="72%" height={26} id="flap" />
              <DiamondChainSVG width="60%" height={10} id="fd" />
            </div>

            {/* Wax seal at flap junction */}
            <div className="envelope__seal">
              <WaxSealSVG size={96} />
            </div>
          </div>
        </div>
      </div>

      <p className="envelope-scene__hint">
        Басу үшін нұқыңыз&nbsp;·&nbsp;Нажмите чтобы открыть
      </p>
    </div>
  );
}
