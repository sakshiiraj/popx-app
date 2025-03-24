import React, { useState } from "react";

const Login = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      onLoginSuccess();
    }
  };

  return (
    <div className="container">
      <h2 className="login-h2">Sign in to your PopX account</h2>
      <p className="login-para">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <form onSubmit={handleSubmit} className="form-container">
        <label for="email">Email Address</label>
        <input
          id="email"
          type="email"
          className="input-field"
          placeholder="Enter email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label for="password">Password</label>
        <input
          id="password"
          type="password"
          className="input-field"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="button login-button" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
