import { projects } from '@/app/data/projects';
import Image from 'next/image';
import Link from 'next/link';

const Projects = ({ theme }: { theme: string }) => {
  return (
    <section className={`w-full p-8 md:p-16 ${theme === 'dark' ? 'bg-pall-dd' : 'bg-pall-ll'}`}>
      <h2 className="text-h1 mb-8">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div key={project.title} className="bg-white/10 backdrop-blur-md rounded-lg overflow-hidden">
            {project.image && (
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <div className="p-6">
              <h3 className="text-h3 mb-2">{project.title}</h3>
              <p className="text-sm mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs rounded-full bg-blue-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <Link
                  href={project.link}
                  className="text-blue-500 hover:text-blue-600"
                  target="_blank"
                >
                  Live Demo
                </Link>
                {project.github && (
                  <Link
                    href={project.github}
                    className="text-blue-500 hover:text-blue-600"
                    target="_blank"
                  >
                    GitHub
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;