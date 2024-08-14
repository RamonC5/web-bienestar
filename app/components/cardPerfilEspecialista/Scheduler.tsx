// types.ts
export interface DaySchedule {
    day: string;
    available: boolean;
    times?: string[];
  }
  
  export const weeklySchedule: DaySchedule[] = [
    { day: 'Lunes', available: true, times: ['09:00 - 12:00'] },
    { day: 'Martes', available: false },
    { day: 'Miércoles', available: true, times: ['14:00 - 17:00'] },
    { day: 'Jueves', available: true, times: ['09:00 - 12:00', '14:00 - 17:00'] },
    { day: 'Viernes', available: false },
  ];
  