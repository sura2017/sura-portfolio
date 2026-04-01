"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Layout, Database, Server, Wrench, Code2, Cpu, Globe, Rocket } from "lucide-react";

const skillCategories = [
    {
        title: "Frontend Excellence",
        icon: <Layout className="text-electric-blue" size={24} />,
        skills: ["Next.js", "React.js", "Tailwind CSS", "JavaScript (ES6+)", "HTML5/CSS3"],
        color: "from-blue-500/20 to-cyan-500/20",
        borderColor: "group-hover:border-blue-500/50",
        delay: 0.1
    },
    {
        title: "Backend & Logic",
        icon: <Server className="text-emerald-green" size={24} />,
        skills: ["Node.js", "Express.js", "Python", "RESTful API Design"],
        color: "from-emerald-500/20 to-teal-500/20",
        borderColor: "group-hover:border-emerald-green/50",
        delay: 0.2
    },
    {
        title: "Database & Cloud",
        icon: <Database className="text-electric-blue" size={24} />,
        skills: ["MongoDB", "MySQL", "SQL", "Cloudinary"],
        color: "from-indigo-500/20 to-blue-500/20",
        borderColor: "group-hover:border-indigo-500/50",
        delay: 0.3
    },
    {
        title: "Engineering Tools",
        icon: <Wrench className="text-emerald-green" size={24} />,
        skills: ["Git", "GitHub", "Postman", "npm"],
        color: "from-emerald-500/20 to-green-500/20",
        borderColor: "group-hover:border-emerald-green/50",
        delay: 0.4
    }
];

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut" as any
        }
    }
};

export const Skills = () => {
    return (
        <section id="skills" className="relative py-24 bg-obsidian overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <div className="inline-flex items-center gap-2 text-emerald-green font-bold text-sm tracking-[0.3em] uppercase mb-6">
                        <Cpu size={18} /> Technical Proficiency
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black font-plus-jakarta text-white">
                        Modern Tech <span className="text-electric-blue">Stack.</span>
                    </h2>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6"
                >
                    {/* Bento Card 1: Large Frontend */}
                    <motion.div
                        variants={itemVariants}
                        whileHover={{ y: -8, boxShadow: "0 0 40px rgba(59, 130, 246, 0.15)" }}
                        className="md:col-span-2 lg:col-span-4 group relative p-10 rounded-[3rem] bg-white/5 backdrop-blur-xl border border-white/10 overflow-hidden"
                    >
                        <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-electric-blue/5 rounded-full blur-[80px]" />
                        <div className="relative z-10">
                            <div className="flex justify-between items-start mb-10">
                                <div className="p-4 bg-electric-blue/10 rounded-2xl text-electric-blue">
                                    <Globe size={32} />
                                </div>
                                <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em]">Mastery 01</span>
                            </div>
                            <h3 className="text-3xl font-black text-white mb-6">Frontend Engineering</h3>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                {["Next.js", "React.js", "TypeSript", "Tailwind CSS", "Redux", "Framer Motion"].map((s) => (
                                    <div key={s} className="px-4 py-3 rounded-2xl bg-white/5 border border-white/5 text-slate-300 text-sm font-bold flex items-center gap-2 group-hover:border-electric-blue/30 transition-colors">
                                        <div className="w-1.5 h-1.5 rounded-full bg-electric-blue" /> {s}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Bento Card 2: Medium Backend */}
                    <motion.div
                        variants={itemVariants}
                        whileHover={{ y: -8, boxShadow: "0 0 40px rgba(16, 185, 129, 0.15)" }}
                        className="md:col-span-1 lg:col-span-2 group relative p-10 rounded-[3rem] bg-slate-900/50 backdrop-blur-xl border border-white/10 overflow-hidden"
                    >
                        <div className="relative z-10 h-full flex flex-col">
                            <div className="p-4 bg-emerald-green/10 rounded-2xl text-emerald-green w-fit mb-10">
                                <Server size={32} />
                            </div>
                            <h3 className="text-2xl font-black text-white mb-6">Backend & Data</h3>
                            <div className="space-y-4 flex-grow">
                                {["Node.js", "Python", "MongoDB", "MySQL"].map((s) => (
                                    <div key={s} className="flex items-center justify-between text-slate-400 group-hover:text-white transition-colors">
                                        <span className="text-sm font-black uppercase tracking-widest">{s}</span>
                                        <Rocket size={14} className="text-emerald-green opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Bento Card 3: Small Tools */}
                    <motion.div
                        variants={itemVariants}
                        whileHover={{ y: -8, scale: 1.02 }}
                        className="md:col-span-1 lg:col-span-2 group relative p-8 rounded-[3rem] bg-white/5 backdrop-blur-xl border border-white/10"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-white/10 rounded-xl text-white">
                                <Wrench size={24} />
                            </div>
                            <h4 className="text-lg font-black text-white uppercase tracking-widest">Workflow</h4>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {["Git", "Docker", "AWS", "Postman"].map(tool => (
                                <span key={tool} className="text-[10px] font-black px-3 py-1.5 rounded-lg border border-white/5 text-slate-500 hover:text-white hover:border-white/20 transition-all uppercase tracking-widest">{tool}</span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Bento Card 4: Agent AI & Automation */}
                    <motion.div
                        variants={itemVariants}
                        whileHover={{ y: -8 }}
                        className="md:col-span-2 lg:col-span-4 group relative p-8 rounded-[3rem] bg-gradient-to-br from-electric-blue/10 to-emerald-green/10 border border-white/10 flex items-center justify-between overflow-hidden"
                    >
                        <div className="relative z-10 flex-1">
                            <h3 className="text-2xl font-black text-white mb-4">Agent AI & Automation</h3>
                            <div className="flex flex-wrap gap-2">
                                {["Autonomous AI Workflows", "Prompt Engineering", "Agentic System Design", "Antigravity AI Integration"].map(tool => (
                                    <span key={tool} className="text-[10px] md:text-xs font-black px-3 py-1.5 rounded-lg bg-electric-blue/10 border border-electric-blue/20 text-electric-blue shadow-[0_0_15px_rgba(59,130,246,0.2)] uppercase tracking-widest">{tool}</span>
                                ))}
                            </div>
                        </div>
                        <div className="relative z-10 ml-4 p-6 bg-white/10 rounded-full backdrop-blur-3xl border border-white/10 group-hover:rotate-12 transition-transform">
                            <Rocket size={48} className="text-electric-blue drop-shadow-[0_0_15px_rgba(59,130,246,0.6)]" />
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};
