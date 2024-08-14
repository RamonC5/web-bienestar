// components/DayCard.tsx
import React from 'react';
import { DaySchedule } from '../Scheduler';


interface DayCardProps {
  schedule: DaySchedule;
}

const DayCard: React.FC<DayCardProps> = ({ schedule }) => {
  return (
    <div className={`p-4 rounded-md ${schedule.available ? 'bg-green-500' : 'bg-red-500'} text-white`}>
      <h3 className="font-bold">{schedule.day}</h3>
      {schedule.available ? (
        <div>
          <p>Disponible</p>
          {schedule.times?.map((time, index) => (
            <p key={index}>{time}</p>
          ))}
        </div>
      ) : (
        <p>No Disponible</p>
      )}
    </div>
  );
};

export default DayCard;
