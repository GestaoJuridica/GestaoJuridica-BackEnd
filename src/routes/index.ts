import { Router } from 'express';
import { createdUser } from './User/createUserRouter.routes';

const routes = Router();

routes.get('/', (_, res) => {
	res.status(200).send({
		message: 'Gestão Juridica',
	});
});

routes.use(createdUser);

export { routes };
