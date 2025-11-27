import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { getEventById } from "../data/events";
import { fetchAttendees, joinEventAttendees } from "../api";
import "./findfriends.css";

export default function FindFriends() {
  const { id } = useParams();
  const e = getEventById(id);
  const nav = useNavigate();
  const [attendees, setAttendees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [joining, setJoining] = useState(false);

  useEffect(() => {
    if (!id) return;
    setLoading(true);
    fetchAttendees(id)
      .then((res) => {
        if (!res.ok) {
          console.error("Failed to load attendees", res.data);
          setAttendees([]);
          return;
        }
        setAttendees(res.data.attendees || []);
      })
      .catch((err) => {
        console.error("Error loading attendees", err);
        setAttendees([]);
      })
      .finally(() => setLoading(false));
  }, [id]);

  function handleJoin() {
    const stored = (() => {
      try {
        return JSON.parse(localStorage.getItem("userProfile"));
      } catch (err) {
        console.warn("Invalid profile data", err);
        return null;
      }
    })();
    if (!stored || !stored.id) {
      alert("Please log in before joining an event.");
      nav("/login");
      return;
    }

    setJoining(true);
    const displayName = [stored.firstName, stored.lastName]
      .filter(Boolean)
      .join(" ")
      .trim() || stored.username || stored.email;

    joinEventAttendees(id, {
      userId: stored.id,
      displayName,
    })
      .then((res) => {
        if (!res.ok) {
          alert("Unable to join event right now. Please try again.");
          return;
        }
        setAttendees(res.data.attendees || []);
      })
      .catch((err) => {
        console.error("Unable to join event", err);
        alert("Unexpected error adding you to the event.");
      })
      .finally(() => setJoining(false));
  }

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
        <div className="nav-left">
          <div className="logo">Campus Connect</div>
          <div className="nav-links">
            <Link to="/events/all">Events</Link>
          </div>
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

        <button className="going-btn" onClick={handleJoin} disabled={joining}>
          I'm Going!
        </button>
        <p className="muted">
          {joining ? "Saving your RSVP..." : "We’ll share your name with other attendees"}
        </p>
      </section>

      {/* Who’s Going panel */}
      <section className="ff-panel">
        <h2>Who’s Going ({attendees.length})</h2>

        {loading ? (
          <p>Loading attendees…</p>
        ) : attendees.length === 0 ? (
          <p>No one has RSVP’d yet. Be the first!</p>
        ) : (
          <div className="going-grid">
            {attendees.map((person) => (
              <div className="going-card" key={person.userId}>
                {person.displayName}
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
