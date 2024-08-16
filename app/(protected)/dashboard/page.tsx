'use client'; // Esto asegura que el componente se renderice como Client Component

import { useEffect } from 'react';
import { useRouter } from 'next/navigation'; // Cambiamos el import a 'next/navigation'
import { redirectToDashboard } from '@/app/utils';

const DashboardHome: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    const userRole = 'cliente'; // Esta lógica debe cambiarse por la real
    redirectToDashboard(router, userRole);
  }, [router]);

  return (
    <div className="flex justify-center items-center h-screen">
      <p className="text-lg font-semibold">
        Redirigiendo al dashboard adecuado...
      </p>
    </div>
  );
};

export default DashboardHome;
