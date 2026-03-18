import BarraNavegacion from "../components/layout/BarraNavegacion";
import PiePagina from "../components/layout/PiePagina";

function RecoleccionDomicilio() {
  return (
    <>
      <BarraNavegacion />
      <main className="seccion">
        <div className="contenedor">
          <h1>Recolección a domicilio</h1>
          <div className="tarjeta-detalle">
            <p>
              Recogemos tu paquete en la ubicación indicada para hacer más cómodo
              y eficiente el proceso de envío.
            </p>
          </div>
        </div>
      </main>
      <PiePagina />
    </>
  );
}

export default RecoleccionDomicilio;