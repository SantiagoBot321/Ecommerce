import React from "react";

const Header = () => {
  return (
      <header>
        <picture id="contenedor-logo-header">
          <img src={headerlogo} id='logo-header' alt="logo-header" />
        </picture>
        <ul>
          <li>
            <button>Registrarse</button>
          </li>
          <li>
            <button>Login</button>
          </li>
          <li id="contenedor-carrito">
          <button>Mi carrito</button>
          </li>
        </ul>
      </header>
    );
};

export default Header;