"use client";

import { motion } from "framer-motion";
import { Code2, Cpu, Rocket, Users } from "lucide-react";

const stats = [
  { label: "Years Learning", value: "3+", icon: <Code2 className="text-primary" /> },
  { label: "Projects Built", value: "15+", icon: <Rocket className="text-secondary" /> },
  { label: "Tech Stack", value: "10+", icon: <Cpu className="text-accent" /> },
  { label: "Clients", value: "5+", icon: <Users className="text-primary" /> },
];

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tighter">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-transparent rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6 text-lg text-muted-foreground/90"
          >
            <p>
              I am currently on my <span className="text-foreground font-semibold">BCA journey</span>, actively exploring the bleeding edge of full stack development and artificial intelligence. 
            </p>
            <p>
              With a strong foundation in modern UI/UX and scalable backend systems, my ambition is to build products that not only function flawlessly but also deliver a <span className="text-foreground font-semibold">premium, cinematic user experience</span>.
            </p>
            <p>
              I thrive on the startup mindset—moving fast, learning continuously, and turning complex ideas into seamless digital solutions. Whether it's crafting high-performance interfaces with Next.js or building robust architectures, I approach every project with an engineering and design-first mentality.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, index) => (
              <div key={index} className="glass p-6 rounded-2xl flex flex-col gap-4 hover:-translate-y-1 transition-transform duration-300">
                <div className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center">
                  {stat.icon}
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-foreground mb-1">{stat.value}</h3>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
