export interface Project {
  id: string;
  title: string;
  description: string;
  tools: string[];
  problem: string;
  dataset: string;
  approach: string;
  results: string;
  githubUrl: string;
  demoUrl?: string;
  category: 'Python' | 'BI' | 'ML' | 'SQL';
}

export interface Skill {
  name: string;
  category: 'Programming' | 'Visualization' | 'Data' | 'Tools';
  proficiency: number; // 0-100
  icon?: string;
}
