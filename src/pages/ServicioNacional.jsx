import BarraNavegacion from "../components/layout/BarraNavegacion";
import PiePagina from "../components/layout/PiePagina";

function ServicioNacional() {
  return (
    <>
      <BarraNavegacion />
      <main className="seccion">
        <div className="contenedor">
          <h1>Envíos nacionales</h1>
          <div className="tarjeta-detalle">
            <p>
              AeroPaq ofrece envíos nacionales con opciones estándar y exprés,
              brindando cobertura dentro del país con tiempos estimados confiables.
            </p>
          </div>
        </div>
      </main>
      <PiePagina />
    </>
  );
}

export default ServicioNacional;