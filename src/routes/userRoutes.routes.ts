import { Router } from 'express';
import { authenticated } from 'middlewares/ensureAuthenticated';
import { CreateUserController } from 'useCases/Users/createUserUseCase/createUserController';
import { DeleteUserController } from 'useCases/Users/deleteUserUseCase/deleteUserController';
import { GetUSerController } from 'useCases/Users/getUserUseCase/getUSerController';
import { UpdatedUserController } from 'useCases/Users/updatedUserUseCase/updatedUserController';
import { AuthUserController } from 'useCases/authUsers/authUserController';

const userRoutes = Router();
const getUserController = new GetUSerController();
const deleteUserController = new DeleteUserController();
const createUserController = new CreateUserController();
const updatedUserController = new UpdatedUserController();
const authUserController = new AuthUserController();

userRoutes.post('/login', authUserController.login);
userRoutes.post('/register', createUserController.HandleFunction);
userRoutes.get('/listUsers', authenticated, getUserController.SendAllUsers);
userRoutes.get('/listUser', authenticated, getUserController.SendUserByEmail);
userRoutes.delete('/deleteUser', authenticated, deleteUserController.DeleteUser);
userRoutes.put('/updatedUser/:id', authenticated, updatedUserController.updatedUser);

export { userRoutes };
