import { useParams, Link, useNavigate } from "react-router-dom";
import "./event.css";
import { getEventById } from "../data/events";

export default function EventDetails() {
  const { id } = useParams();
  const e = getEventById(id);
  const nav = useNavigate();

  if (!e) {
    return (
      <div className="event-wrap">
        <h1>Event is not found</h1>
        <Link to="/events/all" className="btn">Back to Events</Link>
      </div>
    );
  }

  return (
    <div className="event-wrap">

      {/* Top Navigation */}
      <nav className="top-nav">
        <div className="logo">Campus Connect</div>
        <div className="nav-links">
          <Link to="/home">Home</Link>
          <Link to="/events/all">Events</Link>
        </div>
  <Link to="/profile" className="profile-icon">👤</Link>
      </nav>

      {/* Hero Title Banner */}
      <div className="event-hero" style={{ backgroundColor: e.color }}>
        <h1 className="hero-title">{e.title}</h1>
      </div>

      {/* Event Meta Section */}
      <div className="event-meta">

        {/* Event Full Name (title + year) */}
        <h2 className="event-name">
          {e.blurbTitle || e.title}
        </h2>

        {/* Date | Time — Location */}
        <div className="event-info-row">
          <span>
            {new Date(e.date).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric"
            })}
          </span>

          <span> | </span>

          <span>{toTime(e.time)}</span>

          <span> — </span>

          <span>{e.location}</span>
        </div>
      </div>

      {/* About Section */}
      <section className="event-panel">
        <h2>About this Event</h2>
        <p>{e.description}</p>
      </section>

      {/* Find Friends Button */}
      <div className="find-friends-wrap">
        <button
          className="find-friends-btn"
          onClick={() => nav(`/event/${id}/find-friends`)}
        >
          Find Friends for this Event
        </button>
      </div>

    </div>
  );
}

// Format time
function toTime(hhmm) {
  const [h, m] = hhmm.split(":").map(Number);
  const d = new Date();
  d.setHours(h, m, 0, 0);
  return d.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
}
