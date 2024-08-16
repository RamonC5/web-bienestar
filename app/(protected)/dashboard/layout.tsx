import React from 'react';
import Header from '@/app/components/header/HeaderDashboard';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header userRole={'administrador'}/>
      <main className="container mx-auto p-4">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;