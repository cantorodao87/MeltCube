import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../lib/auth";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (login(username, password)) {
      navigate("/menu");
    } else {
      alert("Login incorrecto");
    }
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <h1 className="text-2xl font-bold">MeltCube - Iniciar Sesión</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <input
          className="border p-2 rounded"
          type="text"
          placeholder="Usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="border p-2 rounded"
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="bg-blue-500 text-white p-2 rounded" type="submit">
          Entrar
        </button>
        <p>
        ¿No tienes cuenta?{" "}
        <span style={{ color: "blue", cursor: "pointer" }} onClick={() => navigate("/register")}>
          Regístrate aquí
        </span>
      </p>
      </form>
    </div>
  );
}