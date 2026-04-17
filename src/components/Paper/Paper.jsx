import { useEffect, useRef, useState } from 'react';
import './Paper.css';
import {
  KoshkarVerticalBorderSVG,
  JiyekBorderSVG,
  DiamondChainSVG,
  ShanyrakSVG,
  KoshkarMuizSVG,
} from '../OrnamentSVG/OrnamentSVG';

export default function Paper({ visible, children }) {
  const [show, setShow] = useState(false);

  // One RAF to ensure the CSS transition triggers after mount
  useEffect(() => {
    if (!visible) return;
    const id = requestAnimationFrame(() => requestAnimationFrame(() => setShow(true)));
    return () => cancelAnimationFrame(id);
  }, [visible]);

  if (!visible) return null;

  return (
    <div className={`paper-stage${show ? ' paper-stage--visible' : ''}`}>
      <div className="paper">
        {/* Side koshkar muiz borders */}
        <div className="paper__border-left">
          <KoshkarVerticalBorderSVG width={36} height="100%" id="pl" />
        </div>
        <div className="paper__border-right">
          <KoshkarVerticalBorderSVG width={36} height="100%" id="pr" />
        </div>

        {/* Top ornament band */}
        <div className="paper__top-band">
          <JiyekBorderSVG    width="100%" height={15} id="pt1" className="paper__band-border" />
          <DiamondChainSVG   width="80%"  height={11} id="pt2" className="paper__band-chain" />
        </div>

        {/* All content */}
        <div className="paper__content">
          {children}
        </div>

        {/* Bottom ornament band */}
        <div className="paper__bottom-band">
          <DiamondChainSVG   width="80%"  height={11} id="pb1" className="paper__band-chain" />
          <JiyekBorderSVG    width="100%" height={15} id="pb2" className="paper__band-border" />
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
