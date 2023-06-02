import React, { useContext } from "react";
import headerStyle from '../styles/Header.module.css';
import PageContext from "../context/PageContext";
import UserContext from "../context/UserContext";
import logo from '../assets/Logo-minimal.png';
import CartContext from "../context/CartContext";

const Header = () => {
  const { change } = useContext(PageContext);
  const { user, setUser } = useContext(UserContext);
  const { cartItems } = useContext(CartContext);

  const handleLogout = () => {
    setUser(null); 
  };

  const cartItemCount = cartItems ? cartItems.length : 0;

  return (
    <header className={headerStyle.cont}>
      <picture onClick={() => change(null)}>
        <img className={headerStyle.logo} src={logo} alt="logo-header" />
      </picture>
      <ul className={headerStyle.nav}>
        {!user ? (
          <>
            <li className={headerStyle.boton} onClick={() => change('save')}>
              <p>Registrarse</p>
            </li>
            <li className={headerStyle.boton} onClick={() => change('login')}>
              <p>Login</p>
            </li>
          </>
        ) : (
          <>
            <li className={headerStyle.boton} onClick={() => change('Mi carrito')}>
              <p className={headerStyle.carrito}><span className="fa-solid fa-cart-shopping"></span>({cartItemCount})</p>
            </li>
            <li className={headerStyle.boton} onClick={handleLogout}>
              <p>Cerrar sesión</p>
            </li>
          </>
        )}
      </ul>
    </header>
  );
};

export default Header;