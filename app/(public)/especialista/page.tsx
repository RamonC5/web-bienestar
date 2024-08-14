import Header from '@/app/components/header/Header';
import '../../globals.css';
import Footer from '@/app/components/footer/Footer';

import React from 'react';
import BodyCard from '@/app/components/cardPerfilEspecialista/BodyCard';

import ProfileSection from '@/app/components/cardPerfilEspecialista/ProfileSection';
import { useProfile } from '@/app/components/cardPerfilEspecialista/UserProfile';
import ExpertPage from '@/app/components/cardPerfilEspecialista/ExpertPageNew';

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
      <main className="min-h-screen container mx-auto  pb-2">
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
<ExpertPage/>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default EspecialistPage;