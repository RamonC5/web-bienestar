import WeeklyScheduleTable from "../schedule/WeeklyScheduleTable";
import { ProfessionalCardProps } from "./UserProfile";


import ProfileDetails from "./ProfileDetails";
import Section from "./Section";



const BodyCard: React.FC<ProfessionalCardProps> = ({ name, specialty, price, city, rating,description, imageUrl, link }) => {
  return (
      <div className="xl:flex xl:flex-row sm:flex sm:flex-col">
        <section className="bg-white py-12 xl:w-1/2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Servicios Ofrecidos</h2>
          <ul className="space-y-4">
            <li className="bg-gray-100 p-4 rounded-lg shadow">
              <h3 className="text-lg font-bold text-gray-800">Consulta Inicial</h3>
              <p className="text-gray-700">Duración: 60 minutos</p>
              <p className="text-gray-700">Precio: $100</p>
            </li>
            <li className="bg-gray-100 p-4 rounded-lg shadow">
              <h3 className="text-lg font-bold text-gray-800">Terapia Cognitivo-Conductual</h3>
              <p className="text-gray-700">Duración: 50 minutos</p>
              <p className="text-gray-700">Precio: $80</p>
            </li>
            <li className="bg-gray-100 p-4 rounded-lg shadow">
              <h3 className="text-lg font-bold text-gray-800">Sesiones de Seguimiento</h3>
              <p className="text-gray-700">Duración: 30 minutos</p>
              <p className="text-gray-700">Precio: $50</p>
            </li>
          </ul>
          <div className="block">
            <a href="#booking" className="mt-4 inline-block bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-2 rounded-full transition-colors">
              Reserva una Sesión
            </a>
          </div>
        </div>
      </section>
          <section className="xl:mx-1 xl:w-1/2 sm:mt-6 xl:mt-0 bg-white xl:px-6 xl:py-7 rounded-md">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">{'Horario'}</h2>
                <WeeklyScheduleTable />
          </section>
        </div>
        
  );
}

export default  BodyCard;