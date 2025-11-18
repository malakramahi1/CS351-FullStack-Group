import { useParams, Link, useNavigate } from 'react-router-dom'
import './event.css'
import { getEventById } from '../data/events'

export default function EventDetails() {
  const { id } = useParams()
  const e = getEventById(id)
  const nav = useNavigate()

  if (!e) {
    return (
      <div className="event-wrap">
        <h1>Event not found</h1>
        <Link to="/events/all" className="btn">Back to Events</Link>
      </div>
    )
  }

  return (
    <div className="event-wrap">
      <div className="event-hero green">
        <h1>{e.title}</h1>
      </div>

      <div className="meta">
        <div><strong>Date:</strong> {new Date(e.date).toLocaleDateString('en-US',{month:'long', day:'numeric', year:'numeric'})}</div>
        <div><strong>Time:</strong> {toTime(e.time)}</div>
        <div><strong>Location:</strong> {e.location}</div>
      </div>

      <section className="panel">
        <h2>About this Event</h2>
        <p>{e.description}</p>
      </section>

      <div className="actions">
        <Link to="/events/all" className="btn">Back to Events</Link>
        <button className="btn" onClick={() => nav(`/event/${id}/find-friends`)}>Find People for this Event</button>
      </div>
    </div>
  )
}

function toTime(hhmm) {
  const [h, m] = hhmm.split(':').map(Number);
  const d = new Date(); d.setHours(h, m, 0, 0);
  return d.toLocaleTimeString([], { hour:'numeric', minute:'2-digit' });
}

