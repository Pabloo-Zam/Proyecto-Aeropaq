function PreguntasFrecuentes() {
  return (
    <section className="seccion">
      <div className="contenedor">
        <h2>Preguntas frecuentes</h2>

        <div className="tarjeta-detalle">
          <h3>¿Cuánto tarda un envío?</h3>
          <p>Depende del destino y del tipo de servicio seleccionado.</p>
        </div>

        <div className="tarjeta-detalle">
          <h3>¿Tienen servicio exprés?</h3>
          <p>Sí, contamos con una modalidad exprés para entregas prioritarias.</p>
        </div>

        <div className="tarjeta-detalle">
          <h3>¿Puedo solicitar recolección a domicilio?</h3>
          <p>Sí, este servicio está disponible según cobertura y tipo de envío.</p>
        </div>
      </div>
    </section>
  );
}

export default PreguntasFrecuentes;