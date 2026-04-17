import { useEffect, useState } from 'react';
import './Paper.css';
import {
  SparkleVerticalBorderSVG,
  SparkleBorderSVG,
  SparkleClusterSVG,
  RingsSVG,
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
        <div className="paper__border-left">
          <SparkleVerticalBorderSVG width={22} height="100%" count={18} />
        </div>
        <div className="paper__border-right">
          <SparkleVerticalBorderSVG width={22} height="100%" count={18} />
        </div>

        <div className="paper__top-band">
          <SparkleBorderSVG width="100%" height={22} count={13} className="paper__band" />
        </div>

        <div className="paper__content">{children}</div>

        <div className="paper__bottom-band">
          <SparkleBorderSVG width="100%" height={22} count={13} className="paper__band" />
        </div>
      </div>
    </div>
  );
}

export function PaperDivider() {
  return (
    <div className="paper__divider">
      <SparkleClusterSVG size={54} style={{ opacity: 0.75 }} />
      <RingsSVG size={120} />
      <SparkleClusterSVG size={54} style={{ opacity: 0.75, transform: 'scaleX(-1)' }} />
    </div>
  );
}
