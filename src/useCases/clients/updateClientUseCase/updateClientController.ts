import { Request, Response } from 'express';
import { UpdateClientUseCase } from './updateClientUseCase';

class UpdatedClientController {
	private async updateClient(request: Request, response: Response) {
		try {
			const { id } = request.params;

			const { name, cpf, cellNumber, logadouro, photos } = request.body;

			if (!id) {
				response.status(400).send({
					message: 'Id is required',
					status: 'alert',
				});
			}

			if (!name || !cpf || !cellNumber || !logadouro || !photos) {
				response.status(400).send({
					message: 'All fields are required',
					status: 'alert',
				});
			}

			const updateClientUseCase = new UpdateClientUseCase();
			await updateClientUseCase.updateClient(
				id,
				name,
				cpf,
				cellNumber,
				logadouro,
				photos
			);

			response.status(200).send({
				message: 'Cliet updated',
				status: 'sucess',
			});
		} catch (error) {
			response.status(500).send({
				message: 'Internal Server Error',
				status: 'error',
			});
		}
	}

	get UpdateClient() {
		return this.updateClient;
	}
}

export { UpdatedClientController };
