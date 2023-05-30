import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";
import PageContext from "../context/PageContext";

const Login = () => {
  const { login, userError } = useContext(UserContext);
  const {change} = useContext(PageContext)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const access = login(email, password);
    setEmail("");
    setPassword("");
    console.log("access", access);
    if (access) {change(null)}
  };

  return (
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
      {userError ? <p>{userError}</p> : null}
    </form>
  );
};

export default Login;