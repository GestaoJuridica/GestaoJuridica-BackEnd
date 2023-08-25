import { Router } from 'express';
import { CreateUserController } from 'useCases/createUserUseCase/createUserController';

const createdUser = Router();
const createUserController = new CreateUserController();

createdUser.post('/register', createUserController.HandleFunction);

export { createdUser };
