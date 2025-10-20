export default function Navbar() {
  return (
    <nav style={{padding:"12px 16px", borderBottom:"1px solid #eee", display:"flex", gap:"12px"}}>
      <a href="/" style={{fontWeight:600}}>Campus Connect</a>
      <a href="/login">Log In</a>
      <a href="/events">Explore Events</a>
    </nav>
  );
}

