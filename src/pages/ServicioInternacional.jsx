import BarraNavegacion from "../components/layout/BarraNavegacion";
import PiePagina from "../components/layout/PiePagina";

function ServicioInternacional() {
  return (
    <>
      <BarraNavegacion />
      <main className="seccion">
        <div className="contenedor">
          <h1>Envíos internacionales</h1>
          <div className="tarjeta-detalle">
            <p>
              Gestionamos envíos a destinos internacionales seleccionados,
              con estimaciones claras de costo y tiempo según el tipo de servicio.
            </p>
          </div>
        </div>
      </main>
      <PiePagina />
    </>
  );
}

export default ServicioInternacional;