// components/Login.js
import React, { useState, useEffect } from "react";
import { Container, Form, Button, Card, Modal } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  useEffect(() => { 
    AOS.init({ duration: 1000 }); 
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
      setModalMessage("Login successful! Welcome back.");
      setShowModal(true);
    } else {
      setModalMessage("Invalid credentials. Please check your email and password.");
      setShowModal(true);
    }
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
          <h1 className="display-4 fw-bold mb-2" data-aos="fade-up">Welcome Back</h1>
          <p className="lead fw-bold" data-aos="fade-up" data-aos-delay="100">
            Log in to your Virtual Tutor account
          </p>
        </Container>
      </section>

      {/* Login Form Section */}
      <section className="py-5" style={{ minHeight: "60vh", display: "flex", alignItems: "center" }}>
        <Container data-aos="fade-up">
          <div className="row justify-content-center">
            <div className="col-md-6 col-lg-5">
              <Card className="shadow-lg border-0 rounded-4" style={{ overflow: "hidden" }}>
                <Card.Body className="p-5">
                  <h2 className="text-center fw-bold mb-4" style={{ color: "#224abe" }}>Login</h2>
                  <Form onSubmit={handleLogin}>
                    <Form.Group className="mb-3">
                      <Form.Label className="fw-bold mb-2" style={{ color: "#334155" }}>Email Address</Form.Label>
                      <Form.Control 
                        type="email" 
                        placeholder="you@example.com" 
                        value={email} 
                        onChange={e => setEmail(e.target.value)} 
                        required
                        className="form-control-lg fw-semibold"
                        style={{ borderRadius: "8px", borderColor: "#e5e7eb" }}
                      />
                    </Form.Group>
                    <Form.Group className="mb-4">
                      <Form.Label className="fw-bold mb-2" style={{ color: "#334155" }}>Password</Form.Label>
                      <Form.Control 
                        type="password" 
                        placeholder="Enter your password" 
                        value={password} 
                        onChange={e => setPassword(e.target.value)} 
                        required
                        className="form-control-lg fw-semibold"
                        style={{ borderRadius: "8px", borderColor: "#e5e7eb" }}
                      />
                    </Form.Group>
                    <Button 
                      type="submit" 
                      variant="primary" 
                      className="w-100 fw-600 py-2"
                      style={{ fontSize: "16px", borderRadius: "8px" }}
                    >
                      Login
                    </Button>
                  </Form>
                  <hr className="my-4" />
                  <p className="text-center fw-semibold" style={{ color: "#6b7280" }}>
                    Don't have an account?{" "}
                    <Link to="/signup" style={{ color: "#224abe", fontWeight: "600", textDecoration: "none" }}>
                      Sign up here
                    </Link>
                  </p>
                </Card.Body>
              </Card>
            </div>
          </div>
        </Container>
      </section>

      {/* Modal shown after submit */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Notification</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{modalMessage}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          {modalMessage.startsWith("Login successful") && (
            <Button variant="primary" onClick={() => { 
              setShowModal(false); 
              setTimeout(() => { window.location.href = '/virtual-tutor/'; }, 500);
            }}>
              Continue
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
}
