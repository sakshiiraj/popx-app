import React, { useState } from "react";

const Signup = ({ onSignupSuccess }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    isAgency: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(formData));
    onSignupSuccess();
  };

  return (
    <div className="container">
      <h2 className="login-h2">Create your PopX account</h2>
      <form onSubmit={handleSubmit}>
        <label for="name">Full Name*</label>
        <input
          id="name"
          name="name"
          className="input-field signup-input"
          placeholder="Full Name"
          onChange={handleChange}
          required
        />
        <label for="phone">Phone Number*</label>
        <input
          id="phone"
          name="phone"
          className="input-field"
          placeholder="Phone Number"
          onChange={handleChange}
          required
        />
        <label for="email">Email address*</label>
        <input
          id="email"
          name="email"
          className="input-field"
          placeholder="Email Address"
          onChange={handleChange}
          required
        />
        <label for="password">Password*</label>
        <input
          id="password"
          name="password"
          className="input-field"
          placeholder="Password"
          type="password"
          onChange={handleChange}
          required
        />
        <label for="company">Company name</label>
        <input
          id="company"
          name="company"
          className="input-field"
          placeholder="Company Name"
          onChange={handleChange}
          required
        />

        <div className="radio-group">
          <label>Are you an Agency?</label>
          <br />
          <input
            type="radio"
            name="isAgency"
            value="Yes"
            onChange={handleChange}
          />{" "}
          Yes
          <input
            type="radio"
            name="isAgency"
            value="No"
            onChange={handleChange}
          />{" "}
          No
        </div>

        <button className="button primary-button signup-btn" type="submit">
          Create Account
        </button>
      </form>
    </div>
  );
};

export default Signup;
