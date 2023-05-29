import React from 'react'
import styles from '../styles/Picture.module.css'

const Picture = () => {
  return (
    <section>
        <h2 className={styles.texto}> Lifestyle | Culture | Good vibes</h2>
        <ul className={styles.cont}>
          <li className={styles.contImg}>
            <picture className={styles.picture}>
              <img src='/src/assets/picture-1.png' alt="imagen con producto"  className={styles.img}/>
            </picture>
          </li>
          <li className={styles.contImg}>
            <picture className={styles.picture}>
              <img src='/src/assets/picture-2.png' alt="imagen con producto" className={styles.img} />
            </picture>
          </li>
          <li className={styles.contImg}>
            <picture className={styles.picture}>
              <img src='/src/assets/picture-3.png' alt="imagen con producto" className={styles.img} />
            </picture>
          </li>
        </ul>
      </section>
  )
}

export default Picture