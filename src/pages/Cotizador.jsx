import { useState } from "react";
import BarraNavegacion from "../components/layout/BarraNavegacion";
import PiePagina from "../components/layout/PiePagina";

function Cotizador() {
  const [formData, setFormData] = useState({
    origenDestino: "",
    peso: "",
    dimensiones: "",
    nivelServicio: "estandar",
    recoleccion: false,
    seguro: false,
  });

  //guardar resultado de calculos
  const [cotizacion, setCotizacion] = useState(null);
  const [errorValidacion, setErrorValidacion] = useState("");

  //actualiza los datos en tiempo real
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // funcion que usamos para calcular
  const calcularCotizacion = (e) => {
    e.preventDefault();

    // Validaciones obligatorias
    if (!formData.origenDestino || !formData.peso) {
      setErrorValidacion("Por favor, selecciona el destino y escribe el peso.");
      return;
    }
    if (formData.peso <= 0) {
      setErrorValidacion("El peso debe ser mayor a 0.");
      return;
    }
    setErrorValidacion("");

    let costoBase = 0;
    let costoDistancia = 0;
    let tiempoEstimado = "";

    if (formData.origenDestino === "misma_ciudad") {
      costoBase = 25;
      costoDistancia = 10;
      tiempoEstimado = formData.nivelServicio === "expres" ? "2 a 4 horas" : "1 a 2 días hábiles";
    } else if (formData.origenDestino === "otro_departamento") {
      costoBase = 40;
      costoDistancia = 25;
      tiempoEstimado = formData.nivelServicio === "expres" ? "1 día hábil" : "2 a 3 días hábiles";
    } else if (formData.origenDestino === "internacional") {
      costoBase = 150;
      costoDistancia = 75;
      tiempoEstimado = formData.nivelServicio === "expres" ? "2 a 3 días hábiles" : "5 a 7 días hábiles";
    }

    const costoPeso = parseFloat(formData.peso) * 3;
    
    let recargosExtras = 0;
    if (formData.nivelServicio === "expres") recargosExtras += 20;
    if (formData.recoleccion) recargosExtras += 15; 
    if (formData.seguro) recargosExtras += 30; 

    const total = costoBase + costoDistancia + costoPeso + recargosExtras;

    // Guardamos
    setCotizacion({
      costoBase,
      costoDistancia,
      costoPeso,
      recargosExtras,
      total,
      tiempoEstimado,
    });
  };

  return (
    <>
      <BarraNavegacion />
      <main className="seccion seccion-clara">
        <div className="contenedor">
          <h2>Cotiza tu envío</h2>
          
          <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
            {/* Formulario */}
            <form className="formulario-contacto" onSubmit={calcularCotizacion} style={{ flex: '1', minWidth: '300px' }}>
              
              <select name="origenDestino" value={formData.origenDestino} onChange={handleChange}>
                <option value="">Selecciona Origen / Destino</option>
                <option value="misma_ciudad">Misma Ciudad</option>
                <option value="otro_departamento">Otro Departamento</option>
                <option value="internacional">Internacional</option>
              </select>

              <input 
                type="number" 
                name="peso" 
                placeholder="Peso en libras" 
                value={formData.peso} 
                onChange={handleChange} 
              />
              
              <input 
                type="text" 
                name="dimensiones" 
                placeholder="Dimensiones en cm" 
                value={formData.dimensiones} 
                onChange={handleChange} 
              />

              <select name="nivelServicio" value={formData.nivelServicio} onChange={handleChange}>
                <option value="estandar">Servicio Estándar</option>
                <option value="expres">Servicio Exprés</option>
              </select>

              <div style={{ margin: '1rem 0', textAlign: 'left' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem' }}>
                  <input type="checkbox" name="recoleccion" checked={formData.recoleccion} onChange={handleChange} /> 
                  {' '}Recolección a domicilio (+Q15)
                </label>
                <label style={{ display: 'block' }}>
                  <input type="checkbox" name="seguro" checked={formData.seguro} onChange={handleChange} /> 
                  {' '}Seguro contra pérdida/accidentes (+Q30)
                </label>
              </div>

              {errorValidacion && <p style={{ color: "#d9534f", fontWeight: "bold" }}>{errorValidacion}</p>}
              
              <button type="submit" className="boton-principal">Calcular Tarifa</button>
            </form>

            {/* mostrar si ya se calculo y guardo */}
            {cotizacion && (
              <div className="tarjeta-detalle" style={{ flex: '1', minWidth: '300px', backgroundColor: '#f4f4f4', padding: '2rem', borderRadius: '8px' }}>
                <h3>Resumen de Cotización</h3>
                <hr />
                <ul style={{ listStyle: 'none', padding: 0, textAlign: 'left', lineHeight: '2' }}>
                  <li><strong>Costo Base:</strong> Q{cotizacion.costoBase.toFixed(2)}</li>
                  <li><strong>Costo por Distancia:</strong> Q{cotizacion.costoDistancia.toFixed(2)}</li>
                  <li><strong>Costo por Peso:</strong> Q{cotizacion.costoPeso.toFixed(2)}</li>
                  <li><strong>Cargos Adicionales (Extras/Exprés):</strong> Q{cotizacion.recargosExtras.toFixed(2)}</li>
                </ul>
                <hr />
                <h2 style={{ color: '#0056b3' }}>Total Estimado: Q{cotizacion.total.toFixed(2)}</h2>
                <p><strong>Tiempo estimado de entrega:</strong> {cotizacion.tiempoEstimado}</p>
                <p style={{ fontSize: '0.8rem', color: '#666' }}>*Esta cotización es un estimado y puede variar en sucursal.</p>
              </div>
            )}
          </div>

        </div>
      </main>
      <PiePagina />
    </>
  );
}

export default Cotizador;