'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

type Reserva = {
  fecha: string;
  hora: string;
  personas: number;
};

const BLOQUES_HORARIOS = [
  '08:00', '10:00', '12:00', '14:00', '16:00', '18:00'
];

const getFechasDisponibles = () => {
  const fechas = [];
  const hoy = new Date();
  for (let i = 0; i < 5; i++) {
    const nuevaFecha = new Date(hoy);
    nuevaFecha.setDate(hoy.getDate() + i);
    fechas.push(nuevaFecha.toISOString().split('T')[0]);
  }
  return fechas;
};

const ReservacionesPage = () => {
  const router = useRouter();
  const [reservas, setReservas] = useState<Reserva[]>([]);
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');
  const [personas, setPersonas] = useState(1);

  useEffect(() => {
    const data = localStorage.getItem('reservas');
    if (data) {
      setReservas(JSON.parse(data));
    }
  }, []);

  const guardarReservas = (nuevas: Reserva[]) => {
    localStorage.setItem('reservas', JSON.stringify(nuevas));
    setReservas(nuevas);
  };

  const verificarDisponibilidad = (fecha: string, hora: string): number => {
    const reservasEnBloque = reservas.filter(
      r => r.fecha === fecha && r.hora === hora
    );
    const totalMesasUsadas = reservasEnBloque.reduce(
      (acc, r) => acc + Math.ceil(r.personas / 4), 0
    );
    return 6 - totalMesasUsadas;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mesasNecesarias = Math.ceil(personas / 4);
    const disponibles = verificarDisponibilidad(fecha, hora);

    if (mesasNecesarias > disponibles) {
      alert(`No hay suficientes mesas disponibles para ${personas} personas.`);
      return;
    }

    const nuevaReserva = { fecha, hora, personas };
    const nuevasReservas = [...reservas, nuevaReserva];
    guardarReservas(nuevasReservas);
    alert('Reservación realizada con éxito');
  };

  const handleLogout = () => {
    localStorage.clear();
    router.push('/login');
  };

  const mesasDisponibles = fecha && hora
    ? verificarDisponibilidad(fecha, hora)
    : 6;

  return (
    <div className="min-h-screen bg-[#024959] p-6 relative flex flex-col items-center justify-center">
      <div className="absolute top-4 right-4">
        <button
          onClick={handleLogout}
          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
        >
          Cerrar sesión
        </button>
      </div>

      <div className="absolute top-4 left-4">
        <button
          disabled
          className="bg-green-600 text-white font-bold px-4 py-2 rounded cursor-default"
        >
          Mesas disponibles: {mesasDisponibles}
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-md p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold text-[#024959] mb-6 text-center">
          Haz tu reservación
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-black mb-1 font-medium">Fecha</label>
            <select
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}
              required
              className="w-full text-black px-4 py-2 border rounded"
            >
              <option value="">Selecciona una fecha</option>
              {getFechasDisponibles().map((f) => (
                <option key={f} value={f}>{f}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-black mb-1 font-medium">Hora</label>
            <select
              value={hora}
              onChange={(e) => setHora(e.target.value)}
              required
              className="w-full text-black px-4 py-2 border rounded"
            >
              <option value="">Selecciona una hora</option>
              {BLOQUES_HORARIOS.map((h) => (
                <option key={h} value={h} disabled={!!fecha && verificarDisponibilidad(fecha, h) <= 0}>
                  {h} - {parseInt(h) + 2}:00 ({fecha && verificarDisponibilidad(fecha, h)} mesas disponibles)
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-black mb-1 font-medium">Número de personas</label>
            <input
              type="number"
              value={personas}
              onChange={(e) => setPersonas(parseInt(e.target.value))}
              min={1}
              max={24}
              required
              className="w-full text-black px-4 py-2 border rounded"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#03677a] text-white font-semibold py-2 rounded hover:bg-[#024959]"
          >
            Reservar
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReservacionesPage;
