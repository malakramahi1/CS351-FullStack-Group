# Frontend ↔ Backend Plan (Milestone 3)

## What it means
The frontend is the React website that shows pages and buttons.  
The backend is the Python Flask server that sends and receives data.  
They talk to each other through simple URLs called endpoints.

---

## Endpoints we use

| Purpose | Type | URL | Example |
|----------|------|-----|---------|
| Get all events | GET | /api/events | → `[{"id":1,"title":"Campus Meetup","date":"2025-10-25"}]` |
| Log a user in | POST | /api/login | `{ "email":"a@b.com","password":"123" }` → `{ "ok": true }` |
| Create an account | POST | /api/register | `{ "name":"Alex","email":"a@b.com","password":"123" }` → `{ "ok": true }` |

---

## How the frontend uses these
- `/events` page shows data from **GET /api/events**  
- `/login` page will send login info to **POST /api/login**  
- `/register` page will send sign-up info to **POST /api/register**

---

## What happens now
For Milestone 3, the frontend just uses **mock data** to show events.  
Later, we’ll connect it to the real backend.

To switch later, replace the mock call in `src/pages/Events.jsx` with:

```js
fetch("/api/events").then(r => r.json())

