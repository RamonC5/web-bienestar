interface SectionProps {
    title: string;
    children: React.ReactNode;
  }
  
  const Section: React.FC<SectionProps> = ({ title, children }) => (
    <div className="mt-6 bg-white px-6 py-7 rounded-md">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      {children}
    </div>
  );
  
  export default Section;
  