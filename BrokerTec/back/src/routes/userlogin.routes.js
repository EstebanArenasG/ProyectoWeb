import { Router } from 'express';
import { LoginController as controller } from '../controllers/userlogin.controller.js';

const router = Router();

//Ruta de inicio de sesión
router.post('/login', controller.Login);

export default router;
