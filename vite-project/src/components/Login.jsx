import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

useContext
const Login = () => {
  const ingreso = (evento) => {
    evento.preventDefault() 
  }
  return (
    <>
      <form action='#' onSubmit={ingreso}>
        <input type="text" placeholder='usuario' id='usuario' name='usuario'/>
        <input type="text" placeholder='contraseña' id='clave' name='clave'/>
        <button type='submit'>ingresar</button>
      </form>
    </>
  )
}

export default Login;