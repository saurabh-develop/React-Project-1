import React from "react";
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <>
      <div className="nav-container">
        <div>
          <img className="nav-logo" src="pngwing.com.png" alt="img"></img>
        </div>
        <div className="nav-link">
          <span>
            <Link className="link menu" to="/">
              Home
            </Link>
          </span>
          <span>
            <Link className="link location" to="/location">
              Location
            </Link>
          </span>
          <span>
            <Link className="link about" to="/about">
              About
            </Link>
          </span>
          <span>
            <Link className="link contact" to="/contact">
              Contact
            </Link>
          </span>
        </div>
        <div>
          <button className="login-button">Login</button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
