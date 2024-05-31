import express from 'express';
import morgan from 'morgan';
import router from './routes/userlogin.routes';
//Instancia
const app = express();

//Puerto
app.set('port', process.env.PORT || 4000)

//FORMA CORRECTA DE ENRUTAR
app.use(router)

//Mideware
app.use(morgan('dev'));

export default app;
