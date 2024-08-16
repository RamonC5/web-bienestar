import './globals.css';
import Header from "./components/header/Header";
import Footer from './components/footer/FooterNew';
import HeroSection from './components/inicial/HeroSection';
import ExpertCategories from './components/inicial/ExpertSection';
import HowItWorks from './components/inicial/HowItWorks';
import WhyChooseUs from './components/inicial/WhyChooseUs';


const HomePage: React.FC = async () => {


  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main className="p-8 flex-grow mx-auto container ">
        <HeroSection/>
        <ExpertCategories/>
        <WhyChooseUs/>
        <HowItWorks/>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;