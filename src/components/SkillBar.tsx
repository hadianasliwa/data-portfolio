import React from 'react';
import { motion } from 'motion/react';
import { Skill } from '../types';

interface SkillBarProps {
  skill: Skill;
  index: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ skill, index }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-[11px] font-bold text-zinc-900 dark:text-white uppercase tracking-wider">
          {skill.name}
        </span>
        <span className="text-[10px] font-mono text-zinc-400 dark:text-slate-600">
          {skill.proficiency}%
        </span>
      </div>
      <div className="w-full bg-zinc-100 dark:bg-slate-800 rounded-full h-1 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.proficiency}%` }}
          transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
          className="bg-indigo-600 dark:bg-indigo-500 h-full rounded-full"
        />
      </div>
    </div>
  );
};

export default SkillBar;
