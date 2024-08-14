// components/WeekSchedule.tsx
import React from 'react';
import DayCard from './DayCard';
import { weeklySchedule } from '../Scheduler';


const WeekSchedule: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 text-center">
        {weeklySchedule.map((schedule, index) => (
          <DayCard key={index} schedule={schedule} />
        ))}
      </div>
    </div>
  );
};

export default WeekSchedule;
