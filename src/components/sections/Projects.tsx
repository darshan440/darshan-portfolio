"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

type Project = {
  title: string;
  description: string;
  tech?: string[];
  image?: string;
  live?: string | null;
  github?: string | null;
  colSpan: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "InvestBridge",
    description: "Bridge Between Investors & Entrepreneurs. Connect visionary entrepreneurs with smart investors on India's premier investment platform. Transform innovative ideas into successful ventures with expert guidance and financial backing.",
    tech: ["Next.js", "TypeScript", "Tailwind", "Firebase"],
    image: "/IBBG.png",
    live: "https://investbridge-9720e.web.app/",
    github: "https://github.com/darshan440/Bridge-Between-Investor-And-Business-People",
    colSpan: "md:col-span-2",
  },
  {
    title: "Polzet",
    description: "Social media polling platform with an engaging real-time voting experience and dynamic charts. Built as a frontend developer focusing on performance and UX.",
    tech: ["React", "Firebase", "Framer Motion"],
    image: "/PBG.png",
    live: "https://testpolzet.polzet.in",
    github: null,
    colSpan: "md:col-span-1",
  },
  {
    title: "Sansai",
    description: "Sansai is an AI-powered full-stack career assistant web app designed to supercharge your professional journey. With interactive tools and AI-driven features, it helps you stay updated on in-demand skills, create optimized resumes, and prepare for interviews like never before.",
    tech: ["Next.js", "AI", "Tailwind", "LLM APIs"],
    image: "/SBG.png",
    live: "https://sansai-ten.vercel.app/",
    github: "https://github.com/darshan440/SANSAI",
    colSpan: "md:col-span-2",
  },
  {
    title: "More Coming Soon",
    description: "Always building. Check GitHub for the latest projects and experiments.",
    colSpan: "md:col-span-1",
    isComingSoon: true,
    github: "https://github.com/darshan440",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto max-w-[1200px] px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tighter">
              Featured <span className="text-gradient">Work</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-transparent rounded-full" />
          </div>
          <p className="text-muted-foreground max-w-md">
            A selection of premium products built with a focus on seamless UX and scalable architectures.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, idx) => {
            if (project.isComingSoon) {
              return (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`group relative overflow-hidden rounded-3xl border border-border flex flex-col items-center text-center p-8 sm:p-10 ${project.colSpan}`}
                  style={{ background: 'linear-gradient(135deg, rgba(59,130,246,0.05), rgba(139,92,246,0.05))' }}
                >
                  <div className="flex-1 flex flex-col items-center justify-center gap-4 w-full h-full min-h-[300px]">
                    <div className="text-5xl mb-2 group-hover:animate-bounce transition-transform duration-300">🚀</div>
                    <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
                    <p className="text-muted-foreground text-sm max-w-[250px]">{project.description}</p>
                    <a 
                      href={project.github!} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="mt-2 px-6 py-2.5 bg-transparent text-foreground hover:bg-white/5 rounded-full text-sm font-medium transition-colors border border-border hover:border-white/20"
                    >
                      View GitHub →
                    </a>
                  </div>
                </motion.div>
              );
            }

            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`group relative overflow-hidden rounded-3xl border border-border bg-card ${project.colSpan}`}
              >
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-500 z-10" />
                
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${project.image})` }}
                />

                {/* Content */}
                <div className="relative z-20 h-full flex flex-col justify-end p-8 sm:p-10 min-h-[400px]">
                  <div className="translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech?.map((t) => (
                        <span key={t} className="px-3 py-1 text-xs font-medium bg-black/50 backdrop-blur-md rounded-full text-white border border-white/10">
                          {t}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">{project.title}</h3>
                    <p className="text-white/80 mb-6 line-clamp-3 text-sm">{project.description}</p>
                    
                    <div className="flex flex-wrap items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {project.live && (
                        <a href={project.live} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-5 py-2.5 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full text-sm font-medium transition-colors">
                          Live Demo <ArrowUpRight size={16} />
                        </a>
                      )}
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-5 py-2.5 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white rounded-full text-sm font-medium transition-colors border border-white/10">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg> Code
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
