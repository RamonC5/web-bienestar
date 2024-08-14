import Section from "./Section";

interface ProfileDetailsProps {
    providerType: string;
    supportAreas: string[];
    certifications: string[];
    languages: string[];
    ageRange: string[];
  }
  
  const ProfileDetails: React.FC<ProfileDetailsProps> = ({
    providerType,
    supportAreas,
    certifications,
    languages,
    ageRange,
  }) => (
    <div className="w-full">
      <Section title="Servicios">
        <div className="mb-4">
          <h5 className="text-md font-semibold">Tipo de servicio</h5>
          <p className="text-sm">{providerType}</p>
        </div>
        <div className="mb-4">
          <h5 className="text-md font-semibold">Especialidades</h5>
          <p className="text-sm">{supportAreas.join(', ')}</p>
        </div>
        <div className="mb-4">
          <h5 className="text-md font-semibold">Títulos y licencias/certificaciones</h5>
          <p className="text-sm">{certifications.join(', ')}</p>
        </div>
        <div className="mb-4">
          <h5 className="text-md font-semibold">Idiomas</h5>
          <p className="text-sm">{languages.join(', ')}</p>
        </div>
        <div className="mb-4">
          <h5 className="text-md font-semibold">Rango de edad</h5>
          <p className="text-sm">{ageRange.join(', ')}</p>
        </div>
      </Section>
    </div>
  );
  
  export default ProfileDetails;
  