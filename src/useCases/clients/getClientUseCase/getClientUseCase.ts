import { Client } from '@prisma/client/runtime/library';
import { dataBase } from 'dataBase/dataBase';
import { getClientsUseCaseProps } from 'interfaces/useCases/clients/getClientUseCase';

class GetClientsUseCase implements getClientsUseCaseProps {
	public async getAllClients(): Promise<unknown[]> {
		const allClients = await dataBase.clients.findMany({
			select: {
				id: false,
				userId: false,
				user: true,
				cellNumber: true,
				cpf: true,
				logadouro: true,
				name: true,
				photos: true,
			},
		});

		return allClients;
	}

	public async getClient(id: string): Promise<unknown> {
		const getClient = await dataBase.clients.findFirst({
			where: {
				id: id,
			},
			select: {
				id: false,
				userId: false,
				user: true,
				cellNumber: true,
				cpf: true,
				logadouro: true,
				name: true,
				photos: true,
			},
		});

		return getClient;
	}
}

export { GetClientsUseCase };
