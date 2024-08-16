'use client'; // Esto asegura que el componente se renderice como Client Component
import { useState, useEffect, useRef } from 'react';
import { SearchIcon, PaperAirplaneIcon } from '@heroicons/react/outline';

interface User {
  id: number;
  name: string;
  role: 'cliente' | 'experto' | 'administrador';
}

interface Message {
  sender: string;
  content: string;
  timestamp: string;
}

interface Chat {
  userId: number;
  userName: string;
  messages: Message[];
}

const initialUsers: User[] = [
  { id: 1, name: 'John Doe', role: 'cliente' },
  { id: 2, name: 'Jane Smith', role: 'experto' },
  { id: 3, name: 'Emily Johnson', role: 'cliente' },
  { id: 4, name: 'Michael Brown', role: 'experto' },
];

const AdminChats: React.FC = () => {
  const [users, setUsers] = useState<User[]>(initialUsers);
  const [searchTerm, setSearchTerm] = useState('');
  const [chats, setChats] = useState<Chat[]>([]);
  const [activeChat, setActiveChat] = useState<Chat | null>(null);
  const [isMobileView, setIsMobileView] = useState(false);

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
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [activeChat]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const startChat = (user: User) => {
    const existingChat = chats.find((chat) => chat.userId === user.id);
    if (existingChat) {
      setActiveChat(existingChat);
    } else {
      const newChat: Chat = {
        userId: user.id,
        userName: user.name,
        messages: [],
      };
      setChats((prevChats) => [...prevChats, newChat]);
      setActiveChat(newChat);
    }
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const input = form.elements.namedItem('message') as HTMLInputElement;
    if (input.value.trim() && activeChat) {
      const newMessage: Message = {
        sender: 'Tú',
        content: input.value,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      const updatedChat = {
        ...activeChat,
        messages: [...activeChat.messages, newMessage],
      };
      setChats((prevChats) =>
        prevChats.map((chat) => (chat.userId === activeChat.userId ? updatedChat : chat))
      );
      setActiveChat(updatedChat);
      input.value = '';
    }
  };

  const handleBackToUsers = () => {
    setActiveChat(null);
  };

  return (
    <div className="flex h-full" style={{ height: 'calc(80vh)' }}>
        {/* Panel de Búsqueda y Usuarios */}
        <div
          className={`w-full md:w-1/4 bg-gray-100 border-r border-gray-200 overflow-y-auto p-4 ${
            activeChat && isMobileView ? 'hidden' : 'block'
          }`}
        >
          <div className="flex items-center mb-4">
            <SearchIcon className="h-5 w-5 text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Buscar usuarios..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="w-full p-2 border rounded-lg focus:outline-none"
            />
          </div>
          <ul>
            {users
              .filter((user) =>
                user.name.toLowerCase().includes(searchTerm.toLowerCase())
              )
              .map((user) => (
                <li
                  key={user.id}
                  className="p-4 cursor-pointer hover:bg-gray-200"
                  onClick={() => startChat(user)}
                >
                  <p className="font-bold">{user.name}</p>
                  <p className="text-sm text-gray-600">{user.role}</p>
                </li>
              ))}
          </ul>
        </div>

        {/* Área de Conversación Activa */}
        {activeChat && (
          <div className="w-full md:w-3/4 flex flex-col">
            {isMobileView && (
              <button
                onClick={handleBackToUsers}
                className="p-4 bg-gray-200 text-gray-800 text-left"
              >
                &larr; Volver a los usuarios
              </button>
            )}
            <div className="flex-grow p-4 bg-white overflow-y-auto">
              <h3 className="text-xl font-bold mb-4">Conversación con {activeChat.userName}</h3>
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
                <button
                  type="submit"
                  className="ml-2 p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
                >
                  <PaperAirplaneIcon className="h-5 w-5 transform rotate-45" />
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
  );
};

export default AdminChats;
