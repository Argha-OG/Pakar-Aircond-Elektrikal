import { motion } from "framer-motion";
import chemicalImg from "@/assets/visuals/chemical-wash.png";
import gasImg from "@/assets/visuals/gas-refill.png";
import wiringImg from "@/assets/visuals/wiring.png";
import { ArrowRight, Zap, Droplet, Wind } from "lucide-react";

const services = [
    {
        id: "chemical-wash",
        title: "Chemical Wash",
        desc: "Deep cleaning to restore cooling efficiency and air quality.",
        icon: <Droplet className="w-6 h-6 text-white" />,
        image: chemicalImg,
        price: "From RM120",
        color: "bg-blue-500"
    },
    {
        id: "gas-refill",
        title: "Gas Refill",
        desc: "R410A / R32 Gas top-up for maximum cooling performance.",
        icon: <Wind className="w-6 h-6 text-white" />,
        image: gasImg,
        price: "From RM80",
        color: "bg-cyan-500"
    },
    {
        id: "wiring",
        title: "Wiring Repair",
        desc: "Troubleshooting electrical trips, DB boxes, and short circuits.",
        icon: <Zap className="w-6 h-6 text-white" />,
        image: wiringImg,
        price: "On Quote",
        color: "bg-yellow-500"
    },
];

export function Services() {
    return (
        <section className="py-24 bg-transparent relative" id="services">
            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-red-600 font-bold tracking-widest uppercase mb-2 block">Our Expertise</span>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-blue-900 mb-4 drop-shadow-sm">
                        Professional & Rapid Services
                    </h2>
                    <p className="text-gray-700 max-w-2xl mx-auto text-lg font-medium">
                        We don't just fix it. We restore it to factory performance.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            whileHover={{ y: -10 }}
                            className="glass-card rounded-3xl overflow-hidden transition-all duration-300 group"
                        >
                            {/* Image Container */}
                            <div className="relative h-72 overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />

                                {/* Floating Price Tag */}
                                <div className="absolute top-4 right-4 z-20">
                                    <div className="bg-white/90 backdrop-blur-sm px-4 py-1 rounded-full text-sm font-bold text-gray-900 shadow-lg border border-white/50">
                                        {service.price}
                                    </div>
                                </div>

                                {/* Icon Badge */}
                                <div className="absolute bottom-4 left-4 z-20">
                                    <div className={`p-3 ${service.color} rounded-2xl shadow-lg ring-2 ring-white/50 transform group-hover:rotate-12 transition-transform duration-300`}>
                                        {service.icon}
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 mb-8 leading-relaxed">
                                    {service.desc}
                                </p>
                                <a
                                    href={`https://wa.me/60136146924?text=I%20am%20interested%20in%20${service.title}`}
                                    className="flex items-center justify-between w-full py-4 px-6 rounded-xl bg-white/50 hover:bg-blue-600 border border-blue-100 transition-all duration-300 group-hover:shadow-blue-200 group-hover:shadow-lg"
                                >
                                    <span className="font-bold text-gray-700 group-hover:text-white">
                                        Book Service
                                    </span>
                                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-white transform group-hover:translate-x-2 transition-transform" />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
