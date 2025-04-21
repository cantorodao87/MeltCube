import { useEffect, useState } from "react";
import Dice from "../components/Dice";

export default function Tablero() {
  const [tirando, setTirando] = useState(false);
  const [resultados, setResultados] = useState<string[]>([]);
  const [dadosMarcados, setDadosMarcados] = useState<boolean[]>(Array(6).fill(true));
  const [jugadores, setJugadores] = useState<string[]>([]);
  const [turnoActual, setTurnoActual] = useState<number>(0);
  const [ronda, setRonda] = useState<number>(1); // tiradas por turno

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("jugadores") || "[]");
    setJugadores(data);
  }, []);

  const lanzarDados = () => {
    if (tirando) return;
    setTirando(true);

    const caras = [
      "../assets/corazon.png",
      "../assets/corazon.png",
      "../assets/estrella.png",
      "../assets/estrella.png",
      "../assets/hielo1.png",
      "../assets/hielo2.png",
    ];

    const nuevosResultados = Array.from({ length: 6 }, (_, i) => {
      return ronda === 1 || dadosMarcados[i]
        ? caras[Math.floor(Math.random() * 6)]
        : resultados[i];
    });

    setTimeout(() => {
      setResultados(nuevosResultados);
      setTirando(false);
      setRonda((r) => r + 1);
    }, 2000);
  };

  const toggleMarcado = (index: number) => {
    if (tirando || ronda === 1) return;
    setDadosMarcados((prev) => {
      const nuevoEstado = prev.map((valor, i) => (i === index ? !valor : valor));
      console.log(`Dado ${index + 1} marcado: ${nuevoEstado[index]}`, nuevoEstado);
      return nuevoEstado;
    });
  };

  const terminarTurno = () => {
    setTurnoActual((prev) => (prev + 1) % jugadores.length);
    setResultados([]);
    setDadosMarcados(Array(6).fill(true));
    setRonda(1);
  };

  if (jugadores.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Cargando jugadores...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-green-100 gap-6">
      <h2 className="text-2xl font-bold">Turno: {jugadores[turnoActual]}</h2>

      <div className="flex gap-4 p-4 flex-wrap justify-center">
        {Array.from({ length: 6 }).map((_, i) => (
           <Dice
           key={i}
           index={i}
           rodando={tirando}
           resultadoFinal={resultados[i]}
           marcado={dadosMarcados[i]}
           onClick={() => toggleMarcado(i)}
         />
        ))}
      </div>

      <div className="flex gap-4 mt-4">
        <button
          onClick={lanzarDados}
          disabled={tirando}
          className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 disabled:opacity-50"
        >
          🎲 Lanzar dados
        </button>

        <button
          onClick={terminarTurno}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Terminar turno
        </button>
      </div>
    </div>
  );
}