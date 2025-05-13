'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [nombre, setNombre] = useState('');
    const router = useRouter();

    useEffect(() => {
        const usuarioGuardado = localStorage.getItem('usuario');
        if (usuarioGuardado) {
            router.push('/reservaciones'); // redirige si ya hay un usuario
        }
    }, [router]);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        const userData = { email, nombre };
        localStorage.setItem('usuario', JSON.stringify(userData));
        router.push('/reservaciones'); // redirigir a reservaciones después del login
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#03677a] px-4">
            <div className="absolute top-4 left-4">
                <button
                    onClick={() => router.push('/')}
                    className="bg-white text-[#024959] font-semibold px-4 py-2 rounded hover:bg-gray-200"
                >
                    ◀ Regresar
                </button>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center text-[#024959]">Login</h2>
                <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Nombre</label>
                        <input
                            type="text"
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                            required
                            className="mt-1 text-black block w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#03677a]"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Correo</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="mt-1 text-black block w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#03677a]"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-[#024959] hover:bg-[#03677a] text-white py-2 rounded-md font-semibold"
                    >
                        Ingresar
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
