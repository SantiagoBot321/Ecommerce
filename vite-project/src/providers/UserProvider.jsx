import { useEffect, useState } from "react";
import UserContext from "../context/UserContext";

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userError, setUserError] = useState(null);
  const apiUrl = "https://6474c4567de100807b1bb4ed.mockapi.io/users";

  const login = (email, password) => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((usuarios) => {
        const foundUser = usuarios.find(
          (usuario) => usuario.email === email && usuario.password === password
        );
        console.log(foundUser);
        if (foundUser) {
          setUser(foundUser);
          return foundUser;
        } else {
            setUserError("Credenciales Invalidas");
            return false;
        }
      })
      .catch((error) => error);
  };

  const save = (email, password) => {
    const newUser = { email, password };
    fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((response) => response.json())
      .then((data) => {
        setUser(data); // Guardar el usuario devuelto por la API en el estado
        console.log("Usuario guardado:", data);
      })
      .catch((error) => console.error(error));
  };

  return (
    <UserContext.Provider value={{ user, setUser, login, save, userError }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;