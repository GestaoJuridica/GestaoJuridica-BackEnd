import { Router } from 'express';
import { CreateUserController } from 'useCases/Users/createUserUseCase/createUserController';
import { DeleteUserController } from 'useCases/Users/deleteUserUseCase/deleteUserController';
import { GetUSerController } from 'useCases/Users/getUserUseCase/getUSerController';

const userRoutes = Router();
const getUserController = new GetUSerController();
const deleteUserController = new DeleteUserController();
const createUserController = new CreateUserController();

userRoutes.post('/register', createUserController.HandleFunction);
userRoutes.get('/listUsers', getUserController.SendAllUsers);
userRoutes.get('/listUser', getUserController.SendUserByEmail);
userRoutes.delete('/deleteUser', deleteUserController.DeleteUser);

export { userRoutes };
