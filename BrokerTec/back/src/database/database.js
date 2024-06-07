import dotenv from 'dotenv';
import mysql from 'mysql2/promise';

//Cargar variables de entorno desde el archivo .env
dotenv.config();

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'brokertecDB',
  port: 3306,
});

const createConnection = () => {
  return connection;
};

export { createConnection };

