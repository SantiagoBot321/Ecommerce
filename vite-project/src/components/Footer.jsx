import React from 'react'
import footerStyles from '../styles/Footer.module.css'

const Footer = () => {
  return (
    <footer className={footerStyles.footer}>
      <ul className={footerStyles.footerInfo}>
        <li>
          <picture>
            <img src="/src/assets/Logo-minimal.png" alt="Logo-footer" className={footerStyles.img} />
          </picture>
        </li>
      </ul>
      <ul className={footerStyles.dir}>
        <li>
          <p>Cra. 25a #36d Sur-446 | 355 000 0000</p>
        </li>
      </ul>
      <ul className={footerStyles.footerNav}>
        <li>
          <a href="https://twitter.com/" target="_blank"><span id="logo-twitter" className="fa-brands fa-twitter fa-xl logos-redes-sociales"></span></a>
        </li>
        <li>
        <a href="https://www.instagram.com/?hl=es-la" target="_blank"><span id="logo-instagram" className="fa-brands fa-instagram fa-xl logos-redes-sociales"></span></a>
        </li>
        <li>
        <a href="https://www.youtube.com/" target="_blank"><span id="logo-youtube" className="fa-brands fa-youtube fa-xl logos-redes-sociales"></span></a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer