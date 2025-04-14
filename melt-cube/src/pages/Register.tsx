import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden");
      return;
    }

    if (!username || !password) {
      setError("Debes rellenar todos los campos");
      return;
    }

    // Guardar usuario en localStorage (simulación)
    const users = JSON.parse(localStorage.getItem("users") || "{}");
    if (users[username]) {
      setError("Ese nombre de usuario ya está registrado");
      return;
    }

    users[username] = { password };
    localStorage.setItem("users", JSON.stringify(users));
    navigate("/"); // redirige al login
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Registro de usuario</h2>
      <form onSubmit={handleRegister}>
        <div>
          <label>Nombre de usuario:</label>
          <input value={username} onChange={(e) => setUsername(e.target.value)} required />
        </div>
        <div>
          <label>Contraseña:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <div>
          <label>Confirmar contraseña:</label>
          <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit">Registrar</button>
        <p style={{ marginTop: "1rem" }}>
          ¿Ya tienes cuenta? <span style={{ color: "blue", cursor: "pointer" }} onClick={() => navigate("/")}>Inicia sesión</span>
        </p>
      </form>
    </div>
  );
}