import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sura Abrham | Senior Software Engineer",
  description: "Senior Software Engineer & Full-Stack Developer specialized in scalable architectures and data-driven solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${plusJakartaSans.variable} antialiased bg-obsidian text-white`}>
        <Navbar />
        <PageTransition>
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </PageTransition>
      </body>
    </html>
  );
}
