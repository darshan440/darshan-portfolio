"use client";

import { motion } from "framer-motion";

const timeline = [
  {
    year: "Present",
    title: "AI & Full Stack Expansion",
    description: "Diving deep into Artificial Intelligence, Next.js 15, and building modern SaaS products with premium UI/UX.",
    active: true,
  },
  {
    year: "2024",
    title: "Freelancing & Client Projects",
    description: "Started taking on freelance projects, building end-to-end web applications for clients, focusing on scalable architectures.",
    active: false,
  },
  {
    year: "2023",
    title: "Full Stack Development",
    description: "Mastered React, Node.js, and Firebase. Built core projects like Polzet and InvestBridge, focusing on user experience.",
    active: false,
  },
  {
    year: "2022",
    title: "BCA Journey Begins",
    description: "Started Bachelor of Computer Applications. Explored foundational programming, data structures, and web fundamentals.",
    active: false,
  },
];

export function Journey() {
  return (
    <section id="journey" className="py-24 relative">
      <div className="container mx-auto max-w-[1200px] px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tighter">
            My <span className="text-gradient">Journey</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-transparent rounded-full mx-auto" />
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />
          
          <div className="space-y-12">
            {timeline.map((item, idx) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 ${idx % 2 === 0 ? "md:flex-row-reverse" : ""}`}
              >
                {/* Node */}
                <div className={`absolute left-4 md:left-1/2 w-4 h-4 rounded-full -translate-x-1/2 ${item.active ? "bg-primary shadow-[0_0_15px_rgba(139,92,246,0.8)]" : "bg-card border border-border"}`} />
                
                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${idx % 2 === 0 ? "md:pl-12 text-left" : "md:pr-12 md:text-right"}`}>
                  <div className="glass p-6 rounded-2xl hover:bg-white/10 transition-colors">
                    <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold rounded-full bg-primary/10 text-primary border border-primary/20">
                      {item.year}
                    </span>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
