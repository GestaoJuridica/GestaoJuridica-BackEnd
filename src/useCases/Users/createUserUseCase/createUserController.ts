import { dataBase } from 'dataBase/dataBase';
import { CreateUserUseCase } from './createUserUseCase';
import { Request, Response } from 'express';

class CreateUserController {
	private async handle(request: Request, response: Response) {
		try {
			const { userName, email, password } = request.body;

			const createUserUseCase = new CreateUserUseCase();
			const useAlreadyExists = await dataBase.user.findFirst({
				where: {
					email: email,
				},
			});

			if (!userName || !email || !password) {
				response.status(400).send({
					status: 'alert',
					message: 'All fields are mandatory',
				});
			}

			if (useAlreadyExists) {
				return response.status(400).send({
					message: 'User already exists',
					status: 'alert',
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
				status: 'sucess',
			});
		} catch (error) {
			return response.status(400).send({
				status: 'error',
				message: error,
			});
		}
	}

	get HandleFunction() {
		return this.handle;
	}
}

export { CreateUserController };
