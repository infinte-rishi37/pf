import { techStacks } from '@/app/data/techStack';
import Image from 'next/image';

const TechStack = ({ theme }: { theme: string }) => {
  return (
    <section className={`w-full p-8 md:p-16 ${theme === 'dark' ? 'bg-pall-Dd' : 'bg-pall-ll'}`}>
      <h2 className="text-h1 mb-8">Tech Stack</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {techStacks.map((category) => (
          <div key={category.category} className="bg-white/10 backdrop-blur-md rounded-lg p-6">
            <h3 className="text-h2 mb-4">{category.category}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {category.skills.map((skill) => (
                <div key={skill.name} className="flex flex-col items-center">
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-12 h-12 mb-2"
                  />
                  <p className="text-sm">{skill.name}</p>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: `${skill.proficiency}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;