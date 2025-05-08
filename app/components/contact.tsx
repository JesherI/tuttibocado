const Contact = () => {
    return (
        <section className="bg-[#03677a] text-white py-16 px-4 md:px-12">
            <h2 className="text-4xl font-bold text-center mb-12">Contáctanos</h2>

            <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Mapa responsivo */}
                <div className="w-full md:w-1/2">
                    <div className="relative w-full pb-[56.25%] h-0 rounded-xl overflow-hidden">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2522.45770913285!2d-98.14871306576393!3d19.402527574577018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d021004325fc41%3A0xe7a49aa99406ced0!2sTutti%20Bocado!5e0!3m2!1ses!2smx!4v1746742546996!5m2!1ses!2smx"
                            className="absolute top-0 left-0 w-full h-full border-0"
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>

                {/* Información de contacto */}
                <div className="w-full md:w-1/2 space-y-6">
                    <p className="text-lg">
                        Aquí tienes nuestros números de contacto en diferentes localidades:
                    </p>

                    <ul className="space-y-4">
                        <li className="flex items-center space-x-3">
                            <span className="font-semibold">Santa Ana Chiautempan, Tlax.</span>
                            <span className="text-sm">246-125-7136</span>
                        </li>
                        <li className="flex items-center space-x-3">
                            <span className="font-semibold">Tlaxcala de Xicohténcatl, Tlax.</span>
                            <span className="text-sm">246-324-4192</span>
                        </li>
                        <li className="flex items-center space-x-3">
                            <span className="font-semibold">Prol. Bvld. La Libertad 202.</span>
                            <span className="text-sm">246-123-1109</span>
                        </li>
                        <li className="flex items-center space-x-3">
                            <span className="font-semibold">Zacatelco, Tlax.</span>
                            <span className="text-sm">246-177-9109</span>
                        </li>
                        <li className="flex items-center space-x-3">
                            <span className="font-semibold">San Martin, Tlax.</span>
                            <span className="text-sm">246-189-9087</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Contact;
