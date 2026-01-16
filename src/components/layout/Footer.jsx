import { Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 py-12">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                {/* Brand */}
                <div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                        PAKAR AIRCOND <span className="text-red-500">& Elektrikal</span>
                    </h3>
                    <p className="text-sm leading-relaxed mb-4">
                        Your go-to emergency repair service in Sentul and Kuala Lumpur.
                        Fast, reliable, and affordable.
                    </p>
                    <div className="text-sm text-gray-500">
                        &copy; {new Date().getFullYear()} Pakar Aircond & Elektrikal. All rights reserved.
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-lg font-bold text-white mb-4">Quick Links</h4>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
                        <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Coverage Area</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                    </ul>
                </div>

                {/* Contact info */}
                <div className="flex flex-col items-center md:items-start">
                    <h4 className="text-lg font-bold text-white mb-4">Contact Us</h4>
                    <div className="space-y-3">
                        <a href="tel:+601121011904" className="flex items-center gap-3 hover:text-white transition-colors">
                            <Phone className="w-5 h-5 text-red-500" />
                            <span>+60 11-2101 1904</span>
                        </a>
                        <div className="flex items-center gap-3">
                            <MapPin className="w-5 h-5 text-blue-500" />
                            <span>Sentul, Kuala Lumpur</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Mail className="w-5 h-5 text-green-500" />
                            <span>support@pakaraircond.com</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
