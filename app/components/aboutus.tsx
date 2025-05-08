import Image from "next/image";

const sections = [
    {
        title: "Misión",
        description:
            <>
                •   Proporcionar productos horneados frescos y de alta calidad <br />
                •   Crear experiencias gastronómicas memorables que deleiten los sentidos de sus clientes
            </>,
        image: "/mision.jpg",
        reverse: false,
    },
    {
        title: "Visión",
        description:
            <>
                •	Satisfacer las necesidades de los clientes y consumidores <br />
                •	Innovar constantemente <br />
                •	Comprometerse con el bienestar de los colaboradores, socios y comunidad <br />

            </>,
        image: "/vision.jpg",
        reverse: true,
    },
    {
        title: "Valores",
        description:
            <>
                •	Trabajo en equipo: Valorar el esfuerzo y la dedicación del equipo, fomentando un ambiente de respeto y crecimiento laboral.<br />
                •	Sostenibilidad: Promover prácticas responsables con el medio ambiente y apoyar al comercio justo.<br />
                •	Respeto: Demostrar lo mejor a nuestro cliente con el respeto que se merecen.<br />
                •	Pasión: Amar lo que se hace y transmitir la pasión por el café y pastel en cada detalle.<br />
                •	Excelencia en el servicio: Brindar una atención cálida, personalizada y siempre la mejor actitud.<br />
                •	Honestidad: Trabajar con transparencia y autenticidad.<br />
            </>,
        image: "/valores.jpg",
        reverse: false,
    },
];

const AboutUs = () => {
    return (
        <section className="w-full px-6 py-16 bg-gray-100">
            <h2 className="text-4xl font-bold text-center text-[#024959] mb-12">Sobre Nosotros</h2>

            {sections.map((section, index) => (
                <div
                    key={index}
                    className={`flex flex-col md:flex-row ${section.reverse ? "md:flex-row-reverse" : ""
                        } items-center mb-16`}
                >
                    <div className="md:w-1/2 px-6">
                        <h3 className="text-2xl font-semibold text-[#03677a] mb-4">{section.title}</h3>
                        <p className="text-gray-700 text-lg">{section.description}</p>
                    </div>
                    <div className="md:w-1/2 p-6">
                        <Image
                            src={section.image}
                            alt={section.title}
                            width={800}
                            height={600}
                            className="rounded-xl w-full h-auto object-cover shadow-lg"
                        />
                    </div>
                </div>
            ))}
        </section>
    );
};

export default AboutUs;
