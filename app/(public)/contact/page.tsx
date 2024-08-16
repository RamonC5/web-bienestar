import Header from '@/app/components/header/Header';
import '../../globals.css';
import Footer from '@/app/components/footer/FooterNew';
import ContactForm from '@/app/components/contactForm/ContactForm';


const ContactPage: React.FC = async () => {

  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main className="p-8 flex-grow">
        <ContactForm/>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;