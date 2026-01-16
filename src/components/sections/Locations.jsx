import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const locations = [
    "Sentul", "Sentul East", "Sentul West", "Sentul Pasar",
    "Setapak", "Wangsa Maju", "Gombak", "Batu Caves",
    "Titiwangsa", "Jalan Ipoh", "Segambut", "Mont Kiara",
    "Sri Hartamas", "Kepong", "Jinjang", "KL City Centre"
];

export function Locations() {
    return (
        <section className="py-24 bg-transparent relative overflow-hidden" id="coverage">

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="md:pr-10"
                    >
                        <span className="text-red-600 font-bold tracking-widest uppercase mb-2 block text-shadow-sm">Coverage Area</span>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-6 drop-shadow-sm">
                            We Arrive in <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500">30-60 Minutes.</span>
                        </h2>
                        <p className="text-gray-700 text-lg mb-8 leading-relaxed font-medium">
                            Our team is strategically located in Sentul to serve the surrounding Kuala Lumpur areas rapidly.
                            Traffic or no traffic, we find a way.
                        </p>

                        <div className="grid grid-cols-2 gap-3">
                            {locations.map((loc, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: index * 0.05 }}
                                    className="flex items-center gap-2 p-3 rounded-xl bg-white/40 border border-white/50 backdrop-blur-sm shadow-sm hover:bg-white/60 transition-colors"
                                >
                                    <MapPin className="w-4 h-4 text-red-500 flex-shrink-0" />
                                    <span className="text-sm font-bold text-gray-800">{loc}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Google Maps Integration with Glass Frame */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotate: -2 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative h-[450px] p-2 glass-card rounded-3xl transform hover:rotate-0 transition-transform duration-500"
                    >
                        <div className="w-full h-full rounded-2xl overflow-hidden shadow-inner">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3985.236183521813!2d101.95147947501717!3d2.7462284972309887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cddde9352a4325%3A0xa7f75e7cb102524f!2sPakar%20Aircond%20Service%20dan%20Wiring!5e0!3m2!1sen!2smy!4v1768560266707!5m2!1sen!2smy"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="w-full h-full"
                            ></iframe>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
