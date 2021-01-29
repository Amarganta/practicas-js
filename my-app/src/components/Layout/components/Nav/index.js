import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";
export const Nav = () => {
  return (
    <nav className="links-nav">
      <Link to="/Home" className="nav-item">
        Home
      </Link>
      <Link to="/Offers" className="nav-item">
        Offers
      </Link>
      <Link to="/Shop" className="nav-item">
        Shop
      </Link>
      <Link to="/Login" className="nav-item">
        Login
      </Link>
      <Link to="/Contact" className="nav-item">
        Contact
      </Link>
    </nav>
  );
};
