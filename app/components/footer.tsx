'use client';

import { Facebook, Instagram } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-[#024959] text-white w-full">
            <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center">
                <p className="text-sm text-center md:text-left mb-2 md:mb-0">
                    © {new Date().getFullYear()} TutiBocado. Todos los derechos reservados.
                </p>
                <div className="flex space-x-6">
                    <a
                        href="https://www.facebook.com/share/169fMdbpNA/?mibextid=wwXIfr"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-300"
                    >
                        <Facebook size={20} />
                    </a>
                    <a
                        href="https://www.instagram.com/tuttibocado?igsh=MXFwOTA4c3F0d3Vtag=="
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-300"
                    >
                        <Instagram size={20} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
