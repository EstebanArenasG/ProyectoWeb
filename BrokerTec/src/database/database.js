import mysql from 'mysql2/promise';

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'brockertecDB',
  port: 3306,
});

const createConnection = () => {
  return connection;
};

export { createConnection };
