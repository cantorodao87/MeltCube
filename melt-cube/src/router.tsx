import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import MenuPrincipal from "./pages/MenuPrincipal";
import PartidaIndividual from "./pages/PartidaIndividual";
import PartidaOnline from "./pages/PartidaOnline";
import MesaDeJuego from "./pages/MesaDeJuego";
import Estadisticas from "./pages/Estadisticas";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/menu" element={<MenuPrincipal />} />
        <Route path="/individual" element={<PartidaIndividual />} />
        <Route path="/online" element={<PartidaOnline />} />
        <Route path="/juego" element={<MesaDeJuego />} />
        <Route path="/estadisticas" element={<Estadisticas />} />
      </Routes>
    </BrowserRouter>
  );
}