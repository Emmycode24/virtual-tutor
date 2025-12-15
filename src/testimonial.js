import React from "react";
import { Container, Carousel, Row, Col } from "react-bootstrap";


export default function Testimonials() {
const testimonials = [
{
	name: "Teni ",
	role: "GCSE Student",
	text: "Giant Strides played a major role in my success. I achieved A+ in both Mathematics and Physics in my GCSE, and the tutors were patient, clear, and extremely supportive throughout my exam preparation.",
	emoji: "👩‍🏫"
},
{
	name: ".⁠ ⁠Mrs Eno  (UK)",
	role: "parent",
	text: "“The structure of Giant Strides and the quality of the tutors are exceptional. My children improved significantly and advanced academically within a short period. I highly recommend them to any parent seeking real results.”",
	emoji: "⭐"
},
{
	name: "Mrs Abiona (Canada)",
	role: "Parent",
	text: "“With Giant Strides, my children went beyond just learning. They started writing code, creating their own games, and building websites. The exposure and confidence they gained are truly impressive.”",
	emoji: "⭐"
},
{
	name: "Mrs Ola (Israel)",
	role: "Parent",
	text: "“I live in a non-English-speaking country, and I was worried about my son’s language development. Starting from scratch, he can now read English fluently, all thanks to the dedication of Giant Strides tutors.”",
	emoji: "⭐"
},
{
	name: "⁠Bryan’s Mum (UK)",
	role: "Parent",
	text: "“Giant Strides tutors are simply the best you can come by. They are excellent in character, highly professional, and pay close attention to detail. You can tell they genuinely care about each child’s progress.”",
	emoji: "⭐"
},
{
	name: " ⁠Mrs Olaide",
	role: "Parent",
	text: "“I am so glad I registered my child with Giant Strides. He passed his 11+ exam and gained admission into his choice grammar school. Thank you for your guidance, structure, and encouragement.”",
	emoji: "⭐"
},
{
	name: "Mrs O.I (UK)",
	role: "Parent",
	text: "“As a very busy parent, Giant Strides has been a huge support. I never have to worry about whether my children are learning. I can confidently leave them knowing they are in safe and capable hands.”",
	emoji: "⭐"
},
{
	name: "Mr M. (Mexico)",
	role: "Parent",
	text: "“My daughter moved from not knowing any English alphabets at all to reading confidently within one year. The patience and consistency of Giant Strides tutors made all the difference.”",
	emoji: "⭐"
},
{
	name: "Parent (UK)",
	role: "Parent",
	text: "“The communication, progress tracking, and teaching quality at Giant Strides are outstanding. I receive regular updates and can clearly see my child’s improvement, both academically and in confidence.”",
	emoji: "⭐"
},

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
<Carousel
	indicators={true}
	controls={true}
	interval={4000}
	className="testimonial-carousel"
>
	{Array.from({ length: Math.ceil(testimonials.length / 3) }).map((_, slideIdx) => (
		<Carousel.Item key={slideIdx}>
			<Row className="justify-content-center">
				{testimonials.slice(slideIdx * 3, slideIdx * 3 + 3).map((t, idx) => (
					<Col xs={12} md={6} lg={4} key={idx} className="mb-4 d-flex align-items-stretch">
						<div className="testimonial-box p-4 shadow-sm w-100" style={{ borderLeft: "4px solid #4e73df", borderRadius: "8px", backgroundColor: "#fff" }}>
							<p className="mb-4 " style={{ fontStyle: "italic", color: "black", fontSize: "20px" }}>
								"{t.text}"
							</p>
							<div className="d-flex align-items-center gap-2 justify-content-center">
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
		</Carousel.Item>
	))}
</Carousel>
</Container>
</section>
);
}