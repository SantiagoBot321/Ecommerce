import React, { useEffect, useState } from "react";
import UserContext from "../context/UserContext";

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userError, setUserError] = useState(null);
  const apiUrl = "https://6474c4567de100807b1bb4ed.mockapi.io/users";

  const login = (email, password) => {
    return fetch(apiUrl)
      .then((response) => response.json())
      .then((usuarios) => {
        const foundUser = usuarios.find(
          (usuario) => usuario.email === email && usuario.password === password
        );
        console.log(foundUser);
        if (foundUser) {
          setUser(foundUser);
          return true;
        } else {
          setUserError("Credenciales Inválidas");
          return false;
        }
      })
      .catch((error) => {
        setUserError("Error en la petición");
        throw error; 
      });
  };

  const save = (name, email, password) => {
    const newUser = { name, email, password };
    return fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((response) => response.json())
      .then((data) => {
        setUser(data); 
        console.log("Usuario guardado:", data);
      })
      .catch((error) => {
        console.error(error);
        throw error; 
      });
  };

  return (
    <UserContext.Provider value={{ user, setUser, login, save, userError }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;