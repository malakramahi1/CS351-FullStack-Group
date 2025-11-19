import { useEffect, useState } from "react";
import { fetchEvents } from "../api";

export default function Events() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchEvents()
      .then((data) => {
        if (Array.isArray(data)) {
          setItems(data);
        } else {
          console.error("Unexpected events payload:", data);
          setItems([]);
        }
      })
      .catch((err) => {
        console.error(err);
        setItems([]);
      });
  }, []);

  return (
    <div style={{ maxWidth: 720, margin: "24px auto", padding: "0 16px" }}>
      <h2 style={{ marginBottom: 16 }}>Events</h2>
      <ul>
        {items.map((e) => (
          <li
            key={e.id}
            style={{ padding: "10px 0", borderBottom: "1px solid #eee" }}
          >
            <strong>{e.title || e.name}</strong> — <span>{e.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

