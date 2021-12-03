import React from "react";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <div className="HeaderPokemon">
      <div className="HeaderLinks">
        <img src={logo} alt="Logo Pokemon" />
      </div>
      <div className="HeaderLinks" to="/">
        Home
      </div>
      <div className="HeaderLinks" to="/pokedex">
        Pokedex
      </div>
      <div
        className="HeaderLinks"
        href="https://github.com/GeffersonST target="
        _blank
      >
        Contact
      </div>
    </div>
  );
};

export default Header;
