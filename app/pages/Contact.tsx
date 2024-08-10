import Header from '@/app/components/header/Header';
import './globals.css';
import Footer from '@/app/components/footer/Footer';
import CardsService from '@/app/components/cardServicios/CardsService';


const fetchServerTime = async (): Promise<string> => {
  // Simula una llamada a una API para obtener la hora del servidor
  const serverTime = new Date().toLocaleString();
  return serverTime;
};

const ContactPage: React.FC = async () => {
  const serverTime = await fetchServerTime();

  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main className="p-8 flex-grow">
        <h1 className="text-4xl font-bold mb-4">Welcome to Web contact</h1>
        <p className="text-lg">Your journey to wellness starts here.</p>
        <p className="text-gray-500">Server Time: {serverTime}</p>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;