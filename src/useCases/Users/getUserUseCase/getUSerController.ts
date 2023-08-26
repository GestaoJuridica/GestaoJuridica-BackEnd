import { Response, Request } from 'express';
import { GetUserUseCase } from './getUSerUseCase';
import { dataBase } from 'dataBase/dataBase';

class GetUSerController {
	private async getAllUser(request: Request, response: Response) {
		try {
			const getUserUseCase = new GetUserUseCase();

			const users = await getUserUseCase.getAllUsers();

			response.status(200).send({
				users: users,
				status: 'sucess',
			});
		} catch (error) {
			response.status(404).send({
				message: 'User not found',
				error,
				status: 'error',
			});
		}
	}

	private async getUserByEmail(request: Request, response: Response) {
		try {
			const { email } = request.body;

			const userExists = await dataBase.user.findFirst({
				where: {
					email: email,
				},
			});

			if (!userExists) {
				response.status(404).send({
					message: 'User not found',
					status: 'alert',
				});
			}

			const getUserUseCase = new GetUserUseCase();

			const user = await getUserUseCase.getUserByEmail(email);

			response.status(200).send({
				users: user,
				status: 'sucess',
			});
		} catch (error) {
			response.status(500).send({
				message: 'Internal server error',
				status: 'error',
			});
		}
	}

	get SendAllUsers() {
		return this.getAllUser;
	}

	get SendUserByEmail() {
		return this.getUserByEmail;
	}
}

export { GetUSerController };
