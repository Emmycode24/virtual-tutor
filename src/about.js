import React, { useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";


export default function About() {
	useEffect(() => {
		AOS.init({ duration: 1000 });
		// ensure we start at the top of the about page when navigated to
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}, []);

	// Prefer using public folder for images unless you want them bundled.
	const learningPic = process.env.PUBLIC_URL + encodeURI('/images/serviceimg2.jpg');

	return (
		<div>
			{/* Hero Section */}
			<section
				id="about"
				className="about-hero d-flex align-items-center text-center "
				style={{
					minHeight: "20vh", // increase to push heading down slightly
					position: "relative",
					paddingTop: "2.5rem",
					paddingBottom: "1rem",
				}}
			>
				<Container>
					<h1 className=" fw-bold " data-aos="fade-up">
						About Giant Strides School
					</h1>
					<p className="lead fw-semibold" data-aos="fade-up" data-aos-delay="100">
						Empowering students and educators to reach their full potential
					</p>
				</Container>
			</section>

			{/* About Content */}
			<section id="about-content" className="py-5 about-content">
				<Container>
					<Row className="align-items-center mb-5">
						<Col md={6} data-aos="fade-right">
							<p className="mb-3 fs-4">
								Giant Strides Online School was born from a simple but powerful belief: every child deserves access to quality education and the right support to thrive no matter their location or learning level.
							</p>
							<p className="mb-3 fs-4">
								As part of Giant Strides Edu-Tech Consulting Limited, we started by supporting families who needed trusted tutors, flexible learning options, and results they could see. Over time, we grew into an online school that combines experienced educators, modern teaching tools, and personalized learning to help children take confident steps forward in their academic journey.
							</p>
							<p className="mb-3 fs-4">

								From early years to secondary education and exam preparation, we focus on progress, confidence, and long-term success, not just grades. Our tutors don’t just teach — they guide, encourage, and help learners unlock their full potential.
								At Giant Strides, learning is not rushed.
								It is intentional, supportive, and impactful.
							</p>
						</Col>
						<Col md={6} data-aos="fade-left">
							<img
								src={learningPic}
								alt="About Virtual Tutor - Expert Tutors and Personalized Learning"
								style={{
									borderRadius: "10px",
									width: "100%",
									height: "auto",
									boxShadow: "0 10px 30px rgba(15, 23, 42, 0.1)",
								}}
							/>
						</Col>
					</Row>					{/* Why Choose Us */}
					<Row className="mt-1">
						<Col lg={12} data-aos="fade-up">
							<h2 className="fw-bold text-center mb-3">Why Choose Us?</h2>
						</Col>
						<Col md={4} className="mb-4" data-aos="fade-up" data-aos-delay="100">
							<div className="p-4 text-center">
								<div
									style={{
										fontSize: "50px",
										marginBottom: "20px",
										color: "#4e73df",
									}}
								>
									👨‍🏫
								</div>
								<h5 className="fw-bold">Expert Tutors</h5>
								<p className="mb-3 fs-4">
									Experienced educators who are passionate about teaching and student success.
								</p>
							</div>
						</Col>
						<Col md={4} className="mb-4" data-aos="fade-up" data-aos-delay="200">
							<div className="p-4 text-center">
								<div
									style={{
										fontSize: "50px",
										marginBottom: "20px",
										color: "#4e73df",
									}}
								>
									📚
								</div>
								<h5 className="fw-bold">Personalized Learning</h5>
								<p className="mb-3 fs-4">
									Tailored lessons in 20+ subjects designed to meet each student's unique needs.
								</p>
							</div>
						</Col>
						<Col md={4} className="mb-4" data-aos="fade-up" data-aos-delay="300">
							<div className="p-4 text-center">
								<div
									style={{
										fontSize: "50px",
										marginBottom: "20px",
										color: "#4e73df",
									}}
								>
									🎯
								</div>
								<h5 className="fw-bold">Results Driven</h5>
								<p className="mb-3 fs-4">
									Proven strategies that build confidence and deliver real academic results.
								</p>
							</div>
						</Col>
					</Row>
				</Container>
			</section>

			{/* Call to Action */}
			<section className="bg-primary text-white py-5 text-center">
				<Container data-aos="zoom-in">
					<h2 className="fw-bold mb-3">Ready to Transform Your Child's Learning?</h2>
					<p className="lead mb-4">
						Book your first lesson today and see the difference personalized tutoring can make.
					</p>
					<Button as={Link} to="/signup" variant="light" size="lg" className="px-5">
						Get Started
					</Button>
				</Container>
			</section>
		</div>
	);
}