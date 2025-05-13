'use client';

import Image from "next/image";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import ContactWidget from "../components/contactwidget";

const images = [
    '/Promos/promo (1).jpg',
    '/Promos/promo (1).jpeg',
    '/Promos/promo (2).jpg',
    '/Promos/promo (2).jpeg',
    '/Promos/promo (3).jpg',
    '/Promos/promo (3).jpeg',
    '/Promos/promo (4).jpeg',
    '/Promos/promo (4).jpg',
    '/Promos/promo (5).jpeg',
    '/Promos/promo (6).jpeg',
    '/Promos/promo (7).jpeg',
    '/Promos/promo (8).jpg',
];

const PhotosPage = () => {
    return (
        <>
            <Navbar />
            <ContactWidget />
            <div className="bg-gray-100 py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {images.map((src, index) => (
                            <div key={index} className="relative group">
                                <Image
                                    src={src}
                                    alt={`Image ${index + 1}`}
                                    width={400}
                                    height={400}
                                    className="w-full h-full object-cover rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-50 rounded-lg transition-opacity duration-300">
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default PhotosPage;
