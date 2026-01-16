import { motion } from "framer-motion";
import chemicalImg from "@/assets/gallery/chemical-wash.png";
import installImg from "@/assets/gallery/installation.png";
import projectRealImg from "@/assets/gallery/project-real.jpg";
import wiringImg from "@/assets/gallery/wiring.png";
import { ZoomIn } from "lucide-react";

const projects = [
    {
        src: projectRealImg,
        title: "Site Visit: Sentul",
        desc: "Actual site inspection and servicing at a client's home."
    },
    {
        src: chemicalImg,
        title: "Chemical Overhaul",
        desc: "Restoring cooling power for a landed house in Gombak."
    },
    {
        src: installImg,
        title: "New Installation",
        desc: "Clean & minimalist Daikin installation in Setapak Condominium."
    },
    {
        src: compressorImg,
        title: "Gas Refill & Check",
        desc: "Troubleshooting low gas pressure to fix 'not cooling' issue."
    },
    {
        src: wiringImg,
        title: "DB Box Wiring",
        desc: "Emergency repair for power tripping in Sentul Pasar."
    },
];

export function Gallery() {
    return (
        <section className="py-24 bg-transparent relative" id="gallery">
            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-red-500 font-bold tracking-widest uppercase mb-2 block text-shadow-sm">Our Portfolio</span>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-blue-900 mb-4 drop-shadow-sm">
                        Recent Projects
                    </h2>
                    <p className="text-gray-700 text-lg max-w-2xl mx-auto font-medium">
                        Real results from real homes in your neighborhood.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.02 }}
                            className="group relative h-80 rounded-3xl overflow-hidden glass-card shadow-lg cursor-pointer"
                        >
                            {/* Image */}
                            <img
                                src={item.src}
                                alt={item.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8">
                                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                                    <p className="text-gray-300 font-medium">{item.desc}</p>
                                </div>

                                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all transform group-hover:rotate-90">
                                    <ZoomIn className="w-6 h-6 text-white" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
