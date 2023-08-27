import { Router } from 'express';
import { userRoutes } from './userRoutes.routes';
import { clientsRouter } from './clientsRouter.routes';

const routes = Router();

routes.get('/', (_, res) => {
	res.status(200).send({
		message: 'Gestão Juridica',
	});
});

routes.use('/user', userRoutes);
routes.use('/client', clientsRouter);

export { routes };
