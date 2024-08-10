import './globals.css';
import Header from "./components/header/Header";
import Footer from './components/footer/Footer';
import CardsService from './components/cardServicios/CardsService';

const fetchServerTime = async (): Promise<string> => {
  // Simula una llamada a una API para obtener la hora del servidor
  const serverTime = new Date().toLocaleString();
  return serverTime;
};

const HomePage: React.FC = async () => {
  const serverTime = await fetchServerTime();

  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main className="p-8 flex-grow">
        <CardsService/>
        <h1 className="text-4xl font-bold mb-4">Welcome to Web Bienestar</h1>
        <p className="text-lg">Your journey to wellness starts here.</p>
        <p className="text-gray-500">Server Time: {serverTime}</p>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;