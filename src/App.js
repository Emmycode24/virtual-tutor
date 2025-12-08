import React, { useEffect } from 'react';
import AOS from "aos";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./navbar";
import Hero from "./hero";
import About from "./about"
import Services from "./services";
import Testimonials from "./testimonial";
import Contact from "./contact";
import Footer from "./footer";
import Login from "./login";
import Signup from "./signup";


export default function App() {
useEffect(() => {
AOS.init({ duration: 1000, once: true });
}, []);

	// Scroll to element matching the hash when the location changes
	function ScrollToHash() {
		const location = useLocation();
		useEffect(() => {
			if (!location.hash) return;
			const id = location.hash.replace('#', '');
			// slight delay to allow rendering
			setTimeout(() => {
				const el = document.getElementById(id);
				if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
				else window.scrollTo({ top: 0, behavior: 'smooth' });
			}, 50);
		}, [location.pathname, location.hash]);

		return null;
	}


return (
<>
<Navbar />
<Routes>
<Route path="/" element={<><Hero /> <About /><Services /><Testimonials /><Contact /></>} />
<Route path="/login" element={<Login />} />
<Route path="/signup" element={<Signup />} />
</Routes>
<ScrollToHash />
<Footer />
</>
);
}