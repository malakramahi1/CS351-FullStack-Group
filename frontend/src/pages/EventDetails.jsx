import { useParams, Link, useNavigate } from "react-router-dom";
import "./event.css";
import { getEventById } from "../data/events";

export default function EventDetails() {
  const { id } = useParams();
  const e = getEventById(id);
  const nav = useNavigate();

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


      <div className="event-hero" style={{ backgroundColor: randomColor() }}>
        <h1 className="hero-title">{e.title}</h1>
      </div>

      <div className="event-meta">

        <h2 className="event-name">{e.blurbTitle}</h2>

        <div className="event-info-column">
          <p><strong>Date:</strong> {new Date(e.date).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric"
          })}</p>

          <p><strong>Time:</strong> {toTime(e.time)}</p>

          <p><strong>Location:</strong> {e.location}</p>
        </div>

      </div>

      <section className="event-panel">
        <h2>About this Event</h2>
        <p>{e.description}</p>
      </section>

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

function toTime(hhmm) {
  const [h, m] = hhmm.split(":").map(Number);
  const d = new Date();
  d.setHours(h, m, 0, 0);
  return d.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
}
