import axios from 'axios';
import React from 'react';
import '../screens/SignUp.css';

const SignupForm = () =>  {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [country, setCountry] = React.useState("");
  const [countryId, setCountryId] = React.useState(null);

  const countries = [
    { id: 2, label: "México" },
    { id: 1, label: "Colombia" },
    { id: 5, label: "Argentina" },
    { id: 3, label: "Perú" },
    { id: 4, label: "Chile" },
  ];

   const handleCountryChange = (e) => {
    const selectedCountry = e.target.value;
    const countryObject = countries.find((country) => country.name === selectedCountry);
    setCountry(selectedCountry);
    setCountryId(countryObject.id);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/signup', {
        firstName,
        lastName,
        email,
        password,
        country,
      });
       if (response.status === 200) {
        // Manejar el registro exitoso
        console.log('Registro exitoso:', response.data);
      } else {
        // Manejar errores de registro
        console.error('Error durante el registro:', response.data);
      }
    } catch (error) {
      console.error('Error durante el registro:', error);
    }
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
            <select id="country" value={countryId}onChange={(e) => setCountryId(e.target.value)}
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


