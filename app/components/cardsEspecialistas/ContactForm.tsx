const ContactForm: React.FC = () => {
    return (
      <section className="bg-white p-8 rounded-md shadow-md xl:basis-1/3">
        <div className="container  xl:sticky xl:top-0">
          <h2 className="text-2xl font-semibold mb-6">Busca los mejores profesionales en bienestar y salud</h2>
          <form action="#" method="post">
            <div className="form-group mb-4">
              <label htmlFor="especialidad" className="inline text-sm font-medium text-gray-700">Especialidad</label>
              <select name="especialidad" id="especialidad" className="mt-1 block w-full p-2 border border-gray-300 rounded-md">
                <option value="" className="text-gray-200">Selecciona una especialidad</option>
                <option value="1">Terapia de terapia</option>
                <option value="2">Sin terapia</option>
              </select>
            </div>
            <div className="form-group mb-4">
              <label htmlFor="preciominimo" id="precio-label" className="block text-sm font-medium text-gray-700">Precios</label>
              <div className="select-container mt-1 flex gap-4" role="group" aria-labelledby="precio-label">
                <select name="preciominimo" id="preciominimo" aria-label="Precio Mínimo" className="p-2 border border-gray-300 rounded-md">
                  <option value="" className="text-gray-200">Min</option>
                  <option value="1">10€</option>
                  <option value="2">20€</option>
                  <option value="3">30€</option>
                  <option value="4">40€</option>
                </select>
                <select name="preciomaximo" id="preciomaximo" aria-label="Precio Máximo" className="p-2 border border-gray-300 rounded-md">
                  <option value="" className="text-gray-200">Max</option>
                  <option value="1">10€</option>
                  <option value="2">20€</option>
                  <option value="3">30€</option>
                  <option value="4">40€</option>
                </select>
              </div>
            </div>
            <div className="form-group mb-4">
              <label htmlFor="modalidad" className="block text-sm font-medium text-gray-700">Modalidad</label>
              <select name="modalidad" id="modalidad" className="mt-1 block w-full p-2 border border-gray-300 rounded-md">
                <option value="" className="text-gray-200">Selecciona una modalidad</option>
                <option value="1">Online</option>
                <option value="2">Presencial</option>
                <option value="3">Online y Presencial</option>
              </select>
            </div>
            <button className="button mt-4 bg-blue-600 text-white py-2 px-4 rounded-md" type="submit">Buscar profesionales</button>
          </form>
        </div>
      </section>
    );
  };
  
  export default ContactForm;
  