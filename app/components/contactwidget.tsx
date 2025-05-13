'use client';

import { useState, useRef, useEffect } from 'react';
import { Mail, MessageCircle, X, HelpCircle } from 'lucide-react';

const ContactWidget = () => {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  const toggleOpen = () => setOpen(!open);

  // Cerrar si se hace clic fuera del panel
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Datos de contacto
  const email = 'TUTTIBOCADO.TB@gmail.com';
  const phone = '5212411448031'; // WhatsApp: 52 = México, 1 = celulares

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {open && (
        <div
          ref={panelRef}
          className="bg-white shadow-xl rounded-xl p-4 w-64 mb-2 border border-gray-200"
        >
          <h4 className="font-bold mb-3 text-gray-800 flex items-center gap-2">
            <HelpCircle className="w-5 h-5" /> ¿Necesitas ayuda?
          </h4>
          <div className="flex flex-col gap-2">
            <a
              href={`https://wa.me/${phone}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 p-2 rounded hover:bg-gray-100 text-left"
            >
              <MessageCircle className="w-5 h-5 text-green-600" />
              <span className='text-black'>Enviar mensaje</span>
            </a>
            <a
              href={`mailto:${email}`}
              className="flex items-center gap-2 p-2 rounded hover:bg-gray-100 text-left"
            >
              <Mail className="w-5 h-5 text-red-600" />
              <span className='text-black'>Enviar correo</span>
            </a>
          </div>
        </div>
      )}

      <button
        onClick={toggleOpen}
        className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg flex items-center justify-center"
      >
        {open ? <X className="w-6 h-6" /> : <HelpCircle className="w-6 h-6" />}
      </button>
    </div>
  );
};

export default ContactWidget;
