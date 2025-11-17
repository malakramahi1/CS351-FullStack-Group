import { useParams, Link } from 'react-router-dom'
import { getEventById } from '../data/events'

export default function FindFriends() {
  const { id } = useParams()
  const e = getEventById(id)

  function handleSubmit(ev) {
    ev.preventDefault()
    alert('Submitted! (This will create a request once backend is connected)')
  }

  if (!e) return <div className="event-wrap"><h1>Event not found</h1></div>

  return (
    <div className="event-wrap">
      <h1>Find Friends: {e.title}</h1>
      <form onSubmit={handleSubmit} style={{display:'grid', gap:12, maxWidth:480}}>
        <label>Year<select required defaultValue=""><option value="" disabled>Choose…</option><option>Freshman</option><option>Sophomore</option><option>Junior</option><option>Senior</option><option>Graduate</option></select></label>
        <label>Major<input required placeholder="e.g., CS" /></label>
        <label>Study group / comment (optional)<textarea rows="3" placeholder="Any preferences or notes?" /></label>
        <div style={{display:'flex', gap:12}}>
          <Link to={`/event/${id}`} className="btn">Back</Link>
          <button className="btn" type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}

