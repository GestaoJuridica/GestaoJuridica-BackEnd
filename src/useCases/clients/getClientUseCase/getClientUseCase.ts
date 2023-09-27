import { dataBase } from 'dataBase/dataBase';
import { getClientsUseCaseProps } from 'interfaces/useCases/clients/getClientUseCase';

class GetClientsUseCase implements getClientsUseCaseProps {
	public async getAllClients(): Promise<unknown[]> {
		const allClients = await dataBase.clients.findMany({
			select: {
				id: false,
				cellNumber: true,
				cpf: true,
				logadouro: true,
				name: true,
				photo: true
			},
		});

		return allClients;
	}

	public async getClient(id: string): Promise<unknown> {
		const client = await dataBase.clients.findFirst({
			where: {
				id: id
			},
			include: {
				photo: true,
			}
		})

		return { client: client };
	}
}

export { GetClientsUseCase };
