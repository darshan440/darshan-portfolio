"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Terminal } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Mesh Gradient */}
      <div className="absolute inset-0 bg-mesh-gradient opacity-30 z-0 mix-blend-screen pointer-events-none" />
      
      {/* Subtle Grid Overlay */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-10 z-0 pointer-events-none" />

      <div className="container relative z-10 px-6 mx-auto max-w-[1200px] flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-sm rounded-full bg-secondary/10 text-secondary border border-secondary/20"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
          </span>
          Available for new opportunities
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6"
        >
          Darshan <span className="text-gradient">Thakkar</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-4 font-medium"
        >
          Full Stack Developer crafting modern web & AI experiences.
        </motion.p>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-base md:text-lg text-muted-foreground/80 max-w-3xl mb-10"
        >
          Building scalable digital products with modern UI, backend systems, and future-focused AI solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <Link
            href="#projects"
            className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-medium text-primary-foreground bg-primary rounded-full overflow-hidden transition-all hover:scale-105 shadow-[0_0_20px_rgba(139,92,246,0.4)]"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
            View Projects
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <a
            href="/resume.pdf"
            download="Darshan_Thakkar_Resume.pdf"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-medium rounded-full glass hover:bg-white/10 transition-colors"
          >
            <Download size={16} />
            Download Resume
          </a>
        </motion.div>

        {/* Floating tech stack visual */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute hidden lg:flex items-center justify-center top-1/4 lg:left-0 xl:-left-20 animate-float"
        >
          <div className="glass p-4 rounded-2xl flex items-center gap-3">
            <div className="w-10 h-10 bg-[#3178C6]/20 rounded-xl flex items-center justify-center">
              <span className="text-[#3178C6] font-bold">TS</span>
            </div>
            <div className="text-left">
              <p className="text-xs text-muted-foreground font-mono">language</p>
              <p className="text-sm font-bold">TypeScript</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute hidden lg:flex items-center justify-center bottom-1/4 lg:right-0 xl:-right-10 animate-float"
          style={{ animationDelay: "1s" }}
        >
          <div className="glass p-4 rounded-2xl flex items-center gap-3">
             <div className="w-10 h-10 bg-foreground/10 rounded-xl flex items-center justify-center">
              <Terminal size={20} className="text-foreground" />
            </div>
            <div className="text-left">
              <p className="text-xs text-muted-foreground font-mono">framework</p>
              <p className="text-sm font-bold">Next.js 15</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
