import Section from '../components/Section';

const TechStack = () => {
    // Expanded list based on your resume's technical skills [cite: 6, 7]
	const tech = [
        'JavaScript (ES6+)',
        'TypeScript',
		'React',
		'Node.js',
        'Python',
		'Flask',
        'C',
        'C++',
        'Java',
        'LangChain',
        'Git',
        'FAISS',
        'REST APIs',
        'Google Cloud',
        'Workato',
		'MongoDB',
		'TailwindCSS',
		'Framer Motion',
	];

	return (
		<Section>
			<h2 className="text-3xl font-bold text-center mb-8">My Tech Stack</h2>
			<div className="flex flex-wrap justify-center gap-3">
				{tech.map((t) => (
					<span key={t} className="px-4 py-2 bg-gray-800 text-green-300 rounded-lg text-sm font-mono shadow-md">
						{t}
					</span>
				))}
			</div>
		</Section>
	);
};

export default TechStack;