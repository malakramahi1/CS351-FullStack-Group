import { Link } from 'react-router-dom'
import './home.css'

const mockEvents = [
  { id: 1, title: 'Jazz Ensemble', date: 'Dec 03, 2025', time: '6:00 PM', blurb: 'Live student performance by UIC students.' },
  { id: 2, title: 'English Conversation Hour', date: 'Dec 05, 2025', time: '11:30 AM', blurb: 'Practice English and meet international friends.' },
  { id: 3, title: 'Campus Meetup', date: 'Dec 10, 2025', time: '5:00 PM', blurb: 'Casual hangout to meet classmates across departments.' },
]

export default function HomePage() {
  return (
    <div className="home-wrap">
      <header className="home-header">
        <div>
          <h1>Welcome to Campus Connect!</h1>
          <p className="sub">Ready to find your next event?</p>
        </div>
        <Link to="/events" className="see-all">See All</Link>
      </header>

      <section>
        <h2>Upcoming Events</h2>
        <div className="grid">
          {mockEvents.map(e => (
            <article key={e.id} className="card">
              <div className="card-top">
                <h3>{e.title}</h3>
                <p className="muted">{e.date} — {e.time}</p>
              </div>
              <p className="blurb">{e.blurb}</p>
              <Link to={`/event/${e.id}`} className="btn">View Details</Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}

