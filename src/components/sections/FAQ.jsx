import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";

const faqs = [
    {
        q: "How fast can you arrive?",
        a: "For emergency calls in Sentul, Setapak, and Gombak, we usually arrive within 30 to 60 minutes depending on traffic."
    },
    {
        q: "Do you provide warranty?",
        a: "Yes! All repairs come with a 30-day workmanship warranty. If the same issue persists, we fix it for free."
    },
    {
        q: "What is the price for Gas Refill?",
        a: "Gas refill starts from RM80 depending on the gas type (R32/R410A) and PSI required. We will check and quote you before proceeding."
    },
    {
        q: "Do you do Electrical wiring too?",
        a: "Yes, we are certified wiremen. We handle DB box upgrading, short circuit troubleshooting, and water heater installation."
    }
];

export function FAQ() {
    const [activeIndex, setActiveIndex] = useState(null);

    return (
        <section className="py-24 bg-transparent relative" id="faq">
            <div className="container mx-auto px-4 max-w-4xl relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-blue-900 mb-4 flex items-center justify-center gap-3 drop-shadow-sm">
                        <HelpCircle className="w-10 h-10 text-blue-600" />
                        Frequently Asked Questions
                    </h2>
                </div>

                <div className="space-y-6">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`rounded-2xl overflow-hidden transition-all duration-300 backdrop-blur-md border border-white/40 ${activeIndex === index
                                    ? "bg-white/80 shadow-2xl ring-1 ring-blue-200"
                                    : "bg-white/40 hover:bg-white/60 shadow-lg"
                                }`}
                        >
                            <button
                                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left"
                            >
                                <span className={`text-lg md:text-xl font-bold transition-colors ${activeIndex === index ? "text-blue-700" : "text-gray-800"}`}>
                                    {faq.q}
                                </span>
                                <div className={`p-2 rounded-full shadow-sm ${activeIndex === index ? "bg-red-100 text-red-500" : "bg-white/50 text-blue-600"}`}>
                                    {activeIndex === index ? (
                                        <Minus className="w-5 h-5" />
                                    ) : (
                                        <Plus className="w-5 h-5" />
                                    )}
                                </div>
                            </button>

                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="bg-white/30"
                                    >
                                        <div className="p-6 pt-0 text-gray-700 leading-relaxed text-lg border-t border-dashed border-gray-300/50 mt-2">
                                            <div className="pt-4">{faq.a}</div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
