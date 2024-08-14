"use client";

import CheckboxField from "./CheckboxField";
import InputField from "./InputField";

const ContactForm: React.FC = () => (
  <main>
    <section className="p-8 max-w-2xl mx-auto bg-white rounded-lg shadow">
      <h2 className="text-3xl font-bold mb-6 text-center">Contacto</h2>
      <form action="#" method="post">
  <div className="grid grid-cols-1 gap-6">
    <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6">
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
        id="phone"
        type="tel"
        placeholder="Teléfono *"
        label="Teléfono"
        required
        aria-required="true"
        aria-label="Número de Teléfono"
        className="col-span-2 sm:col-span-1" // Occupy two columns on larger screens
      />
    </div>
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
      id="subject"
      type="text"
      placeholder="Asunto"
      label="Asunto"
      aria-label="Asunto del mensaje"
    />
    <InputField
      id="message"
      type="textarea"
      placeholder="Mensaje *"
      label="Mensaje"
      required
      aria-required="true"
      aria-label="Mensaje"
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
  </main>
);

export default ContactForm;
