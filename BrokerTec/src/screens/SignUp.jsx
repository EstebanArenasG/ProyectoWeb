// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

export default function SignUp() {
  const navigate = useNavigate();
  return (
    <div id='container_signup'>
      <h1>Estoy en Registrarse</h1>
      <button id='signup' onClick={() => navigate('/home')}>
        ir a home
      </button>
    </div>
  );
}
