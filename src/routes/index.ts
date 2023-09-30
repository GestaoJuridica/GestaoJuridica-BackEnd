import { Router } from 'express';
import { userRoutes } from './userRoutes.routes';
import { clientsRouter } from './clientsRouter.routes';
import { authenticated } from 'middlewares/ensureAuthenticated';
import { photosRouter } from './photosRouter.routes';
import { publicPlaceRouter } from './publicPlaceRouter.router';

const routes = Router();

routes.get('/', (_, res) => {
  res.status(200).send({
    message: 'Gestão Juridica',
  });
});

routes.use('/user', userRoutes);
routes.use('/client', authenticated, clientsRouter);
routes.use('/photos', authenticated, photosRouter)
routes.use('/publicPlace', authenticated, publicPlaceRouter)

export { routes };
