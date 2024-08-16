import Header from '@/app/components/header/Header';
import '../../globals.css';
import Footer from '@/app/components/footer/FooterNew';

import React from 'react';

import ProfileSection from '@/app/components/cardPerfilEspecialista/ProfileSection';

const profesional =   {
  name: "Kelsie Meyer",
  specialty: "Psicóloga",
  price: "30€",
  city: "Madrid",
  rating: 3,
  description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum maiores expedita odit in corporis, eligendi, blanditiis quasi a, perferendis excepturi earum. Possimus assumenda numquam, quisquam pariatur animi accusantium dolorem. Dignissimos?, Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum maiores expedita odit in corporis, eligendi, blanditiis quasi a, perferendis excepturi earum. Possimus assumenda numquam, quisquam pariatur animi accusantium dolorem. Dignissimos?",
  imageUrl: "/assets/img/foto.jpg",
  fondoUrl: "/assets/img/fondorosa.svg",
  link: "/especialista",
};

const EspecialistPage: React.FC = async () => {

  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main  className="px-8 flex-grow mx-auto container ">
        <div className="bg-slate-200">
        <ProfileSection  name={profesional.name}
        specialty={profesional.specialty}
        price={profesional.price}
        city={profesional.city}
        rating={profesional.rating}
        description={profesional.description}
        imageUrl={profesional.imageUrl}
        fondoUrl={profesional.fondoUrl}
        link={profesional.link}/>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default EspecialistPage;