import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark px-4">
      <Link to="/" className="navbar-brand">IMDB Clone</Link>
      <Link to="/favorites" className="btn btn-warning">Favorites</Link>
    </nav>
  );
};

export default Navbar;
