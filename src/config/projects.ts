export interface Project {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  repo: string;
  status: string;
  githubUser: string;
}

export const projects: Project[] = [
  {
    slug: 'hermes',
    name: 'Hermes',
    tagline: 'Data Intelligence Platform',
    description:
      'Foundational intelligence data platform for acquiring, validating, normalizing, storing, and serving country risk datasets.',
    repo: 'https://github.com/ryomenhaider/Hermes',
    status: 'active',
    githubUser: 'ryomenhaider',
  },
  {
    slug: 'aegis',
    name: 'Aegis',
    tagline: 'Risk Intelligence Platform',
    description:
      'End-to-end risk intelligence platform: FastAPI backend, Redis caching, ML forecasting, and a Next.js frontend.',
    repo: 'https://github.com/ryomenhaider/Aegis',
    status: 'active',
    githubUser: 'ryomenhaider',
  },
  {
    slug: 'atlas',
    name: 'Atlas',
    tagline: 'In Development',
    description:
      'Project scaffolding is in place. Documentation will be published here as the project takes shape.',
    repo: 'https://github.com/ryomenhaider/Atlas',
    status: 'scaffold',
    githubUser: 'ryomenhaider',
  },
  {
    slug: 'aletheia',
    name: 'Aletheia',
    tagline: 'In Development',
    description:
      'Project scaffolding is in place. Documentation will be published here as the project takes shape.',
    repo: 'https://github.com/ryomenhaider/Aletheia',
    status: 'scaffold',
    githubUser: 'ryomenhaider',
  },
  {
    slug: 'vecta',
    name: 'Vecta',
    tagline: 'Computational Math for ML',
    description:
      'A computational maths library for ML, built from scratch in C++17 with Python bindings, chapter-by-chapter after Mathematics for Machine Learning.',
    repo: 'https://github.com/ryomenhaider/Vecta',
    status: 'active',
    githubUser: 'ryomenhaider',
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export const owner = 'haiderali';
export const siteUrl = 'https://haideralidev95.vercel.app/';

// TODO: replace with your real profile URLs
export const socials = {
  github: 'https://github.com/ryomenhaider',
  linkedin: 'https://www.linkedin.com/in/haider-ali-4634773a2/',
  x: 'https://x.com/haideralidev95',
};
