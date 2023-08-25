import { dataBase } from 'dataBase/dataBase';
import { CreateUserUseCase } from './createUserUseCase';
import { Request, Response } from 'express';

class CreateUserController {
	private async handle(request: Request, response: Response) {
		try {
			const { userName, email, password } = request.body;
			const useAlreadyExists = await dataBase.user.findFirst({
				where: {
					email: email,
				},
			});

			const createUserUseCase = new CreateUserUseCase();

			if (useAlreadyExists) {
				return response.status(400).send({
					message: 'User already exists',
				});
			}

			const userCreated = await createUserUseCase.createUser({
				userName,
				email,
				password,
			});

			return response.status(201).send({
				message: 'User Created',
				user: userCreated,
			});
		} catch (error) {
			return response.status(400).send({
				message: error,
			});
		}
	}

	get HandleFunction() {
		return this.handle;
	}
}

export { CreateUserController };
