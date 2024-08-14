import React from 'react';
import EstrellaCard from '../estrella/Estrella';

const ExpertPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex items-center">
          <img
            src="/assets/img/foto.jpg"
            alt="Expert Name"
            className="h-40 w-40 rounded-full object-cover mr-8"
          />
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Dr. Maria Gómez</h1>
            <p className="text-lg text-gray-600">Psicóloga Clínica Especialista en Ansiedad</p>
            <EstrellaCard rating={4}  />
            <a href="#booking" className="mt-4 inline-block bg-green-600 text-white px-6 py-2 rounded-full">
              Reserva una Sesión
            </a>
          </div>
        </div>
      </section>

      {/* Detailed Biography and Credentials */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Sobre mí</h2>
          <p className="text-gray-700 mb-6">
            Soy psicóloga clínica con más de 15 años de experiencia ayudando a personas a superar la
            ansiedad y otros trastornos emocionales. Me gradué en la Universidad de Madrid y tengo
            certificaciones en terapia cognitivo-conductual.
          </p>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Credenciales</h3>
          <ul className="list-disc pl-5 text-gray-700">
            <li>Doctorado en Psicología Clínica - Universidad de Madrid</li>
            <li>Certificación en Terapia Cognitivo-Conductual</li>
            <li>Más de 15 años de experiencia en práctica privada</li>
          </ul>
        </div>
      </section>

      {/* Services Offered */}
      <section className="bg-white py-12">
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
        </div>
      </section>

      {/* Booking and Contact */}
      <section id="booking" className="bg-green-600 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h2 className="text-2xl font-semibold mb-6">Reserva una Sesión</h2>
          <p className="mb-4">Completa el siguiente formulario para reservar tu sesión con la Dra. María Gómez.</p>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium">
                Nombre Completo
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 p-2 block w-full bg-gray-50 border border-gray-300 rounded-md text-gray-900"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 p-2 block w-full bg-gray-50 border border-gray-300 rounded-md text-gray-900"
                required
              />
            </div>
            <div>
              <label htmlFor="date" className="block text-sm font-medium">
                Fecha de la Sesión
              </label>
              <input
                type="date"
                id="date"
                name="date"
                className="mt-1 p-2 block w-full bg-gray-50 border border-gray-300 rounded-md text-gray-900"
                required
              />
            </div>
            <button type="submit" className="w-full bg-white text-green-600 py-2 rounded-full">
              Reservar Ahora
            </button>
          </form>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Preguntas Frecuentes</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800">¿Cómo puedo reservar una sesión?</h3>
              <p className="text-gray-700">
                Puedes reservar una sesión directamente desde esta página completando el formulario en la sección de reservas.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">¿Cuál es la política de cancelación?</h3>
              <p className="text-gray-700">
                Las sesiones pueden cancelarse o reprogramarse con un mínimo de 24 horas de antelación.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExpertPage;
