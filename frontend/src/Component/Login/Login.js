import React, { useState } from "react";
import { Navigate } from "react-router-dom";

import isAuth from "../../lib/isAuth";

import "./login.css"

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

    const [loggedin, setLoggedin] = useState(isAuth());

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/v1/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        const { token, type } = data;
        localStorage.setItem("token", token);
        localStorage.setItem("type", type);
        setLoggedin(isAuth());
        console.log("Logged in successfully:", data);
      } else {
        const errorData = await response.json();
        window.alert("Login Error")
        console.log("Login error:", errorData);
      }
    } catch (error) {
        window.alert("Login Error catch")
      console.log("Login error:", error);
    }
  };

  return loggedin ? (
    <Navigate to="/" />
  ) : (
    <div className='login'>
      <h1 className="lo">Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="login1">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="login1">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="btn" type="submit">Log in</button>
      </form>
    </div>
  );
};

export default Login;
