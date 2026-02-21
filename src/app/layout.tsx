"use client";

import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { motion, useScroll, useSpring } from "framer-motion";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${plusJakartaSans.variable} antialiased bg-obsidian text-white`}>
        {/* Scroll Progress Bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-electric-blue to-emerald-green z-[200] origin-left"
          style={{ scaleX }}
        />

        {/* Animated Background Blobs */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <motion.div
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute -top-[10%] -left-[10%] w-[500px] h-[500px] bg-electric-blue/10 rounded-full blur-[120px]"
          />
          <motion.div
            animate={{
              x: [0, -80, 0],
              y: [0, 100, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-[40%] -right-[5%] w-[400px] h-[400px] bg-emerald-green/5 rounded-full blur-[100px]"
          />
          <motion.div
            animate={{
              x: [0, 50, 0],
              y: [0, -100, 0],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute -bottom-[10%] left-[20%] w-[600px] h-[600px] bg-electric-blue/5 rounded-full blur-[150px]"
          />
        </div>

        <Navbar />
        <PageTransition>
          <main className="min-h-screen relative z-10">
            {children}
          </main>
          <Footer />
        </PageTransition>
      </body>
    </html>
  );
}
