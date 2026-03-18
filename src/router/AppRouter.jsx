import { HashRouter, Routes, Route } from "react-router-dom";
import Inicio from "../pages/Inicio";
import Cotizador from "../pages/Cotizador";
import ServicioNacional from "../pages/ServicioNacional";
import ServicioInternacional from "../pages/ServicioInternacional";
import RecoleccionDomicilio from "../pages/RecoleccionDomicilio";
import ServicioExpress from "../pages/ServicioExpress";

function AppRouter() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/cotizador" element={<Cotizador />} />
        <Route path="/servicios/nacionales" element={<ServicioNacional />} />
        <Route path="/servicios/internacionales" element={<ServicioInternacional />} />
        <Route path="/servicios/recoleccion" element={<RecoleccionDomicilio />} />
        <Route path="/servicios/express" element={<ServicioExpress />} />
      </Routes>
    </HashRouter>
  );
}

export default AppRouter;