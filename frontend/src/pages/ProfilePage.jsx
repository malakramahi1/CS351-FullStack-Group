import { useState } from "react";
import { Link } from "react-router-dom";
import "./profile.css";

export default function ProfilePage() {
  // Mocked user info — in the future you can store this globally or from login
  const [user, setUser] = useState({
    firstName: "Test",
    lastName: "Name",
    email: "testname@gmail.com",
    major: "Computer Science"
  });

  const [editing, setEditing] = useState(false);

  function handleChange(field, value) {
    setUser((prev) => ({ ...prev, [field]: value }));
  }

  function saveChanges() {
    setEditing(false);
    alert("Profile updated!");
  }

  return (
    <div className="profile-wrap">

      {/* Top Navigation */}
      <nav className="top-nav">
        <div className="logo">Campus Connect</div>
        <div className="nav-links">
          <Link to="/home">Home</Link>
          <Link to="/events/all">Events</Link>
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
