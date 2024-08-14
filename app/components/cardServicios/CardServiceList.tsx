import CardService from './CardService';

interface CardServiceListProps {
  cards: {
    href: string;
    title: string;
    imgSrc: string;
    imgAlt: string;
    experts: string;
  }[];
}

const CardServiceList: React.FC<CardServiceListProps> = ({ cards }) => {
  return (
    <ul className="flex flex-wrap justify-center gap-4">
      {cards.map((card, index) => (
        <CardService
          key={index}
          href={card.href}
          title={card.title}
          imgSrc={card.imgSrc}
          imgAlt={card.imgAlt}
          experts={card.experts}
          description=""
        />
      ))}
    </ul>
  );
};

export default CardServiceList;
