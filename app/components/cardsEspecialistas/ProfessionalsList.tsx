import ProfessionalCard from "./ProfessionalCard";


const professionals = [
  {
    name: "Kelsie Meyer",
    specialty: "Psicóloga",
    price: "30€",
    city: "Madrid",
    rating: 3,
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum maiores expedita odit in corporis, eligendi, blanditiis quasi a, perferendis excepturi earum. Possimus assumenda numquam, quisquam pariatur animi accusantium dolorem. Dignissimos?, Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum maiores expedita odit in corporis, eligendi, blanditiis quasi a, perferendis excepturi earum. Possimus assumenda numquam, quisquam pariatur animi accusantium dolorem. Dignissimos?",
    imageUrl: "/assets/img/foto.jpg",
    link: "/especialista",
  },  {
    name: "Kelsie Meyer",
    specialty: "Psicóloga",
    price: "30€",
    city: "Barcelona",
    rating: 5,
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum maiores expedita odit in corporis, eligendi, blanditiis quasi a, perferendis excepturi earum. Possimus assumenda numquam, quisquam pariatur animi accusantium dolorem. Dignissimos?",
    imageUrl: "/assets/icons/servicios/psicologia.svg",
    link: "/especialista",
  },  {
    name: "Kelsie Meyer",
    specialty: "Psicóloga",
    price: "30€",
    city: "Malpartida de la serena",
    rating: 1,
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum maiores expedita odit in corporis, eligendi, blanditiis quasi a, perferendis excepturi earum. Possimus assumenda numquam, quisquam pariatur animi accusantium dolorem. Dignissimos?",
    imageUrl: "/assets/icons/servicios/psicologia.svg",
    link: "/especialista",
  },  {
    name: "Kelsie Meyer",
    specialty: "Psicóloga",
    price: "30€",
    city: "Barcelona",
    rating: 3,
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum maiores expedita odit in corporis, eligendi, blanditiis quasi a, perferendis excepturi earum. Possimus assumenda numquam, quisquam pariatur animi accusantium dolorem. Dignissimos?",
    imageUrl: "/assets/img/foto.jpg",
    link: "/especialista",
  },  {
    name: "Kelsie Meyer",
    specialty: "Psicóloga",
    price: "30€",
    city: "Barcelona",
    rating: 5,
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum maiores expedita odit in corporis, eligendi, blanditiis quasi a, perferendis excepturi earum. Possimus assumenda numquam, quisquam pariatur animi accusantium dolorem. Dignissimos?",
    imageUrl: "/assets/icons/servicios/psicologia.svg",
    link: "/especialista",
  },  {
    name: "Kelsie Meyer",
    specialty: "Psicóloga",
    price: "30€",
    city: "Barcelona",
    rating: 1,
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum maiores expedita odit in corporis, eligendi, blanditiis quasi a, perferendis excepturi earum. Possimus assumenda numquam, quisquam pariatur animi accusantium dolorem. Dignissimos?",
    imageUrl: "/assets/icons/servicios/psicologia.svg",
    link: "/especialista",
  },  {
    name: "Kelsie Meyer",
    specialty: "Psicóloga",
    price: "30€",
    city: "Barcelona",
    rating: 3,
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum maiores expedita odit in corporis, eligendi, blanditiis quasi a, perferendis excepturi earum. Possimus assumenda numquam, quisquam pariatur animi accusantium dolorem. Dignissimos?",
    imageUrl: "/assets/img/foto.jpg",
    link: "/especialista",
  },  {
    name: "Kelsie Meyer",
    specialty: "Psicóloga",
    price: "30€",
    city: "Barcelona",
    rating: 5,
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum maiores expedita odit in corporis, eligendi, blanditiis quasi a, perferendis excepturi earum. Possimus assumenda numquam, quisquam pariatur animi accusantium dolorem. Dignissimos?",
    imageUrl: "/assets/icons/servicios/psicologia.svg",
    link: "/especialista",
  },  {
    name: "Kelsie Meyer",
    specialty: "Psicóloga",
    price: "30€",
    city: "Barcelona",
    rating: 1,
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum maiores expedita odit in corporis, eligendi, blanditiis quasi a, perferendis excepturi earum. Possimus assumenda numquam, quisquam pariatur animi accusantium dolorem. Dignissimos?",
    imageUrl: "/assets/icons/servicios/psicologia.svg",
    link: "/especialista",
  },
  // Más profesionales...
];

const ProfessionalsList: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {professionals.map((prof, index) => (
        <ProfessionalCard key={index} {...prof} />
      ))}
    </div>
  );
};

export default ProfessionalsList;
