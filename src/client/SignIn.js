import { useState } from "react";
import React from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";
import { Navigate, useNavigate } from "react-router-dom";
import '../SignIn.css';

const SignIn = () => {
    const [email, setEmail] = useState(""); 
    const [password, setPassword] = useState("");
    const navigate = useNavigate(); 

    const handleSubmit = async (e) => {
        e.preventDefault(); 
        try {
            await signInWithEmailAndPassword(auth, email, password); 
            navigate("/"); //redirect to dashboard after sign in
        } catch (error) {
            console.error("Error signing in: ", error); 
            alert(error.message); 
        }
    }; 

    return (
        <div className="signin-full-container">
            <h1 className="title">CipherMD</h1>
            <div className="signin-container">
                <form className="signin-form" onSubmit={handleSubmit}>
                    <h1 className="signin-title">Sign In</h1>
                    <input 
                        className="signin-input"
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <br />
                    <input 
                        className="signin-input"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <br />
                    <button type="submit" className="signin-submit">Sign In</button>
                </form>
            </div>
        </div> 
    );
};

export default SignIn;