import React, { useState, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import "./Navbar.css";

function Navbar() {

  // STATES
  const [isClicked, setIsClicked] = useState(false);
  const [button, setButton] = useState(true);


  // FUNCTIONS

  // handleClick : toggle boolean value of isClicked
  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  const closeMobileMenu = () => {
    setIsClicked(false);
  };

  const showButton = () => {
    if(window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton()
  }, []);
  

  window.addEventListener('resize', showButton);

  return (
    <Fragment>
      <nav className="navbar">
        <div className="navbar-container">
          {/* LOGO */}
          <Link exact="true" to="/" className="navbar-logo" onClick={closeMobileMenu}>
            TRVL <i className="fa fa-rocket"></i>
          </Link>

          {/* handleClick : toggle boolean value of isClicked */}
          <div className="menu-icon" onClick={handleClick}>
            {/* default of isClicked is FALSE => bars - Line(9)  */}
            <i className={isClicked ? "fa fa-times" : "fa fa-bars"}></i>
          </div>

          <ul className={isClicked ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                to="/"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/services"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/products"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Products
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/sign-up"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>

          {button && <Button buttonStyle="btn-outline" buttonSize="btn-large">Sign Up</Button>}
        </div>
      </nav>
    </Fragment>
  );
}

export default Navbar;
