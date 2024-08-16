'use client';
import { useState } from 'react';

interface Appointment {
  id: number;
  date: string;
  time: string;
  clientName: string;
  status: 'upcoming' | 'completed' | 'cancelled';
}

const initialAppointments: Appointment[] = [
  {
    id: 1,
    date: '2024-08-20',
    time: '10:00 AM',
    clientName: 'John Doe',
    status: 'upcoming',
  },
  {
    id: 2,
    date: '2024-08-18',
    time: '2:00 PM',
    clientName: 'Jane Smith',
    status: 'completed',
  },
  {
    id: 3,
    date: '2024-08-25',
    time: '11:00 AM',
    clientName: 'Emily Johnson',
    status: 'upcoming',
  },
];

const ManageAppointments: React.FC = () => {
  const [appointments, setAppointments] = useState<Appointment[]>(initialAppointments);

  const handleStatusChange = (id: number, newStatus: 'completed' | 'cancelled') => {
    setAppointments((prevAppointments) =>
      prevAppointments.map((appointment) =>
        appointment.id === id ? { ...appointment, status: newStatus } : appointment
      )
    );
  };

  return (
      <><h2 className="text-2xl font-bold mb-6 text-gray-800">Gestión de Citas</h2><div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-lg">
              <thead>
                  <tr className="bg-gray-800 text-white text-left">
                      <th className="py-3 px-4 uppercase font-semibold text-sm">Fecha</th>
                      <th className="py-3 px-4 uppercase font-semibold text-sm">Hora</th>
                      <th className="py-3 px-4 uppercase font-semibold text-sm">Cliente</th>
                      <th className="py-3 px-4 uppercase font-semibold text-sm">Estado</th>
                      <th className="py-3 px-4 uppercase font-semibold text-sm">Acciones</th>
                  </tr>
              </thead>
              <tbody className="text-gray-700">
                  {appointments.map((appointment) => (
                      <tr key={appointment.id} className="border-t border-gray-200 hover:bg-gray-100">
                          <td className="py-3 px-4">{appointment.date}</td>
                          <td className="py-3 px-4">{appointment.time}</td>
                          <td className="py-3 px-4">{appointment.clientName}</td>
                          <td className="py-3 px-4">
                              <span
                                  className={`px-2 py-1 rounded-full text-xs font-bold ${appointment.status === 'upcoming'
                                          ? 'bg-green-100 text-green-700'
                                          : appointment.status === 'completed'
                                              ? 'bg-gray-100 text-gray-700'
                                              : 'bg-red-100 text-red-700'}`}
                              >
                                  {appointment.status === 'upcoming'
                                      ? 'Próxima'
                                      : appointment.status === 'completed'
                                          ? 'Completada'
                                          : 'Cancelada'}
                              </span>
                          </td>
                          <td className="py-3 px-4">
                              {appointment.status === 'upcoming' && (
                                  <>
                                      <button
                                          onClick={() => handleStatusChange(appointment.id, 'completed')}
                                          className="text-blue-500 hover:text-blue-700 mr-2"
                                      >
                                          Marcar como completada
                                      </button>
                                      <button
                                          onClick={() => handleStatusChange(appointment.id, 'cancelled')}
                                          className="text-red-500 hover:text-red-700"
                                      >
                                          Cancelar
                                      </button>
                                  </>
                              )}
                              {appointment.status !== 'upcoming' && (
                                  <span className="text-gray-500">No hay acciones disponibles</span>
                              )}
                          </td>
                      </tr>
                  ))}
              </tbody>
          </table>
      </div></>
  );
};

export default ManageAppointments;
