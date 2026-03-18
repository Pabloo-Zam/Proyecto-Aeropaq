import { Link } from "react-router-dom";

function Portada() {
  return (
    <section className="portada">
      <div className="contenedor portada-contenido">
        <h1>AeroPaq</h1>
        <h2>Envíos rápidos, seguros y confiables</h2>
        <p>
          Cotiza tus envíos y conoce nuestras soluciones nacionales e internacionales.
        </p>

        <div className="portada-botones">
          <Link to="/cotizador" className="boton-principal">
            Ir al cotizador
          </Link>
          <Link to="/servicios/nacionales" className="boton-secundario">
            Ver servicios
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Portada;