// components/Signup.js
import React, { useState, useEffect } from "react";
import { Container, Form, Button, Card } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => { 
    AOS.init({ duration: 1000 }); 
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleSignup = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];
    if(users.find(u => u.email === email)) {
      alert("User already exists");
      return;
    }
    users.push({ email, password });
    localStorage.setItem("users", JSON.stringify(users));
    alert("Signup successful!");
    navigate("/login");
  };

  return (
    <>
      {/* Hero Section */}
      <section 
        className="d-flex align-items-center text-center text-white"
        style={{
          minHeight: "40vh",
          background: "linear-gradient(135deg, #4e73df 0%, #224abe 100%)",
          paddingTop: "100px",
          paddingBottom: "3rem"
        }}
      >
        <Container>
          <h1 className="display-4 fw-bold mb-2" data-aos="fade-up">Get Started Today</h1>
          <p className="lead" data-aos="fade-up" data-aos-delay="100">
            Join Virtual Tutor and unlock your learning potential
          </p>
        </Container>
      </section>

      {/* Signup Form Section */}
      <section className="py-5" style={{ minHeight: "60vh", display: "flex", alignItems: "center" }}>
      <Container data-aos="fade-up">
          <div className="row justify-content-center">
            <div className="col-md-6 col-lg-5">
              <Card className="shadow-lg border-0 rounded-4" style={{ overflow: "hidden" }}>
                <Card.Body className="p-5">
                  <h2 className="text-center fw-bold mb-4" style={{ color: "#224abe" }}>Create Account</h2>
          <Form onSubmit={handleSignup}>
            <Form.Group className="mb-3">
              <Form.Label className="fw-600 mb-2" style={{ color: "#334155" }}>Email Address</Form.Label>
              <Form.Control 
                type="email" 
                placeholder="you@example.com" 
                value={email} 
                onChange={e => setEmail(e.target.value)} 
                required
                className="form-control-lg"
                style={{ borderRadius: "8px", borderColor: "#e5e7eb" }}
              />
            </Form.Group>
            <Form.Group className="mb-4">
              <Form.Label className="fw-600 mb-2" style={{ color: "#334155" }}>Password</Form.Label>
              <Form.Control 
                type="password" 
                placeholder="Create a strong password" 
                value={password} 
                onChange={e => setPassword(e.target.value)} 
                required
                className="form-control-lg"
                style={{ borderRadius: "8px", borderColor: "#e5e7eb" }}
              />
            </Form.Group>
            <Button 
              type="submit" 
              variant="primary" 
              className="w-100 fw-600 py-2"
              style={{ fontSize: "16px", borderRadius: "8px" }}
            >
              Sign Up
            </Button>
          </Form>
                  <hr className="my-4" />
                  <p className="text-center" style={{ color: "#6b7280" }}>
                    Already have an account?{" "}
                    <Link to="/login" style={{ color: "#224abe", fontWeight: "600", textDecoration: "none" }}>
                      Log in here
                    </Link>
                  </p>
                </Card.Body>
              </Card>
            </div>
          </div>
      </Container>
    </section>
    </>
  );
}
