import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

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

      // show footer only if user has scrolled past the hero (with some buffer)
      if (scrollY > heroBottom + 50) {
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
            <h5 className="fw-bold mb-3">Virtual Tutor</h5>
            <p>
              K-12 Online Tutoring & Exam Prep. Virtual tutoring that delivers real results with personalized, world-class lessons available anytime, anywhere.
            </p>
          </Col>
          <Col md={4} className="mb-4 mb-md-0">
            <h5 className="fw-bold mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#home" className="text-white text-decoration-none">Home</a></li>
              <li><a href="/about" className="text-white text-decoration-none">About</a></li>
                           <li><a href="#testimonials" className="text-white text-decoration-none">Testimonials</a></li>
              <li><a href="#contact" className="text-white text-decoration-none">Contact</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5 className="fw-bold mb-3">Contact Us</h5>
            <p>
              Email: <a href="mailto:info@virtualtutor.com" className="text-white text-decoration-none">info@virtualtutor.com</a>
            </p>
            <p>
              Phone: <a href="tel:+447949626406" className="text-white text-decoration-none">+44 7949 626 406</a>
            </p>
            <p>
              <strong>Follow Us:</strong><br />
              <a href="https://instagram.com/theclassytishaa" className="text-white text-decoration-none me-2">Instagram</a>
              <a href="https://facebook.com/theclassytisha" className="text-white text-decoration-none me-2">Facebook</a>
              <a href="https://linkedin.com/company/classy-tisha" className="text-white text-decoration-none">LinkedIn</a>
            </p>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col className="text-center">
            <p className="mb-0">
              &copy; {currentYear} Virtual Tutor: K-12 Online Tutoring & Exam Prep. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
