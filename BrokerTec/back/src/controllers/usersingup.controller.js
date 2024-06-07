import { createConnection } from '../database/database.js';

const registerUser = async (req, res) => {
  const connection = await createConnection();
  const { firstName, lastName, email, password, countryId } = req.body;

  // Verificar si el correo electrónico ya existe
  const query = `SELECT * FROM usuario WHERE correo = '${email}'`;
  const result = await connection.execute(query);

  if (result.length > 0) {
    res.status(400).send('El correo electrónico ya existe');
    return;
  }

  //Crear nuevo usuario
  const queryInsert = `INSERT INTO usuario (nombre_usuario, Apellido, id_pais, correo, contrasena, saldo) VALUES (?,?,?,?,?,?)`;
  const resultInsert = await connection.execute(queryInsert, [`${firstName} ${lastName}`, countryId, email, password, 0.00]);

  res.send('Usuario registrado con éxito');
};

export const UserController = {
  registerUser,
}