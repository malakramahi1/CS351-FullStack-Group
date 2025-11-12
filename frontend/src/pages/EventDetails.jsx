import { useParams, Link } from 'react-router-dom'
import './event.css'

const DATA = {
  1: {
    title: 'Jazz Ensemble',
    date: 'Dec 03, 2025',
    time: '6:00 PM',
    location: 'UIC Theater',
    description: 'Join the UIC Jazz Ensemble for an evening of live performances by talented students.',
  },
  2: {
    title: 'English Conversation Hour',
    date: 'Dec 05, 2025',
    time: '11:30 AM',
    location: 'Student Center East',
    description: 'Practice English with speakers of other languages and make international friends!',
  },
  3: {
    title: 'Campus Meetup',
    date: 'Dec 10, 2025',
    time: '5:00 PM',
    location: 'Quad Lawn',
    description: 'Casual hangout to meet classmates across departments.',
  }
}

export default function EventDetails() {
  const { id } = useParams()
  const e = DATA[id]

  if (!e) {
    return (
      <div className="event-wrap">
        <h1>Event not found</h1>
        <Link to="/events" className="btn">Back to Events</Link>
      </div>
    )
  }

  return (
    <div className="event-wrap">
      <div className="event-hero">
        <h1>{e.title}</h1>
      </div>

      <div className="meta">
        <div><strong>Date:</strong> {e.date}</div>
        <div><strong>Time:</strong> {e.time}</div>
        <div><strong>Location:</strong> {e.location}</div>
      </div>

      <section className="panel">
        <h2>About this Event</h2>
        <p>{e.description}</p>
      </section>

      <div className="actions">
        <Link to="/events" className="btn">Back to Events</Link>
        <button className="btn" onClick={() => alert('Find People for this Event (coming soon)')}>Find People for this Event</button>
      </div>
    </div>
  )
}

