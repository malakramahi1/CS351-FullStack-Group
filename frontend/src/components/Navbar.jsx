import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav
      style={{
        padding: "12px 16px",
        borderBottom: "1px solid #eee",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Link
        to="/"
        style={{
          fontWeight: 600,
          textDecoration: "none",
          color: "#2563eb",
          fontSize: "1.25rem",
        }}
      >
        Campus Connect
      </Link>

      <div style={{ display: "flex", gap: "24px" }}>
        <Link
          to="/login"
          style={{ textDecoration: "none", color: "#2563eb", fontWeight: 500 }}
        >
          Log In
        </Link>
        <Link
          to="/events/all"
          style={{ textDecoration: "none", color: "#2563eb", fontWeight: 500 }}
        >
          Explore Events
        </Link>
      </div>
    </nav>
  );
}

