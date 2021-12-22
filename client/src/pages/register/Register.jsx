import axios from "axios";
import { useState } from "react"
import { Link } from "react-router-dom"
import "./register.css"

const server = "http://localhost:5000/api"

export default function Register() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError(false);
        try{
            const res = await axios.post(server+"/auth/register",{
                username,
                email,
                password
            })
            res.data && window.location.replace("/login");
        }
        catch(err){
            setError(true);
            console.log(err)
        }

    }
    return (
        <div className="register">
            <span className="registerTitle">Register</span>
            <form className="registerForm" onSubmit={handleSubmit}>
                <label>Username</label>
                <input type="text" className="registerInput" 
                    onChange={e=>setUsername(e.target.value)}
                    placeholder="Enter your username..." />
                <label>Email</label>
                <input type="text" className="registerInput"  
                    onChange={e=>setEmail(e.target.value)}
                    placeholder="Enter your email..." />
                <label>Password</label>
                <input type="password" 
                    onChange={e=>setPassword(e.target.value)} className="registerInput"  placeholder="Enter your password..." />
                <button className="registerButton">Register</button>
                <button className="registerLoginButton" type="submit">        
                    <Link to="/login" className="link">Login</Link>
                </button>
                {error && <span style={{color: "red"}}>Something went wrong</span>}
            </form>
        </div>
    )
}
