import React, { useContext } from 'react'
import UserContext from '../context/UserContext'
import loginStyles from '../styles/Login.module.css'

useContext
const Login = () => {
  const ingreso = (evento) => {
    evento.preventDefault() 
  }
  return (
    <>
      <form className={loginStyles.form} action='#' onSubmit={ingreso}>
        <fieldset>
          <input type="text" placeholder='usuario' id='usuario' name='usuario'/>
        </fieldset>
        <fieldset>
          <input type="text" placeholder='contraseña' id='clave' name='clave'/>
          </fieldset>
        <fieldset>
          <button type='submit'>ingresar</button>
        </fieldset>
      </form>
    </>
  )
}

export default Login;