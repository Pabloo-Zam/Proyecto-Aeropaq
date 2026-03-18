import BarraNavegacion from "../components/layout/BarraNavegacion";
import PiePagina from "../components/layout/PiePagina";

function ServicioExpress() {
  return (
    <>
      <BarraNavegacion />
      <main className="seccion">
        <div className="contenedor">
          <h1>Servicio exprés</h1>
          <div className="tarjeta-detalle">
            <p>
              Nuestro servicio exprés está diseñado para entregas urgentes,
              reduciendo tiempos de espera y priorizando envíos importantes.
            </p>
          </div>
        </div>
      </main>
      <PiePagina />
    </>
  );
}

export default ServicioExpress;