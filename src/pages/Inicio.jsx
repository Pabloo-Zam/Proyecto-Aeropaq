import BarraNavegacion from "../components/layout/BarraNavegacion";
import PiePagina from "../components/layout/PiePagina";
import Portada from "../components/home/Portada";
import Servicios from "../components/home/Servicios";
import Cobertura from "../components/home/Cobertura";
import ComoFunciona from "../components/home/ComoFunciona";
import Nosotros from "../components/home/Nosotros";
import PreguntasFrecuentes from "../components/home/PreguntasFrecuentes";
import Contacto from "../components/home/Contacto";

function Inicio() {
  return (
    <>
      <BarraNavegacion />
      <Portada />
      <Servicios />
      <Cobertura />
      <ComoFunciona />
      <Nosotros />
      <PreguntasFrecuentes />
      <Contacto />
      <PiePagina />
    </>
  );
}

export default Inicio;