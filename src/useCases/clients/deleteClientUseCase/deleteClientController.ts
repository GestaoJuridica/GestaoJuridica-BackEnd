import { NextFunction, Request, Response } from 'express';
import { DeleteClientUseCase } from './deleteClientUseCase';

class DeleteClientController {
	private async deleteUser(request: Request, response: Response) {
		try {
			const { id } = request.params;

			const deleteClientUseCase = new DeleteClientUseCase();
			await deleteClientUseCase.deleteClient(id);

			if (!id) {
				response.status(400).send({
					message: 'Id is required',
					status: 'alert',
				});
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
