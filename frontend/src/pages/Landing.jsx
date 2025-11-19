import { Link, useNavigate } from "react-router-dom";

export default function Landing() {
  const nav = useNavigate();

  const page = {
    fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
    background: "#f3f4f6",
    minHeight: "100vh",
  };

  const shell = {
    maxWidth: 1120,
    margin: "0 auto",
    padding: "24px 16px 64px",
  };

  const navBar = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 40,
  };

  const logo = {
    fontWeight: 700,
    fontSize: 22,
  };

  const navButtons = {
    display: "flex",
    gap: 12,
  };

  const outlineBtn = {
    padding: "8px 20px",
    borderRadius: 999,
    border: "1px solid #2563eb",
    background: "#fff",
    color: "#2563eb",
    fontWeight: 500,
    cursor: "pointer",
    textDecoration: "none",
  };

  const solidBtn = {
    padding: "8px 20px",
    borderRadius: 999,
    border: "1px solid #2563eb",
    background: "#2563eb",
    color: "#fff",
    fontWeight: 500,
    cursor: "pointer",
    textDecoration: "none",
  };

  const hero = {
    display: "grid",
    gridTemplateColumns: "minmax(0, 1.2fr) minmax(0, 1fr)",
    gap: 40,
    alignItems: "center",
    background: "#f9fafb",
    borderRadius: 24,
    padding: 32,
    boxShadow: "0 18px 45px rgba(15, 23, 42, 0.08)",
    marginBottom: 40,
  };

  const heroTitle = {
    fontSize: 40,
    fontWeight: 800,
    lineHeight: 1.1,
    marginBottom: 16,
  };

  const heroText = {
    fontSize: 16,
    color: "#4b5563",
    marginBottom: 24,
    maxWidth: 420,
  };

  const heroImageBox = {
    borderRadius: 24,
    overflow: "hidden",
    background: "#111827",
  };

  const heroImg = {
    width: "100%",
    display: "block",
    objectFit: "cover",
  };

  const sectionTitle = {
    fontSize: 22,
    fontWeight: 700,
    marginBottom: 16,
  };

  const cardRow = {
    marginTop: 16,
    background: "#f9fafb",
    borderRadius: 24,
    padding: 24,
    display: "flex",
    alignItems: "center",
    gap: 20,
    boxShadow: "0 12px 30px rgba(15, 23, 42, 0.06)",
    cursor: "pointer",
    border: "none",
    width: "100%",
    textAlign: "left",
  };

  const calendarIcon = {
    width: 40,
    height: 40,
    borderRadius: 12,
    border: "2px solid #111827",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 22,
  };

  const cardTextTitle = {
    fontWeight: 600,
    marginBottom: 4,
  };

  const cardTextBody = {
    color: "#4b5563",
    fontSize: 14,
  };

  return (
    <div style={page}>
      <div style={shell}>
        {/* Top nav */}
        <header style={navBar}>
          <div style={logo}>Campus Connect</div>
          <div style={navButtons}>
            <Link to="/login" style={outlineBtn}>
              Log In
            </Link>
            <Link to="/register" style={solidBtn}>
              Create Account
            </Link>
          </div>
        </header>

        {/* Hero */}
        <section style={hero}>
          <div>
            <h1 style={heroTitle}>
              Find your UIC Crew.
              <br />
              Never Miss Out.
            </h1>
            <p style={heroText}>
              Connect with classmates, make lasting memories, and discover
              different events happening across campus.
            </p>
            <button
              style={{
                ...solidBtn,
                padding: "12px 24px",
                borderRadius: 999,
              }}
              type="button"
              onClick={() => nav("/events/all")}
            >
              Explore Events
            </button>

            <p style={{ marginTop: 32, fontWeight: 600 }}>
              Discover What&apos;s Happening
            </p>
          </div>

          <div style={heroImageBox}>
            {/* You can swap this src with the exact campus image used before */}
            <img
              style={heroImg}
	       src="https://today.uic.edu/wp-content/uploads/2024/10/dji_20241023123615_0139_d_mh_websize.jpg"
              alt="Campus aerial view"
            />
          </div>
        </section>

        {/* Browse Local Events card */}
        <section>
          <h2 style={sectionTitle}>Browse Local Events</h2>
          <button type="button" style={cardRow} onClick={() => nav("/events/all")}>
            <div style={calendarIcon}>📅</div>
            <div>
              <div style={cardTextTitle}>Browse Local Events</div>
              <p style={cardTextBody}>
                Explore all of the upcoming events on the campus without an
                account. Click anywhere on this card or the button above to
                view the full events listing.
              </p>
            </div>
          </button>
        </section>
      </div>
    </div>
  );
}
