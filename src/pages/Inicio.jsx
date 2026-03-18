import BarraNavegacion from "../components/layout/BarraNavegacion";
import PiePagina from "../components/layout/PiePagina";

function Inicio() {
  return (
    <>
      <BarraNavegacion />
      <main className="contenedor seccion">
        <h1>Bienvenido a AeroPaq</h1>
        <p>Plataforma de cotización y gestión de envíos.</p>
      </main>
      <PiePagina />
    </>
  );
}

export default Inicio;