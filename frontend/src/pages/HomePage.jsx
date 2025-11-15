import { Link } from 'react-router-dom'
import './home.css'
import { events } from '../data/events'

export default function HomePage() {
  const upcoming = events.slice(0, 3);

  return (
    <div className="home-wrap">
      <header className="home-header">
        <div>
          <h1>Welcome to Campus Connect!</h1>
          <p className="sub">Ready to find your next event?</p>
        </div>
        <Link to="/events/all" className="see-all">See All</Link>
      </header>

      <section>
        <h2>Upcoming Events</h2>
        <div className="grid">
          {upcoming.map(e => (
            <article key={e.id} className="card">
              <div className="card-top">
                <h3>{e.title}</h3>
                <p className="muted">{new Date(e.date).toLocaleDateString('en-US', { month:'short', day:'2-digit', year:'numeric' })} — {toTime(e.time)}</p>
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

function toTime(hhmm) {
  const [h, m] = hhmm.split(':').map(Number);
  const d = new Date(); d.setHours(h, m, 0, 0);
  return d.toLocaleTimeString([], { hour:'numeric', minute:'2-digit' });
}

