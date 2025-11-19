import { Link } from "react-router-dom";
import "./home.css";
import { events } from "../data/events";

export default function HomePage() {
  const upcoming = events.slice(0, 2); 

  function randomColor() {
    const colors = [
      "#FFB980", 
      "#9B88B8", 
      "#90CAF9",
      "#AED581", 
      "#F48FB1", 
      "#80DEEA", 
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  }

  return (
    <div className="home-wrap">

<nav className="top-nav">

  <div className="nav-left">
    <div className="logo">Campus Connect</div>
    <div className="nav-links">
      <Link to="/home">Home</Link>
      <Link to="/events/all">Events</Link>
    </div>
  </div>

  <Link to="/profile" className="profile-icon">👤</Link>
</nav>

      <div className="welcome-box">
        <h1>Welcome to Campus Connect, User!</h1>
        <p>Ready to find a crew for the next event?</p>
      </div>

      <div className="section-head">
        <h2>Upcoming Events</h2>
        <Link to="/events/all" className="see-all">
          See All
        </Link>
      </div>

      <div className="grid">
        {upcoming.map((e) => (
          <article key={e.id} className="card">

            <div className="card-title-section" style={{ background: randomColor() }}>
              <h3 className="event-title">{e.title}</h3>
            </div>

            <p className="muted">
              {new Date(e.date).toLocaleDateString("en-US", {
                month: "short",
                day: "2-digit",
              })}
              , {toTime(e.time)}
            </p>

            <p className="location">{e.location}</p>

            <Link to={`/event/${e.id}`} className="btn">
              Event Details
            </Link>

          </article>
        ))}
      </div>
    </div>
  );
}

function toTime(hhmm) {
  const [h, m] = hhmm.split(":").map(Number);
  const d = new Date();
  d.setHours(h, m, 0, 0);
  return d.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
}
