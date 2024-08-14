import React from 'react';

const HeroSection = () => {
  return (
    <div className="relative bg-cover bg-center h-screen" style={{ backgroundImage: 'url("/assets/img/inicio_fondo1.jpg")' }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Potenciando tu bienestar</h1>
        <p className="text-lg md:text-2xl mb-8">Conéctese con profesionales certificados y descubra como puede mejorar su calidad de vida</p>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <a href="/especialistas" className="bg-blue-500 text-white px-6 py-3 rounded-lg text-lg">Encuentre un experto</a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
