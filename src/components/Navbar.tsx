"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Menu, X, Code2, ArrowRight } from "lucide-react";

const navLinks = [
    { name: "HOME", href: "/#home" },
    { name: "ABOUT", href: "/#about" },
    { name: "PROJECTS", href: "/#projects" },
    { name: "CONTACT", href: "/#contact" },
];

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [hoveredLink, setHoveredLink] = useState<string | null>(null);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        if (href.startsWith("#") || (href.startsWith("/#") && window.location.pathname === "/")) {
            e.preventDefault();
            const id = href.includes("#") ? href.split("#")[1] : "";
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
                setIsOpen(false);
            }
        } else if (href.startsWith("/")) {
            // Let the standard link handling take over for route changes
            setIsOpen(false);
        }
    };

    return (
        <>
            <nav
                className={cn(
                    "fixed top-0 left-0 w-full z-[100] transition-all duration-500 border-b",
                    scrolled
                        ? "bg-obsidian/80 backdrop-blur-xl border-white/10 py-4 shadow-2xl"
                        : "bg-transparent border-transparent py-8"
                )}
            >
                <div className="max-w-7xl mx-auto px-6 flex items-center justify-between relative">
                    {/* Logo */}
                    <div
                        onClick={(e) => scrollToSection(e as any, "#home")}
                        className="flex items-center gap-3 group cursor-pointer"
                    >
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-electric-blue to-emerald-green p-[1px]">
                            <div className="w-full h-full rounded-xl bg-obsidian flex items-center justify-center">
                                <Code2 size={20} className="text-white group-hover:rotate-12 transition-transform" />
                            </div>
                        </div>
                        <span className="text-xl font-black tracking-tight text-white font-plus-jakarta hidden lg:block">
                            SURA<span className="text-emerald-green">.</span>
                        </span>
                    </div>

                    {/* Desktop Centered Links with Sliding Underline */}
                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-12">
                        {navLinks.map((link) => (
                            <div
                                key={link.name}
                                onMouseEnter={() => setHoveredLink(link.name)}
                                onMouseLeave={() => setHoveredLink(null)}
                                className="relative py-2"
                            >
                                <a
                                    href={link.href}
                                    onClick={(e) => scrollToSection(e, link.href)}
                                    className="text-lg lg:text-xl font-black tracking-widest text-slate-400 hover:text-white transition-all duration-300"
                                >
                                    {link.name}
                                </a>
                                {hoveredLink === link.name && (
                                    <motion.div
                                        layoutId="nav-hover-line"
                                        className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-electric-blue to-emerald-green"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden text-white p-2 hover:bg-white/5 rounded-xl transition-colors z-[160]"
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>

                    {/* Right spacer for horizontal balance */}
                    <div className="hidden md:block w-32" />
                </div>
            </nav>

            {/* Full-Screen Curtain Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ clipPath: "circle(0% at 90% 10%)" }}
                        animate={{ clipPath: "circle(150% at 50% 50%)" }}
                        exit={{ clipPath: "circle(0% at 90% 10%)" }}
                        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] as any }}
                        className="fixed inset-0 z-[150] bg-obsidian flex flex-col items-center justify-center"
                    >
                        <div className="flex flex-col gap-8 text-center">
                            {navLinks.map((link, idx) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => scrollToSection(e, link.href)}
                                    initial={{ opacity: 0, y: 40 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 + (0.1 * idx), duration: 0.6 }}
                                    className="text-5xl md:text-7xl font-black tracking-[0.2em] text-white hover:text-emerald-green transition-colors flex items-center gap-6 group"
                                >
                                    <span className="text-sm font-bold text-slate-600 group-hover:text-electric-blue transition-colors">0{idx + 1}</span>
                                    {link.name}
                                </motion.a>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1 }}
                            className="absolute bottom-20 flex gap-8"
                        >
                            {["LinkedIn", "GitHub", "Twitter"].map((social) => (
                                <span key={social} className="text-xs font-black tracking-widest text-slate-500 hover:text-white transition-colors cursor-pointer uppercase">
                                    {social}
                                </span>
                            ))}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
