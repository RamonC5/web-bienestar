import Footer from "@/app/components/footer/FooterNew";
import Header from "@/app/components/header/HeaderNew";
import LoginForm from "@/app/components/login/LoginForm";
import PlanSelector from "@/app/components/toogleService/PlanSelector";

const LoginPage : React.FC = async () => {

    return (
      <div className='flex flex-col min-h-screen'>
        <Header />
          <main className="sm:flex sm:flex-col xl:flex xl:flex-row p-2 container mx-auto">
          <LoginForm/>
          </main>
        <Footer />
      </div>
    );
  };
  
  export default LoginPage;