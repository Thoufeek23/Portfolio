// src/components/ProjectCarousel.jsx
import ProjectCard from './ProjectCard';

const ProjectCarousel = ({ projects }) => {
  return (
    <>
      <div 
        className="w-full overflow-x-auto no-scrollbar"
      >
        {/* This is the inner container that holds the cards */}
        <div className="flex gap-6 items-stretch"> {/* <-- Added items-stretch */}
          {projects.map((project, index) => (
            // The 'flex-shrink-0' is important to keep the cards from shrinking
            <div key={index} className="w-96 flex-shrink-0">
              <ProjectCard 
                title={project.title}
                description={project.description}
                tech={project.tech}
                image={project.image}
                github={project.github}
                live={project.live}
              />
            </div>
          ))}
        </div>
      </div>
      
      {/* Updated the hint text */}
      <p className="text-center text-gray-500 text-sm mt-4">
        Scroll or swipe to explore projects
      </p>
    </>
  );
};

export default ProjectCarousel;