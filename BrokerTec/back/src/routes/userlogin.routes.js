import { Router } from 'express';
import { LoginController as controller } from '../controllers/userlogin.controller.js';

const routerlog = Router();

//Ruta de inicio de sesión
routerlog.post('/login', controller.Login);

export default routerlog;
