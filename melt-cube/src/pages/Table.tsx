import { useState } from "react";
import Dice from "../components/Dice";

export default function Tablero() {
  const [tirando, setTirando] = useState(false);
  const [resultados, setResultados] = useState<string[]>([]);

  const lanzarDados = () => {
    setTirando(true);
    setResultados([]); // Resetea resultado

    setTimeout(() => {
      const caras = [
        "../assets/corazon.png",
        "../assets/corazon.png",
        "../assets/estrella.png",
        "../assets/estrella.png",
        "../assets/hielo1.png",
        "../assets/hielo2.png",
      ];
      const nuevosResultados = Array.from({ length: 6 }, () => caras[Math.floor(Math.random() * 6)]);
      setResultados(nuevosResultados);
      setTirando(false);
    }, 2000);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-green-100 gap-6">
      <h2 className="text-2xl font-bold">Tablero de juego</h2>
      <div className="flex gap-4 flex-wrap justify-center">
        {Array.from({ length: 6 }).map((_, i) => (
          <Dice
            key={i}
            index={i}
            rodando={tirando}
            resultadoFinal={resultados[i]}
          />
        ))}
      </div>
      <button
        onClick={lanzarDados}
        className="bg-yellow-500 text-white px-4 py-2 rounded-lg mt-4 hover:bg-yellow-600"
      >
        🎲 Lanzar dados
      </button>
    </div>
  );
}