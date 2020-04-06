import React from "react";
import { Redirect } from "react-router-dom";

const LoginPage = ({ isLoggedIn, onLogIn }) => {
  if (isLoggedIn) {
    return <Redirect to="/" />;
  }
  return (
    <div className="jumbotron">
      <h2>LoginPage</h2>
      <button className="btn btn-primary" onClick={onLogIn}>
        Log in
      </button>
    </div>
  );
};

export default LoginPage;
