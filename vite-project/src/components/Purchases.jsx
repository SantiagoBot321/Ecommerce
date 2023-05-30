import React, { useContext } from "react";
import UserContext from "../context/UserContext";

const Purchases = () => {
  const { totalPurchases } = useContext(UserContext);

  return (
    <div>
      <h2>Te damos la bienvenida</h2>  
      <h2>Total de compras: {totalPurchases}</h2>
      {/* Aquí puedes mostrar el resto de la información relacionada con las compras */}
    </div>
  );
};

export default Purchases;
