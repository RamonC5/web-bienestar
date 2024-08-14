interface CheckboxFieldProps {
    id: string;
    label: string;
    required?: boolean;
  }
  
  const CheckboxField: React.FC<CheckboxFieldProps> = ({ id, label, required = false }) => (
    <div className="checkbox-group flex items-center mt-6">
      <input
        type="checkbox"
        id={id}
        required={required}
        className="mr-2"
      />
      <label htmlFor={id} className="text-gray-700">
        {label}
      </label>
    </div>
  );
  
  export default CheckboxField;
  