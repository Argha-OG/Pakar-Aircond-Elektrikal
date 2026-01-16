import { Phone, MessageCircle, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Add scroll effect for header
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const whatsappNumber = "601121011904";
    const whatsappMessage = encodeURIComponent(
        "Hi Pakar Aircond, I found you on Google. I need an urgent repair for my unit."
    );
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
    const callLink = `tel:+${whatsappNumber}`;

    const navLinks = [
        { name: "Services", href: "#services" },
        { name: "Problems", href: "#problems" },
        { name: "Coverage", href: "#coverage" },
        { name: "FAQ", href: "#faq" },
    ];

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                scrolled
                    ? "bg-white/70 backdrop-blur-xl border-b border-white/20 shadow-sm py-0"
                    : "bg-transparent py-2"
            )}
        >
            <div className="container mx-auto px-4 h-20 flex items-center justify-between">
                {/* Logo / Brand */}
                <a href="#" className="flex flex-col items-start group">
                    <span className="text-2xl font-black text-black tracking-tighter leading-none group-hover:scale-105 transition-transform">
                        PAKAR <span className="text-red-600">AIRCOND</span>
                    </span>
                    <span className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] leading-none mt-1 group-hover:text-gray-700">
                        & Elektrikal Services
                    </span>
                </a>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8 bg-white/30 px-8 py-3 rounded-full border border-white/40 backdrop-blur-md shadow-sm">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-bold text-gray-800 hover:text-blue-600 uppercase tracking-wide transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>

                {/* Action Buttons */}
                <div className="flex items-center gap-3">
                    {/* Desktop CTA */}
                    <div className="hidden md:flex items-center gap-3">
                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-green-500 hover:bg-green-600 text-white font-bold transition-all shadow-lg hover:shadow-green-200 hover:-translate-y-0.5"
                        >
                            <MessageCircle className="w-5 h-5" />
                            WhatsApp
                        </a>
                        <a
                            href={callLink}
                            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold transition-all shadow-lg hover:shadow-blue-200 hover:-translate-y-0.5"
                        >
                            <Phone className="w-5 h-5" />
                            011-2101 1904
                        </a>
                    </div>

                    {/* Mobile CTA (Simplified) */}
                    <div className="flex md:hidden items-center gap-2">
                        <a
                            href={callLink}
                            className="flex items-center justify-center w-10 h-10 rounded-full bg-red-100 text-red-600 hover:bg-red-200"
                        >
                            <Phone className="w-5 h-5" />
                        </a>
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="p-2 text-gray-800 hover:bg-white/50 rounded-lg"
                        >
                            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100 overflow-hidden absolute w-full"
                    >
                        <div className="p-4 flex flex-col gap-2 shadow-xl">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="block p-4 text-lg font-bold text-gray-800 hover:bg-blue-50 rounded-xl"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <hr className="my-2 border-gray-100" />
                            <a
                                href={whatsappLink}
                                className="flex items-center justify-center gap-2 w-full p-4 rounded-xl bg-green-500 text-white font-bold"
                            >
                                <MessageCircle className="w-5 h-5" />
                                WhatsApp Us
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
