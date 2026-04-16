import './EventDetails.css';
import { KoshkarCornerSVG } from '../OrnamentSVG/OrnamentSVG';
import { useScrollReveal } from '../../hooks/useScrollReveal';

function EventCard({ icon, label, value, valueSub }) {
  const ref = useScrollReveal(0.05);
  return (
    <div className="event-card" ref={ref}>
      <div className="event-card__icon">{icon}</div>
      <div className="event-card__label">{label}</div>
      <div className="event-card__value">{value}</div>
      {valueSub && <div className="event-card__value-sub">{valueSub}</div>}
    </div>
  );
}

export default function EventDetails() {
  return (
    <div className="event-details">
      <div className="event-details__header">
        <h2 className="event-details__title">Той мәліметтері</h2>
        <p className="event-details__title-sub">Детали торжества</p>
      </div>

      <div className="event-details__frame">
        <KoshkarCornerSVG size={38} className="event-details__corner event-details__corner--tl" />
        <KoshkarCornerSVG size={38} className="event-details__corner event-details__corner--tr" />
        <KoshkarCornerSVG size={38} className="event-details__corner event-details__corner--bl" />
        <KoshkarCornerSVG size={38} className="event-details__corner event-details__corner--br" />

        <div className="event-details__cards">
          <EventCard icon="📅" label="Күні · Дата"       value="29 тамыз 2025"   valueSub="29 августа 2025" />
          <EventCard icon="🕕" label="Уақыты · Время"    value="18:00"           valueSub="Бастап · Начало" />
          <EventCard icon="📍" label="Қала · Город"      value="Қостанай"        valueSub="Костанай" />
          <EventCard icon="🏛️" label="Мейрамхана · Ресторан" value="Астам"      valueSub="Ресторан Астам" />
        </div>

        <a
          href="https://2gis.kz/kostanay/search/%D0%90%D1%81%D1%82%D0%B0%D0%BC"
          target="_blank"
          rel="noopener noreferrer"
          className="event-details__map-btn"
        >
          <span>🗺️&nbsp; 2GIS картасында · Открыть в 2GIS</span>
        </a>
      </div>
    </div>
  );
}
