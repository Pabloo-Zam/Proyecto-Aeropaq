import BarraNavegacion from "../components/layout/BarraNavegacion";
import PiePagina from "../components/layout/PiePagina";

function Cotizador() {
  return (
    <>
      <BarraNavegacion />
      <main className="seccion">
        <div className="contenedor">
          <h1>Cotizador</h1>
          <div className="tarjeta-detalle">
            <p>Aquí irá el formulario de cotización.</p>
          </div>
        </div>
      </main>
      <PiePagina />
    </>
  );
}

export default Cotizador;