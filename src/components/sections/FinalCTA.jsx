import { motion } from "framer-motion";
import { Star, MessageSquare, Phone } from "lucide-react";

export function FinalCTA() {
    return (
        <section className="py-28 bg-blue-900 relative overflow-hidden text-center">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:20px_20px] opacity-10"></div>
                <div className="absolute top-0 w-full h-full bg-gradient-to-b from-blue-900 via-transparent to-blue-900"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">

                {/* Testimonials Ticker */}
                <div className="mb-12 overflow-hidden max-w-2xl mx-auto p-8 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="flex gap-1 justify-center mb-6 text-yellow-400"
                    >
                        <Star fill="currentColor" className="w-6 h-6" />
                        <Star fill="currentColor" className="w-6 h-6" />
                        <Star fill="currentColor" className="w-6 h-6" />
                        <Star fill="currentColor" className="w-6 h-6" />
                        <Star fill="currentColor" className="w-6 h-6" />
                    </motion.div>
                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        className="text-white text-2xl italic font-medium mb-6 leading-relaxed"
                    >
                        "Technician came in 40 mins. Aircond is super cold now! Highly recommended for urgent jobs."
                    </motion.p>
                    <div className="flex items-center justify-center gap-3">
                        <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center font-bold text-blue-900">PS</div>
                        <div className="text-left">
                            <p className="text-white font-bold">Puan Siti</p>
                            <p className="text-blue-300 text-xs uppercase tracking-widest">Sentul Resident</p>
                        </div>
                    </div>
                </div>

                <motion.h2
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    className="text-4xl md:text-6xl font-extrabold text-white mb-10"
                >
                    Ready to Cool Down?
                </motion.h2>

                <div className="flex flex-col md:flex-row justify-center gap-6">
                    <a
                        href="tel:+60136146924"
                        className="bg-white text-blue-900 text-xl font-bold py-5 px-12 rounded-2xl shadow-2xl hover:bg-blue-50 transition-all flex items-center justify-center gap-3 hover:scale-105"
                    >
                        <Phone className="w-6 h-6" />
                        Call 013-614 6924
                    </a>
                    <a
                        href="https://wa.me/60136146924?text=Hi%20Pakar%20Aircond%2C%20I%20want%20to%20book%20a%20slot"
                        className="bg-green-500 text-white text-xl font-bold py-5 px-12 rounded-2xl shadow-2xl hover:bg-green-400 transition-all flex items-center justify-center gap-3 hover:scale-105"
                    >
                        <MessageSquare className="w-6 h-6" />
                        WhatsApp Now
                    </a>
                </div>
            </div>
        </section>
    );
}
