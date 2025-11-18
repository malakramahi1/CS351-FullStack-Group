import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import './home.css'
import { events } from '../data/events'

export default function AllEvents() {
  const [filter, setFilter] = useState('all');   // all | on | off
  const [sort, setSort] = useState('date');      // date

  const list = useMemo(() => {
    let arr = [...events];
    if (filter !== 'all') arr = arr.filter(e => e.campus === filter);
    if (sort === 'date') arr.sort((a,b) => a.date.localeCompare(b.date) || a.time.localeCompare(b.time));
    return arr;
  }, [filter, sort]);

  return (
    <div className="home-wrap">
      <header className="home-header">
        <h1>All Upcoming Events</h1>
        <div style={{display:'flex', gap:12}}>
          <select value={filter} onChange={(e)=>setFilter(e.target.value)}>
            <option value="all">All</option>
            <option value="on">On Campus</option>
            <option value="off">Off Campus</option>
          </select>
          <select value={sort} onChange={(e)=>setSort(e.target.value)}>
            <option value="date">Sort by Date</option>
          </select>
        </div>
      </header>

      <div className="grid">
        {list.map(e => (
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
    </div>
  )
}

function toTime(hhmm) {
  const [h, m] = hhmm.split(':').map(Number);
  const d = new Date(); d.setHours(h, m, 0, 0);
  return d.toLocaleTimeString([], { hour:'numeric', minute:'2-digit' });
}

