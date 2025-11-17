import { useEffect, useState } from "react";

async function getEvents() {
  return [
    { id: 1, title: "Campus Meetup", date: "2025-10-25" },
    { id: 2, title: "Hack Night", date: "2025-10-28" }
  ];
}

export default function Events() {
  const [items, setItems] = useState([]);
  useEffect(() => { getEvents().then(setItems); }, []);
  return (
    <div style={{maxWidth:720, margin:"24px auto", padding:"0 16px"}}>
      <h2 style={{marginBottom:16}}>Events</h2>
      <ul>
        {items.map(e => (
          <li key={e.id} style={{padding:"10px 0", borderBottom:"1px solid #eee"}}>
            <strong>{e.title}</strong> — <span>{e.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

