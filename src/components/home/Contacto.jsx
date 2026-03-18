function Contacto() {
  return (
    <section className="seccion seccion-clara">
      <div className="contenedor">
        <h2>Contacto</h2>
        <form className="formulario-contacto">
          <input type="text" placeholder="Nombre completo" />
          <input type="email" placeholder="Correo electrónico" />
          <input type="text" placeholder="Teléfono" />
          <textarea rows="5" placeholder="Escribe tu mensaje"></textarea>
          <button type="submit" className="boton-principal">
            Enviar mensaje
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contacto;