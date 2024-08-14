import React from 'react';
const categories = [
    {
      title: 'Psicólogos',
      description: 'Expertos en salud mental y bienestar emocional.',
      imageUrl: '/images/psychologist.jpg',
      link: '/experts/psychologists',
    },
    {
      title: 'Nutricionistas',
      description: 'Consejos dietéticos personalizados para una vida saludable.',
      imageUrl: '/images/nutritionist.jpg',
      link: '/experts/nutritionists',
    },
    {
      title: 'Pedagogos',
      description: 'Apoyo educativo para niños y adultos.',
      imageUrl: '/images/pedagogues.jpg',
      link: '/experts/pedagogues',
    },
    {
      title: 'Logopedas',
      description: 'Mejora de la comunicación y terapias del habla.',
      imageUrl: '/images/speech_therapist.jpg',
      link: '/experts/speech-therapists',
    },
  ];

const ExpertCategories = () => {

  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">Servicios Destacados</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <div key={category.title} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img className="h-48 w-full object-cover" src={category.imageUrl} alt={category.title} />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">{category.title}</h3>
                <p className="mt-2 text-gray-600">{category.description}</p>
                <a href={category.link} className="mt-4 block text-blue-500 hover:underline">
                  Ver más
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertCategories;