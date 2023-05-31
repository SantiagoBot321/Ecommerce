import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";
import PageContext from "../context/PageContext";

const Login = () => {
  const { login, userError, setUser } = useContext(UserContext);
  const { change } = useContext(PageContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      setEmail("");
      setPassword("");
      console.log("Inicio de sesión exitoso");
      change(null);
    } catch (error) {
      console.error("Error de inicio de sesión:", error);
    }
  };

  return (
    <section>
      <h2>Inicia sesión</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button type="submit">Iniciar sesión</button>
        {userError && <p>{userError}</p>}
      </form>
    </section>
  );
};

export default Login;