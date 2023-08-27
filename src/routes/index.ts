import { Router } from 'express';
import { userRoutes } from './User/userRoutes.routes';

const routes = Router();

routes.get('/', (_, res) => {
	res.status(200).send({
		message: 'Gestão Juridica',
	});
});

routes.use('/user', userRoutes);

export { routes };
