import { useEffect, useState } from "react";
import UserContext from "../context/UserContext";




const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userError, setUserError] = useState(null);
  const [totalPurchases, setTotalPurchases] = useState(0);
  const apiUrl = "https://647555f4e607ba4797dbc8ab.mockapi.io/users";

  const login = (email, password) => {
    return new Promise((resolve, reject) => {
      fetch(apiUrl)
        .then((response) => response.json())
        .then((usuarios) => {
          const foundUser = usuarios.find(
            (usuario) => usuario.email === email && usuario.password === password
          );
          console.log(foundUser);
          if (foundUser) {
            setUser(foundUser);
            resolve(true);
          } else {
            setUserError("Credenciales Inválidas");
            resolve(false);
          }
        })
        .catch((error) => reject(error));
    });
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
        setUser(data);
        setTotalPurchases(data.totalPurchases); // Actualizar la suma de compras
        console.log("Usuario guardado:", data);
      })
      .catch((error) => console.error(error));
  };
  

  return (
    <UserContext.Provider value={{ user, setUser, login, save, userError, totalPurchases }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;