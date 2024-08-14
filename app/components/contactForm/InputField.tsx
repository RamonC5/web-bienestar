interface InputFieldProps {
  id: string;
  type: string;
  placeholder: string;
  label: string;
  className?: string
  required?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({ id, type, placeholder, label, required = false, className }) => {
  let combinedClassName ="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-50 "
  if(className){
    combinedClassName = combinedClassName + className;
  }
 return ( <div className="form-group">
    <label htmlFor={id} className="sr-only">{label}</label>
    
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      aria-label={label}
      required={required}
      className={combinedClassName}
    />
  </div>
);
};

export default InputField;
