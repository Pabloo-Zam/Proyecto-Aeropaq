import { useState } from 'react';

function Contacto() {
  // estado de guardar y enviar 
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    telefono: '',
    mensaje: ''
  });
  
  const [estadoEnvio, setEstadoEnvio] = useState('');
  const [errorValidacion, setErrorValidacion] = useState('');

  // actualizar los daots
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // dalre clic enviar
  const handleSubmit = async (e) => {
    e.preventDefault();

    // verificar los campos
    if (!formData.nombre || !formData.correo || !formData.telefono || !formData.mensaje) {
      setErrorValidacion('Por favor, completa todos los campos para continuar.');
      return;
    }
    
    setErrorValidacion('');
    setEstadoEnvio('enviando');

    const scriptURL = 'https://script.google.com/macros/s/AKfycbzwuRgTrQ3MmM419c_n3s0PtAvP92DA6sKTjfnDbTVRwCobcTFGzRiVClEVoluzJPbj/exec'; 

    // preparar datos
    const data = new FormData();
    data.append('nombre', formData.nombre);
    data.append('correo', formData.correo);
    data.append('telefono', formData.telefono);
    data.append('mensaje', formData.mensaje);

    try {
      // Enviamos los datos
      await fetch(scriptURL, { method: 'POST', body: data, mode: 'no-cors' });
      
      setEstadoEnvio('exito');
      //limpiar fomrs
      setFormData({ nombre: '', correo: '', telefono: '', mensaje: '' });
      
    } catch (error) {
      console.error('Error al enviar:', error.message);
      setEstadoEnvio('error');
    }
  };

  return (
    <section className="seccion seccion-clara">
      <div className="contenedor">
        <h2>Contacto</h2>
        <form className="formulario-contacto" onSubmit={handleSubmit}>
          {/*se agregua los name para el react*/}
          <input 
            type="text" 
            name="nombre"
            placeholder="Nombre completo" 
            value={formData.nombre}
            onChange={handleChange}
          />
          <input 
            type="email" 
            name="correo"
            placeholder="Correo electrónico" 
            value={formData.correo}
            onChange={handleChange}
          />
          <input 
            type="text" 
            name="telefono"
            placeholder="Teléfono" 
            value={formData.telefono}
            onChange={handleChange}
          />
          <textarea 
            name="mensaje"
            rows="5" 
            placeholder="Escribe tu mensaje"
            value={formData.mensaje}
            onChange={handleChange}
          ></textarea>
          
          {}
          {errorValidacion && <p style={{color: '#d9534f', fontWeight: 'bold'}}>{errorValidacion}</p>}
          {estadoEnvio === 'exito' && <p style={{color: '#5cb85c', fontWeight: 'bold'}}>¡Tu mensaje fue enviado a AeroPaq con éxito!</p>}
          {estadoEnvio === 'error' && <p style={{color: '#d9534f', fontWeight: 'bold'}}>Hubo un error de conexión. Intenta de nuevo.</p>}

          {}
          <button type="submit" className="boton-principal" disabled={estadoEnvio === 'enviando'}>
            {estadoEnvio === 'enviando' ? 'Enviando información...' : 'Enviar mensaje'}
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contacto;