import { Request, Response } from 'express';
import { GetClientsUseCase } from './getClientUseCase';

class GetClientController {
	private async getAllClients(request: Request, response: Response) {
		try {
			const getClientUseCase = new GetClientsUseCase();
			const clients = getClientUseCase.getAllClients();

			if (!clients) {
				response.status(400).send({
					message: 'Clients not found',
					status: 'alert',
				});
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
			const { id } = request.params;

			const getClientUseCase = new GetClientsUseCase();
			const client = getClientUseCase.getClient(id);

			if (!id) {
				response.status(400).send({
					message: 'Id is required',
					status: 'alert',
				});
			}

			if (!client) {
				response.status(400).send({
					message: 'Client not found',
					status: 'alert',
				});
			}

			response.status(200).send({
				status: 'sucess',
				client: client,
			});
		} catch (error) {
			response.status(500).send({
				status: 'error',
				message: 'Internal server error',
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
