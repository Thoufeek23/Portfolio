import Section from '../components/Section';

const About = () => {
	return (
		<Section>
			<h2 className="text-3xl font-bold text-center mb-6">About Me</h2>
			<p className="text-gray-300 max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
				I’m Mohamed Thoufeek Ali, a Computer Science undergraduate at Binghamton University with a strong focus on full-stack development and building scalable software systems. I enjoy working across the stack — designing APIs, developing modern web interfaces, and ensuring smooth integration between frontend and backend.
				My projects reflect a mix of technical depth and business thinking — from MovieSocial, a social platform for film enthusiasts, to a management system for a brick manufacturing company. I’m passionate about building solutions that are efficient, user-friendly, and impactful in the real world.
			</p>
		</Section>
	);
};

export default About;