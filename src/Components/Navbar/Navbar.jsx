
import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, useLocation } from "react-router-dom";
import img from "../../assets/images/logo.png";
import "./Navbar.css";

function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isTop = window.scrollY > 100;
      if (isTop !== scrolled) {
        setScrolled(isTop);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const isHomePage = location.pathname === "/";

  return (
    <Navbar
      expand="lg"
      className={`${
        isHomePage
          ? scrolled
            ? "navbar-colored"
            : "navbar-transparent"
          : "navbar-colored position-static  "
      } fixed-top `}
    >
      <Navbar.Brand as={Link} to="/">
        <div className="imge">
          <img src={img} className="img-fluid" alt="" />
          <span className="text-light">KEMET</span>
        </div>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link className="links home-link" as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link className="active links about-link" as={Link} to="/about">
            About
          </Nav.Link>
          {/* <Nav.Link className="links" as={Link} to="/suggestions">
            Suggestions
          </Nav.Link> */}
          <NavDropdown
            className="NavDropdown dropdown mt-2 "
            title="Categories"
            id="basic-nav-dropdown"
          >
            <NavDropdown.Item
              className="items items-one"
              as={Link}
              to="/pharonic"
            >
              Pharonic
            </NavDropdown.Item>
            <NavDropdown.Item className="items" as={Link} to="/religious">
              Religious
            </NavDropdown.Item>
            <NavDropdown.Item className="items" as={Link} to="/medical">
              Medical
            </NavDropdown.Item>
            <NavDropdown.Item
              className="items items-last"
              as={Link}
              to="/recreational"
            >
              Recreational
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>

        <div className="d-flex">
          <Button
            className="sign-up sign-up-collapsed ms-3 d-lg-none"
            as={Link}
            to={"/register"}
          >
            <i className="fa-solid fa-user"></i>Sign Up
          </Button>
          <Button
            className="sign-up sign-up-collapsed ms-3 d-lg-none"
            as={Link}
            to={"/register"}
          >
            <i className="fa-solid fa-user"></i>Sign In
          </Button>
        </div>
      </Navbar.Collapse>

      <Button
        className="sign-up ms-auto me-3 d-none d-md-none d-lg-block"
        as={Link}
        to={"/register"}
      >
        <i className="fa-solid fa-user"></i>Sign Up
      </Button>
      <Button
        className="sign-up ms-auto me-3 d-none d-md-none d-lg-block"
        as={Link}
        to={"/login"}
      >
        <i className="fa-solid fa-user"></i>Sign In
      </Button>
    </Navbar>
  );
}

export default NavBar;
