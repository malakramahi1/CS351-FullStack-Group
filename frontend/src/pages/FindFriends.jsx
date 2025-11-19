import { useParams, Link, useNavigate } from "react-router-dom";
import { getEventById } from "../data/events";
import "./findfriends.css";

export default function FindFriends() {
  const { id } = useParams();
  const e = getEventById(id);
  const nav = useNavigate();

  if (!e) {
    return (
      <div className="event-wrap">
        <h1>Event not found</h1>
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

      {/* Back Link */}
      <div className="back-link-wrap">
        <Link to={`/event/${id}`} className="back-link">
          ← Back to Event Details
        </Link>
      </div>

      {/* Page Title */}
      <h1 className="ff-title">Find Friends: {e.blurbTitle || e.title}</h1>

      {/* Are you going panel */}
      <section className="ff-panel">
        <h2>Are you going?</h2>
        <p>Click the button to add yourself to the list of attendees</p>

        <button className="going-btn">
          I'm Going!
        </button>
      </section>

      {/* Who’s Going panel */}
      <section className="ff-panel">
        <h2>Who’s Going (3)</h2>

        <div className="going-grid">
          <div className="going-card">Om P.</div>
          <div className="going-card">Dev K.</div>
          <div className="going-card">Mandar P.</div>
        </div>
      </section>
    </div>
  );
}
