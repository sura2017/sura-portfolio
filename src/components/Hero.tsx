"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Cpu, Layers, Disc, Terminal, Code2, Monitor, Globe } from "lucide-react";

// Tech Visual Component with internal floating/rotate animations
const TechVisual = () => {
    return (
        <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] flex items-center justify-center shrink-0">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-electric-blue/40 to-emerald-green/40 rounded-full blur-[60px] opacity-70 animate-pulse" />

            {/* Profile Image Container */}
            <div className="relative w-full h-full rounded-full p-[3px] bg-gradient-to-br from-electric-blue via-emerald-green to-electric-blue shadow-[0_0_50px_rgba(59,130,246,0.3)] hover:shadow-[0_0_80px_rgba(16,185,129,0.5)] transition-shadow duration-700 overflow-hidden shrink-0 z-10">
                <div className="relative w-full h-full rounded-full overflow-hidden bg-obsidian">
                    <img 
                        src="/sura-pro.jpg" 
                        alt="Sura Abrham - Agent AI Architect"
                        className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                    />
                </div>
            </div>
        </div>
    );
};

export const Hero = () => {
    const title = "SURA ABRHAM: SOFTWARE ENGINEER & AI AGENT ARCHITECT";
    const words = title.split(" ");

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.12,
                delayChildren: 0.4
            }
        }
    };

    const wordVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" as any }
        }
    };

    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-obsidian">
            <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Column 1: Content */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="text-center lg:text-left z-20"
                    >
                        <motion.span
                            variants={wordVariants}
                            className="block text-electric-blue text-xs md:text-sm tracking-[0.4em] mb-6 font-black uppercase"
                        >
                            PORTFOLIO
                        </motion.span>

                        <h1 className="text-[clamp(2rem,4vw,3.5rem)] font-black font-plus-jakarta leading-[1.1] tracking-tighter mb-6 max-w-full mx-auto lg:mx-0">
                            <span className="bg-gradient-to-br from-electric-blue via-blue-400 to-emerald-green bg-clip-text text-transparent drop-shadow-2xl">
                                {words.map((word, i) => (
                                    <motion.span key={i} variants={wordVariants} className="inline-block mr-[0.2em]">
                                        {word}
                                    </motion.span>
                                ))}
                            </span>
                        </h1>

                        <motion.h2
                            variants={wordVariants}
                            className="text-lg md:text-2xl text-slate-300 mb-10 font-medium tracking-tight max-w-xl mx-auto lg:mx-0 leading-relaxed"
                        >
                            Expert Full-Stack Developer specialized in building autonomous AI workflows and scalable web ecosystems.
                        </motion.h2>

                        <motion.div
                            variants={wordVariants}
                            className="flex flex-wrap items-center justify-center lg:justify-start gap-6"
                        >
                            <a
                                href="#projects"
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
                                }}
                                className="group px-10 py-5 bg-electric-blue hover:bg-blue-600 text-white rounded-2xl font-black text-xs uppercase tracking-widest transition-all transform hover:scale-105 active:scale-95 flex items-center gap-3 shadow-[0_20px_50px_rgba(59,130,246,0.3)]"
                            >
                                VIEW PROJECTS <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </a>

                            <a
                                href="#contact"
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                                }}
                                className="px-10 py-5 bg-white/5 backdrop-blur-xl border border-white/10 hover:border-emerald-green/30 text-white rounded-2xl font-black text-xs uppercase tracking-widest transition-all transform hover:scale-105 active:scale-95 flex items-center gap-3"
                            >
                                CONTACT ME
                            </a>
                        </motion.div>
                    </motion.div>

                    {/* Column 2: Visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" as any }}
                        className="relative w-full flex justify-center lg:justify-end"
                    >
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" as any }}
                            className="relative z-10"
                        >
                            <TechVisual />
                        </motion.div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-electric-blue/10 blur-[120px] -z-10 rounded-full" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
