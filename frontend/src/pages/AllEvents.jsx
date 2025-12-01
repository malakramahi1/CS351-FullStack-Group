import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import "./allevents.css";
import { events } from "../data/events";

export default function AllEvents() {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("newest");

  const list = useMemo(() => {
    let arr = [...events];

    //
    // 🔍 SIMPLE TEXT SEARCH (title + readable date + numeric date)
    //
    if (search.trim() !== "") {
      const txt = search.toLowerCase();

      arr = arr.filter((e) => {
        // TITLE
        const titleMatch = e.title.toLowerCase().includes(txt);

        // READABLE DATE (Nov 19)
        const readableDate = new Date(e.date)
          .toLocaleDateString("en-US", { month: "short", day: "numeric" })
          .toLowerCase();

        const readableMatch = readableDate.includes(txt);

        // NUMERIC DATE (2025/11/19)
        const numericDate = e.date.replace(/-/g, "/").toLowerCase();
        const numericMatch = numericDate.includes(txt);

        return titleMatch || readableMatch || numericMatch;
      });
    }

    //
    // SORT ONLY (category filter removed!)
    //
    arr.sort((a, b) => {
      const da = localDate(a.date, a.time);
      const db = localDate(b.date, b.time);
      return sort === "newest" ? db - da : da - db;
    });

    return arr;
  }, [search, sort]);

  return (
    <div className="events-wrap">

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

      <h1 className="events-title">All Upcoming Events</h1>

      {/* Search + Sort */}
      <div className="filter-bar">
        <input
          className="search-input"
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

      {/* Events Grid */}
      <div className="events-grid">
        {list.length === 0 ? (
          <p className="no-events-message">No events found matching your search.</p>
        ) : (
          list.map((e) => (
            <article key={e.id} className="event-card">
              <div
                className="event-card-top"
                style={{ backgroundColor: e.color }}
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
          ))
        )}
      </div>

    </div>
  );
}


// LOCAL DATE (no timezone shift)
function localDate(dateStr, timeStr) {
  const [y, m, d] = dateStr.split("-").map(Number);
  const [hh, mm] = timeStr.split(":").map(Number);
  return new Date(y, m - 1, d, hh, mm, 0, 0);
}


// TIME FORMATTER
function toTime(hhmm) {
  const [h, m] = hhmm.split(":").map(Number);
  const d = new Date(2000, 0, 1, h, m, 0, 0);
  return d.toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
  });
}
