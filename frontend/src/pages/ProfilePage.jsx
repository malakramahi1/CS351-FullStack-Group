import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./profile.css";

export default function ProfilePage() {
  
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("userProfile");
    return saved
      ? JSON.parse(saved)
      : {
          firstName: "Om",
          lastName: "Patel",
          email: "testname@gmail.com",
          major: "Computer Science"
        };
  });

  const [editing, setEditing] = useState(false);

  function handleChange(field, value) {
    setUser((prev) => ({ ...prev, [field]: value }));
  }

  function saveChanges() {
    localStorage.setItem("userProfile", JSON.stringify(user));  
    setEditing(false);
    alert("Profile updated!");
  }

  return (
    <div className="profile-wrap">

      <nav className="top-nav">

        <div className="nav-left">
          <div className="logo">Campus Connect</div>
          <div className="nav-links">
            <Link to="/home">Home</Link>
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
            value={user.firstName}
            onChange={(e) => handleChange("firstName", e.target.value)}
          />
        </label>

        <label>
          Last Name
          <input
            disabled={!editing}
            value={user.lastName}
            onChange={(e) => handleChange("lastName", e.target.value)}
          />
        </label>

        <label>
          Email
          <input
            disabled={!editing}
            type="email"
            value={user.email}
            onChange={(e) => handleChange("email", e.target.value)}
          />
        </label>

        <label>
          Major
          <input
            disabled={!editing}
            value={user.major}
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
      </div>
    </div>
  );
}
