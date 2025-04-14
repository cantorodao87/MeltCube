import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function MainMenu() {
  const [username, setUsername] = useState<string | null>(null);
  const navigate = useNavigate();

  // Cargar el nombre de usuario desde el almacenamiento local o sesión
  useEffect(() => {
    const storedUsername = localStorage.getItem("username"); // O lo que uses para almacenar el nombre
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  function handleLogout() {
    // Limpiar el almacenamiento local o cualquier información de sesión
    localStorage.removeItem("username"); 
    localStorage.removeItem("users");
    navigate("/"); // Redirigir al login
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <h1 className="text-2xl font-bold">Menú Principal</h1>

      {username && (
        <p className="text-lg font-semibold">Bienvenido, {username}!</p>
      )}

      <div className="flex flex-col gap-4 mt-6">
        <button
          onClick={() => navigate("/single")}
          className="bg-blue-500 text-white p-2 rounded w-48"
        >
          Partida Individual
        </button>

        <button
          onClick={() => navigate("/multi")}
          className="bg-blue-500 text-white p-2 rounded w-48"
        >
          Partida Online
        </button>

        <button
          onClick={() => navigate("/stats")}
          className="bg-blue-500 text-white p-2 rounded w-48"
        >
          Estadísticas
        </button>

        <button
          onClick={handleLogout}
          className="bg-red-500 text-white p-2 rounded w-48 mt-4"
        >
          Cerrar Sesión
        </button>
      </div>
    </div>
  );
}