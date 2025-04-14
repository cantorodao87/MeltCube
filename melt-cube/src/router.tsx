import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MainMenu from "./pages/MainMenu";
import Single from "./pages/Single";
import Multi from "./pages/Multi";
import Table from "./pages/Table";
import Stats from "./pages/Stats";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/menu" element={<MainMenu />} />
        <Route path="/single" element={<Single />} />
        <Route path="/multi" element={<Multi />} />
        <Route path="/table" element={<Table />} />
        <Route path="/stats" element={<Stats />} />
      </Routes>
    </BrowserRouter>
  );
}