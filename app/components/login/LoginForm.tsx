"use client";

import Link from "next/link";
import CheckboxField from "../contactForm/CheckboxField";
import InputField from "../contactForm/InputField";


const LoginForm: React.FC = () => (
    <section className="p-8 max-w-2xl min-w-2xl mx-auto bg-white rounded-lg shadow">
      <h2 className="text-3xl font-bold mb-6 text-center">Acceder</h2>
      <form action="#" method="post">
        <div className="grid grid-cols-1 gap-6">
          <InputField
            id="usuario"
            type="text"
            placeholder="Usuario *"
            label="Usuario"
            required
            aria-required="true"
            aria-label="Usuario"
            className="col-span-2 sm:col-span-1" // Occupy two columns on larger screens
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
        </div>

        <button
          type="submit"
          className="mt-6 w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition focus:outline-none focus:ring-2 focus:ring-blue-600"
          aria-label="Enviar formulario"
        >
          Enviar
        </button>
        <div className="mt-6">
        <Link href={'/register'} aria-label={'Registro de usuario'} className="text-primary no-underline hover:underline">
          <p className="text-sm text-gray-600 text-left">{'¿Olvidastes la contraseña?'}</p>
        </Link>
        <Link href={'/register'} aria-label={'Registro de usuario'} className="text-primary no-underline hover:underline">
          <p className="text-sm text-gray-600 text-left">{'¿No tienes cuenta?'}</p>
        </Link>
        </div>
      </form>

    </section>
);

export default LoginForm;
