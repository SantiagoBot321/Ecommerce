import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";
import PageContext from "../context/PageContext";
import styles from "../styles/Login.module.css";

const Login = () => {
  const { login, userError, setUser } = useContext(UserContext);
  const { change } = useContext(PageContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const success = await login(email, password);
      setEmail("");
      setPassword("");
      console.log("Inicio de sesión exitoso");
      if (success) {
        change(null);
      }
    } catch (error) {
      console.error("Error de inicio de sesión:", error);
    }
  };

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Inicia sesión</h2>
      <ul className={styles.contenedor}>
        <li className={styles.contimg}>
          <picture>
            <img
              className={styles.picside}
              src="/src/assets/Logo-register.png"
              alt="Imagen Formulario de Login"
            />
          </picture>
        </li>
        <li className={styles.contform}>
          <form action="#" method="post" onSubmit={handleSubmit} className={styles.form}>
            <fieldset className={styles.fieldset}>
            <legend className={styles.label}> Email:</legend>
              <input
                className={styles.input}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </fieldset>
            <fieldset className={styles.fieldset}>
            <legend className={styles.label}>Password:</legend>
              <input
                className={styles.input}
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </fieldset>
            <button type="submit" className={styles.boton}>Iniciar sesión</button>
            {userError && <p>{userError}</p>}
          </form>
        </li>
      </ul>
      <p className={styles.return} onClick={() => change(null)}>Regresar a inicio</p>
    </section>
  );
};

export default Login;