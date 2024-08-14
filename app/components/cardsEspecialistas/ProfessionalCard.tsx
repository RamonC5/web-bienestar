import EstrellaCard from "../estrella/Estrella";
import Image from 'next/image';
interface ProfessionalCardProps {
    name: string;
    specialty: string;
    price: string;
    rating: number;
    imageUrl: string;
    description: string;
    city: string
    link: string;
  }
  
  const ProfessionalCard: React.FC<ProfessionalCardProps> = ({ name, specialty, price, city, rating,description, imageUrl, link }) => {
    return (
      <div className="bg-white p-4 rounded-md shadow-md flex flex-row mb-3 ml-2">
        <div className="mb-4  max-h-44">
            <div className="flex flex-col">
              <div className="flex flex-row">
                <Image 
                  src={imageUrl}
                  alt=""
                  width={120}
                  height={120}
                  className="w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover"
                />
                <div className="title-flex mx-1 flex flex-col">
                    <h3 className="text-xl font-bold">{name}</h3>
                    <EstrellaCard
                        rating={rating}
                    />
                    <div className="inline-flex items-center">
                      <p className="text-xl font-bold text-gray-600">{price}</p>
                    </div>
                    <div className="flex flex-col mt-2 mb-2">
                        <div className="inline-flex items-center mt-1" >
                          <svg xmlns="http://www.w3.org/2000/svg" 
                                  fill="none" 
                                  viewBox="0 0 24 24" 
                                  strokeWidth={1.5} 
                                  stroke="currentColor" 
                                  className="w-5 h-5 mr-2"
                              >
                                  <path 
                                  strokeLinecap="round" 
                                  strokeLinejoin="round" 
                                  d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" 
                                  />
                              </svg>
                              <p className="text-sm text-gray-600">{specialty}</p>
                            </div>
                            <div className="inline-flex items-center mt-1 max-w-xs">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                </svg>
                                <p className="text-sm text-gray-600 truncate">aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
                            </div>
                    </div>
                </div>
            </div>
                    <div className="xl:flex sm:flex xl:flex-row sm:flex-col">
                      <a href={link} className="block button-link  bg-blue-600 text-white py-2 px-5 mr-4 rounded-md text-center w-40 max-w-full">Saber más</a>
                      <a href={link} className="block button-link  bg-blue-600 text-white py-2 px-5 mr-4 rounded-md text-center w-40 max-w-full">Contactar</a>
                    </div>
                </div>
            
        </div>
       
      </div>
    );
  };
  
  export default ProfessionalCard;
  