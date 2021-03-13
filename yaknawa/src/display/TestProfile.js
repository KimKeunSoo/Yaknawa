import React from "react";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const Profile = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);

  return (
    <div className="container">
      <header className="jumbotron">
        <h3>
          <strong>{isLoggedIn.username}</strong> Profile
        </h3>
      </header>
      <p>
        <strong>success:</strong>
        {isLoggedIn.success}
      </p>
      <p>
        <strong>Id:</strong> {isLoggedIn.username}
      </p>
      <p>
        <strong>Email:</strong> {isLoggedIn.email}
      </p>
      <strong>Authorities:</strong>
      <ul>
        {isLoggedIn.roles &&
          isLoggedIn.roles.map((role, index) => <li key={index}>{role}</li>)}
      </ul>
    </div>
  );
};

export default Profile;
