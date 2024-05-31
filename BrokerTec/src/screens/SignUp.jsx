import React from 'react';
import '../screens/SignUp.css';

const SignupForm = () =>  {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [country, setCountry] = React.useState("");

  const countries = [
    { value: "MX", label: "México" },
    { value: "CO", label: "Colombia" },
    { value: "AR", label: "Argentina" },
    { value: "PE", label: "Perú" },
    { value: "CH", label: "Chile" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
<<<<<<< HEAD
    <div id='formsignup'>

      <h2>Registrarse</h2>
       <form id='singupform' onSubmit={handleSubmit}>
        <div1>
          <div11>
            <label htmlFor="firstName">Nombre:</label><br />
            <input type="text" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
          </div11>
          <div12>
            <label htmlFor="lastName">Apellido:</label><br />
            <input type="text" id="lastName" value={lastName}  onChange={(e) => setLastName(e.target.value)} />
          </div12>
        </div1>

        <div2>
          <div21>
          <label htmlFor="email">Correo electrónico:</label><br />
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div21>
          <div22>
            <select id="country" value={country}onChange={(e) => setCountry(e.target.value)}
              >
              <option value="">Selecciona un país</option>
              {countries.map((c) => (
                <option key={c.value} value={c.value}>{c.label}
              </option>
          ))}
            </select>
          </div22>
        </div2>        
        <div>            
          <label htmlFor="password">Contraseña:</label><br />
          <input type="password" id="password" value={password}  onChange={(e) => setPassword(e.target.value)}/>
        </div>

        <button type="submit">Crear Cuenta</button>
      </form>    
=======
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
>>>>>>> origin/main
    </div>
  );
}

export default SignupForm;
