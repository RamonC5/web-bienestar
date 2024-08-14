import Image from 'next/image';

const EstrellaCard = ({ rating }: { rating: number }) => {
  return (
       <div className={`rating rating-${rating}`}>
              <span className="text-yellow-500">{"★".repeat(rating)}</span>
              <span className="text-gray-300">{"★".repeat(5 - rating)}</span>
        </div>
  );
};

export default EstrellaCard;
