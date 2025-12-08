import React, { useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";


export default function About() {
	useEffect(() => {
		AOS.init({ duration: 1000 });
		// ensure we start at the top of the about page when navigated to
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}, []);

	return (
		<div>
			{/* Hero Section */}
			<section
				id="about"
				className="about-hero d-flex align-items-center text-center "
				style={{
					minHeight: "5vh",
					position: "relative",
				}}
			>
				<Container>
					<h1 className="display-1 fw-bold mb-3" data-aos="fade-up">
						About Virtual Tutor
					</h1>
					<p className="lead" data-aos="fade-up" data-aos-delay="100">
						Empowering students and educators to reach their full potential
					</p>
				</Container>
			</section>

			{/* About Content */}
			<section id="about-content" className="py-5 about-content">
				<Container>
					<Row className="align-items-center mb-5">
						<Col md={6} data-aos="fade-right">
							<h2 className="fw-bold mb-4">Our Story</h2>
							<p className="mb-3">
								Founded with a vision to revolutionize online education, Virtual-Tutor brings together experienced educators, modern technology, and a passion for student success.
							</p>
							<p className="mb-3">
								With a team of over 80 dedicated tutors across different subjects and year groups, we provide structured, curriculum-aligned teaching to students preparing for national and international examinations, including UK 11+ Grammar School Entrance Exams, SATs, and Primary/Secondary curriculum support.
							</p>
							<p>
								Our mission is simple: to help every student unlock their academic brilliance and build confidence in their abilities.
							</p>
					</Col>
					<Col md={6} data-aos="fade-left">
						<img 
							src="/images/learning pic 1.jpg" 
							alt="About Virtual Tutor - Expert Tutors and Personalized Learning" 
							style={{ 
								borderRadius: "10px", 
								width: "100%", 
								height: "auto",
								boxShadow: "0 10px 30px rgba(15, 23, 42, 0.1)"
							}} 
						/>
					</Col>
				</Row>					{/* Why Choose Us */}
					<Row className="mt-5">
						<Col lg={12} data-aos="fade-up">
							<h2 className="fw-bold text-center mb-5">Why Choose Us?</h2>
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
								<p>
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
								<p>
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
								<p>
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
					<Button href="/signup" variant="light" size="lg">
						Get Started
					</Button>
				</Container>
			</section>
		</div>
	);
}