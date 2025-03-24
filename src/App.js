import React, { useState } from "react";
import Welcome from "./components/Welcome";
import Signup from "./components/SignUp";
import Login from "./components/Login";
import AccountSettings from "./components/AccountSettings";

const App = () => {
  const [page, setPage] = useState("welcome");

  return (
    <>
      {page === "welcome" && (
        <Welcome
          onSignup={() => setPage("signup")}
          onLogin={() => setPage("login")}
        />
      )}
      {page === "signup" && (
        <Signup onSignupSuccess={() => setPage("accountSettings")} />
      )}
      {page === "login" && (
        <Login onLoginSuccess={() => setPage("accountSettings")} />
      )}
      {page === "accountSettings" && <AccountSettings />}
    </>
  );
};

export default App;
