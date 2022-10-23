import React from "react";
import "./Navbar.css";
import logo from "../../assets/Logo/Logo.svg";
import search from "../../assets/Icons/Search.svg";
import bag from "../../assets/Icons/shopping bag.svg";
import menu from "../../assets/Icons/Menu.svg";

const Navbar = () => {
  return (
    <header>
      <nav>
        <img src={menu} className="hamburger" />
        <img src={logo} className="logo" />
        <div>
          <img src={search} className="search" />
          <img src={bag} alt="" className="bag" />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
