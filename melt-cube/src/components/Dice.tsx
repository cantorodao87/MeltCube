import { useEffect, useState } from "react";

const caras = [
  "../assets/corazon.png",
  "../assets/corazon.png",
  "../assets/estrella.png",
  "../assets/estrella.png",
  "../assets/hielo1.png",
  "../assets/hielo2.png",
];

interface Props {
  rodando: boolean;
  index: number;
  resultadoFinal?: string;
  marcado: boolean;
  onClick: () => void;
}

export default function Dice({
  rodando,
  index,
  resultadoFinal,
  marcado,
  onClick,
}: Props) {
  const [cara, setCara] = useState<string>(caras[Math.floor(Math.random() * 6)]);

  useEffect(() => {
    if (!rodando) {
      if (resultadoFinal) setCara(resultadoFinal);
      return;
    }

    let i = 0;
    const intervalo = setInterval(() => {
      i++;
      setCara(caras[Math.floor(Math.random() * 6)]);
      if (i >= 5) clearInterval(intervalo);
    }, 400);

    return () => clearInterval(intervalo);
  }, [rodando]);

  const bordeColor = marcado ? "border-yellow-500" : "border-red-500";

  return (
    <img
      src={cara}
      alt={`Dado ${index + 1}`}
      width={64}
      height={64}
      onClick={onClick}
      className={`w-16 h-16 m-1 cursor-pointer transition-all hover:scale-110 border-4 ${bordeColor} rounded-full bg-white shadow-md`}
    />
  );
}