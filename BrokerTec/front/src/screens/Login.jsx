import React from 'react';
import '../screens/Login.css';

const LoginForm = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [rememberMe, setRememberMe] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // handle login logic here
        try {
        const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        //Manejar el inicio de sesión exitoso
        console.log('Login successful:', data);
      } else {
        //Manejar errores de inicio de sesión
        setErrorMessage(data.message || 'Error during login');
      }
    } catch (error) {
      console.error('Error during login:', error);
      setErrorMessage('Server error');
    }

  };
  
  
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

         {errorMessage && <p className="error">{errorMessage}</p>}

        <button type="submit">Iniciar Sesión</button>
        <a href="#">¿Olvidó su contraseña?</a>
        <a href="#">¿No tienes cuenta? Registrate</a>
      </form>
    </div>
  );
}


export default LoginForm;