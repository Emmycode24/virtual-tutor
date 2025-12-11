import React from "react";
import { Container, Row, Col } from "react-bootstrap";


export default function Testimonials() {
const testimonials = [
{
	name: "Mrs. Adenike O.",
	role: "Parent",
	text: "They helped my daughter go from struggling in math to confidently solving advanced problems on her own. The tutors don't just teach, they genuinely care about how each student learns best.",
	emoji: "👩‍🏫"
},
{
	name: "Samuel K.",
	role: "High School Student",
	text: "I've tried other online tutoring platforms, but none felt as personal as this. Every session was tailored to what I needed help with, and my grades improved faster than I expected.",
	emoji: "🎓"
},
{
	name: "Dr. L. Onabanjo",
	role: "Parent",
	text: "As a parent, I love how flexible and engaging the lessons are. The tutors know how to keep students motivated and make complex topics simple. It's quality education you can truly trust.",
	emoji: "⭐"
}
];


return (
<section id="testimonials" className="py-5 bg-light">
<Container>
<div className="text-center mb-5" data-aos="fade-up">
	<h3 className="text-uppercase text-primary fw-bold" style={{ letterSpacing: "2px" }}>
		Testimonials
	</h3>
	<h2 className="fw-bold mt-3">
		What Our Students and Parents Say
	</h2>
</div>
<Row className="g-4">
{testimonials.map((t, idx) => (
<Col md={4} key={idx} data-aos="fade-up" data-aos-delay={idx * 200}>
<div className="testimonial-box p-4 shadow-sm h-100" style={{ borderLeft: "4px solid #4e73df", borderRadius: "8px", backgroundColor: "#fff" }}>
<p className="mb-4 fs-4" style={{ fontStyle: "italic", color: "black" }}>"{t.text}"</p>
<div className="d-flex align-items-center gap-2">
	<div style={{ fontSize: "25px" }}>{t.emoji}</div>
	<div>
		<h6 className="fw-bold mb-0">{t.name}</h6>
		<small className="text-muted fw-bold">{t.role}</small>
	</div>
</div>
</div>
</Col>
))}
</Row>
</Container>
</section>
);
}