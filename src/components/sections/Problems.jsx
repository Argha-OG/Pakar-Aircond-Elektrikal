import { motion } from "framer-motion";
import { AlertCircle, Thermometer, Zap, Droplets } from "lucide-react";

const problems = [
    {
        icon: <Thermometer className="w-10 h-10 text-red-500" />,
        title: "Not Cooling?",
        desc: "Aircond running but room stays hot? Probably gas leak or dirty coil.",
        gradient: "from-white/40 to-white/10"
    },
    {
        icon: <Droplets className="w-10 h-10 text-blue-500" />,
        title: "Water Leaking?",
        desc: "Water dripping from your unit? Blocked drainage needs chemical wash.",
        gradient: "from-white/40 to-white/10"
    },
    {
        icon: <Zap className="w-10 h-10 text-yellow-500" />,
        title: "High Electric Bill?",
        desc: "Dirty units work harder and cost 30% more energy. Clean it now!",
        gradient: "from-white/40 to-white/10"
    },
    {
        icon: <AlertCircle className="w-10 h-10 text-purple-500" />,
        title: "Power Tripping?",
        desc: "Unit trips the ELCB? Serious wiring issue that needs expert checking.",
        gradient: "from-white/40 to-white/10"
    },
];

export function Problems() {
    return (
        <section className="py-24 bg-transparent relative overflow-hidden" id="problems">

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-blue-600 font-bold tracking-widest uppercase mb-2 block">Troubleshooting</span>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-blue-900 mb-4 drop-shadow-sm">
                        Common Aircond Problems
                    </h2>
                    <p className="text-gray-700 text-lg max-w-2xl mx-auto font-medium">
                        Recognize any of these signs? Ignoring them can lead to costly compressor failure.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {problems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className={`bg-gradient-to-br ${item.gradient} backdrop-blur-md p-8 rounded-3xl border border-white/50 shadow-xl hover:shadow-2xl transition-all cursor-default relative overflow-hidden group`}
                        >
                            <div className="relative z-10">
                                <div className="flex justify-start mb-6">
                                    <div className="p-4 bg-white/80 rounded-2xl shadow-sm ring-1 ring-black/5 backdrop-blur-sm">
                                        {item.icon}
                                    </div>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                                <p className="text-gray-700 leading-relaxed font-medium">{item.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
