

interface Appointment {
  id: number;
  date: string;
  time: string;
  expert: string;
  status: 'upcoming' | 'completed' | 'cancelled';
}

const Appointments: React.FC = () => {
  // Ejemplo de datos simulados de citas
  const appointments: Appointment[] = [
    { id: 1, date: '2024-08-20', time: '10:00 AM', expert: 'Dr. Jane Smith', status: 'upcoming' },
    { id: 2, date: '2024-08-18', time: '2:00 PM', expert: 'Dr. John Doe', status: 'completed' },
    { id: 3, date: '2024-08-25', time: '11:00 AM', expert: 'Dr. Emily White', status: 'upcoming' },
  ];

  return (
      <>      <h2 className="text-2xl font-bold mb-6 text-gray-800">Mis Citas</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-lg">
          <thead>
            <tr className="bg-gray-800 text-white text-left">
              <th className="py-3 px-4 uppercase font-semibold text-sm">Fecha</th>
              <th className="py-3 px-4 uppercase font-semibold text-sm">Hora</th>
              <th className="py-3 px-4 uppercase font-semibold text-sm">Especialista</th>
              <th className="py-3 px-4 uppercase font-semibold text-sm">Estado</th>
              <th className="py-3 px-4 uppercase font-semibold text-sm">Acciones</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {appointments.map((appointment) => (
              <tr key={appointment.id} className="border-t border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-4">{appointment.date}</td>
                <td className="py-3 px-4">{appointment.time}</td>
                <td className="py-3 px-4">{appointment.expert}</td>
                <td className="py-3 px-4">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-bold ${
                      appointment.status === 'upcoming' ? 'bg-green-100 text-green-700' :
                      appointment.status === 'completed' ? 'bg-gray-100 text-gray-700' :
                      'bg-red-100 text-red-700'
                    }`}
                  >
                    {appointment.status === 'upcoming' ? 'Próxima' :
                     appointment.status === 'completed' ? 'Completada' :
                     'Cancelada'}
                  </span>
                </td>
                <td className="py-3 px-4">
                  {appointment.status === 'upcoming' && (
                    <button className="text-blue-500 hover:text-blue-700 mr-2">Reprogramar</button>
                  )}
                  <button className="text-red-500 hover:text-red-700">Cancelar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div></>
  );
};

export default Appointments;
