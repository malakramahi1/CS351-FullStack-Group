import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../api";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
    major: ""
  });

  const nav = useNavigate();

  function update(k, v) {
    setForm((s) => ({ ...s, [k]: v }));
  }

function submit(e) {
  e.preventDefault();

  // Basic password check
  if (form.password !== form.confirm) {
    alert("Passwords do not match");
    return;
  }

  registerUser(form).then((res) => {
    if (!res.ok) {
      alert("Registration failed:\n" + JSON.stringify(res.data.errors, null, 2));
      return;
    }

    const account = res?.data?.data?.user;
    const [first, ...rest] = (form.name || account?.username || "").trim().split(/\s+/);
    const profile = {
      id: account?.id || "",
      username: account?.username || form.name || "",
      email: account?.email || form.email || "",
      major: account?.major || form.major || "",
      firstName: first || account?.username || "",
      lastName: rest.join(" "),
    };
    localStorage.setItem("userProfile", JSON.stringify(profile));

    alert("Account created for " + (account?.username || form.name));
    nav("/events/all");
  });
}

  const input = {
    width: "100%",
    padding: "10px 12px",
    border: "1px solid #ddd",
    borderRadius: 8,
  };

  return (
    <div style={{ maxWidth: 520, margin: "24px auto", padding: "0 16px" }}>
      <h2 style={{ marginBottom: 16 }}>Create your Account</h2>
      <form onSubmit={submit} style={{ display: "grid", gap: 12 }}>
        <label>
          <div>Full Name</div>
          <input
            style={input}
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
          />
        </label>

        <label>
          <div>Email</div>
          <input
            style={input}
            type="email"
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
          />
        </label>

        <label>
          <div>Password</div>
          <input
            style={input}
            type="password"
            value={form.password}
            onChange={(e) => update("password", e.target.value)}
          />
        </label>

        <label>
          <div>Confirm Password</div>
          <input
            style={input}
            type="password"
            value={form.confirm}
            onChange={(e) => update("confirm", e.target.value)}
          />
        </label>

        <label>
          <div>Enter Major</div>
          <input
            style={input}
            value={form.major}
            onChange={(e) => update("major", e.target.value)}
            placeholder="e.g., Computer Science"
          />
        </label>

        <button
          style={{
            padding: "10px 14px",
            border: "1px solid #2563eb",
            background: "#2563eb",
            color: "#fff",
            borderRadius: 8,
            width: "fit-content",
          }}
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}
