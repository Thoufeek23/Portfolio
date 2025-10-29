import Section from '../components/Section';

const TechStack = () => {
	const tech = [
		'React',
		'Node.js',
		'Express',
		'MongoDB',
		'TailwindCSS',
		'Framer Motion',
	];

	return (
		<Section>
			<h2 className="text-3xl font-bold text-center mb-6">Tech Stack</h2>
			<div className="flex flex-wrap justify-center gap-3">
				{tech.map((t) => (
					<span key={t} className="px-3 py-1 bg-gray-700 text-green-300 rounded-full text-sm">
						{t}
					</span>
				))}
			</div>
		</Section>
	);
};

export default TechStack;
