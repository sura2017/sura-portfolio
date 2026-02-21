"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Cpu, Layers, Disc, Terminal, Code2, Monitor, Globe } from "lucide-react";

// Tech Visual Component with internal floating/rotate animations
const TechVisual = () => {
    return (
        <div className="relative group">
            <div className="absolute -inset-10 bg-gradient-to-tr from-electric-blue/20 to-emerald-green/20 rounded-full blur-[100px] opacity-50 animate-pulse" />

            <div className="relative w-72 h-72 md:w-[480px] md:h-[480px] rounded-[3rem] bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center p-8 overflow-hidden shadow-2xl">
                {/* Binary Mesh Pattern Layer */}
                <div className="absolute inset-0 opacity-[0.05] font-mono text-[10px] text-emerald-green leading-none select-none pointer-events-none p-4 overflow-hidden">
                    {Array.from({ length: 25 }).map((_, i) => (
                        <div key={i} className="whitespace-nowrap animate-marquee mb-1" style={{ animationDuration: `${20 + i}s`, opacity: 0.5 }}>
                            1011001010111010101010111010101101010101011010101010
                        </div>
                    ))}
                </div>

                {/* Isometric Tech Composition */}
                <div className="relative z-10 scale-90 md:scale-125">
                    <motion.div
                        animate={{ rotateY: [0, 15, 0], rotateX: [0, -10, 0] }}
                        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                        className="relative w-40 h-40 bg-slate-900 rounded-[2rem] border-2 border-emerald-green/30 flex items-center justify-center shadow-[0_0_80px_rgba(16,185,129,0.15)] group-hover:border-emerald-green/60 transition-all duration-700"
                    >
                        <Cpu size={80} className="text-emerald-green drop-shadow-[0_0_20px_rgba(16,185,129,0.5)] group-hover:scale-110 transition-transform duration-500" />

                        <motion.div
                            animate={{ y: [-15, 15, -15], x: [10, -10, 10] }}
                            transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
                            className="absolute -top-12 -right-8 p-3 bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 shadow-2xl"
                        >
                            <Code2 size={32} className="text-electric-blue" />
                        </motion.div>

                        <motion.div
                            animate={{ y: [15, -15, 15], x: [-10, 10, -10] }}
                            transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
                            className="absolute -bottom-8 -left-12 p-3 bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 shadow-2xl"
                        >
                            <Layers size={32} className="text-emerald-green" />
                        </motion.div>
                    </motion.div>

                    {[Monitor, Globe, Disc, Terminal].map((Icon, idx) => (
                        <motion.div
                            key={idx}
                            animate={{ rotate: 360 }}
                            transition={{ repeat: Infinity, duration: 20 + idx * 5, ease: "linear" }}
                            className="absolute inset-0 pointer-events-none"
                        >
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[100px]">
                                <div className="p-2 bg-white/5 backdrop-blur-md rounded-lg border border-white/10 shadow-xl opacity-20 group-hover:opacity-60 transition-opacity">
                                    <Icon size={16} className="text-white" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export const Hero = () => {
    const title = "SOFTWARE ENGINEER";
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
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-obsidian">
            <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24">
                    {/* Column 1: Content */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="flex-1 text-center lg:text-left z-20"
                    >
                        <motion.span
                            variants={wordVariants}
                            className="block text-white/20 text-xs md:text-sm tracking-[0.4em] mb-6 font-black uppercase"
                        >
                            SURA ABRHAM
                        </motion.span>

                        <h1 className="text-[clamp(2.5rem,8vw,5.5rem)] font-black font-plus-jakarta leading-[0.9] tracking-tighter mb-8 max-w-4xl mx-auto lg:mx-0">
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
                            className="text-xl md:text-3xl text-slate-200 mb-10 font-bold tracking-tight"
                        >
                            Full-Stack Developer.
                        </motion.h2>

                        <motion.p
                            variants={wordVariants}
                            className="text-lg md:text-xl text-slate-500 mb-12 max-w-xl leading-relaxed font-medium mx-auto lg:mx-0"
                        >
                            Building scalable, efficient, and user-centered web applications with modern full-stack technologies.
                        </motion.p>

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
                        transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
                        className="flex-1 relative w-full max-w-[600px] flex justify-center lg:justify-end"
                    >
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
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
