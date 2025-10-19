import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");

  function handleSubmit(e){
    e.preventDefault();
    alert(`(mock) logging in as ${email}`);
  }

  const input = { width:"100%", padding:"10px 12px", border:"1px solid #ddd", borderRadius:8 };
  const btn = { padding:"10px 14px", border:"1px solid #ddd", borderRadius:8, cursor:"pointer", background:"#fff" };

  return (
    <div style={{maxWidth:480, margin:"24px auto", padding:"0 16px"}}>
      <h2 style={{marginBottom:16}}>Welcome Back!</h2>
      <form onSubmit={handleSubmit} style={{display:"grid", gap:12}}>
        <label>
          <div>Email</div>
          <input value={email} onChange={e=>setEmail(e.target.value)} type="email" required style={input}/>
        </label>
        <label>
          <div>Password</div>
          <input value={pw} onChange={e=>setPw(e.target.value)} type="password" required style={input}/>
        </label>
        <button type="submit" style={{...btn, width:"fit-content"}}>Log In</button>
      </form>
    </div>
  );
}

