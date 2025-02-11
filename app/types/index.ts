export interface Achievement {
  title: string;
  description: string;
  date: string;
  link?: string;
  platform?: string;
}

export interface Project {
  title: string;
  description: string;
  techStack: string[];
  link: string;
  image?: string;
  github?: string;
}

export interface TechStack {
  category: string;
  skills: {
    name: string;
    icon: string;
    proficiency: number;
  }[];
}

export interface DSAProgress {
  platform: string;
  solved: number;
  total: number;
  easy: number;
  medium: number;
  hard: number;
}

export interface OpenSourceContribution {
  repository: string;
  description: string;
  link: string;
  date: string;
  type: 'pull-request' | 'issue' | 'commit';
}