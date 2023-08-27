import { Router } from 'express';
import { UpdatedUserController } from 'useCases/Users/updatedUserUseCase/updatedUserController';
import { CreateClientsController } from 'useCases/clients/createClientUseCase/createClientController';
import { DeleteClientController } from 'useCases/clients/deleteClientUseCase/deleteClientController';
import { GetClientController } from 'useCases/clients/getClientUseCase/getClientController';

const clientsRouter = Router();

const createClientController = new CreateClientsController();
const updatedClientController = new UpdatedUserController();
const getClientController = new GetClientController();
const deleteClientController = new DeleteClientController();

clientsRouter.get('/', getClientController.Client);
clientsRouter.get('/:id', getClientController.AllClients);
clientsRouter.put('/:id', updatedClientController.updatedUser);
clientsRouter.delete('/:id', deleteClientController.DeleteUser);
clientsRouter.post('/createClient', createClientController.createdClient);

export { clientsRouter };
