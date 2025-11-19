import { useNavigate } from "react-router-dom";

export default function Landing() {
  const nav = useNavigate();

  const blueBtn = {
    backgroundColor: "#2563eb",
    color: "white",
    border: "none",
    padding: "16px 28px",
    borderRadius: "10px",
    cursor: "pointer",
    fontSize: "1.125rem",
    fontWeight: 600,
  };

  return (
    <div
      style={{
        backgroundColor: "white",
        minHeight: "100vh",
        fontFamily:
          "Inter, system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
      }}
    >
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "28px 60px",
          borderBottom: "1px solid #e5e7eb",
        }}
      >
        <h2 style={{ fontWeight: 800, fontSize: "1.75rem" }}>
          Campus Connect
        </h2>
        <div style={{ display: "flex", gap: "16px" }}>
          <button
            style={{
              backgroundColor: "white",
              border: "2px solid #2563eb",
              color: "#2563eb",
              borderRadius: "10px",
              padding: "10px 18px",
              cursor: "pointer",
              fontWeight: 600,
              fontSize: "1rem",
            }}
            onClick={() => nav("/login")}
          >
            Log In
          </button>
          <button
            style={{
              backgroundColor: "#2563eb",
              border: "2px solid #2563eb",
              color: "white",
              borderRadius: "10px",
              padding: "10px 18px",
              cursor: "pointer",
              fontWeight: 600,
              fontSize: "1rem",
            }}
            onClick={() => nav("/register")}
          >
            Create Account
          </button>
        </div>
      </header>

      <main
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          gap: "60px",
          padding: "80px 60px",
        }}
      >
        <div style={{ flex: "1 1 460px", maxWidth: "520px" }}>
          <h1
            style={{
              fontSize: "3rem",
              fontWeight: 800,
              marginBottom: "20px",
              lineHeight: 1.2,
            }}
          >
            Find your UIC Crew.
            <br />
            Never Miss Out.
          </h1>
          <p
            style={{
              fontSize: "1.125rem",
              color: "#374151",
              marginBottom: "32px",
            }}
          >
            Connect with classmates, make lasting memories, and explore a variety
            of events happening across campus.
          </p>

          <button style={blueBtn} onClick={() => nav("/events/all")}>
            Explore Events
          </button>
        </div>

        <img
          src="https://today.uic.edu/wp-content/uploads/2024/10/dji_20241023123615_0139_d_mh_websize.jpg"
          alt="UIC Campus"
          style={{
            width: "540px",
            height: "auto",
            borderRadius: "20px",
            objectFit: "cover",
            boxShadow: "0 6px 18px rgba(0,0,0,0.12)",
          }}
        />
      </main>
    </div>
  );
}
