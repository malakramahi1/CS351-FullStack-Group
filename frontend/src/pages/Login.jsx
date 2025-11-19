import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../api";

export default function Login() {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const nav = useNavigate();

function handleSubmit(e) {
  e.preventDefault();

  if (!email || !pw) {
    alert("Please enter both email and password");
    return;
  }

  loginUser(email, pw).then((res) => {
    if (!res.ok) {
      alert("Login failed:\n" + JSON.stringify(res.data.errors, null, 2));
      return;
    }

    // success: backend returned a valid user
    nav("/home");
  }).catch((err) => {
    console.error(err);
    alert("Unexpected error logging in");
  });
}

  const input = { width:"100%", padding:"10px 12px", border:"1px solid #ddd", borderRadius:8 };
  const btn = { padding:"10px 14px", border:"1px solid #ddd", borderRadius:8, cursor:"pointer", background:"#fff" };

  return (
    <div style={{maxWidth:480, margin:"24px auto", padding:"0 16px"}}>
      <h2 style={{marginBottom:16}}>Welcome Back!</h2>
      <form onSubmit={handleSubmit} style={{display:"grid", gap:12}}>
        <label>
          <div>Email</div>
          <input value={email} onChange={e=>setEmail(e.target.value)} type="email" style={input}/>
        </label>
        <label>
          <div>Password</div>
          <input value={pw} onChange={e=>setPw(e.target.value)} type="password" style={input}/>
        </label>
        <button type="submit" style={{...btn, width:"fit-content"}}>
          Log In
        </button>
      </form>
    </div>
  );
}
