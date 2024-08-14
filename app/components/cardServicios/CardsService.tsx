import CardServiceList from "./CardServiceList";
import SectionTitleService from "./SectionTitleService";

const CardsService: React.FC = () => {
  const cards = [
    {
      href: '/profesionales-del-bienestar.html',
      title: 'Psicologia',
      imgSrc: '/assets/icons/servicios/psicologia.svg',
      imgAlt: 'Psicologia',
      experts: '15 expertos',
    },
    {
      href: '/profesionales-del-bienestar.html',
      title: 'Writing & Translation',
      imgSrc: '/assets/icons/servicios/psicologia.svg',
      imgAlt: 'Writing & Translation',
      experts: '20 expertos',
    },
    {
      href: '/profesionales-del-bienestar.html',
      title: 'Design & Art',
      imgSrc: '/assets/icons/servicios/psicologia.svg',
      imgAlt: 'Design & Art',
      experts: '192,540 Freelancers',
    },
    {
      href: '/m/hire/freelancers/administrative-secretarial/',
      title: 'Administrative & Secretarial',
      imgSrc: '/assets/icons/servicios/psicologia.svg',
      imgAlt: 'Administrative & Secretarial',
      experts: '84,920 Freelancers',
    },
    {
      href: '/m/hire/freelancers/sales-marketing/',
      title: 'Sales & Marketing',
      imgSrc: '/assets/icons/servicios/psicologia.svg',
      imgAlt: 'Sales & Marketing',
      experts: '75,130 Freelancers',
    },
    {
      href: '/m/hire/freelancers/engineering-architecture/',
      title: 'Engineering & Architecture',
      imgSrc: '/assets/icons/servicios/psicologia.svg',
      imgAlt: 'Engineering & Architecture',
      experts: '50,220 Freelancers',
    },
  ];

  return (
    <div>
      <section>
        <SectionTitleService title="Encuentra a los Mejores Expertos en Bienestar y Salud" />
        <CardServiceList cards={cards} />
      </section>
    </div>
  );
};

export default CardsService;