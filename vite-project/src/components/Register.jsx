import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";
import PageContext from "../context/PageContext";
import styles from "../styles/Register.module.css"

const Register = () => {
  const { save } = useContext(UserContext);
  const { change } = useContext(PageContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await save(name, email, password);
      setEmail("");
      setPassword("");
      setName("");
      setError("");
      console.log("Usuario registrado");
      change(null);
    } catch (error) {
      console.error("Error al registrar el usuario:", error);
      setError("Error al registrar el usuario. Por favor, inténtalo de nuevo.");
    }
  };

  return (
    <section className={styles.section}>
      <h2 className={styles.titler}>Sé parte de la familia Minimal</h2>
      <ul className={styles.contenedor}>
        <li className={styles.contimg}>
          <picture className={styles.contpicside}>
            <img className={styles.picside} src='/src/assets/Logo-register.png' alt="Imagen Formulario de Registro"/>
          </picture>
        </li>
        <li className={styles.contform}>
          <form action="#"  method="post" onSubmit={handleSubmit} className={styles.form}>
          <h3 className={styles.ingresar}>Ingresa tus datos</h3>
          <fieldset className={styles.fieldset}>
            <legend className={styles.label}>Email:</legend>
            <input className={styles.input}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
        
        </fieldset>
        <fieldset className={styles.fieldset}> 
        <legend className={styles.label}>Contraseña:</legend>
          <input className={styles.input}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </fieldset>
        <fieldset className={styles.fieldset}>
        <legend className={styles.label}>Nombre:</legend>
          <input className={styles.input}
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </fieldset>
        <button type="submit" className={styles.boton}>Registrarse</button>
        {error && <p>{error}</p>}
      </form>
      </li>
      </ul>
      <p className={styles.return} onClick={() => change(null)}>Regresar a inicio</p>
    </section>
  );
};

export default Register;