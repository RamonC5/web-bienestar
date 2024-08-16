'use client';
import Header from "@/app/components/header/HeaderDashboard";





const ClienteDashboard: React.FC = () => {

    return (
      <>
        <h1 className="text-2xl font-bold mb-4">Dashboard Cliente</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Otros componentes del dashboard */}
          <div className="md:col-span-2">
            <p>Contenido principal del dashboard del cliente...</p>
          </div>
        </div>
      </>
    );
  };
  
  export default ClienteDashboard;
  