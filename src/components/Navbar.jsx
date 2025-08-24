import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">🏋️‍♂️ FitLife Gym</div>
      <ul>
        {/* Use Link correctly, no <a> inside */}
        <li><Link to="/">Home</Link></li>
        
        {/* Section scrolls (keep <a> for in-page anchors) */}
        <li><a href="#about">About</a></li>
        <li><a href="#classes">Classes</a></li>
        <li><a href="#membership">Membership</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      {/* Correct path casing */}
      <Link to="/login">
        <button className="login-btn">Login</button>
      </Link>
    </nav>
  );
}
