'use client';

import Image from "next/image";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import ContactWidget from "../components/contactwidget";

const MenuPage = () => {
    const menus = [
        { src: "/menu1.jpeg", alt: "Menú 1" },
        { src: "/menu2.jpeg", alt: "Menú 2" },
        { src: "/menu3.jpeg", alt: "Menú 3" },
    ];

    return (
        <>
            <Navbar />
            <ContactWidget />
            <div className="bg-[#f7fafc] min-h-screen py-10 px-4">
                <h1 className="text-4xl font-bold text-center text-[#024959] mb-10">Nuestro Menú</h1>
                <div className="max-w-5xl mx-auto space-y-10">
                    {menus.map((menu, index) => (
                        <div
                            key={index}
                            className="relative w-full h-[900px] rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
                        >
                            <Image
                                src={menu.src}
                                alt={menu.alt}
                                fill
                                className="object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default MenuPage;
