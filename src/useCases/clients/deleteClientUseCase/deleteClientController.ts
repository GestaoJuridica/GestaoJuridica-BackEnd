import { NextFunction, Request, Response } from 'express';
import { DeleteClientUseCase } from './deleteClientUseCase';
import { Errors } from 'middlewares/errors';

class DeleteClientController {
	private async deleteUser(request: Request, response: Response) {
		try {
			const { id } = request.body;

			const deleteClientUseCase = new DeleteClientUseCase(id);
			await deleteClientUseCase.getDelete();

			if (!id) {
				Errors({
					message: "Id is required",
					status: "alert",
					statusCode: 400,
					response: response
				})
			}

			response.status(200).send({
				message: 'Client deleted',
				status: 'sucess',
			});
		} catch (error) {
			response.status(500).send({
				message: 'Internal Server error',
				status: 'error',
			});
		}
	}

	get DeleteUser() {
		return this.deleteUser;
	}
}

export { DeleteClientController };
