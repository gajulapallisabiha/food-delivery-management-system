import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // useEffect demonstration
  useEffect(() => {
    console.log("Login page loaded");
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "" || password === "") {
      alert("Please enter email and password");
      return;
    }

    alert("Login successful!");

    navigate("/menu");
  };

  return (
    <>
      <Navbar />

      <div className="login-page">

        <div className="login-box">

          <h1>Login</h1>

          <p className="login-subtitle">
            Login to continue ordering your favourite food
          </p>

          <form onSubmit={handleSubmit}>

            <label>Email</label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label>Password</label>

            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button type="submit">
              Login
            </button>

          </form>

        </div>

      </div>
    </>
  );
};

export default Login;