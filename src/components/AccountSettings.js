import React from "react";
// import profileImage from "../assets/Ellipse 114.png";

const AccountSettings = () => {
  const user = JSON.parse(localStorage.getItem("user")) || {};

  return (
    <div className="container account-settings">
      <header className="account-header">
        <h1 className="account-h1">Account Settings</h1>
      </header>

      <div className="profile-info">
        <img
          src="https://cdn-icons-png.flaticon.com/512/8345/8345328.png"
          alt="Profile"
          className="profile-img"
        />

        <div>
          <p className="profile-name">{user.name || "User"}</p>
          <p className="profile-email">{user.email || "user@example.com"}</p>
        </div>
      </div>
      <p className="profile-para">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia
        reiciendis enim vero, labore harum numquam adipisci nam quibusdam itaque
        vel voluptatibus quasi laudantium quaerat. Illo.
      </p>
    </div>
  );
};

export default AccountSettings;
