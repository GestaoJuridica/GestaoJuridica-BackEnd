import { Router } from 'express';
import { userRoutes } from './userRoutes.routes';
import { clientsRouter } from './clientsRouter.routes';
import { authenticated } from 'middlewares/ensureAuthenticated';

const routes = Router();

routes.get('/', (_, res) => {
	res.status(200).send({
		message: 'Gestão Juridica',
	});
});

routes.use('/user', userRoutes);
routes.use('/client', authenticated , clientsRouter);

export { routes };
