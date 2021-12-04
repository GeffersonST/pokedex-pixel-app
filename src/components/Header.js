import React from "react";
import logo from "../assets/Pokemon-logored.png";

const Header = () => {
  return (
    <div className="HeaderPokemon">
      <div className="HeaderLinks">
        <img src={logo} alt="Logo Pokemon" />
      </div>
      <a className="HeaderLinks" href="/">
        Home
      </a>
      <a
        className="HeaderLinks"
        href="https://github.com/GeffersonST"
        target="_blank"
        rel="noreferrer"
      >
        Contact
      </a>

      <a
        className="HeaderLinks"
        href="https://github.com/GeffersonST/pokedex-pixel-app"
        target="_blank"
        rel="noreferrer"
      >
        Documentation
      </a>
    </div>
  );
};

export default Header;
