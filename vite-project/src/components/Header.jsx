import React, { useContext } from "react";
import '../styles/Header.module.css';
import PageContext from "../context/PageContext";


const Header = () => {
  const {change} = useContext(PageContext)
  return (
      <header>
        <picture onClick={() => change(null)}>
          <img src="" alt="logo-header" />
        </picture>
        <ul>
          <li>
            Registrarse
          </li>
          <li onClick={() => change('login')}> 
            Login
          </li>
          <li>
            Mi carrito
          </li>
        </ul>
      </header>
    );
};

export default Header;