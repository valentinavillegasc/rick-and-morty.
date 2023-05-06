import React from "react";
import SearchBar from "./SearchBar";
import style from "../estilos/Nav.module.css";
import { Link } from "react-router-dom";

function Nav({ onSearch, setAccess }) {
  const handleLogOut = () => {
    setAccess(false);
  };

  return (
    <div className={style.nav}>
      <div>
        <button className={style.logOutButton} onClick={handleLogOut}>
          <span>LogOut</span>
        </button>
      </div>
      <SearchBar onSearch={onSearch} />
      <div>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/1200px-Rick_and_Morty.svg.png"
          alt="Logo"
          className={style.logo}
        />
      </div>
      <Link to="/favorites">
        <button className={style.favButton}>
          <span>Favorites</span>
        </button>
      </Link>
      <div>
        <Link to="/about">
          <button className={style.aboutButton}>
            <span>About</span>
          </button>
        </Link>
      </div>
      <div>
        <Link to="/home">
          <button className={style.homeButton}>
            <span>Home</span>
          </button>
        </Link>
      </div>
      <div></div>
    </div>
  );
}

export default Nav;
