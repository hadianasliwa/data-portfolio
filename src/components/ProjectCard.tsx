import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Github, ChevronRight } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="group bg-white dark:bg-slate-900 border border-zinc-200 dark:border-slate-800 p-8 rounded-3xl hover:border-indigo-500 transition-all shadow-sm hover:shadow-2xl hover:shadow-indigo-500/10 flex flex-col justify-between"
      id={`project-card-${project.id}`}
    >
      <div>
        <div className="flex justify-between items-start mb-6">
          <span className="text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded">
            {project.category}
          </span>
          <div className="flex space-x-4">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="text-zinc-400 hover:text-indigo-600 dark:hover:text-white transition-colors"
            >
              <Github size={20} />
            </a>
          </div>
        </div>

        <h3 className="text-2xl font-black text-zinc-900 dark:text-white mb-4 leading-tight uppercase tracking-tight italic">
          {project.title}
        </h3>
        <p className="text-zinc-600 dark:text-slate-400 text-sm mb-8 leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.tools.map((tool) => (
            <span
              key={tool}
              className="text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 bg-zinc-50 dark:bg-slate-800 text-zinc-500 dark:text-slate-500 rounded border border-transparent dark:border-slate-700/50"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center text-xs font-black uppercase tracking-widest text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 transition-colors"
          id={`expand-btn-${project.id}`}
        >
          {isExpanded ? 'Collapse' : 'Architecture & Metrics'}
          <motion.div
             animate={{ rotate: isExpanded ? 90 : 0 }}
             className="ml-2"
          >
            <ChevronRight size={14} />
          </motion.div>
        </button>

        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="space-y-6 pt-6 border-t border-zinc-100 dark:border-slate-800 overflow-hidden"
          >
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400 dark:text-slate-600 mb-2">Technical Problem</h4>
              <p className="text-sm text-zinc-700 dark:text-slate-300 italic">{project.problem}</p>
            </div>
            <div className="bg-indigo-50/50 dark:bg-indigo-900/10 p-5 rounded-2xl border border-indigo-100/50 dark:border-indigo-900/50">
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-indigo-600 dark:text-indigo-400 mb-2">Strategic Insight</h4>
              <p className="text-sm text-indigo-900 dark:text-indigo-200 font-medium">{project.results}</p>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
