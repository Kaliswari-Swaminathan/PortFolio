import React from "react";


const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">Kaliswari Profile</h1>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
