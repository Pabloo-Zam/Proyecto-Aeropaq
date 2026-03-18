function ComoFunciona() {
  return (
    <section className="seccion">
      <div className="contenedor">
        <h2>Cómo funciona</h2>
        <div className="grid-pasos">
          <div className="tarjeta-detalle">
            <h3>1. Solicitud</h3>
            <p>Ingresa la información de tu envío o realiza una cotización.</p>
          </div>

          <div className="tarjeta-detalle">
            <h3>2. Recolección</h3>
            <p>Recogemos el paquete o lo recibimos en el punto asignado.</p>
          </div>

          <div className="tarjeta-detalle">
            <h3>3. Despacho</h3>
            <p>Procesamos el envío según el servicio seleccionado.</p>
          </div>

          <div className="tarjeta-detalle">
            <h3>4. Entrega</h3>
            <p>El paquete llega a su destino dentro del tiempo estimado.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ComoFunciona;