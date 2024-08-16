import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const notifications = [
    { id: 1, message: 'Nueva cita programada con tu nutricionista', read: false },
    { id: 2, message: 'Tu reporte mensual está disponible', read: false },
    { id: 3, message: 'La cita con el psicólogo fue confirmada', read: true },
  ];

  res.status(200).json(notifications);
}
