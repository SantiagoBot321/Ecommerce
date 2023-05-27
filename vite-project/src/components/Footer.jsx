import React from 'react'
import footerStyles from '../styles/Footer.module.css'

const Footer = () => {
  return (
    <footer className={footerStyles.footer}>
      <ul className={footerStyles.footerInfo}>
        <li>
          <picture>
            <img src="" alt="Logo-footer" />
          </picture>
        </li>
        <li>
          <p>Dirección: </p>
        </li>
        <li>
          <p>Teléfono: </p>
        </li>
      </ul>
      <ul className={footerStyles.footerNav}>
        <li>
          <p>redes</p>
        </li>
        <li>
        <p>redes</p>
        </li>
        <li>
        <p>redes</p>
        </li>
      </ul>
    </footer>
  )
}

export default Footer