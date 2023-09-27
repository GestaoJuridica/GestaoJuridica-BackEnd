import { Router } from 'express';
import { CreateClientsController } from 'useCases/clients/createClientUseCase/createClientController';
import { DeleteClientController } from 'useCases/clients/deleteClientUseCase/deleteClientController';
import { GetClientController } from 'useCases/clients/getClientUseCase/getClientController';
import { SearchClientsController } from 'useCases/clients/searchClients/searchClientsController';
import { UpdatedClientController } from 'useCases/clients/updateClientUseCase/updateClientController';


const clientsRouter = Router();

const createClientController = new CreateClientsController();
const updatedClientController = new UpdatedClientController();
const getClientController = new GetClientController();
const deleteClientController = new DeleteClientController();
const searhClientController = new SearchClientsController();

clientsRouter.get('/', getClientController.Client);
clientsRouter.get('/allClients', getClientController.AllClients);
clientsRouter.get('/search', searhClientController.search);
clientsRouter.post('/createClient', createClientController.createdClient);
clientsRouter.put('/updateClient', updatedClientController.UpdateClient);
clientsRouter.delete('/deleteClient', deleteClientController.DeleteUser);

export { clientsRouter };
