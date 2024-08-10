interface SectionTitleServiceProps {
    title: string;
  }
  
  const SectionTitleService: React.FC<SectionTitleServiceProps> = ({ title }) => {
    return (
      <h2 className="text-center text-2xl font-semibold my-6 relative text-gray-800">
        {title}
        <span className="block w-12 h-1 bg-primary mx-auto mt-2"></span>
      </h2>
    );
  };
  
  export default SectionTitleService;