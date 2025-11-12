import { Link, useNavigate } from "react-router-dom";

export default function Landing() {
  const nav = useNavigate();

  const blueBtn = {
    backgroundColor: "#2563eb",
    color: "white",
    border: "none",
    padding: "12px 20px",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "1rem",
    fontWeight: 500
  };

  return (
    <div style={{ backgroundColor: "white", minHeight: "100vh", fontFamily: "Inter, sans-serif" }}>
      <header style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 48px",
        borderBottom: "1px solid #e5e7eb"
      }}>
        <h2 style={{ fontWeight: 700, fontSize: "1.5rem" }}>Campus Connect</h2>
        <div style={{ display: "flex", gap: "12px" }}>
          <button
            style={{
              backgroundColor: "white",
              border: "1px solid #2563eb",
              color: "#2563eb",
              borderRadius: "8px",
              padding: "8px 16px",
              cursor: "pointer",
              fontWeight: 500
            }}
            onClick={() => nav("/login")}
          >
            Log In
          </button>
          <button
            style={{
              backgroundColor: "#2563eb",
              border: "1px solid #2563eb",
              color: "white",
              borderRadius: "8px",
              padding: "8px 16px",
              cursor: "pointer",
              fontWeight: 500
            }}
            onClick={() => nav("/register")}
          >
            Create Account
          </button>
        </div>
      </header>

      <main style={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
        gap: "40px",
        padding: "60px 48px"
      }}>
        <div style={{ flex: "1 1 400px", maxWidth: "480px" }}>
          <h1 style={{ fontSize: "2.5rem", fontWeight: 700, marginBottom: "16px" }}>
            Find your UIC Crew. <br />Never Miss Out.
          </h1>
          <p style={{ fontSize: "1rem", color: "#374151", marginBottom: "24px" }}>
            Connect with classmates, make lasting memories, and discover different events.
          </p>
          <button style={blueBtn} onClick={() => nav("/events")}>
            Explore Events
          </button>
        </div>

        <img
	  src= "https://today.uic.edu/wp-content/uploads/2024/10/dji_20241023123615_0139_d_mh_websize.jpg"
          alt="UIC Campus"
          style={{
            width: "480px",
            height: "auto",
            borderRadius: "16px",
            objectFit: "cover",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
          }}
        />
      </main>

      <section style={{
        backgroundColor: "#f9fafb",
        padding: "40px 48px",
        textAlign: "center"
      }}>
        <h2 style={{ fontSize: "1.5rem", fontWeight: 600, marginBottom: "16px" }}>
          Browse Local Events
        </h2>
        <p style={{ maxWidth: "600px", margin: "0 auto", color: "#4b5563" }}>
          Explore all of the upcoming events on campus without an account.
        </p>
      </section>
    </div>
  );
}


