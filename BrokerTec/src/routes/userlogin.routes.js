import { Router } from 'express';
import { LoginController as controller } from '../controllers/userlogin.controller';

const router = Router();

router.get('/user/login', controller.Login)

export default router;

