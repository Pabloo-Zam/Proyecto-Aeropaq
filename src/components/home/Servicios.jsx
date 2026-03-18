import { Link } from "react-router-dom";

function Servicios() {
  return (
    <section id="servicios" className="seccion">
      <div className="contenedor">
        <h2>Servicios</h2>
        <p className="texto-seccion">
          Explora nuestras soluciones logísticas y elige la opción ideal para tu envío.
        </p>

        <div className="grid-servicios">
          <Link to="/servicios/nacionales" className="tarjeta-servicio">
            <h3>Envíos nacionales</h3>
            <p>Entregas seguras y rápidas dentro del país.</p>
          </Link>

          <Link to="/servicios/internacionales" className="tarjeta-servicio">
            <h3>Envíos internacionales</h3>
            <p>Conectamos tus paquetes con destinos internacionales.</p>
          </Link>

          <Link to="/servicios/recoleccion" className="tarjeta-servicio">
            <h3>Recolección a domicilio</h3>
            <p>Recogemos tu paquete en la ubicación que indiques.</p>
          </Link>

          <Link to="/servicios/express" className="tarjeta-servicio">
            <h3>Servicio exprés</h3>
            <p>Prioridad y rapidez para envíos urgentes.</p>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Servicios;