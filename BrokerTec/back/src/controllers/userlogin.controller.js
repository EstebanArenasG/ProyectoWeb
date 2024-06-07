import { createConnection } from '../database/database.js';
const Login = async (req, res) => {
  const connection = await createConnection();
  const email = req.body.email;
  const password = req.body.password;

    //Consulta para el correo
    const query = `SELECT * FROM users WHERE correo = '${email}'`;
    connection.query(query, (err, results) => {
    if (err) throw err;

    //Si no se encuentra el usuario, devuelve un error
    if (results.length === 0) {
      res.status(401).send('Correo o contraseña inválidos.');
      return;
    }

    //Consultar contraseña
    const user = results[0];
    if (password !== user.contraseña) {
      res.status(401).send('Correo o contraseña inválidos.');
      return;
    }
    // Si las contraseñas coinciden, devuelve el usuario
    res.send(user);
  });
};

export const LoginController = {
    Login,
}
