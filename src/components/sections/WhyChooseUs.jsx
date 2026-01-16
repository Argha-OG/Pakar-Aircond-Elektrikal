import { ShieldCheck, Clock, MapPin, Users } from "lucide-react";
import { motion } from "framer-motion";

const features = [
    {
        icon: <Clock className="w-8 h-8 text-white" />,
        title: "Urgent Response",
        desc: "We prioritize emergency calls. 30-60 min arrival for Sentul & KL areas.",
        color: "bg-red-500"
    },
    {
        icon: <ShieldCheck className="w-8 h-8 text-white" />,
        title: "Warranty Guaranteed",
        desc: "All repairs come with a 30-day workmanship warranty. If the same issue persists, we fix it for free.",
        color: "bg-blue-600"
    },
    {
        icon: <Users className="w-8 h-8 text-white" />,
        title: "Expert Technicians",
        desc: "Our team consists of certified professionals with 5+ years of experience.",
        color: "bg-green-600"
    },
    {
        icon: <MapPin className="w-8 h-8 text-white" />,
        title: "Local Sentul & KL",
        desc: "Based in Sentul, we know the area and can reach you faster than anyone else.",
        color: "bg-purple-600"
    },
];

export function WhyChooseUs() {
    return (
        <section className="py-24 bg-transparent relative overflow-hidden">

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">
                        Why Choose Pakar Aircond?
                    </h2>
                    <p className="text-gray-600 text-lg font-medium">
                        We are the trusted choice for thousands of homes in Kuala Lumpur.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="glass-card text-center p-8 rounded-3xl transition-all"
                        >
                            <div className="flex justify-center mb-6">
                                <div className={`p-4 ${feature.color} rounded-2xl shadow-lg ring-4 ring-white/50 backdrop-blur-sm`}>
                                    {feature.icon}
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed text-sm font-medium">
                                {feature.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
