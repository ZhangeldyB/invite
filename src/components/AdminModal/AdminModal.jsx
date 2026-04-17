import { useEffect, useRef, useState } from 'react';
import './AdminModal.css';
import { useKeyCombo } from '../../hooks/useKeyCombo';
import { fetchSubmissions } from '../../utils/api';

function formatDate(iso) {
  if (!iso) return '—';
  return new Date(iso).toLocaleString('kk-KZ', {
    day: '2-digit', month: '2-digit', year: 'numeric',
    hour: '2-digit', minute: '2-digit',
  });
}

export default function AdminModal() {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState('idle');
  const [submissions, setSubmissions] = useState([]);
  const overlayRef = useRef(null);

  const toggle = () => setOpen((v) => !v);
  useKeyCombo(toggle);

  useEffect(() => {
    if (!open) return;
    setStatus('loading');
    fetchSubmissions()
      .then((data) => {
        setSubmissions(data.submissions ?? []);
        setStatus('done');
      })
      .catch(() => setStatus('error'));
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const handler = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="admin-overlay"
      ref={overlayRef}
      onClick={(e) => { if (e.target === overlayRef.current) setOpen(false); }}
    >
      <div className="admin-modal" role="dialog" aria-modal="true" aria-label="Admin panel">
        <div className="admin-modal__header">
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 0 }}>
            <h2 className="admin-modal__title">Растаулар</h2>
            {status === 'done' && (
              <span className="admin-modal__count">({submissions.length})</span>
            )}
          </div>
          <button className="admin-modal__close" onClick={() => setOpen(false)} aria-label="Close">✕</button>
        </div>

        <div className="admin-modal__body">
          {status === 'loading' && <p className="admin-modal__loading">Жүктелуде...</p>}
          {status === 'error' && <p className="admin-modal__error">Қате орын алды. Қайталап көріңіз.</p>}
          {status === 'done' && submissions.length === 0 && (
            <p className="admin-modal__empty">Әзірше растаулар жоқ</p>
          )}
          {status === 'done' && submissions.length > 0 && (
            <table className="admin-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Аты</th>
                  <th>Қатысу</th>
                  <th>Қонақтар</th>
                  <th>Уақыты</th>
                </tr>
              </thead>
              <tbody>
                {submissions.map((s, i) => (
                  <tr key={s._id ?? i}>
                    <td>{i + 1}</td>
                    <td>{s.primaryName}</td>
                    <td>
                      <span className="admin-table__badge">
                        {s.attendance === 'solo' ? 'Жалғыз' : 'Бірге'}
                      </span>
                    </td>
                    <td>
                      {s.guests && s.guests.length > 0 ? (
                        <ul className="admin-table__guest-list">
                          {s.guests.map((g, j) => <li key={j}>{g.name}</li>)}
                        </ul>
                      ) : '—'}
                    </td>
                    <td>{formatDate(s.submittedAt)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}
