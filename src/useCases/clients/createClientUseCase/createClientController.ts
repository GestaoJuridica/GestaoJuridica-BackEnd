import { Request, Response } from 'express';
import { CreateClientUseCase } from './createClientUseCase';

class CreateClientsController {
	private async createdClients(request: Request, response: Response) {
		try {
			const { userId } = request.params;
			const { cpf, name, cellNumber, logadouro, photos } = request.body;

			if (!userId) {
				response.status(400).send({
					message: 'UserID is required',
					status: 'alert',
				});
			}

			if (!cpf || !name || !cellNumber || !logadouro || !photos) {
				response.status(400).send({
					message: 'All fields are required',
					status: 'alert',
				});
			}

			const createClientsUseCase = new CreateClientUseCase();
			const client = await createClientsUseCase.createClients(
				userId,
				cpf,
				name,
				cellNumber,
				logadouro,
				photos
			);

			response.status(201).send({
				message: 'Client created with sucess',
				status: 'sucess',
				client: client,
			});
		} catch (error) {
			response.status(500).send({
				message: `Internal Server Error, ${error}`,
				status: 'error',
			});
		}
	}

	get createdClient() {
		return this.createdClients;
	}
}

export { CreateClientsController };
