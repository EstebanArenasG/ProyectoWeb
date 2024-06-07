// import express from 'express';
// import morgan from 'morgan';
// import router from './routes/userlogin.routes';
// //Instancia
// const app = express();

// //Puerto
// app.set('port', process.env.PORT || 4000)

// //FORMA CORRECTA DE ENRUTAR
// app.use(router)

// //Mideware
// app.use(morgan('dev'));

// export default app;

import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import morgan from 'morgan';
import router from './routes/userlogin.routes.js';

// // Cargar variables de entorno desde el archivo .env
// dotenv.config();


const app = express();

//Puerto
app.set('port', process.env.PORT || 5000)

// Middleware
app.use(morgan('dev'));

app.use(cors());

app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Usar las rutas de autenticación
app.use(router);



export default app;

