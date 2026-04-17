import { useEffect, useState } from 'react';
import './Paper.css';
import {
  OrnamentBorder,
  ShanyrakSVG,
  KoshkarMuizSVG,
} from '../OrnamentSVG/OrnamentSVG';

export default function Paper({ visible, children }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!visible) return;
    const id = requestAnimationFrame(() => requestAnimationFrame(() => setShow(true)));
    return () => cancelAnimationFrame(id);
  }, [visible]);

  if (!visible) return null;

  return (
    <div className={`paper-stage${show ? ' paper-stage--visible' : ''}`}>
      <div className="paper">
        <div className="paper__top-band">
          <OrnamentBorder row={2} height={40} />
        </div>

        <div className="paper__content">{children}</div>

        <div className="paper__bottom-band">
          <OrnamentBorder row={3} height={40} />
        </div>
      </div>
    </div>
  );
}

export function PaperDivider() {
  return (
    <div className="paper__divider">
      <div className="paper__divider-line" />
      <KoshkarMuizSVG size={44} />
      <ShanyrakSVG    size={30} />
      <KoshkarMuizSVG size={44} style={{ transform: 'scaleX(-1)' }} />
      <div className="paper__divider-line" />
    </div>
  );
}
