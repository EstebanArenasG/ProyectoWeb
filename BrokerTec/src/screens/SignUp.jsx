// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

export default function SignUp() {
  const navigate = useNavigate();
  return (
    <div id='container_signup'>
      <div id='container_header'>
        <h1>Registrarse</h1>
        <img id='foto_perfil' src='src\assets\foto_perfil.jpg' alt='foto de perfil' />
      </div>
      <div id='container_formulario'>
        <label>Nombre:</label>
        <input type='text' id='nombre' name='nombre' placeholder='Ingrese su nombre' />
        <label>Apellidos:</label>
        <input type='text' id='apellido' name='apellido' placeholder='Ingrese sus apellidos' />
      </div>
      <div id='container_formulario'>
        <label>Correo electrónico:</label>
        <input type='email' id='email' name='email' placeholder='Ingrese su email' />
      </div>
      <div id='container_formulario'>
        <label>Celular:</label>
        <input type='tel' id='tel' name='tel' placeholder='Ingrese su número de celular' />
      </div>
      <div id='container_formulario'>
        <label>Dirección de Residencia:</label>
        <input type='search' id='search' name='search' placeholder='Ingrese su dirección de residencia' />
      </div>
      <div id='container_formulario'>
        <label>País:</label>
        <input type='text' id='pais' name='pais' placeholder='Ingrese su país de residencia' />
        <label>Ciudad:</label>
        <input type='text' id='ciudad' name='ciudad' placeholder='Ingrese su ciudad de residencia' />
      </div>
      <div id='container_formulario'>
        <label>Codigo Postal:</label>
        <input type='tel' id='postal' name='postal' placeholder='Ingrese su codigo postal' />
      </div>
      <div id='container_formulario'>
        <label>Contraseña:</label>
        <input type='password' id='contraseña' name='contraseña' placeholder='Ingrese su Contraseña' />
      </div>
      <div id='container_formulario'>
        <button id='cancelar' onClick={() => navigate('/')}>
          Cancelar
        </button>
        <button id='aceptar'>Aceptar</button>
      </div>
    </div>
  );
}
