import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { LoginWithEmailAndPassword, auth } from "../auth/firebase";
import { useNavigate } from "react-router";
import { Button } from "react-bootstrap";


export default function Login() {

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();

    const handleLogin=()=>{
      LoginWithEmailAndPassword(email,password).then(() =>
      navigate("/countries")
      )
    }
  return (
    <>
    <div style={{display:"flex", justifyContent:"center",alignItems:"center"}}>
    <div style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column", marginTop:"5rem",padding:"3rem",minWidth:"30rem", minHeight:"25rem",backgroundColor:"wheat",borderRadius:"5px"}}>
<p>Welcome back!</p>
<input style={{marginBottom:"1rem"}} type="text"
value={email}
onChange={(e) => setEmail(e.target.value)}
placeholder="Email" />

    <input style={{marginBottom:"1rem"}} type="password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    placeholder="Password" />   

<Button onClick={handleLogin}>Login</Button> <br />

<p>In case you don't have an account:</p>

<Button onClick={()=>navigate("/register")}>Register here</Button>
</div>
</div>
</>
  )
    }

