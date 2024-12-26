import {useAuthState} from "react-firebase-hooks/auth" 
import { auth, registerWithEmailAndPassword } from "../auth/firebase";
import { useState } from "react";
import { useNavigate } from "react-router";
import { Button } from "react-bootstrap";


const Register = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [name,setName] = useState("");

    const [user, loading, error] = useAuthState(auth);

    const navigate = useNavigate();

    const handleRegister = () =>{
        if (!name){
            alert("name is required")
        }
        registerWithEmailAndPassword(name, email, password).then(() =>
        navigate("/countries"));
    }
    //Add check to see if user is logged in and to navigate to countries if logged in
  return (
    <div style={{display:"flex", justifyContent:"center",alignItems:"center"}}>
    <div style={{display:"flex", justifyContent:"center",alignItems:"center", flexDirection:"column", marginTop:"5rem",padding:"3rem",minWidth:"30rem",minHeight:"25rem",backgroundColor:"wheat",borderRadius:"5px"}}>

        <p>Please fill in this form to get access to the page.
        </p>
        <br />

        <input style={{marginBottom:"1rem", maxWidth:"15rem"}} type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Full Name" />

        <input style={{marginBottom:"1rem", maxWidth:"15rem"}} type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email" />

        <input style={{marginBottom:"1rem", maxWidth:"15rem"}} type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password" />   

    <Button style={{maxWidth:"15rem"}} onClick={handleRegister}>Register</Button>
    </div>
    </div>
  )
}

export default Register;