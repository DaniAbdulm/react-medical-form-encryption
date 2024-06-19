import { useState } from "react";
import React from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";
import { Navigate, useNavigate } from "react-router-dom";

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
        <form onSubmit={handleSubmit}>
            <h1>Sign In</h1>
            <input 
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input 
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Sign In</button>
        </form>
    );
};

export default SignIn;