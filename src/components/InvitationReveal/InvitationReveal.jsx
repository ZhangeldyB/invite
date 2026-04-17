import './InvitationReveal.css';
import { RingsSVG } from '../OrnamentSVG/OrnamentSVG';
import { PaperDivider } from '../Paper/Paper';

const GREETING_LINES = [
  'Құрметті',
  'ағайын-туыс, бауырлыр,',
  'құда-жекжат, нағашы-жиен,',
  'бөлелер, дос-жаран,',
  'сыныптастар, әріптестер,',
  'көршілер!',
];

export default function InvitationReveal() {
  return (
    <div className="invitation">
      <div className="invitation__ornament">
        <RingsSVG size={130} />
      </div>

      <div className="invitation__greeting">
        {GREETING_LINES.map((line, i) => (
          <span key={i} className="invitation__greeting-line">{line}</span>
        ))}
      </div>

      <PaperDivider />

      <div className="invitation__text">
        <span className="invitation__line">Сіздерді ұлымыз</span>
        <span className="invitation__name">Жангельды</span>
        <span className="invitation__line">мен келініміз</span>
        <span className="invitation__name">Самалдың</span>
        <span className="invitation__line">үйлену тойының</span>
        <span className="invitation__line">қадірлі қонағы болуға шақырамыз!</span>
      </div>
    </div>
  );
}
