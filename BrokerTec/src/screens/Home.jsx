import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

export default function Home() {
  const navigate = useNavigate();
  return (
    <div id='container_home'>
      <h1>Bienvenido a Broker Tec</h1>
      <h2>¿Qué deseas hacer?</h2>
      <div id='container_buttons'>
        <button id='login'>Iniciar Sesión</button>
        <button id='signup' onClick={() => navigate('/signup')}>
          Registrarse
        </button>
      </div>
    </div>
  );
}
