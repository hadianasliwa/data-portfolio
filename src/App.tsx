/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { Mail, Github, Linkedin, ExternalLink, ChevronDown, Download, Database, BarChart3, Binary, Code2, Send } from 'lucide-react';
import React, { useState, useMemo } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProjectCard from './components/ProjectCard';
import SkillBar from './components/SkillBar';
import projectsData from './data/projects.json';
import skillsData from './data/skills.json';
import { Project, Skill } from './types';
import { ThemeProvider } from './ThemeContext';

export default function App() {
  const [filter, setFilter] = useState<'All' | 'Python' | 'BI' | 'ML' | 'SQL'>('All');
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const filteredProjects = useMemo(() => {
    if (filter === 'All') return projectsData as Project[];
    return (projectsData as Project[]).filter((p) => p.category === filter);
  }, [filter]);

  const skillCategories = ['Programming', 'Data', 'Visualization', 'Tools'] as const;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormState('success');
      setTimeout(() => setFormState('idle'), 3000);
    }, 1500);
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-[#0B0F1A] font-sans transition-colors duration-300 selection:bg-indigo-100 selection:text-indigo-900 dark:selection:bg-indigo-900/30">
        <Navbar />

        {/* Decorative background */}
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden opacity-30 dark:opacity-10">
           <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)] [background-size:32px_32px]" />
           <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-indigo-500/10 blur-[120px] rounded-full" />
           <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-500/10 blur-[100px] rounded-full" />
        </div>

        <main className="relative z-10 pt-16">
          {/* Hero Section */}
          <section id="home" className="min-h-[calc(100vh-80px)] flex flex-col items-center justify-center px-6 sm:px-12 lg:px-20 py-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-5xl mx-auto"
            >
              <p className="text-indigo-600 dark:text-indigo-400 font-mono text-sm tracking-[0.3em] font-bold mb-8 uppercase text-center block">
                // Senior Data Scientist & Analyst
              </p>
              <h1 className="text-6xl sm:text-[100px] md:text-[120px] font-black text-zinc-900 dark:text-white mb-10 tracking-tighter leading-[0.85] italic uppercase flex flex-col">
                <span>Hadiana</span>
                <span className="text-indigo-600 dark:text-indigo-500 drop-shadow-sm">Sliwa</span>
              </h1>
              <div className="max-w-2xl mx-auto border-l-4 border-indigo-500 pl-8 mb-12 text-left">
                <p className="text-xl text-zinc-600 dark:text-slate-400 leading-relaxed italic">
                  Specializing in predictive modeling, deep learning architectures, and turning raw datasets into strategic business insights.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <a
                  href="#projects"
                  className="w-full sm:w-auto px-10 py-4 bg-indigo-600 text-white rounded-lg font-black uppercase tracking-widest hover:bg-indigo-500 transition-all shadow-xl shadow-indigo-600/20"
                >
                  View Projects
                </a>
                <a
                  href="#contact"
                  className="w-full sm:w-auto px-10 py-4 border border-zinc-200 dark:border-slate-800 dark:bg-slate-900/50 text-zinc-800 dark:text-slate-300 rounded-lg font-black uppercase tracking-widest hover:bg-zinc-50 dark:hover:bg-slate-800 transition-all"
                >
                  Contact Me
                </a>
              </div>
            </motion.div>
            
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="mt-20 text-zinc-400"
            >
              <ChevronDown size={32} />
            </motion.div>
          </section>

          {/* About Section */}
          <section id="about" className="py-24 px-6 sm:px-12 bg-zinc-50/50 dark:bg-slate-900/10">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 items-start">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="lg:col-span-2"
                >
                  <h2 className="text-4xl font-black text-zinc-900 dark:text-white mb-8 flex items-center uppercase italic">
                    <span className="w-12 h-2 bg-indigo-600 mr-4" />
                    Professional Story
                  </h2>
                  <div className="space-y-6 text-zinc-600 dark:text-slate-400 leading-relaxed text-xl">
                    <p>
                      I am a Data Scientist with a deep focus on extracting predictive patterns from complex, high-velocity datasets. My methodology combines statistical rigor with a relentless pursuit of business impact.
                    </p>
                    <p>
                      With expertise spanning Python engineering, advanced SQL optimization, and neural network architectures, I specialize in building end-to-end data products. I don't just provide charts; I deliver decision-ready frameworks.
                    </p>
                  </div>
                  
                  <div className="mt-12 flex flex-wrap gap-6">
                    <div className="flex flex-col">
                       <span className="text-xs font-black uppercase tracking-widest text-zinc-400 dark:text-slate-500 mb-2">LinkedIn</span>
                       <span className="text-sm font-bold text-zinc-900 dark:text-white">/in/hadiana-sliwa</span>
                    </div>
                    <div className="flex flex-col">
                       <span className="text-xs font-black uppercase tracking-widest text-zinc-400 dark:text-slate-500 mb-2">GitHub</span>
                       <span className="text-sm font-bold text-zinc-900 dark:text-white">@hadianasliwa</span>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div
                   initial={{ opacity: 0, scale: 0.9 }}
                   whileInView={{ opacity: 1, scale: 1 }}
                   transition={{ duration: 0.6 }}
                   className="relative"
                >
                  <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-2xl border border-zinc-100 dark:border-slate-800">
                    <h3 className="text-sm font-black uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-6">Quick Facts</h3>
                    <div className="space-y-6">
                       <div className="flex items-center gap-4">
                          <div className="w-10 h-10 bg-indigo-50 dark:bg-indigo-900/30 rounded-lg flex items-center justify-center text-indigo-600">
                             <Database size={20} />
                          </div>
                          <div>
                             <p className="text-xs text-zinc-400 dark:text-slate-500 font-bold uppercase">Experience</p>
                             <p className="text-lg font-black text-zinc-900 dark:text-white tracking-tight">7+ YEARS</p>
                          </div>
                       </div>
                       <div className="flex items-center gap-4">
                          <div className="w-10 h-10 bg-emerald-50 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center text-emerald-600">
                             <BarChart3 size={20} />
                          </div>
                          <div>
                             <p className="text-xs text-zinc-400 dark:text-slate-500 font-bold uppercase">Impact</p>
                             <p className="text-lg font-black text-zinc-900 dark:text-white tracking-tight">40+ PROJECTS</p>
                          </div>
                       </div>
                    </div>
                    <button className="w-full mt-10 py-4 border-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 font-black uppercase tracking-widest rounded-xl hover:bg-indigo-600 hover:text-white transition-all">
                       Download CV
                    </button>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="py-24 px-6 sm:px-12 lg:px-20 max-w-[1440px] mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <div className="text-left">
                <h2 className="text-5xl font-black text-zinc-900 dark:text-white mb-4 uppercase tracking-tighter italic">Featured Projects</h2>
                <p className="text-xl text-zinc-600 dark:text-slate-400 max-w-xl border-l-2 border-indigo-500 pl-6">
                  Extracting signal from noise through technical excellence.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {['All', 'Python', 'BI', 'ML', 'SQL'].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setFilter(cat as any)}
                    className={`px-5 py-2 rounded text-[10px] font-black uppercase tracking-[0.2em] transition-all ${
                      filter === cat
                        ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/20'
                        : 'bg-zinc-100 dark:bg-slate-900 text-zinc-600 dark:text-slate-500 hover:text-zinc-900 dark:hover:text-slate-300 border border-transparent dark:border-slate-800'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <motion.div 
               layout
               className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              <AnimatePresence mode='popLayout'>
                {filteredProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </AnimatePresence>
            </motion.div>
          </section>

          {/* Skills Section */}
          <section id="skills" className="py-24 px-6 sm:px-12 lg:px-20 bg-[#0c0f1d] text-white overflow-hidden relative border-y border-slate-900">
            {/* Visual background for skills */}
            <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none text-indigo-500">
              <Binary size={600} />
            </div>

            <div className="max-w-[1440px] mx-auto relative z-10">
              <div className="flex flex-col md:flex-row justify-between items-start mb-20">
                <div>
                  <h2 className="text-5xl font-black mb-6 uppercase tracking-tighter italic">Core Proficiencies</h2>
                  <p className="text-slate-400 max-w-xl text-lg leading-relaxed">
                    Continuously expanding the architectural toolkit to stay at the cutting edge of industrial data science.
                  </p>
                </div>
                <div className="mt-8 md:mt-0 p-8 border border-slate-800 rounded-2xl bg-slate-900/50 backdrop-blur-md">
                   <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 mb-6">Stacked Expertise</p>
                   <div className="flex gap-8 text-indigo-400 opacity-80">
                      <div className="flex flex-col items-center gap-2">
                        <Code2 size={24} />
                      </div>
                      <div className="flex flex-col items-center gap-2">
                        <Database size={24} />
                      </div>
                      <div className="flex flex-col items-center gap-2">
                        <BarChart3 size={24} />
                      </div>
                   </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                {skillCategories.map((category) => (
                  <div key={category}>
                    <h3 className="text-xs font-black mb-8 text-indigo-400 uppercase tracking-[0.3em] flex items-center">
                      {category}
                    </h3>
                    {(skillsData as Skill[])
                      .filter((s) => s.category === category)
                      .map((skill, index) => (
                        <SkillBar key={skill.name} skill={skill} index={index} />
                      ))}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Blog/Insights Section (Bonus) */}
          <section className="py-24 px-4 max-w-7xl mx-auto">
             <div className="flex justify-between items-end mb-12">
                <div>
                   <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-2">Latest Insights</h2>
                   <p className="text-zinc-600 dark:text-zinc-400">Thoughts on data engineering and machine learning.</p>
                </div>
                <button className="hidden sm:block text-sm font-semibold text-blue-600 hover:underline">View All Posts</button>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { title: "Optimizing PostgreSQL for Billions of Rows", date: "June 2024", tag: "Engineering" },
                  { title: "Generative AI in Predictive Analytics", date: "August 2024", tag: "AI/ML" }
                ].map((post, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ y: -5 }}
                    className="p-8 bg-zinc-50 dark:bg-zinc-900/50 rounded-2xl border border-zinc-200 dark:border-zinc-800 flex flex-col justify-between group"
                  >
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-4 inline-block">{post.tag}</span>
                      <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4 group-hover:text-blue-600 transition-colors">{post.title}</h3>
                    </div>
                    <div className="flex justify-between items-center mt-8">
                       <span className="text-sm text-zinc-500">{post.date}</span>
                       <button className="p-2 rounded-full bg-white dark:bg-zinc-800 shadow-sm"><ExternalLink size={16} /></button>
                    </div>
                  </motion.div>
                ))}
             </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="py-32 px-6 sm:px-12 bg-indigo-600 text-white">
            <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.4em] text-indigo-200 mb-6">// Global Connectivity</p>
                <h2 className="text-6xl md:text-8xl font-black mb-10 tracking-tighter leading-none italic uppercase">Let's solve<br/>together.</h2>
                <p className="text-indigo-100 mb-12 text-xl leading-relaxed max-w-md">
                  Whether it's a specific data challenge or a grand architectural vision, I am ready to collaborate.
                </p>
                
                <div className="space-y-8">
                  <a href="mailto:hadiana.eng@gmail.com" className="flex items-center gap-6 group">
                    <div className="w-16 h-16 rounded-2xl border-2 border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-indigo-600 transition-all">
                      <Mail size={24} />
                    </div>
                    <span className="text-2xl font-black uppercase tracking-tight italic">hadiana.eng@gmail.com</span>
                  </a>
                </div>
              </div>
              
              <div className="bg-white rounded-[2rem] p-10 md:p-16 text-zinc-900 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-bl-full opacity-50" />
                {formState === 'success' ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="h-full flex flex-col items-center justify-center text-center py-10"
                  >
                    <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                       <Send size={28} />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                    <p className="text-zinc-600">Thanks for reaching out. I'll get back to you shortly.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold uppercase text-zinc-400 mb-1">Name</label>
                      <input 
                        type="text" 
                        required
                        className="w-full px-4 py-3 rounded-lg bg-zinc-50 border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                        placeholder="Your Name"
                        id="contact-name"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase text-zinc-400 mb-1">Email</label>
                      <input 
                        type="email" 
                        required
                        className="w-full px-4 py-3 rounded-lg bg-zinc-50 border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                        placeholder="your@email.com"
                        id="contact-email"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase text-zinc-400 mb-1">Message</label>
                      <textarea 
                        rows={4}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-zinc-50 border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all resize-none"
                        placeholder="How can I help you?"
                        id="contact-message"
                      ></textarea>
                    </div>
                    <button 
                      type="submit"
                      disabled={formState === 'submitting'}
                      className="w-full py-4 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition-all flex items-center justify-center gap-2"
                      id="contact-submit"
                    >
                      {formState === 'submitting' ? 'Sending...' : 'Send Message'}
                      <Send size={18} />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </ThemeProvider>
  );
}
