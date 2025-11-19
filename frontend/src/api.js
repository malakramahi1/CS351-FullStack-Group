const API_BASE = "http://127.0.0.1:5001";   // Flask backend runs here

// REGISTER
export async function registerUser(form) {
  const body = {
    username: form.name,        // backend expects "username"
    email: form.email,
    password: form.password,
    major: form.major,
  };

  const res = await fetch(`${API_BASE}/api/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  const data = await res.json().catch(() => ({}));
  return { ok: res.ok, data };
}

// LOGIN
export async function loginUser(email, password) {
  const body = { email, password };   // backend accepts email or username

  const res = await fetch(`${API_BASE}/api/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  const data = await res.json().catch(() => ({}));
  return { ok: res.ok, data };
}

// EVENTS — GET
export async function fetchEvents() {
  const res = await fetch(`${API_BASE}/events`);
  return res.json();
}

// EVENTS — POST (optional, for later if you add event creation)
export async function createEvent(evt) {
  const res = await fetch(`${API_BASE}/events`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(evt),
  });
  return res.json();
}

