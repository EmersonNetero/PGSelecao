import { Router } from "express";

import HelloController from './controllers/HelloController.js'
import UsersController from './controllers/UsersController.js'

const routes = new Router()

routes.get("/hello", HelloController.index)

routes.get('/users', UsersController.index);
routes.get('/users/:id', UsersController.show);
routes.post('/users', UsersController.create);
routes.delete('/users/:id', UsersController.destroy);

export default routes;