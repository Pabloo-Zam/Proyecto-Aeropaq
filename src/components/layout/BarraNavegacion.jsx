import { Link } from "react-router-dom";

function BarraNavegacion() {
  return (
    <header className="barra-navegacion">
      <div className="contenedor barra-contenido">
        <Link to="/" className="logo">
          AeroPaq
        </Link>

        <nav className="navegacion">
          <Link to="/">Inicio</Link>
          <Link to="/servicios/nacionales">Nacionales</Link>
          <Link to="/servicios/internacionales">Internacionales</Link>
          <Link to="/servicios/recoleccion">Recolección</Link>
          <Link to="/servicios/express">Exprés</Link>
          <Link to="/cotizador">Cotizador</Link>
        </nav>
      </div>
    </header>
  );
}

export default BarraNavegacion;