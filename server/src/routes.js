import { Router } from "express";

import auth from './middwares/auth.js'
import SessionController from "./controllers/SessionController.js";
import HelloController from './controllers/HelloController.js'
import UsersController from './controllers/UsersController.js'

const routes = new Router()

routes.get("/hello", HelloController.index)
routes.post('/users', UsersController.create); // coloquei a rota para criar fora da proteção para poder criar um usuário para testar o Login.
routes.post("/sessions", SessionController.create);

routes.use(auth);

routes.get('/users', UsersController.index);
routes.get('/users/:id', UsersController.show);
routes.delete('/users/:id', UsersController.destroy);

export default routes;