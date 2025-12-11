import React from "react";
import { Container, Form, Button } from "react-bootstrap";

export default function Contact() {
const handleSubmit = (e) => {
e.preventDefault();
alert("Thank you for contacting us!");
};


return (
<section id="contact" className="py-5">
<Container data-aos="fade-up">
<div className="text-center mb-5">
	<h3 className="text-uppercase text-primary fw-bold" style={{ letterSpacing: "2px" }}>
		Get in Touch
	</h3>
	<h2 className="fw-bold mt-3">
		Your Child's Success Starts Here
	</h2>
	<p className="lead text-muted mt-3 fw-bold">
		See how tailored online lessons can boost results and confidence in just a few weeks.
	</p>
</div>

<div style={{ maxWidth: '600px', margin: '0 auto' }}>
<Form onSubmit={handleSubmit}>
<Form.Group className="mb-3 fw-bold">
<Form.Label>Name</Form.Label>
<Form.Control type="text" placeholder="Enter your name" required className="mb-3 fw-semibold" />
</Form.Group>
<Form.Group className="mb-3 fw-bold">
<Form.Label>Email</Form.Label>
<Form.Control type="email" placeholder="Enter your email" required  className="mb-3 fw-semibold"/>
</Form.Group>
<Form.Group className="mb-3 fw-bold">
<Form.Label>Message</Form.Label>
<Form.Control as="textarea" rows={4} placeholder="Your message " className="mb-3 fw-semibold" />
</Form.Group>
<Button variant="primary" type="submit" className="w-100 fw-semibold">Send Message</Button>
</Form>
</div>
</Container>
</section>
);
}