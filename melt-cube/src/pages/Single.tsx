import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const nombresAleatorios = [
  "Max", "Luna", "Toby", "Nina", "Rex", "Zoe", "Rocky", "Milo", "Coco", "Simba",
];

function obtenerNombreAleatorio(): string {
  return nombresAleatorios[Math.floor(Math.random() * nombresAleatorios.length)];
}

export default function Single() {
  const navigate = useNavigate();
  const username = localStorage.getItem("username") || "Jugador1";

  const [jugadores, setJugadores] = useState<string[]>([
    username,
    obtenerNombreAleatorio(),
    obtenerNombreAleatorio(),
  ]);

  const añadirJugador = () => {
    if (jugadores.length < 5) {
      setJugadores([...jugadores, obtenerNombreAleatorio()]);
    }
  };

  const quitarJugador = () => {
    if (jugadores.length > 3) {
      setJugadores(jugadores.slice(0, -1));
    }
  };

  const actualizarNombre = (index: number, nuevoNombre: string) => {
    const copia = [...jugadores];
    copia[index] = nuevoNombre;
    setJugadores(copia);
  };

  const jugar = () => {
    // Aquí podrías guardar los jugadores en contexto o localStorage y redirigir al tablero
    console.log("Jugadores:", jugadores);
    navigate("/table");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <h2 className="text-2xl font-bold mb-4">Partida Individual</h2>

      {jugadores.map((nombre, i) => (
        <div key={i} className="flex items-center gap-2">
          <label className="w-24 text-right">Jugador {i + 1}:</label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => actualizarNombre(i, e.target.value)}
            disabled={i === 0}
            className="border border-gray-400 rounded p-1"
          />
        </div>
      ))}

      <div className="flex gap-2 mt-2">
        <button
          onClick={añadirJugador}
          disabled={jugadores.length >= 5}
          className="bg-green-500 text-white px-3 py-1 rounded disabled:opacity-50"
        >
          +
        </button>
        <button
          onClick={quitarJugador}
          disabled={jugadores.length <= 3}
          className="bg-yellow-500 text-white px-3 py-1 rounded disabled:opacity-50"
        >
          -
        </button>
      </div>

      <div className="flex gap-4 mt-6">
        <button
          onClick={jugar}
          className="bg-blue-600 text-white px-6 py-2 rounded"
        >
          Jugar
        </button>
        <button
          onClick={() => navigate("/menu")}
          className="bg-gray-400 text-white px-6 py-2 rounded"
        >
          Volver al menú
        </button>
      </div>
    </div>
  );
}