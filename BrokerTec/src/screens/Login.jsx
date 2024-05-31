import React from 'react';
import { useNavigate } from 'react-router-dom';


import '../screens/Login.css';

const LoginForm = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle login logic here
  };
  const navigate = useNavigate();
  return (
    <div id='formlogin'>
      <h2>Iniciar sesión</h2>
      <form id='loginform' onSubmit={handleSubmit}>
        <label htmlFor="email">Correo electronico:</label>
        <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />

        <label htmlFor="password">Contraseña:</label>
        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <div>
        <input type="checkbox" id="rememberMe" checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} />
        <label htmlFor="rememberMe">Recuerdame:</label>
        </div>
        <button type="submit"onClick={() => app.use(route)}>Iniciar Sesión</button>
        <a href="#">¿Olvidó su contraseña?</a>
        <a href="#"onClick={() => navigate('/signup')}>¿No tienes cuenta? Registrate</a>
      </form>
    </div>
  );
}


export default LoginForm;