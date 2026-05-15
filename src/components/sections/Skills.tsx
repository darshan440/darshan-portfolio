"use client";

import { motion } from "framer-motion";

const skillsData = [
  {
    category: "Frontend",
    items: ["Next.js", "React.js", "TypeScript", "JavaScript", "Tailwind CSS", "Framer Motion", "Radix UI", "Zustand"],
    color: "from-blue-500/20 to-blue-500/5",
    borderColor: "border-blue-500/20",
  },
  {
    category: "Backend & DB",
    items: ["Node.js", "Express.js", "Firebase", "MongoDB", "Prisma", "Redis", "Socket.io", "REST APIs"],
    color: "from-green-500/20 to-green-500/5",
    borderColor: "border-green-500/20",
  },
  {
    category: "Tools & Perf",
    items: ["Git/GitHub", "Vercel", "Sanity CMS", "Postman", "JWT", "SSR / SSG", "Web Vitals"],
    color: "from-purple-500/20 to-purple-500/5",
    borderColor: "border-purple-500/20",
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto max-w-[1200px] px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center md:text-left"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tighter">
            Technical <span className="text-gradient">Arsenal</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-secondary to-transparent rounded-full mx-auto md:mx-0" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillsData.map((category, idx) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`glass p-8 rounded-3xl border ${category.borderColor} bg-gradient-to-b ${category.color} hover:-translate-y-2 transition-all duration-300`}
            >
              <h3 className="text-2xl font-bold mb-6 text-foreground tracking-tight">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 text-sm font-medium bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:border-white/20 transition-colors shadow-sm cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
