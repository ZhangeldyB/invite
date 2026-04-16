const BASE = import.meta.env.VITE_API_BASE_URL ?? '';

export async function postRSVP(data) {
  const res = await fetch(`${BASE}/api/rsvp`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.error ?? 'Қате орын алды / Произошла ошибка');
  }
  return res.json();
}

export async function fetchSubmissions() {
  const secret = import.meta.env.VITE_ADMIN_SECRET ?? 'zs2025admin';
  const res = await fetch(`${BASE}/api/admin?secret=${encodeURIComponent(secret)}`);
  if (!res.ok) throw new Error('Unauthorized');
  return res.json();
}
