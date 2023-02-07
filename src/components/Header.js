/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { useContext } from "react";
import "./Header.css";
import { AuthContext } from "../contexts/Auth/AuthContext";

export default ({ black }) => {
  const auth = useContext(AuthContext);

  const handleLogout = async () => {
    await auth.signout();
    window.location.href = window.location.href;
  };

  return (
    <header className={black ? "black" : ""}>
      <div className="header--logo">
        <a href="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/67/NewNetflixLogo.png"
            alt="Netflix"
          />
        </a>
      </div>

      <div className="header--user">
        {auth.user && (
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="Perfil"
          />
        )}
        <div className="header--user">
          {auth.user && <button onClick={handleLogout}>Sair</button>}
        </div>
      </div>
    </header>
  );
};
