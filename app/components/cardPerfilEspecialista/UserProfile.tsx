// models/UserProfile.ts
export interface ProfessionalCardProps {
    name: string;
    specialty: string;
    price: string;
    rating: number;
    imageUrl: string;
    fondoUrl: string;
    description: string;
    city: string
    link: string;
  }

  export const useProfile : ProfessionalCardProps =   {
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
