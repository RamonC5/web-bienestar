import Footer from "@/app/components/footer/FooterNew";
import Header from "@/app/components/header/HeaderNew";
import PlanSelector from "@/app/components/toogleService/PlanSelector";

const ServicePage : React.FC = async () => {

    return (
      <div className='flex flex-col min-h-screen'>
        <Header />
          <main className="sm:flex sm:flex-col xl:flex xl:flex-row p-2 container mx-auto">
          <div className="container mx-auto px-4 text-center">
                <h1 className="text-4xl font-bold my-8"> Elige el plan perfecto para ti</h1>
                <p className="text-xl font-bold">En [Nombre de tu Empresa], entendemos que cada profesional y empresa tiene necesidades únicas, por lo que ofrecemos tres planes adaptados a diferentes objetivos y presupuestos. A continuación, te explicamos en detalle cada uno de nuestros planes y por qué deberías elegir el que mejor se adapte a tus necesidades</p>
                <PlanSelector />
                </div>
          </main>
        <Footer />
      </div>
    );
  };
  
  export default ServicePage;