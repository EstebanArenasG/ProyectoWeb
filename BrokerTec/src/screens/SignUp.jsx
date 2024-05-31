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
    </div>
  );
}

export default SignupForm;
