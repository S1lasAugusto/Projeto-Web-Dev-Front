/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { useContext } from "react";
import "./Header.css";
import { AuthContext } from "../contexts/Auth/AuthContext";
import { Link } from "react-router-dom";

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
            src="https://i.ibb.co/vc3MgvX/My-Movie-List.png"
            alt="MyMovieList"
          />
        </a>
      </div>

      <div className="header--user">
        <div className="header--buttons">
          {auth.user && <Link to="/profile"><button>Perfil</button></Link>}
          {auth.user && <button onClick={handleLogout}>Sair</button>}
        </div>
      </div>
    </header>
  );
};
