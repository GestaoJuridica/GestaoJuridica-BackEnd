import { Request, Response } from 'express';
import { DeleUserUseCase } from './deleteUserUseCase';

class DeleteUserController {
	private async deleteUser(request: Request, response: Response) {
		try {
			const { email } = request.body;

			if (email === null) {
				response.status(400).send({
					message: 'Insert data',
					status: 'alert',
				});
			}

			const deleteUserUseCase = new DeleUserUseCase();
			await deleteUserUseCase.deleteUserByEmail(email);

			return response.status(200).send({
				message: 'User Deleted',
				status: 'sucess',
			});
		} catch (error) {
			response.status(500).send({
				message: 'Internal Server Error!',
				status: 'error',
			});
		}
	}

	get DeleteUser() {
		return this.deleteUser;
	}
}

export { DeleteUserController };
