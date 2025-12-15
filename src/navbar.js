import React, { useState, useEffect } from "react";
import { Navbar as BSNav, Nav, Container } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Navbar() {
  const [navbarBg, setNavbarBg] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // Change navbar background on scroll
  const handleScroll = () => {
    if (window.scrollY > 80) setNavbarBg(true);
    else setNavbarBg(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <BSNav
      expand="lg"
      fixed="top"
      className={`navbar-custom shadow-sm ${navbarBg ? "navbar-bg" : ""}`}
      style={{ zIndex: 1200, position: 'fixed', top: 0, left: 0, right: 0, width: '100%' }}
      onToggle={(expanded) => setExpanded(expanded)}
      expanded={expanded}
    >
      <Container fluid style={{ paddingLeft: "1rem", paddingRight: "1rem" }}>
          <BSNav.Brand as={Link} to="/#hero" style={{ paddingRight: "1.5rem" }}>
            <span style={{ fontWeight: "bold", color: "#4e73df", fontSize: "20px" }}>
              Giant Strides School
            </span>
          </BSNav.Brand>
        <BSNav.Toggle aria-controls="main-nav">
          {expanded ? '✕' : '☰'}
        </BSNav.Toggle>
        <BSNav.Collapse id="main-nav">
          <Nav className="ms-auto gap-3 align-items-center">
            <Nav.Link
              onClick={e => {
                setExpanded(false);
                if (location.pathname === "/") {
                  const el = document.getElementById("hero");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                } else {
                  navigate("/#hero");
                }
              }}
            >Home</Nav.Link>
            <Nav.Link
              onClick={e => {
                setExpanded(false);
                if (location.pathname === "/") {
                  const el = document.getElementById("about");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                } else {
                  navigate("/#about");
                }
              }}
            >About</Nav.Link>
            <Nav.Link
              onClick={e => {
                setExpanded(false);
                if (location.pathname === "/") {
                  const el = document.getElementById("testimonials");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                } else {
                  navigate("/#testimonials");
                }
              }}
            >Testimonials</Nav.Link>
            <Nav.Link
              onClick={e => {
                setExpanded(false);
                if (location.pathname === "/") {
                  const el = document.getElementById("contact");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                } else {
                  navigate("/#contact");
                }
              }}
            >Contact</Nav.Link>
            <Nav.Link
              as={Link}
              to="/login"
              className="btn btn-primary text-white px-3 rounded"
              onClick={() => setExpanded(false)}
            >
              Login
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/signup"
              className="btn btn-outline-primary px-3 rounded"
              onClick={() => setExpanded(false)}
            >
              Signup
            </Nav.Link>
          </Nav>
        </BSNav.Collapse>
      </Container>
    </BSNav>
  );
}