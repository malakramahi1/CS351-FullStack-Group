import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import "./allevents.css";
import { events } from "../data/events";

export default function AllEvents() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("newest");


  const baseEvents = events.slice(0, 2);


  const COLORS = ["#F4A261", "#2A9D8F", "#E76F51", "#457B9D", "#E9C46A", "#6D597A"];

  const list = useMemo(() => {
    let arr = [...baseEvents];

   
    if (search.trim() !== "") {
      arr = arr.filter((e) =>
        e.title.toLowerCase().includes(search.toLowerCase())
      );
    }


    if (category !== "all") {
      arr = arr.filter((e) => e.category === category);
    }

    arr.sort((a, b) => {
      const da = new Date(a.date + " " + a.time);
      const db = new Date(b.date + " " + b.time);
      return sort === "newest" ? db - da : da - db;
    });

    return arr;
  }, [search, category, sort]);

  return (
    <div className="events-wrap">

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

      <h1 className="events-title">All Upcoming Events</h1>

      <div className="filter-bar">
        <input
          className="search-input"
          placeholder="Search by event name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="filter-controls">

          <select
            className="filter-btn"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="newest">Sort by Date (Newest)</option>
            <option value="oldest">Sort by Date (Oldest)</option>
          </select>
        </div>
      </div>

      <div className="events-grid">
        {list.map((e) => (
          <article key={e.id} className="event-card">

            <div
              className="event-card-top"
              style={{ backgroundColor: COLORS[Math.floor(Math.random() * COLORS.length)] }}
            >
              <h3>{e.title}</h3>
            </div>

            <div className="event-card-bottom">
              <p className="event-name">{e.blurbTitle || e.title}</p>

              <p className="event-meta">
                {new Date(e.date).toLocaleDateString("en-US", {
                  month: "short",
                  day: "2-digit",
                })}{" "}
                {toTime(e.time)}
              </p>

              <p className="event-location">{e.location}</p>

              <Link to={`/event/${e.id}`} className="details-btn">
                Event Details
              </Link>
            </div>

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
