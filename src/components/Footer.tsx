"use client";

import React from "react";
import { motion } from "framer-motion";

export const Footer = () => {
    return (
        <footer className="py-20 border-t border-white/5 bg-obsidian relative overflow-hidden">
            {/* Subtle glow behind footer */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-electric-blue/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col items-center gap-10">
                    <div className="flex flex-col items-center gap-4">
                        <div className="h-px w-24 bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
                        <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.5em] text-center">
                            © 2026 | SURA ABRHAM | HANDCRAFTED WITH EXCELLENCE
                        </p>
                        <div className="h-px w-24 bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
                    </div>

                    <div className="flex gap-10 items-center">
                        {["LinkedIn", "GitHub", "Twitter", "Instagram"].map((social) => (
                            <span key={social} className="text-[10px] font-black tracking-[0.2em] text-slate-600 hover:text-white transition-colors cursor-pointer uppercase">
                                {social}
                            </span>
                        ))}
                    </div>

                    <div className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/5 border border-white/5">
                        <div className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </div>
                        <span className="text-[9px] font-black text-white uppercase tracking-widest">Available for Discovery</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};
