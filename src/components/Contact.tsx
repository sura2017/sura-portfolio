"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
    Mail,
    Linkedin,
    Github,
    Send,
    Phone,
    ArrowUpRight,
    MessageSquare
} from "lucide-react";

const contactCards = [
    {
        title: "Direct Email",
        label: "suraabraham12@gmail.com",
        href: "mailto:suraabraham12@gmail.com",
        icon: <Mail size={32} />,
        color: "rgba(59, 130, 246, 0.5)",
        delay: 0.1
    },
    {
        title: "Professional Profile",
        label: "LinkedIn / sura-abraham",
        href: "https://www.linkedin.com/in/sura-abraham-9952b33a9",
        icon: <Linkedin size={32} />,
        color: "rgba(59, 130, 246, 0.5)",
        delay: 0.2
    },
    {
        title: "Telegram Chat",
        label: "Message on Telegram",
        href: "https://t.me/Suriapii",
        icon: <Send size={32} />,
        color: "rgba(59, 130, 246, 0.5)",
        delay: 0.3
    },
    {
        title: "Phone Number",
        label: "Call Directly: +251 975 661 848",
        href: "tel:+251975661848",
        icon: <Phone size={32} />,
        color: "rgba(16, 185, 129, 0.5)",
        delay: 0.4
    },
    {
        title: "Source Code",
        label: "GitHub / sura2017",
        href: "https://github.com/sura2017",
        icon: <Github size={32} />,
        color: "rgba(16, 185, 129, 0.5)",
        delay: 0.5
    }
];

const TiltCard = ({ card }: { card: typeof contactCards[0] }) => {
    const ref = useRef<HTMLAnchorElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.a
            ref={ref}
            href={card.href}
            target={card.href.startsWith('http') ? "_blank" : undefined}
            rel={card.href.startsWith('http') ? "noopener noreferrer" : undefined}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateY,
                rotateX,
                transformStyle: "preserve-3d",
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: card.delay }}
            className="relative group h-[280px] p-8 rounded-[3rem] bg-white/5 backdrop-blur-xl border border-white/10 flex flex-col justify-between transition-all duration-500 overflow-hidden"
        >
            <div
                style={{ transform: "translateZ(75px)" }}
                className="relative z-10"
            >
                <div className="w-16 h-16 rounded-2xl bg-slate-900 border border-white/10 flex items-center justify-center text-white mb-6 group-hover:border-electric-blue/50 transition-colors shadow-2xl">
                    {card.icon}
                </div>
                <h3 className="text-2xl font-black text-white tracking-tighter mb-1">{card.title}</h3>
                <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em]">{card.label}</p>
            </div>

            <div
                style={{ transform: "translateZ(50px)" }}
                className="relative z-10 flex items-center gap-3 text-emerald-green font-black text-[10px] uppercase tracking-[0.3em]"
            >
                Connect Now <ArrowUpRight size={14} />
            </div>

            {/* Background interactive gradient layer */}
            <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity blur-[100px] -z-10"
                style={{
                    background: `radial-gradient(circle at center, ${card.color}, transparent)`
                }}
            />
        </motion.a>
    );
};

export const Contact = () => {
    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 text-electric-blue font-bold text-sm tracking-[0.3em] uppercase mb-6">
                        <MessageSquare size={18} /> Connectivity
                    </div>
                    <h2 className="text-4xl md:text-7xl font-black font-plus-jakarta text-white tracking-tighter">
                        Direct <span className="text-emerald-green">Connect.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {contactCards.slice(0, 4).map((card) => (
                        <TiltCard key={card.title} card={card} />
                    ))}
                    <div className="md:col-span-2 flex justify-center">
                        <div className="w-full md:w-1/2">
                            <TiltCard card={contactCards[4]} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
