// app/layout.tsx
import '../app/globals.css';
import { ReactNode } from 'react';

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="es">
      <body>
        <div>
          {children}
        </div>
      </body>
    </html>
  );
};

export default RootLayout;

