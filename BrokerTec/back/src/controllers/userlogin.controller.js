import { createConnection } from '../database/database.js';

const Login = async (req, res) => {
  try {
    const connection = await createConnection();
    const email = req.body.email;
    const password = req.body.password;

    const [rows, fields] = await connection.execute(`SELECT * FROM usuario WHERE correo =?`, [email]);

    if (rows.length === 0) {
      res.status(401).send('Correo o contraseña inválidos.');
      return;
    }

    const user = rows[0];
    if (password!== user.contrasena) {
      res.status(401).send('Correo o contraseña inválidos.');
      return;
    }
      res.send(user);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error interno del servidor');
  }
}

export const LoginController = {
    Login,
}
