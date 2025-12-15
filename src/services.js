// components/Services.js
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaChalkboardTeacher, FaBook, FaGraduationCap } from "react-icons/fa";

export default function Services() {
  const publicUrl = process.env.PUBLIC_URL || "";
  const items = [
    {
      icon: <FaBook size={40} color="#4e73df" />,
      title: "Personalized Lessons In 20+ Subjects",
      text: "Math, English, Science, Languages, and more tailored to your child's learning style.",
      img: encodeURI(publicUrl + "/images/serviceimg1.jpg")
    },
    {
      icon: <FaChalkboardTeacher size={40} color="#4e73df" />,
      title: "World-Class Tutors",
      text: "Led by experienced educators with proven track records of student success.",
      img: encodeURI(publicUrl + "/images/black img3.jpg")
    },
    {
      icon: <FaGraduationCap size={40} color="#4e73df" />,
      title: "Exam Preparation That Builds Confidence",
      text: "11+, SATs, GCSE, and global curriculum exams with proven strategies.",
      img: encodeURI(publicUrl + "/images/black img2.jpg")
    }
  ];

  return (
    <section id="services" className="py-5 bg-light">
      <Container>
        <div className="text-center mb-5" data-aos="fade-up">
          <h3 className="text-uppercase text-primary fw-bold" style={{ letterSpacing: "2px" }}>
            Elevate your Child's Learning
          </h3>
          <h2 className="fw-bold mt-3 mb-2">
            Unlock your child's potentials
          </h2>
          <p className="lead text-muted fw-bold">
            with customized lessons and support for a global curriculum
          </p>
        </div>
        
        <Row className="g-4">
          {items.map((item, idx) => (
            <Col md={4} key={idx} data-aos="fade-up" data-aos-delay={idx * 200}>
              <div className="service-card p-4 shadow-sm text-center h-100 hover-zoom">
                <img src={item.img} alt={item.title} className="w-100 rounded mb-3" />
                <div className="mb-3">{item.icon}</div>
                <h5 className="fw-bold mb-2">{item.title}</h5>
                <p className="mb-3 fontSize-20px">{item.text}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
