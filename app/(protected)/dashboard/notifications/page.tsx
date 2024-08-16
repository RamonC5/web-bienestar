'use client'; // Esto asegura que el componente se renderice como Client Component
import React from 'react';
import { useState, useEffect } from 'react';

interface Notification {
  id: number;
  message: string;
  read: boolean;
}

const Notifications: React.FC = () => {

  let [notifications, setNotifications] = useState<Notification[]>([]);
  const [loading, setLoading] = useState(true);

  // Simulación de una llamada a una API para obtener notificaciones
  useEffect(() => {
    fetch('/api/notifications')
      .then((response) => response.json())
      .then((data) => {
        setNotifications(notifications);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching notifications:', error);
        setLoading(false);
      });
  }, []);

  const markAsRead = (id: number) => {
    setNotifications((prev) =>
      prev.map((notification) =>
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
  };

  notifications = [
    { id: 1, message: 'Nueva cita programada con tu nutricionista', read: false },
    { id: 2, message: 'Tu reporte mensual está disponible', read: false },
    { id: 3, message: 'La cita con el psicólogo fue confirmada', read: true },
  ];
  if (loading) {
    return <p>Loading...</p>;
  }

  if (notifications.length === 0) {
    return <p>No notifications available.</p>;
  }

  return (<div>
    <div className="p-4 bg-gray-100 rounded-md shadow-md">
      <h2 className="text-xl font-bold mb-4">Notificaciones</h2>
      <ul>
        {notifications.map((notification) => (
          <li
            key={notification.id}
            className={`p-2 mb-2 rounded ${notification.read ? 'bg-gray-300' : 'bg-white'} `}
          >
            <div className="flex justify-between items-center">
              <span>{notification.message}</span>
              {!notification.read && (
                <button
                  onClick={() => markAsRead(notification.id)}
                  className="text-sm text-blue-500"
                >
                  Marcar como leída
                </button>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  </div>
  );
};

export default Notifications;


