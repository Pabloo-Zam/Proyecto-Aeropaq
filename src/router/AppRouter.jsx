import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "../pages/Inicio";
import Cotizador from "../pages/Cotizador";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/cotizador" element={<Cotizador />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;