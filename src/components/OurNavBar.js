import React, { useState } from "react";
import "../style/OurNavBar.css";
import { Link } from "react-router-dom";

function OurNavBar({ isLoggedIn }) {
  const [toggleNav, setToggleNav] = useState(false);
  let obj = toggleNav
    ? { display: "flex", flexDirection: "column", alignItems: "self-start" }
    : {};

  return (
    <nav className="navMainContainer">
      <div className="logoContainer">
        <Link to="/">
          <h1>language</h1>
        </Link>
      </div>
      <ul className="burgerMenu">
        <li>
          <i
            className="fas fa-bars"
            onClick={() => setToggleNav(!toggleNav)}
          ></i>
        </li>
      </ul>
      <div className="pagesLinks" style={obj}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Class">Class</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
        </ul>
        {!isLoggedIn ? (
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        ) : (
          <ul>
            <li>
              <Link to="/account/ManageReservations"><i class="fas fa-cart-plus"></i></Link>
            </li>
            <li>
              <Link to="/account">Account</Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}

export default OurNavBar;
