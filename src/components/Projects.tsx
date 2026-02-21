"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    Github,
    ExternalLink,
    ShieldCheck,
    LayoutGrid,
    BarChart3,
    Image as ImageIcon,
    Rocket
} from "lucide-react";

const projects = [
    {
        title: "EasyStore Ethiopia",
        subtitle: "Premium E-Commerce Ecosystem",
        description: "A high-performance solution designed to solve the 'Trust Gap' in the Ethiopian digital market through robust banking verification and premium curation.",
        image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1000&auto=format&fit=crop",
        tags: ["Next.js", "Node.js", "MongoDB", "Tailwind CSS"],
        features: [
            { icon: <ShieldCheck size={16} />, text: "CBE/Oromia Bank Verification" },
            { icon: <LayoutGrid size={16} />, text: "Brand-Series Hierarchy" },
            { icon: <BarChart3 size={16} />, text: "Dynamic Sales Analytics" },
            { icon: <ImageIcon size={16} />, text: "Cloudinary Integration" }
        ],
        github: "https://github.com/sura2017/sura-store",
        demo: "https://sura-shop.onrender.com",
        isFlagship: true,
    }
];

const VerifiedBadge = () => (
    <div className="absolute top-6 left-6 flex items-center gap-2 px-4 py-2 bg-obsidian/80 backdrop-blur-xl border border-emerald-green/30 rounded-full shadow-2xl z-20">
        <div className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
        </div>
        <span className="text-[10px] font-black text-white uppercase tracking-[0.2em]">Verified CBE Integration</span>
    </div>
);

export const Projects = () => {
    return (
        <section id="projects" className="py-32 relative group/section">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-24">
                    <div className="inline-flex items-center gap-2 text-electric-blue font-bold text-sm tracking-[0.3em] uppercase mb-6">
                        <ExternalLink size={18} /> Portfolio of Impact
                    </div>
                    <h2 className="text-4xl md:text-7xl font-black font-plus-jakarta text-white tracking-tighter">
                        Featured <span className="text-emerald-green">Deployments.</span>
                    </h2>
                </div>

                <div className="space-y-32">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 1, ease: [0.2, 0.65, 0.3, 0.9] as any }}
                            className="group/card relative grid lg:grid-cols-2 gap-16 lg:gap-24 items-center"
                        >
                            {/* Project Visual */}
                            <div className="relative aspect-video rounded-[3rem] overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] group-hover/card:border-emerald-green/30 transition-all duration-700">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover grayscale group-hover/card:grayscale-0 group-hover/card:scale-110 transition-all duration-1000"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-80" />

                                {project.isFlagship && <VerifiedBadge />}

                                <div className="absolute bottom-8 left-8 flex gap-3">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="px-3 py-1.5 bg-white/10 backdrop-blur-md rounded-lg text-[10px] font-black text-white uppercase tracking-widest border border-white/5">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Project Details */}
                            <div className="space-y-8">
                                <div className="space-y-2">
                                    <p className="text-emerald-green font-black text-xs uppercase tracking-[0.3em]">{project.subtitle}</p>
                                    <h3 className="text-4xl md:text-6xl font-black font-plus-jakarta text-white tracking-tighter">
                                        {project.title}
                                    </h3>
                                </div>

                                <p className="text-slate-400 text-lg md:text-xl leading-relaxed font-medium">
                                    {project.description}
                                </p>

                                <div className="grid grid-cols-2 gap-6 p-8 bg-white/5 rounded-3xl border border-white/5">
                                    {project.features.map((feature, fIdx) => (
                                        <div key={fIdx} className="flex items-center gap-3 text-slate-300 text-sm font-bold">
                                            <div className="p-2 bg-emerald-green/10 rounded-lg text-emerald-green">
                                                {feature.icon}
                                            </div>
                                            {feature.text}
                                        </div>
                                    ))}
                                </div>

                                <div className="flex flex-wrap items-center gap-6 pt-4">
                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-10 py-5 bg-emerald-green hover:bg-emerald-400 text-obsidian rounded-2xl font-black text-xs uppercase tracking-widest transition-all transform hover:scale-105 active:scale-95 flex items-center gap-3 shadow-xl shadow-emerald-500/20"
                                    >
                                        Deploy Site <Rocket size={18} />
                                    </a>
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-10 py-5 bg-white/5 backdrop-blur-xl text-white rounded-2xl font-black text-xs uppercase tracking-widest transition-all transform hover:scale-105 active:scale-95 flex items-center gap-3 border border-white/10 hover:border-white/30"
                                    >
                                        GitHub <Github size={18} />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
