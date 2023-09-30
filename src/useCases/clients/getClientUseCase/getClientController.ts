import { Request, Response } from 'express';
import { GetClientsUseCase } from './getClientUseCase';
import { Errors } from 'middlewares/errors';

class GetClientController {
	private async getAllClients(request: Request, response: Response) {
		try {
			const getClientUseCase = new GetClientsUseCase();
			const clients = await getClientUseCase.getAllClients();

			if (!clients) {
				Errors({
					message: "Client not found",
					status: "alert",
					statusCode: 400,
					response: response
				})
			}

			response.status(200).send({
				status: 'sucess',
				clients: clients,
			});
		} catch (error) {
			response.status(500).send({
				message: 'Internal server error',
			});
		}
	}

	private async getClient(request: Request, response: Response) {
		try {
			const { id } = request.body;

			const getClientUseCase = new GetClientsUseCase();
			const client = await getClientUseCase.getClient(id);

			if (!id) {
				Errors({
					message: "Id is required",
					status: "alert",
					statusCode: 400,
					response: response
				})
			}

			if (!client) {
				Errors({
					message: "Client not found",
					status: "alert",
					statusCode: 400,
					response: response
				})
			}

			response.status(200).send({
				status: 'sucess',
				client: client,
			});
		} catch (error) {
			response.status(500).send({
				status: 'error',
				message: 'Failed to return costumers',
			});
		}
	}

	get AllClients() {
		return this.getAllClients;
	}

	get Client() {
		return this.getClient;
	}
}

export { GetClientController };
