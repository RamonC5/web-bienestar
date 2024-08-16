'use client'; // Esto asegura que el componente se renderice como Client Component
import { UserIcon, ChartBarIcon, CogIcon, ClipboardListIcon } from '@heroicons/react/outline';

const ControlPanel: React.FC = () => {
  return (
    <>
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Panel de Control</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        {/* Tarjetas de Resumen */}
        <div className="bg-white p-6 rounded-lg shadow-lg flex items-center">
          <UserIcon className="h-12 w-12 text-blue-500" />
          <div className="ml-4">
            <h3 className="text-xl font-semibold">Usuarios Totales</h3>
            <p className="text-gray-600">1,234</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg flex items-center">
          <ChartBarIcon className="h-12 w-12 text-green-500" />
          <div className="ml-4">
            <h3 className="text-xl font-semibold">Citas Programadas</h3>
            <p className="text-gray-600">567</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg flex items-center">
          <ClipboardListIcon className="h-12 w-12 text-yellow-500" />
          <div className="ml-4">
            <h3 className="text-xl font-semibold">Registros de Actividad</h3>
            <p className="text-gray-600">89 Nuevos</p>
          </div>
        </div>
      </div>

      {/* Sección de Gráficos y Tablas */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Gráfico de Usuarios */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold mb-4">Crecimiento de Usuarios</h3>
          {/* Aquí iría el gráfico, puedes usar una librería como Chart.js o Recharts */}
          <div className="h-64 bg-gray-200 flex items-center justify-center">
            <p>Gráfico de Usuarios</p>
          </div>
        </div>

        {/* Tabla de Usuarios Recientes */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold mb-4">Usuarios Recientes</h3>
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 bg-gray-100">Nombre</th>
                <th className="py-2 px-4 bg-gray-100">Rol</th>
                <th className="py-2 px-4 bg-gray-100">Fecha de Registro</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-t py-2 px-4">John Doe</td>
                <td className="border-t py-2 px-4">Cliente</td>
                <td className="border-t py-2 px-4">2024-08-15</td>
              </tr>
              <tr>
                <td className="border-t py-2 px-4">Jane Smith</td>
                <td className="border-t py-2 px-4">Experto</td>
                <td className="border-t py-2 px-4">2024-08-14</td>
              </tr>
              {/* Más filas de usuarios */}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ControlPanel;
