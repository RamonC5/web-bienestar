// components/WeeklyScheduleTable.tsx
import React from 'react';
import { weeklySchedule } from '../cardPerfilEspecialista/Scheduler';



const WeeklyScheduleTable: React.FC = () => {
    return (
      <div className="container mx-auto p-4">
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 text-left text-gray-600 font-medium">Día</th>
                <th className="px-4 py-2 text-left text-gray-600 font-medium">Horarios</th>
              </tr>
            </thead>
            <tbody>
              {weeklySchedule.map((schedule, index) => (
                <tr key={index} className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                  <td className="px-4 py-2 border-t border-gray-200 whitespace-nowrap">{schedule.day}</td>
                  <td className={`px-4 py-2 border-t border-gray-200`}>
                    {schedule.available ? (
                      <ul className="list-none ml-0 text-green-600">
                        {schedule.times?.map((time, i) => (
                          <li key={i}>{time}</li>
                        ))}
                      </ul>
                    ) : (
                      <span className="text-red-600">No Disponible</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };
  
  export default WeeklyScheduleTable;