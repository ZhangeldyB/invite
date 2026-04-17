import './InvitationReveal.css';
import { RingsSVG } from '../OrnamentSVG/OrnamentSVG';

const kazakhLine = 'Сіздерді үйлену тойына шақырамыз';
const words = kazakhLine.split(' ');

export default function InvitationReveal() {
  return (
    <div className="invitation">
      <div className="invitation__ornament">
        <RingsSVG size={130} />
      </div>

      <p className="invitation__eyebrow">Шақыру&nbsp;&nbsp;·&nbsp;&nbsp;Приглашение</p>

      <div className="invitation__text">
        {words.map((word, i) => (
          <span
            key={i}
            className="word"
            style={{ animationDelay: `${0.55 + i * 0.1}s` }}
          >
            {word}
          </span>
        ))}
      </div>

      <div className="invitation__names">
        Жангельды &amp; Самал
      </div>

      <p className="invitation__sub">Жангельды и Самал приглашают вас на свадьбу</p>


    </div>
  );
}
