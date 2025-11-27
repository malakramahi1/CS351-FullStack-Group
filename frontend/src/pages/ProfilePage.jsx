import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { syncAttendeeDisplayName } from "../api";
import "./profile.css";

export default function ProfilePage() {

  const navigate = useNavigate();

  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("userProfile");
    return saved
      ? JSON.parse(saved)
      : {
          id: "",
          username: "",
          firstName: "Om",
          lastName: "Patel",
          email: "testname@gmail.com",
          major: "Computer Science"
        };
  });

  useEffect(() => {
    try {
      const saved = localStorage.getItem("userProfile");
      if (saved) {
        setUser((prev) => {
          const parsed = JSON.parse(saved);
          return { ...prev, ...parsed };
        });
      }
    } catch (err) {
      console.warn("Failed to hydrate profile from storage", err);
    }
  }, []);

  const [editing, setEditing] = useState(false);

  function handleChange(field, value) {
    setUser((prev) => ({ ...prev, [field]: value }));
  }

  async function saveChanges() {
    localStorage.setItem("userProfile", JSON.stringify(user));
    setEditing(false);

    if (user.id) {
      const displayName = [user.firstName, user.lastName]
        .filter(Boolean)
        .join(" ")
        .trim() || user.username || user.email || user.id;

      try {
        await syncAttendeeDisplayName(user.id, displayName);
      } catch (err) {
        console.warn("Unable to sync attendee display name", err);
      }
    }

    alert("Profile updated!");
  }

  function logout() {
    localStorage.removeItem("userProfile");
    navigate("/"); // back to landing page
  }

  return (
    <div className="profile-wrap">

      {/* TOP NAV — Home REMOVED, Events moved to first */}
      <nav className="top-nav">
        <div className="nav-left">
          <div className="logo">Campus Connect</div>
          <div className="nav-links">
            <Link to="/events/all">Events</Link>
          </div>
        </div>

        <Link to="/profile" className="profile-icon">👤</Link>
      </nav>

      <h1 className="profile-title">My Profile</h1>

      <div className="profile-card">

        <label>
          First Name
          <input
            disabled={!editing}
            value={user.firstName || ""}
            onChange={(e) => handleChange("firstName", e.target.value)}
          />
        </label>

        <label>
          Last Name
          <input
            disabled={!editing}
            value={user.lastName || ""}
            onChange={(e) => handleChange("lastName", e.target.value)}
          />
        </label>

        <label>
          Email
          <input
            disabled={!editing}
            type="email"
            value={user.email || ""}
            onChange={(e) => handleChange("email", e.target.value)}
          />
        </label>

        <label>
          Major
          <input
            disabled={!editing}
            value={user.major || ""}
            onChange={(e) => handleChange("major", e.target.value)}
          />
        </label>

        {!editing ? (
          <button className="edit-btn" onClick={() => setEditing(true)}>
            Edit Profile
          </button>
        ) : (
          <button className="save-btn" onClick={saveChanges}>
            Save Changes
          </button>
        )}

        {/* LOGOUT BUTTON */}
        <button className="logout-btn" onClick={logout}>
          Log Out
        </button>

      </div>

    </div>
  );
}
