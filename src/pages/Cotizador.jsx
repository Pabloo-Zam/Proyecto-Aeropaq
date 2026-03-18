import BarraNavegacion from "../components/layout/BarraNavegacion";
import PiePagina from "../components/layout/PiePagina";

function Cotizador() {
  return (
    <>
      <BarraNavegacion />
      <main className="contenedor seccion">
        <h1>Cotizador</h1>
        <p>Aquí irá el formulario de cotización.</p>
      </main>
      <PiePagina />
    </>
  );
}

export default Cotizador;