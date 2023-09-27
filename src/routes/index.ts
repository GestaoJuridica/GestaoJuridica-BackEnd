import { Router } from 'express';
import { userRoutes } from './userRoutes.routes';
import { clientsRouter } from './clientsRouter.routes';
import { authenticated } from 'middlewares/ensureAuthenticated';
import { photosRouter } from './photosRouter.routes';
const routes = Router();

routes.get('/', (_, res) => {
	res.status(200).send({
		message: 'Gestão Juridica',
	});
});
routes.use('/user', userRoutes);
routes.use('/client', authenticated, clientsRouter);
routes.use('/photos', authenticated, photosRouter)

export { routes };
