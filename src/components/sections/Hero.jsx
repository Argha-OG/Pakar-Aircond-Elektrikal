import { motion, useScroll, useTransform } from "framer-motion";
import { Phone, CheckCircle2 } from "lucide-react";
import { useRef } from "react";
import heroBg from "@/assets/visuals/hero-bg.png";

export function Hero() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    return (
        <section ref={ref} className="relative w-full h-screen overflow-hidden flex items-center justify-center">

            {/* Background Image Layer */}
            <motion.div
                style={{ y, opacity }}
                className="absolute inset-0 z-0"
            >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-900/70 to-transparent z-10" />
                <img
                    src={heroBg}
                    alt="Professional Technician"
                    className="w-full h-full object-cover"
                />
            </motion.div>

            {/* Content Layer */}
            <div className="relative z-20 container mx-auto px-4 flex flex-col md:flex-row items-center h-full pt-20">

                <div className="w-full md:w-2/3 text-left">
                    {/* Urgency Badge */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center gap-2 bg-red-600/90 backdrop-blur-sm text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-widest mb-8 shadow-lg border border-red-400/50"
                    >
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                        </span>
                        Emergency Service 24/7
                    </motion.div>

                    {/* Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6 drop-shadow-lg"
                    >
                        <span className="block text-blue-200">Aircond Broken?</span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
                            We Fix It Fast.
                        </span>
                    </motion.h1>

                    {/* Subheadline */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="text-xl md:text-2xl text-blue-50 max-w-2xl mb-10 font-medium leading-relaxed drop-shadow-md"
                    >
                        Expert Aircond & Electrical Repairs in
                        <span className="font-bold text-white"> Sentul, Setapak, Gombak & KL.</span>
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                        className="flex flex-col sm:flex-row gap-4"
                    >
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="tel:+601121011904"
                            className="flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 text-white text-lg font-bold py-4 px-8 rounded-xl shadow-red-900/50 shadow-lg transition-all border-2 border-transparent hover:border-red-400"
                        >
                            <Phone className="w-6 h-6" />
                            CALL NOW
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="https://wa.me/601121011904?text=Hi%20Pakar%20Aircond%2C%20I%20need%20urgent%20service"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white text-lg font-bold py-4 px-8 rounded-xl shadow-lg transition-all border-2 border-white/30 hover:border-white"
                        >
                            <CheckCircle2 className="w-6 h-6 text-green-400" />
                            WHATSAPP US
                        </motion.a>
                    </motion.div>
                </div>

                {/* Optional Right Side Visual/Stats (Desktop Only) */}
                <div className="hidden md:flex w-1/3 flex-col gap-4 justify-center pl-12">
                    <motion.div
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 1 }}
                        className="bg-black/30 backdrop-blur-md p-6 rounded-2xl border border-white/10"
                    >
                        <div className="text-3xl font-bold text-white mb-1">30 Min</div>
                        <div className="text-blue-200 text-sm">Avg. Arrival Time</div>
                    </motion.div>
                    <motion.div
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 1.2 }}
                        className="bg-black/30 backdrop-blur-md p-6 rounded-2xl border border-white/10"
                    >
                        <div className="text-3xl font-bold text-white mb-1">5000+</div>
                        <div className="text-blue-200 text-sm">Units Repaired</div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
