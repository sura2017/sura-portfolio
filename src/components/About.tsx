"use client";

import React from "react";
import { motion } from "framer-motion";
import { User, GraduationCap, MapPin, Sparkles } from "lucide-react";

export const About = () => {
    return (
        <section id="about" className="py-24 relative overflow-hidden">
            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
                    {/* Column 1: Bio */}
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, x: -30 },
                            visible: {
                                opacity: 1,
                                x: 0,
                                transition: {
                                    staggerChildren: 0.2,
                                    duration: 0.8,
                                    ease: "easeOut" as any
                                }
                            }
                        }}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="flex-1 space-y-8"
                    >
                        <motion.div
                            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
                            className="inline-flex items-center gap-2 text-electric-blue font-bold text-sm tracking-[0.3em] uppercase"
                        >
                            <User size={18} /> Discovery
                        </motion.div>

                        <motion.h2
                            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                            className="text-4xl md:text-6xl font-black font-plus-jakarta text-white leading-tight tracking-tighter"
                        >
                            Engineering <br />
                            <span className="text-emerald-green">With Purpose.</span>
                        </motion.h2>

                        <div className="space-y-6 text-lg md:text-xl text-slate-400 leading-relaxed font-medium">
                            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="space-y-6 text-slate-400">
                                <p>
                                    I am Sura Abrham, a Software Engineering student at ASTU. I have successfully mastered Full-Stack Development and am now pioneering the use of Agent AI to build autonomous, intelligent systems. I develop scalable, efficient, and user-centered applications using the modern stack (Next.js, Node.js, MongoDB, Tailwind CSS). My unique edge is combining full-stack engineering with AI-driven automation to solve complex real-world problems.
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Column 2: Philosophy Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" as any }}
                        className="w-full lg:w-[400px]"
                    >
                        <div className="relative group p-8 lg:p-10 bg-slate-900/50 backdrop-blur-2xl rounded-[3rem] border border-white/10 overflow-hidden">
                            {/* Decorative background circle */}
                            <div className="absolute -top-20 -right-20 w-64 h-64 bg-electric-blue/10 rounded-full blur-[80px] group-hover:bg-electric-blue/20 transition-all duration-700" />

                            <div className="relative z-10 space-y-10">
                                <div className="p-4 bg-emerald-green/10 rounded-2xl w-fit text-emerald-green group-hover:scale-110 transition-transform">
                                    <Sparkles size={32} />
                                </div>

                                <div className="space-y-6">
                                    <h3 className="text-2xl font-black text-white tracking-tight">Engineering Philosophy</h3>

                                    <div className="space-y-6">
                                        {[
                                            { icon: <GraduationCap size={20} />, title: "Technical Excellence", desc: "Rigorous focus on clean, maintainable architecture." },
                                            { icon: <MapPin size={20} />, title: "ASTU Rooted", desc: "Solid academic foundation from Ethiopia's premier tech hub." },
                                            { icon: <Sparkles size={20} />, title: "Data Driven", desc: "Merging software patterns with intelligent analytics." }
                                        ].map((item, i) => (
                                            <div key={i} className="flex gap-4">
                                                <div className="mt-1 text-electric-blue">{item.icon}</div>
                                                <div>
                                                    <p className="text-sm font-black text-white uppercase tracking-widest mb-1">{item.title}</p>
                                                    <p className="text-xs text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="pt-6 border-t border-white/5">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Efficiency Goal</span>
                                        <span className="text-emerald-green font-black text-xs">99.9%</span>
                                    </div>
                                    <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: "99.9%" }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" as any }}
                                            className="bg-gradient-to-r from-electric-blue to-emerald-green h-full"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
