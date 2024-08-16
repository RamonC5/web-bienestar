'use client'; // Esto asegura que el componente se renderice como Client Component
import { useState, useEffect, useRef } from 'react';
import { PaperAirplaneIcon } from '@heroicons/react/outline';

interface Chat {
  id: number;
  name: string;
  messages: Message[];
}

interface Message {
  sender: string;
  content: string;
  timestamp: string;
}

const initialChats: Chat[] = [
  {
    id: 1,
    name: 'Dr. Jane Smith',
    messages: [
      { sender: 'Dr. Jane Smith', content: 'Hola, ¿cómo estás hoy?', timestamp: '10:00 AM' },
      { sender: 'Tú', content: '¡Estoy bien, gracias!', timestamp: '10:05 AM' },
    ],
  },
  {
    id: 2,
    name: 'Dr. John Doe',
    messages: [
      { sender: 'Dr. John Doe', content: 'Recuerda tu cita mañana a las 10 AM.', timestamp: '2:00 PM' },
    ],
  },
];

const Chats: React.FC = () => {
  const [chats, setChats] = useState<Chat[]>(initialChats);
  const [activeChatId, setActiveChatId] = useState<number | null>(null);
  const [isMobileView, setIsMobileView] = useState(false);

  const activeChat = chats.find((chat) => chat.id === activeChatId);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Verificar si la vista es móvil
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768);
    };

    handleResize(); // Ejecutar una vez al cargar
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    // Scroll automático hacia abajo cuando se envía un mensaje o se selecciona una conversación
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [activeChat]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const input = form.elements.namedItem('message') as HTMLInputElement;
    if (input.value.trim() && activeChatId !== null) {
      const newMessage: Message = {
        sender: 'Tú',
        content: input.value,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setChats((prevChats) =>
        prevChats.map((chat) =>
          chat.id === activeChatId
            ? { ...chat, messages: [...chat.messages, newMessage] }
            : chat
        )
      );
      input.value = '';
    }
  };

  const handleBackToChats = () => {
    setActiveChatId(null);
  };

  return (
      <div className="flex h-full" style={{ height: 'calc(80vh)' }}>
        {/* Lista de Conversaciones (se muestra si no hay chat activo o en vista de escritorio) */}
        <div
          className={`w-full md:w-1/4 bg-gray-100 border-r border-gray-200 overflow-y-auto ${
            activeChatId && isMobileView ? 'hidden' : 'block'
          }`}
        >
          <h3 className="text-lg font-bold p-4">Conversaciones</h3>
          <ul>
            {chats.map((chat) => (
              <li
                key={chat.id}
                className={`p-4 cursor-pointer hover:bg-gray-200 ${activeChatId === chat.id ? 'bg-gray-200' : ''}`}
                onClick={() => setActiveChatId(chat.id)}
              >
                <p className="font-bold">{chat.name}</p>
                <p className="text-sm text-gray-600">{chat.messages[chat.messages.length - 1].content}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Área de Conversación Activa (se muestra si hay un chat activo) */}
        {activeChat && (
          <div className="w-full md:w-3/4 flex flex-col">
            {isMobileView && (
              <button
                onClick={handleBackToChats}
                className="p-4 bg-gray-200 text-gray-800 text-left"
              >
                &larr; Volver a las conversaciones
              </button>
            )}
            <div className="flex-grow p-4 bg-white overflow-y-auto">
              <h3 className="text-xl font-bold mb-4">{activeChat.name}</h3>
              <div className="space-y-4">
                {activeChat.messages.map((message, index) => (
                  <div key={index} className={`flex ${message.sender === 'Tú' ? 'justify-end' : 'justify-start'}`}>
                    <div
                      className={`p-2 rounded-lg max-w-xs ${
                        message.sender === 'Tú' ? 'bg-blue-500 text-white' : 'bg-gray-200'
                      }`}
                    >
                      <p className="text-sm">{message.content}</p>
                      <p className="text-xs text-gray-500 mt-1">{message.timestamp}</p>
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>
            </div>
            {/* Input para Enviar Mensajes */}
            <div className="p-4 bg-gray-100 border-t border-gray-200">
              <form onSubmit={handleSendMessage} className="flex items-center">
                <input
                  type="text"
                  name="message"
                  placeholder="Escribe tu mensaje..."
                  className="flex-grow p-2 border rounded-lg focus:outline-none"
                  autoComplete="off"
                />
                <button type="submit" className="ml-2 p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none">
                  <PaperAirplaneIcon className="h-5 w-5 transform rotate-45" />
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
  );
};

export default Chats;
