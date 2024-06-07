import { Router } from 'express';
import { UserController as controller } from '../controllers/usersingup.controller.js';

const routersing = Router();

// Ruta de registro 
routersing.post('/signup', controller.registerUser);

export default routersing;