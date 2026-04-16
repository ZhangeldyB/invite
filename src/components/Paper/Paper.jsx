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
  const [rising, setRising] = useState(false);
  const stageRef = useRef(null);

  // Trigger the rise transition one frame after mount
  useEffect(() => {
    if (!visible) return;
    const id = requestAnimationFrame(() => {
      requestAnimationFrame(() => setRising(true));
    });
    return () => cancelAnimationFrame(id);
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      className={`paper-stage${rising ? ' paper-stage--rising' : ''}`}
      ref={stageRef}
    >
      <div className="paper">
        {/* Side borders: koshkar muiz vertical scroll */}
        <div className="paper__border-left">
          <KoshkarVerticalBorderSVG width={38} height="100%" id="left" />
        </div>
        <div className="paper__border-right">
          <KoshkarVerticalBorderSVG width={38} height="100%" id="right" />
        </div>

        {/* Top decorative band */}
        <div className="paper__top-band">
          <JiyekBorderSVG width="100%" height={16} id="pt" className="paper__top-border" />
          <DiamondChainSVG width="80%" height={12} id="ptd" className="paper__top-diamond" />
        </div>

        {/* All page content lives here */}
        <div className="paper__content">
          {children}
        </div>

        {/* Bottom decorative band */}
        <div className="paper__bottom-band">
          <DiamondChainSVG width="80%" height={12} id="pbd" className="paper__bottom-diamond" />
          <JiyekBorderSVG width="100%" height={16} id="pb" className="paper__bottom-border" />
        </div>
      </div>
    </div>
  );
}

/* Exported helper divider used between sections inside the paper */
export function PaperDivider() {
  return (
    <div className="paper__divider">
      <div className="paper__divider-line" />
      <KoshkarMuizSVG size={36} />
      <ShanyrakSVG size={28} />
      <KoshkarMuizSVG size={36} style={{ transform: 'scaleX(-1)' }} />
      <div className="paper__divider-line" />
    </div>
  );
}
