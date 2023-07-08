import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";
import "../styles/NavBar.css";

function NavBar() {
  const [click, setClick] = useState(false);
  let user = null;

  try {
    const userData = localStorage.getItem("user");
    user = userData ? JSON.parse(userData) : null;
  } catch (error) {
    console.error("Error parsing user data from localStorage:", error);
  }

  const handleClick = () => setClick(!click);

  return (
    <nav className="navbar">
      <img className="mlogo" src="/images/Genero.png" alt="mlogo" />
      <div className="nav-container">
        <NavLink exact to="/" className="nav-logo">
          {/* Add your logo or other elements here */}
        </NavLink>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <NavLink
              exact
              to="/"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
            >
              Accueil
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              to="/Article"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
            >
              Article
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              to="/Blog"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
            >
              Blog
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              to="/Contact"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
            >
              Contact
            </NavLink>
          </li>
          <li>
            
          </li>
        </ul>
        <div className="nav-iconn" onClick={handleClick}>
          <i
            className={click ? "fas fa-times" : "fas fa-bars fnav"}
            style={{ color: "white" }}
          ></i>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;




