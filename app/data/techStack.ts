import { TechStack } from '../types';

export const techStacks: TechStack[] = [
  {
    category: "Frontend",
    skills: [
      {
        name: "React",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
        proficiency: 90
      },
      {
        name: "Next.js",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg",
        proficiency: 85
      }
      // Add more frontend skills
    ]
  },
  {
    category: "Backend",
    skills: [
      {
        name: "Node.js",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
        proficiency: 80
      }
      // Add more backend skills
    ]
  }
  // Add more categories
];