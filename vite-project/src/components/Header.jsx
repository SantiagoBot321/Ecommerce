import React, { useContext } from "react";
import headerStyle from '../styles/Header.module.css';
import PageContext from "../context/PageContext";
import logo from '../assets/Logo-minimal.png'

const Header = () => {
  const {change} = useContext(PageContext)
  return (
      <header className={headerStyle.cont}>
        <picture onClick={() => change(null)}>
          <img className={headerStyle.logo}src={logo} alt="logo-header" />
        </picture>
        <ul className={headerStyle.nav} >
          <li className={headerStyle.boton} onClick={() => change('save')}>
            <p>Registrarse</p>
          </li>
          <li className={headerStyle.boton} onClick={() => change('login')}> 
            <p>Login</p>
          </li>
          <li className={headerStyle.boton}>
            <p>Mi carrito</p>
          </li>
        </ul>
      </header>
    );
};

export default Header;