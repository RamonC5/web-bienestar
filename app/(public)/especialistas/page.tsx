import Header from '@/app/components/header/HeaderNew';
import '../../globals.css';
import Footer from '@/app/components/footer/FooterNew';

import React from 'react';

import ProfessionalsList from '@/app/components/cardsEspecialistas/ProfessionalsList';
import ContactForm from '@/app/components/cardsEspecialistas/ContactForm';
import ExpertListingPage from '@/app/components/cardsEspecialistas/ProfessionalsListNew';




const EspecialistsPage: React.FC = async () => {

  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
        <main className="p-8 flex-grow mx-auto container ">
          <ExpertListingPage/>
        </main>
      <Footer />
    </div>
  );
};

export default EspecialistsPage;