import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import {  FaEnvelope, FaPhone, FaInstagram, FaFacebook, FaLinkedin, FaTwitter, FaTiktok } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // determine hero height to decide when footer should appear
    const getHeroBottom = () => {
      const hero = document.querySelector('.hero') || document.querySelector('.about-hero');
      if (hero) {
        const rect = hero.getBoundingClientRect();
        // hero's bottom relative to document top
        return rect.top + rect.height;
      }
      return window.innerHeight * 0.8; // fallback
    };

    const heroBottom = getHeroBottom();

    const onScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;

      // show footer only if user has scrolled past the hero (with buffer) and at least 300px down
      if (scrollY > Math.max(heroBottom + 50, 300)) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    // check immediately on mount
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  if (!visible) return null; // don't render footer until visible

  return (
    <footer className="bg-dark text-white py-5 mt-5">
      <Container>
        <Row className="mb-4">
          <Col md={4} className="mb-4 mb-md-0">
            <h5 className="fw-bold mb-3">Giant Strides School</h5>
            <p>
              Quality Learning. Trusted Tutors. Real Results
            </p>
          </Col>
          <Col md={4} className="mb-4 mb-md-0">
            <h5 className="fw-bold mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#home" className="text-white text-decoration-none"> Home</a></li>
              <li><a href="#about" className="text-white text-decoration-none"> About</a></li>
              <li><a href="#services" className="text-white text-decoration-none"> Services</a></li>
              <li><a href="#testimonials" className="text-white text-decoration-none"> Testimonials</a></li>
              <li><a href="#contact" className="text-white text-decoration-none"> Contact</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5 className="fw-bold mb-3">Contact Us</h5>
            <p>
              <FaEnvelope />  <a href="mailto:giantstridesedutech@gmail.com" className="text-white text-decoration-none">giantstridesedutech@gmail.com</a>
            </p>
            <p>
              <FaPhone />  <a href="tel:+234 9073141035, +447378898212" className="text-white text-decoration-none">+234 9073141035, +447378898212</a>
            </p>
            <p>(Available for enquiries, registrations, and support)</p>
            <p>
              <strong>Follow Us:</strong><br />
              <a href="https://www.instagram.com/giantstrides_edutech?igsh=eXMwYjlkOXZkY3Q5" className="text-white text-decoration-none me-2"><FaInstagram /></a>
              <a href="https://www.facebook.com/share/1Jjr6Q6D8d/" className="text-white text-decoration-none me-2"><FaFacebook /></a>
              <a href="https://www.linkedin.com/company/giant-strides-edu-tech-consulting-limited/" className="text-white text-decoration-none me-2"><FaLinkedin /></a>
              <a href="https://x.com/giantstridesedu?t=HpBnnG0z4XCSKpeU0ttAZg&s=09" className="text-white text-decoration-none me-2" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
              <a href="https://www.tiktok.com/@giant_strides_edutech?_r=1&_t=ZS-92FFduMG3Wc" className="text-white text-decoration-none" target="_blank" rel="noopener noreferrer"><FaTiktok /></a>
            </p>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col className="text-center">
            <p className="mb-0">
              &copy; {currentYear} Giant Strides School: K-12 Online Tutoring & Exam Prep. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}