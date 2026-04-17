import './EventDetails.css';
import {
  CornerSparkleSVG,
  CalendarIconSVG,
  ClockIconSVG,
  LocationPinSVG,
  BuildingIconSVG,
  MapIconSVG,
} from '../OrnamentSVG/OrnamentSVG';
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
        <CornerSparkleSVG size={38} className="event-details__corner event-details__corner--tl" />
        <CornerSparkleSVG size={38} className="event-details__corner event-details__corner--tr" />
        <CornerSparkleSVG size={38} className="event-details__corner event-details__corner--bl" />
        <CornerSparkleSVG size={38} className="event-details__corner event-details__corner--br" />

        <div className="event-details__cards">
          <EventCard icon={<CalendarIconSVG   size={40} />} label="Күні · Дата"             value="29 тамыз 2025"  valueSub="29 августа 2025" />
          <EventCard icon={<ClockIconSVG      size={40} />} label="Уақыты · Время"          value="16:00" />
          <EventCard icon={<LocationPinSVG    size={40} />} label="Қала · Город"            value="Қостанай"       valueSub="Костанай" />
          <EventCard icon={<BuildingIconSVG   size={40} />} label="Мейрамхана · Ресторан"   value="Астам" />
        </div>

        <a
          href="https://2gis.kz/kostanay/search/%D0%90%D1%81%D1%82%D0%B0%D0%BC"
          target="_blank"
          rel="noopener noreferrer"
          className="event-details__map-btn"
        >
          <MapIconSVG size={18} />
          <span>2GIS картасында · Открыть в 2GIS</span>
        </a>
      </div>
    </div>
  );
}
