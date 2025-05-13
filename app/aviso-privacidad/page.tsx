'use client';

import { useRouter } from 'next/navigation';

const AvisoPrivacidadPage = () => {
    const router = useRouter();

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#03677a] px-4 text-white">
            <div className="bg-white text-[#024959] p-8 rounded-lg shadow-md w-full max-w-2xl">
                <h1 className="text-2xl font-bold mb-4">Aviso de Privacidad</h1>
                <p className="mb-4">
                    En esta aplicación, valoramos tu privacidad. Los datos personales que se solicitan —como tu nombre
                    y correo electrónico— son utilizados únicamente con el propósito de identificarte dentro del sistema
                    de reservaciones.
                </p>
                <p className="mb-4">
                    No compartimos tu información con terceros, ni la utilizamos para fines publicitarios. Toda la
                    información se guarda localmente en tu dispositivo y no se transmite a ningún servidor.
                </p>
                <p className="mb-4">
                    Puedes eliminar tus datos en cualquier momento cerrando sesión o borrando el almacenamiento local de
                    tu navegador.
                </p>
                <p className="mb-4">
                    Si tienes preguntas sobre este aviso, por favor contáctanos por los medios correspondientes.
                </p>
                <div className="mt-6 text-center">
                    <button
                        onClick={() => router.push('/login')}
                        className="bg-[#024959] text-white px-6 py-2 rounded hover:bg-[#03677a]"
                    >
                        ◀ Regresar al Login
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AvisoPrivacidadPage;
