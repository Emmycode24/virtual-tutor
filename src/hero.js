// components/Hero.js
import React from "react";
import { Container, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section
      id="home"
      className="hero d-flex align-items-center text-center text-white"
      style={{
        minHeight: "90vh",
        background: "linear-gradient(135deg, #4e73df 0%, #224abe 100%)",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      data-aos="fade-up"
    >
      <Container style={{ position: "relative", zIndex: 2, py: 5 }}>
        <h1 className="fw-bold display-3 mb-4 text-center">Virtual Tutoring </h1>
        <p className="fw-bold display-3 mb-4">That Delivers Real Results</p>
        <p className="lead mb-4 fs-5">
          Get personalized, world-class lessons for K-12 students, available anytime, anywhere.
        </p>
        <div className="d-flex gap-3 justify-content-center flex-wrap">
          <Button as={Link} to="/signup" variant="light" size="lg" className="px-5">
            Start Now
          </Button>
          <Button href="#about" variant="outline-light" size="lg" className="px-5">
            Learn More
          </Button>
        </div>
        
        {/* Three Value Props */}
        <Row className="mt-5 text-start justify-content-center">
          <Col md={3} className="mb-3">
            <div className="text-center">
              <h5 className="fw-bold">We Guide</h5>
              <p className="small">your child to confidently master any subject</p>
            </div>
          </Col>
          <Col md={3} className="mb-3">
            <div className="text-center">
              <h5 className="fw-bold">We Empower</h5>
              <p className="small">with tools and strategies for lifelong learning</p>
            </div>
          </Col>
          <Col md={3} className="mb-3">
            <div className="text-center">
              <h5 className="fw-bold">We Transform</h5>
              <p className="small">student confidence and academic performance</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
