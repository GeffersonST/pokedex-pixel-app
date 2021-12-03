import React from "react";
import logo from "../assets/Pokemon-logored.png";

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

      <a
        className="HeaderLinks"
        href="https://github.com/GeffersonST"
        target_blank
      >
        Contato
      </a>
    </div>
  );
};

export default Header;
