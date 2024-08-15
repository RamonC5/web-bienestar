"use client";

import CheckboxField from "../contactForm/CheckboxField";
import InputField from "../contactForm/InputField";

const RegisterForm: React.FC = () => (
    <section className="p-8 max-w-3xl mx-auto bg-white rounded-lg shadow">
      <h2 className="text-3xl font-bold mb-6 text-center">Registro</h2>
      <form action="#" method="post">
  <div className="grid grid-cols-1 gap-6">
      <InputField
        id="name"
        type="text"
        placeholder="Nombre *"
        label="Nombre"
        required
        aria-required="true"
        aria-label="Nombre completo"
        className="col-span-2 sm:col-span-1" // Occupy two columns on larger screens
      />
      <InputField
        id="apellidos"
        type="text"
        placeholder="Apellidos *"
        label="Apellidos"
        required
        aria-required="true"
        aria-label="Apellidos completo"
        className="col-span-2 sm:col-span-1" // Occupy two columns on larger screens
      />
      <InputField
        id="email"
        type="email"
        placeholder="Correo Electrónico *"
        label="Correo Electrónico"
        required
        aria-required="true"
        aria-label="Correo Electrónico"
      />
      <InputField
            id="contrasena"
            type="password"
            placeholder="Contraseña *"
            label="Contraseña"
            required
            aria-required="true"
            aria-label="Contraseña"
            className="col-span-2 sm:col-span-1" // Occupy two columns on larger screens
          />
          <InputField
            id="repcontrasena"
            type="password"
            placeholder="Repite Contraseña *"
            label="Repite Contraseña"
            required
            aria-required="true"
            aria-label="Repite Contraseña"
            className="col-span-2 sm:col-span-1" // Occupy two columns on larger screens
          />
      <CheckboxField
        id="profesional"
        label="Soy un profesional"
        aria-label="Aceptar si eres profesional"
      />
  </div>
  
  <CheckboxField
    id="privacy"
    label="Acepto la Política de Privacidad *"
    required
    aria-required="true"
    aria-label="Aceptar Política de Privacidad"
  />
  <button
    type="submit"
    className="mt-6 w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition focus:outline-none focus:ring-2 focus:ring-blue-600"
    aria-label="Enviar formulario"
  >
    Enviar
  </button>
</form>

    </section>
);

export default RegisterForm;
