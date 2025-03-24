import React from "react";
import "../styles.css";

const Welcome = ({ onSignup, onLogin }) => {
  return (
    <div className="container">
      <h1 className="container-h1">Welcome to PopX</h1>
      <p className="container-para">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <button className="button primary-button" onClick={onSignup}>
        Create Account
      </button>
      <button className="button secondary-button" onClick={onLogin}>
        Already Registered? Login
      </button>
    </div>
  );
};

export default Welcome;
