import React from "react";
import logo from "../assets/Pokemon-logored.png";

const Header = () => {
  return (
    <div className="HeaderPokemon">
      <div className="HeaderLinks">
        <img src={logo} alt="Logo Pokemon" />
      </div>
      <a className="HeaderLinks" href="/" target_blank>
        Home
      </a>
      <a
        className="HeaderLinks"
        href="https://github.com/GeffersonST"
        target_blank
      >
        Contact
      </a>

      <a
        className="HeaderLinks"
        href="https://github.com/GeffersonST"
        target_blank
      >
        Documentation
      </a>
    </div>
  );
};

export default Header;
