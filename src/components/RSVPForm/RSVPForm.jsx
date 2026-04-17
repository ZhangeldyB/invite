import { useState } from 'react';
import './RSVPForm.css';
import { postRSVP } from '../../utils/api';

export default function RSVPForm() {
  const [name, setName] = useState('');
  const [attendance, setAttendance] = useState('solo');
  const [guestCount, setGuestCount] = useState(0);
  const [guestNames, setGuestNames] = useState(['', '', '', '', '']);
  const [status, setStatus] = useState('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const showGuestFields = attendance === 'with_guest' && guestCount > 0;

  const updateGuest = (i, val) =>
    setGuestNames((prev) => { const n = [...prev]; n[i] = val; return n; });

  const handleAttendance = (val) => {
    setAttendance(val);
    if (val === 'solo') setGuestCount(0);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    setStatus('loading');
    setErrorMsg('');
    try {
      const guests = attendance === 'with_guest'
        ? guestNames.slice(0, guestCount).filter(Boolean).map((n) => ({ name: n }))
        : [];
      await postRSVP({ primaryName: name.trim(), attendance, guests });
      setStatus('success');
    } catch (err) {
      setStatus('error');
      setErrorMsg(err.message);
    }
  };

  if (status === 'success') {
    return (
      <div className="rsvp">
        <div className="rsvp__success">
          <div className="rsvp__success-icon">🌸</div>
          <h3 className="rsvp__success-title">Растауыңыз қабылданды!</h3>
          <p className="rsvp__success-sub">Сізді күтеміз!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="rsvp">
      <div className="rsvp__header">
        <h2 className="rsvp__title">Қатысуды растау</h2>
      </div>

      <form className="rsvp__form" onSubmit={handleSubmit}>
        <div className="rsvp__field">
          <label className="rsvp__label">Аты-жөні</label>
          <input
            className="rsvp__input"
            type="text"
            placeholder="Аты-жөніңізді жазыңыз..."
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="rsvp__field">
          <label className="rsvp__label">Қатысу</label>
          <div className="rsvp__radio-group">
            <label className="rsvp__radio-label">
              <input type="radio" name="attendance" value="solo"
                checked={attendance === 'solo'} onChange={() => handleAttendance('solo')} />
              Келемін
            </label>
            <label className="rsvp__radio-label">
              <input type="radio" name="attendance" value="with_guest"
                checked={attendance === 'with_guest'} onChange={() => handleAttendance('with_guest')} />
              Бірге келемін
            </label>
          </div>
        </div>

        {attendance === 'with_guest' && (
          <div className="rsvp__field">
            <label className="rsvp__label">Қосымша қонақтар</label>
            <div className="rsvp__count-group">
              {[1, 2, 3, 4, 5].map((n) => (
                <label key={n} className="rsvp__count-label">
                  <input type="radio" name="guestCount" value={n}
                    checked={guestCount === n} onChange={() => setGuestCount(n)} />
                  {n}
                </label>
              ))}
            </div>
          </div>
        )}

        <div className={`rsvp__guest-fields${showGuestFields ? ' rsvp__guest-fields--visible' : ''}`}>
          <div className="rsvp__field">
            <label className="rsvp__label">Қонақтар аты</label>
            <div className="rsvp__guest-list">
              {Array.from({ length: guestCount }, (_, i) => (
                <div key={i} className="rsvp__guest-input-wrapper">
                  <span className="rsvp__guest-num">{i + 1}.</span>
                  <input
                    className="rsvp__input"
                    type="text"
                    placeholder={`${i + 1}-ші қонақ`}
                    value={guestNames[i]}
                    onChange={(e) => updateGuest(i, e.target.value)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {status === 'error' && <p className="rsvp__error">{errorMsg}</p>}

        <button type="submit" className="rsvp__submit" disabled={status === 'loading'}>
          <span>{status === 'loading' ? 'Жіберілуде...' : 'Растау'}</span>
        </button>
      </form>
    </div>
  );
}
