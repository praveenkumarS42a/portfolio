import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <div className="nav__logo">Praveenkumar<span></span></div>
      <ul className="nav__links">
        <li className="link">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Home
          </NavLink>
        </li>
        <li className="link">
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            About
          </NavLink>
        </li>
        <li className="link">
          <NavLink
            to="/projects"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Projects
          </NavLink>
        </li>
        <li className="link">
          <NavLink
            to="/education"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Education
          </NavLink>
        </li>
      </ul>
      <button className="btn">Contact me</button>
    </nav>
  );
}

export default Navigation;
